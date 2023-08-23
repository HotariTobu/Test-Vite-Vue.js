import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'

import InitialApp from './InitialApp.vue'
import Reffect from './Reffect.vue'
import My from './My.vue'

const pinia = createPinia()

createApp(InitialApp).mount('#initial-app')
createApp(Reffect).use(pinia).mount('#reffect')
createApp(My).mount('#my')
