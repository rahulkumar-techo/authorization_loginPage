import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let formErrors = {};
    // Simple validation checks
    if (!formData.name) formErrors.username = "Username is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone) formErrors.phone = "Email is required";
    if (!formData.work) formErrors.work = "Email is required";
    if (!formData.password) formErrors.password = "Email is required";
    if (!formData.cpassword) formErrors.cpassword = "Email is required";
    if(formData.password !== formData.cpassword) return;

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid and can be submitted!");
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div
      className="  bg-blue-500 flex-col gap-3 justify-center items-center "
      style={{ minHeight: "70vh", height: "auto" }}
    >
      {/* FORM */}
      <div className="md:flex justify-center gap-3 items-center md:gap-10 md:pt-5 md:mx-6">
        <form
          action=""
          onSubmit={handleSubmit}
          className="  flex flex-col gap-8 p-5 rounded-md items-center w-2/5"
          style={{
            backdropFilter: "blur(30px)",
            background: "rgba(128, 128, 128, 0.7)",
          }}
        >
          <h3 className=" text-center font-bold text-gray-100 break-words tracking-wide ">
            Sign in
          </h3>
          <div className="flex gap-2 ">
            <label
              htmlFor="name"
              className=" text-white"
              style={{ fontSize: "1.5rem" }}
            >
              <AiOutlineUser />
            </label>
            <input
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              type="text"
              name="name"
              className={`outline-none border-b-2 ms-4    bg-transparent focus:border-b-green-400 cursor-pointer ${
                errors.username ? "input-error" : ""
              }`}
            />
          </div>

          <div className="flex gap-2">
            <label
              htmlFor="email"
              className=" text-white"
              style={{ fontSize: "1.5rem" }}
            >
              {" "}
              <AiOutlineMail />
            </label>
            <input
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your Email"
              type="email"
              name="email"
              className={`outline-none border-b-2 ms-4 bg-transparent  focus:border-b-green-400 cursor-pointer ${
                errors.username ? "input-error" : ""
              }`}
            />
          </div>
          <div className="flex gap-2">
            <label
              htmlFor="phone"
              className=" text-white"
              style={{ fontSize: "1.5rem" }}
            >
              <AiOutlinePhone />
            </label>
            <input
            placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              type="Number"
              name="phone"
              className={`outline-none border-b-2 ms-4 bg-transparent  focus:border-b-green-400 cursor-pointer ${
                errors.username ? "input-error" : ""
              }`}
            />
          </div>
          <div className="flex gap-2">
            <label
              htmlFor="work"
              className=" text-white"
              style={{ fontSize: "1.5rem" }}
            >
              <BsPersonWorkspace />
            </label>
            <input
            placeholder="Enter your work "
              value={formData.work}
              onChange={handleInputChange}
              type="text"
              name="work"
              className={`outline-none border-b-2 ms-4 bg-transparent   focus:border-b-green-400 cursor-pointer ${
                errors.username ? "input-error" : ""
              }`}
            />
          </div>
          <div className="flex gap-2">
            <label
              htmlFor="password"
              className=" text-white"
              style={{ fontSize: "1.5rem" }}
            >
              <RiLockPasswordFill />
            </label>
            <input
            placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              type="pasword"
              name="password"
              className={`outline-none border-b-2 ms-4 bg-transparent focus:border-b-green-400 cursor-pointer ${
                errors.username ? "input-error" : ""
              }`}
            />
          </div>
          <div className="flex gap-2">
            <label
              htmlFor="cpassword"
              className=" text-white"
              style={{ fontSize: "1.5rem" }}
            >
              <RiLockPasswordLine />
            </label>
            <input
            placeholder="Enter your confirm password"
              value={formData.cpassword}
              onChange={handleInputChange}
              type="password"
              name="cpassword"
              className={`outline-none border-b-2 ms-4 bg-transparent  focus:border-b-green-400 cursor-pointer ${
                errors.username ? "input-error" : ""
              }`}
            />
          </div>
          <button className=" bg-green-400 rounded px-3 py-2 hover:bg-green-600">
            Sign in{" "}
          </button>
        </form>

      </div>
    </div>
  );
}

export default Register;
