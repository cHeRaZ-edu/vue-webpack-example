<template>
    <div class="container">
        <h1>Hola mundo</h1>
        <div class="row">
            <div class="col-6">
                <img  class="img-vue img-fluid" alt="">
            </div>
            <div class="col-6">
                <img class="img-webpack img-fluid" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>
<style lang="scss">
    .img-vue {
        content:url("./assets/vue.png");
    }
    .img-webpack {
        content:url("./assets/webpack.svg");
    }
</style>