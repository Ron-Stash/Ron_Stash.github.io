// submit.js
const fs = require('fs');

module.exports = (req, res) => {
  const data = req.body.message;
  
  fs.appendFile('data.txt', `${data}\n`, err => {
    if (err) {
      res.status(500).send('Error writing to file');
    } else {
      res.send('Data saved!');
    }
  });
}