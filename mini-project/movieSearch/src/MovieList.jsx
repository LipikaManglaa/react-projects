import { Link } from "react-router-dom"
function MovieList({movieData}) {
    let finalList=movieData.map((v,i)=>{
        return(
        
            <MovieCart movieDetails={v} key={i} />
        )
    })
    console.log(finalList)
    return (
        <>
            <div className="max-w-[1320px] mx-auto grid md:grid-cols-4 grid-cols-1 gap-4">
             
                  {finalList}
            </div>

        </>
    )
}
export { MovieList }


export function MovieCart({movieDetails}) {
    let imgPath = 'https://image.tmdb.org/t/p/w1280';
    return (
      
            <div className="border-2  border-black overflow-hidden"  >
                <Link to={'/movie/'+movieDetails.id}>
                <img src={imgPath+movieDetails.poster_path} className="h-[400px]  w-[100%] hover:overflow-hidden hover:scale-125"/></Link>
                <h3 className='text-[20] text-[#000] font-bold py-[10px]'>{movieDetails.title}</h3>
            </div>
       
    )
}