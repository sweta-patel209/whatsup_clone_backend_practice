//const route = require("express").Router();
import express from "express";
import {addUser, getUsers } from "../controller/user-controller.js"
//export const addUser = require("../controller/user-controller.js");

const route = express.Router();
route.post('/add', addUser)
route.get('/users',getUsers)

export default route