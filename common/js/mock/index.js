// below is just mock datasets, we get the mock data from the apiary server but can use the below in case needed as well

export const stations = [
  {
    id: 1,
    name: 'Auburn',
    address: {
      street: 'No 284, Pitt Street',
      suburb: 'Auburn',
      postcode: '2000',
      state: 'NSW'
    },
  },
  {
    id: 2,
    name: 'Seven Hills',
    address: {
      street: 'No 4, blue Street',
      suburb: 'Seven Hills',
      postcode: '2000',
      state: 'NSW'
    },
  },
  {
    id: 3,
    name: 'Blacktown',
    address: {
      street: 'No 24, brown Street',
      suburb: 'Blacktown',
      postcode: '2000',
      state: 'NSW'
    },
  }
];

export const trains = [
  {
    id: 1,
    stationId: 1,
    name: 'CitiRail 200',
    role: 'Express',
    color: 'blue',
    speed: '50 km/h',
    seats: 200
  },
  {
    id: 2,
    stationId: 1,
    name: 'CitiRail 300',
    role: 'Limited Stops',
    color: 'blue',
    speed: '50 km/h',
    seats: 200
  },
  {
    id: 3,
    stationId: 2,
    name: 'CitiRail 400',
    role: 'Regular',
    color: 'blue',
    speed: '50 km/h',
    seats: 200
  },
  {
    id: 4,
    stationId: 2,
    name: 'CitiRail 500',
    role: 'Limited Stops',
    color: 'blue',
    speed: '50 km/h',
    seats: 200
  },
  {
    id: 5,
    stationId: 3,
    name: 'CitiRail 600',
    role: 'Express',
    color: 'blue',
    speed: '50 km/h',
    seats: 200
  },
  {
    id: 6,
    stationId: 3,
    name: 'CitiRail 700',
    role: 'Limited Stops',
    color: 'blue',
    speed: '50 km/h',
    seats: 200
  }
];
