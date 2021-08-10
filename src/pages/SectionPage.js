import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticlesBySection } from "../api/ArticlesAPI";
import ArticleList from "../components/ArticleList/ArticleList";

const SectionPage = () => {

  const {sectionID} = useParams()
  console.log(sectionID)
  
  const [ articles, setArticles ] = useState([]);

  useEffect( () => {
    const fetchArticlesAsync = async () => {
      try {
        const articlesJson = await fetchArticlesBySection(sectionID);
        setArticles(articlesJson);
      } catch (e) {
        console.error('error fetching articles: ', e);
      }
    };

    if (!articles.length) {
      fetchArticlesAsync();
      }
    }, [articles]
  )

  return(
    <div>
      <h2>Section Page Results {sectionID}</h2>
      <ArticleList articles={articles} />
    </div>
  )

}

export default SectionPage;