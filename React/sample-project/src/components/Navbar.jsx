import React,{useState} from "react"

const Navbar = ({para}) => {
    const [numberState,setnumber]=useState(0)
    const [stringState,setstring]=useState("umesh")
    const [arrayState,setarry]=useState([1,'a',false])

    console.log(numberState)
    console.log(stringState)
    console.log(arrayState)
  return (
    <>
        {para.appname}
        {/* to render the javascript dynamic data we use {}curly braces */}
        <br />
        {para.logo}
    </>
  )
}

export default Navbar