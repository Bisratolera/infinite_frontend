import { Button, Card, Label, TextInput } from "flowbite-react";
import React from "react";

const Signup = () => {
  const handleFileInput = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  return (
    <div className="font-kanit">
      <div className="flex flex-row gap-16 mt-12 ml-8">
        <Card className="object-cover  rounded-3xl shadow-lg w-[550px] h-[790px] mr-4  shadow-gray-500/50 ">
          <form>
            <div className="flex justify-center ">
              <div className="h-24 w-24 rounded-full border-2 border-black bg-white flex justify-center items-center relative overflow-hidden">
                <img src="/ppc.jpg" alt="ppc" className="object-cover" />
                <input
                  type="file"
                  id="fileInput"
                  className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
                  onChange={handleFileChange}
                />
                <div
                  className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300"
                  onClick={handleFileInput}
                ></div>
              </div>
            </div>

            <Label
              value="Photo(optional)"
              className="flex justify-center py-3"
            />
            <div className="flex flex-row gap-11">
              <div className="flex flex-col gap-1">
                <Label value="First Name" className="" />
                <input type="text" className="border-black rounded-3xl" />
              </div>

              <div className="flex flex-col gap-1">
                <Label value="Middle Name" className="" />
                <input type="text" className="border-black rounded-3xl" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Label value="Last Name" className="" />
              <input
                type="text"
                className="border-black rounded-3xl w-[220px]"
              />
              <Label value="Email" className="" />
              <input type="email" className="border-black rounded-3xl" />
              <Label value="Password" className="" />
              <input type="password" className="border-black rounded-3xl" />
              <Label value="Phone Number" className="" />
              <input type="text" className="border-black rounded-3xl" />
              <div className=" flex flex-col gap-4">
                <div className="flex flex-row gap-1">
                  <input type="checkbox" name="" id="" />
                  <p>
                    By Creating account, i agree our{" "}
                    <a href="#">
                      <u>Terms of use</u>
                    </a>{" "}
                    and{" "}
                    <a href="#">
                      <u>Privacy Policy</u>
                    </a>
                  </p>
                </div>
                <div className="flex flex-row gap-1">
                  <input type="checkbox" name="" id="" />
                  <p>
                    By Creating account, i am also consenting to recieve SMS
                    messages and emails, including product new feature updates,
                    events and marketing promotions
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6  flex flex-row gap-[63px] items-center justify-center">
              <Button pill="true" size="md" color="dark">
                Signup
              </Button>
              <Button pill="true" size="md" color="light">
                Cancel
              </Button>
            </div>
            <p className="mt-4 flex justify-center">
              do you have account, please{" "}
              <a href="#">
                <u>Login</u>
              </a>
            </p>
          </form>
        </Card>

        <div className="flex justify-center">
          <h2>lottie files goes here</h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
