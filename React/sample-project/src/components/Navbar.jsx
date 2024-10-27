import React,{useEffect, useState} from "react"

const Navbar = ({para}) => {
    const [numberState,setnumber]=useState(0)
    const [stringState,setstring]=useState("umesh")
    const [arrayState,setarry]=useState([1,'a',false])

    // console.log(numberState)
    // console.log(stringState)
    // console.log(arrayState)
  const [count,setcount]=useState(0);
  useEffect(()=>{ 
    // use effect is used for rendering wedone these becz to update the info after deleting the info
    // alert("Rendering")
    console.log("Count is "+count)
  },[count])

  return (
    <>
        <button className="w-[6rem] h-[4rem] bg-blue-500 text-white" 
          onClick={()=>{
            setcount(count+1)
          }}>
          Count{count}
        </button>
        <br />
        {para.appname} {/* to render the javascript dynamic data we use {}curly braces */}
        <br />
        {para.logo}
    </>
  )
}

export default Navbar