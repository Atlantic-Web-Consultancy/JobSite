const Parse = {
  url: '',

  login: async (credentials, callback) => {
    try {
      const result = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
      })

      if(response.ok) {
        callback(null);
      }
    } catch(err) {
      callback(err);
    }
  },

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
