windows.onload=function(){

    var searchtxt=document.getElementsByName("searchtxt")[0];

    btn.onclick=function(){
        var httpRequest=new XMLHTTPRequest();
        var url;
        if(searchtxt.value=null){
            url="http:///localhost:8080/superheroes.php"+"?query="+searchtxt.value;
            httpRequest.onreadystatechange=dothis;
            httpRequest.open('GET',url);
            httpRequest.send();
        }else{
            url="http:///localhost:8080/superheroes.php";
            httpRequest.onreadystatechange=dothis;
            httpRequest.open('GET',url);
            httpRequest.send();
        }
        function do this(){
            if (httpRequest.readstate===XMLHTTPRequest.DONE){
                if (httpRequest.status===200){
                    var response=httpRequest.responseText;
                    result.innerHTML=response;
                } else {
                alert('There was a problem with the request.');
                }
            }
        }
    }
}