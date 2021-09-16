const mongoose = require("mongoose");



const Connection = async(URL) => {
    try{
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
           
        
        })
        
        
        console.log("Database connected successfully")
    }catch(err){
        console.log('error while connecting mongodb...',err)
    }
}

module.exports = Connection