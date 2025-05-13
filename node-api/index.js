const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Rota que consome a API Flask
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://python_api:5000/');
    res.send({ message: response.data });
  } catch (error) {
    console.error('Erro ao consumir a API Flask:', error.message);
    res.status(500).send({ error: 'Erro ao consumir a API Flask' });
  }
});

app.listen(PORT, () => {
  console.log(`API Node.js rodando em http://localhost:${PORT}`);
});