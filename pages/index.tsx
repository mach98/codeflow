import Image from "next/image";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { INewsArticle, INewsArticleResponse } from "@/models/NewsArticle";
import NewsArticleEntry from "@/components/NewsArticleEntry";
import NewsArticlesGrid from "@/components/NewsArticlesGrid";

interface BreakingNewsPageProps {
  newsArticles: INewsArticle[];
}

export const getServerSideProps: GetServerSideProps<
  BreakingNewsPageProps
> = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" +
      process.env.NEWS_API_KEY
  );
  const newsResponse: INewsArticleResponse = await res.json();
  console.log(newsResponse.articles);
  return {
    props: {
      newsArticles: newsResponse.articles,
    },
  };
};
export default function Home({ newsArticles }: BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title key="title">Breaking News</title>
      </Head>
      <main>
        <h1>Breaking News</h1>
        <NewsArticlesGrid newsArticles={newsArticles} />
      </main>
    </>
  );
}
