// This file is for retrieving all tasks contents from the database

// get all the tasks
const getAllTasks = async (req, res, tasksCollection) => {
  try {
    const tasks = await tasksCollection.find().toArray();
    res.send(tasks);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

// Get signle task by id
const getSingleTask = async (req, res, tasksCollection) => {
  // const id = req.params.id
  try {
    const user = await tasksCollection.findOne({
      _id: new ObjectId("65ad579d9cca80253c1e8a74"),
    });
    res.send(user);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
};
