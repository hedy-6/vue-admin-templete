<template>
  <div class="tableList">
    <slot></slot>
    <Table
      :columns="columns"
      :data="list"
      :loading="loading"
      :width="width"
      stripe
      :border="border"
      @on-select="select"
      @on-select-cancel="selectCancel"
      @on-select-all-cancel="selectAllCancel"
      @on-selection-change="selectChange"
      @on-sort-change="sortChange"
      @on-filter-change="filterChange"
      @on-row-click="rowClick"
      @on-row-dblclick="rowDbClick"
      @on-expand="expand"
    ></Table>
    <Page
      class="tablelist_page"
      :current="index"
      :pageSize="size"
      :total="total"
      show-total
      show-sizer
      show-elevator
      @on-change="pageChange"
      @on-page-size-change="sizeChange"
    >
      <span class="ivu-page-total">共{{total}}条记录 第{{index}}/{{Math.ceil(total/size)}}页</span>
    </Page>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    index: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    pageChange: {
      type: Function,
      default() {}
    },
    sizeChange: {
      type: Function,
      default() {}
    },
    total: {
      type: Number
    },
    showTotal: {
      type: Boolean
    },
    showElevator: {
      type: Boolean
    },
    showSizer: {
      type: Boolean
    },
    columns: {
      type: Array,
      default: () => []
    },
    list: {
      type: Array,
      default: () => []
    },
    width: {
      type: [Number, String]
    },
    loading: {
      type: Boolean
    },
    stripe: {
      type: Boolean
    },
    border: {
      type: Boolean
    },
    rowClassName: {
      type: Function,
      default: () => {}
    },
    noDataText: {
      type: String
    },
    noFilteredDataText: {
      type: String
    },
    select: {
      type: Function,
      default() {
        return "";
      }
    },
    selectCancel: {
      type: Function,
      default() {
        return "";
      }
    },
    selectAllCancel: {
      type: Function,
      default() {
        return "";
      }
    },
    selectChange: {
      type: Function,
      default() {
        return "";
      }
    },
    sortChange: {
      type: Function,
      default() {
        return "";
      }
    },
    filterChange: {
      type: Function,
      default() {
        return "";
      }
    },
    rowClick: {
      type: Function,
      default() {
        return "";
      }
    },
    rowDbClick: {
      type: Function,
      default() {
        return "";
      }
    },
    expand: {
      type: Function,
      default() {
        return "";
      }
    }
  }
};
</script>
<style lang="scss">
.tableList {
  padding: 20px;
  .tablelist_page {
    margin-top: 30px;
    text-align: right;
    .ivu-page-total {
      float: left;
    }
  }
}
</style>
