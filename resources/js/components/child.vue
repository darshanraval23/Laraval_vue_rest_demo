<template>
    <div>
        <h1>child route</h1>
        <button @click="use">click me</button>
    </div>
</template>
<script>
import {useRouter,useRoute} from 'vue-router'
import { createStore } from 'vuex'
export default {
    methods:{
        use(){
            console.log('ok');
            const router = useRouter();
            router.push('/'); 
        }
    },
    created(){
        // this.use();
const store = createStore();
    store.commit('increment')
    console.log(store.state.count)
    }
}
</script>