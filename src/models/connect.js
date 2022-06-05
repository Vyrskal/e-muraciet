import mongoose from "mongoose";
const keys = require("../config/keys");
function connect() {
    mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
    .then(() => console.log("Connected to DB!"))
    .catch((err) => console.log(err));
}

export default connect;