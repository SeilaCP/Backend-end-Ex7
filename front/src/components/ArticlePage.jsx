import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../services/api";

export default function ArticlePage() {
  const { id } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchArticle();
  }, []);


  const fetchArticle = async () => {
  try {
    setLoading(true);
    const found = await getArticleById(id);

    if (found && Array.isArray(found) && found.length > 0) {
      setArticle(found[0]);
      setError("");
    } else if (found && !Array.isArray(found)) {
      setArticle(found);
      setError("");
    } else {
      setArticle(null);
      setError("Article not found.");
    }
  } catch (err) {
    setError("Failed to fetch article.");
  } finally {
    setLoading(false);
  }
};
  if (article) {
    console.log("article title:", article);
  }

  if (loading) return <div>Loading article...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!article) return <div>No article found.</div>;

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <div>
        <strong>Journalist:</strong> {article.journalistid}
      </div>
      <div>
        <strong>Category:</strong> {article.category}
      </div>
    </div>
  );
}
