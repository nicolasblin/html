<template>
  <card class="card" title="Activités récentes">
    <div v-for="acti in actis" :key="acti.id" class="acti">
      <p style="text-align:center;"><b>{{acti.name}}</b></p>
      <img v-if="acti.img" :src="acti.img">
      <p v-if="acti.desc">
        {{acti.desc}}  <i v-if="acti.date">(le {{acti.date}})</i>
      </p>
      <a v-if="acti.link" :href="acti.link" target="_blank">Plus d'infos</a>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      actis: [
        {
          "id":1,
          "name":"Acti1",
          "img":"https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2016/11/Activit%C3%A9-artisanale-commerciale-ou-lib%C3%A9rale.jpg",
          "desc":"EZnonvzovnz cijzepic vinzipz ze izenc ezipznpznczepn czpecpeoncp",
          "date":"01/01/2010",
          "link":"http://google.fr"
        },
        {
          "id":2,
          "name":"Acti1",
          "img":"https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2016/11/Activit%C3%A9-artisanale-commerciale-ou-lib%C3%A9rale.jpg",
          "desc":"EZnonvzovnz cijzepic vinzipz ze izenc ezipznpznczepn czpecpeoncp",
          "date":"01/01/2010"
        }
      ],
      members: [
        {
          image: require("@/assets/img/faces/face-0.jpg"),
          name: "Dj Khaled",
          status: "Offline"
        },
        {
          image: require("@/assets/img/faces/face-1.jpg"),
          name: "Creative Tim",
          status: "Available"
        },
        {
          image: require("@/assets/img/faces/face-1.jpg"),
          name: "Flume",
          status: "Busy"
        }
      ]
    };
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case "Offline":
          return "text-muted";
        case "Available":
          return "text-success";
        case "Busy":
          return "text-danger";
        default:
          return "text-success";
      }
    }
  }
};
</script>
<style>
 .acti img {
   max-width:100%;
 }

 .acti {
   background-color:#f1f1f1;
   color:black;
   margin-bottom: 20px;
   padding: 10px; 
   border-radius:5px;
 }
</style>
