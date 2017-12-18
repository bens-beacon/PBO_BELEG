    /* ---- JAVA ------------------------------------------------------ */
    function JsonCount(myObject) 
    {
        return Object.keys(myObject).length;
    }


    /* Sort-Function */
    var sort_by = function(field, reverse, primer)
    {
        var key = primer ? function(x) {return primer(x[field])} : function(x) {return x[field]};
        reverse = !reverse ? 1 : -1;
        
        return function (a, b) 
        {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        } 
    }

    
     


    /* ---- VUE ------------------------------------------------------- */
    new Vue(
    {
        el: '#app',
        data: 
        {
            child_num:0,
            locat_num:0,
            stake_num:0,
            state: false,
            json_data: {system:[] , process:[]},
            json_tmp: {}
        },
        mounted(){                                  /* Do this on Start */
            var self = this;
            $.getJSON("../data/process.json", function(data) {
                self.json_data = data;
                self.json_tmp  = self.json_data.process.childs;
                self.child_num = JsonCount(self.json_data.process.childs);
                self.locat_num = JsonCount(self.json_data.process.locations);
                self.stake_num = JsonCount(self.json_data.process.stakeholder);
                //alert(JsonCount(self.json_data.process.childs));
            });

            
        }, 
        methods: {                                  /* functions        */
            SortName: function(){                   /* sort by name     */
                this.state = ~this.state; 
                this.json_tmp = this.json_tmp.sort(sort_by('name',this.state,function(a){return a.toUpperCase()}));
                //homes.sort(sort_by('price', true, parseInt));
            },
            SortInitiator: function(){
                //alert(JsonCount(this.json_data.process.childs));
                this.json_tmp = this.json_tmp.sort(sort_by('initiator',true,this.GetInitiator(a)));
            },
            GetInitiator: function(id){
                var tmp = this.json_data.process.stakeholder;  
                //console.log(tmp[index].id);
                for (var index in tmp){
                    if(id == tmp[index].id) return tmp[index].name;
                }
            },
            GetLocation: function(id){
                var tmp = this.json_data.process.locations;  
                for (var index in tmp){
                    if(id == tmp[index].id) return tmp[index].city;
                    
                }
            },
            GetTime: function(time){
                var string=time.split("T");
                var date = string[0];
                string = string[1].split("+");
                var time = string[0];
                return time + " " + date;
            },
            SetRadius: function(){

            },
            KlappOut: function(id){                 /* Show / Hide      */
                var x = document.getElementById(id);
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
            }
        },  
        computed:{                                  /* supervise vars   */
            
        
        }
    });




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
            percent: 90
        });
        $("#circle_3").circliful({
            animationStep: 10,
            foregroundBorderWidth: 8,
            backgroundBorderWidth: 14,
            backgroundColor: "none",
            fontColor: "black",
            percent: 10
        });
    });  