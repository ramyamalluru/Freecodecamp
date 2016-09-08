
    

$(document).ready(function() {
  //get current position latitude and longitude
  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

           var lat = position.coords.latitude;
           var lon = position.coords.longitude;
         var appid='0d830678e8403c96c870a7e2b7ba7c0d';

            var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid='+appid;
//get json loc object with API call 
            $.getJSON(url, function(loc) {
                
                 $("#desc").html(loc.weather[0].description); 
                  
               
              $("#place").html(loc.name+','+loc.sys.country);
              $("#sw").html("WindSpeed "+loc.wind.speed+"m/sec");
              $('#temp').html((loc.main.temp).toFixed()+" &#8451");
              var weather=loc.weather[0].description;
              var icons = new Skycons({"color": "salmon"});
              if(weather.indexOf("rain")>=0)
                {
                $('body').css("background-image","url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ2bGLeHgVx9MGrBgq_FrzkfgKJJh-QfXlKLYZyMKXRRplbZpM5A)");
              icons.set("ticon", Skycons.RAIN);
            }
               else if(weather.indexOf("cloud")>=0)
                {
                  
                $('body').css("background-image","url(http://morganingram.com/wordpress/wp-content/uploads/2012/11/clouds.jpg)");
                  
                  icons.set("ticon", Skycons.PARTLY_CLOUDY_DAY);
                    
                }
              
              else if(weather.indexOf("snow")>=0)
                {
                $('body').css("background-image","url(http://cdn.pcwallart.com/images/snowy-mountains-and-lake-wallpaper-1.jpg)");
              icons.set("ticon",Skycons.SNOW);
                }
              else if(weather.indexOf("clear sky")>=0)
                {
                $('body').css("background-image","url(http://cdn.pcwallart.com/images/lake-tahoe-beach-map-wallpaper-3.jpg)");
              icons.set("ticon",Skycons.CLEAR_DAY);
                }
              else if(weather.indexOf("sun")>=0)
                {
                $('body').css("background-image","url(http://www.youwall.com/wallpapers/201404/sunny-mountains-wallpaper.jpg)");
              icons.set("ticon",Skycons.CLEAR_DAY);
                }
              else if(weather.indexOf("wind")>=0)
                {
                $('body').css("background-image","url(http://7-themes.com/data_images/out/18/6830728-wind-wallpaper.jpg)");
              icons.set("ticon",Skycons.WIND);
                }
              icons.play();
             
              $("#tcheck").change(function() {
  
    var celsius = $("#tcheck").prop("checked");
                var temp;

              if (celsius) {
                    temp = (loc.main.temp).toFixed();
                 $('#temp').html(temp+" &#8451");
                
                
                } else {
                    temp = (loc.main.temp * (9 / 5) + 32).toFixed();
                  $('#temp').html(temp+' &#8457');
                }
              
               
                
              
     
            });
        });
    
});
  }
   
});


