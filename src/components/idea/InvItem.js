import { lisImage } from "../../style";



const InvItem=({idea})=>{


    return(
        <>
       <img src={idea.agreement}/> 
       <p>{idea.amount}</p>

    </>)
}

export default InvItem;