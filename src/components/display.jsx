import { useState } from "react"



function Display ({jobs}){

    const [value, setValue  ] = useState("");

    function ChangeValue (e){
        setValue(e.target.value);
    }


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

                                </tr>
                                );
         return newJobsHtml;


    }

    
    

    return(
        <>
        <main className="w-[100%] h-[100vh] flex flex-col items-center mt-[120px] ">
            <div>
                    <h1 className="text-[40px] font-bold font-inter mb-[20px]">
                        See All Jobs Here
                    </h1>
                    <label htmlFor="displayoptions" className="text-[20px] mr-3 font-medium text-gray-700">Display Options:</label>
                    <select onChange={ChangeValue} value={value} name="displayoptions" id="displayoptions" className="px-[15px]  rounded-[6px] py-[10px] text-[18px] font-normal  border border-gray-300" >
                            <option value="">Choose jobs to display</option>
                            <option value="alljobs">All Jobs</option>
                            <option value="Applied">Jobs at Applied Stage</option>
                            <option value="1st Interview">Jobs at 1st Interview Stage</option>
                            <option value="Final Interview">Jobs at final Interview Stage</option>


                    </select>
                    <table className="border  w-full border-gray-700 shadow-md rounded-lg mt-[20px]">
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

                                </tr>
                                )}

                            </tbody>



                    </table>

            </div>


        </main>
        </>
    )

}
export default Display