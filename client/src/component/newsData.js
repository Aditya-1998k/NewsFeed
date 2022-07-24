import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import NavBar from "./navBar";


const NewsData=()=>{
    const [postdata, setpostdata]=useState({});
    const formpostdata=[{attr:"image", type:"text", id:"image"},
                        {attr:"author", type:"text", id:"author"},
                        {attr:"news", type:"text", id:"news"},
                        {attr:"heading", type:"text", id:"heading"},
                        {attr:"type", type:"text", id:"type"},
                    ];

    const handleonclick=()=>{
        console.log(postdata);
        axios({
            url:"http://localhost:3001/news/add",
            method:"POST",
            data:postdata
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const handleInputChange=(e,id)=>{
        setpostdata({...postdata, [id]:e.target.value})
    }
    
    return(
        <>
        <NavBar></NavBar>
        <div id="main">
            <form>
                {formpostdata.map((formkey)=>{
                    return(
                        <div>
                            <input required={true} placeholder={formkey.id} type={formkey.type} id={formkey.id} onChange={(e)=>{handleInputChange(e,formkey.id)}}></input>
                        </div>
                    )
                })}
            </form>
            <Link to="/news" id="button_link" onClick={handleonclick} type="submit">POST</Link>
        </div>
        
        </>
    )
}
export default NewsData;