import React, { useEffect, useState, useRef } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
  RiContrast2Fill,
  RiArrowUpCircleFill,
  RiArrowUpCircleLine,
  RiArrowDownCircleLine,
  RiArrowDownCircleFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaShare, FaComments, FaSave } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function HomePosts() {
  const [loading, setLoading] = useState(true);
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

  const imageLoaded = () => {
    setLoading(false);
  };
  return (
    <>
      <div className="post bg-primary  my-3 rounded-lg p-2 md:p-5  mx-3 md:mx-0">
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

          <span class="award " title="Wholesome Seal of Approval">
            <RiContrast2Fill size="16" />
          </span>

          <span class="award " title="Silver">
            <RiContrast2Fill size="16" />
          </span>

          <span class="award " title="Gold">
            <RiContrast2Fill size="16" />
          </span>

          <span class="award " title="Helpful">
            <RiContrast2Fill size="16" />
          </span>

          <span class="award " title="Wholesome">
            <RiContrast2Fill size="16" />
          </span>

          <span title="Take My Energy" className="award ">
            <RiContrast2Fill size="16" />
          </span>
        </div>
        <div className=" font-bold text-sm md:text-md md:text-lg post-data-tip">
          <Link to="/r/AskReddit/without_naming_it_what_is_a_tv_show_that_is/">
            BREAKING: New COVID-19 infections nationwide shoot up to 10,775 –
            nearly double yesterday’s count, bringing the tally to 2,871,745,
            the Department of Health reports. The positivity rate stands at
            31.7%, which means almost 1 in 3 people tested for COVID-19 turned
            out infected. https://t.co/qcu7Kd6HR
          </Link>
        </div>
        <div className="flex justify-center  my-3">
          {/* <div className={` ${loading ? "" : "hidden"}   `}>
            <LazyLoadImage alt="Post" src={kekw} />
            <span className="text-3xl my-auto">Loading...</span>
          </div> */}
          <div
            className={` ${
              loading ? "" : "hidden"
            } flex items-center justify-center   `}
          >
            <div class="animate-spin ">
              <AiOutlineLoading3Quarters />
            </div>
          </div>
          <LazyLoadImage
            className={`post-image skeleton  ${loading ? "hidden" : " "}  `}
            alt="Post"
            src="https://memesboy.com/wp-content/uploads/2018/03/Is-It-Gold-In-Here-Or-Is-It-Gold-Meme.jpg"
            onLoad={imageLoaded}
          />
        </div>
        {/* <a href="/r/Philippines/comments/rv5rrp/hindi_pa_talaga_nadala_ang_pilipinas_sa/">
          <div className="flex justify-center">
            <div>
              <LazyLoadImage
                alt="Post"
                className=" sm:max-w-sm w-auto"
                src="https://libredd.it/preview/external-pre/UQxlAGYbxFWQA1r1-JUp-XQs4VWlzyBPn-g81HaX2OI.jpg?auto=webp&s=ca0bca9142e93715ea6777294eb36fa62bc9c579"
              />
            </div>
          </div>
        </a> */}
        <div className="divider"></div>

        <div className=" flex post-votes mb-0 pb-0 justify-between md:justify-start post-footer">
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
          <Link
            className="mx-3 hidden  md:flex  ease-in-out duration-300  rounded-md cursor-pointer btn btn-secondary  my-auto"
            to="/r/Philippines/daily_random_discussion_jan_03_2022/"
          >
            <FaComments className="my-auto mx-2" />
            <span>535 comments</span>
          </Link>
          <div className="   hidden  md:flex ease-in-out duration-300  rounded-md cursor-pointer btn btn-secondary">
            <FaShare className="my-auto mx-2" />
            <span>share</span>
          </div>
          <div className="mx-3 hidden  md:flex  ease-in-out duration-300  rounded-md cursor-pointer btn btn-secondary ">
            <FaSave className="my-auto mx-2" />
            <span>save</span>
          </div>
          <div className="mx-3 flex  md:hidden  ease-in-out duration-300  rounded-md cursor-pointer btn btn-secondary ">
            <FiMoreHorizontal className="my-auto mx-2" />
            <span>More</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePosts;
