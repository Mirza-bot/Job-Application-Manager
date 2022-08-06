import React from "react";

function Modal({ modalId, modalData }) {
  return (
    <div>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-3">Application Details</h3>
          <ul className="w-96">
            <li className="my-1">
              <span className="font-bold mr-4">Job Title:</span>
              <span className="float-right text-ellipsis overflow-hidden w-60">
                {modalData.jobTitle}
              </span>
            </li>
            <li className="my-1">
              <span className="font-bold mr-4">Company:</span>
              <p className="float-right text-ellipsis overflow-hidden w-60">
                {modalData.company}
              </p>
            </li>
            <li className="my-1">
              <span className="font-bold mr-4">Company Link:</span>
              <a
                href={modalData.companyLink}
                className="float-right text-blue-400 text-ellipsis overflow-hidden w-60"
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
              <p className="w-96 whitespace-normal">{modalData.note}</p>
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
