<template>
  <div class="mirror-container"
       :style="{width: qidth+'px',height: height + 'px'}">
    <div class="wrap">
      <!-- 真实图片位置 -->
      <div class="truth"
           @mousemove="move"
           @mouseenter="showMagnify"
           @mouseleave="hideMagnify"
           ref="truth">
        <div class="mask"
             v-if="showMask "
             :style="{
                 width:width/2+'px',
                 height:width/2+'px',
                 left:maskPosition.x+'px',
                 top:maskPosition.y+'px'}"
             ref="mask">
          <img v-lazy="list[current]"
               :key="list[current]">
          <img v-if="vodId"
               class="video-play"
               @click="$emit('showvideo')"
               src="~@/assets/imgs/big-play-button.png"
               alt="">
        </div>
      </div>
      <!-- 虚拟图片部分 -->
      <div class="virtual"
           v-if="isShowVirtual"
           :style="{width: width+'px',height:height+'px'}"
           ref="virtual">
        <div class="big"
             ref="bigPic"
             :style="{
              position:'absolute',
              width:2*width+'px',
              height:2*height+'px',
              backgroundSize:'100% 100%',
              backgroundImage:`url(${list[current]})`,
              left:percent.x, 
              top:percent.y
           }">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    list: {
      type: Array,
      default: [],
    },
    vodId: "",
    current: "", // 当前选中的图片
  },
  data() {
    return {
      showMask: false, // 是否显示遮罩
      isShowVirtual: false, // 是否显示镜像
      maskPosition: {}, // 遮罩位置
      percent: {}, //
    };
  },
  methods: {
    computedOffset(obj, prop) {
      //计算元素到body的绝对位置
      if (obj == document.body || obj.offsetParent == document.body) {
        return parseInt(obj[prop]);
      }
      return parseInt(obj[prop]) + this.computedOffset(obj.offsetParent, prop);
    },
    showMagnify(e) {
      this.showMask = true;
      this.isShowVirtual = true;
    },
    hideMagnify() {
      this.isShowVirtual = false;
      this.showMask = false;
    },
    // 计算鼠标的位置
    computePosition(e) {
      // 获取当前鼠标在文档中的位置
      let x = e.pageX,
        y = e.pageY;
        // 获取mask,truth,virtual,bigPic元素
      let mask = this.$refs.mask;
      let truth = this.$refs.truth;
      let virtual = this.$refs.virtual;
      let bigPic = this.$refs.bigPic;
      // 计算移动的距离x,y
      x = x - this.computedOffset(truth, "offsetLeft") - mask.offsetWidth / 2;
      y = y - this.computedOffset(truth, "offsetTop") - mask.offsetHeight / 2;
      if (x <= 0) {
        x = 0;
      } else if (x > truth.offsetWidth - mask.offsetWidth) {
        x = truth.offsetWidth / 2;
      }

      if (y <= 0) {
        y = 0;
      } else if (y > truth.offsetHeight - mask.offsetHeight) {
        y = truth.offsetHeight - mask.offsetHeight;
      }

      this.maskPosition = {
        x,
        y,
      };
      //计算比例
      this.percent = {
        x:
          (-x / (truth.offsetWidth - mask.offsetWidth)) *
            (bigPic.offsetWidth - virtual.offsetWidth) +
          "px",
        y:
          (-y / (truth.offsetHeight - mask.offsetHeight)) *
            (bigPic.offsetHeight - virtual.offsetHeight) +
          "px",
      };
    },
    move(e) {
      this.computePosition(e);
    },
  },
};
</script>
<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  user-select: none;
  margin-bottom: 20px;
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #f7f7f7;
  cursor: pointer;
  .truth {
    width: 100%;
    height: 100%;
    position: relative;
    .video-play {
      width: 84px;
      height: 84px;
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -42px;
      margin-top: -42px;
    }
  }
  .mask {
    position: absolute;
    background-image: url("~@/assets/shop/mask.png");
    background-repeat: repeat;
    cursor: move;
  }
  .virtual {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    left: calc(100% + 10px);
    top: 0;
    background-repeat: no-repeat;
  }
  .big {
    z-index: 999;
  }
}
</style>