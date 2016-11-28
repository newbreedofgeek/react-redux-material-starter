// const defaultState = {};
//
// const admin = (state = defaultState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
//
// export default admin;



var initialAdmin = {
      firstName: 'John',
      lastName: 'Smith',
      dob: 499920488829,
      avatar: {
        full: 'http://lifeletters-labs.s3.amazonaws.com/consult-screen/81_full.jpg',
        thumb: 'http://lifeletters-labs.s3.amazonaws.com/consult-screen/81.jpg',
      },
      emergencyContact: {
        firstName: 'Jane',
        lastName: 'Austin',
        relationship: 'Partner'
      }
    };

// Actions on a list of to do items
const admin = (state=initialAdmin, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default admin;
