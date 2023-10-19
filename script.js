(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            let after12 = false;
            

            if (h > 12) {
                h = h - 12;
                after12 = true;
            }

            if (m > 12) {
                m = m - 12;
            }

            if (s > 12) {
                s = s - 12;
            }

            if (h < 10) {
                h = "0" + h;
            }


            if (!after12) {
                c.innerHTML = h + ":" + m + ":" + s + "EL";
                return;
            }

            c.innerHTML = h + ":" + m + ":" + s + "PL";
        };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        
        let linn = document.getElementById("linn");
        let radiobox1 = document.getElementById("rb1");
        let radiobox2 = document.getElementById("rb2");
        let radiobox3 = document.getElementById("rb3");

        if (!radiobox1.checked && !radiobox2.checked && !radiobox3.checked) {
            alert("Vali paki suurus")
        }
        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus();
            
            return;
            
            
        } else if (linn.value === "tln") {
            e.innerHTML = "0€"
        }  else if (linn.value === "trt") {
            e.innerHTML = "2.5€"
        }  else if (linn.value === "nrv") {
            e.innerHTML = "2.5€"
        }  else if (linn.value === "prn") {
            e.innerHTML = "3€"
        } else {
            e.innerHTML = "x,xx &euro;";
        }        
        
        console.log("Tarne hind on arvutatud");
    }
    
})();

// map

let mapAPIKey = "AneyIb33MGNDVltOBjazTSxyWjnfeohgSULfzFssnpcwfSYhxHrsMyAKjWYEf49O";

let map;

function GetMap() {
    
    "use strict";

    let centerPoint = new Microsoft.Maps.Location(
            58.38104, 
            26.71992
        );

    let tluPunkt = new Microsoft.Maps.Location(
            59.438610,
            24.771390
    )

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 6.5,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
    
    let pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
            title: 'Tartu Ülikool'
        });

    let pushpin2 = new Microsoft.Maps.Pushpin(tluPunkt, {
            title: 'Tallinna Ülikool'
        });

    map.entities.push(pushpin);
    map.entities.push(pushpin2);

}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

