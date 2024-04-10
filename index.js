// console.log("YES F****k<br>Hello World<br>THIS IS NO HTML DUMB,\n NEWLINEEEE");

const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const app = express();
const {password} = require('./sensitiveData.js');


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);

//not routed stuff
app.get('/', (req, res) => {
    res.send("Oi da API de node");

});

//db connect
mongoose.connect(password)
.then(() => {
    console.log("DataBase On!");
    app.listen(3000, () => {
        console.log("TÁ NA PORTA 3000 agora");
    });
}).catch (() => {
    console.log("DB Fora do Ar!");
});