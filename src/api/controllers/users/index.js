// Logic for retrieving all users from the database

const { ObjectId } = require("mongodb");

const getAllUsers = async (req, res,usersCollection) => {
  try {
    const users = await usersCollection.find().toArray();
    res.send(users);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

// Get signle user by id
const getSingleUser = async (req, res,usersCollection) => {
      // const id = req.params.id
  try {
    const user = await usersCollection.findOne({_id:new ObjectId("65a36a6931d9199a54903197")});
    res.send(user);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllUsers,
  getSingleUser
};
