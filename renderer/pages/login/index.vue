<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          v-model="username"
          type="text"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': submitted && !username }"
        />
        <div v-show="submitted && !username" class="invalid-feedback">
          Username is required
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && !password }"
        />
        <div v-show="submitted && !password" class="invalid-feedback">
          Password is required
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">
          Login
        </button>
        <router-link to="/register" class="btn btn-link">
          Register
        </router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
const Cookie = require("js-cookie")

@Component
export default class login extends Vue {
  username: string = ""
  password: string = ""
  submitted: boolean = false

  handleSubmit() {
    this.submitted = true
    const { username, password } = this
    if (username && password) {
      // localStorage.setItem("token", "ABCDEF")
      Cookie.set("token", "ABCDEF", { expires: 30 })
      this.$router.push("/home")
    }
  }
}
</script>
