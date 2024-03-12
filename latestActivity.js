export const LatestActivity = {
    template:`    <div class="col-xl-4 col-md-6">
    <div class="card latest-update-card">
      <div class="card-header">
        <h5>Latest Activity</h5>
        <div class="card-header-right">
          <ul class="list-unstyled card-option">
            <li class="first-opt"><i class="feather icon-chevron-left open-card-option"></i></li>
            <li><i class="feather icon-maximize full-card"></i></li>
            <li><i class="feather icon-minus minimize-card"></i></li>
            <li><i class="feather icon-refresh-cw reload-card"></i></li>
            <li><i class="feather icon-trash close-card"></i></li>
            <li><i class="feather icon-chevron-left open-card-option"></i></li>
          </ul>
        </div>
      </div>
      <div class="card-block">
        <div class="scroll-widget">
          <div class="latest-update-box">
            <div v-for="(activity, index) in latestActivity" :key="index" class="row p-t-20 p-b-30">
              <div class="col-auto text-right update-meta p-r-0">
                <i v-if="activity.activity_type === 'Devlopment & Update'" class="b-primary update-icon ring"></i>
                <i v-else-if="activity.activity_type === 'Showcases'" class="b-primary update-icon ring"></i>
                <i v-else-if="activity.activity_type === 'Miscellaneous'" class="b-success update-icon ring"></i>
                <i v-else class="b-danger update-icon ring"></i>
              </div>
              <div class="col p-l-5">
                <a :href="activity.readmore_link"><h6>{{ activity.activity_type }}</h6></a>
                <p class="text-muted m-b-0">{{ activity.activity }} <a :href="activity.readmore_link" class="text-c-blue">Read More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`,
setup() {

    const latestActivity = Vue.ref([]);

    const fetchData = () => {
      fetch('jsons/Latest_Activity.json') 
        .then(response => response.json())
        .then(data => {
          latestActivity.value = data.latest_activity;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    Vue.onMounted(fetchData);

    return {
      latestActivity
    };
  }
};