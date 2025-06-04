<script lang="ts">
import Create from "../../shared/components/create.component.vue";

/**
 * @component
 * @description A specialized dialog component for creating and editing Category entities.
 * This component wraps the generic create-and-edit component and adds category-specific
 * UI elements and validation.
 */
export default {
  name: "review-item-create-dialog",
  components: {Create},
  props: {
    item: null,
    visible: false
  },
  emits: ['cancel-requested', 'save-requested'],
  data() {
    return {
      submitted: false
    }
  },
  methods: {
    onCancelRequested() {
      this.$emit('cancel-requested');
    },
    onSaveRequested() {
      this.submitted = true;
      this.$emit('save-requested', this.item);
    }
  }
}
</script>

<template>
  <create :entity="item" :visible="visible" entity-name="Review"
                   @cancel-action-requested="onCancelRequested"
                   @save-action-requested="onSaveRequested">
    <template #content>
      <div class="p-fluid">
        <div class="field mt-5">
          <pv-float-label>
            <label for="title">Title</label>
            <pv-input-text id="title" v-model="item.title" :class="{ 'p-invalid': submitted && !item.title }"/>
          </pv-float-label>
          <pv-float-label>
            <label for="content">Content</label>
            <pv-input-text id="content" v-model="item.content" :class="{ 'p-invalid': submitted && !item.content }"/>
          </pv-float-label>
        </div>
      </div>
    </template>
  </create>

</template>

<style scoped>

</style>