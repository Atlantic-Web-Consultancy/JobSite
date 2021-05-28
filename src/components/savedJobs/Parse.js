// const Parse = {
//   url: 'http://3.137.145.92',

//   getApps: async(callback) => {
//     try {
//       const result = await fetch(`${Parse.url}/seekers/applications`);

//       callback(result);

//     } catch (err) {
//       callback(err)
//     }
//   }
// }

import $ from 'jquery';

const Parse = {
  login: (callback) => {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/seekers/applications',
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      success: (result) => callback(result),
      error: (err) => callback(err),
    })
  }
}

export default Parse;