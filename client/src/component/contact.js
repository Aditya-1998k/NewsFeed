import NavBar from "./navBar";

const Contact=()=>{
    return(
        <>
        <NavBar></NavBar>
        <div class="container text-center">
            <div class="row" style={{border:"2px solid black",margin:"20px"}}>
                <div class="col" style={{border:"2px solid black", margin:"4px"}}>
                    <h2 style={{border:"2px solid black", margin:"4px", backgroundColor:"black",color:"white"}}>About Me</h2>
                    <h2>I am a self motivated <br/> who is continuously<br/>Working to develop <br/>his skills.</h2>
                </div>
                <div class="col" style={{border:"2px solid black", margin:"4px"}}>
                <div class="col" style={{border:"2px solid black", margin:"4px"}}>
                    <h2 style={{border:"2px solid black", margin:"4px", backgroundColor:"black",color:"white"}}>Follow Me</h2>
                    <h2>LinkedIn <br/> <a href="https://www.linkedin.com/in/aditya-gupta1998/" target="_blank">Click Here</a></h2>
                    <h2>GitHub <br/> <a target="_blank" href="https://github.com/Aditya-1998k" >Click Here</a></h2>
                </div>
                </div>
                <div class="col" style={{border:"2px solid black", margin:"4px"}}>
                <div class="col" style={{border:"2px solid black", margin:"4px"}}>
                    <h2 style={{border:"2px solid black", margin:"4px", backgroundColor:"black",color:"white"}}>Contact</h2>
                    <h2>Email<br/>aditya@gmail.com <br/>Mobile: 9643652605 <br/>Feel Free to <br/>Contact</h2>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;