import React from "react";

import HomePosts from "../components/HomePosts";
// import { Check } from '../Auth'
// import { yoink } from '../Auth'

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
      <div className=" max-w-sm  sm:max-w-3xl mx-auto ">
        <HomePosts />
        <HomePosts />
        <HomePosts />
      </div>
    </>
  );
}

export default Home;
