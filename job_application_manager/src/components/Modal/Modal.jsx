import React from "react";

function Modal({ modalId, modalData }) {
  return (
    <div>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-3">Application Details</h3>
          <ul className="w-64">
            <li className="my-1">
              <span className="font-bold mr-4">Job Title:</span>
              <span className="float-right">{modalData.jobTitle}</span>
            </li>
            <li className="my-1">
              <span className="font-bold mr-4">Company:</span>
              <span className="float-right">{modalData.company}</span>
            </li>
            <li className="my-1">
              <span className="font-bold mr-4">Company Link:</span>
              <a
                href={modalData.companyLink}
                className="float-right text-blue-400"
                target={"_blank"}
              >
                {modalData.companyLink}
              </a>
            </li>
            <li className="my-1">
              <span className="font-bold mr-4">Application Date:</span>
              <span className="float-right">
                {modalData.applicationDate.split("-").reverse().join(".")}
              </span>
            </li>
            <li className="my-4">
              <span className="font-bold">Note:</span>
              <br />
              <span>{modalData.note}</span>
            </li>
          </ul>
          <div className="modal-action">
            <label htmlFor={modalId} className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
