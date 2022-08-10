import {
  PaperClipIcon,
  TrashIcon,
  DocumentRemoveIcon,
} from "@heroicons/react/solid";
import DangerModal from "../Modal/DangerModal";
import DetailsModal from "../Modal/DetailsModal";

function JobsList({ data, deleteApplication }) {
  console.log(data);
  if (data !== undefined && data !== null && data[0]) {
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
                        <label
                          className=" btn p-3 m-1"
                          htmlFor={"danger" + index}
                        >
                          <TrashIcon className="h-5 w-5"></TrashIcon>
                        </label>
                        <DetailsModal
                          modalId={index}
                          modalData={x}
                        ></DetailsModal>
                        <DangerModal
                          deleteFunction={deleteApplication}
                          target={x}
                          company={x.company}
                          index={index}
                        ></DangerModal>
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
  } else
    return (
      <div className="md:absolute left-1/4 md:top-1/3 mt-24">
        <div className="ml-96">
          <DocumentRemoveIcon className="w-10 h-10 ml-20 mb-5"></DocumentRemoveIcon>
          <h1>No Job applications found.</h1>
        </div>
      </div>
    );
}

export default JobsList;
