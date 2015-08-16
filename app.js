$(function(){
    $(document).on("keydown", function(e){
        $(".box").get(0).focus();
    });

    $(".box").on("keydown", function(e){
        if(e.keyCode == 9) { //Tab
            $(this).val($(this).val()+"\t");
        }

        Cookies.set("currentText", $(this).val());

        if( //Keys that no longer do anything
            e.keyCode == 8  || //Backspace
            e.keyCode == 9  || //Tab
            e.keyCode == 37 || //Left
            e.keyCode == 38 || //Up
            e.keyCode == 39 || //Right
            e.keyCode == 40 || //Down
            e.keyCode == 46    //Delete
        ){
            if(e.preventDefault){ e.preventDefault(); }
            return false;
        }

    }).on("mousedown mouseup click", function(e){
        if(e.preventDefault){ e.preventDefault(); }
        return false;
    });
    
    $("#new").click(function(){
        $(".box").val("");
    });
    
    $("#download").click(function(){
        $(this).attr("href", "data:application/text;charset=utf-8,"+encodeURI($(".box").val()));
    });

    if(Cookies.get("currentText")){
        $(".box").val(Cookies.get("currentText"));
    }

});
