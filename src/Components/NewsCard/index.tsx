import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Article } from "../../Interfaces";

interface Item {
  item: Article;
}

const NewsCard = ({ item }: Item) => {
  const getFormattedDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <Box my={4} gap={4} p={2} sx={{ border: "2px solid #ccc" }}>
      <>
        <Typography variant="h5">{item.title}</Typography>
        <Typography variant="h6">Category: {item.category}</Typography>
        <Typography variant="h6">
          Source: {item.source.name ? item.source.name || "" : item.source}
        </Typography>
        <Typography variant="h6">Author: {item.author}</Typography>
        <Typography variant="h6">
          Published at: {getFormattedDate(item.publishedAt)}
        </Typography>
      </>
    </Box>
  );
};

export default NewsCard;
