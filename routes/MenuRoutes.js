const express = require("express");
const Menu = require("../models/MenuItem");
const router = express();

router.post("/", async (req, res) => {
  try {
    const personData = req.body;
    const SavedData = new Menu(personData);
    const response = await SavedData.save();
    res.status(200).json({ success: "Data Uploaded Successfully", response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    res.status(200).json({ success: "All Menu Data", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;
    const response = await Menu.find({ taste: taste });
    res.status(200).json({ success: "Taste Data Appeared", response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const MenuId = req.params.id;
    const MenuData = req.body;
    const response = await Menu.findByIdAndUpdate(MenuId, MenuData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: "Menu Updated Successfully", response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const MenuId = req.params.id;
    const response = await Menu.findByIdAndDelete(MenuId);
    res.status(200).json({ success: "Menu Deleted Successfully", response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
