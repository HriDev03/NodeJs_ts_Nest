import mongoose from "mongoose";

const connectDb = async () => {
    try {
        
        const connection = await mongoose.connect(process.env.CONNECTION_STRING!, {
            dbName: "url_shortner", 
        });
       

    console.log(
      "✅ DB Connected:",
      connection.connection.host,
      connection.connection.name
    );
  } catch (error) {
    console.error("❌ DB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDb;


