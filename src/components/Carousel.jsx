import React from "react";

export const Carousels = () => {
  return (
    <div className="carousel">
      <div
        x-data="{}"
        x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
        class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
      >
        <ul
          x-ref="logos"
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll h-fit w-fit"
        >
          <li>
            <img src="/aic.svg" alt="AIC" />
          </li>
          <li>
            <img src="/1888.svg" alt="1888" />
          </li>
          <li>
            <img src="/mot.svg" alt="MOT" />
          </li>
          <li>
            <img src="/elites.svg" alt="ELITES" />
          </li>
          <li>
            <img src="/best.svg" alt="BBI" />
          </li>
        </ul>
        <ul
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll "
          aria-hidden="true"
        >
          <li>
            <img src="/aic.svg" alt="AIC" width="50px" height="50px" />
          </li>
          <li>
            <img src="/1888.svg" alt="1888" width="50px" height="50px" />
          </li>
          <li>
            <img src="/mot.svg" alt="MOT" width="50px" height="50px" />
          </li>
          <li>
            <img src="/elites.svg" alt="ELITES" width="50px" height="50px" />
          </li>
          <li>
            <img src="/best.svg" alt="BBI" width="50px" height="50px" />
          </li>
        </ul>
      </div>
    </div>
  );
};
