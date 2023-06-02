// For generating dummer rides
const generateDummyRides = () => {
  const rides = [
    {
      origin: 'Anthony Village',
      destination: 'Yaba',
      distance: 10,
      duration: 30
    },
    {
      origin: 'Jibowu',
      destination: 'Banana Island',
      distance: 15,
      duration: 45
    },
    {
      origin: 'Yaba',
      destination: 'Makoko',
      distance: 15,
      duration: 45
    },
  ];

  return rides;
};

module.exports = { generateDummyRides };