import Display from "../components/display"
import Header from "../components/header"




function JobDisplay({jobs}){
    return(
        <>
            <Header/>
            <Display jobs={jobs}/>
      
        </>
    )
}
export default JobDisplay