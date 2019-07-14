<template>
  <div id="completed-todos">
    <h3 v-if="completed.length > 0">Completed({{completed.length}})</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="(todo,index) in completed" :key="index">
        {{todo.body}}
        <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-remove-circle"></span> Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

export default {
  methods: {
    ...mapActions(["removeTodo"]),
    remove: function(todo) {
      this.removeTodo(todo);
    }
  },
  computed: {
    ...mapGetters(["completedTodos"]),
    completed() {
      return this.completedTodos;
    }
  }
};
</script>