<template>
  <button class="button" :class="{ [`icon-${iconPosition}`]: iconPosition }" @click="$emit('click')">
    <span
      v-if="iconPosition"
      class="button-icon"
    >+</span>
    <span class="button-text"><slot /></span>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    iconPosition: {
      type: String,
      default: 'left'
    }
  }
}
</script>
<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
}
.icon-left {
  & > .button-icon {
    order: 1;
  }
  & > .button-text {
    order: 2;
  }
}
.icon-right {
  & > .button-icon {
    order: 2;
  }
  & > .button-text {
    order: 1;
  }
}
</style>
