<template>
    <footer>
        <div>all rights reserved</div>
    </footer>
</template>

<script>
    export default {
        name: 'MainFooter',
    }
</script>

<style lang="scss">
    footer {
        display: flex;
        flex-direction: column;
        background-color: #FAFAFA;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #000000;
        padding: 30px;

        >div{
            width: fit-content;
            margin: auto;
        }
    }
</style>