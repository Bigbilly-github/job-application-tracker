import { useState } from "react"



function Display ({jobs, deleteJob}){

    const [value, setValue  ] = useState("");

    function ChangeValue (e){
        setValue(e.target.value);
    }

    function scrollToSection (){
        window.scrollTo ({
          top: 0,
          behavior:"smooth"
        });
      };



    function ShowJobs (value,jobs) {
        const newJobs= jobs.filter((job)=> job.jobstage===value);
        const newJobsHtml =   newJobs.map ((job, index)=> <tr className="hover:bg-gray-100 text-center text-gray-500 font-inter font-medium text-xl">
                                    <td className="px-4 py-6 border ">{index +1}</td>
                                    <td className="px-4 py-6 border">{job.companyname}</td>
                                    <td className="px-4 py-6 border">{job.jobrole}</td>
                                    <td className="px-4 py-6 border">{job.joblocation}</td>
                                    <td className={`px-4 py-6 border  ${job.jobtype === "Hybrid" ? "bg-gray-400 text-gray-300":
                                                                        job.jobtype === "On-Site" ? "bg-gray-600 text-gray-100":
                                                                        "bg-gray-800 text-gray-50"
                                                                      } `}>
                                    {job.jobtype}
                                    </td>
                                    <td className={`px-4 py-6 border  ${job.jobstage === "Applied" ? "bg-pink-800 text-gray-200 ":
                                                                        job.jobstage === "1st Interview" ? "bg-green-900 text-gray-100":
                                                                        "bg-blue-800 text-gray-50"
                                                                      } `}>
                                    {job.jobstage}
                                    </td>
                                    <button  onClick= {()=>deleteJob(index)} className="bg-black  px-4 py-6 border hover:opacity-70 text-gray-200">DELETE</button>

                                </tr>
                                );
         return newJobsHtml;


    }

    function ShowJobs2 (value,jobs) {
        const newJobs= jobs.filter((job)=> job.jobstage===value);
        const newJobsHtml =   newJobs.map ((job, index)=> <div className="sm:w-[500px] w-[400px] mt-[40px]  mb-[20px] shadow-md pl-[20px] pb-[20px] pt-[20px]">
                        <p className="text-[24px] text-gray-500  mb-[7px] font-medium font-inter">
                            Company Name:   <span className="text-black font-mono">{job.companyname}</span>
                        </p>
                        <p className="text-[24px] text-gray-500 mb-[7px] font-medium">
                            Role:  <span className="text-black font-mono">{job.jobrole}</span>
                        </p>
                        <p className="text-[24px] text-gray-500 mb-[7px] font-medium">
                            Location:  <span className="text-black font-mono">{job.joblocation}</span>
                        
                        </p>
                        <p className="text-[24px] text-gray-500 mb-[7px] font-medium">
                            Type:  <span className="text-black font-mono">{job.jobtype}</span>
                        </p>
                        <p className="text-[24px] text-gray-500 mb-[7px] font-medium">
                            Stage:  <span className="text-black font-mono">{job.jobstage}</span>
                        </p>

                        <button onClick= {()=>deleteJob(index)}  className="bg-black text-[14px] px-4 py-2 mt-[10px] rounded-[10px]  hover:bg-gray-200 hover:text-black text-gray-200">DELETE</button>



                    </div>
                                );
         return newJobsHtml;


    }

    
    

    return(
        <>
        <main className="w-[100%] h-[100vh] flex flex-col items-center mt-[120px] ">
           { jobs.length > 0 ? <div className="flex flex-col items-center">
                    <h1 className="text-[40px] font-bold font-inter mb-[20px]">
                        See All Jobs Here
                    </h1>

                    <div>
                        <label htmlFor="displayoptions" className="text-[20px] mr-3 font-medium text-gray-700">Display Options:</label>
                                            <select onChange={ChangeValue} value={value} name="displayoptions" id="displayoptions" className="px-[15px]  rounded-[6px] py-[10px] text-[18px] font-normal font-sans border border-gray-300" >
                                                <option value="">Choose jobs to display</option>
                                                <option value="alljobs">All Jobs</option>
                                                <option value="Applied">Jobs at Applied Stage</option>
                                                <option value="1st Interview">Jobs at 1st Interview Stage</option>
                                                <option value="Final Interview">Jobs at final Interview Stage</option>


                                            </select>

                    </div>
                       
                    <table className="border hidden lg:block  w-full border-gray-700 shadow-md rounded-lg mt-[20px]">
                            <thead>
                                    <tr className="bg-gray-200 text-gray-500  font-bold font-inter text-2xl">
                                            <th className="px-4 py-2 border">Index</th>
                                            <th className="px-4 py-2 border">Company</th>
                                            <th className="px-4 py-2 border">Job-Role</th>
                                            <th className="px-4 py-2 border">Location</th>
                                            <th className="px-4 py-2 border">Type</th>
                                            <th className="px-4 py-2 border">Stage</th>

                                    </tr>

                            </thead>
                            <tbody className="bg-white">
                            
                               { value!=="alljobs" ? ShowJobs(value,jobs):
                                jobs.map ((job, index)=> <tr className="hover:bg-gray-100 text-center text-gray-500 font-inter font-medium text-xl">
                                    <td className="px-4 py-6 border ">{index +1}</td>
                                    <td className="px-4 py-6 border">{job.companyname}</td>
                                    <td className="px-4 py-6 border">{job.jobrole}</td>
                                    <td className="px-4 py-6 border">{job.joblocation}</td>
                                    <td className={`px-4 py-6 border  ${job.jobtype === "Hybrid" ? "bg-gray-400 text-gray-100":
                                                                        job.jobtype === "On-Site" ? "bg-gray-600 text-gray-100":
                                                                        "bg-gray-800 text-gray-50"
                                                                      } `}>
                                    {job.jobtype}
                                    </td>
                                    <td className={`px-4 py-6 border  ${job.jobstage === "Applied" ? "bg-pink-800 text-gray-200 ":
                                                                        job.jobstage === "1st Interview" ? "bg-green-900 text-gray-100":
                                                                        "bg-blue-800 text-gray-50"
                                                                      } `}>
                                    {job.jobstage}
                                    </td>

                                    <button onClick= {()=>deleteJob(index)}  className="bg-black  px-4 py-6 border hover:opacity-70 text-gray-200">DELETE</button>

                                </tr>
                                )
                                }
                           

                            </tbody>



                    </table>
                    { value!=="alljobs" ? ShowJobs2(value,jobs):
                                jobs.map ((job, index)=> <div className="sm:w-[500px] w-[400px]  mt-[40px]  mb-[30px] shadow-md pl-[20px] pb-[20px] pt-[20px]">
                                            <p className="text-[24px] text-gray-500 mb-[7px] font-medium font-inter">
                                                Company Name: <span className="text-black font-mono">{job.companyname}</span>
                                            </p>
                                            <p className="text-[24px] text-gray-500  mb-[7px] font-medium">
                                                Role:  <span className="text-black font-mono">{job.jobrole}</span>
                                            </p>
                                            <p className="text-[24px] text-gray-500 mb-[7px] font-medium">
                                                Location:  <span className="text-black font-mono">{job.joblocation}</span>
                                            
                                            </p>
                                            <p className="text-[24px] text-gray-500 mb-[7px] font-medium">
                                                Type:  <span className="text-black font-mono">{job.jobtype}</span>
                                            </p>
                                            <p className="text-[24px] text-gray-500 mb-[7px] font-medium">
                                                Stage:  <span className="text-black font-mono">{job.jobstage}</span>
                                            </p>

                                            <button onClick= {()=>deleteJob(index)}  className="bg-black text-[14px] px-4 py-2 mt-[10px] rounded-[10px] hover:bg-gray-200 hover:text-black text-gray-200">DELETE</button>
                    
    
                            
                                    </div>



                                
                                )
                                }

                    <button onClick={scrollToSection}  className="bg-amber-500 hover:text-amber-500 w-[150px] hover:bg-slate-900  text-slate-900  font-medium  px-[40px] mt-[25px] py-[10px] rounded-[10px] border-0 text-[20px]">Home</button>

            </div>
            :
                    
                    <h1 className="text-[50px] font-bold text-gray-900  text-center font-inter">No jobs to be displayed. Click <a href="" onClick={scrollToSection} className="text-gray-400 font-inter">link</a> to Add new jobs</h1>
                            }


        </main>
        </>
    )

}
export default Display