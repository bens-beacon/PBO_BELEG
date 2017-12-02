new Vue({
    el: '#app',
    data: {
        message: "hello world!" 
    },
    filters: 
    {
        uppercase: function(value) 
        {
            if (!value) 
            {
                return '';
            }
            var stringlist = value.toString().split();
            for (item in stringlist)
            {
                

            }
           // var string = a + value.toString();

            return string;
        }
    }
});




