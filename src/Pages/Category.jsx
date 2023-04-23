import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Category = () => {
  const CategoryNews = useLoaderData();
  return (
    <div>
      <h2>Tis is the category section {CategoryNews.length}</h2>
      {CategoryNews.map((news) => (
        <NewsCard news={news} key={news._id} />
      ))}
    </div>
  );
};

export default Category;
