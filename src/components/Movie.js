const Movie = ({ movie }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <div className="movie">
            <img className="movie__image" alt={movie.title} src={imageUrl}></img>
            <div className="movie__info">

                <span className="movie__subject--header">{movie.title}</span>

                <div className="movie__subject">
                    <span className="movie__subject--label">Populär:</span>
                    <span className="movie__subject--value">{movie.popularity}</span>
                </div>

                <div className="movie__subject">
                    <span className="movie__subject--label">Betyg:</span>
                    <span className="movie__subject--value">{movie.vote_average}</span>
                </div>

                <div className="movie__subject">
                    <span className="movie__subject--label">Röster:</span>
                    <span className="movie__subject--value">{movie.vote_count}</span>
                </div>

                <span className="movie__subject--overview">{movie.overview}</span>
            </div>
        </div>
    )
}


export default Movie
