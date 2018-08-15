//new index file
const Joi = require('joi');
const express = require('express');
const app =express();
const router = express.Router();

app.use(express.json());

module.exports= app;


app.get('/genres', genre.list);
app.get('/genre/:id', genre.view);
app.get('/genre/:id/view', genre.view);
app.get('/genre/:id/edit', genre.edit);
app.put('/genre/:id/edit', genre.update);

