import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

function Lightbox() {
  return (
    <div className="Lightbox">
      <SRLWrapper>
        <a href="https://i.imgur.com/XDfWfb2.jpg" data-attribute="SRL">
          <img src="https://i.imgur.com/XDfWfb2m.jpg" alt="Pepper" />
        </a>
        <a href="https://i.imgur.com/XDfWfb2.jpg" data-attribute="SRL">
          <img src="https://i.imgur.com/XDfWfb2m.jpg" alt="Pepper" />
        </a>
      </SRLWrapper>
    </div>
  );
}

export default Lightbox;