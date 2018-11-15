<template>
    <div class="breadCrumb">
        <Breadcrumb :style="{fontSize: fontSize+'px'}">
            <BreadcrumbItem v-for="item in list" :to="item.to" :key="`bread-crumb-${item.name}`">
                <Icon style="margin-right: 4px;" :type="item.icon || ''"/>
                {{item.meta.title}}
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>
<script>
export default {
  name: "breadCrumb",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    fontSize: {
      type: Number,
      default: 14
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
.breadCrumb {
    display: inline-block;
    margin-left: 20px;
}
</style>
