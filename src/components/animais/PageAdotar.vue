<template>
    <NavBar></NavBar>
    <div class="container">
        <div class="row mt-3">
            <h1 class="fw-bold" style="color: #653208">{{ $t('pageAdotar.titulo') }}</h1>
        </div>
        <div class="row">
            <div class="col-2 mt-3">
                <div class="mb-2">
                    <input type="search" class="form-control" placeholder="Pesquisar...">
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Distrito</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Qualquer</option>
                        <option v-for="(distrito, index) in distritos" :key="index" :value="distrito">{{ distrito }}</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Espécie</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Qualquer</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Raça</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Qualquer</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Idade</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Qualquer</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Sexo</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Qualquer</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Tamanho</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Qualquer</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Cor</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Qualquer</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>


            </div>
            <div class="col">
                <div class="row">
                    <div class="col-auto mb-3">
                        <CardAnimal></CardAnimal>
                    </div>
                    <div class="col-auto mb-3">
                        <CardAnimal></CardAnimal>
                    </div>
                    <div class="col-auto mb-3">
                        <CardAnimal></CardAnimal>
                    </div>
                    <div class="col-auto mb-3">
                        <CardAnimal></CardAnimal>
                    </div>
                    <div class="col-auto mb-3">
                        <CardAnimal></CardAnimal>
                    </div>
                    <div class="col-auto mb-3">
                        <CardAnimal></CardAnimal>
                    </div>
                    <div class="col-auto mb-3">
                        <CardAnimal></CardAnimal>
                    </div>
                    <div class="col-auto mb-3">
                        <CardAnimal></CardAnimal>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../NavBar.vue'
import CardAnimal from './CardAnimal.vue'

export default {

    name: 'PageAdotar',
    components: {
        NavBar,
        CardAnimal
    },
    data() {
        return {
            distritos: ["Aveiro", "Beja", "Braga", "Bragança", "Castelo Branco", "Coimbra", "Évora", "Faro", "Guarda", "Leiria", "Lisboa", "Portalegre", "Porto", "Santarém", "Setúbal", "Viana do Castelo", "Vila Real", "Viseu"]

        }
    }
}

</script>