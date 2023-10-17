import React from "react";

import { useEffect, useState } from "react";
  import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { FaPhone, FaMapMarker, FaEnvelope } from "react-icons/fa";

// service id service_0ve7nln
//private key Ns0pJ2owyLtnk1rbgSIpa
// public key rm7P0uYj_0xhvG3Cf
const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [Loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("rm7P0uYj_0xhvG3Cf"), []);
  const handleClick = async (e) => {
    e.preventDefault();
    const serviceId = "service_0ve7nln";
    const templateId = "template_cabvrh5";

    const emailPerams = {
      from_name: values.name,
      to_email: values.email,
      message: values.message,
    };
    try {
      setLoading(true);

      const response = await emailjs.send(serviceId, templateId, emailPerams);
      if (response.status === 200) {
        console.log("email successfully sent check your email inbox");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.log("Email failed please try again");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = yup.object({
    name: yup
      .string("only the strings allowed")
      .min(2, "minimum characters 2")
      .required("Name is required"),
    email: yup
      .string()
      .email("invalid email format")
      .required("Email is required"),
    subject: yup
      .string()
      .min(3, "Too short, minimum length is 3 characters")
      .max(15, "Too long, maximum length is 30 characters")
      .required("This field is required"),
    message: yup
      .string()
      .min(10, "message is minimum 10 words")
      .max(30, "message is maximum 30 words")
      .required("this field is required"),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, action) => {
        console.log("data submitted");
        setName(name);
        setEmail(email);
        setMessage(message);
        action.resetForm();
      },
    });
    return (
    <React.Fragment>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="row mt-1">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <FaMapMarker
                    className="social-media-icon"
                    style={{ fontSize: "24px", color: "blue" }}
                  />
                  <h4>Location:</h4>
                  <p>Gilgit Baltistan, Pakistan</p>
                </div>

                <div className="email">
                  <FaEnvelope
                    className="social-media-icon"
                    style={{ fontSize: "24px", color: "blue" }}
                  />
                  <h4>Email:</h4>
                  <p>sameerbalti704@gmail.com</p>
                </div>

                <div className="phone">
                  <FaPhone
                    className="social-media-icon"
                    style={{ fontSize: "24px", color: "blue" }}
                  />
                  <h4>Call:</h4>
                  <p>+92 348 7753039</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <form>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name here"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-errors">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email here"
                      requiredvalue={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-errors">{errors.email}</p>
                    ) : null}
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Your subject here "
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.subject && touched.subject ? (
                    <p className="form-errors">{errors.subject}</p>
                  ) : null}
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Your message here"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                  {errors.message && touched.message ? (
                    <p className="form-errors">{errors.message}</p>
                  ) : null}
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <Button variant="contained" onClick={handleClick}>
                    Submit Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
