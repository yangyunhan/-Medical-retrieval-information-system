let moLo = require('./moment-with-locales');

//let datetimepicker = require('./bootstrap-datetimepicker');

var add_count = 2;
for (var i = 2; i < 6; i++) {
        $("#plus-minus-" + i).hide();
        console.log(add_count);
    }
    //作者
$("#author-minus").hide();
$("#plus-author").click(function () {
        $("#author-minus").show();
    });
$("#minus-author").click(function () {
        $("#author-minus").hide();
    });
$("#minus-1").click(function () {
        $("#plus-minus-1").hide();
        add_count--;
        console.log(add_count);
    });
$("#minus-2").click(function () {
        $("#plus-minus-2").hide();
        add_count--;
        console.log(add_count);
    });
$("#minus-3").click(function () {
        $("#plus-minus-3").hide();
        add_count--;
        console.log(add_count);
    });
$("#minus-4").click(function () {
        $("#plus-minus-4").hide();
        add_count--;
        console.log(add_count);
    });
$("#minus-5").click(function () {
        $("#plus-minus-5").hide();
        add_count--;
        console.log(add_count);
    });

    //增加显示一个条件
$("#plus").click(function () {
        switch (add_count) {
            case 1:
                $("#plus-minus-1").show();
                add_count++;
                break;
            case 2:
                $("#plus-minus-2").show();
                add_count++;
                break;
            case 3:
                $("#plus-minus-3").show();
                add_count++;
                break;
            case 4:
                $("#plus-minus-4").show();
                add_count++;
                break;
            case 5:
                $("#plus-minus-5").show();
                add_count++;
                break;
            default:
                console.log(add_count);
                break;
        }
    });

$('.date').datetimepicker({
    language: 'zh-CN', //显示中文
    format: "yyyy-mm-dd",
    /*locale: moLo.locale('zh-cn'),*/
    minView: 2,
    initialDate: new Date(),
    autoclose: true, //选中自动关闭
    todayBtn: true, //显示今日按钮
    todayHighlight: true
});
$('#back').click(function(){
        window.location.href = 'main.html'
    });

$('.search').click(function () {
    createQuery()
});

function createQuery(){
    var baseQuery = {
        //第一部分
        txt_0_sel:$('#input_0_select option:selected').val(),
        txt_0_value1:$('#input_0_val1').val(),
        txt_0_freq1:$('#input_0_fre1 option:selected').val(),
        txt_0_relation:$('#input_0_relation1 option:selected').val(),
        txt_0_value2:$('#input_0_val2').val(),
        txt_0_freq2:$('#input_0_fre2 option:selected').val(),
        txt_0_acc:$('#input_0_acc option:selected').val(),
        txt_1_logical:$('#input_1_logical option:selected').val(),
        txt_1_sel:$('#input_1_select option:selected').val(),
        txt_1_value1:$('#input_1_val1').val(),
        txt_1_freq1:$('#input_1_fre1 option:selected').val(),
        txt_1_relation:$('#input_1_relation1 option:selected').val(),
        txt_1_value2:$('#input_1_val2').val(),
        txt_1_freq2:$('#input_1_fre2 option:selected').val(),
        txt_1_acc:$('#input_1_acc option:selected').val(),
        /*****
         中间四行检索条件没写

         *****/
        //作者、单位部分
        txt_6_sel:$('#input_6_select option:selected').val(),
        txt_6_value1:$('#input_6_val1').val(),
        txt_6_acc1:$('#input_6_acc1 option:selected').val(),
        txt_6_value2:$('#input_6_val2').val(),
        txt_6_acc2:$('#input_6_acc2 option:selected').val(),
        txt_7_logical:$('#input_7_logical option:selected').val(),
        txt_7_sel:$('#input_7_select option:selected').val(),
        txt_7_value1:$('#input_7_val1').val(),
        txt_7_acc1:$('#input_7_acc1 option:selected').val(),
        txt_7_value2:$('#input_7_val2').val(),
        txt_7_acc2:$('#input_7_acc2 option:selected').val(),
        //时间部分
        begin_date:$('#startDate').data().date,
        end_date:$('#endDate').data().date,
        update_date:$('#input_8_time option:selected').val()
    };

    var props = '';
    var searchURL;
    for(var o in baseQuery){
        props = props + o + '=' + encodeURI(encodeURI(baseQuery[o])) + '&';
    }
    //console.log(props);
    searchURL = "searchResult.html?" + props;
    window.location.href = searchURL;
}