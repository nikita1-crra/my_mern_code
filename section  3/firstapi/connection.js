const mongoose = require("mongoose");
const api_config = require("./conifig");

const url = api_config.db_url;

mongoose.connect(url)  //using then and catch/function which return promise
.then( ()=> {
    console.log('connection successful');
})
.catch( (err)=> {
    console.error(err);

});

module.exports = mongoose;