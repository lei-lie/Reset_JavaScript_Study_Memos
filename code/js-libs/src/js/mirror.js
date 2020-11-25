window.onload = function () {
    let oTruth = document.querySelector('.truth')
    let oMask = document.querySelector('.mask')
    let oVirtual = document.querySelector('.virtual')
    let oImg = document.querySelector('.virtual-pic')
    // 监听oTruth对象的鼠标划过事件
    oTruth.onmouseover = function () {
        // 显示oMask ,oVirtual
        oMask.style.display = 'block';
        oVirtual.style.display = 'block'
        // 监听文档的鼠标移动事件
        document.onmousemove = function (e) {
            e = e || window.e
            // 获取鼠标移动的位置
            let x = e.pageX
            let y = e.pageY
            console.log(oTruth);
            // 计算实际移动的距离
            // let moveX = x - (oTruth.getBoundingClientRect().left - oMask.offsetWidth / 2)
            // let moveY =  y - (oTruth.getBoundingClientRect().top - oMask.offsetHeight / 2)
            let moveX = x - (oTruth.getBoundingClientRect().left + 10)
            let moveY =  y - (oTruth.getBoundingClientRect().top + 10)
            // 限定移动区域
            // 上
            if (moveY < 0 ) { moveY = 0}
            // 右
            if (moveX > oTruth.offsetWidth - oMask.offsetWidth) {
                moveX = oTruth.offsetWidth - oMask.offsetWidth
            }
            // 下
            if (moveY > oTruth.offsetHeight - oMask.offsetHeight) {
                moveY = oTruth.offsetHeight - oMask.offsetHeight
            }
            // 左
            if (moveX < 0 ) {
                moveX = 0
            }
            // 计算大图/小图的比例
            // 大图
            let bigSize = oImg.offsetWidth - oVirtual.offsetWidth
            let smallSize = oTruth.offsetWidth - oMask.offsetWidth
            let scale = bigSize/ smallSize

            console.log(scale);
            // 设置oMask的位置
            oMask.style.left = moveX + 'px'
            oMask.style.top =moveY + 'px'
            // 设置右侧大图移动的位置
            oImg.style.left = -moveX * scale + 'px'
            oImg.style.top = -moveY * scale + 'px'
        }
    }
    // 监听鼠标移出
    oTruth.onmouseout = function () {
        // 隐藏oMask
        oMask.style.display = 'none'
        oVirtual.style.display = 'none'
    }
}