import React, { useState } from "react";
import Masonry from "react-masonry-component";
import LightBox from "./LightBox";
import { files } from '../FILES'

const Gallery = () => {
  const [lightBox, setLightbox] = useState({
    open: false,
    index: null
  });

  const showLightbox = (url, index) => {
    setLightbox({
      open: true,
      index
    });
  };

  const closeLightbox = () => {
    setLightbox({
      open: false,
      index: null,
      url: ""
    });
  };


  return (
    <>
      <div className="App">
        <Masonry className={"masonry"} elementType={"div"}>
          {files.map((file, i) => (
              <div className="box" key={i}>
                <img
                  alt={file}
                  src={`/${file}/${file}.JPG`}
                    onClick={() => showLightbox(file, i)}
                />
              </div>
            ))}
        </Masonry>
      </div>
      <LightBox 
        close={closeLightbox} 
        file={files[lightBox.index]} 
        open={lightBox.open}
      />
    </>
  );
}

export default Gallery