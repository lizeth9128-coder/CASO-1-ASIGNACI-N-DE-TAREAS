const express = require('express');
const app = express();
const port = 3111;

app.get('/', (req, res) => {
  res.send('Hello, Welcome to the Express starter template for Stackblitz!');
});

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
}); 

const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.listen(3000, () => console.log('Servidor activo en el puerto 3000'));
