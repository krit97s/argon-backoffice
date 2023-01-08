<template>
    <div>
        <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header ">
            <b-container fluid>
                <!-- Mask -->
                <span class="mask bg-gradient-primary opacity-8"></span>
                <!-- Header container -->
            </b-container>
        </div>

        <b-container fluid class="mt--6">
            <b-row>
                <b-col cols="12" class="mb-5 mb-xl-0">
                    <editForm />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import editForm from './editForm.vue';

export default {
    components: {
        editForm
    }
};
</script>
<style>

</style>
  