const express = require('express');
const router = express.Router();

const {
  getAllEvents,
  createNewEvent,
  changeEvent,
  deleteEvent
} = require('../controllers/task.controller');

// Tasks routes
router.get('/getAllEvents', getAllEvents);
router.post('/createNewEvent', createNewEvent);
router.patch('/changeEvent', changeEvent);
router.delete('/deleteEvent', deleteEvent);

//User routes

module.exports = router;