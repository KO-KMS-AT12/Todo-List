<template>
  <div id="app" class="container">
    <h1>Todo List</h1>
    <hr />
    <div>
      <CompletedTodos></CompletedTodos>
    </div>
    <hr />
    <div>
      <GetTodo></GetTodo>
    </div>
    <hr />
    <div>
      <CurrentTodos></CurrentTodos>
    </div>
  </div>
</template>

<script>
import GetTodo from "./components/GetTodo.vue";
import CurrentTodos from "./components/CurrentTodos.vue";
import CompletedTodos from "./components/CompletedTodos.vue";

export default {
  components: {
    GetTodo,
    CurrentTodos,
    CompletedTodos
  }
};
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 48px;
  font-style: italic;
}
</style>
