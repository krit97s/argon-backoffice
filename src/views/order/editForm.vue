<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="12" class="d-flex align-items-center">
        <h3 class="mb-0">แก้ไขออเดอร์</h3>
        <!-- <a class="ml-auto" href="https://www.wepay.in.th/comp_export.php" target="_blank">คู่มือสินค้า</a> -->
      </b-col>
      <!-- <b-col cols="4" class="text-right">
        <a href="#!" class="btn btn-sm btn-primary">Settings</a>
      </b-col> -->
    </b-row>

    <validation-observer v-slot="{ handleSubmit }" ref="formValidator">
      <b-form @submit.prevent="handleSubmit(submitForm)" v-if="order">
        <h6 class="heading-small text-muted mb-4">ข้อมูลออเดอร์</h6>
        <div class="pl-lg-4">
          <b-row>
            <b-col lg="6">
              <base-input :rules="{ required: true }" name="orderNumber" label="หมายเลขออเดอร์"
                placeholder="หมายเลขออเดอร์" v-model="order.order_id">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input :rules="{ required: true }" name="orderNumber" label="ชื่อลูกค้า" placeholder="ชื่อลูกค้า"
                v-model="order.customer_name">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input :rules="{ required: true }" name="ref" label="UID" placeholder="UID" v-model="order.ref">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input :rules="{ required: true }" name="orderNumber" label="ส่วนลด" placeholder="ส่วนลด"
                v-model="order.discount">
              </base-input>
            </b-col>

            <b-col lg="6">
              <base-input label="สินค้า" :rules="{ required: true }" name="product">
                <select class="form-control" v-model="order.pay_to_company">
                  <option :value="product.pay_to_company" v-for="(product, index) in productList" :key="index">{{
                    product.name
                  }}</option>
                </select>
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input label="สถานะ" :rules="{ required: true }" name="status">
                <select class="form-control" v-model="order.status">
                  <option :value="item.value" v-for="(item, index) in statusList" :key="index">{{
                    item.title
                  }}</option>
                </select>
              </base-input>
            </b-col>
            <b-col lg="12" class="mt-3 text-right">
              <base-button type="success" nativeType="submit" size="larged">ยืนยัน</base-button>
              <base-button type="danger" size="larged" @click="resetForm()">ล้างค่า</base-button>
            </b-col>
          </b-row>
        </div>

      </b-form>
    </validation-observer>
  </card>
</template>
<script>
import moment from 'moment';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      productList: (state) => state.product.productList,
      order: (state) => state.order.order,
    })
  },
  data() {
    return {
      statusList: [
        {
          title: "รอดำเนินการ",
          value: 0,
        },
        {
          title: "สำเร็จ",
          value: 1,
        },
        {
          title: "ยกเลิก",
          value: 2,
        },
        {
          title: "ติดต่อแอดมิน",
          value: 3,
        },
        {
          title: "Queue",
          value: 4,
        },
      ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch("product/onFetchProduct")
      await this.$store.dispatch("order/onFetchOrderById", { id: this.$route.query.id })
    },
    async submitForm() {
      this.order.createAt = new moment().format("YYYY-MM-DD HH:mm:ss")
      const response = await this.$store.dispatch("order/updateOrder", this.order)
      if (response.status) {
        await this.$notify({
          title: 'สำเร็จ !',
          text: response.response.msg,
          type: 'success',
        });
        this.$router.push("/")
      } else {
        this.$notify({
          title: 'ล้มเหลว !',
          text: response.response.msg,
          type: 'error',
        });
      }
    },
  }
};
</script>
<style></style>
