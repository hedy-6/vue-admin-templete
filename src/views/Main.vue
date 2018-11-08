<template>
    <Layout class="main_layout">
        <Sider
            class="main_sider"
            collapsible
            hide-trigger
            v-model="collapsed"
            :width="256"
            :collapsed-width="64"
        >
            <div class="main_sider_logoCon">
                <img v-show="!collapsed" :src="maxLogo" key="max-logo">
                <img v-show="collapsed" :src="minLogo" key="min-logo">
            </div>
            <side-menu
                accordion
                ref="sideMenu"
                :active-name="$route.name"
                :collapsed="collapsed"
                @on-select="turnToPage"
                :menu-list="menuList"
            ></side-menu>
        </Sider>
        <Layout class="main_layoutCont">
            <Header class="main_layoutCont_header">
                <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange">
                    <user :user-avator="userAvator"/>
                </header-bar>
            </Header>
            <Content class="main_layoutCont_content">
                <router-view></router-view>
            </Content>
            <Footer class="main_layoutCont_footer">Footer</Footer>
        </Layout>
    </Layout>
</template>
<script>
import maxLogo from "@/assets/images/logo_big.svg";
import minLogo from "@/assets/images/logo.svg";
import { mapMutations, mapActions, mapGetters } from "vuex";
import SideMenu from "./main/side-menu/SideMenu";
import HeaderBar from './main/header-bar/HeaderBar';
import User from './main/header-bar/User'
export default {
  components: {
    SideMenu,
    HeaderBar,
    User
  },
  data() {
    return {
      maxLogo,
      minLogo,
      collapsed: false
    };
  },
  computed: {
    userAvator() {
      return this.$store.state.user.avatorImgPath;
    },
    menuList() {
      return this.$store.getters.menuList;
    }
  },
  methods: {
    turnToPage(route) {
      let { name, params, query } = {};
      if (typeof route === "string") name = route;
      else {
        name = route.name;
        params = route.params;
        query = route.query;
      }
      if (name.indexOf("isTurnByHref_") > -1) {
        window.open(name.split("_")[1]);
        return;
      }
      this.$router.push({
        name,
        params,
        query
      });
    },
    handleCollapsedChange(state) {
      this.collapsed = state;
    }
  }
};
</script>
<style lang="scss">
.main_layout {
  height: 100%;
  .main_sider {
    background: #17233d;
    .ivu-layout-sider-children {
      overflow-y: scroll;
    }
    .main_sider_logoCon {
      height: 64px;
      padding: 10px;
      background: #021f5d;
      img {
        height: 44px;
        width: auto;
        display: block;
        margin: 0 auto;
      }
    }
    .ivu-menu {
      background: transparent;
    }
    .ivu-menu-item > i {
      margin-right: 12px !important;
    }
    .ivu-menu-submenu > .ivu-menu > .ivu-menu-item > i {
      margin-right: 8px !important;
    }
    .collased-menu-dropdown {
      width: 100%;
      margin: 0;
      line-height: normal;
      padding: 7px 0 6px 16px;
      clear: both;
      font-size: 12px !important;
      white-space: nowrap;
      list-style: none;
      cursor: pointer;
      transition: background 0.2s ease-in-out;
      &:hover {
        background: rgba(100, 100, 100, 0.1);
      }
      & * {
        color: #515a6e;
      }
      .ivu-menu-item > i {
        margin-right: 12px !important;
      }
      .ivu-menu-submenu > .ivu-menu > .ivu-menu-item > i {
        margin-right: 8px !important;
      }
    }

    .ivu-select-dropdown.ivu-dropdown-transfer {
      max-height: 400px;
    }
  }
  .main_layoutCont_header {
    background: #fff;
    padding: 0 20px;
    width: 100%;
  }
  .main_layoutCont {
    height: & "calc(100% - 60px)";
    overflow: hidden;
    .main_layoutCont_content {
      height: 100%;
      overflow: hidden;
    }
  }
  //   .tag-nav-wrapper {
  //     padding: 0;
  //     height: 40px;
  //     background: #f0f0f0;
  //   }
  //   .content-wrapper {
  //     padding: 18px;
  //     height: ~"calc(100% - 80px)";
  //     overflow: auto;
  //   }
}
</style>
