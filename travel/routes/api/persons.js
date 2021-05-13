const router = require('express').Router();
const db = require('../models');


//This is a template, it needs to be catered to what we need.
router.post("/Users/create", ({body}, res) =>{
    db.Test.create(body)
      .then(data => res.json(data))
      .catch(err => console.log(err));
  });
  
  router.get('/test/read', (req, res) =>{
    db.Test.find({})
      .then(data => res.json(data))
      .catch(err => console.log(err));
  });
  
  router.get('/test/get/:id', ({params}, res) => {
    db.Test.find({_id: params.id})
      .then(data => res.json(data))
      .catch(err => console.error(err))
  })
  
  router.put('/test/update/:id', ({params, body}, res) =>{
    db.Test.findByIdAndUpdate(
      params.id,
      {$set: {title: body.title, body: body.body}},
      {new: true}
    )
      .then(data =>{
        res.json(data);
      })
      .catch(err =>{
        res.json(err);
      });
  });
  
  router.delete('/test/delete/:id', ({params}, res) =>{
    db.Test.findByIdAndDelete(params.id)
      .then(()=>{
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  module.exports = router;