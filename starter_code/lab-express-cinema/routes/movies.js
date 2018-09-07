const express = require('express');
const router  = express.Router();
const Movie    = require('../models/movie')

/* GET movies page */
router.get('/movies', (req, res, next) => {

   Movie.find()
   .then((theMovieList)=>{
    
       res.render('movies', {theMovieList});
   })

   .catch((err)=>{

   })

});

router.get('/movies/:thMovieID', (req, res, next)=>{

  Movie.findById(req.params.theMovieID)
  .then((theActualMovie)=>{

      res.render('details', {theMovie: theActualMovie})

  })
  .catch((err)=>{

  })
  



})

module.exports = router;