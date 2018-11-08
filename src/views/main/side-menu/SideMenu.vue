<template>
    <div class="side-menu-wrapper">
        <slot></slot>
        <Menu
            ref="menu"
            v-show="!collapsed"
            :active-name="activeName"
            :open-names="openedNames"
            :accordion="accordion"
            :theme="theme"
            width="auto"
            @on-select="handleSelect"
        >
            <template v-for="item in menuList">
                <template v-if="item.children&&item.children.length===1">
                    <side-menu-item
                        v-if="item.meta.showAlways"
                        :parent-item="item"
                        :key="`menu-${item.name}`"
                    ></side-menu-item>
                    <menu-item
                        v-else
                        :name="getNameOrHref(item, true)"
                        :key="`menu-${item.children[0].name}`"
                    >
                        <Icon :type="item.children[0].icon || ''"></Icon>
                        <span>{{ showTitle(item.children[0]) }}</span>
                    </menu-item>
                </template>
                <template v-else>
                    <side-menu-item
                        v-if="showChildren(item)"
                        :parent-item="item"
                        :key="`menu-${item.name}`"
                    ></side-menu-item>
                    <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`">
                        <Icon :type="item.icon || ''"></Icon>
                        <span>{{ showTitle(item) }}</span>
                    </menu-item>
                </template>
            </template>
        </Menu>
        <div class="menu-collapsed" v-show="collapsed" :list="menuList">
            <template v-for="item in menuList">
                <collapsed-menu
                    v-if="item.children && item.children.length > 1"
                    @on-click="handleSelect"
                    hide-title
                    :root-icon-size="rootIconSize"
                    :icon-size="iconSize"
                    :theme="theme"
                    :parent-item="item"
                    :key="`drop-menu-${item.name}`"
                ></collapsed-menu>
                <Tooltip
                    transfer
                    v-else
                    :content="showTitle(item.children && item.children[0] ? item.children[0] : item)"
                    placement="right"
                    :key="`drop-menu-${item.name}`"
                >
                    <a
                        @click="handleSelect(getNameOrHref(item, true))"
                        class="drop-menu-a"
                        :style="{textAlign: 'center'}"
                    >
                        <Icon
                            :size="rootIconSize"
                            :color="textColor"
                            :type="item.icon || (item.children && item.children[0].icon)"
                        />
                    </a>
                </Tooltip>
            </template>
        </div>
    </div>
</template>
<script>
import mixin from "./mixin.js";
import SideMenuItem from "./SideMenuItem";
import CollapsedMenu from "./CollapsedMenu";
import { getUnion } from "@/libs/tool.js";
export default {
  components: {
    SideMenuItem,
    CollapsedMenu
  },
  mixins: [mixin],
  props: {
    menuList: {
      type: Array,
      default() {
        return [];
      }
    },
    collapsed: Boolean,
    activeName: {
      type: String,
      default: ""
    },
    openNames: {
      type: Array,
      default: () => []
    },
    rootIconSize: {
      type: Number,
      default: 20
    },
    iconSize: {
      type: Number,
      default: 16
    },
    accordion: Boolean,
    theme: {
      type: String,
      default: "dark"
    }
  },
  data() {
    return {
      openedNames: []
    };
  },
  computed: {
    textColor() {
      return this.theme === "dark" ? "#fff" : "#495060";
    }
  },
  mounted() {
    this.openedNames = getUnion(
      this.openedNames,
      this.getOpenedNamesByActiveName(name)
    );
  },
  methods: {
    handleSelect(name) {
      this.$emit("on-select", name);
    },
    getOpenedNamesByActiveName(name) {
      return this.$route.matched
        .map(item => item.name)
        .filter(item => item !== name);
    },
    updateOpenName(name) {
      if (name === this.$config.homeName) this.openedNames = [];
      else this.openedNames = this.getOpenedNamesByActiveName(name);
    }
  },
  watch: {
    activeName(name) {
      if (this.accordion)
        this.openedNames = this.getOpenedNamesByActiveName(name);
      else
        this.openedNames = getUnion(
          this.openedNames,
          this.getOpenedNamesByActiveName(name)
        );
    },
    openNames(newNames) {
      this.openedNames = newNames;
    },
    openedNames() {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened();
      });
    }
  }
};
</script>
<style lang="scss">
.side-menu-wrapper {
  user-select: none;
  .menu-collapsed {
    padding-top: 10px;

    .ivu-dropdown {
      width: 100%;
      .ivu-dropdown-rel a {
        width: 100%;
      }
    }
    .ivu-tooltip {
      width: 100%;
      .ivu-tooltip-rel {
        width: 100%;
      }
      .ivu-tooltip-popper .ivu-tooltip-content {
        .ivu-tooltip-arrow {
          border-right-color: #fff;
        }
        .ivu-tooltip-inner {
          background: #fff;
          color: #495060;
        }
      }
    }
  }
  a.drop-menu-a {
    display: inline-block;
    padding: 6px 15px;
    width: 100%;
    text-align: center;
    color: #495060;
  }
}
.menu-title {
  padding-left: 6px;
}
</style>
