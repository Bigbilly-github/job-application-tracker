
import { useEffect, useState } from 'react'
import './App.css'
import Homepage from './pages/homepage'
import JobDisplay from './pages/jobdisplay'

function App() {

  const [jobs, setJobs] = useState([]);


  useEffect (()=> {
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(savedJobs);

  }, []);

  useEffect (()=> {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  function deleteJob (index) {
    const newjobs= jobs.filter ((_,i)=>  i!== index);
    setJobs(newjobs);
  }

  function addJob (job){

    setJobs(j => ([...j, job]));
   

  }


  
  

  return (
    <>
      <Homepage  jobs={jobs} addJob={addJob}/>
      <JobDisplay  jobs={jobs} deleteJob={deleteJob} />
      
    </>
  )
}

export default App
