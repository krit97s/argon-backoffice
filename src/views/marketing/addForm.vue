<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="12" class="d-flex align-items-center">
        <h3 class="mb-0">การตลาด</h3>
        <!-- <a class="ml-auto" href="https://www.wepay.in.th/comp_export.php" target="_blank">คู่มือสินค้า</a> -->
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
              <base-input :rules="{ required: true }" name="Source" label="ชิ่อ"
                placeholder="ํFacebook, Youtube, Google" v-model="form.name">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input :rules="{ required: true }" name="Url" label="ลิงค์ช่อง" placeholder="https://yotube.com"
                v-model="form.url">
              </base-input>
            </b-col>
            <b-col lg="12">
              <base-input label="แหล่งที่มา" :rules="{ required: true }" name="SourceID">
                <select class="form-control" v-model="form.sourceId">
                  <option :value="source.id" v-for="(source, index) in source" :key="index">{{ source.name }}</option>
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
import { mapState } from 'vuex';
export default {
  async created() {
    await this.$store.dispatch("source/onFetchSource", { page: '', perPage: '' })
  },
  computed: {
    ...mapState({
      source: (state) => state.source.sourceList,
    })
  },
  data() {
    return {
      form: {
        name: '',
        url: '',
        sourceId: ''
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
      const response = await this.$store.dispatch("marketing/addMarketing", this.form)
      if (response.status) {
        await this.$notify({
          title: 'สำเร็จ !',
          text: response.response.msg,
          type: 'success',
        });
        this.$router.push("/marketing")
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
