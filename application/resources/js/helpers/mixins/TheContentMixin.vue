<script>
    import {SET_BREADCRUMBS} from "../../helpers";
    import {SET_NOTIFICATIONS} from "../../helpers";

    export default {
        name: "TheContentMixin",
        methods:{
            generateBreadcrumb(breadcrumbs) {
                this.$store.dispatch(SET_BREADCRUMBS, breadcrumbs);
            },
            getTitle(breadcrumbs){
                return breadcrumbs[breadcrumbs.length - 1].text;
            },
            setNotifications(notifications) {
                this.$store.dispatch(SET_NOTIFICATIONS, notifications);
            },
            scrollToTop() {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })
            },
        }
    }
</script>
