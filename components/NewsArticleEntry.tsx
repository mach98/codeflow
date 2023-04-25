import { INewsArticle } from "@/models/NewsArticle";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";

interface NewsArticleEntryProps {
  newsArticle: INewsArticle;
}

export const NewsArticleEntry = ({
  newsArticle: { title, description, url, urlToImage },
}: NewsArticleEntryProps) => {
  const validImageUrl =
    urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")
      ? urlToImage
      : undefined;
  console.log(validImageUrl);
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea href={url}>
        <CardMedia sx={{ height: 140 }} image={validImageUrl} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsArticleEntry;
