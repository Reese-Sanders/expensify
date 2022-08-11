const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log('Server doth worketh')
});

/*const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public')

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log('server is up!');
})*/