<template>
  <card class="card" title="Evenements à venir">
    <div v-for="acti in goodevents" :key="acti.id" class="event">
      <div class="col-md-6 a">
        <img v-if="acti.img" :src="acti.img">
        <b><a v-if="acti.link" :href="acti.link" target="_blank">Lien</a></b>
      </div>
      <div class="col-md-6 a">
        <p style="text-align:center;"><b>{{acti.name}}</b></p>
        <p v-if="acti.desc">
          {{acti.desc}}  <i v-if="acti.date">(le {{acti.date}})</i>
        </p>
      </div>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      events: [
        {
          "id":1,
          "name":"Repair café",
          "img":"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/84728128_2680555305391615_6020227668501331968_n.jpg?_nc_cat=109&_nc_ohc=HFHO3JUpreAAX8ppRnD&_nc_ht=scontent-cdg2-1.xx&oh=d6ebfa98fd96b43ae10bcb9e308929eb&oe=5EF98361",
          "desc":"Venez réparer vos objets éléctronique au fablab",
          "date":"23/02/2020",
          "link":"https://www.facebook.com/events/549733322555945/",
          "user":"makercenter"
        },
        {
          "id":2,
          "name":"20000 Bpm sous les Mers #2",
          "img":"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/84074832_161802151905089_7585900679919566848_n.jpg?_nc_cat=107&_nc_ohc=pwQBtwZBAkgAX8uxSez&_nc_ht=scontent-cdg2-1.xx&oh=1c1228fa603644fae76cad17da10b023&oe=5EFC3B21",
          "desc":"Ca va etre le turfu à la péniche",
          "date":"19/02/2020",
          "user":"polytek",
          "link":"https://www.facebook.com/events/469798077025966/"
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
  props: {
    page: String
  },
  computed: {
    goodevents: function() {
      if(this.page == "All") {
        return this.events;
      } else {
        return this.events.filter(item => item.user == this.page);
      }
    }
  }
};
</script>
<style>
 .event img {
   max-width:100%;
 }

 .event {
   background-color:#f1f1f1;
   color:black;
   margin-bottom: 20px;
   padding: 10px; 
   border-radius:5px;
 }

 .a {
   display: inline-block;
 }
</style>
