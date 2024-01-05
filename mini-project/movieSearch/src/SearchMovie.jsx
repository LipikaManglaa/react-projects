function SearchMovie({title,searchMovieList}){
    let handelData=(e)=>{
        searchMovieList(e.target.value) //Txtvalue
    }
    return(
        <>
        <div className="max-w-[1320px] mx-auto py-[30px]">
             <input type="text" value={title} onChange={handelData} className="w-[100%] h-[40px] text-[20px] border-2 py-[10px] " placeholder="Search"/>
         </div>
        </> 
    )
}
export {SearchMovie}