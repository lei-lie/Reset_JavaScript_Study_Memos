window.onload = function() {
    let oDrag = document.querySelector('.drag')
    document.onmousemove = function(e) {
        // 获取鼠标当前的位置
        let x = e.pageX
        let y = e.pageY

        // 设置目标元素的位置
        oDrag.style.left = x + 'px'
        oDrag.style.top = y + 'px'
    }
}