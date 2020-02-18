<template>
  <card class="card" title="Activités récentes">
    <div v-for="acti in goodactis" :key="acti.id" class="acti">
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
          "name":"Les Automniales",
          "img":"https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/71004256_1162070787316047_7796058197126545408_n.png?_nc_cat=101&_nc_ohc=Ghkq9uoLIhkAX_i6Spn&_nc_ht=scontent-cdt1-1.xx&oh=02ae7c021246d9a1c2b8c4cbce58079e&oe=5EF80524",
          "desc":"Une course autour de l'étang saint Nicolas",
          "date":"17/10/2019",
          "link":"https://www.facebook.com/events/397282894311952/",
          "user": "mtpa"
        },
        {
          "id":2,
          "name":"Ventes de goodies",
          "img":"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/84847998_531906564103325_7829343188648198144_n.png?_nc_cat=110&_nc_ohc=vfupuU3QOz4AX9GS5Xb&_nc_ht=scontent-cdg2-1.xx&oh=bbdd964e9911fb6d967e2682a81781a6&oe=5EF9B26C",
          "desc":"Achetez les goodies de l'école à prix vraiment pas cher",
          "date":"06/02/2020",
          "user":"bde"
        },
        {
          "id":3,
          "name":"Clean Walk",
          "img":"https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/84817776_2678454312268381_7462024047757361152_n.jpg?_nc_cat=106&_nc_ohc=odUJtJ1g2ZcAX9jqVg_&_nc_ht=scontent-cdt1-1.xx&oh=014c97cfa5f555f5a83266c8220b247a&oe=5EFA7463",
          "desc":"L'équipe du Maker center a réalisé une clean walk pour nettoyer Angers",
          "date":"20/12/2019",
          "user":"makercenter"
        },
        {
          "id":4,
          "name":"Passage de marque Junior Initiative",
          "img":"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/72771094_10157832570054225_1481754036263714816_o.jpg?_nc_cat=102&_nc_ohc=5_ygPAtRO4cAX8ZE8Z-&_nc_ht=scontent-cdg2-1.xx&oh=71900db0d3beff9fbd0a14d4ad1d3b90&oe=5EBF814E",
          "desc":"L'UAEC est labélisée et dipose désormais d'un nouveau statut",
          "date":"30/01/2020",
          "user":"uaecjuniorconseil"
        }
      ]
    };
  },
  props: {
    page: String
  },
  computed: {
    goodactis: function() {
      if(this.page == "All") {
        return this.actis.slice(1);
      } else {
        return this.actis.filter(item => item.user == this.page);
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
