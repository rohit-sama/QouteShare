import mongoose from "mongoose";

let isConneected = false;


export const connectDb = async  () => {
    mongoose.set('strictQuery', true);

    if(isConneected) {
        console.log('connected already');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "share_qoutes",
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });

        isConneected = true;
        console.log("mongoose connected")
    } catch (error) {
        console.log("error connecting database");
    }


}