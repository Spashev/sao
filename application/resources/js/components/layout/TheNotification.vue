<template>
    <div>
        <div v-if="notifications" v-for="(notification, index) in notifications" :key="index">
            <div class="alert alert-dismissible" :class="'alert-'+notification.type">
                <button type="button" class="close" data-dismiss="alert" @click="deleteNotification(index)">&times;</button>
                {{notification.message}}
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {SET_NOTIFICATIONS} from "../../helpers";
    export default {
        name: "TheNotification",
        computed:{
            ...mapState({
                notifications: state => state.helpers.notifications
            })
        },
        methods: {
            deleteNotification(index) {
                this.notifications.splice(index, 1);
                this.$store.dispatch(SET_NOTIFICATIONS, this.notifications);
            }
        }

    }
</script>
