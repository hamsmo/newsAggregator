import React from "react";

export default function NewsPageCopy() {
  return <div>NewsPage copy</div>;
}

// {
/* <input
        type="text"
        placeholder="Search articles..."
        value={keyword}
        onChange={handleSearch}
      /> */
// }

// const [selectedCategory, setSelectedCategory] = useState<string>("");
// const [selectedSource, setSelectedSource] = useState<string>("");
// const [selectedAuthor, setSelectedAuthor] = useState<string>("");

// const handleCategory = (category: String) => {
//   const filtered = data.filter(
//     (article: Article) => article.category === category
//   );
//   setSelectedCategory(category);
//   console.log(filtered, "---");
//   console.log(category, "category");
//   // setFilteredArticles(filtered);
// };

// const handleSource = (source: String) => {
//   const filtered = data.filter(
//     (article: Article) => article.source === source
//   );
//   setSelectedSource(source);
//   console.log(filtered, "---");
//   console.log(source, "source");
//   // setFilteredArticles(filtered);
// };

// const handleAuthor = (author: String) => {
//   const filtered = data.filter(
//     (article: Article) => article.author === author
//   );
//   setSelectedAuthor(author);
//   console.log(filtered, "---");
//   console.log(author, "author");
//   // setFilteredArticles(filtered);
// };

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const NEWS_API_KEY = 'YOUR_NEWS_API_KEY'; // Replace with your NewsAPI key
// const GUARDIAN_API_KEY = 'YOUR_GUARDIAN_API_KEY'; // Replace with your Guardian API key

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredArticles, setFilteredArticles] = useState([]);

//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   const fetchArticles = async () => {
//     try {
//       // Fetch articles from NewsAPI
//       const newsResponse = await axios.get(
//         `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${NEWS_API_KEY}`
//       );

//       // Fetch articles from The Guardian API
//       const guardianResponse = await axios.get(
//         `https://content.guardianapis.com/search?q=${searchTerm}&api-key=${GUARDIAN_API_KEY}`
//       );

//       // Combine articles from both sources
//       const allArticles = [
//         ...newsResponse.data.articles,
//         ...guardianResponse.data.response.results,
//       ];

//       setArticles(allArticles);
//       setFilteredArticles(allArticles);
//     } catch (error) {
//       console.error('Error fetching articles:', error);
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleFilter = (category) => {
//     const filtered = articles.filter(
//       (article) => article.category === category
//     );
//     setFilteredArticles(filtered);
//   };

//   return (
//     <div>
//       <h1>News Aggregator</h1>
//       <input
//         type="text"
//         placeholder="Search articles..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <button onClick={() => handleFilter('business')}>Business</button>
//       <button onClick={() => handleFilter('technology')}>Technology</button>
//       <button onClick={() => handleFilter('sports')}>Sports</button>
//       <div>
//         {filteredArticles.map((article, index) => (
//           <div key={index}>
//             <h2>{article.title}</h2>
//             <p>{article.description}</p>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               Read More
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
