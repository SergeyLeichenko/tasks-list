<template>
  <div class="todo">
    <div class="todo__block">
      <div class="todo__block_logo">
        <p class="logo">
          <img src="@/assets/images/Logo.png" alt="citi" title="citi" />
        </p>
      </div>
      <div class="wrap">
        <div class="todo__block_list">
          <h1 class="name">Thank you {{ user }}!</h1>
          <div class="lists">
            <div class="container">
              <section class="panel">
                <input
                  type="checkbox"
                  id="mark-all"
                  class="checkbox"
                  @click="selectAll"
                  :checked="areAllSelected"
                />
                <div class="panel__input-btn">
                  <input
                    v-model="newTask"
                    @keyup.enter="addTask"
                    placeholder="What do you need to do?"
                    autofocus
                    class="text-input"
                  />
                  <button @click="clearList" class="btn">Clear List</button>
                </div>
              </section>

              <section class="list">
                <ul class="list-item">
                  <li
                    v-for="(task, i) in tasks"
                    :key="i"
                    :class="{ done: isChecked(task) }"
                  >
                    <input
                      type="checkbox"
                      class="checkbox"
                      @click="check"
                      v-model="task.checked"
                    />

                    <div class="inp-t">
                      <input
                        type="text"
                        v-if="task === editingTask"
                        class="text-input"
                        @keyup.enter="endEditing(task)"
                        @blur="endEditing(task)"
                        v-model="task.text"
                      />

                      <label for="checkbox">{{ task.text }}</label>
                      <div class="list-btn">
                        <button class="delete" @click="removeTask(task)">
                          remove
                        </button>
                        <button class="edit" @click="editTask(task)">
                          edit
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTask: "",
      tasks: [
        {
          text: "This is an example task",
          checked: false,
        },
      ],
      editingTask: {},
      user: "",
    };
  },

  computed: {
    areAllSelected() {
      return (
        this.tasks.every((task) => {
          return task.checked;
        }) && this.tasks.length > 0
      );
    },
  },

  methods: {
    addTask() {
      const task = this.newTask.trim();
      if (task) {
        this.tasks.push({ text: task, checked: false });
        this.newTask = "";
      }
    },

    removeTask(task) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    },

    editTask(task) {
      this.editingTask = task;
    },

    endEditing(task) {
      this.editingTask = {};
      if (task.text.trim() === "") {
        this.removeTask(task);
      }
    },

    clearList() {
      this.tasks = [];
    },

    selectAll() {
      const targetValue = this.areAllSelected ? false : true;
      for (let i = 0; i < this.tasks.length; i++) {
        this.tasks[i].checked = targetValue;
      }
    },

    check(task) {
      task.checked = true;
    },

    isChecked(task) {
      return task.checked;
    },
  },
  mounted() {
    if (localStorage.getItem("auth")) {
      try {
        this.user = JSON.parse(localStorage.getItem("auth"));
      } catch (e) {
        localStorage.removeItem("auth");
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
@import "@/assets/style/todo.scss";
</style>
