const router = require('express').Router()
const { models: {User }} = require('../db')
//for making requests to the DB

router.get('/users', async(req, res, next)=> {
  try{
    const users = await User.findAll({
      attributes: ['id', 'username']
    })
    res.json(users)
  }
  catch(err){next(err)}
})

router.get('/me', async (req, res, next)=>{
  try{
    let user = await User.findByToken(req.headers.authorization)
    res.send(user)
  }
  catch(err){next(err)}
})
router.post('/login', async (req,res,next)=>{
  try {
    res.send({token: await User.authenticate(req.body)})
  }
  catch(err) {next(err)}
})

router.post('/signup', async (req, res, next)=>{
  try{
    const user = await User.create(req.body)
    res.send({token: await user.generateToken()})
  }
  catch(err){
    if (err.name === 'SequelizeUniqueConstraintError'){
      res.status(401).send('User already exists')
    }
    else {next(err)}
  }
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
