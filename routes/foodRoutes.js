const express = require("express");
const router = express.Router();

router.get("/soups", (req, res) => {
	const soups = ["Tomato soup", "Chicken noodle soup", "Minestrone soup"];
	res.send(soups);
});

router.get("/salads", (req, res) => {
	const salads = ["Caesar salad", "Greek salad", "Cobb salad"];
	res.send(salads);
});

module.exports = router;
