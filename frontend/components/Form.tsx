"use client";

import { useState } from "react";
import { Button, Modal } from "antd";
import PaymentOptions from "./PaymentOptions";

// TODO: Cater for the number of cards

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userData, setUserData] = useState({
    amountToPay: "",
    name: "",
    phoneNumber: "",
    email: "",
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const handleChange = (e: any) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (userData.amountToPay === "") {
      alert("Select your desired intecu plan");
      return;
    }
    if (userData.name === "") {
      alert("Name field cannot be empty");
      return;
    }
    if (userData.phoneNumber === "") {
      alert("Phone Number field cannot be empty");
      return;
    }
    if (userData.email === "") {
      alert("Email field cannot be empty");
      return;
    }

    // console.log(userData)

    // Send data to API (async)

    // Show Modal when API receives it
    showModal();
    // setUserData({
    //   amountToPay: "",
    //   name: "",
    //   phoneNumber: "",
    //   email: "",
    // });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" max-w-2xl flex flex-col gap-10 lg:p-10 w-full  "
    >
      <div className=" flex flex-col gap-3 w-full ">
        <label htmlFor="who" className=" text-sm ">
          Who do you want to pay <span className=" text-red-600 ">*</span>{" "}
        </label>
        <input
          type="text"
          readOnly
          value="INTECU"
          className=" p-2 border border-gray-500 w-full "
        />
      </div>

      <div className=" flex flex-col gap-3 ">
        <label htmlFor="who" className=" text-sm ">
          Name of service/purpose <span className=" text-red-600 ">*</span>{" "}
        </label>
        <div className="">
          <select className="p-2 border border-gray-500 w-full">
            <option value="csc407">CSC407 Software Service</option>
          </select>
        </div>
        <div>
          <p className=" text-xs text-gray-500 ">
            Select from the list of available services
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className=" flex flex-col gap-3 w-full ">
          <label htmlFor="who" className=" text-sm ">
            Amount to pay (₦) <span className=" text-red-600 ">*</span>{" "}
          </label>
          <select
            className="p-2 border border-gray-500 w-full"
            onChange={handleChange}
            required
            name="amountToPay"
          >
            <option value="">{""}</option>
            <option value="100">&#8358;100 for 4 hours</option>
            <option value="500">&#8358;500 for 1 day</option>
            <option value="1000">&#8358;1000 for 7 days</option>
          </select>
        </div>

        <div className=" flex flex-col gap-3 w-full ">
          <label htmlFor="who" className=" text-sm ">
            Select currency <span className=" text-red-600 ">*</span>{" "}
          </label>
          {/* <input type="text" className=' p-2 border border-gray-500 w-full ' /> */}
          <select name="" className="p-2 border border-gray-500 w-full cursor-not-allowed">
            <option value="naira">NGN - NIGERIAN NAIRA</option>
          </select>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className=" flex flex-col gap-3 w-full ">
          <label htmlFor="who" className=" text-sm ">
            Payers Name<span className="text-red-600">*</span>{" "}
          </label>
          <input
            type="text"
            className=" p-2 border border-gray-500 w-full"
            placeholder="Emore Ogheneyoma"
            name="name"
            onChange={handleChange}
            required
          />
        </div>

        <div className=" flex flex-col gap-3 w-full ">
          <label htmlFor="who" className=" text-sm ">
            Payer’s Phone<span className=" text-red-600 ">*</span>{" "}
          </label>
          <input
            type="text"
            className=" p-2 border border-gray-500 w-full "
            placeholder="07061393489"
            name="phoneNumber"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className=" flex flex-col gap-3 w-full ">
        <label htmlFor="who" className=" text-sm ">
          Payer’s Email<span className=" text-red-600 ">*</span>{" "}
        </label>
        <input
          type="email"
          className="p-2 border border-gray-500 w-full"
          placeholder="olemore@student.oauife.edu.ng"
          name="email"
          onChange={handleChange}
          required
        />
      </div>

      <p>
        By clicking Submit you agree to our{" "}
        <span className=" text-[#F66838] cursor-pointer "> Terms and Conditions</span> and{" "}
        <span className=" text-[#F66838] cursor-pointer "> Privacy Policy</span>{" "}
      </p>
      <div className=" flex gap-10">
        <button className=" cursor-pointer hover:bg-[#f66839] transition-all duration-300 px-8 py-5 text-white  text-xl bg-gray-500  ">
          Proceed to Payment
        </button>

        <button
          className="px-8 py-5 bg-white text-xl border text-red-500 border-red-500 "
          type="reset"
        >
          Reset
        </button>
      </div>
      <Modal
        // title="Submitted Modal"
        open={isModalOpen}
        // onOk={handleOk}
        // onCancel={handleCancel}
        width={780}
      >
        {/* <p>The Card Code has been sent to {userData.email}</p> */}

        <PaymentOptions />
      </Modal>
    </form>
  );
};

export default Form;
