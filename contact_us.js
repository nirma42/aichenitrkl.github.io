function openNav() {
    $("#open").css({
        "visibility":"hidden",
    });
    document.getElementById("menu").style.width = "100%";
}
function closeNav() {
    document.getElementById("menu").style.width = "0";
    $("#open").css({
        "visibility":"visible",
    });
}

function show_hide() {
    var click = document.getElementById("drop_content");
    if (click.style.display === "none") {
        click.style.display = "block";
    }else{
        click.style.display = "none";
    }
}