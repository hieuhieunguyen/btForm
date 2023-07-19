import React, { useState } from "react";
import "./style.css";
import data from "./data.json";

const BTGlasses = () => {
  const [srcImage, setImage] = useState("./image/glassesImage/v1.png");
  const [product, setProductDetail] = useState(data[0]);
  const handleChangeGlasses = (typeGlasses, product) => {
    setImage(`./image/glassesImage/${typeGlasses}.png`);
    setProductDetail(product);
  };

  return (
    <div>
      <header>
        <h1>TRY GLASSES APP ONLINES</h1>
      </header>
      <div className="BTGlasses">
        <img
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          src="./image/glassesImage/background.jpg"
          alt=""
        />
        <div className="container content">
          <div className="d-flex justify-content-between">
            <div className="personTest">
              <img src="./image/glassesImage/model.jpg" alt="" />
              <img className="imgTest" src={srcImage} alt="" />
              <div className="title">
                <h1>{product.name}</h1>
                <p>{product.desc}</p>
              </div>
            </div>
            <div>
              <img src="./image/glassesImage/model.jpg" alt="" />
            </div>
          </div>
          <div className="d-flex flex-wrap mt-5 handleGlasses">
            <div className="col-2 imgGlasses">
              <img
                onClick={() => handleChangeGlasses("v1", data[0])}
                src="./image/glassesImage/v1.png"
                alt=""
              />
            </div>
            <div className="col-2 imgGlasses">
              <img
                onClick={() => handleChangeGlasses("v2", data[1])}
                src="./image/glassesImage/v2.png"
                alt=""
              />
            </div>
            <div className="col-2 imgGlasses">
              <img
                onClick={() => handleChangeGlasses("v3", data[2])}
                src="./image/glassesImage/v3.png"
                alt=""
              />
            </div>
            <div className="col-2 imgGlasses">
              <img
                onClick={() => handleChangeGlasses("v4", data[3])}
                src="./image/glassesImage/v4.png"
                alt=""
              />
            </div>
            <div className="col-2 imgGlasses">
              <img
                onClick={() => handleChangeGlasses("v5", data[4])}
                src="./image/glassesImage/v5.png"
                alt=""
              />
            </div>
            <div className="col-2 imgGlasses">
              <img
                onClick={() => handleChangeGlasses("v6", data[5])}
                src="./image/glassesImage/v6.png"
                alt=""
              />
            </div>
            <div className="col-2 imgGlasses">
              <img
                onClick={() => handleChangeGlasses("v7", data[6])}
                src="./image/glassesImage/v7.png"
                alt=""
              />
            </div>
            <div className="col-2 imgGlasses">
              <img
                onClick={() => handleChangeGlasses("v8", data[7])}
                src="./image/glassesImage/v8.png"
                alt=""
              />
            </div>
            <div className="col-2 imgGlasses">
              <img
                onClick={() => handleChangeGlasses("v9", data[8])}
                src="./image/glassesImage/v9.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTGlasses;
