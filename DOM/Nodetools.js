/**
 * Created by ASUS on 2018/4/26.
 */
//功能：给定元素查找他的第一个元素子节点，并返回
function getFirstchild(ele) {
    var node=ele.firstElementChild||ele.firstChild
    return node;
}
//功能：给定元素查找他的最后一个元素子节点，并返回
function getLasttchild(ele) {
    var node=ele.lasttElementChild||ele.lastChild
    return node;
}
//给定元素查找他的下一个兄弟元素节点，并返回
function getNextnnode(ele) {
    return ele.nextElementSibling||ele.nextSibling;
}
//给定元素查找他的上一个兄弟节点
function getLastnnode(ele) {
    return ele.previousElementSibling||ele.previousSibling;
}
//给定元素和索引值查找指定索引值的兄弟元素节点
function getEleindex(ele,index) {
    return ele.parentNode.children[index];
}
//查找所有的兄弟元素节点
function getAllsiblingnode(ele) {
    var newArr=[];
    var arr=ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        if(arr[i]!=ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//封装个函数，方便获取ID
function getele(id) {
    var ele=document.getElementById(id);
    return ele;

}