
import logo from '../img/header/logo.png' 


function Header (){

    return(
        <>
          <header className=" sm:h-[110px] h-[80px] bg-amber-100  flex  items-center justify-center   fixed left-0 right-0 ">
            <div className='flex gap-[15px]'>
                <img src={logo} alt="website logo" />
                <h1 className="font-inter text-[40px] font-extrabold ">
                Job Tracker
                </h1>
            </div>

          </header>
        </>
    )

}
export default Header