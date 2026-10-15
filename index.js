const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.listen(3000, () => console.log('Servidor activo en el puerto 3000'));