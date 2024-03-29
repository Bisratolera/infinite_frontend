import { Button, Card, Avatar, Rating, Modal } from "flowbite-react";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { SiOnlyfans } from "react-icons/si";
import Plyr from "plyr-react";
import "plyr/dist/plyr.css"; // Import the CSS file directly

const Course = () => {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  const plyrProps = {
    source:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    options: {
      controls: [
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "settings",
        "fullscreen",
      ],
      autoplay: true,
      loop: true,
      keyboard: {
        focused: true,
        global: true,
      },
      // Add more options as needed
    },
  };

  return (
    <>
      <div className="flex flex-row gap-4">
        <div className=" m-6 flex flex-col gap-4  font-kanit">
          <div className="flex flex-col gap-2">
            <div className="w-[560px] h-[350px] rounded-[35px] ml-[15px] ">
              {/* <video
                width="100%"
                height="100%"
                src="
                http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                controls
                className="w-[560px] h-[350px] rounded-[35px]"
              /> */}

              <Plyr
                source={{ ...plyrProps }}

                // type: "video",
                // sources:
                //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                // options,
              />
            </div>
            <div className=""></div>
          </div>
          <div className="flex flex-col gap-4 ml-[19px]">
            <div className="flex flex-col gap-2">
              <h2>Description</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                dolor maxime, <br />
                accusantium quo ipsum animi minus libero ab dicta assumenda at
                inventore <br /> voluptatibus nobis nemo optio ratione quidem,
                sint est!
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Card className="flex justify-center items-center"></Card>
              <Card className="flex justify-center items-center"></Card>
              <Card className="flex justify-center items-center"></Card>
            </div>
            <div className="flex items-center"></div>
          </div>
          {/* <div className="w-[700px] rounded-2xl overflow-hidden shadow-2xl">
            
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
                    <Button pill="true" color="dark" href="/account">
                      Buy
                    </Button>
                    <Button pill="true" href="/details">
                      Cancel
                    </Button>
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
          </div> */}
          {/*  */}
          <div className="flex flex-col gap-3 ml-[15px]">
            <h2>asked questions</h2>
            <Card className="w-auto"></Card>
          </div>
        </div>
        <div className="flex flex-col gap-6 ml-[155px] mt-6 ">
          <Card className="rounded-[35px] w-[450px] h-auto">
            {/* <div className="flex items-center relative justify-center">
              <div className="w-[120px] h-[120px] rounded-full border-2 border-black bg-white flex  items-center  justify-center relative overflow-hidden ">
                <img src="/ppc.jpg" alt="ppc" className="object-cover" />
              </div>
            </div> */}

            <p>Data Analyst Full Course By Micro Link College</p>
            <h2 className="flex flex-row gap-3 font-semibold text-3xl ml-[20px]">
              ETB 3500{" "}
              <span className="text-slate-400 font-thin text-lg justify-end flex relative">
                <s>ETB 5500</s>
              </span>
              <span className="text-[#fff] rounded-[20px] w-[90px] h-[30px] bg-black font-semibold text-lg items-center flex ml-[35px]">
                60% off
              </span>
            </h2>
            <div className="flex  flex-col ml-[20px]">
              <h2 className="text-slate-400 font-thin">
                {" "}
                - Full Lecture videos{" "}
              </h2>
              <h2 className="text-slate-400 font-thin">
                {" "}
                - Ebooks and Materials
              </h2>
              <h2 className="text-slate-400 font-thin"> - Exams and Tests</h2>
              <h2 className="text-slate-400 font-thin">
                {" "}
                - Certification of Completion
              </h2>
            </div>
            <div className="flex flex-row gap-4 items-start">
              <Button
                className="w-auto items-center flex flex-row gap-2"
                color="dark"
                onClick={() => setOpenModal(true)}
                // href="https://checkout.chapa.co/checkout/web/payment/PL-E0OcfyhPc83Y"
              >
                BUY NOW
              </Button>
              <Button className="w-auto flex flex-row gap-3" color="light">
                <FaShoppingCart />
                ADD TO CART{" "}
              </Button>
            </div>
            <div></div>
          </Card>
          <Card className="rounded-[35px] w-[450px] h-auto ">
            <div className="flex items-start ">
              <Avatar rounded className="flex flex-row gap-2">
                <div className="space-y-1 font-medium dark:text-white">
                  <div>Rating</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    12k+ views
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-end">
                  <Rating>
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                  </Rating>
                </div>
              </Avatar>
            </div>
          </Card>
        </div>
      </div>
      <Modal
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
        className="font-kanit border-black"
        dismissible
      >
        <Modal.Header />
        <Modal.Body>
          <div className="flex flex-col gap-8 items-center h-[450px] top-1 pt-[75px]">
            <Button
              className="w-[250px] rounded-xl bg-white text-black border-black hover:bg-black hover:text-white flex flex-row gap-3"
              href="https://checkout.chapa.co/checkout/web/payment/PL-E0OcfyhPc83Y"
            >
              <SiOnlyfans />
              Pay with Chapa
            </Button>
            <Button className="w-[250px] rounded-xl bg-white text-black border-black hover:bg-black hover:text-white flex flex-row gap-3">
              Pay with Telebirr
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Course;
