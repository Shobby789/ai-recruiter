import { Link } from "react-router-dom";
import JobsList from "../../components/Home/JobsList";
import UploadFileInput from "../../components/Home/UploadFileInput";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen padding-x py-20">
      {/* <UploadFileInput /> */}
      <div className="w-full mb-5 flex items-center justify-between">
        <h2 className="page-heading">My Jobs</h2>
        <Link to={`/post-job`} className="btn text-xs">
          Post a job
        </Link>
      </div>
      <JobsList />
    </div>
  );
};

export default HomePage;
