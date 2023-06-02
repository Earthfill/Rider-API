const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();

const Ride = require('./models/ride')
const { generateDummyRides } = require('./generate');

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(cors())
app.use(express.json())
app.use(requestLogger)

const checkRidesCollection = async () => {
  try {
    const count = await Ride.countDocuments();
    if (count === 0) {
      // Generate and populate dummy rides
      const dummyRides = generateDummyRides();
      await Ride.insertMany(dummyRides);
      console.log('Dummy rides populated');
    } else {
      console.log('Ride collection is not empty');
    }
  } catch (error) {
    console.error('Error checking ride collection:', error);
  }
};

checkRidesCollection();

// app.get('/', (request, response) => {
//   response.send('Welcome to the Ride Sharing API');
// });

app.get('/', (request, response) => {
  response.send('Welcome to the Ride Sharing API<br><br><a href="/rides">Click here</a> to see all dummy data rides');
});

app.get('/rides', (request, response) => {
  Ride.find({}).then(rides => {
    response.json(rides);
  });
});

app.get('/rides/:id', (request, response) => {
  Ride.findById(request.params.id).then(ride => {
    response.json(ride)
  })
})

app.post('/rides', (request, response) => {
  const body = request.body

  if (!body.origin || !body.destination) {
    return response.status(400).json({ error: 'content missing' })
  }

  const ride = new Ride({
    origin: body.origin,
    destination: body.destination,
    distance: body.distance,
    duration: body.duration
  })

  ride.save().then(savedRide => {
    response.json(savedRide)
  })
})

app.put('/rides/:id', (request, response, next) => {
  const body = request.body

  const ride = {
    origin: body.origin,
    destination: body.destination,
    distance: body.distance,
    duration: body.duration
  }

  Ride.findByIdAndUpdate(request.params.id, ride, { new: true })
    .then(updatedRide => {
      response.json(updatedRide)
    })
    .catch(error => next(error))
})

app.delete('/rides/:id', (request, response) => {
  const id = Number(request.params.id)
  rides = rides.filter(ride => ride.id !== id)

  response.status(204).end()
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});