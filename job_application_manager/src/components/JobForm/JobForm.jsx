import { useState } from "react";

function JobForm() {
  const [jobTitle, setJobTitle] = useState();
  const [company, setCompany] = useState();
  const [companyLink, setCompanyLink] = useState();
  const [applicationDate, setApplicationDate] = useState();
  const [file, setFile] = useState();
  const [note, setNote] = useState();

  return (
    <div className="mb-10">
      <div className="card w-96 bg-accent text-black shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-3">Job Application Manager</h2>
          <div>
            <ul>
              <li className="mb-3">
                <label htmlFor="job_title">Job Title</label>
                <input
                  value={jobTitle}
                  className="float-right"
                  type="text"
                  name="job_title"
                />
              </li>
              <li className="mb-3">
                <label htmlFor="company_title">Company</label>
                <input
                  value={company}
                  className="float-right"
                  type="text"
                  name="company_title"
                />
              </li>
              <li className="mb-3">
                <label htmlFor="company_link">Company Link</label>
                <input
                  value={companyLink}
                  className="float-right"
                  type="text"
                  name="application_link"
                />
              </li>
              <li className="mb-3">
                <label htmlFor="application_date">Application Date</label>
                <input
                  value={applicationDate}
                  className="float-right"
                  type="date"
                  name="application_date"
                />
              </li>
              <li>
                <label htmlFor="CV_save">Application Files</label>
                <input
                  value={file}
                  className="m-3"
                  type="file"
                  name="CV_save"
                  id="CV_save"
                />
              </li>
              <li>
                <textarea
                  value={note}
                  className="textarea bg-white mt-5"
                  name="job_note"
                  cols="31"
                  rows="5"
                  placeholder="Note..."
                ></textarea>
              </li>
            </ul>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-seconadry">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobForm;
