<template>
    <div class="page-container">
        <mirrorCmp :list="list" :current="current"></mirrorCmp>
    </div>
</template>
<script>
import mirrorCmp from '@/components/mirrorCmp'
export default {
    name:'home',
    data() {
        return {
            list: ['~@/assets/imgs/1.jpg','~@/assets/imgs/2.jpg','~@/assets/imgs/3.jpg','~@/assets/imgs/5.jpg'],
            current:0
        }
    },
    methods: {},
    components: {
        mirrorCmp
    }
}
</script>
<style lang="less" scoped>

</style>