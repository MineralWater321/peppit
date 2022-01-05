import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function Subreddit() {
  const { id } = useParams();
  useEffect(() => {
    document.title = id;
  }, [id]);
  return (
    <>
      <Navbar />
      <div>Subreddit</div>
    </>
  );
}

export default Subreddit;
