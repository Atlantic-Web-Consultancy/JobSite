import $ from 'jquery';

const Parse = {
  url: 'http://3.137.145.92',

  login: (credentials, callback) => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/login',
      data: credentials,
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      success: () => console.log('yo'),
      error: (err) => console.log('err', err),
    })
  },

  // login: async (credentials, callback) => {
  //   try {
  //     const response = await fetch(`http://localhost:3001/login`, {
  //       method: 'POST',
  //       body: JSON.stringify(credentials),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'credentials': 'include'
  //       }
  //     })

  //     if(response.ok) {
  //       callback(null);
  //     }
  //   } catch(err) {
  //     callback(err);
  //   }
  // },

  logout: async (credentials, callback) => {
    try {
      const result = await fetch('/logout');

      if (response.ok) {
        callback(null);
      }
    } catch (err) {
      callback(err);
    }
  },

  createEmployer: async(accountInfo, callback) => {
    try {
      const result = await fetch('/createEmployer', {
        method: 'POST',
        body: JSON.stringify(accountInfo)
      })

      if(response.ok) {
        callback(null)
      }
    } catch(err) {
      callback(err);
    }
  },

  createJobSeeker: async (accountInfo, callback) => {
    try {
      const result = await fetch('/createSeeker', {
        method: 'POST',
        body: JSON.stringify(accountInfo)
      })

      if (response.ok) {
        callback(null)
      }
    } catch (err) {
      callback(err);
    }
  }
}

export default Parse;
