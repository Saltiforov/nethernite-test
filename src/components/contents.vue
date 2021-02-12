<template>
  <v-container>
    <v-row class= "row-package text-center"
           v-for="(item, index) in itemsView"
           :key="index"
           @click="$emit('update:popup-opened', true); $emit('update:popup-id', pagesView + index)">
      <h2>{{ item.name }}</h2>
      <h3>{{ item.version }}</h3>
      <!--      <p v-if="item.author != undefined">{{item.author.name}}</p>-->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'contents',

  data: () => ({
  }),
  props: {
    items: {
      type: Array,
      default: null
    },
    page: {
      type: Number,
      default: 5
    },
    popupOpened: {
      type: Boolean,
      default: false
    },
    popupId: {
      type: Number,
      default: null
    }
  },
  computed: {
    pagesView(){
      if (this.page === 1){
        return 0
      }
      return this.page * 10
    },
    itemsView(){
      return this.items.slice(this.pagesView, this.pagesView+10 )
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.text-center{
  cursor: pointer;
}
.row{
  padding-left: 10px;
}
.row-package{
  display: flex;
  align-items: center;
  h3{
    padding: 0 15px;
  }
  p{
    margin-bottom: 0;
  }
}
</style>
