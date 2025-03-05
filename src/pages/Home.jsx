import { FaLongArrowAltRight } from "react-icons/fa";
import '../Component/Navbar.css'
import About from './About.jsx'
const Home = ()=>{
    return (
        <>
              <div id="Banner">
        
              <div className="text">
                   <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Necessitatibus consequatur, magni numquam deleniti laborum, </h1>
        
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>
                     Velit autem eligendi laudantium necessitatibus,</p>
             
             <button>
                     startExploring
                     <FaLongArrowAltRight />
             </button>

                </div>
        
                <div className="Banner-image">
                    <img src="../src/assets/tony-stark-removebg-preview.png" alt="image" />   
                </div>
        
              </div>

               <About />
            </>
    )
}
export default Home;