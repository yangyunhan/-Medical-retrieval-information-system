let data = require('./data');
let Page = require('./page');

module.exports = (function () {
    function Template(paper, scriptId, elementClass) {
        let myTemplate = Handlebars.compile($(scriptId).html());
        $(elementClass).html(myTemplate(paper));
    }
    let pageLength  = Math.ceil(data.length/10);
    let lastLength = data.length % 10;
    let papers = [];
    let pId = 0;
    for(let i=0;i<pageLength;i++){
        if(i===pageLength-1){
            papers[i] = {
                length: lastLength,
                paper: []
            }
        }
        papers[i] = {
            length: 10,
            paper: []
        }
    }
    data.paper.forEach(function (item) {
        if(papers[pId].paper.length<10){
            papers[pId].paper.push(item);
        }else {
            pId ++;
            papers[pId].paper.push(item);
        }
    });
    Template(data,'#paper-number', '.total-number');
    Template(papers[0],'#paper-template', '#searchResultsList');
    Page({
        num:pageLength,//页码数
        startnum:1,//指定页码
        elem:$('#page2'),//指定的元素
        callback:function (n) {//回调函数
            Template(papers[n-1],'#paper-template', '#searchResultsList');
        }
    });
})();



