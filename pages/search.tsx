import { INewsArticle } from "@/models/NewsArticle";
import React, { useState } from "react";

const SearchNewsPage = () => {
  const [searchresults, setSearchResults] = useState<INewsArticle[] | null>(
    null
  );
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);

  return (
    <main>
      <h1>Search News</h1>
    </main>
  );
};

export default SearchNewsPage;
