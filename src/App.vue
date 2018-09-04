<template>
    <div>
        <app-nav-component />
        
        <router-view />

        <div class="col-sm-12">
            <div class="jumbotron text-center" v-if="isLoggedIn()">
                <h2>View Data</h2>                
                <router-link class="btn btn-lg btn-success" to="/private">Private Data</router-link>                
            </div>
            <div class="jumbotron text-center" v-else>
                <h2>Get Access to Private Data by Logging In</h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import HelloDecoratorComponent from "./components/HelloDecorator.vue";
import PublicComponent from "./components/Public.vue";
import PrivateComponent from "./components/Private.vue";
import AppNavComponent from "./components/AppNav.vue";
import { isLoggedIn } from "../utils/auth";

export default Vue.extend({
    data() { return { name: "App.vue" }},
    components: {
        HelloComponent,
        HelloDecoratorComponent,
        PublicComponent,
        PrivateComponent,
        AppNavComponent
    },
    methods: {
        isLoggedIn() {
            return isLoggedIn();
        }
    },
});
</script>