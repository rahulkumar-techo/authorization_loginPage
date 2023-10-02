import User from "../models/userSchema.js";

const registerCon = async (req, res) => {
  if (!req.body)
    return res.status(400).json({ message: "req body is undefined" });

  const { name, email, phone, password, cpassword } = req.body;

  try {
    if (!name || !email || !phone || !password || !cpassword)
      return res.status(400).json({ message: "Fill all inputs" });

    if (password !== cpassword)
      return res.status(400).json({ message: "password should be Matched" });

    const user = await User.findOne({ email });
    if (user) return res.status(401).json({ message: "User Already Exists" });

    const userData = await User.create({
      name,
      email,
      phone,
      password,
      cpassword,
    });

    // CALLING TOKEN FROM SCHEMA
    const token = await userData.generateJWT(); 
    //TO SET TOKEN IN COOKIE 
    // will be expire in 24 = 8hrs = 6400000ms 
    res.cookie("jwtToken", token, {
      expires: new Date(Date.now() + 86400000),
      httpOnly: true,
      sameSite: 'none', 
      secure: true
  });

    res.status(200).json({ message: "saved at data base", userData });
  } catch (error) {
    res.status(500).json({ message: `Something went wrong at register  ${error.message}` });
  }
};

export default registerCon;
