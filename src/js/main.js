import '../less/bootstrap.min.css'
import '../less/main.css'

module.exports = (function () {
    //搜索函数，统一公用
    var searchObj = null;
    function searchFinEvent(searchObj){
        var search_url = "searchResult.html?txt_0_value1="+encodeURI(encodeURI(searchObj))+'&';//拼接url
        window.location.href = search_url;
    }

    $('#btSearch').click(function(){
        searchObj = $('#ipSearch').val();
        searchFinEvent(searchObj);
    });
    $('#adSearch').click(function () {
        window.location.href = "adSearch.html";
    });

    $(function(){
        $('#testDiv').mousemove(function (e) {
            var xx = e.originalEvent.x || e.originalEvent.layerX || 0;
            var yy = e.originalEvent.y || e.originalEvent.layerY || 0;
            // console.log(xx+'*'+yy);
            var d = document.getElementById("testDiv");//获取某div在当前窗口的位置
            var dx = xx - d.getBoundingClientRect().left;
            var dy = yy - d.getBoundingClientRect().top;
            //鼠标在该div内位置
            if(dy<=155){
                if(dy<=90){
                    if(dy<=55){
                        if(dx>50 && dx<=125){
                            $('.bodyimg').hide();
                            $('#brain').show();
                        }
                        else{
                            $('.bodyimg').hide();
                            $('#body').show();
                        }
                    }
                    else{
                        if(dx>65 && dx<=95){
                            $('.bodyimg').hide();
                            $('#digest').show();
                        }
                        else{
                            $('.bodyimg').hide();
                            $('#body').show();
                        }
                    }
                }
                else{
                    if(dy>=105 && (dx>70 && dx<=105)){
                        $('.bodyimg').hide();
                        $('#heart').show();
                    }
                    else{
                        if(dx>40 && dx<=130){
                            $('.bodyimg').hide();
                            $('#lung').show();
                        }
                        else{
                            $('.bodyimg').hide();
                            $('#body').show();
                        }
                    }
                }
            }
            else{
                if(dy<=190){
                    if(dy<=168){
                        if(dx>45 && dx<115){
                            if(dx<85){
                                $('.bodyimg').hide();
                                $('#liver').show();
                            }
                            else{
                                $('.bodyimg').hide();
                                $('#stomach').show();
                            }
                        }
                        else{
                            $('.bodyimg').hide();
                            $('#body').show();
                        }
                    }
                    else{
                        if(dx>45 && dx<125){
                            if(dx<=93){
                                if(dx<=50){
                                    $('.bodyimg').hide();
                                    $('#liver').show();
                                }
                                else{
                                    $('.bodyimg').hide();
                                    $('#gallbladder').show();
                                }
                            }
                            else{
                                if(dx>=100){
                                    $('.bodyimg').hide();
                                    $('#pancreas').show();
                                }
                                else{
                                    $('.bodyimg').hide();
                                    $('#stomach').show();
                                }
                            }
                        }
                        else{
                            $('.bodyimg').hide();
                            $('#body').show();
                        }
                    }
                }
                else{
                    if(dy<=260 && (dx>=40 && dx<=125)){
                        if(dy>=210 && dy<=225){
                            if(dx>=55 && dx<=110){
                                $('.bodyimg').hide();
                                $('#small_intestine').show();
                            }
                            else{
                                $('.bodyimg').hide();
                                $('#large_intestine').show();
                            }
                        }
                        else{
                            if(dy>=230){
                                $('.bodyimg').hide();
                                $('#urinary').show();
                            }
                            else{
                                if(dx>=60 && dx<=110){
                                    $('.bodyimg').hide();
                                    $('#urinary').show();
                                }else{
                                    $('.bodyimg').hide();
                                    $('#large_intestine').show();
                                }
                            }
                        }
                    }
                    else{
                        $('.bodyimg').hide();
                        $('#body').show();
                    }
                }
            }
            //console.log(dx+'*'+dy);
        });
    });

    $('#testDiv').click(e=>{
        searchFinEvent(e.target.id);
    });

    $('.hot-search').click(e=>{
        searchFinEvent(e.target.innerText);
    })

})();