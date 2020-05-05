            
            alert("HIIII.. WELCOME TO REACTION TESTER");
            alert("click on the shapes appearing on screen instantly to check your reaction time");
            
            function random_color()
            {
                var rc = '#' + Math.floor(Math.random()*16777215).toString(16);
                return rc;
            }
            
            function random_shape()
            {
                var x = Math.floor(Math.random()*21);
                if(x%2 == 0)
                    {
                        var c = "50%";
                        return c;
                    }
                else
                    {
                        var d = "0%";
                        return d;
                    }
            }
            
            function random_size()
            {
                while(1)
                {
                    var x = Math.floor(Math.random() * 11);
                    if(x > 5)
                    {
                        var y =  x * 25 + 'px';
                        return y;
                
                    }
                    
                    
                }
            }
            
            function random_lpos()
            {
            
                var x = Math.floor(Math.random() * 1000);
                var y =  x  + 'px';
                return y;    
                
            }
            
            function random_tpos()
            {
            
                var x = Math.floor(Math.random() * 250);
                var y =  x  + 'px';
                return y;    
                
            }
            
            var myVar;

            function start()
            {
                myVar = setInterval(game, 2500);
            }
            
            function stop()
            {
                clearInterval(myVar);
            }
            
            
            function game()
            {
                                
                document.getElementById("color").style.width = document.getElementById("color").style.height = random_size();
            
                document.getElementById("color").style.backgroundColor = random_color();
            
                document.getElementById("color").style.borderRadius = random_shape();
            
                document.getElementById("color").style.marginLeft = random_lpos();
            
                document.getElementById("color").style.marginTop = random_tpos();
                
                document.getElementById("color").style.display = "block";
                
                var start = new Date().getTime();

                
                document.getElementById("color").onclick = function ()
                {
                    document.getElementById("color").style.display = "none";
                
                    var end = new Date().getTime();
                
                    var timetaken = (end - start) / 1000; 
                                
                    document.getElementById("timeTaken").innerHTML = timetaken + 's';
                                    
                }
                
            }
       
        
        