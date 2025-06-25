//
//  This repository shall:
//  - Connect to the database (using the pool provided by the database.js)
// -  Perfrom the SQL querries to implement the bellow API
//
import { pool } from '../utils/database.js';

// Get all articles
export async function getArticles() {
    // TODO
    try {
        const [rows] = await pool.query('SELECT * FROM articles');
        return rows;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
    }
}

// Get one article by ID
export async function getArticleById(id) {
    // TODO
    try {
        const [rows] = await pool.query('SELECT * FROM articles WHERE id_a = ?', [id] );
        return rows;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
    }
}

// Create a new article
export async function createArticle(article) {
    // TODO
    try {
        const { title, content, journalist, category } = article;
        const [result] = await pool.query(
            'INSERT INTO articles( title, content, journalistid, category) VALUES (?, ?, ?, ?)',
            [title, content, journalist, category]
        );
        return { id: result.insertId, ...article };
    } catch (error) {
        console.error('Error creating article:', error);
        throw error;
    }
}

// Update an article by ID
export async function updateArticle(id, updatedData) {
    // TODO
    try {
        const { title, content, journalist, category } = updatedData;
        const [result] = await pool.query(
            'UPDATE articles SET title = ?, content = ?, journalistid = ?, category = ? WHERE id_a = ?',
            [title, content, journalist, category, id]
        );
        if (result.affectedRows === 0) {
            return null;
        }
        return { id, ...updatedData };
    } catch (error) {
        console.error('Error updating article:', error);
        throw error;
    }
}

// Delete an article by ID
export async function deleteArticle(id) {
    // TODO
    try {
        const [result] = await pool.query('DELETE FROM articles WHERE id_a = ?', [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Error deleting article:', error);
        throw error;
    }
}

export async function ArticlesWithJournalists(id) {
    // TODO
    try {
        const [rows] = await pool.query(`
            SELECT * FROM articles a JOIN journalists j ON a.journalistid = j.id WHERE j.id = ?`,[id]);
        return rows;
    } catch (error) {
        console.error('Error deleting article:', error);
        throw error;
    }
}

export async function getAllArticlesWithJournalists() {
    // TODO
    try {
        const [rows] = await pool.query(`
            SELECT * FROM journalists`);
        return rows;
    } catch (error) {
        console.error('Error deleting article:', error);
        throw error;
    }
}

export async function getAllArticlesWithcategory(id) {
    // TODO
    try {
        const [rows] = await pool.query(`
            SELECT c.id_c as id_c, c.name_c as name_c, cd.id_a as id_a FROM category c JOIN categorydetail cd ON cd.id_c = c.id_c WHERE cd.id_a = ?`, [id]);
        return rows;
    } catch (error) {
        console.error('Error deleting article:', error);
        throw error;
    }
}

