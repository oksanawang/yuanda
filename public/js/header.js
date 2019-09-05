(function(){
    $.ajax({
        url:'../html/header.html',
        type:'get',
        success:function(res){
            $('#header').html(res);
            // $(` <link rel="stylesheet" href="../css/header.css">`).appendTo('head');
        }
    });
})();