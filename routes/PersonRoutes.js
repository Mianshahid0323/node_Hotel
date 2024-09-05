const express = require("express");
const Person = require("../models/Person");

const router = express();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const PersonData = new Person(data);
    const SavedData = await PersonData.save();
    console.log("Data Saved");
    res.status(200).json({ success: "Person has been Created", SavedData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Creation Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const FetchData = await Person.find();
    console.log("Data Fetched");
    res.status(200).json({ success: "Data Fetched Successfully", FetchData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Fetch Failed" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "Chef" || workType == "Waiter" || workType == "Manager") {
      const response = await Person.find({ work: workType });
      res.status(200).json({ success: "Searched Results", response });
    } else {
      res.status(500).json({ error: "Invalid Work Type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Something went wrong" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const personData = req.body;

    const response = await Person.findByIdAndUpdate(personId, personData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      res.status(400).json({ error: "Person not found" });
    } else {
      res.status(200).json({ success: "Data Updated Successfully", response });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPerson = req.params.id;
    const response = await Person.findByIdAndDelete(deletedPerson);

    if (!response) {
      res.status(500).json({ error: "Person Not Found" });
    } else {
      res
        .status(200)
        .json({ success: "Person Deleted Successfully", response });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Something went wrong" });
  }
});

module.exports = router;
