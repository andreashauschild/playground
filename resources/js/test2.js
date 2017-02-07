$(function () {
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

    $("#project").autocomplete({
        minLength: 0,
        source: projects,
        focus: function (event, ui) {
            $("#project").val(ui.item.label);
            $("#project-icon").attr("src", "../resources/imgres.jpg");

            return false;
        },

        select: function (event, ui) {
            $("#project").val(ui.item.label);
            $("#project-id").val(ui.item.value);
            $("#project-description").html(ui.item.desc);
            $("#project-icon").attr("src", "images/" + ui.item.icon);

            return false;
        },

        focus: function( event, ui ) {
          console.log(ui.id);
        },

        open: function (event, ui) {
           //

            removeAllClasses();
            restyleResult();
            startBxSilder();
            console.log('tesat');

        }

    });
    /*
    $("#project").autocomplete("instance")._renderItem = function (ul, item) {

        return $("<li style='border-bottom-color: #1d1e1f;height: 215px'>")
            .append(item.value)
            .appendTo(ul);

    };
*/

    $("#project").autocomplete("instance")._renderItem = function (ul, item) {
        var outerDiv =  $("<div>");
        var innerDiv = $("<div>").addClass("innerDiv").html(getSearchTemplate());
        outerDiv.append(innerDiv);
        return $("<li>")
            .append(outerDiv)
            .appendTo(ul);

    };

    /*
    $("#project").autocomplete("instance")._resizeMenu = function () {
        this.menu.element.outerWidth(500);
        this.menu.element.outerHeight(500);

        //
    };*/
/*
    $("#project").autocomplete("instance")._renderMenu = function (ul,item) {
        var that = this;
        $("<li style='border-bottom-color: #1d1e1f;height: 215px'>")
            .append(item.desc)
            .appendTo(ul);
        $("#result").html(getSearchTemplate());
        $("#result").find("ul").className="bxslider";
        startBxSilder();
    };
*/

});


function getSearchTemplate(id) {
    if(id === undefined){
        return $('#searchContainterTemplate').html();
    }else{
        return $(id).html();
    }

}

function removeAllClasses(){
    $(".innerDiv ul").removeAttr("style");
    $(".innerDiv").find("*").removeClass();
}

function restyleResult(){
    $( "div[id^='searchResultContainer']" ).addClass("searchContainer");
    $( "form[id^='resultForm']" ).addClass("vertical");
    $(".innerDiv ul").addClass("bxslider");
}


function startBxSilder(){
    $('.bxslider').bxSlider({
        mode: 'horizontal', // 'horizontal', 'vertical', 'fade'
        video: true,
        useCSS: true,
        pager: true,
        speed: 500, // transition time
        startSlide: 0,
        infiniteLoop: true,
        captions: false,
        adaptiveHeight: false,
        touchEnabled: false,
        pause: 1000,
        autoControls: false,
        controls: false,
        autoStart: true,
        pager: false,
        auto: true
    });
}




