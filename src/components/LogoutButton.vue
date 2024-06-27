<template>
  <div>
    <button @click="signOut">Sign Out</button>
  </div>
</template>

<script>
import { signOut } from '../auth'

export default {
  methods: {
    signOut
  }
}
</script>
