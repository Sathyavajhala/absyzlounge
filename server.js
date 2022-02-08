var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.listen(process.env.PORT || 3000);

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });