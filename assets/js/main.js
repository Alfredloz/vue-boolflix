let app = new Vue({
    el: '#app',
    data:{
        moviesArray:[],
        tvShows: [],
        searchUser: '',
        errorMsg: null,

    },
    methods:{
      // chiamata axios per i film
        searchFilms(){
            var config = {
                method: 'get',
                url: `https://api.themoviedb.org/3/search/movie?api_key=178b153a9c399a44c2973d28bcf08244&language=it-IT&query=${this.searchUser}&include_adult=false`,
                headers: { }
              };
              
              axios(config)
              .then(response=> {
                this.moviesArray = response.data.results;
                console.log(this.moviesArray);
                // ciclo vor each per ogni voto e restituisce il voto con math.ceil 
                this.moviesArray.forEach(movie => {
                  let rating = Math.ceil(movie.vote_average / 2)
                  movie.vote_average = rating;
                  // if per le bandiere sbagliate nella richiesta api
                  if (movie.original_language == "en"){
                    movie.original_language = "gb";
                  } else if (movie.original_language == "zh") {
                    movie.original_language = "cn"
                  } else if (movie.original_language == "ko") {
                    movie.original_language = "kr"
                  } else if(movie.original_language == "vi"){
                    movie.original_language = "vn";
                  }else if(movie.original_language == "ja"){
                    movie.original_language = "jp";
                  }else if(movie.original_language == "et"){
                    movie.original_language = "ee";
                  } else if(movie.original_language == "hu"){
                    movie.original_language = "ua";
                  }else if(movie.original_language == "da"){
                    movie.original_language = "dk";
                  }
                });
              })
               // error signal
               .catch(function (error) {
                console.log(error);
              });
              var element = {
                method: 'get',
                url: `https://api.themoviedb.org/3/search/tv?api_key=178b153a9c399a44c2973d28bcf08244&language=it-IT&query=${this.searchUser}&include_adult=true`,
                header: {}
              }
              axios(element)
              .then(response=>{
                this.tvShows = response.data.results;
                this.tvShows.forEach(serie => {
                  let rating = Math.ceil(serie.vote_average / 2)
                  // if per le bandiere sbagliate nella richiesta api
                  serie.vote_average = rating;
                  if (serie.original_language == "en"){
                    serie.original_language = "gb";
                  } else if (serie.original_language == "zh") {
                    serie.original_language = "cn"
                  } else if (serie.original_language == "ko") {
                    serie.original_language = "kr"
                  } else if(serie.original_language == "vi"){
                    serie.original_language = "vn";
                  }else if(serie.original_language == "et"){
                    serie.original_language = "ee";
                  }else if(serie.original_language == "ja"){
                    serie.original_language = "jp";
                  }else if(serie.original_language == "da"){
                    serie.original_language = "dk";
                  } else if(serie.original_language == "hu"){
                    serie.original_language = "ua";
                  }
                });
                console.log(this.tvShows);
              })
              // error signal
              .catch(function (error) {
                console.log(error);
              });
             
        },
        // cambio di valutazione rating
        
    },
});