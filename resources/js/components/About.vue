<template>
  <h1>About Page</h1>
</template>
<script>
import axios from "axios";

export default {
   methods: {
        async mounted() {
          console.warn('ok');
            let resualt = await axios.get(`http://127.0.0.1:8000/api/viewusers`);
            console.warn(resualt);
        },

    }
}
</script>