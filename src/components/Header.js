const Header =()=>{
    return(
        <div className="flex bg-orange-400 text-white justify-between items-center p-4 px-10">
            <h1 className="text-xl font-serif font-semibold">News Portel</h1>
            <form method="post" className="ml-20">
                
                <button className="bg-white text-slate-400 p-2 rounded-l-3xl pl-4"><i class="bi bi-search"></i></button>
                <input type="text" className="p-2 w-72 rounded-r-3xl" placeholder="Search bar"></input>
            </form>
            <div className="flex items-center gap-3">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
        </div>
    );
}
export default Header;