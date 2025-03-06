import { useState } from "react"



function Main ({jobs, addJob}) {
   
    const [job, setJob] = useState({
        companyname:"",
        jobrole:"",
        joblocation:"",
        jobtype:"",
        jobstage:"",
       
    });
 



  function HandleCompanyName (e){
    
    setJob(j=>({...j, companyname:e.target.value}))
}
  function HandleRole (e){
    setJob(j=>({...j, jobrole:e.target.value}))

  }
  function HandleLocation (e){
    setJob(j=>({...j, joblocation:e.target.value}))

  }

  function HandleJobType (e) {
    setJob(j=>({...j, jobtype:e.target.value}))
  }

  function HandleJobStage (e) {
    setJob(j=>({...j, jobstage:e.target.value}))
  }

    
    
function AddToJob (addJob,job) {
    addJob(job);
    setJob(j => ({...j, companyname:"" ,jobrole:"" ,joblocation:"", jobtype:"", jobstage:""}))
}

    


    const textInputEl = [
        {
            labeltext: "Company",
            for: "company",
            type: "text",
            id: "company",
            name:"company",
            placeholder: "Enter Company name"
        },

        {
            labeltext: "Role",
            for: "jobrole",
            type: "text",
            id: "jobrole",
            name:"jobrole",
            placeholder: "Enter Job role"
        },
        {
            labeltext: "Location",
            for: "joblocation",
            type: "text",
            id: "joblocation",
            name:"joblocation",
            placeholder: "City, Country"
        }
    ]

    const optionsTextEl = [
        {
            labeltext: "Type",
            for: "jobtype",
            id: "jobtype",
            name:"jobtype",
            option1: "choose type",
            value1: "",
            option2: "hybrid",
            value2: "hybrid",
            option3: "on-site",
            value3: "onsite",
            option4: "remote",
            value4: "remote",

            

        },
        {
            labeltext: "Stage",
            for: "jobstage",
            id: "jobstage",
            name:"jobstage",
            option1: "choose stage",
            value1: "",
            option2: "Applied",
            value2: "applied",
            option3: "1st Interview",
            value3: "interview",
            option4: "Final Interview",
            value4: "finalinterview",

            

        }
    ]

    console.log(job)
    console.log(jobs)


    return(
        <>
        <section className="w-[100%] h-[100vh] mt-[120px]  flex-col   flex items-center">


            <form   className=" mt-[10px] w-[500px] flex flex-col bg-[#F6F7F8] items-center pl-[40px] border-0 shadow-xl pt-[15px] pb-[20px] rounded-2xl ">

                <h1 className="font-bold  font-inter text-[30px]  w-[400px] mb-[20px]">
                    Enter job details below
                </h1>

                {textInputEl.map((list, index)=>  <div key={index} className="flex flex-col gap-[8px] mb-[20px] w-[400px]">
                    <label htmlFor={list.for} className=" text-[18px] font-medium text-gray-700 font-inter"> {list.labeltext}:  </label>
                    <input type={list.type}  value={
                                                    list.name === "company" ? job.companyname :
                                                    list.name === "jobrole" ? job.jobrole :
                                                    job.location
                                                }
                                            onChange={
                                                list.name === "company" ? HandleCompanyName :
                                                list.name === "jobrole" ? HandleRole :
                                                HandleLocation

                                            }
                        id={list.id} name={list.name}  placeholder={list.placeholder} className="py-[10px] px-[10px] w-[350px] rounded-[6px] border border-slate-400"  minLength={8} required/>
                    
                </div>
                )}

               
               

               { optionsTextEl.map ((list, index) => <div key={index}  className="flex items-center gap-[10px] w-[400px]  mb-[10px]">

                    <label htmlFor={list.for} className=" text-[18px]  font-medium text-gray-700 rounded-[6px]  font-inter"> {list.labeltext}:  </label>

                   <select   value={list.name === "jobtype" ? job.jobtype : job.jobstage}  onChange={list.name === "jobtype" ? HandleJobType : HandleJobStage}
                            name={list.name} id={list.id} className="p-[10px] w-[150px] rounded-[6px]  border border-slate-400" required>
                        <option value={list.value1}  >{list.option1}</option>
                        <option value={list.value2}> {list.option2}</option>
                        <option value={list.value3}> {list.option3}</option>
                        <option value={list.value4}> {list.option4}</option>
                   </select>
                    
                </div>
    )}






                

               
            </form>
            <button  onClick={()=> AddToJob(addJob,job)}  type="btn" className="px-[170px] mt-[20px] font-medium mx-auto bg-amber-300 py-[10px] font-inter text-[20px] rounded-[10px] shadow-2xl">
                    Submit

                </button>

           <button className="bg-amber-500  text-slate-900  font-medium  px-[40px] mt-[25px] py-[10px] rounded-[10px] border-0 text-[20px]">See all Jobs</button>

        </section>
        </>
    )

}
export default Main