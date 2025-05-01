import React, { useEffect } from 'react'
import useSWR from "swr";
import { getWikiSearchResults } from "../api/wikiApi";
import Item from "./Item.jsx";

const Result = ({ searchTerm }) => {

  const { isLoading, data, error } = useSWR(searchTerm ? searchTerm : null, getWikiSearchResults);

  let content;
  if (isLoading) return <div>Loading...</div>
  else if (error) return <div>Failed to load</div>;
  else if (data?.query?.pages) {
    content = (
        <ul>
            {Object.values(data.query.pages).map((page) => (
                <Item key={page.pageid} result={page} />
            ))}
        </ul>
    )
  }
  return content;
};

export default Result;
