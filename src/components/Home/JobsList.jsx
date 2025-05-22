import React from "react";
import { useNavigate } from "react-router-dom";

const JobsList = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full light-shadow">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-gray-700 uppercase bg-white border-b">
            <tr>
              <th scope="col" className="px-10 py-5 font-bold">
                id
              </th>
              <th scope="col" className="px-10 py-5 font-bold">
                Job title
              </th>
              <th scope="col" className="px-10 py-5 font-bold">
                department
              </th>
              <th scope="col" className="px-10 py-5 font-bold">
                salary
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6]?.map((_, i) => {
              return (
                <tr
                  key={i}
                  onClick={() => navigate(`/jobs/2e2093u5034ut3rf`)}
                  className="bg-white hover:bg-neutral-50 border-b border-gray-200 cursor-pointer"
                >
                  <th
                    scope="row"
                    className="px-10 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    0{i + 1}
                  </th>
                  <td className="px-10 py-4">Silver</td>
                  <td className="px-10 py-4">Laptop</td>
                  <td className="px-10 py-4">$2999</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobsList;
