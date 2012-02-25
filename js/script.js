/* 
 * Author: Andres Pi
 * Date: 21/02/12
 * Web: http://www.dreamsiteweb.com
*/

var corners = $('#cont-border-generator .txt');
var styleSample = $('#style-sample');
var styleBoard = $('#style-board');
var filters = $('.filter input');



function updateBoard(values){
    var setupValues;
    var measure = $("input[name='measure']:checked").val();
    if(values[0] == values[1] && values[0] == values[2] && values[0] == values[3] && values[0] == values[4] && values[0] == values[5] && values[0] == values[6] && values[0] == values[7]){
        setupValues = values[0] + measure;
    }else{
        /*setupValues = [];
        setupValues[0] = values[0] + measure;
        setupValues[1] = values[1] + measure;
        setupValues[2] = values[2] + measure;
        setupValues[3] = values[3] + measure + '/';
        if(values[0] != values[4]){
            setupValues[4] = values[4] + measure;
        }
        if(values[1] != values[5]){
            setupValues[5] = values[5] + measure;
        }
        if(values[2] != values[6]){
            setupValues[6] = values[6] + measure;
        }
        if(values[3] != values[7]){
            setupValues[7] = values[7] + measure;
        }*/
        //setupValues = values[0] + measure + values[0] + measure + values[0] + measure + values[0] + measure + values[0] + measure + values[0] + measure + values[0] + measure + values[0] + measure + values[0] + measure; 
        values[4] = '/ ' + values[4];
        setupValues = values.join(measure + ' ') + measure;
    }
    var browsers = $("input[name='browsers']:checked");
    var styleBoardText = 'border-radius:' + setupValues  + ';\n';
    if(values != '0'){
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
        values[i] = $(this).attr('value');
    })
    return values;
}

filters.bind('change', function(){
    updateBoard(getValues());
})

corners.each(function() {
    var value;
    
    /*
    $(this).focus(function (){
        if($(this).attr('value') == value){
            $(this).attr('value','').addClass('writingIt');
        }
    }).blur(function () {
        if($(this).attr('value') == ''){
            $(this).attr('value',value).removeClass('writingIt');
        }
    });*/
    
    
    //Allow only numbers
    $(this).bind('keypress', function(e){
        var code = e.charCode ? e.charCode : e.keyCode;
        if (! e.shiftKey && ! e.ctrlKey && ! e.altKey && ! e.metaKey && code != 46 && (code > 31 && (code < 48 || code > 57))) return false;
        return true; 
    })
        
    $(this).bind('keyup', function(){
        //value = $(this).attr('value');
        
        updateBoard(getValues());
    })
      
})


