
    var icons = {
                  "clear-day":"B",
                  "clear-night":"C",
                  "rain":"R",
                  "snow":"G",
                  "sleet":"X",
                  "wind":"S",
                  "fog":"N",
                  "cloudy":"Y",
                  "partly-cloudy-day":"H",
                  "partly-cloudy-night":"I"
        };

    var cities =  {
              "Stockholm" :{ coords :{lat:59.33258, lng:18.0649 }},
              "Malmö" :{ coords :{lat:55.60587, lng:13.00073 }},
              "Göteborg" :{ coords :{lat:57.70716, lng:11.96679 }},
              "Uppsala" :{ coords :{lat:59.85882, lng:17.63889}},
              "Kiruna" :{ coords :{lat:67.85432, lng:20.22689 }},
              "Jönköping" :{ coords :{lat:57.78145, lng:14.15618 }},
              "current location": ""

    };


    function loadWeather(cityCoords){
        console.log(cityCoords);
      var latlng = cityCoords.coords.lat + "," + cityCoords.coords.lng;
      var forecastURL= "https://api.forecast.io/forecast/d1ebc8a2e7a63dccfb82e728d6ca2769/" + latlng + "?units=si&lang=sv";

      $.ajax({
         url: forecastURL,
         jsonpCallback: "jsonCallback",
         contentType: "application/json",
         datatype: "jsonp",
         success: function(json){
           console.log(json);
           $("#current_temp").html(json.currently.temperature+"&#8451;");
           $("#current_summary").html(json.currently.summary);
           $("#current_temp").attr("data_icon",icons[json.currently.icon]);
         },
         error:function(e){
           console.log(e.message);
         },

      });
    }
       function loadCity(city){
          $("#location").html(city);
          if (city.toLowerCase() == "current location"){
            if ( navigator.geolocation)
                navigator.geolocation.getCurrentPosition(loadWeather,loadDefaultCity);
                else{
                  loadDefaultCity();
                }
        } else{
          loadWeather(cities[city]);
        }
       }

     function loadDefaultCity(){
       loadCity("Stockholm");
     }

      $(document).ready(function(){
             loadCity("Stockholm");

             $("a.city").bind("click",function(){
               loadCity($(this).html());
             });
      });



      function openNav() {
          document.getElementById("mySidenav").style.width = "250px";
      }

      function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
      }

