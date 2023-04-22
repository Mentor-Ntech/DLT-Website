import "./JoinUs.scss";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Congrat from "../Congrat/Congrat";
import { Navigate } from "react-router-dom";

import { client } from "../../client";

const JoinUs = () => {
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  //   schema that will validate form inputs
  const schema = yup.object().shape({
    firstname: yup
      .string()

      .required("First Name is required")
      .matches(
        /^(?=.{2,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/,
        "Only alphabets are allowed for this field "
      )
      .min(
        2,
        "First Name must be at least 2 characters and not more than 40 characters"
      )
      .max(40)
      .trim(),
    lastname: yup
      .string()
      .required("Last Name is required")
      .matches(
        /^(?=.{2,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/,
        "Only alphabets are allowed for this field "
      )
      .min(
        2,
        "Last Name must be at least 2 characters and not more than 40 characters"
      )
      .max(40)
      .trim(),
    stateOfOrigin: yup
      .string()
      .required("You must input your state of origin")
      .trim(),
    gender: yup.string().required("Your gender is required"),
    dob: yup.string().required("Date of Birth is required"),
    phoneNumber: yup
      .string()
      .required("Phone Number is required")
      .matches(
        /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
        "Phone Number musst be valid"
      ),
    AcadQual: yup
      .string()
      .required("You must select an academic qualification"),
    email: yup
      .string()
      .email("Email address must be valid")
      .required("Email is required")
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
        "Your email address must look like these 'example@gmail.com'"
      )
      .trim(),
    exp: yup.string().required("Let us know if you have a coding experience"),
    html: yup.string(),
    css: yup.string(),
    javascript: yup.string(),
    other: yup.string(),
  });

  // destructuring the form data using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // the function that will triggered the form submission
  const onSubmit = async (data) => {
    console.log(data);

    const join = {
      _type: "join",
      firstname: data.firstname,
      lastname: data.lastname,
      stateOfOrigin: data.stateOfOrigin,
      gender: data.gender,
      dob: data.dob,
      phoneNumber: data.phoneNumber,
      AcadQual: data.AcadQual,
      email: data.email,
      exp: data.exp,
      html: data.html,
      css: data.css,
      javascript: data.javascript,
      other: data.other,
    };

    const result = await client
      .create(join)
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        if (!err?.res) {
          setErrMsg("Network error: check your internet connection");
        } else {
          setErrMsg("Registration failed");
        }
      });

    return result;
  };

  return (
    <section className="joinUs container">
      {!success ? (
        <>
          <div className="headerText">
            <h2>Join Next Cohort</h2>
            <small className="pText">Fill the form below:</small>
          </div>

          <div className="formContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
              <article>
                <div>
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    type="text"
                    id="firstname"
                    {...register("firstname")}
                  />
                  <p
                    className={`${
                      errors.firstname ? "instruction" : "offscreen"
                    }`}
                  >
                    {errors.firstname?.message}
                  </p>
                </div>
                <div>
                  <label htmlFor="lastname">Lastname</label>
                  <input type="text" id="lastname" {...register("lastname")} />
                  <p
                    className={`${
                      errors.lastname ? "instruction" : "offscreen"
                    }`}
                  >
                    {errors.lastname?.message}
                  </p>
                </div>
                <div>
                  <label htmlFor="stateOfOrigin">State Of Origin</label>
                  <input
                    type="text"
                    id="stateOfOrigin"
                    {...register("stateOfOrigin")}
                  />
                  <p
                    className={`${
                      errors.stateOfOrigin ? "instruction" : "offscreen"
                    }`}
                  >
                    {errors.stateOfOrigin?.message}
                  </p>
                </div>
                <div>
                  <label htmlFor="gender">Gender</label>
                  <select name="gender" id="gender" {...register("gender")}>
                    <option value="">select an option</option>

                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <p
                    className={`${errors.gender ? "instruction" : "offscreen"}`}
                  >
                    {errors.gender?.message}
                  </p>
                </div>
                <div>
                  <label htmlFor="dob">Date of birth</label>
                  <input
                    type="date"
                    id="dob"
                    placeholder="DD/MM/YY"
                    {...register("dob")}
                  />
                  <p className={`${errors.dob ? "instruction" : "offscreen"}`}>
                    {errors.dob?.message}
                  </p>
                </div>
                <div>
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="number"
                    id="phoneNumber"
                    placeholder="+2348100000000"
                    {...register("phoneNumber")}
                  />
                  <p
                    className={`${
                      errors.phoneNumber ? "instruction" : "offscreen"
                    }`}
                  >
                    {errors.phoneNumber?.message}
                  </p>
                </div>
                <div>
                  <label htmlFor="AcadQual">Academy Qualification</label>
                  <select
                    name="AcadQual"
                    id="AcadQual"
                    {...register("AcadQual")}
                  >
                    <option value="">select an option</option>

                    <option value="PhD/Master Degree">PhD/Master Degree</option>
                    <option value="Bsc/Ba/HND">Bsc/Ba/HND</option>
                    <option value="ND">ND</option>
                    <option value="Secondary School Certificate">
                      Secondary School Certificate
                    </option>
                    <option value="Others">Others</option>
                  </select>
                  <p
                    className={`${
                      errors.AcadQual ? "instruction" : "offscreen"
                    }`}
                  >
                    {errors.AcadQual?.message}
                  </p>
                </div>
                <div>
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" {...register("email")} />
                  <p
                    className={`${errors.email ? "instruction" : "offscreen"}`}
                  >
                    {errors.email?.message}
                  </p>
                </div>

                <div>
                  <label htmlFor="exp">Coding Experience</label>
                  <select name="exp" id="exp" {...register("exp")}>
                    <option value="">select an option</option>

                    <option value="Advanced">Advanced</option>
                    <option value="Mid-Level">Mid-Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="No experience">No experience</option>
                  </select>
                  <p className={`${errors.exp ? "instruction" : "offscreen"}`}>
                    {errors.exp?.message}
                  </p>
                </div>
              </article>

              <aside>
                <p>Do You Know:</p>
                <input type="checkbox" id="html" {...register("html")} />
                <label htmlFor="html">HTML</label>
                <br />

                <input type="checkbox" id="css" {...register("css")} />
                <label htmlFor="css">CSS</label>
                <br />

                <input
                  type="checkbox"
                  id="javascript"
                  {...register("javascript")}
                />
                <label htmlFor="javascript">Javascript</label>
                <br />

                <input type="checkbox" id="other" {...register("other")} />
                <label htmlFor="other">None of the above</label>
                <br />
              </aside>

              <div className="btnCon">
                <button className="genBtn">Submit</button>
              </div>
            </form>
            <p
              className={errMsg ? "errMsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
          </div>
        </>
      ) : (
        <Navigate to="/congrat" replace={true} />
      )}
    </section>
  );
};

export default JoinUs;
