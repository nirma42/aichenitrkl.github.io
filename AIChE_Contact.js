
            function form_submit(){

                if(window.XMLHttpRequest){
                    xmlhttp = new XMLHttpRequest();
                }else{
                    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
                }

                xmlhttp.onreadystatechange = function() {
                    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                        document.getElementById('message').innerHTML = xmlhttp.responseText;
                    }
                }

                parameter = 'firstname='+ window.encodeURIComponent(document.getElementById('firstname').value) + '&lastname='+ window.encodeURIComponent(document.getElementById('lastname').value) + '&email='+ window.encodeURIComponent(document.getElementById('email').value) + '&text='+window.encodeURIComponent(document.getElementById('text').value);

                xmlhttp.open('POST','subscribe.php', true);
                xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
                xmlhttp.send(parameter);

            }