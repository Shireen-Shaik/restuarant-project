$(function(){
      $("#navbarToggle").blur(function(event){
        var screenWidth=window.innerWidth;
        if(screenWidth<786){
            $("#collapsable-nav").collapse('hide');
        }
    });
});

(function (global){
    var dc={};
    var homeHtml="snippets/home-snippets.html";
    //convienience function for inserting innerHTML for 'select'
    var innerHtml=function(selector,html){
        var targetElem=document.querySelector(selector);
        targetElem.innerHTML=html;
    };
    //show loading icon inside element identification by 'selector'
    var showLoading=function(slecetor){
        var html="<div class='text-center'>";
        html+="<img src='Spinner-3.gif'></div>";
        innerHtml(selector,html);
    }
    document.addEventListener("DOMContentLoaded",function(event){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function (responseText){
                document.querySelector("#main-content").innerHTML=responseText;
            },
            false
        );
    });
    global;$dc=dc;
}) (window)