<template>
    <svg svg-inline svg-sprite class="svg">
        <use :xlink:href="sharp" :href="sharp"></use>
    </svg>
</template>

<script>
export default {
    name: "BaseSvgSprite",
    props: ["symbol"],
    data: function() {
        return {
            sharp: "#svg-sprite-" + this.symbol
        };
    }
};
</script>
