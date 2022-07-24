import NavBar from "./navBar";
const Home=()=>{
    return(
        <>
        <NavBar></NavBar>
        <div style={{width:"50%",display:"block", float:"left"}}>
        <img src="https://images.unsplash.com/photo-1658481549878-c9d429c32eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="unsplash" style={{width:"100%", height:"100vh"}}></img>
        </div>
        <div>
            <h3 style={{width:"50%",display:"block", float:"left" ,textAlign: "center",position:"relative", top:"90px"}}>Start exploring <br/>The World Of Opportunity<br/>Start Exploring 10x academy<br/><a href="https://www.the10xacademy.com/" target="_blank">Visit Here</a></h3>
        </div>
        </>
    )
}
export default Home;