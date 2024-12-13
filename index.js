const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesApiVer1 = require("./API/ApiUser/routers/index.router");
dotenv.config();

// connect database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected!!!");
  } catch (error) {
    console.log(error, "MongoDB connect error");
    process.exit(1);
  }
};

const init = async () => {
  // create server Hapi
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: "localhost",
  })

  // import routes
  server.route(routesApiVer1);

  // connect MongoDB
  await connectDB();

  // start server
  await server.start();
  console.log(`Server running on ${server.info.url}`);
};

init();