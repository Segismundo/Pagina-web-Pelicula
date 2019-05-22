$( function() {
    var availableTags = [
        "Will Smith",
        "Bridget Moynahan",
        "Alan Tudyk",
        "James Cromwell",
        "Bruce Greenwood",
        "Adrian Ricard",
        "Chi McBride",
        "Shia LaBeouf",
        "Fiona Hogan"
    ];
    $( "#actor" ).autocomplete({
        source: availableTags
    });
} );
$( function() {
    var availableTags = [
      "Del Spooner",
      "Susan Calvin",
      "Sonny",
      "Lawrence Robertson",
      "Alfred Lanning",
      "John Bergin",
      "Farber",
      "VIKI",
      "Gigi"
    ];
    $( "#personaje" ).autocomplete({
      source: availableTags
    });
});
$( function() {
    $("#actor").keyup( function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            $("#BuscarActor").click();
        }
    });
    $("#personaje").keyup( function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            $("#BuscarPersonaje").click();
        }
    });
});
function BuscarActor(){
    switch($("#actor").val()) {
        case "Will Smith":
            $("#Will_Smith").show();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "Bridget Moynahan":
            $("#Will_Smith").hide();
            $("#Bridget").show();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "Alan Tudyk":
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").show();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "James Cromwell":
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").show();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "Bruce Greenwood":
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").show();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "Adrian Ricard":
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").show();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "Chi McBride":
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").show();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "Shia LaBeouf":
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").show();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "Fiona Hogan":
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").show();
            $("#Error").hide();
            $("#Reset").show();
            break;
        default:
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").show();
            $("#Reset").hide();
            break;
    }
    $("#actor").val("");
    $("#personaje").val("");
}
function BuscarPersonaje(){
    switch($("#personaje").val()) {
        case "Del Spooner":
            $("#Will_Smith").show();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "Susan Calvin":
            $("#Will_Smith").hide();
            $("#Bridget").show();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "Sonny":
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").show();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "Lawrence Robertson":
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").show();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "Alfred Lanning":
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").show();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "John Bergin":
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").show();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "Farber":
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").show();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "VIKI":
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").show();
            $("#Error").hide();
            $("#Reset").show();
            break;
        case "Gigi":
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").show();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").hide();
            $("#Reset").show();
            break;
        default:
            $("#Will_Smith").hide();
            $("#Bridget").hide();
            $("#Alan").hide();
            $("#James").hide();
            $("#Bruce").hide();
            $("#Adrian").hide();
            $("#Chi").hide();
            $("#Shia").hide();
            $("#Fiona").hide();
            $("#Error").show();
            $("#Reset").hide();
            break;
    }
    $("#actor").val("");
    $("#personaje").val("");
}
function Lista(){
    $("#Will_Smith").show();
    $("#Bridget").show();
    $("#Alan").show();
    $("#James").show();
    $("#Bruce").show();
    $("#Adrian").show();
    $("#Chi").show();
    $("#Shia").show();
    $("#Fiona").show();
    $("#Error").hide();
    $("#Reset").hide();
    $("#actor").val("");
    $("#personaje").val("");
}