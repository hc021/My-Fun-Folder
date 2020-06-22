
$(()=>{
    $('button').click((e)=>{ $("#d").val(parseInt(e.currentTarget.id) + parseInt($("#d").val())); });
    $('#r').click(()=>{ $("#d").val(0); })


    var num= 0; 
    $("#myButton").click(function(){
        var div = $('<div>' + (num++) + '</div>'); 
        $("#myDiv").append(div); 
    }); 
})

