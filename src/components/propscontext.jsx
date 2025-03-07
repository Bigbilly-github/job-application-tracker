
import { createContext,useContext,useEffect, useState } from "react";
const valueContext = createContext();

function ContextProvider ({ children }){

    const [jobs, setJobs] = useState([]);

    function deleteJob (index) {
        const newjobs= jobs.filter ((_,i)=>  i!== index);
        setJobs(newjobs);
      }
    
      function addJob (job){
    
        setJobs(j => ([...j, job]));
       
    
      }
      useEffect (()=> {
        const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
        setJobs(savedJobs);
    
      }, []);
    
      useEffect (()=> {
        localStorage.setItem("jobs", JSON.stringify(jobs));
      }, [jobs]);
    

    return(
        <>
         <valueContext.Provider value={{ jobs, deleteJob, addJob }}>
                 {children}
        </valueContext.Provider>
        </>
    )

}
export default ContextProvider

export const useValueContext = () => {
    return useContext(valueContext);
  };