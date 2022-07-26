import React from "react";
import ReactDOM  from "react-dom";
import cardImage from "../../images/anastasia-nelen-Ki_pIEtS6pk-unsplash.jpg";

const Modal = ({CloseModal}) => {
  return ReactDOM.createPortal (
    <>
      <div onClick={CloseModal} className="backdrop"></div>
      <div className="modal-wrapper">
            <div className="download"><h2>Download!!</h2></div>
            <div className="modal-card">
                <div className="modal-cardimg">
                    <img src={cardImage} alt="" />
                </div>
                <div className="modal-card-details">
                    <h3>Complete Node.JsText Book</h3>
                    <h4>By: Edmond Boakye</h4>
                    <p>Complete Node.js Text Book</p>
                    <h3>Price: ¢1500.00</h3>
                </div>
            </div>
            <div className="close-btn"><button onClick={CloseModal}>close</button></div>
      </div>
    </>, document.getElementById("modal")
  );
};

export default Modal;
