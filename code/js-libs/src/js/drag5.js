window.onload = function () {
  let oDrag = document.querySelector('.drag');

  drag(oDrag);
};

/**
 * @description 拖拽指定元素
 * @author xl
 * @date 25/11/2020
 * @param {*} oDrag 需要进行拖拽的DOM元素
 */
function drag(oDrag) {
  // 监听目标元素鼠标按下事件
  oDrag.onmousedown = function (e) {
    // 获取鼠标距离目标元素的距离
    let x = e.pageX - oDrag.getBoundingClientRect().left;
    let y = e.pageY - oDrag.getBoundingClientRect().top;
    // 监听document的mousemove事件
    document.onmousemove = function (event) {
      // 计算移动的距离
      let l = event.pageX - x;
      let t = event.pageY - y;
      // 限制拖拽范围上右下左
      if (t <= 0) {
        t = 0;
      }
      if (l >= document.documentElement.clientWidth - oDrag.offsetWidth) {
        l = document.documentElement.clientWidth - oDrag.offsetWidth;
      }
      if (t >= document.documentElement.clientHeight - oDrag.offsetHeight) {
        t = document.documentElement.clientHeight - oDrag.offsetHeight;
      }
      if (l < 0) {
        l = 0;
      }
      // 设置目标元素的位置
      oDrag.style.left = l + 'px';
      oDrag.style.top = t + 'px';
    };
    // 监听目标元素鼠标弹起事件
    oDrag.onmouseup = function () {
      // 不再做更随运动

      if (oDrag.releaseCapture) {
        oDrag.releaseCapture();
      }
      document.onmousemove = null;
      document.onmouseup = null;
    };
    if (oDrag.setCapture) {
      oDrag.setCapture();
    }
    return false;
  };
}
