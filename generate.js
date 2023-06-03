// For generating dummer rides
const generateDummyRides = () => {
  const rides = [
    // {
    //   origin: 'Anthony Village',
    //   destination: 'Yaba',
    //   distance: 10,
    //   duration: 30,
    //   vehicleName: 'Toyota',
    //   vehicleNumber: 'AKD-372-AR',
    //   vehicleColor: 'Red',
    //   driverName: 'John Frank'
    // },
    // {
    //   origin: 'Jibowu',
    //   destination: 'Banana Island',
    //   distance: 15,
    //   duration: 45,
    //   vehicleName: 'Hyundai',
    //   vehicleNumber: 'IKJ-532-KJ',
    //   vehicleColor: 'Blue',
    //   driverName: 'Tom Fashanu'
    // },
    // {
    //   origin: 'Yaba',
    //   destination: 'Makoko',
    //   distance: 15,
    //   duration: 45,
    //   vehicleName: 'Nissan',
    //   vehicleNumber: 'VGC-156-IY',
    //   vehicleColor: 'Black',
    //   driverName: 'Marcus Jonah'
    // },
    {
      origin: 'Magodo',
      destination: 'Agege',
      distance: 25,
      duration: 40,
      vehicleName: 'Kia',
      vehicleNumber: 'MGD-126-IJ',
      vehicleColor: 'Gray',
      driverName: 'Adam Ibeh'
    },
    {
      origin: 'Gbagada',
      destination: 'Mangoro',
      distance: 20,
      duration: 30,
      vehicleName: 'Toyota',
      vehicleNumber: 'GBD-114-KT',
      vehicleColor: 'White',
      driverName: 'Mubarak Danjuma'
    }
  ];

  return rides;
};

module.exports = { generateDummyRides };