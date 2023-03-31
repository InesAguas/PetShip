<template>
    <NavBar></NavBar>
    <div class="container">
        <div class="row mt-3">
            <h1>Adotar</h1>
        </div>
        <div class="row">
            <div class="col-3 mt-3">
                <p>Adsa</p>
                <p>Adsa</p>
                <p>Adsa</p>
                <p>Adsa</p>
                <p>Adsa</p>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col-auto mb-3"><CardAnimal></CardAnimal></div>
                    <div class="col-auto mb-3"><CardAnimal></CardAnimal></div>
                    <div class="col-auto mb-3"><CardAnimal></CardAnimal></div>
                    <div class="col-auto mb-3"><CardAnimal></CardAnimal></div>
                    <div class="col-auto mb-3"><CardAnimal></CardAnimal></div>
                    <div class="col-auto mb-3"><CardAnimal></CardAnimal></div>
                    <div class="col-auto mb-3"><CardAnimal></CardAnimal></div>
                    <div class="col-auto mb-3"><CardAnimal></CardAnimal></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
import CardAnimal from './CardAnimal.vue'

export default {

    name: 'PageAdotar',
    components: {
        NavBar,
        CardAnimal
    }
}

</script>