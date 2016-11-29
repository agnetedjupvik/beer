import { Router } from 'express';

let router = Router(); //make an instance of an express router

router.get('/', (req, res) => {
  res.status(200).json({
    message: "Beep boop! I am a response"
  })
})

module.exports = router;
