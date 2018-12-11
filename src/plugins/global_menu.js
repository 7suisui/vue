
import mainbav from '../components/mainbav.vue'

const Myplugin = {}

Myplugin.install = function(Vue,options){
    Vue.component("mainbav",mainbav)
}

export default Myplugin