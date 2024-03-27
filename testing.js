function Testing(){      
            const getSelectedValue = document.querySelector(   
                'input[name="test"]:checked');   
                
            if(getSelectedValue=="1") {   
                document.getElementById("1").style.display="";
                document.getElementById("2").style.display="none";
                document.getElementById("3").style.display="none";  
            
        }    }