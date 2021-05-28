const Parse = {
  url: 'http://3.137.145.92',

  getApps: async(callback) => {
    try {
      const result = await fetch(`${Parse.url}/seekers/applications`);

      callback(result);

    } catch (err) {
      callback(err)
    }
  }
}

export default Parse;