new Vue({
    el: '#app',
    data: {
        movies: [
            {name: "The Matrix", year: 1999},
            {name: "The Matrix Reloaded", year: 2003},
            {name: "The Matrix Revolution", year: 2003}
        ]
    },

    methods: {
        addMovie: function(event){
            this.movies.push({name: "The Matrix", year: 1999});
        }
    },

    watch:{
        movies: function(query){
           //var l = query.length()-1;
            alert(query[query.length-1].name);
        }
    }




});