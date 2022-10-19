const Item=({title})=>{
    return(
        <a href="" className="bg-slate-500 font-semibold text-white hover:bg-black p-3 text-center text-">{title}</a>
    )
}
const Categery= ()=>{
    const data=["crime","Education","poltic"]
    return(
        
        <div className="flex flex-col mt-3">
            {
                data.map((value,index)=>(
                    <Item title={value} key={index}/>
                ))
            }
        </div>
        
    );
}
export default Categery;