window.onload = function () {
  let oDrag = document.querySelector('.drag');
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
      // 设置目标元素的位置
      oDrag.style.left = l + 'px';
      oDrag.style.top = t + 'px';
    };
    // 监听目标元素鼠标弹起事件
    oDrag.onmouseup = function () {
      // 不再做更随运动
      document.onmousemove = null;
    };
    return false;
  };
};
