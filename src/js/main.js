console.log('start');
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

$('#btSearch').click(function(){
    searchObj=$('#ipSearch').val();
    searchFinEvent();
    console.log('btSeatch');
});

document.querySelector('#adSearch').click(function () {
    console.log('123');
});

$('#adSearch').click(function(){
    console.log('123');
    window.location.href = 'adSearch.html';
    console.log('adSearch');
});