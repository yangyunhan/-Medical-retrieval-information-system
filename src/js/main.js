module.exports=(function () {
    //获取另一个界面传过来的参数
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)
            return  unescape(r[2]);
        return null;
    }
    //搜索函数，统一公用
    var searchObj=null;
    function searchFinEvent(){
        search_url="searchResult.jsp?searchObj="+encodeURI(encodeURI(searchObj));//拼接url
        window.location.href=search_url;
        console.info(searchObj);
    }

    $(function(){
        $('#btSearch').click(function(){
            searchObj=$('#ipSearch').val();
            searchFinEvent();
            //console.info(searchObj);
        });//end of btSearch
        $('#adSearch').click(function(){
            window.location.href = 'adSearch.html'
        });
    });
})();