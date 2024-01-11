import React from "react";
import { Modal, Button } from "flowbite-react";
import { useState } from "react";
export const Earnings = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  return (
    <div className="font-kanit">
      <Button onClick={() => setOpenModal(true)}>click me</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body className="rounded-full">
          <div className="space-y-6 flex  flex-col gap-3 justify-center items-center">
            <h2>unique creator ID</h2>
            <input type="text" className="rounded-full" />
            <Button className="w-[150px] rounded-xl" color="dark">
              Enter
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
