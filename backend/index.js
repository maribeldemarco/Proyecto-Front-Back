import express from  'express';
import { expressConfig } from './src/config.js';

app.set('port', expressConfig.port)
app.set('host', expressConfig.host);

const app = express();

app.get('/', (req, res) => {
  res.send('servidor funcionando')
})

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Servidor funcionando en http://${app.get('host')}:${app.get('port')}`)
})