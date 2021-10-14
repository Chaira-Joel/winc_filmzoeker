// FUNCTIE ADD MOVIES TO DOM
function addMoviesToDom(movies) {
    const movieList = document.getElementById("movie-list");

    const listItems = movies.map((movie) => {
        let listItem = document.createElement("li");
        
        let newImage = document.createElement("img");
        newImage.src = movie.Poster;

        let link = document.createElement("a");
        link.href = "https://imdb.com/title/" + movie.imdbID;
        link.target = "_blank";

        listItem.appendChild(link);
        link.appendChild(newImage);

        return listItem;

    });
// forEach method om de li aan de UL te plakken
  listItems.forEach(listItem => {
    movieList.appendChild(listItem);
});
};

addMoviesToDom(movies);

//FUNCTIE REMOVE MOVIES FROM FOM 
function removeMoviesFromDOM(){
    const currentMovies = document.getElementById("movie-list");

    while (currentMovies.hasChildNodes()) {
        currentMovies.removeChild(currentMovies.firstChild);
    };
}

//FUNCTIE ADD EVENT LISTENERS
function addEventListeners(){
    const filterButtons = document.getElementsByName("film-filter");

    filterButtons.forEach((filterButton) => {
        filterButton.addEventListener('change', handleOnChangeEvent);
    
    });
}

//FUNCTIE FILMFILTER - FILMS FILTEREN OP TITEL
function filterMovies(wordInMovieTitle){
    removeMoviesFromDOM();

    const filterMovies = movies.filter((movie) => {
        return movie.Title.includes(wordInMovieTitle);
        
    });
    
    addMoviesToDom(filterMovies);
    
}

// FUNCTIE FILMFILTER - FILMS FILTEREN OP => 2014 
function filterLatestMovies(){
    removeMoviesFromDOM();

    const filterLatest = movies.filter((movie) => {
        return movie.Year >= 2014;
    });
    addMoviesToDom(filterLatest);
}


//FUNCTIE HANDLE ON CHANGE EVENT 
function handleOnChangeEvent(event){
    console.log(event.target);

    switch (event.target.value) {
        case "newfilms":
            filterLatestMovies();
            break;

            case "princess":
            filterMovies("Princess");
            break;

            case "xmen":
            filterMovies("X-Men");
            break;

            case "avengers":
            filterMovies("Avengers");
            break;

            case "batman":
            filterMovies("Batman");
            break;

        default:
            break;
    }
    
    };
    addEventListeners();



