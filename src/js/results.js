var data = {};
function GetQueryString() {
    var reg = /[^?|&]*[$&]/g;
    var text = window.location.href;
    var result = text.match(reg);
    result.forEach(function (item) {
        item = item.slice(0, item.length-1);
        var keyValue = item.split('=');
        if(!keyValue[1]){
            keyValue[1] = 'null';
        }
        data[keyValue[0]] = keyValue[1];
    });

    //console.log(data);
}


GetQueryString();

module.exports = function ajaxFunc(callback1, callback2) {
    $.ajax({
        url: encodeURI(""),
        type: "POST",
        dataType: "JSON",
        data:JSON.stringify({data}),
        contentType:"application/x-www-form-urlencoded;charset=UTF-8",
        cache:false,
        async:false,
        success:function (result){
            callback1($.parseJSON(result));
        },
        error:function () {
            callback2();
        }
    });
};
