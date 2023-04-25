import { INewsArticle } from "@/models/NewsArticle";
import React from "react";
import NewsArticleEntry from "./NewsArticleEntry";
import Grid from "@mui/material/Grid";

interface NewsArticlesGridProps {
  newsArticles: INewsArticle[];
}

const NewsArticlesGrid = ({ newsArticles }: NewsArticlesGridProps) => {
  return (
    <Grid container spacing={3}>
      {newsArticles.map((newsArticle) => (
        <Grid item xs={4} key={newsArticle.url}>
          <NewsArticleEntry newsArticle={newsArticle} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsArticlesGrid;
