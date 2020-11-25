/*
    实现目标元素更随鼠标移动而移动的效果要点：
    1.目标元素是定位的
    2.监听文档的mousemove事件，实时获取鼠标移动的位置（距离文档左边和顶部的距离），
    3.设置元素距离文档左边和顶部的距离和鼠标的位置一致
    4.限制目标元素移动的区域
*/
window.onload = function() {
    let oDiv = document.querySelector('#div1')
    document.onmousemove = function(e) {
        // 计算鼠标移动的距离
        let x = e.clientX
        let y = e.clientY
        // 限定目标元素只能在指定的区域内移动
        // 上
        if (y < 0) { y = 0}
        // 右
        if (x > (document.documentElement.clientWidth - oDiv.offsetWidth)) {
            x = document.documentElement.clientWidth - oDiv.offsetWidth
        }
        // 下
        if (y > (document.documentElement.clientHeight - oDiv.offsetHeight)) {
            y = document.documentElement.clientHeight - oDiv.offsetHeight
        }
        // 左
        if (x < 0) {
            x = 0
        }
        // 设置目标元素的位置
        oDiv.style.left = x + 'px'
        oDiv.style.top = y + 'px'
    }
}