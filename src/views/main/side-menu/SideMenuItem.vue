<template>
    <Submenu :name="parentName">
        <template slot="title">
            <Icon :type="parentItem.icon||''"></Icon>
            <span>{{showTitle(parentItem)}}</span>
        </template>
        <template v-for="item in children">
            <template v-if="item.children && item.children.length===1">
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
    </Submenu>
</template>
<script>
import mixin from "./mixin.js";
import itemMixin from "./item-mixin.js";
export default {
  name: "side-menu-item",
  mixins: [mixin, itemMixin]
};
</script>