import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";

export const Confirm = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>pay now</Button>
      <Modal
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
        className="font-kanit border-black"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div className="flex justify-center items-center flex-col gap-1">
              <div className="w-[100px] h-[100px] rounded-full border-4 border-[#00FF85]  bg-lime-950 flex justify-center items-center relative overflow-hidden">
                <img
                  src="/chapa.png"
                  alt="payment_logo"
                  className="object-cover w-[90px] h-[90px]"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white ">
                Pay With Chapa
              </h3>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col gap-6  ">
                  <input
                    type="text"
                    className="border-black rounded-xl w-[370px]"
                    placeholder="Name on the Card"
                  />
                  <input
                    type="text"
                    className="border-black rounded-xl w-[370px]"
                    placeholder="Card Number"
                  />
                  <div className="flex flex-row gap-7">
                    <input
                      type="text"
                      className="border-black rounded-xl w-[170px]"
                      placeholder="MM/YY"
                    />
                    <input
                      type="text"
                      className="border-black rounded-xl w-[170px]"
                      placeholder="CVV"
                    />
                  </div>
                </div>
                <Button
                  className="w-[200px] flex items-center rounded-xl"
                  color="dark"
                >
                  Check and Pay
                </Button>
                secured by chapa
              </div>
            </div>
          </div>
          ;
        </Modal.Body>
      </Modal>
    </div>
  );
};
