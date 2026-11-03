import MovieCard from "../MovieCard"
import MovieList from "../MovieList"

function Movies(){
  return (
    <main className="bg-amber-950 text-amber-50" h-screen>
      <MovieList/>
      <MovieCard/>  
    </main>
  )
}

export default Movies