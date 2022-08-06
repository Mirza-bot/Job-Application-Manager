import { PaperClipIcon, TrashIcon } from "@heroicons/react/solid";

import Modal from "../Modal/Modal";

function JobsList({ data, deleteApplication }) {
  if (data !== undefined && data !== null) {
    return (
      <div className="z-0 tablewidth float-right">
        <div className="overflow-y-scroll">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Application Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((x, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{x.jobTitle}</td>
                    <td>{x.company}</td>
                    <td>
                      {x.applicationDate
                        ? x.applicationDate.split("-").reverse().join(".")
                        : false}
                    </td>
                    <td>
                      <div className="float-right">
                        <label htmlFor={index} className=" btn p-3 m-1">
                          <PaperClipIcon className="h-5 w-5"></PaperClipIcon>
                        </label>
                        <button
                          className=" btn p-3 m-1"
                          onClick={() => deleteApplication(x)}
                        >
                          <TrashIcon className="h-5 w-5"></TrashIcon>
                        </button>
                        <Modal modalId={index} modalData={x}></Modal>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else return <div>No Data Found</div>;
}

export default JobsList;
