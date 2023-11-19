import React from "react";

export const Partners = () => {
  return (
    <div>
      <div class="relative overflow-hidden">
        <div class="absolute inset-0 flex items-center">
          <div class="w-screen h-full bg-gray opacity-80"></div>
        </div>
        <div class="relative flex">
          <div id="left-carousel" class="w-full flex">
            <div class="logo-container">Logo 1</div>
            <div class="logo-container">Logo 2</div>
            <div class="logo-container">Logo 3</div>
            <div class="logo-container">Logo 4</div>
            <div class="logo-container">Logo 5</div>
          </div>
          <div id="right-carousel" class="w-full flex">
            <div class="logo-container">Logo 6</div>
            <div class="logo-container">Logo 7</div>
            <div class="logo-container">Logo 8</div>
            <div class="logo-container">Logo 9</div>
            <div class="logo-container">Logo 10</div>
          </div>
        </div>
      </div>
    </div>
  );
};
