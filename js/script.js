// loader starts
var myVar;

function myFunction() {
    setTimeout(function showPage() {
      $("#loader").hide();
      $("#myDiv").show();
    }, 1000);
}

// loader ends

//app starts

var app = angular.module('shop',[]);
angular.element(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


//tooltip directive

app.directive('mytooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});
