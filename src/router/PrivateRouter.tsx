import { FC, PropsWithChildren } from "react"
import useUser from "../global/jotai"
import { Navigate } from "react-router-dom"


const PrivateRouter:FC<PropsWithChildren> = ({children}) => {
    const [anything, setAnything] = useUser()
    console.log("the main State o",setAnything);
    
  return (

    <div>
        {
            anything ? <div>{children}</div> : <Navigate to="/sign-in" />
        }
    </div>
  )
}

export default PrivateRouter