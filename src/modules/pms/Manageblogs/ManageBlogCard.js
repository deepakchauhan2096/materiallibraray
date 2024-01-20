import React from "react";
import styled from "styled-components";
import "./CommonBlog.css";

const ManageBlogCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt="card-image" />
        </div>
        <div className="card-content">
          <h2>{props.dateCreated}</h2>
          <p>{props.description}</p>
          <h2>{props.authorName}</h2>
          
            <ul>
              <li>
                <img src="../icons/likes-icon.svg" alt="likes-icon" />
                <h2 className="mt-2 mr-3">{props.likes}</h2>
              </li>
              <li>
                <img src="../icons/views.svg" alt="views-icon" />
                <h2 className="mt-2 mr-3">{props.views}</h2>
              </li>
              <li>
                <img src="../icons/save.svg" alt="save-icon" />
                <h2 className="mt-2 mr-3">{props.saved}</h2>
              </li>
              <li>
                <img src="../icons/comment-icon.svg" alt="comment-icon" />
                <h2 className="mt-2 mr-3">{props.comment}</h2>
              </li>
            </ul>
          
        </div>
      </div>
    </>
  );
};

export default ManageBlogCard;
