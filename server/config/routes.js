var path = require('path'),
  pets = require('../controllers/pets');

module.exports = (app) => {
  app.get('/pets', pets.index);
  app.post('/pets', pets.create);
  app.get('/pets/:id', pets.show);
  app.patch('/pets/:id', pets.update);
  app.delete('/pets/:id', pets.destroy);
  app.patch('/pets/:id/like', pets.like);

  app.all('*', (req, res, next)=> {
    res.sendFile(path.resolve('./client/dist/client/index.html'))
  });
}
