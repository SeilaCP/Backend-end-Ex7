import express, { json } from "express";
import cors from "cors";
import articleRouter from "./routes/articleRoutes.js";
import {getArticlesWithJournalists, getAllArticlesWithJournalistsall, getArticlesWithcategory} from "./controllers/articleController.js";

const app = express();


// Enable CORS for all routes and origins
app.use(cors());

// Enable json serialization
app.use(json());

app.use("/api/articles", articleRouter);
app.get("/api/journalists/:id/articles", getArticlesWithJournalists);
app.get("/api/journalists/articles", getAllArticlesWithJournalistsall);
app.get("/api/category/:id/articles", getArticlesWithcategory);
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});