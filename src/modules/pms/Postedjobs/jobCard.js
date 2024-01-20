import React from "react";
import "./JobCard.css";
import MenuPopupState from "./MenuPopupState";

const JobCard = (props) => {
  //  const {image,designation,companyName,location, applicant,postedTime, moreIcon,notificationIcon, status ,  cardCatergory} = props;

  return (
    <>
      <div className="post-row">
        <div class="column-post">
          <div class="card-post">
            <div className="card-container">
              <img
                src={props.image}
                width="40px"
                height="40px"
                className="small-image"
              />

              <div className="col">
                <div className="job-title-conatiner">
                  <div>
                    <div className="job-card-heading">{props.designation}</div>

                    <p className="jobcard-com-name">{props.companyName}</p>
                    <p className="jobcard-com-name">{props.location}</p>

                    <div className="application-status">
                      <div>
                        <div className="jobcard-com-name">
                          {props.applicant} Application
                        </div>
                        <div className="application-post">
                          Posted {props.postedTime} Ago
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="icon-container-post">
                    <div className="mb-5">
                      <MenuPopupState
                        moreIcon={props.moreIcon}
                        cardCatergory={props.cardCatergory}
                      />
                    </div>

                    {props.notificationIcon ? (
                      <img src={props.notificationIcon} alt="notification" />
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                

                {props.status == "Not Accepted" ? (
                  <div className="d-flex justify-content-between ml-2">
                    <div className="jobcard-com-name color-red mt-3">
                      {props.status}
                    </div>
                    <div className="jobcard-com-name mt-3">Know Why ?</div>
                  </div>
                ) : (
                  ""
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;

// <img
// src={props.moreIcon}
// alt="more"
// className="more-icon"
// />

// {props.status == "Not Accepted" ? (
//   <div className="d-flex justify-content-between ml-2">
//     <div className="jobcard-com-name color-red mt-3">
//       {props.status}
//     </div>
//     <div className="jobcard-com-name mt-3">Know Why ?</div>
//   </div>
// ) : props.status == "Under Review" ? (
//   <div className="jobcard-com-name color-green mt-3 ml-2">
//     {props.status}
//   </div>
// ) : props.status == "Accepted" ? (
//   <div className="jobcard-com-name color-green mt-3 ml-2">
//     {props.status}
//   </div>
// ) : (
//   ""
// )}
