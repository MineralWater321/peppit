import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function Profile() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div>Profile</div>
    </>
  );
}

export default Profile;
