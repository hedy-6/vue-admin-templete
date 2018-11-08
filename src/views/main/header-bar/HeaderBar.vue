<template>
    <div class="header-bar">
        <a
            @click="handleCollpasedChange"
            type="text"
            :class="['sider-trigger-a', collapsed ? 'collapsed' : '']"
        >
            <Icon type="md-menu" :size="26"/>
        </a>
        <div class="custom-content-con">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: "HeaderBar",
  props: {
    collapsed: Boolean
  },
  methods: {
    handleCollpasedChange() {
      this.$emit("on-coll-change", !this.collapsed);
    }
  }
};
</script>
<style lang="scss" scoped>
$size: 40px;
.header-bar {
  width: 100%;
  height: 100%;
  position: relative;
  .sider-trigger-a {
    padding: 6px;
    width: $size;
    height: $size;
    display: inline-block;
    text-align: center;
    color: #5c6b77;
    margin-top: 12px;
    i {
      transition: transform 0.2s ease;
      vertical-align: top;
    }
    &.collapsed i {
      transform: rotateZ(90deg);
      transition: transform 0.2s ease;
    }
  }
  .custom-content-con {
    float: right;
    height: auto;
    padding-right: 20px;
    line-height: 64px;
    & > * {
      float: right;
    }
  }
}
</style>

