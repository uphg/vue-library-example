<template>
  <button @click="$emit('click')">
    <svg v-if="icon" :class="{ [`t-icon-${icon}`]: icon }" aria-hidden="true">
      <use :xlink:href="`#icon-${icon}`" />
    </svg>
    <span><slot /></span>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
