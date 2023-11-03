import { IoMdMailOpen, IoMdLock} from "react-icons/io"
// import {PiEyeClosedFill} from "react-icons/pi"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form"
import {signUser, verifyUser } from "../../api/authApis";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import useUser from "../../global/jotai";
import {jwtDecode} from "jwt-decode"

const SignIn = () => {
    const navigate = useNavigate()
    const {token} = useParams()
    
    const [anything, setAnything] = useUser()
console.log(anything);

    const Schema = yup.object({
        email : yup.string().email().required(),
        password : yup.string().required(),
    })

    const {register, formState : {errors}, handleSubmit} = useForm({
        resolver : yupResolver(Schema)
    })

    const onHandleSubmit = handleSubmit((data : any) =>{
        const {email, password} : any = data

        signUser({email, password}).then((res : any)=>{
            console.log(data);
            
            const decode: any = jwtDecode(res)
            setAnything(decode?.id)
            console.log("res",res);
            console.log("decode",decode);
            
            navigate("/")
        })
    })

    useEffect(()=>{
        if(token){
            verifyUser(token).then(()=>{
                console.log("im here o");
                
            })
        }
    })

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#9231FC]">

{/* form */}
        <form onSubmit={onHandleSubmit} className="w-[500px] h-[400px] shadow-2xl shadow-[#382350] bg-white rounded-3xl flex justify-center items-center flex-col px-16 small:w-[90%] small:px-3">

            <div className="font-[700] text-[25px] mb-2">Sign In</div>


{/* email */}
            <div className="w-full my-6">
            <div className="w-full h-[50px] rounded-full bg-white shadow-2xl shadow-[#7e659c] flex items-center">
                <div className="w-[12%] ml-6 text-[38px] text-[#9231FC]"><IoMdMailOpen /></div>
                <input className="w-[90%] h-[80%] text-[13px] rounded-full outline-0 placeholder:text-[#9231FC]"
                placeholder="E-mail"
                {...register("email")}
                />
            </div>
            {
                errors?.email?.message && <div className="text-end mr-4 text-[#e17048]">error</div>
            }
            </div>

{/* password */}
            <div className="w-full mb-5">
            <div className="w-full h-[50px] rounded-full bg-white shadow-2xl shadow-[#7e659c] flex items-center">
                <div className="w-[12%] ml-6 text-[38px] text-[#9231FC]"><IoMdLock /></div>
                <input className="w-[90%] h-[80%] text-[13px] rounded-full outline-0 placeholder:text-[#9231FC]"
                placeholder="Password"
                {...register("password")}
                />
            </div>
            {
                errors?.password?.message && <div className="text-end mr-4 text-[#e17048]">error</div>
            }
            </div>

            <div className="text-[#9231FC] text-[12px]">i read and agree to the terms and conditions</div>

{/* button */}
            <button type="submit" className="w-[50%] flex justify-center items-center h-[40px] bg-[#9231FC] uppercase text-[12px] font-[600] mt-5 rounded-full text-white cursor-pointer duration-300 hover:bg-[#7329c3]">
                sign in
            </button>

{/* option */}
            <Link to="/register">
            <div className="text-[#c197ee] text-[13px] mt-8">
                Don't have an account?
                <span className="text-[#9c43fa] cursor-pointer hover:text-[#9771bf] hover:font-[800]">Sign up</span>
            </div>
            </Link>

            
        </form>
    </div>
  )
}

export default SignIn