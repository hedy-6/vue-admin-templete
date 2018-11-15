<template>
    <div>
        <table-list
            :list="list"
            :columns="columns"
            :total="total"
            :loading="loading"
            :index="index"
            :size="size"
            :pageChange="changePage"
            :sizeChange="changePageSize"
            :rowClick="rowClick"
        ></table-list>
    </div>
</template>
<script>
import TableList from "@/components/table/TableList.vue";
import tablemixin from "@/components/table/tablemixin.js";
export default {
  components: {
    TableList
  },
  mixins: [tablemixin],
  data() {
    return {
      url: "/getlist",
      columns: [
        {
          title: "id",
          key: "id"
        },
        {
          title: "名称",
          key: "name"
        },
        {
          title: "值",
          key: "value"
        }
      ]
    };
  },
  created() {
    this.getList();
  },
  methods: {
    rowClick(row, index) {
      this.$router.push({ name: "detail", params: { detailId: row.id } });
    }
  }
};
</script>