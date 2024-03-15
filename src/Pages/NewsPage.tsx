import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  FormControl,
  CircularProgress,
  Button,
} from "@mui/material";

import News from "../Api";

import NewsCard from "../Components/NewsCard/NewsCard";
import SelectMenu from "../Components/SelectMenu/SelectMenu";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

interface Article {
  title: string;
  category: string;
  url: string;
  publishedAt: string;
  source: any;
  author: string;
}

const NewsPage = () => {
  const [data, setData] = useState<Article[]>([]);
  const [filteredData, setFilteredData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const [keyword, setKeyword] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [sources, setSources] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);

  const [filterObject, setFilterObject] = useState<{
    category: string;
    source: string;
    author: string;
    date: string;
  }>({
    category: "",
    source: "",
    author: "",
    date: "",
  });

  const getFormattedDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const newsRes = await News.getNews(keyword);
      const guardiansRes = await News.getGuardian(keyword);
      const nyTimesRes = await News.getNewyorkTimes(keyword);

      const articles: Article[] = [
        ...newsRes.data.articles.map((article: any) => ({
          ...article,
          source: article.source.name || "",
        })),

        ...guardiansRes.data.response.results.map((article: any) => ({
          title: article.webTitle,
          category: article.sectionName,
          url: article.webUrl,
          publishedAt: article.webPublicationDate,
          source: "",
          author: article.fields?.byline,
        })),

        ...nyTimesRes.data.response.docs.map((article: any) => ({
          title: article.headline.main,
          category: article.section_name,
          url: article.web_url,
          publishedAt: getFormattedDate(article.pub_date),
          source: article.source,
          author: `${article.byline.person[0]?.firstname} ${article.byline.person[0]?.lastname}`,
        })),
      ];

      setData(articles);
      setFilteredData(articles);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data from APIs", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const filteredArticles = data.filter((item) => {
      const categoryMatch =
        !filterObject.category || item.category === filterObject.category;

      const sourceMatch =
        !filterObject.source || item.source === filterObject.source;

      const authorMatch =
        !filterObject.author || item.author === filterObject.author;

      const dateMatch =
        !filterObject.date || item.publishedAt === filterObject.date;

      return categoryMatch && sourceMatch && authorMatch && dateMatch;
    });

    setFilteredData(filteredArticles);
  }, [filterObject]);

  useEffect(() => {
    if (data.length !== 0) {
      const categories = data
        .map((article: any) => article.category)
        .filter((category) => category);
      setCategories(Array.from(new Set(categories)));

      const sources = data
        .map((article: any) => article.source)
        .filter((source) => source);
      setSources(Array.from(new Set(sources)));

      const authors = data
        .map((article: any) => article.author)
        .filter((author) => author);
      setAuthors(Array.from(new Set(authors)));
    }
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>News Aggregator</h1>

      {/* Search using keyword */}
      <Grid container spacing={1} alignItems="center" mb={1}>
        <Grid item xs={9} md={10}>
          <FormControl fullWidth>
            <TextField
              label="Search articles"
              variant="outlined"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={1} md={2}>
          <Button onClick={() => fetchData()} variant="contained">
            Search
          </Button>
        </Grid>
      </Grid>

      {/* Filters */}
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} lg={3}>
          <SelectMenu
            label="Select category"
            options={categories}
            selectOption={filterObject.category}
            onChange={(v) =>
              setFilterObject((oldV) => ({
                ...oldV,
                category: v,
              }))
            }
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <SelectMenu
            label="Select source"
            options={sources}
            selectOption={filterObject.source}
            onChange={(v) =>
              setFilterObject((oldV) => ({
                ...oldV,
                source: v,
              }))
            }
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <SelectMenu
            label="Select author"
            options={authors}
            selectOption={filterObject.author}
            onChange={(v) =>
              setFilterObject((oldV) => ({
                ...oldV,
                author: v,
              }))
            }
          />
        </Grid>

        {/* <Grid item xs={12} md={6} lg={3}>
          <DatePicker
            selected={filterObject.date}
            onChange={(v) =>
              setFilterObject((oldV) => ({
                ...oldV,
                date: getFormattedDate(v),
              }))
            }
            placeholderText="Select date"
          />
        </Grid> */}
      </Grid>

      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        filteredData.map((response: Article, index) => (
          <div key={index}>
            <NewsCard item={response} />
          </div>
        ))
      )}
    </div>
  );
};

export default NewsPage;
