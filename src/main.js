import {createApp} from 'vue'

// Font Awesome things
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faVideo,
    faMicrophone,
    faShare,
    faChartLine,
    faEllipsis,
    faHand,
    faComment,
    faUserGroup,
    faQuestion,
    faPhone
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import './index.css'
import router from './router'

const app = createApp(App)

library.add(
    faVideo, faMicrophone, faShare,
    faChartLine, faEllipsis, faHand, faComment, faUserGroup,
    faQuestion, faPhone
)

app.component('font-awesome-icon', FontAwesomeIcon)
    .use(router)

app.mount('#app')
