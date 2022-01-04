import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Subreddit() {
  const { id } = useParams();
  useEffect(() => {
    document.title = id;
  }, [id]);
  return <div>Subreddit</div>;
}

export default Subreddit;
