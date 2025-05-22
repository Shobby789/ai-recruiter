import React from "react";
import CandidateCard from "../../components/Candidates/CandidateCard";

const MatchedCandidates = () => {
  return (
    <div className="w-full padding-x py-20">
      <div className="">
        <h2 className="page-heading">Matched Candiates</h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-7">
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
      </div>
    </div>
  );
};

export default MatchedCandidates;
