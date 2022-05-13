import "bootstrap/dist/css/bootstrap.css";

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app')
import "bootstrap/dist/js/bootstrap.js";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUserSecret)

/* add font awesome icon component */
App.component('font-awesome-icon', FontAwesomeIcon)

App.config.productionTip = false