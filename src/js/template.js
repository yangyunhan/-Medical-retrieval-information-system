import ajaxFunc from './results'
//let data = require('./results');
let Page = require('./page');

let results;
ajaxFunc(function (data) {
    results = data;
}, function () {
    console.log('There is something wrong');
});
module.exports = (function () {
    function Template(paper, scriptId, elementClass) {
        let myTemplate = Handlebars.compile($(scriptId).html());
        $(elementClass).html(myTemplate(paper));
    }
    let pageLength = Math.ceil(results.length/10);
    let lastLength = results.length % 10;
    let papers = [];
    let pId = 0;
    for(let i = 0; i < pageLength; i++){
        if(i === pageLength-1){
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
    results.paper.forEach(function (item) {
        if(papers[pId].paper.length<10){
            papers[pId].paper.push(item);
        }else {
            pId++;
            papers[pId].paper.push(item);
        }
    });
    Template(results,'#paper-number', '.total-number');
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



