/* 
 * Author: Andres Pi
 * Date: 21/02/12
 * Web: http://www.dreamsiteweb.com
*/

var corners = $('#cont-border-generator .txt');
var styleSample = $('#style-sample');
var styleBoard = $('#style-board');
var filters = $('.filter input');

//reset on load
corners.attr('value','');


function updateBoard(values){
    var setupValues;
    var measure = $("input[name='measure']:checked").val();
    if(values[0] == values[1] && values[0] == values[2] && values[0] == values[3] && values[0] == values[4] && values[0] == values[5] && values[0] == values[6] && values[0] == values[7]){
        setupValues = values[0] + measure;
    }else{
        values[4] = '/ ' + values[4];
        setupValues = values.join(measure + ' ') + measure;
    }
    var browsers = $("input[name='browsers']:checked");
    var styleBoardText = 'border-radius:' + setupValues  + ';\n';
    if(values){
        for(i=0;i<browsers.length;i++){
            styleBoardText += '-' + $("input[name='browsers']:checked")[i].value + '-border-radius:' + setupValues + ';\n';
        }
        styleBoard.text(styleBoardText);
        styleSample.attr('style',styleBoardText);
    }

}

function getValues(){
    var values = [];
    corners.each(function(i) {
        var itemValue = $(this).attr('value');
        if(itemValue){
            values[i] = itemValue;
        }else{
            values[i] = $(this).attr('placeholder');
        }
    })
    return values;
}

filters.bind('change', function(){
    updateBoard(getValues());
})

corners.each(function() {
    //Allow only numbers
    $(this).bind('keypress', function(e){
        var code = e.charCode ? e.charCode : e.keyCode;
        if (! e.shiftKey && ! e.ctrlKey && ! e.altKey && ! e.metaKey && code != 46 && (code > 31 && (code < 48 || code > 57))) return false;
        return true; 
    })
        
    $(this).bind('keyup', function(){        
        updateBoard(getValues());
    })
      
})


