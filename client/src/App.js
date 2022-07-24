import Home from "./component/home";
import Contact from "./component/contact";
import NewsData from "./component/newsData";
import News from "./component/news";
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/form" element={<NewsData/>}></Route>
      <Route exact path="/news" element={<News/>}></Route>
      <Route exact path="/contact" element={<Contact/>}></Route>
    </Routes>
    </>
  );
}

export default App;
