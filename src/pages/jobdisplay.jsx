import Display from "../components/display"
import Header from "../components/header"




function JobDisplay({jobs, deleteJob}){
    return(
        <>
            <Header/>
            <Display jobs={jobs} deleteJob={deleteJob}/>
      
        </>
    )
}
export default JobDisplay