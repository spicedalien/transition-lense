import React from 'react'
import Img from './Img'
import Audio from './Audio'

const LightBox = ({ close, file, open }) => {
    return (
        <div className={open ? "lightbox open" : "lightbox"}>
          <div className="close" onClick={() => close()}>
            <img src="/x.svg" alt=""/>
          </div>

          <div className="img-container">
            <Img file={file}/>
          </div>

          <div className="info">
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, tenetur tempora? Recusandae est vitae minima modi fugiat. Quae saepe eveniet recusandae sequi excepturi adipisci iure at. In omnis ducimus sunt.</p>
            </div>
            <Audio file={file}/>
          </div>

        </div>
    )
}

export default LightBox
