const Parse = {
  url: 'http://3.137.145.92',

  login: async (credentials, callback) => {
    try {
      const result = await fetch(`${Parse.url}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(credentials)
      })

      callback(null);

    } catch(err) {
      callback(err);
    }
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
