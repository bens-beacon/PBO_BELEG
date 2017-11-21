new Vue({
    el: '#app',
    data: {
        password: '',
        length:0,
        categories: [
            {name: 'JavaScript', sub: ['Vue.js', 'React', 'Angular2']},
            {name: 'Databases', sub: ['MySQL', 'PostgreSQL', 'MariaDB']},
            {name: 'Operating Systems', sub:['macOS','Linux', 'Windows']}
        ]
    },
    methods: {
        passlength: function(event){
            this.length = event.target.value.length;
            return length;
            //console.log(this.password);
        }

    }   

});