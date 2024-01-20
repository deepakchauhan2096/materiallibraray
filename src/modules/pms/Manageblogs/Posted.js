import React from "react";
import "./CommonBlog.css";
import Data from "./Data";
import ManageBlogCard from "./ManageBlogCard";
import { history } from "../../../managers/history";
// import ManageBlogComponents from './ManageBlogComponents';

const Posted = () => {
  return (
    <>
      <div className="main-container">
        <div
          className="add-icon"
          onClick={() => history.push("/professional-create-blog")}
        >
          <img
            src="../icons/add-icon.svg"
            alt="card-icon"
            className="addicon-image"
          />
          Create New
        </div>
        {Data.map((singleContent) => {
          return (
            <>
              <ManageBlogCard
                id={singleContent.id}
                image={singleContent.image}
                dateCreated={singleContent.dateCreated}
                description={singleContent.description}
                authorName={singleContent.authorName}
                likes={singleContent.likes}
                views={singleContent.views}
                saved={singleContent.saved}
                comment={singleContent.comment}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Posted;
