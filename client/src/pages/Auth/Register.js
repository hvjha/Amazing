import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";

import toast from "react-hot-toast";
import { RegisterData } from "../../services/LoginApi";
import register from "../../images/register.png";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  //form function
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await RegisterData({
  //       name,
  //       email,
  //       phone,
  //       address,
  //       password,
  //       answer,
  //     });

  //     if (res && res.data.success) {
  //       toast.success(res.data && res.data.message);
  //       navigate("/login");
  //     } else {
  //       toast.error(res.data.message);
  //     }
  //   } catch (error) {
  //     console.log("error while register ", error);
  //     toast.error(`Something went wrong ${error.message}`);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // check if all the required fields are filled
      if (!name || !email || !phone || !address || !password || !answer) {
        toast.error("Please fill all the required fields.");
        return;
      }

      // data to be sent
      const data = {
        name,
        email,
        phone,
        address,
        password,
        answer,
      };

      // call the API for registration
      const res = await RegisterData(data);

      if (res && res.data && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        // handle the error message if registration fails
        if (res && res.data && res.data.message) {
          toast.error(res.data.message);
        } else {
          toast.error("Registration failed. Please try again later.");
        }
      }
    } catch (error) {
      console.error("Error while registering: ", error);
      toast.error(`Something went wrong ${error.message}`);
    }
  };

  return (
    <Layout title={"Register"}>
      <div className="registerPage">
        <div className="registerLeft">
          <h5 className="text-center" style={{ color: "white" }}>
          Sign up with your Email to get started !
          </h5>
          <img src={register} alt="login img" className="img_register" />
        </div>

        <div className="registerRight">
          <form onSubmit={handleSubmit} className="registerForm">

          <div className="registerInput">

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="exampleInputName"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail"
                required
              />
            </div>
          </div>
          <div className="registerInput">

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Phone
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                id="exampleInputPhone"
                required
              />
            </div>
          </div>
          <div className="registerInput">

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                id="exampleInputAddress"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                What is your favourite sports ?
              </label>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                id="exampleInputEmai2"
                required
              />
            </div>
          </div>
          <div className="regBtnCnt">
            <button type="submit" className="btn btn_reg">
              Register
            </button>
</div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;


