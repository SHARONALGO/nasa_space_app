import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from './components/Main'
import Sidebar from "./components/Sidebar"
function App() {
  

  const [data, setData] = useState(null);


  
  const [showModal, setshowModal] = useState(false);


  
  function handleToggleModal() {
    setshowModal(!showModal);
  }
  
  // use effect two parameters function to be executed when the dependancies or array is satisfied/changed
  useEffect(() =>{
    const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
    async function fetchApiData(){
      const url ="https://api.nasa.gov/planetary/apod"+ `?api_key=${NASA_API_KEY}`;

      //CACHING THE DATA 

      const today = (new Date()).toDateString()

      const localKey = `NASA-${today}`;

      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetch from browser cache")
        return 
      }
       
      localStorage.clear()

      try{
        const response = await fetch(url);
        const apiData = await  response.json();

        localStorage.setItem(localKey,JSON.stringify(apiData))
        setData(apiData);
        console.log('Fetched from API\n',apiData);
      }catch(err){
        console.log(err.message);
      }

    }
    fetchApiData();
  }, [])

// showModal is a prop being passed on to  footer
  return (
    <>
    {data ? <Main data={data}/> : (
      <div className="loadingState">
        <i className="fa-solid fa-gear"></i>
      </div>
    )}
    {showModal && (

      <Sidebar handleToggleModal={handleToggleModal} data = {data}></Sidebar>
    )}

    {data && (
      <Footer handleToggleModal={handleToggleModal} data={data}/>)
    }

    </>
  )
}

export default App
