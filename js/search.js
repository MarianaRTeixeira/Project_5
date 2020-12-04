function myFunction() {

    var input;
    
    input = document.getElementById("myInput");

    filter = input.value.toUpperCase();
    caption = document.getElementById("data-caption");
    li = ul.getElementsByTagName("data-caption"); //change
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}