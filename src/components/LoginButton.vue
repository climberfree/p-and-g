<template>
  <div>
    <button @click="signInWithGoogle">Sign in with Google</button>
  </div>
</template>

<script>
import { signInWithGoogle } from '../auth'

export default {
  methods: {
    signInWithGoogle
  }
}
</script>
