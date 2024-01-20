import React from 'react';
import "./CommonBlog.css";
import Data from "./Data";
import ManageBlogCard from './ManageBlogCard';
// import ManageBlogComponents from './ManageBlogComponents';

const Drafts = () => {
  return (
    <>
        <div className='main-container'>
            {Data.map((singleContent) => {
                return (
                    <>
                        <ManageBlogCard
                            image={singleContent.image}
                            dateCreated={singleContent.dateCreated}
                            description={singleContent.description}
                            authorname={singleContent.authorName}
                            likes={singleContent.likes}
                            views={singleContent.views}
                            saved={singleContent.saved}
                            comment={singleContent.comment}

                        />
                    </>
                )
            })}
        </div>
    </>
  )
}

export default Drafts;