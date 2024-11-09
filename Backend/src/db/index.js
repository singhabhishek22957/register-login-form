import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
  const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}${DB_NAME}
      `,connectionOptions)
    console.log(connectionInstance.connection.host);
  } catch (error) {

    console.log("Error to connect MongoDb: ", error);
    process.exit(1)


  }

}


export default connectDB


