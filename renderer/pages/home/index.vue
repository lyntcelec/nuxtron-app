<template>
  <div>
    <el-button type="primary" @click="clickLogout">Logout</el-button>
    <el-button type="primary" @click="clickSendMsg">Open New window</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
const { ipcRenderer } = require("electron")
// const fs = require("fs")
const Cookie = require("js-cookie")

// const fs = require("fs")
// console.log("-------------")
// console.log(__dirname)
// fs.readFile("file.txt", function(err: any, data: any) {
//   if (err) throw err
//   console.log(data.toString())
// })

ipcRenderer.on("asynchronous-reply", (event: any, arg: string) => {
  const message = `Asynchronous message reply: ${arg}`
  console.log(message)
})

@Component
export default class Home extends Vue {
  clickLogout() {
    // localStorage.removeItem("token")
    Cookie.remove("token")
    this.$router.push("/login")
  }

  clickSendMsg = async () => {
    console.log("Send message")
    ipcRenderer.send("asynchronous-message", "ping")
  }
}
</script>
