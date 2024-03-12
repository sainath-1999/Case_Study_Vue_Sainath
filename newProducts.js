export const NewProducts = {
    template:`  <div class="col-md-12">
    <div class="card table-card">
      <div class="card-header">
        <h5>New Products</h5>
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
      <div class="card-block p-b-0">
        <div class="table-responsive">
          <table class="table table-hover m-b-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Product Code</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in newProducts" :key="index">
                <td>{{ product.name }}</td>
                <td>{{ product.product_code }}</td>
                <td>{{ product.customer }}</td>
                <td>
                  <label v-if="product.status === 'In Stock'" class="label label-success">In Stock</label>
                  <label v-else-if="product.status === 'Out Stock'" class="label label-danger">Out Stock</label>
                </td>
                <td>
                  <a v-for="n in 5" :key="n" :class="['fa', 'fa-star', 'f-12', n <= product.rating ? 'text-c-yellow' : 'text-default']" href="#!"></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>`,
  setup() {
    const newProducts = Vue.ref([]);

    const fetchData = () => {
      fetch('jsons/New_Products.json') 
        .then(response => response.json())
        .then(data => {
          newProducts.value = data.new_products;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };
    
    Vue.onMounted(fetchData);

    return {
      newProducts
    };
  }
};
