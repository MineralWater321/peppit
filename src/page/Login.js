import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    function submitForm(e) {
        e.preventDefault()
        console.log("submitted ")
        console.log("__________")
        console.log(username)
        console.log(password)
    }
    let navigate = useNavigate()
    
    return (
        <>
            <form onSubmit={submitForm} className="max-w-md mx-auto" >

                < div className="form-control " >
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input autoComplete='yes' type="text" placeholder="USERNAME" className="input input-bordered " value={username} required onChange={(e) => setUsername(e.target.value)} />
                </div >
                < div className="form-control  " >

                    <label className="label ">
                        <span className="label-text">Password</span>
                    </label>
                    <AiFillEye />
                    <input type="password" title="Enter an ID consisting of 4-8 hexadecimal digits" value={password} onChange={(e) => setPassword(e.target.value)} autocomplete="new-password" aria-autocomplete="list" autocomplete="current-password" placeholder="PASSWORD" className="input input-bordered  " minlength="8" required />
                    <input type="reset" value="Reset"/>



                </div >
                <div class="divider"></div> 
                <div class="form-control ">
                    <button class="btn btn-primary btn-active my-3" aria-pressed="true" type="submit">Submit</button>
                    <span class="btn btn-error btn-active  my-3" aria-pressed="true" onClick={navigate(-2)}>Cancel</span>
                </div>

            </form>

        </>

    )
}