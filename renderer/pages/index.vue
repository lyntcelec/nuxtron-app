<template>
  <div class="container">
    <p>
      <NuxtLink to="/home">
        Click to Home
      </NuxtLink>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({
  // middleware: "auth"
  // layout: "main"
})
export default class Index extends Vue {
  mounted(): void {
    // console.log("INDEX =====")
    this.$router.push("/home")
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
