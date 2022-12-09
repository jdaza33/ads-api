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
  process.env.PORT,
  (err, db) => {
    if (err) {
      console.log('Error al conectar la db')
      throw err
    }
    console.log('Base de datos conectada')
  }
)

/**MODELS */

const __truck__ = {
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
  folder: Object,
}

const Trucks = mongoose.model('Trucks', mongoose.Schema(__truck__))

const TrucksTwo = mongoose.model('TrucksTwo', mongoose.Schema(__truck__))

const TrucksThree = mongoose.model('TrucksThree', mongoose.Schema(__truck__))
const Trucks4 = mongoose.model('TrucksFour', mongoose.Schema(__truck__))
const Trucks5 = mongoose.model('TrucksFive', mongoose.Schema(__truck__))
const Trucks6 = mongoose.model('TrucksSix', mongoose.Schema(__truck__))
const Trucks7 = mongoose.model('TrucksSeven', mongoose.Schema(__truck__))

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
        : db === '3'
        ? await TrucksThree.find({})
        : db === '4'
        ? await Trucks4.find({})
        : db === '5'
        ? await Trucks5.find({})
        : db === '6'
        ? await Trucks6.find({})
        : await Trucks7.find({})
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

    // const truck =
    //   db === '1'
    //     ? await Trucks.findOne({ _id: req.params.id })
    //     : db === '2'
    //     ? await TrucksTwo.findOne({ _id: req.params.id })
    //     : await TrucksThree.findOne({ _id: req.params.id })

    const truck =
      db === '1'
        ? await Trucks.findOne({ _id: req.params.id })
        : db === '2'
        ? await TrucksTwo.findOne({ _id: req.params.id })
        : db === '3'
        ? await TrucksThree.findOne({ _id: req.params.id })
        : db === '4'
        ? await Trucks4.findOne({ _id: req.params.id })
        : db === '5'
        ? await Trucks5.findOne({ _id: req.params.id })
        : db === '6'
        ? await Trucks6.findOne({ _id: req.params.id })
        : await Trucks7.findOne({ _id: req.params.id })

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
    // db === '1'
    //   ? await Trucks.deleteOne({ _id: req.params.id })
    //   : db === '2'
    //   ? await TrucksTwo.deleteOne({ _id: req.params.id })
    //   : await TrucksThree.deleteOne({ _id: req.params.id })

    db === '1'
      ? await Trucks.deleteOne({ _id: req.params.id })
      : db === '2'
      ? await TrucksTwo.deleteOne({ _id: req.params.id })
      : db === '3'
      ? await TrucksThree.deleteOne({ _id: req.params.id })
      : db === '4'
      ? await Trucks4.deleteOne({ _id: req.params.id })
      : db === '5'
      ? await Trucks5.deleteOne({ _id: req.params.id })
      : db === '6'
      ? await Trucks6.deleteOne({ _id: req.params.id })
      : await Trucks7.deleteOne({ _id: req.params.id })

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

    // const truck =
    //   db === '1'
    //     ? await Trucks.create(data)
    //     : db === '2'
    //     ? await TrucksTwo.create(data)
    //     : await TrucksThree.create(data)

    const truck =
      db === '1'
        ? await Trucks.create(data)
        : db === '2'
        ? await TrucksTwo.create(data)
        : db === '3'
        ? await TrucksThree.create(data)
        : db === '4'
        ? await Trucks4.create(data)
        : db === '5'
        ? await Trucks5.create(data)
        : db === '6'
        ? await Trucks6.create(data)
        : await Trucks7.create(data)

    res.json({ success: true, truck })
  } catch (error) {
    console.log('error', error)
    res.status(403).json({ error })
  }
})

app.post('/trucks/assign/folder', async (req, res, next) => {
  try {
    const { db, truckId, folder } = req.body

    console.log(req.body)

    // const truck =
    //   db === '1'
    //     ? await Trucks.updateOne({ _id: truckId }, { $set: { folder } })
    //     : db === '2'
    //     ? await TrucksTwo.updateOne({ _id: truckId }, { $set: { folder } })
    //     : await TrucksThree.updateOne({ _id: truckId }, { $set: { folder } })

    const truck =
      db === '1'
        ? await Trucks.updateOne({ _id: truckId }, { $set: { folder } })
        : db === '2'
        ? await TrucksTwo.updateOne({ _id: truckId }, { $set: { folder } })
        : db === '3'
        ? await TrucksThree.updateOne({ _id: truckId }, { $set: { folder } })
        : db === '4'
        ? await Trucks4.updateOne({ _id: truckId }, { $set: { folder } })
        : db === '5'
        ? await Trucks5.updateOne({ _id: truckId }, { $set: { folder } })
        : db === '6'
        ? await Trucks6.updateOne({ _id: truckId }, { $set: { folder } })
        : await Trucks7.updateOne({ _id: truckId }, { $set: { folder } })

    // .sort({ createdAt: -1 })
    res.json({ success: true, truck })
  } catch (error) {
    console.log('error', error)
    res.status(403).json({ error })
  }
})

app.listen(port, () => {
  console.log(`App running on port ${port}!`)
})
