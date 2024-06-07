const express = require("express");
//dummies
const Week1 = require("../models/week1Model");
const Week2 = require("../models/week2Model");
const Week3 = require("../models/week3Model");
const Week4 = require("../models/week4Model");
//WEBDEV
const Web1 = require("../models/webweek1Model")
const Web2 = require("../models/webweek2Model")
const Web3 = require("../models/webweek3Model")
const Web4 = require("../models/webWeek4Model")
//APPDEV
const App1 = require("../models/appweek1Model")
const App2 = require("../models/appweek2model")
const App3 = require("../models/appweek3Model")
const App4 = require("../models/appweek4Model")
//DESIGN
const Design1 = require("../models/designweek1Model")
const Design2 = require("../models/designweek2Model")
const Design3 = require("../models/designweek3Model")
const Design4 = require("../models/designWeek4Model")
//AIML
const AIML1 = require("../models/aimlweek1Model")
const AIML2 = require("../models/aimlweek2Model")
const AIML3 = require("../models/aimlweek3Model")
const AIML4 = require("../models/aimlweek4Model")
//DSA
const DSA1 = require("../models/dsaweek1Model")
const DSA2 = require("../models/dsaweek2Model")
const DSA3 = require("../models/dsaweek3Model")
const DSA4 = require("../models/dsaweek4Model")
//Registration
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
//dummies
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
//WEB////////////////////////////////////////////////////////////////////////////////////////
router.get('/webweek1/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await Web1.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in webweek1' })
  }

  res.status(200).json(record)
})

router.get('/webweek2/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await Web2.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in webweek2' })
  }

  res.status(200).json(record)
})

router.get('/webweek3/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await Web3.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in webweek3' })
  }

  res.status(200).json(record)
})

router.get('/webweek4/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await Web4.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in webweek4' })
  }

  res.status(200).json(record)
})
///APP///////////////////////////////////////////////////////////////////////////////////////
router.get('/appweek1/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await App1.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in appweek1' })
  }

  res.status(200).json(record)
})

router.get('/appweek2/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await App2.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in appweek2' })
  }

  res.status(200).json(record)
})

router.get('/appweek3/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await App3.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in appweek3' })
  }

  res.status(200).json(record)
})

router.get('/appweek4/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await App4.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in appweek4' })
  }

  res.status(200).json(record)
})
///DESIGN///////////////////////////////////////////////////////////////////////////////////////
router.get('/designweek1/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await Design1.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in designweek1' })
  }

  res.status(200).json(record)
})

router.get('/designweek2/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await Design2.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in designweek2' })
  }

  res.status(200).json(record)
})

router.get('/designweek3/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await Design3.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in designweek3' })
  }

  res.status(200).json(record)
})

router.get('/designweek4/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await Design4.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in designweek4' })
  }

  res.status(200).json(record)
})
///AIML///////////////////////////////////////////////////////////////////////////////////////
router.get('/aimlweek1/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await AIML1.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in aimlweek1' })
  }

  res.status(200).json(record)
})

router.get('/aimlweek2/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await AIML2.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in aimlweek2' })
  }

  res.status(200).json(record)
})

router.get('/aimlweek3/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await AIML3.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in aimlweek3' })
  }

  res.status(200).json(record)
})

router.get('/aimlweek4/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await AIML4.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in aimlweek4' })
  }

  res.status(200).json(record)
})
///DSA///////////////////////////////////////////////////////////////////////////////////////
router.get('/dsaweek1/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await DSA1.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in dsaweek1' })
  }

  res.status(200).json(record)
})

router.get('/dsaweek2/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await DSA2.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in dsaweek2' })
  }

  res.status(200).json(record)
})

router.get('/dsaweek3/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await DSA3.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in dsaweek3' })
  }

  res.status(200).json(record)
})

router.get('/dsaweek4/:id', async (req,res)=> {
  const {id} = req.params

  if(!containsOnlyDigits(id)){
      return res.status(404).json({ error: 'Not valid number' })
  }

  const record = await DSA4.findById(id)

  if (!record) {
      return res.status(404).json({ error: 'No such record in dsaweek4' })
  }

  res.status(200).json(record)
})

//all get requests
//dummies
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
//WEB////////////////////////////////////////////////////////////////////////////////////////
router.get("/webweek1", async (req, res) => {
  const alltasks = await Web1.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/webweek2", async (req, res) => {
  const alltasks = await Web2.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/webweek3", async (req, res) => {
  const alltasks = await Web3.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/webweek4", async (req, res) => {
  const alltasks = await Web4.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});
//APP////////////////////////////////////////////////////////////////////////////////////////
router.get("/appweek1", async (req, res) => {
  const alltasks = await App1.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/appweek2", async (req, res) => {
  const alltasks = await App2.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/appweek3", async (req, res) => {
  const alltasks = await App3.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/appweek4", async (req, res) => {
  const alltasks = await App4.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});
//DESIGN////////////////////////////////////////////////////////////////////////////////////////
router.get("/designweek1", async (req, res) => {
  const alltasks = await Design1.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/designweek2", async (req, res) => {
  const alltasks = await Design2.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/designweek3", async (req, res) => {
  const alltasks = await Design3.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/designweek4", async (req, res) => {
  const alltasks = await Design4.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});
//AIML////////////////////////////////////////////////////////////////////////////////////////
router.get("/aimlweek1", async (req, res) => {
  const alltasks = await AIML1.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/aimlweek2", async (req, res) => {
  const alltasks = await AIML2.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/aimlweek3", async (req, res) => {
  const alltasks = await AIML3.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/aimlweek4", async (req, res) => {
  const alltasks = await AIML4.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});
//DSA////////////////////////////////////////////////////////////////////////////////////////
router.get("/dsaweek1", async (req, res) => {
  const alltasks = await DSA1.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/dsaweek2", async (req, res) => {
  const alltasks = await DSA2.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/dsaweek3", async (req, res) => {
  const alltasks = await DSA3.find({}).sort({ createdAt: -1 });

  res.status(200).json(alltasks);
});

router.get("/dsaweek4", async (req, res) => {
  const alltasks = await DSA4.find({}).sort({ createdAt: -1 });

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

//ALL POST REQS
//dummies
router.post("/week1", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week1 = await Week1.create({
      _id,name,task1,task2,task3,task4,task5,task6,task7,task8,link1,link2
    });
    res.status(200).json(week1);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/week2", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week2 = await Week2.create({_id,name,task1, task2, task3, task4, task5, task6, task7, task8,link1,link2});
    res.status(200).json(week2);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/week3", async (req, res) => {
  const { _id, name,task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week3 = await Week3.create({ _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 });
    res.status(200).json(week3);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/week4", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week4 = await Week4.create({ _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 });
    res.status(200).json(week4);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//web//////////////////////////////////////////////////////////////////////////////////
router.post("/webweek1", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week1 = await Web1.create({
      _id,name,task1,task2,task3,task4,task5,task6,task7,task8,link1,link2
    });
    res.status(200).json(week1);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/webweek2", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week2 = await Web2.create({_id,name,task1, task2, task3, task4, task5, task6, task7, task8,link1,link2});
    res.status(200).json(week2);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/webweek3", async (req, res) => {
  const { _id, name,task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week3 = await Web3.create({ _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 });
    res.status(200).json(week3);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/webweek4", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week4 = await Web4.create({ _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 });
    res.status(200).json(week4);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//APP//////////////////////////////////////////////////////////////////////////////////
router.post("/appweek1", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week1 = await App1.create({
      _id,name,task1,task2,task3,task4,task5,task6,task7,task8,link1,link2
    });
    res.status(200).json(week1);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/appweek2", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week2 = await App2.create({_id,name,task1, task2, task3, task4, task5, task6, task7, task8,link1,link2});
    res.status(200).json(week2);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/appweek3", async (req, res) => {
  const { _id, name,task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week3 = await App3.create({ _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 });
    res.status(200).json(week3);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/appweek4", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week4 = await App4.create({ _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 });
    res.status(200).json(week4);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//DESIGN//////////////////////////////////////////////////////////////////////////////////
router.post("/designweek1", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week1 = await Design1.create({
      _id,name,task1,task2,task3,task4,task5,task6,task7,task8,link1,link2
    });
    res.status(200).json(week1);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/designweek2", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week2 = await Design2.create({_id,name,task1, task2, task3, task4, task5, task6, task7, task8,link1,link2});
    res.status(200).json(week2);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/designweek3", async (req, res) => {
  const { _id, name,task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week3 = await Design3.create({ _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 });
    res.status(200).json(week3);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/designweek4", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week4 = await Design4.create({ _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 });
    res.status(200).json(week4);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//AIML//////////////////////////////////////////////////////////////////////////////////
router.post("/aimlweek1", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week1 = await AIML1.create({
      _id,name,task1,task2,task3,task4,task5,task6,task7,task8,link1,link2
    });
    res.status(200).json(week1);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/aimlweek2", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week2 = await AIML2.create({_id,name,task1, task2, task3, task4, task5, task6, task7, task8,link1,link2});
    res.status(200).json(week2);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/aimlweek3", async (req, res) => {
  const { _id, name,task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week3 = await AIML3.create({ _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 });
    res.status(200).json(week3);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/aimlweek4", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week4 = await AIML4.create({ _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 });
    res.status(200).json(week4);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//DSA//////////////////////////////////////////////////////////////////////////////////
router.post("/dsaweek1", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week1 = await DSA1.create({
      _id,name,task1,task2,task3,task4,task5,task6,task7,task8,link1,link2
    });
    res.status(200).json(week1);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/dsaweek2", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week2 = await DSA2.create({_id,name,task1, task2, task3, task4, task5, task6, task7, task8,link1,link2});
    res.status(200).json(week2);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/dsaweek3", async (req, res) => {
  const { _id, name,task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week3 = await DSA3.create({ _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 });
    res.status(200).json(week3);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/dsaweek4", async (req, res) => {
  const { _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 } = req.body;

  try {
    const week4 = await DSA4.create({ _id, name, task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 });
    res.status(200).json(week4);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//all patch requests
//dummies
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
//web//////////////////////////////////////////////////////////////////////////////////////////
router.patch("/webweek1/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await Web1.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for webweek1" });
  }

  res.status(200).json(record);
});

router.patch("/webweek2/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await Web2.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for webweek2" });
  }

  res.status(200).json(record);
});

router.patch("/webweek3/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await Web3.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for webweek3" });
  }

  res.status(200).json(record);
});

router.patch("/webweek4/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await Web4.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for webweek4" });
  }

  res.status(200).json(record);
});
//APP//////////////////////////////////////////////////////////////////////////////////////////
router.patch("/appweek1/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await App1.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for appweek1" });
  }

  res.status(200).json(record);
});

router.patch("/appweek2/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await App2.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for appweek2" });
  }

  res.status(200).json(record);
});

router.patch("/appweek3/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await App3.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for appweek3" });
  }

  res.status(200).json(record);
});

router.patch("/appweek4/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await App4.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for appweek4" });
  }

  res.status(200).json(record);
});
//DESIGN//////////////////////////////////////////////////////////////////////////////////////////
router.patch("/designweek1/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await Design1.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for designweek1" });
  }

  res.status(200).json(record);
});

router.patch("/designweek2/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await Design2.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for designweek2" });
  }

  res.status(200).json(record);
});

router.patch("/designweek3/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await Design3.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for designweek3" });
  }

  res.status(200).json(record);
});

router.patch("/designweek4/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await Design4.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for designweek4" });
  }

  res.status(200).json(record);
});
//AIML//////////////////////////////////////////////////////////////////////////////////////////
router.patch("/aimlweek1/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await AIML1.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for aimlweek1" });
  }

  res.status(200).json(record);
});

router.patch("/aimlweek2/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await AIML2.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for aimlweek2" });
  }

  res.status(200).json(record);
});

router.patch("/aimlweek3/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await AIML3.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for aimlweek3" });
  }

  res.status(200).json(record);
});

router.patch("/aimlweek4/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await AIML4.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for aimlweek4" });
  }

  res.status(200).json(record);
});
//DSA//////////////////////////////////////////////////////////////////////////////////////////
router.patch("/dsaweek1/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await DSA1.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for dsaweek1" });
  }

  res.status(200).json(record);
});

router.patch("/dsaweek2/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await DSA2.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for dsaweek2" });
  }

  res.status(200).json(record);
});

router.patch("/dsaweek3/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await DSA3.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for dsaweek3" });
  }

  res.status(200).json(record);
});

router.patch("/dsaweek4/:id", async (req, res) => {
  const { id } = req.params;

  if (!containsOnlyDigits(id)) {
    return res.status(404).json({ error: "Not valid number" });
  }

  const record = await DSA4.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(404).json({ error: "No such record for dsaweek4" });
  }

  res.status(200).json(record);
});


module.exports = router;
