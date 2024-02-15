import  express from 'express';
import *  as ProductRouter from './src/features/products/product.routes';

//create server
const server = express();

// for all request related to product, redirect to product routes.
// localhost:3200/api/products
server.use("api/products")

//default request handler
server.get("/",(req,res)=>{
    res.send("welcome to e-com APIs");
})

//specify port
server.listen(3200, ()=>{
    console.log("server is running on port 3200");
});