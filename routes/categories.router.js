const express = require('express');

const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
})


module.exports = router;






// const express = require('express');

// const router = express.Router();

// router.get('/',(req,res)=>{
//   const {categoryId}= req.params
//   res.json([
//     {
//       categoryId,
//       category: 'Food',
//       products: []
//     },
//     {
//       categoryId,
//       category: 'Games',
//       products: []
//     },
//     {
//       categoryId,
//       category: 'clothes',
//       products: []
//     },
//   ])
// })

// router.get("/filter", (req, res) =>{
//   res.send("Soy un filter");
// });
// // Error comun, que recibe a filter omo si fuera un parámetro, no se va al routing esperado, lo toma como id.
// // lo estatico debe ir antes de lo dinamico aqui en el archivo.


// router.get('/categories/:categoryId',(req,res)=>{
//   const {categoryId}= req.params
//   res.json([
//     {
//       categoryId,
//       category: 'Food',
//       products: []
//     }
//   ])
// })

// module.exports = router;
