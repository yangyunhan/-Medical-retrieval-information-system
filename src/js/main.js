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
        searchObj = $('#ipSearch').val();
        searchFinEvent(searchObj);
    })
})();