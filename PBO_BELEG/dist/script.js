/* ---- VUE ------------------------------------------------------- */
new Vue(
{
    el: '#app',
    data: 
    {
        child_num:0,
        locat_num:0,
        stake_num:0,
        json_data: {system:[] , process:[]}
    },
    mounted(){                                  /* Do this on Start */
        var self = this;
        $.getJSON("../data/process.json", function(data) {
            self.json_data = data;
            
          });
          child_num = 12;

    }

    


    //$("#content").hide().show("slide", { direction: "left" }, 1500);

});


/* ---- JAVA ------------------------------------------------------ */

$( document ).ready(function() {
    $("#circle_1").circliful({
        animationStep: 10,
        foregroundBorderWidth: 8,
        backgroundBorderWidth: 14,
        backgroundColor: "none",
        fontColor: "black",
        percent: 75
    });
    $("#circle_2").circliful({
        animationStep: 10,
        foregroundBorderWidth: 8,
        backgroundBorderWidth: 14,
        backgroundColor: "none",
        fontColor: "black",
        percent: 75
    });
    $("#circle_3").circliful({
        animationStep: 10,
        foregroundBorderWidth: 8,
        backgroundBorderWidth: 14,
        backgroundColor: "none",
        fontColor: "black",
        percent: 75
    });
        });  