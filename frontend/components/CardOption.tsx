import { smtpexpressClient } from "@/app/email/smtp";
import { UserDataContext } from "@/context/userDataContext";
import { generateRandomString } from "@/utils/randomNumber";
import React, { useContext, useEffect, useState } from "react";

const CardOption = () => {
  // Context
  const { userContextData, setUserPaymentData } = useContext(UserDataContext);
  // console.log(userContextData);

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString());
  }, [])

  function isValidExpiryDate(date: string) {
    const slashIndex = date.indexOf("/");

    // Check if '/' exists and its position is at index 2
    if (slashIndex !== -1 && slashIndex === 2) {
      const beforeSlash = date.substring(0, slashIndex);
      const afterSlash = date.substring(slashIndex + 1);

      // Check if lengths before and after the '/' are both 2
      if (beforeSlash.length === 2 && afterSlash.length === 2) {
        return true;
      }
    }

    return false;
  }

  // const randomString = generateRandomString();
  // console.log(randomString); 

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // alert("Card Option");

    if (cardNumber === "") {
      alert("Card Number is required");
      return;
    }

    if (cardNumber.length !== 16) {
      alert("Card Number must be 16 digits");
      return;
    }

    if (expiryDate === "") {
      alert("Card Expire Date is required");
      return;
    }

    if (isValidExpiryDate(expiryDate) === false) {
      alert("Invalid expiry date");
      return;
    }

    if (cvv === "") {
      alert("Card cvv is required");
      return;
    }

    // dispatch to context
    setUserPaymentData({
      cardNumber,
      expiryDate,
      cvv,
    });

    // SEND EMAILS
    // resend APi
    // send random 10 numbers to user email.
    try {
      smtpexpressClient.sendApi.sendMail({
        subject: "OAU Internet Connectivity by INTECU (for students)",
        message: `<h2>Your INTECU code is ${randomString}</h2>`,
        sender: {
          name: "Group 8 INTECU",
          email: "sm0pid-PLCe4xgXajJex6hH7fQrU9i90@projects.smtpexpress.com",
        },
        recipients: {
          name: userContextData.payers_name,
          email: userContextData.payers_email,
        },
      });
      
      // successful
      alert("Check your email for the INTECU Code");
      window.location.reload();
    } catch (error) {
      alert("Something went wrong, please try again");
    }

  };

  return (
    <form onSubmit={handleSubmit} className=" flex flex-col gap-10">
      <div className=" flex flex-col gap-2">
        <p className=" text-xl">CARD NUMBER</p>
        <input
          type="number"
          name="card_number"
          className=" w-full p-5 rounded-[10px]  placeholder:text-[#C7C7C7] border border-[#CCCCCC] "
          placeholder="1234  5678  9012  3456"
          value={cardNumber}
          required
          onChange={(e: any) => {
            setCardNumber(e.target.value);
          }}
        />
      </div>

      <div className=" flex gap-2">
        <div className=" flex flex-col gap-2 w-1/2 ">
          <p className=" text-xl">EXPIRY DATE</p>
          <input
            type="text"
            name="expiry_date"
            className=" w-full p-5 rounded-[10px]  placeholder:text-[#C7C7C7] border border-[#CCCCCC] "
            placeholder="MM / YY"
            value={expiryDate}
            required
            onChange={(e: any) => {
              setExpiryDate(e.target.value);
            }}
          />
        </div>

        <div className=" flex flex-col gap-2 w-1/2 ">
          <p className=" text-xl">CVV</p>
          <input
            type="number"
            name="cvv"
            className=" w-full p-5 rounded-[10px]  placeholder:text-[#C7C7C7] border border-[#CCCCCC] "
            placeholder="123"
            value={cvv}
            required
            onChange={(e: any) => {
              setCvv(e.target.value);
            }}
          />
        </div>
      </div>

      <button className=" bg-[#2B9D80BF] py-5 text-2xl text-white ">
        Pay NGN {userContextData.amount}.00
      </button>
    </form>
  );
};

export default CardOption;
