const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("Database connected");
//     } catch (error) {
//         console.error(error);
//         process.exit(1);
//     }
// };


function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Database connected");
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        })
}


module.exports = connectToDB