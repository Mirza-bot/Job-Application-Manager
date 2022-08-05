function JobsList({ data }) {
  if (data !== undefined && data !== null) {
    return (
      <div className="2xl:col-span-6 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-1 z-0">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Application Date</th>
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
                      <button className="float-right btn p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
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
