let app = new Vue({
    el: '#app',
    data:{
        moviesArray:[],
        searchMovie: '',
    },
    methods:{
      // chiamata axios per i film
        searchFilms(){
            var config = {
                method: 'get',
                url: `https://api.themoviedb.org/3/search/movie?api_key=178b153a9c399a44c2973d28bcf08244&language=it-IT&query=${this.searchMovie}&include_adult=false`,
                headers: { }
              };
              
              axios(config)
              .then(response=> {
                console.log(response.data.results);
                this.moviesArray = response.data.results;
                console.log(this.moviesArray);
              })
              .catch(function (error) {
                console.log(error);
              });
        },
        // cambio di valutazione rating
        numberCeil(integer){
           return Math.ceil(((integer - 0) / (10 - 0)) * (5 - 0) + 0)
        },
        
    },
});