import $ from 'jquery';

const Parse = {
  login: (credentials, callback) => {
    $.ajax({
      method: 'POST',
      url: '/login',
      data: credentials,
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      success: () => console.log('success logging in'),
      error: (err) => console.log('err', err),
    })
  },

  logout: async (credentials, callback) => {
    try {
      const result = await fetch(`${Parse.url}/logout`);

      if (response.ok) {
        callback(null);
      }
    } catch (err) {
      callback(err);
    }
  },

  createEmployer: async(accountInfo, callback) => {
    try {
      const result = await fetch(`${Parse.url}/createEmployer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
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
      const result = await fetch(`${Parse.url}/createSeeker`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(accountInfo)
      })

      callback(null);

    } catch (err) {
      callback(err);
    }
  }
}

export default Parse;
