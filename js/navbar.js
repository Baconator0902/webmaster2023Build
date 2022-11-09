console.log("here1");
function addNav(page) {
    console.log('here');
    navBar = document.createElement("nav");
        navBar.id = "navbar";

    navUl = document.createElement("ul");
        navBar.appendChild(navUl);
    companyTitle = document.createElement("li");
        companyTitle.innerHTML = "Magnanimous Enterprises";
        navUl.appendChild(companyTitle);
    
    navItem2 = document.createElement("li");
        
        navUl.appendChild(navItem2);
    link1 = document.createElement("a");
        link1.href = "#";
        link1.innerHTML = "Landing";
        navItem2.appendChild(link1);

    hidden1 = document.createElement("ul");
        hidden1.className = "hiddenNav";
        hidden1.id = "hiddenNav1";
        navItem2.appendChild(hidden1);
        hidden1li1 = document.createElement("li");
            hidden1li1.innerHTML = "Test1";
            hidden1.appendChild(hidden1li1);
        hidden1li2 = document.createElement("li");
            hidden1li2.innerHTML = "Test2";
            hidden1.appendChild(hidden1li2);
        hidden1li3 = document.createElement("li");
            hidden1li3.innerHTML = "Test3";
            hidden1.appendChild(hidden1li3);

    navItem2.onmouseover = showNav("1");
    navItem2.onmouseleave = hideNav("1");

    navItem3 = document.createElement("li");
        
        navUl.appendChild(navItem3);
    link2 = document.createElement("a");
        link2.href = "#";
        link2.innerHTML = "Landing";
        navItem3.appendChild(link2);

    hidden2 = document.createElement("ul");
        hidden2.className = "hiddenNav";
        hidden2.id = "hiddenNav2";
        navItem3.appendChild(hidden2);
        hidden2li1 = document.createElement("li");
            hidden2li1.innerHTML = "Test1";
            hidden2.appendChild(hidden2li1);
        hidden2li2 = document.createElement("li");
            hidden2li2.innerHTML = "Test2";
            hidden2.appendChild(hidden1li2);
        hidden2li3 = document.createElement("li");
            hidden2li3.innerHTML = "Test3";
            hidden2.appendChild(hidden2li3);

    navItem3.onmouseover = showNav("2");
    navItem3.onmouseleave = hideNav("2");
}

function showNav(id) {
    console.log(navItem2);
    console.log(hidden1);
    container = document.getElementById("hiddenNav1");
    console.log(container);
    container.style.display = "block";
}


function  hideNav(id) {
    container = document.getElementById("hiddenNav-" + id);
    container.style.display = "none";
}