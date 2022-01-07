function changeMap(response, i) {
    var gMap = document.getElementById("gmap");
    var gMap2 = document.getElementById("gmap2");
    var gMap3 = document.getElementById("gmap3");
    var location_adr = response[i].address;
    var location_lat = response[i].latitude;
    location_lat =  Math.round(location_lat * 1000) / 1000
    var location_lng = response[i].longitude;
    location_lng =  Math.round(location_lng * 1000) / 1000
    gMap.src = `https://www.google.com/maps/embed/v1/place?q=${location_adr}&key=<API_key>`;
    gMap2.src = `https://www.google.com/maps/embed/v1/directions?origin=place_id:ChIJRVcadg0W2jERQLUnN_6QBCw&destination=${location_adr}&key=<API_key>`
    gMap3.src = `https://www.google.com/maps/embed/v1/streetview?location=${location_lat}%2C${location_lng}&key=<API_key>`
}

function parseData(i) {
    var url = `http://localhost:<port>/displaylocations`;
    $.ajax({
        type: `GET`,
        url: url,
        success: function(response) {
            changeMap(response, i);
        }
    });
}

function displayOnMap(address) {
    console.log(address);
    parseData(address);
}

function appendList(data) {
    var mainContainer = document.getElementById("myData");
    // data.forEach(e => {
    //     var div = document.createElement("div");
    //     var address = "123456";
    //     div.innerHTML = `<span onclick="displayOnMap((${address}))"> Address: ${e['address']}</span>`;
    //     mainContainer.appendChild(div);
    // });
    for (var i = 0; i < data.length; i++) {
         var div = document.createElement("div");
         div.innerHTML = `<span onclick="displayOnMap((${i}))"> Address: ${data[i].address}</span>`;
         mainContainer.appendChild(div);
    }
}
