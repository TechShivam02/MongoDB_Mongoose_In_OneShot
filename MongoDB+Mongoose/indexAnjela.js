const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB" , { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Connected to the mongo DataBase Connectively");
}).catch((err)=>{
    console.log(err);
})



const fruitSchema = new mongoose.Schema({
    
    name : String,


    rating:{
        type:Number,
        min : 1,
        max : 10
    }
    ,
    review : String,
})


// we use the schema to create the model

const Fruit = mongoose.model("Fruit" , fruitSchema);


// 1st way 

const peach = new Fruit({

    rating : 7,
    review : "Peaches are more better",
})

// peach.save();

// upto it  , it will create a database name  : fruitDb 
 // collection name    as decalred in string "Fruit"   it will lowers the all  , and add 's' to the name  , now Ans : fruits

 
/*
 Fruit.updateOne({_id : "63d3e786485de758e2d87703"} , {name : "Peach"} , function(err){
    if(err){
        console.log(err);
    }

    else{
        console.log("Suucceesfullllly updated the document")
    }

 })


 */


 /*
 Fruit.deleteOne({name : "Apple"} , function(err){
    if(err){
        console.log(err);
    }

    else{
        console.log("Suucceesfullllly Deleted the document")
    }
 })


 */









 /*
 const banana = new Fruit({
    name : "banana",
    rating : 3,
    review : "Not good "
})

const orange = new Fruit({
    name : "orange",
    rating : 6,
    review : "Average taste"
})

const kiwi = new Fruit({
    name : "kiwi",
    rating : 9,
    review : "Awesome "
})


Fruit.insertMany([banana , orange , kiwi] , function(err){
    if(err){
        console.log(err);
    }

    else{
        console.log("Successfully added all the fruits too the fruitsDB");
    }
})


*/












 const presonscehma = new mongoose.Schema({
    name : String,
    age : Number,
    favouriteFruit : fruitSchema,
 })


 const Person = new mongoose.model("Person" , presonscehma);


 


/*

const pineapple = new Fruit({
    name : "pineappple",
    rating : 8,
    review : "Taste better then green apple"
})
pineapple.save();




 const p1 = new Person({
    name : "Amy",
    age : 12 ,

    favouriteFruit : pineapple,
 })



 p1.save();

*/



const litchi = new Fruit({
    name : "litchi",
    rating : 5,
    review : "Average for taste"
})

litchi.save();



Person.updateOne({name:"John"} , {favouriteFruit :litchi } , function(err){
    if(!err){console.log("Succ updated ........")}
})





/*

Person.deleteMany({name : "John"} , function(err){
    if(err){
        console.log(err);
    }

    else{
        console.log("Suucceesfullllly Deleted with DeleetMany")
    }
 })


 */




 /*
 Fruit.find(function(err , fruits){
    if(err){
        console.log(err);
    }

    else{
        // console.log(fruits);

        fruits.forEach(function(fruit){
            console.log("F-Name : " + fruit.name);
        })
    }
 })

*/

