function test() {
    setTimeout(() => console.log("1"), 0);
    console.log("2");
    console.log("3");
}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}
// Gọi đến ảnh 1
httpGetAsync("https://picsum.photos/200/300", (data) => {
    console.log(data);
    document.getElementById("img_1").setAttribute("src", data.responseURL);
    // Gọi ảnh 2
    httpGetAsync("https://picsum.photos/200/300", (data) => {
        document.getElementById("img_2").setAttribute("src", data.responseURL);
        // Gọi ảnh 3
        httpGetAsync("https://picsum.photos/200/300", (data) => {
            document
                .getElementById("img_3")
                .setAttribute("src", data.responseURL);
        });
    });
});
