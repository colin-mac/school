var doc=document.getElementById("map");
    
function getLocation()
    {
        if (navigator.geolocation)
        {
        navigator.geolocation.getCurrentPosition(showPosition);
        }
    }

    function showPosition(position)
    {
        var latlon=position.coords.latitude+","+position.coords.longitude;

        var img_url="http://maps.googleapis.com/maps/api/staticmap?center="
        +latlon+"&zoom=14&size=200x150&sensor=false";
        document.getElementById("map").innerHTML="<img src='"+img_url+"'>";
        return img_url;
    }
    
