<template>
  <card class="card-stats" :show-footer-line="true">
    <b-row>
      <b-col>
        <slot>
          <h5 class="card-title text-uppercase text-muted mb-0" v-if="title">{{ title }}</h5>
          <span class="h1 font-weight-bold mb-0" :class="bindColor ? parseFloat(subTitle) > 0 ? 'text-success' : 'text-danger' : ''"
            v-if="subTitle">{{ subTitle }}</span>
        </slot>
      </b-col>

      <b-col cols="auto" v-if="$slots.icon || icon">
        <slot name="icon">
          <div class="icon icon-shape text-white rounded-circle shadow" :class="[`bg-${type}`, iconClasses]">
            <i :class="icon"></i>
          </div>
        </slot>
      </b-col>
    </b-row>

    <p class="mt-3 mb-0 text-sm">
      <slot name="footer">

      </slot>
    </p>
  </card>
</template>
<script>
import Card from './Card.vue';

export default {
  name: 'stats-card',
  components: {
    Card
  },
  props: {

    bindColor: {
      type: Boolean
    },

    type: {
      type: String,
      default: 'primary'
    },
    icon: String,
    title: String,
    subTitle: String,
    iconClasses: [String, Array]
  }
};
</script>
<style>

</style>
