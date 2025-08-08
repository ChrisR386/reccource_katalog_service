const express = require('express');
const app = express();
const feedbackRoutes = require('./routes/feedbackRoutes');
const PORT = 5002;

app.use(express.json());
app.use('/', feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});