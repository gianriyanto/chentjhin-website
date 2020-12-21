<template>
  <div id="InlineInput">
    <label v-if="field.edit">
      <input
          class="input-editing"
          v-model="field.input"
          v-on:blur="field.edit=false; onChangeText(field.input); $emit('update')"
          v-on:keyup.enter="$event.target.blur()"
          v-focus>
    </label>
    <div v-else class="input-card">
      <div :class="applyInputStyle(field.input)">
        <label @click="onEditText"> {{field.input}} </label>
      </div>
      <font-awesome-icon v-if="field.isValid" class="check-icon" :icon="['fas', 'check-circle']" />
    </div>
  </div>
</template>

<script>
export default {
  field: "InlineInput",
  props: ['inputData'],
  data() {
    return {
      field: this.inputData,
    }
  },
  methods: {
    onEditText: function() {
      this.field.input = '';
      this.field.edit = true;
    },
    onChangeText: function(input) {
      //check if name input is valid
      if (input === '') {
        this.field.input = this.field.prompt;
        this.field.edit = false;
        this.field.isValid = false;
      } else {
        this.field.input = input.charAt(0).toUpperCase() + input.slice(1);
        this.field.isValid = true;
      }
    },
    applyInputStyle: function(input) {
      return [(input.length>0 && input !== this.field.prompt) ? 'input-has-value-style' : 'input-no-value-style']
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

#InlineInput{
  font-size: 19px;
  font-family: "Gilroy Bold", serif;

  .input-editing{
    font-family: "Gilroy Bold", serif;
    font-size: 19px;
    color: darkgrey;
    width: 290px;
    border: transparent;
    outline: transparent;
    background-color: transparent;
    border-bottom: 1px solid #5651ec;
  }

  .input-card{
    display: flex;
    flex-direction: row;
  }
  .check-icon{
    font-size: 14px;
    margin: 3px 0 0 8px;
    color: #1c1c1c;
  }
  .input-has-value-style{
    color: #5651ec;
  }
  .input-no-value-style{
    color: darkgrey;
    width: fit-content;
  }
}


</style>