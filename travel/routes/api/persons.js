const router = require('express').Router();
const db = require('../controllers');


//This is a template, it needs to be catered to what we need.
router.post("/", ({body}, res) =>{
    db.Users.create(body)
      .then(data => res.json(data))
      .catch(err => console.log(err));
  });
  
  router.get('/', (req, res) =>{
    db.Users.find({})
      .then(data => res.json(data))
      .catch(err => console.log(err));
  });
  
  router.get('/:id', ({params}, res) => {
    db.Users.find({_id: params.id})
      .then(data => res.json(data))
      .catch(err => console.error(err))
  })
  
  router.put('/:id', ({params, body}, res) =>{
    db.Users.findByIdAndUpdate(
      params.id,
      {$set: {img: body.img, age: body.age, gender: body.gender, countries: body.countries, bio: body.bio}},
      {new: true}
    )
      .then(data =>{
        res.json(data);
      })
      .catch(err =>{
        res.json(err);
      });
  });
  
  router.delete('/:id', ({params}, res) =>{
    db.Users.findByIdAndDelete(params.id)
      .then(()=>{
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  module.exports = router;