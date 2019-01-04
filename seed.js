const {db} = require('./server/db')
const {green, red} = require('chalk')
const { Scale, Chord } = require('./server/db/')

const seed = async () => {
  await db.sync({force: true})

const A = await Scale.create({key: 'A'})



  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
