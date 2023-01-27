const mongoose = require("mongoose");



                 // mongodb://localhost:27017/DB_NAME
mongoose.connect("mongodb://localhost:27017/Sample",{useNewUrlParser:true}).then(()=>{
    console.log("Connected to mongo DB Successfully");
}).catch((err)=>{
    console.log(err);
})


const student = new mongoose.Schema({
    name : String,
    workout: Boolean,
    height : Number 
})

        // Model is like a collections ... 

const Student = new mongoose.model("Student" , student);



const adder = async ()=>{

    /*    1st method to create 
    const ss = new Student({
        name : "Shivam",
        workout:true,
        height : 6
    });


    await ss.save();
    
    
    */



/*  // 2nd , this is better then previous  One


    const ss = await Student.create(
        
        {
            name:"Shivam Bansal",
            workout:false,
            height : 7
        }   
    )


*/


    // console.log(ss); 



    // const ss = await Student.create({name: "Rahul" , workout:false , height : 5});
    // console.log(ss);


    
    // const ss = await Student.find({height : {$eq : 7}});
    // console.log(ss);


    
    // const ss = await Student.find({height : {$gt : 6}});
    // console.log(ss);


    
    // const ss = await Student.find({height : {$gte : 6}});
    // console.log(ss);


    // const ss = await Student.find({height : {$lt : 6}} );
    // console.log(ss);

    // const ss = await Student.find({height : {$lte : 6}} );
    // console.log(ss);


    // const ss = await Student.find( {height : {$in : [5,6]} }  );   // in   if found in height of 5,6 then show it
    // console.log(ss);


    
    const ss = await Student.find( {height : {$nin : [5,6]} }  );   // nin  not in  if not found in height of 5,6 then show it  , it wil display of result of 7
    console.log(ss);

    

}



    adder();
