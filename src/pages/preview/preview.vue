<template>
    <div class="preview-page">
        <listFamily v-if="getDataFamily[0]" :arrayFamily="getDataFamily[0]"/>
        <listFamily v-if="getDataFamily[1]" :arrayFamily="getDataFamily[1]"/>
    </div>
</template>

<script>
    import listFamily from '../../components/list-family/list-family.vue';

    export default {
        name: 'PreviewPage',
        components: {
            listFamily
        },
        computed:{
            getDataFamily (){
                return this.$store.getters.getFormData;
            }
        }
    }
</script>

<style lang="scss">
    .preview-page {
        display: flex;
        flex-direction: column;
        gap: 60px;
    }
</style>