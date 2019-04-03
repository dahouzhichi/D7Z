$(function(){
    for(var i = 0 ; i < $(".see").length;i++){
        $(".see:eq(i)").click(function(){
            for(var j = 0 ; j < $(".job_content").length;j++){
                $(".job_content:eq(i)").slideTogle(1000,"swing");
            }
        })
    }
})