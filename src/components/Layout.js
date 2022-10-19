import Categery from "./Categery";
import Header from "./Header"
import NewsCard from "./NewsCard";

 const Layout= ()=>{
    return(
        <>
        <Header/>
        <div className="flex">
            <div className="w-1/6 bg-slate-500 h-screen">
                <Categery/>
            </div>
            <div className="w-5/6">
                <NewsCard/>
            </div>

        </div>
    </>
    );
 }
 export default Layout;