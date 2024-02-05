import { smtpexpressClient } from "@/app/email/smtp";
import { UserDataContext } from "@/context/userDataContext";
import { generateRandomString } from "@/utils/randomNumber";
import React, { useState, useContext, useEffect } from "react";

const USSDOption = () => {
  // Context
  const { userContextData } = useContext(UserDataContext);
  // console.log(userContextData);

  const [selectedUSSDOption, setSelectedUSSDOption] = useState("");

  
  const [randomString, setRandomString] = useState("");
  const [randomPassword, setRandomPassword] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString());
    setRandomPassword(generateRandomString());
  }, [])

  const handleSubmit = async (e: any) => {
    // Send Email
    // alert("Check your email for the INTECU Code");

    try {
      smtpexpressClient.sendApi.sendMail({
        subject: "OAU Internet Connectivity by INTECU (for students)",
        message: `<h2>Your INTECU code Username is ${randomString} and Password is ${randomPassword}</h2>`,
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
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className=" font-semibold text-xl">SELECT USSD CODE PROVIDER</p>

      <div className=" mt-10 ">
        <select
          className=" p-5 w-full rounded-[10px] border mb-8 "
          value={selectedUSSDOption}
          onChange={(e) => setSelectedUSSDOption(e.target.value)}
        >
          <option value="">Please Choose</option>
          <option value="access">Access 901</option>
          <option value="ecobank">Ecobank 326</option>
          <option value="globulus">GLOBULUS BANK 989</option>
          <option value="first">FIRSTBANK 894</option>
          <option value="fidelity">FIDELITY 770</option>
          <option value="gtb">GTB 737</option>
          <option value="fcmb">FCMB 329</option>
          <option value="union">UNION BANK 826</option>
        </select>
      </div>

      {selectedUSSDOption === "" && (
        <p className="text-center mt-12 text-[#E4E4E4] text-[100px] font-bold">
          *CODE#
        </p>
      )}

      {selectedUSSDOption === "access" && (
        <p className="text-[#1967D2] font-bold text-[30px] text-center">
          *901*{userContextData?.amount}*136745385643#
        </p>
      )}

      {selectedUSSDOption === "ecobank" && (
        <p className="text-[#1967D2] font-bold text-[30px] text-center">
          *326*{userContextData?.amount}*136745385643#
        </p>
      )}

      {selectedUSSDOption === "globulus" && (
        <p className="text-[#1967D2] font-bold text-[30px] text-center">
          *989*{userContextData?.amount}*136745385643#
        </p>
      )}

      {selectedUSSDOption === "first" && (
        <p className="text-[#1967D2] font-bold text-[30px] text-center">
          *894*{userContextData?.amount}*136745385643#
        </p>
      )}

      {selectedUSSDOption === "fidelity" && (
        <p className="text-[#1967D2] font-bold text-[30px] text-center">
          *770*{userContextData?.amount}*136745385643#
        </p>
      )}

      {selectedUSSDOption === "gtb" && (
        <p className="text-[#1967D2] font-bold text-[30px] text-center">
          *737*{userContextData?.amount}*136745385643#
        </p>
      )}

      {selectedUSSDOption === "union" && (
        <p className="text-[#1967D2] font-bold text-[30px] text-center">
          *826*{userContextData?.amount}*136745385643#
        </p>
      )}

      {selectedUSSDOption === "fcmb" && (
        <p className="text-[#1967D2] font-bold text-[30px] text-center">
          *329*{userContextData?.amount}*136745385643#
        </p>
      )}

      {selectedUSSDOption !== "" && (
        <button 
          className=" bg-[#2B9D80BF] py-5 text-2xl text-white rounded-full w-full mt-16"
        >
          Continue
        </button>
      )}
    </form>
  );
};

export default USSDOption;
