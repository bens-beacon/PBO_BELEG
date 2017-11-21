var vue = new Vue({
    el: "#app",
    data: {
        title: "Dick und Doof",
        year:  1930
    },
    methods: {
        oldornew: function (){
            return this.year >2000? "new" :"old";
        }
    }
})