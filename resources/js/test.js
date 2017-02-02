$( function() {
    var projects = [
        {
            value: "jquery",
            label: "jQuery",
            desc: "the write less, do more, JavaScript library",
            icon: "jquery_32x32.png"
        },
        {
            value: "jquery-ui",
            label: "jQuery UI",
            desc: "the official user interface library for jQuery",
            icon: "jqueryui_32x32.png"
        },
        {
            value: "sizzlejs",
            label: "Sizzle JS",
            desc: "a pure-JavaScript CSS selector engine",
            icon: "sizzlejs_32x32.png"
        }
    ];

    $( "#project" ).autocomplete({
        minLength: 0,
        source: projects,
        focus: function( event, ui ) {
            $( "#project" ).val( ui.item.label );
            $( "#project-icon" ).attr( "src", "../resources/imgres.jpg");
            return false;
        },
        select: function( event, ui ) {
            $( "#project" ).val( ui.item.label );
            $( "#project-id" ).val( ui.item.value );
            $( "#project-description" ).html( ui.item.desc );
            $( "#project-icon" ).attr( "src", "images/" + ui.item.icon );

            return false;
        }
    })
        .autocomplete( "instance" )._renderItem = function( ul, item ) {
        return $( "<li>" )
            .append( "<div>" + item.label + "<br>" + item.desc + "</div>" )
            .append("<img src='../resources/img/mocks/imgres.jpg' height='225' width='225'/>")
            .appendTo( ul );
    };
} );