import Navbar from "./components/Navbar"

const App = () => {
    const data={
        appname:"umesh",
        logo:"by by"
    }
  return (
    <>
        <p className="text-red-500">Bingi Bros</p>
        <Navbar para={data}/>
    </>
        
  )
}

export default App