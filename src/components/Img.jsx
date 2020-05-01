import React from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Img = ({ file }) => {
    return (
        <TransformWrapper
        defaultScale={1}
        defaultPositionX={200}
        defaultPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <div onClick={zoomIn}>
                <img src="/search.svg" alt=""/>
                <img src="/plus-circle.svg" alt="" className="abs"/>
              </div>
              <div onClick={zoomOut}>
                <img src="/search.svg" alt=""/>
                <img src="/minus-circle.svg" alt="" className="abs"/>
              </div>
              <div onClick={resetTransform}>
                <img src="/search.svg" alt=""/>
                <img src="/x-circle.svg" alt="" className="abs"/>
              </div>
            </div>
            <TransformComponent>
              <img src={`/${file}/${file}.JPG`} alt={file} />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    )
}

export default Img
