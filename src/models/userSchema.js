import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import  Jwt  from "jsonwebtoken";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    work: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    cpassword: {
      type: String,
      required: true,
    },
    tokens:[
      {
        token:{
          type: String,
          required: true,
        }
      }
    ]
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  // isModified
  // we need to hashed the Password , when someone change the password
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.cpassword =await bcrypt.hash(this.cpassword, 10);
  }

  next();
});
      //GENERATE TOKEN 
      // USE NORMAL FUNCTION
      // sign(payload,secret_key,options)
      // STORE AT DB.
      // AFTER GENERATING TOKEN DONT'T FORGET TO SAVE IT.
      userSchema.methods.generateJWT = async function() {
        try {
            let token = Jwt.sign({_id: this._id}, process.env.SECRET_KEY, {expiresIn: '1d'});
            this.tokens = this.tokens.concat({token}); 
            await this.save();
            return token;
        } catch (error) {
            console.error("Error generating JWT:", error);
            throw error; // Throw the error so the calling function can handle it.
        }
    }
    

const User = model("User", userSchema);

export default User;
