const express = require('express');
const app = express();
const port = 3000; // Change this to the desired port number

app.use(express.static('public'));

// Sample notes data
const notes = [
  { id: 1, title: 'Note 1', text: 'This is the first note.' },
  { id: 2, title: 'Note 2', text: 'This is the second note.' },
  // Add more sample notes if needed
];

// Route to fetch notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// Route to save a new note
app.post('/api/notes', (req, res) => {
  // Your logic to save the new note goes here
  // For simplicity, we'll just push a new note to the array
  const newNote = { id: notes.length + 1, title: req.body.title, text: req.body.text };
  notes.push(newNote);
  res.json(newNote);
});

// Route to delete a note
app.delete('/api/notes/:id', (req, res) => {
  // Your logic to delete the note goes here
  // For simplicity, we'll just filter out the note with the given id
  const id = parseInt(req.params.id);
  notes = notes.filter((note) => note.id !== id);
  res.json({ message: 'Note deleted successfully.' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
