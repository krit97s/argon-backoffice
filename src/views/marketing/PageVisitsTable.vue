<template>

  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col class="d-flex align-items-center">
          <h3 class="mb-0">การตลาด</h3>
          <base-button class="ml-auto" type="primary" size="sm"
            @click="$emit('changePage', meta.currentPage)">&#8634;</base-button>
          <base-button size="sm"  type="primary"
            @click="$router.push(`/addmarketing`)">เพิ่มข้อมูล</base-button>
        </b-col>
      </b-row>
    </template>

    <el-table class="table-responsive table text-nowrap" :data="tableData" header-row-class-name="thead-light">
      <el-table-column label="ลำดับ" prop="page" align="center">
        <template v-slot="{ row }">
          <div class="font-weight-600 text-primary text-nowrap">{{ tableData.indexOf(row) + 1 }}</div>
        </template>
      </el-table-column>
      <el-table-column label="ชื่อ" prop="name" min-width="150px">
        <template v-slot="{ row }">
          {{ row.name }}
        </template>
      </el-table-column>
      <el-table-column label="ลิงค์การตลาด" prop="name" min-width="400px">
        <template v-slot="{ row }">
          <a :href="urlMarketing + '/?s=' + row.id" class="text-primary" target="_blank">{{ urlMarketing+ '/?s=' + row.id
          }}</a>
        </template>
      </el-table-column>
      <el-table-column label="ลิงค์ช่อง" prop="name" min-width="400px">
        <template v-slot="{ row }">
          <a :href="row.url" class="text-primary" target="_blank">{{ row.url }}</a>
        </template>
      </el-table-column>
      <el-table-column label="แหล่งที่มา" prop="sourceName" min-width="150px">
        <template v-slot="{ row }">
          {{ row.sourceName }}
        </template>
      </el-table-column>
      <el-table-column label="ยอดเติม" prop="amount" min-width="150px">
        <template v-slot="{ row }">
          {{ row.amount }}
        </template>
      </el-table-column>
      <el-table-column label="action" prop="status" align="center" min-width="150px">
        <template v-slot="{ row }">
          <div class="text-center">
            <base-button type="primary" size="sm" @click="$router.push(`/editmarketing?id=${row.id}`)">แก้ไข</base-button>
            <base-button type="danger" size="sm" @click="removeOptionById(row.id)">ลบ</base-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <b-pagination class="mt-3 mr-3" :disabled="isLoading" @input="$emit('changePage',meta.currentPage)" v-model="meta.currentPage"
      :per-page="perPage" :total-rows="meta.totalLength" align="right"></b-pagination>
  </b-card>
</template>
<script>
import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown } from 'element-ui'
import moment from "moment"
export default {
  name: 'page-visits-table',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
  },
  data() {
    return {
      urlMarketing: process.env.VUE_APP_FRONT_DOMAIN
    }
  },
  props: {
    tableData: {
      type: Array,
      require: true
    },
    meta: {
      type: Object,
    },
    perPage: {
      type: Number,
    },
    isLoading: {
      type: Boolean,
    }
  },
  methods: {
    moment,
    async removeOptionById(id) {
      const confirm = window.confirm("ยืนยันการทำรายการ ?");
      if (confirm) {
        const response = await this.$store.dispatch("marketing/removeMarketing", id)
        if (response.status) {
          await this.$notify({
            title: 'สำเร็จ !',
            text: response.response.msg,
            type: 'success',
          });
          await this.$store.dispatch("marketing/onFetchMarketing", { page: 1, perPage: this.perPage })
        } else {
          this.$notify({
            title: 'ล้มเหลว !',
            text: response.response.msg,
            type: 'error',
          });
        }
      }
    },
  }
}
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
