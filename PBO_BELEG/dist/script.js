/* ---- VUE ------------------------------------------------------- */
new Vue(
{
    el: '#app',
    data: 
    {
        json_data: []
    },
    mounted(){                                  /* Do this on Start */
        var self = this;
        $.getJSON("../data/process.json", function(data) {
            self.json_data = data;
          });
    }



});
