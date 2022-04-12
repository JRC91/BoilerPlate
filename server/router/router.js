const router = require('express').Router()
//for making requests to the DB

router.get('/', (req, res, next)=>{
  try{next()}
  catch(err){next(err)}
})

router.post('/', (req, res, next)=>{
  try{next()}
  catch(err){next(err)}
})

router.delete('/', (req, res, next)=>{
  try{next()}
  catch(err){next(err)}
})

router.put('/', (req, res, next)=>{
  try{next()}
  catch(err){next(err)}
})

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router
