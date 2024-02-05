import React, { useState, useContext } from "react";
import Modal from "antd/es/modal/Modal";
import Image from "next/image";
import { banktransfer, selected } from ".";
import { paymentOptionData } from "./data";
import CardOption from "./CardOption";
import BankTransferOption from "./BankTransferOption";
import USSDOption from "./USSDOption";
import BankAccountOption from "./BankAccountOption";
import { UserDataContext } from "@/context/userDataContext";

const PaymentOptions = () => {
  // Context
  const { userContextData } = useContext(UserDataContext);
  // console.log(userContextData);

  const [selecetedOption, setSeletectedOption] = useState("Card");

  const handleOption = (option: string) => {
    console.log(option);
    setSeletectedOption(option);
  };

  return (
    <article className=" grid grid-cols-3 gap-4 mt-6 ">
      <div className=" col-span-1 bg-[#EDEFF1]  text-center py-10 pl-2  ">
        <p className=" mb-8">SELECT A PAYMENT OPTION</p>
        <div className=" flex flex-col gap-3">
          {paymentOptionData.map((item) => (
            <div
              key={item.title}  
              className=" bg-white rounded-full flex items-center justify-between px-4 py-2 cursor-pointer "
              onClick={() => handleOption(item.title)}
            >
              <div className=" flex items-center gap-2 ">
                <Image
                  src={selecetedOption === item.title ? item.icon2 : item.icon}
                  alt="Icon name"
                  className=" h-6 w-6"
                  height={20}
                  width={20}
                />
                <p
                  className={` ${
                    selecetedOption == item.title ? "text-[#C74923]" : ""
                  } `}
                >
                  {item.title}
                </p>
              </div>
              {selecetedOption === item.title && (
                <Image src={selected} alt="Icon name" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className=" col-span-2 transition-all duration-200">
        <p className=" bg-[#C74923] text-xl leading-10 font-bold px-32 py-10 text-center mb-10 ">
          OBAFEMI AWOLOWO UNIVERSITY
        </p>

        {selecetedOption === "Card" && <CardOption />}

        {selecetedOption === "Bank Transfer" && <BankTransferOption />}

        {selecetedOption === "USSD" && <USSDOption />}

        {/* {selecetedOption === "Bank Account" && <BankAccountOption />} */}

        {[
          "Remita",
          "Internet Banking",
          "Phone Number",
          "Wallet",
          "Bank Branch",
          "eNaira",
        ].includes(selecetedOption) && <div>Coming Soon</div>}
      </div>
    </article>
  );
};

export default PaymentOptions;
