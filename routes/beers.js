import { Router } from 'express';
import Beer from '../models/beer';

let router = Router();

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

module.exports = router;
