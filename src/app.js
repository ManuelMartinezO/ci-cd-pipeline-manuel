const express = require('express');
const app = express();
const calcRoutes = require('./routes/calc');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/calc', calcRoutes);


app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
