const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

let tareas = [
  { id: 1, titulo: 'Aprender Docker', hecho: true },
  { id: 2, titulo: 'Desplegar en Azure', hecho: false }
];

app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando - version 1', version: '1.0' });
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

app.listen(PORT, () => {
  console.log(`API escuchando en el puerto ${PORT}`);
});
