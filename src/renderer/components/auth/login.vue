<template>
    <div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-success" type="text" placeholder="Enter email">
                <span class="icon is-small is-left">
                    <font-awesome-icon icon="envelope" />
                </span>
                <span class="icon is-small is-right">
                     <font-awesome-icon icon="check-circle" />
                </span>
            </div>
            <p class="help is-success">This username is available</p>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" type="password" placeholder="Enter password">
                <span class="icon is-small is-left">
                     <font-awesome-icon icon="unlock-alt" />
                </span>
                <span class="icon is-small is-right">
                     <font-awesome-icon icon="times-circle" />
                </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
        </div>
    </div>
</template>

<script scoped>
    export default {

    }
</script>