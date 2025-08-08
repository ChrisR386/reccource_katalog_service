import express from 'express';
import resourcesRouter from './routes/resources.js';
import path from 'path';

const app = express();
const PORT = 3000;

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // CORS erlauben
app.use(express.json());


app.use(express.json());

// API-Routen einbinden
app.use('/resources', resourcesRouter);

// Startseite
app.get('/', (req, res) => {
  res.send('Willkommen beim Resource Catalog Service');
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});