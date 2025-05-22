import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { PiBagFill } from "react-icons/pi";
import { BiNetworkChart } from "react-icons/bi";

const CandidateCard = () => {
  return (
    <div className="w-full bg-white transition-all duration-300 rounded-3xl p-[1.5rem] space-y-1 relative candidate-card">
      <div className="w-full flex items-center gap-4">
        <img
          src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
          alt="person profile image"
          className="w-9 h-9 rounded-full object-cover bg-neutral-100"
        />
        <div>
          <p className="font-semibold text-lg">Ethan Smith</p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 pt-3">
        <MdEmail className="text-sm" />
        <Link to={"/"} className="text-sm">
          ethansmith@gmail.com
        </Link>
      </div>
      <div className="flex items-center gap-1.5">
        <IoMdCall className="text-sm" />
        <Link to={"/"} className="text-sm">
          +923413549032
        </Link>
      </div>
      <div className="flex items-center gap-1.5">
        <PiBagFill className="text-sm" />
        <p className="text-sm">MERN Stack Developer</p>
      </div>
      <div className="flex items-center gap-1.5">
        <BiNetworkChart className="text-sm" />
        <p className="text-sm">1 year of experience</p>
      </div>
    </div>
  );
};

export default CandidateCard;
