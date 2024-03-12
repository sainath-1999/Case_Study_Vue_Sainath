import {ComponentA} from "./summary.js";
import {ProjectSummary} from "./projectProgressSummary.js";
import {NewProducts} from "./newProducts.js";
import { WhatsNew } from "./whatsNew.js";
import { LatestActivity } from "./latestActivity.js";
const app = Vue.createApp({
    template:
    `
     <div>
     <component-a></component-a> 
     <project-summary></project-summary>
     <whats-new></whats-new>
     <latest-activity></latest-activity>
     <new-product></new-product>
    </div>`,
    setup(){
       
    } 
})
app.component('component-a', ComponentA);
app.component('project-summary', ProjectSummary);
app.component('new-product', NewProducts);
app.component('whats-new', WhatsNew);
app.component('latest-activity', LatestActivity);
app.mount('#app');

