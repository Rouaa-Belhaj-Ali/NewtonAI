import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return ( 

        <div>
            LandingPage
        
      <div>

        <Link  href= "/sign-up">
        <Button>
            Login
        </Button>
        </Link>
       

        <Link  href= "/sign-in">
        <Button>
            Register
        </Button>
        </Link>
        </div>
        </div>
      
     );
}
 
export default LandingPage;