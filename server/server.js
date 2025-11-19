require("dotenv").config();
const oExpress = require('express');
const oMongoose = require("mongoose");
const oBodyParser = require("body-parser");
const cors = require("cors");
const oLoginRoute = require("./routes/LoginRoute");

const oApp = oExpress();
oApp.use(cors());
oApp.use(oBodyParser.json());

oMongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Cant connect to mongodb:", err);
});

oApp.use("/api", oLoginRoute);

oApp.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));