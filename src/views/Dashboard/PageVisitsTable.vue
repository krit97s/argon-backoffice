<template>

  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">รายการออเดอร์</h3>
        </b-col>
      </b-row>
    </template>

    <el-table class="table-responsive table text-nowrap" :data="tableData" header-row-class-name="thead-light">
      <el-table-column label="orderid" min-width="170px" prop="page">
        <template v-slot="{ row }">
          <div class="font-weight-600 text-primary text-nowrap">{{ row.order_id }}</div>
        </template>
      </el-table-column>
      <el-table-column label="game" min-width="170px" prop="product_name">
        <!-- <template v-slot="{ row }">
          <div class="text-nowrap overflow-auto">
            {{ row.product_name }}
          </div>
        </template> -->
      </el-table-column>
      <el-table-column label="customer" min-width="170px" prop="customer_name">
        <!-- <template v-slot="{ row }">

          <div class="text-nowrap overflow-auto">
            {{ row.customer_name }}
          </div>
        </template> -->
      </el-table-column>
      <el-table-column label="ref" min-width="170px" prop="ref">
        <!-- <template v-slot="{ row }">
          <div class="text-nowrap overflow-auto">
            {{ row.ref }}
          </div>
        </template> -->
      </el-table-column>
      <el-table-column label="company" min-width="170px" prop="pay_to_company">
        <!-- <template v-slot="{ row }">
          <div class="text-nowrap overflow-auto">
            {{ row.pay_to_company }}
          </div>
        </template> -->
      </el-table-column>
      <el-table-column label="price list" min-width="170px" prop="price_list">
        <template v-slot="{ row }">
          <span v-for="(item, index) in row.price_list " :key="index">
            {{ item }}
            <span v-if="index !== row.price_list.length - 1">,</span>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="amount" min-width="150px" prop="amount">
        <template v-slot="{ row }">
          {{ row.amount }}
        </template>
      </el-table-column>
      <el-table-column label="source" min-width="100px" prop="source" align="center">
        <template v-slot="{ row }">
          <div class="text-nowrap overflow-auto">
            {{ row.source || '-' }}
          </div>
        </template>
      </el-table-column>
      <!-- <el-table-column label="type" min-width="90px" prop="type">
        <template v-slot="{ row }">
          <b-badge pill :variant="row.type == 'gtopup' ? 'primary' : ''"> {{ row.type == 'gtopup' ? 'เติมเกม' : ''
}}</b-badge>
        </template>
      </el-table-column> -->
      <!-- <el-table-column label="payment" min-width="90px" prop="payment_status">
        <template v-slot="{ row }">
          <b-badge pill :variant="row.payment_status == 0 ? 'warning' : 'success'"> {{ row.payment_status == 0 ?
    'รอชำระเงิน' : 'ชำระเงินแล้ว'
}}</b-badge>
        </template>
      </el-table-column> -->
      <el-table-column label="status" min-width="170px" prop="status">
        <template v-slot="{ row }">
          <b-badge pill :variant="row.status == 0 ? 'primary' : row.status == 1 ? 'success' : 'danger'"> {{
            row.status
              == 0 ? 'รอดำเนินการ' : row.status == 1 ? 'สำเร็จ' : 'ยกเลิก'
          }}</b-badge>
        </template>
      </el-table-column>
    </el-table>
    <b-pagination class="mt-3 mr-3" @input="$emit('changePage',meta.currentPage)" v-model="meta.currentPage"
      :per-page="perPage" :total-rows="meta.totalLength" align="right"></b-pagination>
  </b-card>
</template>
<script>
import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown } from 'element-ui'
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
    }
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
