<script>
import {FilterMatchMode} from '@primevue/core/api';

export default {
  name: "data-manager",
  inheritAttrs: false,
  props: {
    items: {type: Array, required: true},
  },
  emits: ['new-item-requested', 'edit-item-requested', 'delete-item-requested', 'delete-selected-items-requested'],
  data() {
    return {
      selectedItems: [],
      filters: null
    }
  },
  methods: {
    initFilters() {
      this.filters = {global: {value: null, matchMode: FilterMatchMode.CONTAINS}};
    },
    newItem() {
      this.$emit('new-item-requested');
    },
    confirmDeleteItem(item) {
      this.$confirm.require({
        message:      `Are you sure you want to delete this ${this.title}?`,
        header:       'Confirmation',
        icon:         'pi pi-exclamation-triangle',
        rejectClass:  'p-button-secondary p-button-outlined',
        rejectLabel:  'Cancel',
        acceptLabel:  'Delete',
        acceptClass:  'p-button-danger',
        accept:       () => this.$emit('delete-item-requested', item),
        reject:       () => {}
      });
    },
  },
  created() {
    this.initFilters();
  },

}
</script>

<template>
  <pv-toolbar class="mb-4">
    <template #start>
      <pv-button class="mr-2" icon="pi pi-plus" label="New" severity="success" @click="newItem"/>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>