import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css'
import "material-design-icons-iconfont/dist/material-design-icons.css"

import Vuetify from 'vuetify/lib/framework';
import 'echarts'

Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        Iconfont:`fa` || `md`
    },
    theme:{
        themes:{
            dark:{
                background:'#eee'
            }
        }
    }
});
