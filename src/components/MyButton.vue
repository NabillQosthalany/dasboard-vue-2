<template>
  <v-btn text>
    <v-icon :class="iconClass">{{icon}}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props:{
    icon:{
      type:String,
      required:true
    }
  },
  computed:{
    iconClass(){
      return this.icon
    }
  }
}
</script>
