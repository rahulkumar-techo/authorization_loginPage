import mongoose from "mongoose"

const db = async (req ,res) =>{

    try {
        const conn = await mongoose.connect(process.env.MONGOOSE_URL);
        console.log(`DataBase is Connected with server ${conn.connection.host}`.bgBlue.bold);
        
    } catch (error) {
        console.log(` Error at DataBase ${error}`)
    }
}

export default db;