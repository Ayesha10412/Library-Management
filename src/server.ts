import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
let server: Server;
const PORT = 5000;
async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://libraryManagement:mqaHolNaRB1t2JoS@cluster0.i7pwp.mongodb.net/library-management?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connecting to Mongodb using Mongoose!!");
    server = app.listen(PORT, () => {
      console.log(`App is listening in PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
