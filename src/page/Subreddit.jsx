import React from "react";
import { useParams } from "react-router-dom";

function Subreddit() {
  const { id } = useParams();
  console.log(id);
  return <div>Subreddit</div>;
}

export default Subreddit;
