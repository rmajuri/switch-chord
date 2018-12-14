const router = require('express').Router()

// router.use('ROUTE', require('PATH TO ROUTE'))

router.use((req, res, next) => {
  const err = new Error('Not Found.')
  err.status = 404
  next(err)
})

module.exports = router