searchForm = document.querySelector('#search-form');
cityInput = document.querySelector('#city-input');

searchForm.addEventListner('submit',function(e){
    e.preventDefault();
    const cityName = cityInput.value.trim();

})