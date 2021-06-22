<template>
  <div id="regDetails">
    <div v-if="error" class="error">
            {{ error }}
        </div>

        <ul v-if="regulations">
            <li v-bind="{ short_name, name  } in regulations">
                <strong>short_name:</strong> {{ short_name }},
                <strong>Name:</strong> {{ name }}
            </li>
        </ul>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
   data() {
        return {
            loading: false,
            regulations: null,
            error: null,
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
      fetchData() {
    this.error = this.regulations = null;
    this.loading = true;
    axios
        .get('/api/regulations')
        .then(response => {
            this.loading = false;
            this.regulations = response.data;
        }).catch(error => {
            this.loading = false;
            this.error = error.response.data.message || error.message;
        });
}
    }
}
</script>
<style scoped>
#regDetails{
  background-color: white;
  color: black;
  margin-top: 25px;
}
</style>