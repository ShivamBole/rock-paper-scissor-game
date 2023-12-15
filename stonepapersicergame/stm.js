let arr = ["g", "w", "s"];
    let a = Math.floor(Math.random() * arr.length);
    console.log(a)
    let assum = arr[a];
    function play(e) {
        // console.log(e);
        let comp=document.getElementById(assum);
        // console.log(comp)
        document.getElementsByClassName("container")[0].style.display="none";
        document.getElementsByClassName("container2")[0].style.display="block";
     let page2=document.getElementsByClassName("second-block")[0];
    //  console.log(page2);
   page2.append(e);  
  let  war=page2.firstElementChild.id;
  
    if (assum == war) {  
        console.log("sytem:" + assum + " you:" + war);
      let divaa=document.createElement("div");
        divaa.className="result";
        divaa.innerHTML=`<h1>Match Tied !</h1>`;
        page2.append(divaa);
    } else {
        if (assum == "g" && war == "w" || (assum == "w" && war == "s") || (assum == "s" && war == "g")) {
            console.log("sytem:" + assum + " you:" + war);
             let divaaa=document.createElement("div");
            divaaa.className="result"
             divaaa.innerHTML=` <h1>Computer Win <i class="fa-solid fa-thumbs-Down"></i></h1>
             `
                    page2.append(divaaa);
            //"Match win by you"
        } else {
            if (assum == "w" && war == "g"|| assum == "s" && war == "w" || assum == "g" && war == "s") {
                console.log("sytem:" + assum + " you:" + war);
                let diva=document.createElement("div");
                diva.className="result"
                 diva.innerHTML=` <h1>You Win <i class="fa-solid fa-thumbs-up"></i></h1>
                 <img
                   src="image/Microsoft-Fluentui-Emoji-3d-Party-Popper-3d.512.png"
                   alt=""
                 />`
                page2.append(diva);
                //"Match win by system"
                 }
         }
    }
    page2.append(comp); 
    }

    function repeat(){
     location.reload();
    }