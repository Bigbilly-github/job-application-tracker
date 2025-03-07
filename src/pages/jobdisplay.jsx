import Display from "../components/display"





function JobDisplay({jobs, deleteJob}){
    return(
        <>
         
            <Display jobs={jobs} deleteJob={deleteJob}/>
      
        </>
    )
}
export default JobDisplay