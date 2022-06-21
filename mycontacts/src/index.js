const express = require('express');
const routes = require('./routes');

const app = express();

app.use((request, response) => {
  request.appId = 'MeuAppID';
  response.send('Intercepted');
});
app.use(routes);

app.listen(3000, () => console.log('🔥 Server started at: http://localhost:3000'));
