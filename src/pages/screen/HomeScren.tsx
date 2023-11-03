import useUser from "../../global/jotai"


const HomeScreen = () => {
  const [anything, setAnything] = useUser()
  console.log(anything);
  

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#9231FC]">

{/* form */}
        <div className="w-[400px] h-[300px] shadow-2xl shadow-[#382350] bg-white rounded-3xl flex justify-center items-center flex-col px-16 small:w-[90%] small:px-3">

            <div className="font-[700] text-[#3d1a63] text-[20px] mb-10 text-center">Weldone, you are one of the lucky persons to finish this authentication</div>

            <div className="font-[700] text-[#3d1a63] text-[25px] text-center">Meet Mr peter for your malt 😁😁🏃</div>

            <div className="cursor-pointer"
            onClick={()=>{
              setAnything(null)
            }}
            >Logout</div>
            
        </div>
    </div>
  )
}

export default HomeScreen