<template>
  <input
    class="form-check-input"
    type="checkbox"
    :checked="isChecked"
    @change="handleChange"
    style="cursor: pointer"
  />
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useBotStore } from "@/stores/botStore";

const props = defineProps({
  sentenceId: String,
  checked: Boolean,
});

const store = useBotStore();
const isChecked = ref(props.checked);

function handleChange() {
  if (props.sentenceId) {
    isChecked.value = !isChecked.value;
    store.toggleDialogCheckStatus(props.sentenceId, isChecked.value);
  }
}
</script>
