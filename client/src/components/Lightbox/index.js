import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

function Lightbox() {
  return (
    <div className="Lightbox">
      <SRLWrapper className="lightbox">
        <a href="https://i.imgur.com/O31kjGi.jpg" data-attribute="SRL">
          <img src="https://i.imgur.com/O31kjGim.jpg" alt="Wedding Photography"   className="lightboxImg"/>
        </a>
        <a href="https://i.imgur.com/ViOgonC.jpg" data-attribute="SRL">
          <img src="https://i.imgur.com/ViOgonCm.jpg" alt="Newborn Photography  "  className="lightboxImg"/>
        </a>
        <a href="https://i.imgur.com/H2Oku7k.jpg" data-attribute="SRL">
          <img src="https://i.imgur.com/H2Oku7km.jpg" alt="Family Photography  " className="lightboxImg" />
        </a>
        <a href="https://i.imgur.com/sKNJb7g.jpg" data-attribute="SRL">
          <img src="https://i.imgur.com/sKNJb7gm.jpg" alt="Fashion Photography  " className="lightboxImg" />
        </a>
        <a href="https://i.imgur.com/x71Wx9P.jpg" data-attribute="SRL">
          <img src="https://i.imgur.com/x71Wx9Pm.jpg" alt="Wedding Photography  " className="lightboxImg" />
        </a>
        <a href="https://i.imgur.com/RUs8bpL.jpg" data-attribute="SRL">
          <img src="https://i.imgur.com/RUs8bpLm.jpg" alt="Engagement Photography  "  className="lightboxImg"/>
        </a>
        <a href="https://i.imgur.com/dAzEWMd.jpg" data-attribute="SRL">
          <img src="https://i.imgur.com/dAzEWMdm.jpg" alt="Fashion Photography  " className="lightboxImg" />
        </a>
        <a href="https://i.imgur.com/IggtgCJ.jpg" data-attribute="SRL">
          <img src="https://i.imgur.com/IggtgCJm.jpg" alt="Fashion Photography  " className="lightboxImg" />
        </a>
      </SRLWrapper>
    </div>
  );
}

export default Lightbox;