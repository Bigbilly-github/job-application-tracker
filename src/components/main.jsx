


function Main () {

    const textInputEl = [
        {
            labeltext: "Role",
            for: "jobrole",
            type: "text",
            id: "jobrole",
            name:" jobrole",
            placeholder: "Enter job role"
        },

        {
            labeltext: "Location",
            for: "location",
            type: "text",
            id: "location",
            name:"location",
            placeholder: "City, Country"
        },
        {
            labeltext: "Expected Salary(Naira)",
            for: "salary",
            type: "number",
            id: "salary",
            name:"salary",
            placeholder: "Enter Amount"
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
            labeltext: "Interview Stage",
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


    return(
        <>
        <section className="w-[100%] h-[90vh] mt-[120px]  flex-col   flex items-center">


            <form  className=" mt-[15px] w-[500px] flex flex-col bg-[#F6F7F8] items-center pl-[40px] border-0 shadow-xl pt-[15px] pb-[20px] rounded-2xl ">

                <h1 className="font-bold  font-inter text-[30px]  w-[400px] mb-[20px]">
                    Enter job details below
                </h1>

                {textInputEl.map((list)=>  <div className="flex flex-col gap-[8px] mb-[20px] w-[400px]">
                    <label htmlFor={list.for} className=" text-[18px] font-medium text-gray-700 font-inter"> {list.labeltext}:  </label>
                    <input type={list.type} id={list.id} name={list.name}  placeholder={list.placeholder} className="py-[10px] px-[10px] w-[350px] rounded-[6px] border border-slate-400" required/>
                    
                </div>
                )}

               
               

               { optionsTextEl.map ((list) => <div className="flex flex-col gap-[8px] w-[400px]  mb-[10px]">

                    <label htmlFor={list.for} className=" text-[18px]  font-medium text-gray-700 rounded-[6px]  font-inter"> {list.labeltext}:  </label>

                   <select name={list.name} id={list.id} className="p-[10px] w-[150px] rounded-[6px]  border border-slate-400" required>
                        <option value={list.value1}>{list.option1}</option>
                        <option value={list.value1}> {list.option2}</option>
                        <option value={list.value1}> {list.option3}</option>
                        <option value={list.value1}> {list.option4}</option>
                   </select>
                    
                </div>
    )}





                <button type="submit" className="px-[170px] mt-[20px] font-medium mx-auto bg-amber-200 py-[10px] font-inter text-[20px] rounded-[10px] shadow-2xl">
                    Submit

                </button>
                

               
            </form>

        </section>
        </>
    )

}
export default Main