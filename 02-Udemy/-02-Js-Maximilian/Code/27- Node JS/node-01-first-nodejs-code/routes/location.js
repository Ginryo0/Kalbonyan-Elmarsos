const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');
const mongodb = require('mongodb');

const router = express.Router();

const url =
  'mongodb+srv://ginryo:meshmesh@cluster0.spv0bgt.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(url);

// const locationStorage = {
//   locations: [],
// };

// like a middleware for a path and HTTP method
router.post('/add-location', async (req, res, next) => {
  // const id = Math.random();
  await client.connect();
  const database = client.db('locations');
  database.collection('user-locations').insertOne(
    {
      address: req.body.address,
      coords: { lat: req.body.lat, lng: req.body.lng },
    },
    function (err, r) {
      // if err ...
      // console.log(r);
      res.json({ message: 'Stored location!', locId: r.insertedId });
    }
  );
});
// /location/:lid = /:something
router.get('/location/:lid', async (req, res, next) => {
  const locationId = req.params.lid;
  //
  await client.connect();
  const database = client.db('locations');
  let locId;
  try {
    locId = new mongodb.ObjectId(locationId);
  } catch (error) {
    // return to make sure the other code does not execute
    return res.status(500).json({ message: 'Invalid id!' });
  }
  database.collection('user-locations').findOne(
    {
      _id: locId,
    },
    function (err, doc) {
      // if err ...
      if (!doc) {
        return res.status(404).json({ message: 'Not Found!' });
      }
      res.json({ address: doc.address, coordinates: doc.coords });
    }
  );
  // const location = locationStorage.locations.find((location) => {
  //   return location.id === locationId;
  // });
});

module.exports = router; // you have to point to what should be exported
