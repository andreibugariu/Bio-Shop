<template>



    <body>
        <section class="hero is-primary is-fullheight">

            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-6 is-offset-3">

                        <h1 class="title">
                            Bine ai venit pe BioShop
                        </h1>
                        <h2 class="subtitle">
                            Bine ai venit pe BioShop!
                            Magazinul online care îți oferă accesul la un stil de viață sănătos. Indiferent dacă ești
                            comerciant și dorești să-ți vinzi produse cu ușurință, sau chiar ești client doritor de
                            produse proaspete aduse până la tine acasă, BioShop îți vine în ajutor. Fă-ți cont acum! Nu
                            a fost niciodată mai simplu să ai o alimentație sănătoasă!

                        </h2>
                        <h2 class="subtitle">
                            Pentru a incepe calatoria te rog sa iti alegi una din cele doua categorii de utilizator:

                        </h2>
                        <div class="buttons  are-large   is-centered">
                            <router-link to="/login" class="button is-dark">User</router-link>
                            <router-link to="/login_farmer" class="button is-light">Farmer</router-link>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </body>
    <footer class="footer">
        <p class="has-text-centered">Copyright (c) 2022</p>
    </footer>

</template>



<script>

export default {
    name:'FirstPage'
}


</script>


