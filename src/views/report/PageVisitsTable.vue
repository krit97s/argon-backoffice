<template>

  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col class="d-flex align-items-center">
          <h3 class="mb-0">รายงานสถานะการเติม</h3>
          <base-button class="ml-auto" type="primary" size="sm"
            @click="$emit('changePage', meta.currentPage)">&#8634;</base-button>
        </b-col>
      </b-row>
    </template>

    <el-table class="table-responsive table text-nowrap" :data="tableData" header-row-class-name="thead-light">
      <el-table-column label="ลำดับ" prop="page" align="center">
        <template v-slot="{ row }">
          <div class="font-weight-600 text-primary text-nowrap">{{ tableData.indexOf(row) + 1 }}</div>
        </template>
      </el-table-column>
      <el-table-column label="หมายเลขออเดอร์" prop="order_id" min-width="100px">
        <template v-slot="{ row }">
          <span class="text-primary"> {{ row.order_id }}</span>

        </template>
      </el-table-column>
      <el-table-column label="Response" prop="response" min-width="200px" align="center">
        <template v-slot="{ row }">
          {{ row.response }}
        </template>
      </el-table-column>
      <el-table-column label="เวลา/เวลา ล่าสุด" prop="createAt" min-width="100px" align="center">
        <template v-slot="{ row }">
          {{ moment(row.createAt).format('DD/MM/YYYY HH:mm') }}
        </template>
      </el-table-column>

      <!-- <el-table-column label="action" prop="status" align="center" min-width="150px">
        <template v-slot="{ row }">
          <div class="text-center">
            <base-button type="primary" size="sm"
              @click="$router.push(`/editcategory?id=${row.id}`)">แก้ไข</base-button>
            <base-button type="danger" size="sm" @click="removeOptionById(row.id)">ลบ</base-button>
          </div>
        </template>
      </el-table-column> -->
    </el-table>
    <b-pagination class="mt-3 mr-3" :disabled="isLoading" @input="$emit('changePage',meta.currentPage)"
      v-model="meta.currentPage" :per-page="perPage" :total-rows="meta.totalLength" align="right"></b-pagination>
  </b-card>
</template>
<script>
import moment from 'moment'
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
    },
    isLoading: {
      type: Boolean,
    }
  },
  methods: {
    moment,
  }
}
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
