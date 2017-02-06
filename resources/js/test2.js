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

        open: function (event, ui) {
           //

           /* $(".item_result").find("li").removeClass();
            $(".item_result").find("ul").removeClass();
            $(".item_result").find("ul")[0].style.display="block";
            var test = $(".item_result").find("ul");
            $("#ul_slider")[0].className="bxslider";
            startBxSilder();
            //document.getElementById("testxxx").className="bxslider2";
            //$('.bxslider2').bxSlider();
*/
        }

    });
    /*
    $("#project").autocomplete("instance")._renderItem = function (ul, item) {

        return $("<li style='border-bottom-color: #1d1e1f;height: 215px'>")
            .append(item.value)
            .appendTo(ul);

    };
*/
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

function getSearchTemplate2() {

    var html = `
    
    <div style="width: 210px;height: 297px; float:left">
    
    <img src="../resources/img/mocks/1.PNG" width="210" height="297"/>  
    <img src="../resources/img/mocks/2.PNG" width="210" height="297"/>
    <img src="../resources/img/mocks/3.PNG" width="210" height="297"/>
    
    </div>


`;

    return html;

}


function getSearchTemplate() {

    var html = `

    <div class="item_result" style="width: 210px;height: 297px; float:left">
    <ul id="ul_slider" class="bxslider">
    <li><img src="../resources/img/mocks/1.PNG" width="210" height="297"/></li>    
    <li><img src="../resources/img/mocks/2.PNG" width="210" height="297"/></li>
    <li><img src="../resources/img/mocks/3.PNG" width="210" height="297"/></li>
    </ul>
    </div>



`;

    return html;
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
        captions: true,
        adaptiveHeight: false,
        touchEnabled: true,
        pause: 1000,
        autoControls: false,
        controls: false,
        autoStart: true,
        auto: true
    });
}




