<template>
  <div id="get-todo" class="container">
    <input class="form-control" :value="newTodo" @change="getTodo" placeholder="Add todo" />
    <button class="btn btn-primary" @click="addTodo">Add Todo</button>
  </div>
</template>
<script>
export default {
  methods: {
    getTodo(event) {
      this.$store.dispatch("getTodo", event.target.value);
    },
    addTodo() {
      this.$store.dispatch("addTodo");
      this.$store.dispatch("clearTodo");
    }
  },
  computed: {
    newTodo() {
      return this.$store.getters.newTodo;
    }
  }
};
</script>