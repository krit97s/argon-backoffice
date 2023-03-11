<template>

  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col class="d-flex align-items-center">
          <h3 class="mb-0">รายการแจ้งโอนเงิน (ทั้งหมด)</h3>
          <base-button type="primary" class="ml-auto" size="sm"
            @click="$emit('changePage', meta.currentPage)">&#8634;</base-button>
        </b-col>

      </b-row>
    </template>

    <el-table class="table-responsive table text-nowrap" :data="tableData" header-row-class-name="thead-light">
      <el-table-column label="orderid" min-width="170px" prop="page">
        <template v-slot="{ row }">
          <div class="font-weight-600 text-primary text-nowrap">{{ row.order_id }}</div>
        </template>
      </el-table-column>
      <el-table-column label="จำนวน" prop="amount" min-width="100px">
        <template v-slot="{ row }">
          <span class="text-primary"> {{
            row.amount.toLocaleString(undefined, {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="status" min-width="170px" prop="status" align="center">
        <template v-slot="{ row }">
          <b-badge pill :variant="row.status == 0 ? 'primary' : row.status == 1 ? 'success' : 'danger'"> {{
               row.status
            == 4 ? 'Queue' :
            row.status
            == 3 ? 'ติดต่อแอดมิน' : row.status == 0 ? 'รอดำเนินการ' : row.status == 1 ? 'สำเร็จ' : 'ยกเลิก'
          }}</b-badge>
        </template>
      </el-table-column>
    </el-table>
    <b-pagination class="mt-3 mr-3" :disabled="isLoading" @input="$emit('changePage',meta.currentPage)"
      v-model="meta.currentPage" :per-page="perPage" :total-rows="meta.totalLength" align="right"></b-pagination>
  </b-card>
</template>
<script>
import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown } from 'element-ui'
import moment from 'moment';
export default {
  name: 'page-visits-table',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
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
    moment
  },
  data() {
    return {

    }
  }
}
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
