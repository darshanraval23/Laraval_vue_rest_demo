<template>
    <div>
        <h1>edit salary</h1>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';
export default {
    created() {
      const router = useRouter();
      if(!sessionStorage.getItem('token')){
        router.push('/signin');
      }
    }
}
</script>