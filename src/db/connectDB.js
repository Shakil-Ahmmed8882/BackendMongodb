// This file ensures the connection with the mongoDB

const setupGlobalErrorHandling = require("../errorHandling/handleGlobalError");
const createMongoClient = require("./CreateMongoClient");
const allRoutes = require("../api/routes/index");

const connectDB = async (app, port) => {
  const client = createMongoClient();

  try {
    await client.connect();

    // Here you define all route file 
    app.use(allRoutes);

    console.log("successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Global error handling
    setupGlobalErrorHandling(app);

    // listen the app
    app.listen(port, () => {
      console.log(`The site is running on port ${port}`);
    });
  }
};

module.exports = connectDB;
