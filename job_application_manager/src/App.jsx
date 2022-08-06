import "./App.css";
import JobForm from "./components/JobForm/JobForm";
import JobsList from "./components/JobsList/JobsList";

import { BaseDirectory, writeTextFile, readTextFile } from "@tauri-apps/api/fs";
import { message } from "@tauri-apps/api/dialog";
import { documentDir } from "@tauri-apps/api/path";
import { useEffect, useState } from "react";

function App() {
  const [applicationData, setApplicationData] = useState([]);

  useEffect(() => {
    readData();
  }, []);

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

  const saveData = async (data) => {
    const documentDirPath = await documentDir();
    await writeTextFile("JobApplicationData.txt", JSON.stringify(data), {
      dir: BaseDirectory.Document,
    });
    message("data Saved!!");
    readData();
  };

  const deleteData = (application) => {
    const newArray = applicationData.filter((x) => x !== application);
    setApplicationData(newArray);
  };

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
