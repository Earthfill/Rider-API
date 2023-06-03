const mongoose = require('mongoose')

mongoose.set('strictQuery',false)

const url = process.env.MONGODB_URI

console.log('connecting to', url);

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const rideSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  distance: String,
  duration: String,
  vehicleName: String,
  vehicleNumber: String,
  vehicleColor: String,
  driverName: String
})

rideSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Ride', rideSchema)