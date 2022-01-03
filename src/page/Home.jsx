import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { RiContrast2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
// import { Check } from '../Auth'
// import { yoink } from '../Auth'
import { BiUpvote, BiDownvote } from "react-icons/bi";
function Home() {
  //     console.log(yoink)
  //     const [userName, setuserName] = useState("")
  //    useEffect(() => {
  //     async function msg() {
  //         const something = await Check()
  //         await setuserName(something);
  //       }
  //       msg();
  //    }, [userName])

  return (
    <>
      {/* Make Link card */}
      <div className=" max-w-3xl mx-auto">
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
          <div className=" font-bold text-lg md:text-2xl post-title">
            <Link to="/r/AskReddit/comments/rue32w/without_naming_it_what_is_a_tv_show_that_is/">
              Without naming it, what is a TV show that is instantly
              recognizable based on one quote?
            </Link>
          </div>
          <div className="divider"></div>
          <div className="flex post-votes max-w-max">
            <button className="m-auto mx-2">
              <BiUpvote size="16" />
            </button>
            <div>69</div>
            <button className="m-auto mx-2">
              <BiDownvote size="16" />
            </button>
          </div>
          {/* <div className="post-footer">
            <div>
              <div>
                <a
                  rel="nofollow"
                  data-click-id="comments"
                  data-test-id="comments-page-link-num-comments"
                  href="/r/Philippines/comments/rukhy3/daily_random_discussion_jan_03_2022/"
                >
                  <span>535 comments</span>
                </a>
                <div id="t3_rukhy3-share-menu">
                  <button data-click-id="share">
                    <span>share</span>
                  </button>
                </div>
                <div data-ignore-click="false">
                  <button>
                    <span></span>
                    <span>save</span>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className=" bg-primary text-bg-primary-content my-3 rounded-md p-10">
          d
        </div>
        <div className=" bg-primary my-3 rounded-md p-10">d</div>
        <div className=" bg-primary my-3 rounded-md p-10">d</div>
      </div>
    </>
  );
}

export default Home;
