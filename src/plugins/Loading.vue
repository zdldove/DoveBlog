<template>
    <div>
        <div id="session" name="session" class="loading"></div>
    </div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.loading{width: 90%; margin: 5rem auto;  background:url('/static/tail-spin.svg') no-repeat left top; background-size: auto 100%;  text-indent: 2.8rem; height: 2rem; line-height: 2rem; }
.loading:after{
    content: 'loading';
    animation: loading 1.5s infinite;
    -moz-animation: loading 1.5s infinite;
}
</style>
