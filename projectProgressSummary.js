
export const ProjectSummary = {
  setup() {
    const projectProgressSummary = Vue.ref([]);

  
    const fetchData = () => {
      fetch('jsons/Project_Progress_Summary.json') 
        .then(response => response.json())
        .then(data => {
          projectProgressSummary.value = data.project_progress_summary;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };


    Vue.onMounted(fetchData);

    return {
      projectProgressSummary
    };
  },
  template: `
  <div class="col-xl-12">
  <div class="card proj-progress-card">
    <div class="card-block">
      <div class="row">
        <div v-for="(project, index) in projectProgressSummary" :key="index" class="col-xl-3 col-md-6">
          <h6>{{ project.title }}</h6>
          <h5 class="m-b-30 f-w-700">{{ project.value }}<span :class="getTextClass(project.percentage)">{{ project.percentage }}</span></h5>
          <div class="progress">
            <div class="progress-bar" :class="getProgressBarColor(project.percentage)" :style="{ width: getProgressBarWidth(project.percentage) }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  methods: {
    getTextClass(percentage) {
      return percentage.includes('+') ? 'text-c-green m-l-10' : 'text-c-red m-l-10';
    },
    getProgressBarColor(percentage) {
      return percentage.includes('+') ? 'bg-c-green' : 'bg-c-red';
    },
    getProgressBarWidth(percentage) {
      const value = parseFloat(percentage);
      const normalizedValue = Math.min(Math.max(value, 0), 100);
      return `${normalizedValue}%`;
    }
  }
};
