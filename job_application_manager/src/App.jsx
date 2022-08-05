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
    setApplicationData(newData);
    saveData(newData);
  };

  const saveData = async (data) => {
    const documentDirPath = await documentDir();
    await writeTextFile("JobApplicationData.txt", JSON.stringify(data), {
      dir: BaseDirectory.Document,
    });
    await open(documentDirPath);
    message("data Saved!!");
  };

  const readData = async () => {
    let data = await readTextFile("JobApplicationData.txt", {
      dir: BaseDirectory.Document,
    });
    data = [JSON.parse(data)];
    setApplicationData(data);
  };

  return (
    <div className="App">
      <div className="grid 2xl:grid-cols-9 lg:grid-cols-7 grid-cols-1">
        <JobForm saveApplication={saveApplication}></JobForm>
        <JobsList data={applicationData}></JobsList>
      </div>
    </div>
  );
}

export default App;
