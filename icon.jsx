import { RxCross2,RxCircle } from "react-icons/rx";
import { FaPencilAlt } from "react-icons/fa";
function Icon({name}){
   if(name=="cross"){
      return <RxCross2/>
   }
   else if(name=="circle"){
    return <RxCircle/>
   }
   else 
   return <FaPencilAlt/>
}

export default Icon