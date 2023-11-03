import {IoMdContact} from "react-icons/io"
// import {PiEyeClosedFill} from "react-icons/pi"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form"
import { secretKey } from "../../api/authApis";
import { useNavigate, useParams } from "react-router-dom";

const Otp = () => {
    const {token} = useParams()
    const navigate = useNavigate()

    const Schema = yup.object({
        otp : yup.string().required()
    })

    const {register, formState : {errors}, handleSubmit} = useForm({
        resolver : yupResolver(Schema)
    })

    const onHandleSubmit = handleSubmit((data : any) =>{
        const {otp} : any = data

        secretKey(token, {otp}).then((res)=>{
            console.log(res); 
            navigate("/redirect2")       
        })
    })

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#9231FC]">

{/* form */}
        <form onSubmit={onHandleSubmit} className="w-[500px] h-[400px] shadow-2xl shadow-[#382350] bg-white rounded-3xl flex justify-center items-center flex-col px-16 small:w-[90%] small:px-3">

            <div className="font-[700] text-[25px] mb-2">Input Secret Key</div>

            <div className="text-[12px] text-[#744c9c]">check your email for your otp</div>

{/* otp */}
            <div className="w-full my-10">
            <div className="w-full h-[50px] rounded-full bg-white shadow-2xl shadow-[#7e659c] flex items-center">
                <div className="w-[12%] ml-5 text-[38px] text-[#9231FC]"><IoMdContact /></div>
                <input className="w-[90%] h-[80%] text-[13px] rounded-full outline-0 placeholder:text-[#9231FC]"
                placeholder="OTP"
                {...register("otp")}
                />
            </div>
            {
                errors?.otp?.message && <div className="text-end mr-4 text-[#e17048]">error</div>
            }
            </div>


            <div className="text-[#9231FC] text-[12px]">i read and agree to the terms and conditions</div>

{/* button */}
            <button type="submit" className="w-[50%] flex justify-center items-center h-[40px] bg-[#9231FC] uppercase text-[12px] font-[600] mt-5 rounded-full text-white cursor-pointer duration-300 hover:bg-[#7329c3]">
                Submit
            </button>

{/* option */}
            <div className="text-[#c197ee] text-[13px] mt-8">
                already have an account?
                <span className="text-[#9c43fa] cursor-pointer hover:text-[#9771bf] hover:font-[800]">Sign in</span>
            </div>

            
        </form>
    </div>
  )
}

export default Otp