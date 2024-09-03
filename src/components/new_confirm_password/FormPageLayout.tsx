import { FC, ReactNode } from "react"
import "./new_confirm_password.css";



const FormPageLayout:FC<{children:ReactNode}> = ({children})=>{
    return (
        <div className="container">
            <div className="leftcolumn">
            {children}
            </div>


            <div className="rightcolumn">

               {children}


            
            </div>






        </div>
    )
}
export default FormPageLayout