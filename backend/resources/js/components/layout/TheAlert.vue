<template>
    <div class="m-1">
        <div v-for="(alert, index) in messages" :key="index">
            <div class="alert alert-dismissible" :class="'alert-'+alert.type">
                <button type="button" class="close" data-dismiss="alert" @click="deleteAlert(index)">&times;</button>
                {{alert.message}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheAlert",
        props: ['alerts'],
        data(){
            return {
                messages: null
            };
        },
        watch: {
            alerts: function (newVal) {
                this.messages = newVal;
            }
        },
        methods: {
            deleteAlert(index) {
                this.messages.splice(index, 1);
            }
        }
    }
</script>
