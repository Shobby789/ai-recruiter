import React, { useState } from "react";
import TextField from "../Common/TextField";
import DropdownField from "../Common/DropdownField";
import { Link } from "react-router-dom";

const PostJobForm = () => {
  const [data, setData] = useState({
    jobTitle: "",
    salaryRange: "",
    jobDetails: "",
    jobType: "",
    location: "",
    designation: "",
    experience: "",
    jobDetails: "",
  });

  const jobTypes = ["Full Time", "Part Time", "Contract"];
  const locations = ["Onsite", "Remote"];
  const experienceLevel = ["Junior", "Mid-Level", "Senior"];
  const experienceInYears = [
    "1 year",
    "2 years",
    "3 years",
    "4 years",
    "5+ years",
  ];

  const handleChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data >>>", data);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-start gap-5 bg-white p-[1rem] md:p-[2rem] lg:p-[3rem] 2xl:p-[4rem] rounded-3xl light-shadow"
    >
      <div className="w-full mb-5">
        <h2 className="page-heading">Fill out the job details below:</h2>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        <TextField
          labelName={"Job Title"}
          inputType={"text"}
          value={data.jobTitle}
          id={"jobTitle"}
          name={"jobTitle"}
          placeholder={"Web Developer"}
          onChange={handleChange}
        />
        <DropdownField
          labelName={"Job Type"}
          id={"jobType"}
          value={data.jobType}
          name={"jobType"}
          options={jobTypes}
          onChange={handleChange}
        />
        <DropdownField
          labelName={"Location"}
          id={"location"}
          name={"location"}
          options={locations}
          onChange={handleChange}
        />
        <DropdownField
          labelName={"Designation"}
          id={"designation"}
          name={"designation"}
          options={experienceLevel}
          value={data.designation}
          onChange={handleChange}
        />
        <DropdownField
          labelName={"Experience"}
          id={"experience"}
          name={"experience"}
          value={data.experience}
          options={experienceInYears}
          onChange={handleChange}
        />
        <TextField
          labelName={"Salary Range"}
          inputType={"text"}
          value={data.salaryRange}
          id={"salaryRange"}
          name={"salaryRange"}
          placeholder={"25,000 - 200,000"}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col items-start gap-1 w-full">
        <label htmlFor={"jobDetails"} className="text-sm font-semibold">
          Job Details
        </label>
        <textarea
          name={"jobDetails"}
          id="jobDetails"
          placeholder={""}
          rows={10}
          className="w-full border rounded-lg p-3 text-sm text-neutral-800 outline-none"
        ></textarea>
      </div>

      <div className="w-full flex justify-end gap-3">
        <Link
          to={`/`}
          className="font-bold bg-red-50 border px-5 py-3 rounded-xl border-red-300 group-hover:bg-neutral-100 transition-all duration-300 text-sm"
        >
          Cancel
        </Link>
        <button type="submit" className="btn text-sm">
          Post Job
        </button>
      </div>
    </form>
  );
};

export default PostJobForm;
