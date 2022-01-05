import React, { useEffect } from "react";

import HomePosts from "../components/HomePosts";
import Navbar from "../components/Navbar";
// import { Check } from '../Auth'
// import { yoink } from '../Auth'

function Home() {
  useEffect(() => {
    document.title = "Peppit";
  }, []);
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
      <Navbar />
      {/* Make Link card */}
      <div className=" max-w-sm  sm:max-w-3xl mx-auto ">
        <HomePosts />
        <HomePosts />
        <HomePosts />
      </div>
    </>
  );
}

export default Home;
