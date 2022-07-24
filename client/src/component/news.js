import axios from "axios";
import {useEffect, useState} from "react"
import NavBar from "./navBar";

const News=()=>{
    const [data, setdata]=useState([]);
    useEffect(()=>{
        axios({
            method:"Get",
            url:"http://localhost:3001/news/add"
        }).then((res)=>{
            setdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])


    return(
            <>
            <NavBar></NavBar>
                {
                    data.map((news)=>{
                        return(
                            <>
                            <div class="card" style={{ margin:"20px", border:"2px solid black",width:"49%", height:"100%", display:"block", position:"relative", left:"25%"}}>
                            <h5 className="card-title" style={{backgroundColor:"black",color:"white", border:"2px solid white"}}>{news.heading}</h5>
                             <img src={news.image} style={{ height:"200px", width:"200px"}} class="card-img-top" alt="hi"/>
                             <div className="card-body">
                              <p className="card-text">{news.news}</p>
                              <button href="#" className="btn btn-primary">{news.type}</button>
                              <span> </span>
                             <button href="#" className="btn btn-primary">{news.date}</button>
                             <span> </span>
                             <button href="#" className="btn btn-primary">{news.author}</button>
                            </div>
                            </div>
                            </>
                        )
                    })
                }
            </>
    )
}
export default News;