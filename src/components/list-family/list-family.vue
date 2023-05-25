<template>
        <div :class="[arrayFamily[0].status === 'parent' ? 'preview-page__parent-block' : 'preview-page__children-block']">
            <div class="subtitle"> {{ arrayFamily[0].status === 'parent' ? ' Персональные данные' : 'Дети' }}</div>
            <div :class="[arrayFamily[0].status === 'parent' ? 'preview-page__parent-list' : 'preview-page__children-list']" v-for="item in arrayFamily" :key="item">
                <div :class="arrayFamily[0].status === 'parent' ? 'preview-page__one-parent' : 'preview-page__one-child'">
                    {{item.name}}, {{item.age}} лет
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'listFamily',
        props: ['arrayFamily'],
        computed:{
            getDataFamily (){
                return this.$store.getters.getFormData;
            }
        }
    }
</script>

<style lang="scss">
    .preview-page__parent-block {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .preview-page__parent-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .preview-page__one-parent {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #111111;
    }
    .preview-page__children-block {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .preview-page__children-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .preview-page__one-child {
        width: fit-content;
        padding: 10px 20px;
        background: #F1F1F1;
        border-radius: 5px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }
</style>