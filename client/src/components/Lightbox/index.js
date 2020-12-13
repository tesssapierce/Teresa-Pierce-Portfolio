import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

function Lightbox() {
  return (
    <div className="Lightbox">
      <SRLWrapper>
        <a href="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" data-attribute="SRL">
          <img src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" alt="Umbrella" />
        </a>
        <a href="https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.ngsversion.1546554600360.adapt.1900.1.jpg" data-attribute="SRL">
          <img src="https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.ngsversion.1546554600360.adapt.1900.1.jpg" alt="Whatever" />
        </a>
      </SRLWrapper>
    </div>
  );
}

export default Lightbox;