<template>
  <div id="get-todo" class="container">
    <input class="form-control" :value="newTodos" @change="getTodo" placeholder="Add todo" />
    <button class="btn btn-primary" @click="addTodo">Add Todo</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

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
    ...mapGetters(['newTodo']),
    newTodos() {
      return this.newTodo;
    }
  }
};
</script>