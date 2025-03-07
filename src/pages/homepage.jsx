import Header from "../components/header"
import Main from "../components/main"




function Homepage ({jobs, addJob}){

    return(
        <>
            <Header/>
            <Main jobs={jobs} addJob={addJob}  />
        
        </>
    )

}
export default Homepage