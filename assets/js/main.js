let app = new Vue({
    el: '#app',
    data:{
        moviesArray:[],
        inputVal: null,
    },
    methods:{

    },
    mounted(){
        var config = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/movie?api_key=178b153a9c399a44c2973d28bcf08244&language=en-US&query=all&include_adult=false',
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
});