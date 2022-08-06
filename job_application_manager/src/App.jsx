import "./App.css";
import JobForm from "./components/JobForm/JobForm";
import JobsList from "./components/JobsList/JobsList";

import { BaseDirectory, writeTextFile, readTextFile } from "@tauri-apps/api/fs";
import { useEffect, useState } from "react";

function App() {
  const [applicationData, setApplicationData] = useState([]);

  useEffect(() => {
    readData();
  }, []);

  /**
   * Recived data gets stored in an array and overwrites current state with this data and old state.
   * Saves data to JobApplicationData.txt in Documents by calling savaData function in App.jsx
   * @param {string} jobTitle
   * @param {string} company
   * @param {string} companyLink
   * @param {string} applicationDate
   * @param {string} note
   */
  const saveApplication = (
    jobTitle,
    company,
    companyLink,
    applicationDate,
    note
  ) => {
    const newApplication = [
      {
        jobTitle: jobTitle,
        company: company,
        companyLink: companyLink,
        applicationDate: applicationDate,
        note: note,
      },
    ];
    const newData = [...applicationData, ...newApplication];
    saveData(newData);
  };

  /**
   * creates or overwrites JobApplicationData.txt in Documents folder
   * with current state as JSON string and sets state to its value by calling
   * readData function in App.jsx to rerender the updated values.
   * @param {Array} data
   */
  const saveData = async (data) => {
    await writeTextFile("JobApplicationData.txt", JSON.stringify(data), {
      dir: BaseDirectory.Document,
    });
    readData();
  };

  /**
   * Removes the passed object from state -> removes Applictaion from JobApplicationData.txt in Documents
   * @param {JSON} application
   */
  const deleteData = async (application) => {
    const newArray = applicationData.filter((x) => x !== application);
    setApplicationData(newArray);
    saveData(newArray);
  };

  /**
   * reads the Data from JobApplicationData.txt in the passed directory
   * (BaseDirectory.Document for the Documents directory).
   * converts the text to JSON and sets state to the object.
   */
  const readData = async () => {
    let data = await readTextFile("JobApplicationData.txt", {
      dir: BaseDirectory.Document,
    });
    data = [JSON.parse(data)];
    setApplicationData(...data);
  };

  return (
    <div className="App">
      <JobForm saveApplication={saveApplication}></JobForm>
      <JobsList
        data={applicationData}
        deleteApplication={deleteData}
      ></JobsList>
    </div>
  );
}

export default App;
