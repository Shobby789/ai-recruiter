import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import PostJob from "../components/Home/PostJob";
import SignupPage from "../pages/auth/SignupPage";
import LoginPage from "../pages/auth/LoginPage";
import MatchedCandidates from "../pages/candidates/MatchedCandidates";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/post-job" element={<PostJob />} />
      <Route path="/jobs/2e2093u5034ut3rf" element={<MatchedCandidates />} />
    </Routes>
  );
};

export default AppRoutes;
