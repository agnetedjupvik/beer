import { Router } from 'express';
import Beer from '../models/beer';

let router = Router();

// localhost:8080/api/beers
router.route('/')
  .post((req, res) => {

    let beer = new Beer({
      name:       req.body.name,
      brewery:    req.body.brewery,
      size:       req.body.size,
      alcoholic:  req.body.alcoholic
    })

    beer.save((err, savedBeer) => {
      if (err) res.status(500).send(err);
      res.status(201).json(savedBeer);
    })
  })

  .get((req, res) => {
    Beer.find((err, beers) => {
      if (err) res.status(500).send(err);
      res.status(200).json({
        "count":    beers.length,
        "results":  beers
      })
    })
  })

// localhost:8080/api/beers/:id
router.route('/:id')
  .get((req, res) => {
    Beer.findById(req.params.id, (err, beer) => {
      if (err) res.status(500).send(err);
      res.json(beer)
    })
  })

// update a beer by id
  .put((req, res) => {
    var beerId = req.params.id;
    Beer.findById(beerId, (err, beer) => {
      if (err) res.status(500).send(err);
      if (!beer) res.status(404).json({message: "Beer not found"});
      let { name, brewery, size, alcoholic } = req.body

      //Change whatever we chose to update
			beer.name 		  = name 		  || beer.name
			beer.brewery 	  = brewery 	|| beer.brewery
			beer.size		    = size 		  || beer.size
			beer.alcoholic  = alcoholic || beer.alcoholic

      beer.save((err) => {
        if (err) res.status(500).send(err);
        res.status(204).json(beer)
      })
    })
  })

  .delete((req, res, next) => {
    Beer.findByIdAndRemove(req.params.id, (err, beer) => {
      if (err) res.status(500).send(err);
      res.json(beer);
    })
  })


module.exports = router;
