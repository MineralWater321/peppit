import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  RiContrast2Fill,
  RiArrowUpCircleFill,
  RiArrowUpCircleLine,
  RiArrowDownCircleLine,
  RiArrowDownCircleFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaShare, FaComments, FaSave } from "react-icons/fa";
function HomePosts() {
  const [upvotes, setupvotes] = useState(69);
  const [voted, setvoted] = useState(true);
  const [arrowUp, setarrowUp] = useState(true);
  const [arrowDown, setarrowDown] = useState(true);
  function ClickUp() {
    setupvotes(upvotes + 1);
    if (voted) {
      setvoted(false);
      setarrowUp(false);
    } else {
      setvoted(true);
    }
  }
  function ClickDown() {
    setupvotes(upvotes - 1);
    if (voted) {
      setvoted(false);
      setarrowDown(false);
    } else {
      setvoted(true);
    }
  }
  function ArrowUp() {
    return <>{arrowUp ? <RiArrowUpCircleLine /> : <RiArrowUpCircleFill />}</>;
  }
  function ArrowDown() {
    return (
      <>{arrowDown ? <RiArrowDownCircleLine /> : <RiArrowDownCircleFill />}</>
    );
  }
  return (
    <>
      <div className="post bg-primary  my-3 rounded-lg p-10">
        <div className="post-header flex flex-wrap">
          <Link
            class="hover:text-neutral hover:underline post_subreddit"
            to="/r/AskReddit"
          >
            r/AskReddit
          </Link>
          <span class="mx-3 dot">•</span>
          <Link
            class="hover:text-neutral hover:underline post_author"
            to="/u/blue_pookie"
          >
            u/blue_pookie
          </Link>
          <span class="mx-3 dot">•</span>
          <span class="created" title="Jan 02 2022, 17:10:21 UTC">
            20h ago
          </span>

          <span class="award" title="Wholesome Seal of Approval">
            <RiContrast2Fill size="16" />
          </span>

          <span class="award" title="Silver">
            <RiContrast2Fill size="16" />
          </span>

          <span class="award" title="Gold">
            <RiContrast2Fill size="16" />
          </span>

          <span class="award" title="Helpful">
            <RiContrast2Fill size="16" />
          </span>

          <span class="award" title="Wholesome">
            <RiContrast2Fill size="16" />
          </span>

          <span class="award" title="Take My Energy">
            <RiContrast2Fill size="16" />
          </span>
        </div>
        <div className=" font-bold text-md md:text-lg post-title">
          <Link to="/r/AskReddit/comments/rue32w/without_naming_it_what_is_a_tv_show_that_is/">
            Without naming it, what is a TV show that is instantly recognizable
            based on one quote?
          </Link>
        </div>
        <div className="flex justify-center  my-3">
          <img
            alt="Post"
            src="https://libredd.it/preview/external-pre/UQxlAGYbxFWQA1r1-JUp-XQs4VWlzyBPn-g81HaX2OI.jpg?auto=webp&s=ca0bca9142e93715ea6777294eb36fa62bc9c579"
          />
        </div>
        {/* <a href="/r/Philippines/comments/rv5rrp/hindi_pa_talaga_nadala_ang_pilipinas_sa/">
          <div className="flex justify-center">
            <div>
              <img
                alt="Post"
                className=" sm:max-w-sm w-auto"
                src="https://libredd.it/preview/external-pre/UQxlAGYbxFWQA1r1-JUp-XQs4VWlzyBPn-g81HaX2OI.jpg?auto=webp&s=ca0bca9142e93715ea6777294eb36fa62bc9c579"
              />
            </div>
          </div>
        </a> */}
        <div className="divider"></div>

        <div className=" flex post-votes mb-0 pb-0 post-footer">
          <div className="flex  items-center">
            <button
              onClick={ClickUp}
              className={`${
                voted ? "	   " : " btn-disabled "
              }m-auto mx-2 btn btn-accent`}
            >
              <ArrowUp size="16" />
            </button>
            <div>{upvotes}</div>
            <button
              onClick={ClickDown}
              className={`${
                voted ? "	   " : " btn-disabled "
              } m-auto mx-2 btn btn-accent`}
            >
              <ArrowDown size="32" />
            </button>
          </div>
          <a
            className="mx-3 hidden  md:flex  ease-in-out duration-300  rounded-md cursor-pointer btn btn-secondary  my-auto"
            href="/r/Philippines/comments/rukhy3/daily_random_discussion_jan_03_2022/"
          >
            <FaComments className="my-auto mx-2" />
            <span>535 comments</span>
          </a>
          <div className="   hidden  md:flex ease-in-out duration-300  rounded-md cursor-pointer btn btn-secondary">
            <FaShare className="my-auto mx-2" />
            <span>share</span>
          </div>
          <div className="mx-3 hidden  md:flex  ease-in-out duration-300  rounded-md cursor-pointer btn btn-secondary ">
            <FaSave className="my-auto mx-2" />
            <span>save</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePosts;
