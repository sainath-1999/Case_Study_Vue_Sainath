
export const ComponentA = {
    template: `
    <div class="col-md-12 col-xl-4">
      <div v-for="(item, index) in summaryData" :key="index" class="card comp-card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col">
              <h6 class="m-b-25">{{ item.title }}</h6>
              <h3 class="f-w-700 text-c-blue">{{ item.value }}</h3>
              <p class="m-b-0">{{ item.duration }} ({{ item.year }})</p>
            </div>
            <div class="col-auto">
              <i v-if="item.title === 'Impressions'" class="fas fa-eye bg-c-blue"></i>
              <i v-else-if="item.title === 'Goal'" class="fas fa-bullseye bg-c-green"></i>
              <i v-else-if="item.title === 'Impact'" class="fas fa-hand-paper bg-c-yellow"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  setup() {
    const summaryData = Vue.ref([]);

    const fetchData = () => {
      fetch('jsons/summary.json') 
        .then(response => response.json())
        .then(data => {
          summaryData.value = data.summary;
          console.log("summarydata", summaryData);
        })

        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
    Vue.onMounted(fetchData);

    return {
      summaryData
    };
  }


};


