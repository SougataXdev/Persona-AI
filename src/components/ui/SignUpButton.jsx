import { Link } from "react-router-dom"; 
import { ArrowUpRight } from "lucide-react"; 
import { HoverBorderGradient } from "./Hover-Border-Gradient"; 

const SignUpButtonC = () => {
    return (
      <div className="relative flex items-center justify-center md:w-full z-5">
        <HoverBorderGradient
          containerClassName="rounded-3xl"
          className="relative flex items-center text-black bg-white dark:bg-black dark:text-white"
          duration={1}
        >
          <Link
            to="/?sign-in=true"
            className="inline-flex items-center justify-start w-full px-5 py-1 gap-x-2"
          >
            <span className="relative z-10">Get Started</span>
            <div className="relative z-10 flex items-center w-5 h-5 ml-1 overflow-hidden">
              <ArrowUpRight className="absolute transition-transform duration-500 transform group-hover:translate-x-4 group-hover:-translate-y-5" />
              <ArrowUpRight className="absolute transition-transform duration-500 transform -translate-x-4 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </Link>
        </HoverBorderGradient>
      </div>
    );
  };

export default SignUpButtonC;
