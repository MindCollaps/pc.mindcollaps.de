document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function myFunction(div) {
    var content = document.getElementById("content");
    var imgText = document.getElementById("imgtext");
    imgText = div.alt;
    content.innerHTML = div.innerHTML;
    if (div.alt != "") {

    }
    content.parentElement.style.display = "block";
}

async function click() {
    if (getCookie('click') == 'true') {
        console.log("Welcome back!")
    } else {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ request: 1 })
        };
        const response = await fetch('/api/click', options);
        const json = await response.json();
        if (json.status != 200) {
            console.log("We had a problem with api!");
            return;
        }
        document.cookie = "click=true";
        console.log("Wellcome!");
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return undefined;
}