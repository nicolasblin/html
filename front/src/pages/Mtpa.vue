<template>
    <div class="row">
      <div class="col-md-6">
        <events page="mtpa"/>
      </div>
      <div class="col-md-6">
        <activities page="mtpa"/>
      </div>
    </div>
</template>
<script>
import Events from "./All/Events.vue";
import Activities from "./All/Activities.vue";
export default {
  components: {
    Events,
    Activities 
  }
};
</script>
<style>
</style>
