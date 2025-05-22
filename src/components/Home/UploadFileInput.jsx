import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDoc } from "../../store/features/docSlice";

const UploadFileInput = () => {
  const dispatch = useDispatch();
  const [docs, setDocs] = useState([]);
  const allowedExtensions = ["pdf", "doc", "docx"];
  console.log(docs);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const validDocs = files.filter((file) => {
      const extension = file.name.split(".").pop().toLowerCase();
      return allowedExtensions.includes(extension);
    });

    if (validDocs.length !== files.length) {
      alert("Only PDF, DOC, and DOCX files are allowed.");
    }

    setDocs(validDocs);
  };

  const uploadResume = () => {
    if (docs?.length === 0) {
      alert("Please select at least one valid document to upload.");
      return;
    }
    dispatch(addDoc(docs));
    setDocs([]);
  };

  return (
    <label
      htmlFor="uploadResume"
      className="w-[220px] h-[60px] relative cursor-pointer group"
    >
      <span className="font-bold bg-white border px-6 py-5 rounded-xl border-red-300 group-hover:bg-neutral-100 transition-all duration-300 text-sm">
        Upload Resumes
      </span>
      <input
        type="file"
        name="uploadResume"
        id="uploadResume"
        className="invisible"
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx"
        multiple
      />
    </label>
  );
};

export default UploadFileInput;
