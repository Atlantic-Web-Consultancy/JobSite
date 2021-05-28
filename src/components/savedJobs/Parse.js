const Parse = {
  getApps = async(callback) => {
    try {
      const result = await fetch('/seekers/applications');

      if (response.ok) {
        callback(null, result);
      }
    } catch (err) {
      callback(err)
    }
  }
}