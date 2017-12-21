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
        mounted(){                          /* Do this on Start         */
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
        methods: {                          /* functions                */
            SortName: function(){           /* sort by name             */
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
            GetConnection: function(id){    /* Not in Use               */
                var tmp = this.json_data.process.childs;  
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
            GetParticipation: function(participation,id){
                return participation;
            },                               /* Convert Time            */
            GetTime: function(time){
                if (time==null) return "";
                var string=time.split("T");
                var date = string[0];
                string = string[1].split("+");
                var time = string[0];
                return time + " " + date;
            },
            GetMembers: function(tmp_part){ /* Get alle Members return */
                var tmp_stak = this.json_data.process.stakeholder; 
                var str = "";
                var c = 0;
                for (var i in tmp_part){
                    for (var j in tmp_stak){
                        if(tmp_part[i] == tmp_stak[j].id){
                            if(c != 0) str+= ", ";      
                            str += tmp_stak[j].name;
                            c++;
                        }
                    }
                }
                return str;
            },
            GetConnections: function(tmp_part){ /* Get Connecti return  */
                var tmp_stak = this.json_data.process.childs; 
                var str = "";
                var c = 0;
                for (var i in tmp_part){
                    for (var j in tmp_stak){
                        if(tmp_part[i] == tmp_stak[j].id){
                            if(c != 0) str+= ", ";      
                            str += tmp_stak[j].name;
                            c++;
                        }
                    }
                }
                return str;
            },            
            SetRadius: function(){

            },                              /* Toogle Show all Cards    */
            KlappAllOut: function(){           
                var elements = document.getElementsByClassName("mem");
                for (var i = 0, len = elements.length; i < len; i++) {
                    if (elements[i].style.display === "block") {
                        elements[i].style.display = "none";
                    } else {
                        elements[i].style.display = "block";
                    }  
                }   
            },
            KlappOut: function(id){         /* Toogle Show Card         */        
                var x = document.getElementById(id);
                if (x.style.display === "block") {
                    x.style.display = "none";
                } else {
                    x.style.display = "block";
                }
            },                             /* return Color              */
            SetColorParti: function(state){
                switch(state) {
                    case "closed":
                        return "bg-danger";
                    case "partial opened":
                        return "bg-warning"
                    case "open":
                        return "bg-success"
                    default: 
                        return "";
                }      
            }
        },  
        computed:{                          /* supervise vars           */
            
        
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