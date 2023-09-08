import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import Button from "../../component/Button/Button";


export default function Home(){
    return(
        <div className="container">
            <Navbar />
            <h1>Home page</h1>
          <Button text="Register"/>
          <Button text="Read more"/>
            </div>
    )
}