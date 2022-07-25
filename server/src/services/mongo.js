const mongoose = require("mongoose");

const MONGO_URL = `mongodb+srv://nasa-api:4tXG4ihG8sYrzcEq@nasacluster.x1xtz.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connection.once("open", () => {
    console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}
