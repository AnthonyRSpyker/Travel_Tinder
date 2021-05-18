// const express = require("express");

// const mongoose = require("mongoose");
// const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   }

// app.use(routes);

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/"
//   );

// app.listen(PORT, function() {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });


 const express= require('express');
 const  app= express();
 const cookieParser= require('cookie-parser');
 const mongoose= require('mongoose')
 const routes= require('./routes/index')
 app.use(cookieParser());
 app.use(express.json());

 const PORT = process.env.PORT || 3002;
 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/travelt", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false 
 });

app.use(routes);

 app.listen(PORT,()=>{
     console.log('express sever started')
 }); 