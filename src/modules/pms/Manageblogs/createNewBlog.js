import React, { useState } from "react";
import styled from "styled-components";
// import FileUpload from "react-material-file-upload";
import "./CommonBlog.css";
import Dragzone from "./dragDrop";
import Quill from "./quill";
import Header from "../header";
import { history } from "../../../managers/history";
const CreateBlog = styled.div`
  display: flex;
  justify-content: space-between;

  /* flex-direction: row; */
`;
const BlogText = styled.div`
  font-family: Inter;
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  /* border-bottom: 3px solid #f24f17; */
`;
const Save = styled.button`
  background: #ffffff;
  border: 2px solid #f24f17;
  border-radius: 5px;
  color: #f24f17;
  font-family: "Inter";
  font-style: normal;
  /* font-weight: 600; */
  font-size: 20px;
  margin-right: 10px;
`;
const Post = styled.button`
  background: #f24f17;
  border-radius: 5px;
  border: 2px solid #f24f17;
  color: #ffffff;
  font-size: 20px;
  font-family: "Inter";
  font-style: normal;
`;
const Box = styled.input`
  box-sizing: border-box;
  height: 50px;
  width: 820px;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 5px;
  display: block;
`;
const BoxText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #bebebe;
  margin-top: 10px;
  margin-left: 10px;
`;
const BlogButton = styled.button`
  background: #ffffff;
  border: 2px solid #f24f17;
  border-radius: 5px;
  color: #f24f17;
  display: block;
  margin-top: 5px;
`;
const Back = styled.img`
  width: 20px;
  height: 20px;
  display: block;
  margin-bottom: 15px;
  margin-top: 15px;
`;
const MainText = styled.text`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #1f1f1f;
`;
const Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;
export default function CreateNewBlog() {
  return (
    <>
      <Header />
      <div style={{ marginLeft: "436px", marginTop: "100px" }}>
        <CreateBlog>
          <div>
            <BlogText>Create New Blog</BlogText>
          </div>
          <div style={{ marginRight: "20px" }}>
            <Save>Save</Save>
            <Post>Post</Post>
          </div>
        </CreateBlog>
        <Text style={{ marginTop: "20px" }}>
          Create Your Blog here. Add images, videos and your content relating
          only to the topic you choose.
        </Text>
        <Back
          src="/images/back.png"
          onClick={() => history.push("/professional-manageblog")}
        ></Back>
        <MainText>Blog Title</MainText>
        <Box placeholder="How to sleep enough to wake up not a zombie">
          {/* <BoxText>How to sleep enough to wake up not a zombie</BoxText> */}
        </Box>
        <MainText> Author Name</MainText>
        <Box placeholder="Shakespear">
          {/* <BoxText>Shakespear</BoxText> */}
        </Box>
        <MainText>Category</MainText>
        <Box placeholder="Shakespear">
          {/* <BoxText>Shakespear</BoxText> */}
        </Box>
        <MainText>Upload Thumbnail</MainText>
        <Text>Ideal Size: 400 x 230 </Text>
        {/* <FileUpload value={files} onChange={setFiles} /> */}
        <Dragzone />
        <MainText>Blog content</MainText>
        <BlogButton>Already have a blog pdf?</BlogButton>
        <Text style={{ marginTop: "20px" }}>
          If you dont have a pdf document please create your blog using our text
          editor below.
        </Text>
        <Quill />
      </div>
    </>
  );
}
