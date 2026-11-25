const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

let tareas = [
  { id: 1, titulo: 'Aprender Docker', hecho: true },
  { id: 2, titulo: 'Desplegar en Azure', hecho: false }
];
// modificacion de la version 1 a la version 2
app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando - version 2', version: '2.0' });
});

app.get('/tareas', (req, res) => {
  res.json(tareas);
});

app.post('/tareas', (req, res) => {
  const { titulo } = req.body;
  if (!titulo) {
    return res.status(400).json({ error: 'El campo titulo es obligatorio' });
  }
  const nueva = { id: tareas.length + 1, titulo, hecho: false };
  tareas.push(nueva);
  res.status(201).json(nueva);
});

app.get('/saludo', (req, res) => {
  res.json({ saludo: 'Hola desde el pipeline de GitHub Actions' });
});

app.listen(PORT, () => {
  console.log(`API escuchando en el puerto ${PORT}`);
});
