import React, { useState } from "react";
import EmployAccountModal from "./empolyAccountModal";
import JobCard from "./jobCard";
import "./draftJob.css";

const postJob = [
  {
    image:
      "https://images.unsplash.com/photo-1651501285455-d118e5fc62e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    designation: "Junior Web Developer",

    companyName: "ML private limited",
    location: "Gurugram",
    applicant: "24",
    postedTime: "8d",
    moreIcon: "icons/more-horizontal.svg",
    notificationIcon: "icons/notification-horn.svg",
  },
  {
    image:
      "https://images.unsplash.com/photo-1651501285455-d118e5fc62e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    designation: "intern Web Developer",
    companyName: "MLm private limited",
    location: "faridabad",
    applicant: "24",
    postedTime: "8d",
    moreIcon: "icons/more-horizontal.svg",
    notificationIcon: "icons/notification-horn.svg",
  },

  {
    image:
      "https://images.unsplash.com/photo-1651501285455-d118e5fc62e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    designation: "Full Stack Web Developer",
    companyName: "MLm private limited",
    location: "faridabad",
    applicant: "24",
    postedTime: "8d",
    moreIcon: "icons/more-horizontal.svg",
    notificationIcon: "icons/notification-horn.svg",
  },
];

const ClosedJob = () => {
  return (
    <>
      <div class="draft-wrapper">
        <ul class="draft-auto-grid">
        

          {postJob.map((data) => (
            <li className="draft-li">
              <JobCard
              cardCatergory="closedJob"
                image={data.image}
                designation={data.designation}
                companyName={data.companyName}
                location={data.location}
                applicant={data.applicant}
                postedTime={data.postedTime}
                moreIcon={data.moreIcon}
         
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ClosedJob;
