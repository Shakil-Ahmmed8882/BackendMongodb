const express = require("express");
const createDB = require("../../db/createDB");
// import users controllers
const { getSingleUser, getAllUsers } = require("../controllers/users");
const router = express.Router();

// All routes initializer
(async function initializer() {

// create database colleciton
  const tasksCollection = await createDB("TestDB", "tasks");
  const usersCollection = await createDB("TestDB", "users");

//users related apis
  router.get("/users", async(req,res)=> await getAllUsers(req,res,usersCollection))
  router.get("/user", async(req,res)=> await getSingleUser(req,res,usersCollection))

// Task related apis 
router.get("/user", async(req,res)=> await getSingleUser(req,res,tasksCollection))
})();

module.exports = router;
