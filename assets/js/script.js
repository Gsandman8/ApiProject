searchForm = document.querySelector('#search-form');
cityInput = document.querySelector('#city-input');

searchForm.addEventListner('click', function(e){
    e.preventDefault();
    const cityName = cityInput.value.trim();

})

const genreBtn = document.getElementById("genreBtn");
const genreList = document.getElementById("genreList");
const div = document.getElementById("movieList");
const genreIdList = {
    action: 28,
    adventure: 12,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 99,
    drama: 18,
    family: 10751,
    fantasy: 14,
    history: 36,
    horror: 27,
    music: 10402,
    mystery: 9648,
    romance: 10749,
    scienceFiction: 878,
    tVMovie: 10770,
    thriller: 53,
    war: 10752,
    western: 37
};
let genre = ""
let genreId = "";

genreBtn.addEventListener("click", function(event){
    event.preventDefault();
    genre = genreList.value;
    genreId = genreIdList[genre];
    console.log(genreId);
    div.textContent="";
    getMovieApi(genreId);
})

function getMovieApi(genreId){
    var requestUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=d731edca152ef707766b1bf7bf0763e9&with_original_language=en&with_genres=';
    fetch(requestUrl+genreId)
    .then(function (response) {
        return response.json();
        })
    .then(function (data) {
    console.log(data);
    for(let i=0; i<data.results.length; i++){
        let header = document.createElement("h1");
        let p = document.createElement("p");
        header.textContent = data.results[i].original_title
        p.textContent = data.results[i].overview
        div.appendChild(header);
        div.appendChild(p);

        
    }
})
}