new Vue({
    el: '#app',
    data: {
        text : "",
        text_1 : ""
    },
    methods: {
        keyUpHandler: function (event) {
            this.text = event.target.value;
            //console.log(event.target.value);
            },
        keyDoHandler: function (event) {
            this.text_1 = event.target.value;
            //console.log(event.target.value);
            },
        clickHandler: function (msg, event) {
            console.log(msg);
            }
    }
});