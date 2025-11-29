const express = require("express");
const app = express();

// Required information
const info = {
  name: "Ma. Angelika M. Gumapac",
  section: "NT 4101",
  quote: "What you do makes a difference, and you have to decide what kind of difference you want to make. — Jane Goodall"
};

app.get("/", (req, res) => {
  res.send(`
    <h1>${info.name}</h1>
    <p>${info.section}</p>
    <blockquote>"${info.quote}"</blockquote>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
