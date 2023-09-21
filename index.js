const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./genshin-tcg.json');


app.get('/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * data.length);
  res.json(data[randomIndex]);
});


app.get('/random-element/:element', (req, res) => {
  const element = req.params.element.toLowerCase();
  const elementData = data.filter(entry => entry.Element.toLowerCase() === element);
  if (elementData.length === 0) {
    res.status(404).json({ message: 'Element not found' });
  } else {
    const randomIndex = Math.floor(Math.random() * elementData.length);
    res.json(elementData[randomIndex]);
  }
});


app.get('/character/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  const character = data.find(entry => entry.Name.toLowerCase() === name);
  if (character) {
    res.json(character);
  } else {
    res.status(404).json({ message: 'Character not found' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}/random`);
  console.log(`http://localhost:${PORT}/random-element/<element_name_here>`);
  console.log(`http://localhost:${PORT}/character/<character_name_here>`);
});
