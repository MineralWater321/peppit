import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function Post() {
  const { id } = useParams();
  useEffect(() => {
    document.title =
      id.charAt(0).toUpperCase() +
      id.slice(1).replaceAll("_", " ").toLowerCase();
  }, [id]);
  return (
    <>
      <Navbar />
      <div>Post</div>
    </>
  );
}

export default Post;
