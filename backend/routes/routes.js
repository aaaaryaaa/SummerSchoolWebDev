const express = require("express");
const Week1 = require("../models/week1Model");
const Week2 = require("../models/week2Model");
const Week3 = require("../models/week3Model");
const Week4 = require("../models/week4Model");
const Registration = require("../models/registration");
const mongoose = require("mongoose");

const router = express.Router();

function containsOnlyDigits(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

router.get("/", (req, res) => {
  res.json({ mssg: "Hi lol" });
});

//all single get requests
router.get('/week1/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await Week1.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in week1' })
  }

  res.status(200).json(record)
})

router.get('/week2/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await Week2.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in week1' })
  }

  res.status(200).json(record)
})

router.get('/week3/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await Week3.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in week1' })
  }

  res.status(200).json(record)
})

router.get('/week4/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await Week4.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in week1' })
  }

  res.status(200).json(record)
})

//all get requests
router.get("/week1", async (req, res) => {
  const alltasks = await Week1.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/week2", async (req, res) => {
  const alltasks = await Week2.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/week3", async (req, res) => {
  const alltasks = await Week3.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/week4", async (req, res) => {
  const alltasks = await Week4.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

//all post requests
router.post("/registrations", async (req, res) => {
  const { phone_number, name } = req.body;

  try {
    const registration = await Registration.create({ phone_number, name });
    res.status(201).json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/week1", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, link1, link2 } = req.body;

  try {
    const week1 = await Week1.create({
      _id,
      name,
      task1,
      task2,
      task3,
      task4,
      task5,
      task6,
      link1,
      link2
    });
    res.status(200).json(week1);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/week2", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, link1, link2 } = req.body;

  try {
    const week2 = await Week2.create({
      _id,
      name,
      task1,
      task2,
      task3,
      task4,
      task5,
      link1,
      link2
    });
    res.status(200).json(week2);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/week3", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, link1, link2 } = req.body;

  try {
    const week3 = await Week3.create({ _id, name, task1, task2, task3, task4, link1, link2 });
    res.status(200).json(week3);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/week4", async (req, res) => {
  const { _id, name, task1, task2, link1, link2 } = req.body;

  try {
    const week4 = await Week4.create({ _id, name, task1, task2, link1, link2 });
    res.status(200).json(week4);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//all patch requests
router.patch("/week1/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await Week1.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for week1" });
  }

  res.status(200).json(record);
});

router.patch("/week2/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await Week2.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for week2" });
  }

  res.status(200).json(record);
});

router.patch("/week3/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await Week3.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for week3" });
  }

  res.status(200).json(record);
});

router.patch("/week4/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await Week4.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for week4" });
  }

  res.status(200).json(record);
});

module.exports = router;
