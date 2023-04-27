<template>
  <v-col cols="12" md="2">
    <v-item v-slot="{active,toggle}">
      <v-card :color="active ? '#49d9a0' : 'white'"
              class="d-flex align-center rounded-xl"
              dark
              height="200"
              @click="toggle">
        <v-row>
          <v-col cols="12" sm="12">
            <v-list-item three-line class="mt-10">
              <v-list-item-content>
                <div class="mb-4">
                  <v-icon x-large :color="active ? 'white' : '#49d9a0'">
                   {{icon}}
                  </v-icon>
                </div>
                <v-list-item-subtitle :class="active? 'white--text' : 'black--text'">
                  {{title}}
                </v-list-item-subtitle>
                <v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'">
                </v-list-item-title>
                <strong>{{value}}</strong>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card>
    </v-item>
  </v-col>
</template>
<script>
export default{
  props: {
    icon:{
      type:String,
      required:true
    },
    title:{
      type:String,
      required:true,
    },
    value:{
      type:Number,
      required:true
    }

  }
  }

</script>
