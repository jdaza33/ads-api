/**
 * Server
 */

const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3020
const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.gkrxm.mongodb.net/trucks?retryWrites=true&w=majority',
  (err, db) => {
    if (err) {
      console.log('Error al conectar la db')
      throw err
    }
    console.log('Base de datos conectada')
  }
)

/**MODELS */
const Trucks = mongoose.model(
  'Trucks',
  mongoose.Schema({
    ref: String,
    bodywork: String,
    brand: String,
    model: String,
    condition: String,
    potency: Number,
    type: String,
    boxchg: String,
    seat: String,
    suspension: String,
    norm: String,
    energy: String,
    price: String,
    description: String,
    linkVideo: String,
  })
)

// const admin = new Trucks({
//   name: 'Test2',
// })
// admin.save().then(() => console.log('meow'))

app.use(cors())
app.use(express.json())

/**TRUCKS */
app.get('/trucks', async (req, res, next) => {
  try {
    const trucks = await Trucks.find({})
      // .sort({ createdAt: -1 })
      .lean()
    res.json({ success: true, truck: trucks })
  } catch (error) {
    console.log('error', error)
    res.status(403).json({ error })
  }
})

app.post('/trucks/create', async (req, res, next) => {
  try {
    const data = req.body
    // data.createdAt = Date.now()
    const truck = await Trucks.create(data)
    res.json({ success: true, truck })
  } catch (error) {
    console.log('error', error)
    res.status(403).json({ error })
  }
})

app.listen(port, () => {
  console.log(`App running on port ${port}!`)
})
