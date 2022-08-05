import { useState } from "react";

function JobForm({ saveApplication }) {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [companyLink, setCompanyLink] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [note, setNote] = useState("");

  return (
    <form className="mb-10 z-10 w-96 lg:fixed">
      <div className="card w-96 bg-accent text-black shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-3">Job Application Manager</h2>
          <div>
            <ul>
              <li className="mb-3">
                <label htmlFor="job_title">Job Title</label>
                <input
                  value={jobTitle}
                  onChange={(e) => {
                    setJobTitle(e.target.value);
                  }}
                  className="float-right"
                  type="text"
                  name="job_title"
                />
              </li>
              <li className="mb-3">
                <label htmlFor="company_title">Company</label>
                <input
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  className="float-right"
                  type="text"
                  name="company_title"
                />
              </li>
              <li className="mb-3">
                <label htmlFor="company_link">Company Link</label>
                <input
                  value={companyLink}
                  onChange={(e) => {
                    setCompanyLink(e.target.value);
                  }}
                  className="float-right"
                  type="text"
                  name="application_link"
                />
              </li>
              <li className="mb-3">
                <label htmlFor="application_date">Application Date</label>
                <input
                  value={applicationDate}
                  onChange={(e) => {
                    setApplicationDate(e.target.value);
                  }}
                  className="float-right"
                  type="date"
                  name="application_date"
                />
              </li>
              <li>
                <textarea
                  value={note}
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
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
            <button
              type="button"
              onClick={() => {
                saveApplication(
                  jobTitle,
                  company,
                  companyLink,
                  applicationDate,
                  note
                );
              }}
              className="btn btn-seconadry"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default JobForm;
