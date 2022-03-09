import React, { useState } from "react";
import BtnHome from "../components/BtnHome";
import { MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import InputFields from "../components/InputFields";
import TextareaField from "../components/TextareaField";

const data = [
  "(+62)83856685396",
  "helkaseptyawan@gmail.com",
  "62353 Tambaboyo Tuban",
];

const Contact = () => {
  //components phone number, email and address
  const BtnLink = () => {
    return (
      <div className="space-y-7 flex flex-col w-10/12 opacity-80 mx-auto translate-y-1/2">
        {data.map((d, index) => {
          return (
            <p
              className="items-center cursor-default text-center space-y-7 xl:w-10/12 w-11/12 py-2 rounded-md bg-third mx-auto"
              key={index}
            >
              {d}
            </p>
          );
        })}
      </div>
    );
  };

  //for controlling form values
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  console.log(values);

  //handlechange
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  //status submit
  const [status, setStatus] = useState("");

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_30nuedg", "template_4dx1dos", values, "rVbFz0R4JvwaziGqO")
      .then(
        (response) => {
          console.log("SUCCESS", response);
          setValues({
            name: "",
            email: "",
            message: "",
          });
          setStatus("success");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    e.value.reset();
  };
  return (
    <section className="md:h-screen max-h-max bg-contact py-16 xl:px-24 md:px-20 px-8 overflow-hidden">
      <div className="container mx-auto relative flex md:p-5 p-0">
        <div className="md:w-8/12 h-screen">
          <h1 className="font-title text-5xl text-secondary">Lets</h1>
        </div>
        <div className="md:w-4/12 w-full h-screen flex justify-end">
          <div className="h-4/6 w-10/12 bg-secondary rounded-2xl opacity-80" />
        </div>
        <div className="absolute md:h-96 max-h-max md:w-11/12 w-full top-20 md:right-16 space-y-7">
          <h1 className="text-5xl font-title">Collaborative</h1>
          <div className="flex bg-primary rounded-2xl h-full xl:mx-12 md:mx-9 shadow-2xl md:flex-row flex-col">
            <div className="md:w-8/12 md:p-7 p-4 relative">
              {status && renderAlert()}
              <form
                onSubmit={handleSubmit}
                className="space-y-5 h-full flex flex-col"
              >
                <InputFields
                  label="Full name"
                  name="fullname"
                  type="text"
                  placeholder="Your name"
                  handleChange={handleChange}
                />
                <TextareaField
                  label="Your massage and desc here"
                  handleChange={handleChange}
                  name="message"
                />
                <br />
                <InputFields
                  label="Email"
                  name="email"
                  type="text"
                  placeholder="Your email"
                  handleChange={handleChange}
                />

                <button
                  type="submit"
                  value="sendEmail"
                  className="absolute bg-third rounded-full p-2 md:bottom-3 md:right-8 bottom-4 right-4"
                >
                  <MdSend size={28} />
                </button>
              </form>
            </div>
            <div className="md:w-4/12 w-full space-y-7">
              <BtnLink />
            </div>
          </div>
        </div>
        <BtnHome />
      </div>
    </section>
  );
};

//renderAlert if email success sending

const renderAlert = () => {
  return (
    <div className="flex opacity-80 items-center max-w-max px-2 py-1 bg-secondary rounded-md my-1 text-third">
      <p>Thanks bro, your email message sended</p>
    </div>
  );
};

export default Contact;
