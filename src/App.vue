<template>
    <div>
        Name: <input v-model="name" type="text">
        <div class="alert alert-primary">Hello Component</div>
        <hello-component :name="name" :initialEnthusiasm="5" />
        <h1>Hello Decorator Component</h1>
        <hello-decorator-component :name="name" :initialEnthusiasm="5" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import HelloDecoratorComponent from "./components/HelloDecorator.vue";

export default Vue.extend({
    data() { return { name: "App.vue" }},
    components: {
        HelloComponent,
        HelloDecoratorComponent
    }
});
</script>