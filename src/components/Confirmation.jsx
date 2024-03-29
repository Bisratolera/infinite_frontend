import { Button, Card, TextInput } from "flowbite-react";
import React from "react";

const Confirmation = () => {
  return (
    <div>
      <Card className="flex flex-col gap-4 justify-center items-center m-auto top-[200px] relative rounded-[20px] h-auto w-[700px]">
        <h2>Insert the Six Digit Email Verfication Code Below</h2>
        <div className="flex flex-row gap-3 justify-center items-center">
          <TextInput className="w-[40px] border-black" />
          <TextInput className="w-[40px]" />
          <TextInput className="w-[40px]" />
          <TextInput className="w-[40px]" />
          <TextInput className="w-[40px]" />
          <TextInput className="w-[40px]" />
        </div>
        <Button pill color="dark" className="w-[250px] flex items-center m-auto">
          Verify Code
        </Button>
      </Card>
    </div>
  );
};

export default Confirmation;
