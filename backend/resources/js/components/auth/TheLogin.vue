<template>
    <b-container class="theLogin" tag="main">
        <b-row>
            <b-col class="border rounded shadow">
                <b-alert
                    class="theLogin__alert shadow"
                    v-model="isError"
                    variant="danger"
                    dismissible
                >
                    {{ errorMessage }}
                </b-alert>
                <b-form
                    class="theLogin__form"
                    @submit="onSubmit"
                    @reset="onReset"
                >
                    <h5>ESUR - Авторизация</h5>
                    <hr/>
                    <b-form-group
                        id="input-group-login"
                        label="Адрес электронной почты:"
                        label-for="input-login"
                    >
                        <b-form-input
                            id="input-login"
                            v-model="form.login"
                            required
                            :disabled="isLoading"
                        />
                    </b-form-group>
                    <b-form-group
                        id="input-group-password"
                        label="Пароль:"
                        label-for="input-password"
                    >
                        <b-form-input
                            id="input-password"
                            type="password"
                            v-model="form.password"
                            required
                            :disabled="isLoading"
                        />
                    </b-form-group>
                    <hr/>
                    <b-form-group v-if="false" id="input-group-checkbox">
                        <b-form-checkbox
                            v-model="form.rememberMe"
                            :disabled="isLoading"
                        >
                            Запомнить меня
                        </b-form-checkbox>
                    </b-form-group>
                    <b-form-group
                        id="input-group-buttons"
                        class="theLogin__buttons"
                    >
                        <b-button v-if="isLoading" variant="primary" disabled>
                            <b-spinner small class="mr-1" />
                        </b-button>
                        <b-button
                            v-else
                            type="submit"
                            variant="outline-primary"
                        >
                            Войти
                        </b-button>
                        <b-button
                            class="ml-2"
                            type="reset"
                            variant="outline-secondary"
                            :disabled="isLoading"
                        >
                            Сброс
                        </b-button>
                    </b-form-group>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<!----------------------------------------------------------------------------------------------------------- script -->

<script>
import axios from "axios";
import { SET_IS_LOGGED } from "./authStore.js";

export default {
    name: "TheLogin",
    data: function() {
        return {
            form: {
                login: "",
                password: "",
                rememberMe: false
            },
            isLoading: false,
            errorMessage: ""
        };
    },
    computed: {
        isError: function() {
            return this.errorMessage.length > 0;
        }
    },
    methods: {
        async onSubmit(evt) {
            evt.preventDefault();
            this.isLoading = true;
            await axios.get("/sanctum/csrf-cookie").then(() =>
                axios
                    .post("/api/login", {
                        email: this.form.login,
                        password: this.form.password
                    })
                    .then(() => {
                        axios.get("/api/user").then(({ data }) => {
                            this.$store.dispatch(SET_IS_LOGGED, {
                                userName: data.name,
                                userInfo: data
                            });
                            this.$router.push({ path: "/" });
                        });
                    })
                    .catch(error => {
                        const key = Object.keys(error.response.data.errors)[0];
                        this.errorMessage = error.response.data.errors[key][0];
                    })
                    .finally(() => (this.isLoading = false))
            );
        },
        onReset(evt) {
            evt.preventDefault();
            this.form = {
                login: "",
                password: "",
                rememberMe: false
            };
        }
    }
};
</script>

<!------------------------------------------------------------------------------------------------------------ style -->

<style lang="scss">
@import "@/config.scss";
.theLogin {
    height: 100vh;
    margin-top: -$header-height;
    .row {
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .col {
        position: relative;
        min-width: 20rem;
        max-width: 30rem;
        padding: $spacer;
    }
    &__buttons {
        margin-bottom: 0 !important;

        > div {
            display: flex;
            justify-content: flex-end;
        }

        .btn {
            min-width: 8rem;
        }
    }
    &__alert.alert {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + #{$spacer});
    }
}
</style>
