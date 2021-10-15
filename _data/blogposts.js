const axios = require('axios').default;

async function fetchUserData() {
    // do some async things

    const apikey = process.env.APIKEY ;
    const baseurl ="https://api.cosmicjs.com/v2";
    const query = {
      type: "posts",
    };
    const props = `title`;

    let config = {
      headers: {
        'Authorization': 'Bearer ' + apikey
      }
    }

    let slug = process.env.

    let {data} = await axios.get(`${baseurl}/buckets/${process.env.BUCKET}/objects?read_key=${apikey}`);
console.dir(data);
    return data;
  }
  
  module.exports = async function() {
    let user1 = await fetchUserData();

  
    return user1;
  };