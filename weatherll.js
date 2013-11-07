function getWeatherll()
{
    var doc = new XMLHttpRequest();
    doc.onreadystatechange = function() {
        if (doc.readyState == XMLHttpRequest.DONE) {
            var jsonObject1 = eval('(' + doc.responseText + ')');
            loadWeatherll(jsonObject1);
        }
    }
    console.log("In Weather Function");
    doc.open("GET", "http://free.worldweatheronline.com/feed/weather.ashx?q=" + "Chicago" + "&format=json&num_of_days=1&key=80b4744b8c193111130202");
    doc.send();
}

function loadWeatherll(jsonObject) {

    weathtempll.text = jsonObject.data.current_condition[0].temp_F;
    weathdescll.text = jsonObject.data.current_condition[0].weatherDesc[0].value;
    var weatherCodell = jsonObject.data.current_condition[0].weatherCode;
    getWeatherBgll(weatherCodell);

 }

function getWeatherBgll(weatherCodell)
{
        if(weatherCodell == '395')
            weathiconll.source = "png/weeble_sun_and_snow.png";
        else if(weatherCodell == '392')
            weathiconll.source = "png/weezle_sun_thunder_rain.png";
        else if(weatherCodell == '389')
            weathiconll.source = "png/weezle_cloud_thunder_rain.png";
        else if(weatherCodell == '386')
            weathiconll.source = "png/weezle_sun_thunder_rain.png";
        else if(weatherCodell == '377')
            weathiconll.source = "png/weezle_sun_flurrie.png";
        else if(weatherCodell == '374')
            weathiconll.source = "png/weezle_sun_and_snow.png";
        else if(weatherCodell == '371')
            weathiconll.source = "png/weezle_sun_medium_snow.png";
        else if(weatherCodell == '368')
            weathiconll.source = "png/weezle_sun_flurrie.png";
        else if(weatherCodell == '365')
            weathiconll.source = "png/weezle_sun_flurrie.png";
        else if(weatherCodell == '362')
            weathiconll.source = "png/weezle_sun_flurrie.png";
        else if(weatherCodell == '359')
            weathiconll.source = "png/weezle_rain_and_snow.png";
        else if(weatherCodell == '356')
            weathiconll.source = "png/weezle_rain.png";
        else if(weatherCodell == '353')
            weathiconll.source = "png/weezle_light_rain.png";
        else if(weatherCodell == '350')
            weathiconll.source = "png/weezle_sun_medium_ice.png";
        else if(weatherCodell == '338')
            weathiconll.source = "png/weezle_sun_and_snow.png";
        else if(weatherCodell == '335')
            weathiconll.source = "png/weezle_sun_and_snow.png";
        else if(weatherCodell == '332')
            weathiconll.source = "png/weezle_sun_medium_snow.png";
        else if(weatherCodell == '329')
            weathiconll.source = "png/weezle_sun_medium_snow.png";
        else if(weatherCodell == '326')
            weathiconll.source = "png/weezle_sun_flurrie.png";
        else if(weatherCodell == '323')
            weathiconll.source = "png/weezle_sun_flurrie.png";
        else if(weatherCodell == '320')
            weathiconll.source = "png/weezle_sun_flurrie.png";
        else if(weatherCodell == '317')
            weathiconll.source = "png/weezle_sun_flurrie.png";
        else if(weatherCodell == '314')
            weathiconll.source = "png/weezle_sun_flurrie.png";
        else if(weatherCodell == '311')
            weathiconll.source = "png/weezle_sun_flurrie.png";
        else if(weatherCodell == '308')
            weathiconll.source = "png/weezle_rain.png";
        else if(weatherCodell == '305')
            weathiconll.source = "png/weezle_rain.png";
        else if(weatherCodell == '302')
            weathiconll.source = "png/weezle_medium_rain.png";
        else if(weatherCodell == '299')
            weathiconll.source = "png/weezle_medium_rain.png";
        else if(weatherCodell == '296')
            weathiconll.source = "png/weezle_medium_rain.png";
        else if(weatherCodell == '293')
            weathiconll.source = "png/weezle_medium_rain.png";
        else if(weatherCodell == '284')
            weathiconll.source = "png/weezle_sun_flurrie.png";
        else if(weatherCodell == '281')
            weathiconll.source = "png/weezle_sun_flurrie.png";
        else if(weatherCodell == '266')
            weathiconll.source = "png/weezle_medium_ice.png";
        else if(weatherCodell == '263')
            weathiconll.source = "png/weezle_medium_ice.png";
        else if(weatherCodell == '260')
            weathiconll.source = "png/weezle_sun_medium_snow.png";
        else if(weatherCodell == '248')
            weathiconll.source = "png/weezle_sun_medium_snow.png";
        else if(weatherCodell == '230')
            weathiconll.source = "png/weezle_sun_medium_snow.png";
        else if(weatherCodell == '227')
            weathiconll.source = "png/weezle_sun_medium_snow.png"
        else if(weatherCodell == '200')
            weathiconll.source = "png/weezle_cloud_thunder_rain.png"
        else if(weatherCodell == '185')
            weathiconll.source = "png/weezle_sun_flurrie.png"
        else if(weatherCodell == '182')
            weathiconll.source = "png/weezle_sun_flurrie.png"
        else if(weatherCodell == '179')
            weathiconll.source = "png/weezle_sun_and_snow.png"
        else if(weatherCodell == '176')
            weathiconll.source = "png/weezle_medium_rain.png"
        else if(weatherCodell == '143')
            weathiconll.source = "png/weezle_fog.png"
        else if(weatherCodell == '122')
            weathiconll.source = "png/weezle_overcast.png"
        else if(weatherCodell == '119')
            weathiconll.source = "png/weezle_cloud.png"
        else if(weatherCodell == '116')
            weathiconll.source = "png/weezle_sun_minimal_clouds.png"
        else if(weatherCodell == '113')
            weathiconll.source = "png/weezle_sun.png"

}
