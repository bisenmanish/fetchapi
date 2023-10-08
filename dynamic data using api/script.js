function getApiData(){
    var table=document.createElement("table");
    var tr1= document.createElement("tr");
    var tr2= document.createElement("tr");
    var tr3= document.createElement("tr");
    var th1=document.createElement("th")
    var th2=document.createElement("th")
    var th3=document.createElement("th")
    th1.innerText="Name";
    th2.innerText="UserName";
    th3.innerText="Email";


    
 table.width="850px";
 table.frame="box";
 table.rules="all";
 table.cellPadding="15px"
 tr1.style.backgroundColor="black";
 tr1.style.color="white";
 table.style.margin="30px auto"; 
    
tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)

table.appendChild(tr1);



    // start fetch api 

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        return response.json();

    }).then(function(data){

         console.log(data);
        data.forEach(element => {
            
        

            var tr=document.createElement("tr");
            var td1=document.createElement("td");
            var td2=document.createElement("td");
            var td3=document.createElement("td");
            
            td1.innerText=element.name;
            td2.innerText=element.username
            td3.innerText=element.email
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.style.color="white";
            tr.align="center"
            table.appendChild(tr);
            
            
        });

    }).catch(function(error){

        console.log("something went wrong pls check url")
    })


    document.getElementById("body").appendChild(table);


}