

import logo from '../img/header/logo.png' 

function Footer (){

    return(
        <>
        <footer className="h-[50px] bg-amber-100 sm:mt-[50px] mt-[30px] flex   items-center justify-center    ">
                <div className='flex gap-[15px]'>
                  
                        <h1 className="font-inter text-[20px] font-extrabold ">
                       <span className='text-[18px] font-medium'>&copy; {new Date().getFullYear()}</span> Job Tracker
                        </h1>
                </div>

        </footer>
        </>
    )

}
export default Footer