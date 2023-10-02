import User from "../models/userSchema.js";

const loginCon = async (req,res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password)
      return res.status(400).json({ message: "Invalid Email or Password" });

         const user = await User.findOne({ email });
            if (!user) return res.status(401).json({ message: 'email or Password not Matched' });
            

            
            res.status(200).json({message:"login",user})
        
  } catch (error) {
    res.status(400).json({message:error})
  }
};

export default loginCon;