import http from "@/api/http.js";
export default {
    data() {
        return {
            size: 10,
            index: 1,
            total: null,
            loading: false,
            list: []
        }
    },
    methods: {
        changePage(current) {
            this.index = current;
            this.getList();
        },
        changePageSize(pageSize) {
            this.size = pageSize;
            this.getList();
        },
        getList() {
            this.loading = true;
            http
                .get({
                    url: this.listUrl,
                    params: {
                        ...this.listParams,
                        index: parseInt(this.index - 1),
                        size: this.size
                    }
                })
                .then(res => {
                    this.loading = false;
                    if (res.data && res.data.status === "OK") {
                        this.list = res.data.result;
                        this.total = res.data.total;
                    } else {
                        this.$Message.error((res.data && res.data.msg) || "获取列表失败");
                    }
                })
                .catch(error => {
                    this.loading = false;
                    this.list = [{
                        name: 'aaa',
                        id: 1,
                        value: 10
                    }];
                    this.$Message.error(error.msg || "获取列表失败");
                });
        }
    }
}