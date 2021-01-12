let app = new Vue({
    el: '#app',
    data:{
        moviesArray:[],
        searchMovie: '',
    },
    methods:{
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
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    },
    // computed:{
    //     filteredMovies(){
    //         return this.moviesArray.filter(item=>{
    //             return item.original_title.toLowerCase().includes(this.searchMovie.toLowerCase())
    //         })
    //     }
    // },
    // mounted(){
    //     var config = {
    //         method: 'get',
    //         url: `https://api.themoviedb.org/3/search/movie?api_key=178b153a9c399a44c2973d28bcf08244&language=it-IT&query=${this.searchMovie}&include_adult=false`,
    //         headers: { }
    //       };
          
    //       axios(config)
    //       .then(response=> {
    //         console.log(response.data.results);
    //         this.moviesArray = response.data.results;
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
});