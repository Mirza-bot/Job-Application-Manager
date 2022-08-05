function JobsList({ data }) {
  if (data[0] !== undefined) {
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
              {data[0].map((x, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{x.jobTitle}</td>
                    <td>{x.company}</td>
                    <td>{x.applicationDate}</td>
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
