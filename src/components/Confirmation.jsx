import { Button, Card, TextInput } from "flowbite-react";
import React, { useRef, useState } from "react";
const Confirmation = () => {
  const [inputs, setInputs] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (index < inputRefs.current.length - 1 && value !== "") {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (index, event) => {
    if (event.key === "Backspace" && index > 0 && inputs[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {};
  const handleSuccess = () => {};

  return (
    <div>
      <Card className="flex flex-col gap-3 justify-center items-center m-auto top-[200px] relative rounded-[20px] h-auto w-[700px]">
        <h2>Verified Successfully</h2>
        <img
          src="/tick.png"
          alt="success"
          className="w-[50px] h-[50px] flex justify-center items-center ml-10"
        />
        <a href="/">
          <Button pill color="dark">
            Take me Back
          </Button>
        </a>

        {/* <form action="submit" onSubmit={handleSubmit} key={null}>
          {inputs.map((value, index) => (
            <div className="flex flex-row gap-3 justify-center items-center">
              <TextInput
                key={index}
                className="w-[40px] border-black flex-row flex gap-2 "
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyPress={(e) => handleKeyPress(index, e)}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <Button
              pill
              color="dark"
              className="w-[250px] flex items-center m-auto"
              href="/account"
            >
              Verify Code
            </Button>
            <Button
              pill
              color="light"
              className="w-[250px] flex items-center m-auto border-white"
            >
              Resend Email
            </Button>
          </div>
        </form> */}
      </Card>
    </div>
  );
};

export default Confirmation;
