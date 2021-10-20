const express = require("express");
const routerApi = require('./routes/index')


const app = express();
const port = 3000;

app.use(express.json());

app.get('/home', (req, res) => {
  res.send('Aquí es uestro Home')
});

routerApi(app);

app.listen(port,()=>{
  console.log(`Listening at http://localhost:${port}`)
})
