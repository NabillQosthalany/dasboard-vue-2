<template>
  <v-app id="inspire" :style="{background:$vuetify.theme.themes.dark.background}">
    <SideBar/>
    <SideBarRight/>
    <v-container>
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n4">
        <v-btn-toggle v-model="toggle_exclusive" tile group color="#49d9a0">
          <MyButton icon="fas fa-arrow-left"/>
          <MyButton icon="fas fa-arrow-right"/>
        </v-btn-toggle>
        <v-spacer></v-spacer>
        <v-btn color="#49d9a0" rounded dark>
          finish spirit
        </v-btn>
      </v-toolbar>
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n5">
        <v-toolbar-title>Sprint overview</v-toolbar-title>
        <v-btn color="#49d9a0" text class="ml-5">
          last sprint
        </v-btn>
      </v-toolbar>
      <v-item-group mandatory class="mt-n4">
        <v-container>
          <v-row justify="center" class="space">
            <DashboardItem title="Team Member" icon="fas fa-user" value="15"/>
            <DashboardItem title="Team Velocity" icon="fas fa-chart-bar" value="55"/>
            <DashboardItem title="Task Delivery" icon="fas fa-suitcase" value="45"/>
            <DashboardItem title="Spikes Delivery" icon="fas fa-search" value="25"/>
            <DashboardItem title="New Event" icon="fas fa-globe-africa" value="10"/>
          </v-row>
        </v-container>
      </v-item-group>
      <v-row clmt-n6>
        <v-col cols="12" sm="7">
          <v-chart class="chart mt-2" :option="option"/>
        </v-col>
        <v-col cols="12" md="5" sm="12">
          <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n2">
            <v-toolbar-title>Sprint stories</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn rounded small>
              See All
            </v-btn>
          </v-toolbar>
          <v-simple-table class="grey lighten-3">
            <template v-slot:default>
              <tbody>
              <tr v-for="item in orders" :key="item.name">
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
                <td>{{item.state}}</td>
                <td>{{item.count}}</td>
                <td><v-icon small>{{item.icon}}</v-icon></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n8">
        <v-spacer></v-spacer>
        <v-btn rounded small>
          Add Member
        </v-btn>
      </v-toolbar>
      <v-card class="rounded-lg">
        <v-row>
          <v-col cols="12" sm="3">
            <v-list subheader two-line >
              <v-list-item>
                <v-badge bordered bottom color="#49d9a0" dot offset-x="28" offset-y="22">
                  <v-list-item-avatar>
                    <v-avatar size="40">
                      <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                    </v-avatar>
                  </v-list-item-avatar>
                </v-badge>
                <v-list-item-content>
                  <v-list-item-title>AAE Idea</v-list-item-title>
                  <v-list-item-subtitle>32 Story</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="3">
            <v-list subheader two-line >
              <v-list-item>
                <v-badge bordered bottom color="#49d9a0" dot offset-x="28" offset-y="22">
                  <v-list-item-avatar>
                    <v-avatar size="40">
                      <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                    </v-avatar>
                  </v-list-item-avatar>
                </v-badge>
                <v-list-item-content>
                  <v-list-item-title>AAE Idea</v-list-item-title>
                  <v-list-item-subtitle>32 Story</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

  </v-app>

 </template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import {use} from 'echarts/core'
  import {CanvasRenderer} from 'echarts/renderers'
  import {PieChart} from 'echarts/charts'
  import SideBar from "@/components/SideBar";
  import SideBarRight from "@/components/SideBarRight"
  import {TitleComponent,TooltipComponent,LegendComponent} from 'echarts/components'
  import VChart, {THEME_KEY} from 'vue-echarts'
  import DashboardItem from "@/components/DashboardItem";
  import MyButton from "@/components/MyButton";
  use([
      CanvasRenderer,
      PieChart,
      TitleComponent,
      TooltipComponent,
      LegendComponent
  ])

  export default {
    name: 'Home',

    components: {
      MyButton,
      DashboardItem,
      SideBarRight,
      SideBar,
      HelloWorld,
      VChart
    },
    provide:{
  [THEME_KEY]:'green'
  },
    data:()=>({
      toggle_exclusive:1,
      orders:[
        {
          id:'P42',
          title:'Onboarding',
          state:'Delivered',
          count:3,
          icon:'fas fa-ellipsis-h'
        },
        {
          id:'P32',
          title:'User Profile',
          state:'Delivered',
          count:8,
          icon:'fas fa-ellipsis-h'
        },
        {
          id:'P56',
          title:'Landing Page',
          state:'Approved',
          count:12,
          icon:'fas fa-ellipsis-h'
        },
        {
          id:'P36',
          title:'Onboarding',
          state:'Approved',
          count:12,
          icon:'fas fa-ellipsis-h'
        },
        {
          id:'P42',
          title:'Settings',
          state:'Approved',
          count:9,
          icon:'fas fa-ellipsis-h'
        },
      ],
      option:{
        title:{
          text:'Burnsown chart',
          left:'left',
        },
        tooltip:{
          tirgger:'item',
          formater:'{a}<br/>{b} :{c} ({d}%)'
        },
        series:[
          {
            name:'Traffic Sources',
            type:'pie',
            radius:'55%',
            center:['45%','50%'],
            data:[
              {value:335,name:'Direct'},
              {value:310,name:'Email'},
              {value:234,name:'Ad Networks'},
              {value:135,name:'Video Ads'},
            ],
            emphasis:{
              itemStylle:{
                shadowBlur:10,
                shadowOffsetX:10,
                shadowColor:'rgba(0,0,0,0)'
              }
            }
          }
        ]
      }
    })
  }
</script>
<style>
.space{
  margin-left: -100px;
  margin-right: -100px;
}
</style>
