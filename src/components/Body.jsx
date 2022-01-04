import { Routes, Route } from "react-router-dom";
import Login from "../page/Login";
import Profile from "../page/Profile";
import Services from "../page/Services";
import About from "../page/About";
import Home from "../page/Home";
import Contact from "../page/Contact";
import ERROR404 from "../page/ERROR404";
import Subreddit from "../page/Subreddit";
import Auth from "../Auth";
import Post from "../page/Post";
export default function Body() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/r/:id" element={<Subreddit />} />
        <Route path="/r/:id/:id" element={<Post />} />
        <Route path="/u/:id" element={<Profile />} />
        <Route path="*" element={<ERROR404 />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
