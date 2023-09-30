import User from "../models/userSchema.js";


const registerCon = async (req, res) => {
  if (!req.body)
    return res.status(400).json({ message: "req body is undefined" });

  const { name, email, phone, password, cpassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) return res.status(409).json({ message: 'User Already Exists' });

    if (!name || !email || !phone || !password || !cpassword)
      return res.status(400).json({ message: "Fill all inputs" });

    if (password !== cpassword)
      return res.status(400).json({ message: "password should be Matched" });



    const userData = await User.create({ name, email, phone, password,cpassword });

    res.status(200).json({ message: "saved at data base", userData });
  } catch (error) {
    res.status(500).json({ message: `Something went wrong at register  ${error}` });
  }
};
export default registerCon;
