var minRange = 1940, 
    maxRange = 1990,
    director,
    map,
    layer,
    table = "1x8noYJ9JEr0g3ObbFG03cT9VbsRgAVpcyqbqS8k";
    
function initialize() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: new google.maps.LatLng(37.78217505967539, -122.41824985581053),
        zoom: 13,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },        
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP
        },
//        mapTypeControl: true,
//        mapTypeControlOptions: {
//          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
//        },
        scaleControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    layer = new google.maps.FusionTablesLayer({
        query: {
            select: "location", // aka col2
            from: "1x8noYJ9JEr0g3ObbFG03cT9VbsRgAVpcyqbqS8k",
            where: "col1>="+minRange+" and col1<="+maxRange
        },
        map: map,
        styleId: 5,
        templateId: 4
    });
}