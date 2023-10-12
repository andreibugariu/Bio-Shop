
<template>
    <NavComponent />
    <div class="page-success">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Multumesc</h1>

                <p>Comanda dumneavostra va fi procesata in 48 de ore</p>
            </div>
        </div>
        <footer class="footer">
            <p class="has-text-centered">Copyright (c) 2022</p>
        </footer>
    </div>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue'
export default {
    name: 'SuccessView',
    components: {
        NavComponent
    },
    mounted() {
        document.title = 'Success '
    },
}
</script>