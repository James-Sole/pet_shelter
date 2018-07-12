let Pet = require('../models/pet');
module.exports = {
  index: (req, res) => {
    Pet.find({}, (err, pets) => {
      if (err){
        return res.status(400).json(err);
      }
      return res.json(pets);
    });
  },
  create: (req, res)=> {
    console.log(req.body);
    const pet = new Pet(req.body);

    pet.save( (err) =>  {
      if (err){
        console.log("this is my save");
        return res.status(400).json(err);
      }
      console.log("this is my return");
      return res.json(pet);
    });
  },
  show: (req, res)=> {
    Pet.find({_id: req.params.id}, (err, pet) => {
      if (err){
        return res.status(400).json(err);
      }
      return res.json(pet);
    });
  },
  update: (req, res)=> {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true}, (err, pet) => {
      if (err){
        return res.status(400).json(err);
      }
      return res.json(pet);
    });
  },
  destroy: (req, res)=> {
    Pet.remove({_id: req.params.id}, (err) => {
    if (err){
      return res.status(400).json(err);
    }
    return res.json('successfully deleted');
  });
  },
  like: (req,res)=> {
    Pet.findOneAndUpdate({_id: req.params.id}, {$inc: {'likes': 1}}, (err, pet) => {
      if (err){
        return res.status(400).json(err);
      }
      return res.json(pet);
    });
  }
}
