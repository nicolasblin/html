<template>
    <div class="row">
      <div class="col-md-6">
        <events page="uaecjuniorconseil"/>
      </div>
      <div class="col-md-6">
        <activities page="uaecjuniorconseil"/>
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
