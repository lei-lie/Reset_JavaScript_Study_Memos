/*
    实现目标元素更随鼠标移动而移动的效果要点：
    1.目标元素是定位的
    2.监听文档的mousemove事件，实时获取鼠标移动的位置（距离文档左边和顶部的距离），
    3.设置元素距离文档左边和顶部的距离和鼠标的位置一致
*/
window.onload = function() {
    let oDiv = document.querySelector('#div1')
    document.onmousemove = function(e) {
        // 计算鼠标移动的距离
        let x = e.clientX
        let y = e.clientY
        // 设置目标元素的位置
        oDiv.style.left = x + 'px'
        oDiv.style.top = y + 'px'
    }
}