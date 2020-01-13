<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button" :class="registerClass" @click.prevent="$router.push('/register')">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button" :class="loginClass" @click.prevent="$router.push('/login')">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script scoped>
    export default {
        data() {
            return {
                currentRoute: this.$router.currentRoute.name
            }
        },

        computed: {
            registerClass() {
                return this.currentRoute === 'register' ? 'is-primary' : 'is-light';
            },

            loginClass() {
                return this.currentRoute === 'login' ? 'is-primary' : 'is-light';
            }
        },

        watch:{
            $route (to, from){
                this.currentRoute = to.name;
            }
        }
    }
</script>