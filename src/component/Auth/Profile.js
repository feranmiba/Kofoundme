import { Link } from "react-router-dom";
import { Profiles, Logo } from "../utils/Data";

function Profile() {
  return (
    <div>



    <section className="flex justify-between pl-14 gap-20">

    <section>
    <p><img src={Logo} alt='logo' /></p> 

    <form className="mt-10">
    
    <div className="flex gap-5">
    <input 
    type="checkbox" 
    checked 
    className="w-6 h-6 rounded-full border bg-blue-500" 
  />
  
  


    <p>
    Create Account
    <br/>
    Your account has been created and validated
    </p>
    
    </div>
    
    
    </form>


<Link to="/dashboard">   <button>Submit</button></Link> 

    </section>



    <div>
    <img src={Profiles} alt="kyug" />
    </div>

    </section>
      
    </div>
  )
}

export default Profile
