import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
const NewsBoard = ({ category }) => {
  const [articles, setarticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=51e624b08abf4a5db7b9f5b0d1c72695`
    )
      .then((res) => res.json())
      .then((data) => setarticles(data.articles));
  }, [category]);

  console.log(category);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
