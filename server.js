const express = require("express");
const foodRoutes = require("./routes/foodRoutes");
const app = express();

app.use(express.static("public"));

const PORT = 8080;

const loggerMiddleware = (req, res, next) => {
	console.log(
		`Received ${req.method} request for ${req.url} at ${new Date()}`
	);
	next();
};

app.use(loggerMiddleware);
app.use("/foods", foodRoutes);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
