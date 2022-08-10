import React from "react";

function DangerModal({ deleteFunction, target, company, index }) {
  return (
    <div>
      <input type="checkbox" id={"danger" + index} className="modal-toggle" />
      <div className="modal whitespace-normal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete Apllication?</h3>
          <p className="py-4">
            You are about to delete your job application at {company}!
            <br />
            Are you sure?
          </p>
          <div className="modal-action">
            <label
              htmlFor={"danger" + index}
              className="btn"
              onClick={() => deleteFunction(target)}
            >
              Yes
            </label>
            <label className="btn" htmlFor={"danger" + index}>
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DangerModal;
