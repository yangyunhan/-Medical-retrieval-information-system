/**
 * Created by yunhan on 2017/8/22.
 */
$(document).ready(function () {
    //右侧定位
    var findIndex = function (val, arr, begin, end) {
        if(val < arr[0]){
            return 0;
        }
        if(val > arr[arr.length-1]){
            return arr.length-1;
        }
        begin = begin || 0;
        end = end || arr.length - 1;
        if(end - begin == 1){
            return begin;
        }
        var mid = Math.floor((begin + end) / 2);
        if(val >= arr[mid]){
            return findIndex(val,arr,mid,end);
        }else {
            return findIndex(val,arr,begin,mid);
        }
    };

    function ScrollChange(options) {
        if(!options.menus||!options.contentList){
            return;
        }
        this.menus=options.menus;
        this.contentList=$(options.contentList);
        this.speed=options.speed||2000;
        this.coverHeight=options.coverHeight||0;
        this.activeCls=options.activeCls||'function-active';
        this.init();
    }
    ScrollChange.prototype.init=function () {
        this.contentHeight = (function () {
            var heightArr = [];
            for(var i = 0;i<this.contentList.length;i++){
                heightArr.push($(this.contentList[i]).offset().top);
            }
            return heightArr;
        }.bind(this))();
        this.bindEvents();
    };
    ScrollChange.prototype.bindEvents=function () {
        $(document).on('click',this.menus,function (event) {
            var $index = $(event.target).index();
            this.onChangeToScroll($index);
        }.bind(this));
        $(window).scroll(function () {
            var $scrollTop = $(document).scrollTop();//如果最后一个或几个模块不能撑满一个页面的高度，那么应该人为的增加高度以得到正确的索引值
            var $index = findIndex($scrollTop+this.coverHeight,this.contentHeight);
            this.onMenuChange($index);
        }.bind(this));

    };
    ScrollChange.prototype.onMenuChange = function (index) {
        $(this.menus).eq(index).addClass(this.activeCls).siblings().removeClass(this.activeCls);
    };

    ScrollChange.prototype.onChangeToScroll=function (index) {
        $('html,body').animate({
            scrollTop: this.contentHeight[index] - this.coverHeight + 1
        },1000);
    };
    var options2={
        sidebar:'.function-list',
        menus:'.function-item',
        contentList:'.container-item',
        coverHeight:100,
        speed:1000
    };
    new ScrollChange(options2);
});
