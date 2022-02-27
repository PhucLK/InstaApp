const mongoose = require("mongoose");

// Understanding Mongoose connection options
// https://arunrajeevan.medium.com/understanding-mongoose-connection-options-2b6e73d96de1#:~:text=The%20underlying%20MongoDB%20driver%20has,that%20prevents%20you%20from%20connecting.
// Connect to Mongoose Atlas use mongoos package
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // serverApi: ServerApiVersion.v1,
      // useCreateIndex : true
    });
    console.log("connected");
  } catch (error) {
    console.log(error);
    process.exit(1); //exit from a Node.js program
  }
};

module.exports = { connectDB };
