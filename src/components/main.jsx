


function Main () {


    return(
        <>
        <section className="w-[100%] h-auto mt-[150px]  flex-col  pt-[20px] flex items-center">
            <h1 className="font-medium  font-inter text-[30px] mb-0">
                Enter job details below
            </h1>

            <form  className=" mt-[15px] w-[400px] border pl-[40px] ">
                <div className="flex flex-col gap-[8px] mb-[10px]">
                    <label htmlFor="jobrole" className=" text-[18px] font-medium text-gray-700 font-inter"> Role:  </label>
                    <input type="text" id="jobrole" name="jobrole"  placeholder="Enter job role" className="py-[10px] px-[10px] w-[300px] rounded-[6px] border border-slate-400" required/>
                    
                </div>

               
                <div className="flex flex-col gap-[8px] mb-[10px]">
                    <label htmlFor="location" className=" text-[18px]  font-medium  text-gray-700 font-inter"> Location:  </label>
                    <input type="text" id="location" name="location"  placeholder="City, Country" className="py-[10px] w-[300px] px-[10px] border rounded-[6px]  border-slate-400" required/>
                    
                </div>

                <div className="flex flex-col gap-[8px] mb-[10px]">

                    <label htmlFor="jobtype" className=" text-[18px]  font-medium text-gray-700 rounded-[6px]  font-inter"> Type:  </label>

                   <select name="jobtype" id="jobtype" className="p-[10px] w-[150px] rounded-[6px]  border border-slate-400">
                        <option value="">Select job type</option>
                        <option value="hybrid"> Hybrid</option>
                        <option value="onsite"> On-site</option>
                        <option value="remote"> Remote</option>
                   </select>
                    
                </div>

                <div className="flex flex-col gap-[8px] mb-[10px]">
                    <label htmlFor="salary" className=" text-[18px]  font-medium  text-gray-700 font-inter"> Salary:  </label>
                    <input type="number" id="salary" name="salary"  placeholder="Enter Amount" className="py-[10px] w-[300px] px-[10px] rounded-[6px]  border border-slate-400" required/>
                    
                </div>

                <div className="flex flex-col gap-[8px] mb-[15px]">

                    <label htmlFor="jobtype" className=" text-[18px]  font-medium  text-gray-700 font-inter"> Interview Stage:  </label>

                    <select name="jobtype" id="jobtype" className="p-[10px] w-[220px] border rounded-[6px]  border-slate-400">
                        <option value=""></option>
                        <option value="applied"> Applied</option>
                        <option value="hrscreening"> Hr screening</option>
                        <option value="interview"> Interview</option>
                        <option value="finalinterview"> Interview</option>
                    </select>

                </div>

                <button type="submit" className="px-[60px] font-medium mx-auto bg-amber-200 py-[10px] font-inter text-[18px] rounded-[10px] shadow-2xl">
                    Submit

                </button>
                

               
            </form>

        </section>
        </>
    )

}
export default Main