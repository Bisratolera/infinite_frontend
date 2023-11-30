import { Button, Modal } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
export const Course = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>View the course</Button>
      <Modal show={openModal} size="6xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div className=" m-6 flex flex-col gap-4 items-center font-kanit">
              <div className="w-[700px] rounded-2xl overflow-hidden shadow-2xl">
                <video
                  width="100%"
                  height="100%"
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                  controls
                />
              </div>
              <div className="flex flex-row gap-9">
                <h2>automative Engineering</h2>
                <h2>10hr</h2>
                <h2>$500</h2>
              </div>
              <h2 className="flex justify-center items-center">
                What you Will Learn
              </h2>
              <div className="flex flex-row gap-4">
                <div className="flex items-center ">
                  <ul>
                    <li className="flex flex-row gap-2">
                      <FaRegCheckCircle />
                      <h2>Design Factories Automation from a to z</h2>
                    </li>
                    <li className="flex flex-row gap-2">
                      <FaRegCheckCircle />
                      <h2>Design Factories Automation from a to z</h2>
                    </li>
                    <li className="flex flex-row gap-2">
                      <FaRegCheckCircle />
                      <h2>Design Factories Automation from a to z</h2>
                    </li>
                    <li className="flex flex-row gap-2">
                      <FaRegCheckCircle />
                      <h2>Design Factories Automation from a to z</h2>
                    </li>
                    <li className="flex flex-row gap-2">
                      <FaRegCheckCircle />
                      <h2>Design Factories Automation from a to z</h2>
                    </li>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row gap-2">
                        <Button pill="true" color="dark">
                          Buy
                        </Button>
                        <Button pill="true">Cancel</Button>
                      </div>
                    </div>
                  </ul>
                </div>

                <div className="flex items-center ">
                  <ul>
                    <li className="flex flex-row gap-2">
                      <FaRegCheckCircle />
                      <h2>Design Factories Automation from a to z</h2>
                    </li>
                    <li className="flex flex-row gap-2">
                      <FaRegCheckCircle />
                      <h2>Design Factories Automation from a to z</h2>
                    </li>
                    <li className="flex flex-row gap-2">
                      <FaRegCheckCircle />
                      <h2>Design Factories Automation from a to z</h2>
                    </li>
                    <li className="flex flex-row gap-2">
                      <FaRegCheckCircle />
                      <h2>Design Factories Automation from a to z</h2>
                    </li>
                    <li className="flex flex-row gap-2">
                      <FaRegCheckCircle />
                      <h2>Design Factories Automation from a to z</h2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
