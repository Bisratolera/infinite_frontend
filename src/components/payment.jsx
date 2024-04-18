import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";

export const Payment = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  return (
    <div className="dark:bg-gray-950 dark:text-white">
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
          <div className="flex flex-col gap-8 items-center h-[450px] top-1">
            <div className="w-[100px] h-[100px] rounded-full border-4 border-[#00FF85]  bg-lime-950 flex justify-center items-center relative overflow-hidden">
              <img
                src="/chapa.png"
                alt="payment_logo"
                className="object-cover w-[90px] h-[90px]"
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300"></div>
            </div>
            <p className="text-md font-medium text-gray-900 dark:text-white ">
              Pay With Chapa
            </p>
            <Button className="w-[250px] rounded-xl bg-white text-black border-black hover:bg-black hover:text-white">
              Continue to Payment
            </Button>
            <Button color="dark" className="w-[250px] rounded-xl">
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
