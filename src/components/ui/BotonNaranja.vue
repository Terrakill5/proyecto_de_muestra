<template>
    <button class="naranja btn" :to="anyProps.link">
        <slot></slot>
    </button>

</template>

<script setup>
import {defineProps} from "vue";
const anyProps = defineProps({
    link: String
});

</script>


<style scoped>

button {
  padding: 4px;
  margin: 0;
}
.naranja {
  background-color: rgb(253, 83, 4);
  color: white;
  
}

.naranja:hover {
  background-color: rgb(202, 121, 14);
}
</style>