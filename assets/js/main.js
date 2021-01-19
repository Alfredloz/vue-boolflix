let app = new Vue({
    el: '#app',
    data:{
        moviesArray:[],
        moviesArray2: [],
        tvShows: [],
        tvShows2: [],
        searchUser: '',

    },
    methods:{

      // metodo per le bandiere richiesta 
      flagsMethod(element){
        if (element.original_language == "en"){
          element.original_language = "gb";
        } else if (element.original_language == "zh") {
          element.original_language = "cn"
        } else if (element.original_language == "ko") {
          element.original_language = "kr"
        } else if(element.original_language == "vi"){
          element.original_language = "vn";
        }else if(element.original_language == "ja"){
          element.original_language = "jp";
        }else if(element.original_language == "et"){
          element.original_language = "ee";
        } else if(element.original_language == "hu"){
          element.original_language = "ua";
        }else if(element.original_language == "da"){
          element.original_language = "dk";
        }
      },
      // chiamata axios per i film
        searchFilms(){
          // chiamata italiano
            var config = {
                method: 'get',
                url: `https://api.themoviedb.org/3/search/movie?api_key=178b153a9c399a44c2973d28bcf08244&language=it-IT&query=${this.searchUser}&include_adult=false`,
                headers: { }
              };
              axios(config)
              .then(response=> {
                this.moviesArray = response.data.results;
                console.log(this.moviesArray);
                this.searchUser = '';
                // ciclo vor each per ogni voto e restituisce il voto con math.ceil 
                this.moviesArray.forEach(movie => {
                  let rating = Math.ceil(movie.vote_average / 2)
                  movie.vote_average = rating;
                  // if per le bandiere sbagliate nella richiesta api
                  this.flagsMethod(movie);
                });
              })
               // error signal
               .catch(function (error) {
                console.log(error);
              });
              // !attenzion: seconda chiamata axios per lingua inglese se manca trama in italiano
              var config = {
                method: 'get',
                url: `https://api.themoviedb.org/3/search/movie?api_key=178b153a9c399a44c2973d28bcf08244&language=en-US&query=${this.searchUser}&include_adult=false`,
                headers: { }
              };
              axios(config)
              .then (response=>{
                this.moviesArray2 = response.data.results;
              })
              //  //
              
              var config = {
                method: 'get',
                url: `https://api.themoviedb.org/3/search/tv?api_key=178b153a9c399a44c2973d28bcf08244&language=it-IT&query=${this.searchUser}&include_adult=true`,
                header: {}
              }
              axios(config)
              .then(response=>{
                this.tvShows = response.data.results;
                this.tvShows.forEach(serie => {
                  let rating = Math.ceil(serie.vote_average / 2)
                  // if per le bandiere sbagliate nella richiesta api
                  serie.vote_average = rating;
                  this.flagsMethod(serie);
                  
                });
                console.log(this.tvShows);
              })
              // error signal
              .catch(function (error) {
                console.log(error);
              });
             
                // !chiamata axios in inglese per le serie
              // var config = {
              //   method: 'get',
              //   url: `https://api.themoviedb.org/3/search/tv?api_key=178b153a9c399a44c2973d28bcf08244&language=en-US&query=${this.searchUser}&include_adult=true`,
              //   header: {}
              // }
              // axios(config)
              // .then(response=>{
              //   this.tvShows2 = response.data.results;
                
              // })
              // // error signal
              // .catch(function (error) {
              //   console.log(error);
              // });
             
        },
        // cambio di valutazione rating
        
    },
});