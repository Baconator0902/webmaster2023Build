console.log("there1");
function addFooter() {
    console.log('there');
    footer = document.createElement("div");
        footer.id = "footer";

    footerList = document.createElement("ul");
        footerList.id = "footerList";
    
    footerItem1 = document.createElement("li");
        footerItem1.innerHTML = "Copyright 2023";

    footerItem2 = document.createElement("li");
        footerItem1.innerHTML = "FAQ";
        
    footerItem3 = document.createElement("li");
        footerItem1.innerHTML = "References";
}