import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
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
            {/* Make a card */}
            <div className=" max-w-3xl mx-auto" >
                <div className="post bg-red-300 my-3 rounded-md p-10">
                    <div className="post-header">
                    <p class="post_header">
		            <a class="post_subreddit" href="/r/AskReddit">r/AskReddit</a>
		<span class="dot">•</span>
		<a class="post_author" href="/u/blue_pookie">u/blue_pookie</a>
		<span class="dot">•</span>
		<span class="created" title="Jan 02 2022, 17:10:21 UTC">20h ago</span>
		
			
			<span class="award" title="Wholesome Seal of Approval">
				<img alt="Wholesome Seal of Approval" src="/preview/pre/award_images/t5_22cerq/b9ks3a5k7jj41_WholesomeSealofApproval.png?width=16&amp;height=16&amp;auto=webp&amp;s=1a331be5cf6d754b4cb7ed2ca3706f70d5260a57" width="16" height="16" />
			</span>
			
			<span class="award" title="Silver">
				<img alt="Silver" src="/static/gold/awards/icon/silver_16.png" width="16" height="16" />
			</span>
			
			<span class="award" title="Gold">
				<img alt="Gold" src="/static/gold/awards/icon/gold_16.png" width="16" height="16" />
			</span>
			 
			<span class="award" title="Helpful">
				<img alt="Helpful" src="/preview/pre/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45" width="16" height="16" />
			</span>
			
			<span class="award" title="Wholesome">
				<img alt="Wholesome" src="/preview/pre/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0" width="16" height="16" />
			</span>
			
			<span class="award" title="Take My Energy">
				<img alt="Take My Energy" src="/preview/pre/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=16&amp;height=16&amp;auto=webp&amp;s=10034f3fdf8214c8377134bb60c5b832d4bbf588" width="16" height="16" />
			</span>
			
		
	</p>
                    </div>
                    <div className="post-title">

                    </div>
                    <div className="divider">
                  
                    </div>
                    <div className="post-footer">
              
                    </div>
                </div>
              <div className=" bg-red-300 my-3 rounded-md p-10">d</div>
              <div className=" bg-red-300 my-3 rounded-md p-10">d</div>
              <div className=" bg-red-300 my-3 rounded-md p-10">d</div>
            </div>
        </>
    )
}

export default Home
