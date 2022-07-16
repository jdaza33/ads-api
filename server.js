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
    year: String,
    potency: Number,
    type: String,
    boxchg: String,
    km: String,
    seat: String,
    suspension: String,
    norm: String,
    energy: String,
    axis: String,
    price: String,
    description: String,
    linkVideo: String,
  })
)

const TrucksTwo = mongoose.model(
  'TrucksTwo',
  mongoose.Schema({
    ref: String,
    bodywork: String,
    brand: String,
    model: String,
    condition: String,
    year: String,
    potency: Number,
    type: String,
    boxchg: String,
    km: String,
    seat: String,
    suspension: String,
    norm: String,
    energy: String,
    axis: String,
    price: String,
    description: String,
    linkVideo: String,
  })
)

const TrucksThree = mongoose.model(
  'TrucksThree',
  mongoose.Schema({
    ref: String,
    bodywork: String,
    brand: String,
    model: String,
    condition: String,
    year: String,
    potency: Number,
    type: String,
    boxchg: String,
    km: String,
    seat: String,
    suspension: String,
    norm: String,
    energy: String,
    axis: String,
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
    const { db } = req.query

    const trucks =
      db === '1'
        ? await Trucks.find({})
        : db === '2'
        ? await TrucksTwo.find({})
        : await TrucksThree.find({})
            // .sort({ createdAt: -1 })
            .lean()
    res.json({ success: true, truck: trucks })
  } catch (error) {
    console.log('error', error)
    res.status(403).json({ error })
  }
})

app.get('/trucks/:id', async (req, res, next) => {
  try {
    const { db } = req.query

    const truck =
      db === '1'
        ? await Trucks.findOne({ _id: req.params.id })
        : db === '2'
        ? await TrucksTwo.findOne({ _id: req.params.id })
        : await TrucksThree.findOne({ _id: req.params.id })

    // .sort({ createdAt: -1 })
    res.json({ success: true, truck })
  } catch (error) {
    console.log('error', error)
    res.status(403).json({ error })
  }
})

app.delete('/trucks/:id', async (req, res, next) => {
  try {
    const { db } = req.query
    db === '1'
      ? await Trucks.deleteOne({ _id: req.params.id })
      : db === '2'
      ? await TrucksTwo.deleteOne({ _id: req.params.id })
      : await TrucksThree.deleteOne({ _id: req.params.id })

    // .sort({ createdAt: -1 })
    res.json({ success: true })
  } catch (error) {
    console.log('error', error)
    res.status(403).json({ error })
  }
})

app.post('/trucks/create', async (req, res, next) => {
  try {
    const { db } = req.query
    const data = req.body
    // data.createdAt = Date.now()

    const truck =
      db === '1'
        ? await Trucks.create(data)
        : db === '2'
        ? await TrucksTwo.create(data)
        : await TrucksThree.create(data)

    res.json({ success: true, truck })
  } catch (error) {
    console.log('error', error)
    res.status(403).json({ error })
  }
})

app.listen(port, () => {
  console.log(`App running on port ${port}!`)
})
