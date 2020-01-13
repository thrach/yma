<template>
    <div id="app">
        <yma-navbar></yma-navbar>
        <div class="container">
            <div class="notification">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'yma'
  }
</script>
