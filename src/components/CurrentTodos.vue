<template>
  <div id="current-todos" class="container">
    <h3 v-if="todoList.length > 0">Current({{todoList.length}})</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="(todo,index) in todoList" :key="index">
        {{todo.body}}
        <div class="btn-group">
          <button type="button" @click="edit(todo)" class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-edit"></span> Edit
          </button>
          <button type="button" @click="complete(todo)" class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-ok-circle"></span> Complete
          </button>
          <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-remove-circle"></span> Remove
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["editTodo","completeTodo","removeTodo"]),
    edit: function(todo) {
      this.editTodo(todo);
    },
    complete: function(todo) {
      this.completeTodo(todo);
    },
    remove:function(todo) {
      this.removeTodo(todo);
    }
  },
  computed: {
    ...mapGetters(['todos']),
    todoList:function() {
      return this.todos;
    }
  }
};
</script>
<style>
.btn-group {
  float: right;
}
</style>