<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="12" class="d-flex align-items-center">
        <h3 class="mb-0">เติมเงิน</h3>
        <a class="ml-auto" href="https://www.wepay.in.th/comp_export.php" target="_blank">คู่มือสินค้า</a>
      </b-col>
      <!-- <b-col cols="4" class="text-right">
        <a href="#!" class="btn btn-sm btn-primary">Settings</a>
      </b-col> -->
    </b-row>
    <validation-observer v-slot="{ handleSubmit }" ref="formValidator">
      <b-form @submit.prevent="handleSubmit(submitForm)">
        <h6 class="heading-small text-muted mb-4">ข้อมูลการตลาด</h6>
        <div class="pl-lg-4">
          <b-row>
            <b-col lg="6">
              <base-input name="Source" label="หมายเลขออเดร์ (กรณีไม่มีปล่อยว่าง)"
                placeholder="หมายเลขออเดอร์" v-model="form.order_id">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input :rules="{ required: true }" name="Source" label="UID" placeholder="ข้อมูลตัวละคร"
                v-model="form.pay_to_ref1">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input type="number" step="any" :rules="{ required: true }" name="Url" label="จำนวนเงิน"
                placeholder="จำนวนเงินที่ต้องการเติม" v-model="form.pay_to_amount">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input label="สินค้า" :rules="{ required: true }" name="SourceID">
                <select class="form-control" v-model="form.pay_to_company">
                  <option :value="product.pay_to_company" v-for="(product, index) in productList" :key="index">{{
                    product.name
                  }}</option>
                </select>
              </base-input>
            </b-col>
            <b-col lg="12" class="mt-3 text-right">
              <base-button type="success" nativeType="submit" size="larged" :loading="loading">ยืนยัน</base-button>
              <base-button type="danger" size="larged" @click="resetForm()">ล้างค่า</base-button>
            </b-col>
          </b-row>
        </div>
      </b-form>
    </validation-observer>
  </card>
</template>
<script>
import { mapState } from 'vuex';
export default {
  async created() {
    await this.$store.dispatch("product/onFetchProduct")
  },
  computed: {
    ...mapState({
      productList: (state) => state.product.productList,
    })
  },
  data() {
    return {
      loading:false,
      form: {
        order_id: '',
        pay_to_ref1: '',
        pay_to_company: '',
        pay_to_amount: ''
      }
    };
  },
  methods: {
    resetForm() {
      this.form = {
        name: '',
        url: '',
        sourceId: ''
      }
    },
    async submitForm() {
      this.loading = true
      const response = await this.$store.dispatch("payment/payment", this.form)
      this.loading = false
      if (response.status) {
        await this.$notify({
          title: 'สำเร็จ !',
          text: response.response.msg,
          type: 'success',
        });
        this.$router.push("/payment")
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
<style>

</style>
