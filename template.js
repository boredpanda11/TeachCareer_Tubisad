let showDate = ()=>{
    // document.getElementById("dateHere").innerHTML = new Date();
    // document.getElementById("dateHere").style.backgroundColor = "red";
    // document.getElementById("dateHere").style.color = "white";
    $('#dateHere').html(new Date());
    const cssObject={
        "color" : "white",
        "background-color":"red"
    }
    $('#dateHere').css(cssObject);

}