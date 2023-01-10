<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="12" class="d-flex align-items-center">
        <h3 class="mb-0">เพิ่มประกาศ</h3>
        <!-- <a class="ml-auto" href="https://www.wepay.in.th/comp_export.php" target="_blank">คู่มือสินค้า</a> -->
      </b-col>
      <!-- <b-col cols="4" class="text-right">
        <a href="#!" class="btn btn-sm btn-primary">Settings</a>
      </b-col> -->
    </b-row>
    <validation-observer v-slot="{ handleSubmit }" ref="formValidator">
      <b-form @submit.prevent="handleSubmit(submitForm)">
        <h6 class="heading-small text-muted mb-4">ข้อมูลประกาศ</h6>
        <div class="pl-lg-4">
          <b-row>
            <b-col lg="12">
              <base-input :rules="{ required: true }" name="Name" label="ข้อความ" placeholder="ข้อความ"
                v-model="form.text">
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
export default {
  data() {
    return {
      form: {
        text: '',
      }
    };
  },
  methods: {
    resetForm() {
      this.form = {
        text: '',
      }
    },
    async submitForm() {
      const response = await this.$store.dispatch("anounce/addAnounce", this.form)
      if (response.status) {
        await this.$notify({
          title: 'สำเร็จ !',
          text: response.response.msg,
          type: 'success',
        });
        this.$router.push("/anounce")
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
