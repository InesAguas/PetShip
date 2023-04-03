<template>
    <div class="container mt-5 p-5 pt-3 rounded-3 border" style="max-width: 1000px; background-color:white;">
        <div class="row bg-blue-300">
            <h2 class="fw-bold mb-4" style="color: #653208;">{{ $t('formAnimalMsg.anunciar') }}</h2>
            <div class="col">
                <label for="nome" class="form-label">{{ $t('formAnimalMsg.nome') }}</label>
                <input type="text" id="nome" class="form-control" v-bind:placeholder="$t('formAnimalMsg.nome')" v-model="animal.nome">
                <label for="sexo" class="form-label">{{ $t('formAnimalMsg.sexo') }}</label>
                <select class="form-select" id="sexo" v-model="animal.sexo">
                    <option value="1">{{ $t('formAnimalMsg.sexos[0]') }}</option>
                    <option value="2">{{ $t('formAnimalMsg.sexos[1]') }}</option>
                </select>
                <label for="especie" class="form-label">{{ $t('formAnimalMsg.especie') }}</label>
                <select class="form-select" id="especie" v-model="animal.especie">
                    <option value="1">{{ $t('formAnimalMsg.especies[0]') }}</option>
                    <option value="2">{{ $t('formAnimalMsg.especies[1]') }}</option>
                </select>
                <label for="raca" class="form-label">{{ $t('formAnimalMsg.raca') }}</label>
                <select class="form-select" id="raca" v-model="animal.raca">
                    <option v-for="(item, index) in $tm('formAnimalMsg.racas')" :key="item" :value="index+1">{{item}}</option>
                </select>
                <label for="porte" class="form-label">{{ $t('formAnimalMsg.porte') }}</label>
                <select class="form-select" id="porte" v-model="animal.porte">
                    <option v-for="(item, index) in $tm('formAnimalMsg.portes')" :key="item" :value="index+1">{{item}}</option>
                </select>
                <label for="idade" class="form-label">{{ $t('formAnimalMsg.idade') }}</label>
                <select class="form-select" id="idade" v-model="animal.idade">
                    <option v-for="(item, index) in $tm('formAnimalMsg.idades')" :key="item" :value="index+1">{{item}}</option>
                </select>
                <label for="cor" class="form-label">{{ $t('formAnimalMsg.cor') }}</label>
                <select class="form-select" id="cor" v-model="animal.cor">
                    <option v-for="(item, index) in $tm('formAnimalMsg.cores')" :key="item" :value="index+1">{{item}}</option>
                </select>

            </div>
            <div class="col">
                <label for="distrito" class="form-label">{{ $t('formAnimalMsg.distrito') }}</label>
                <select class="form-select" id="distrito" v-model="animal.distrito">
                    <option value="1">Aveiro</option>
                    <option value="2">Beja</option>
                    <option value="3">Braga</option>
                    <option value="4">Bragança</option>
                    <option value="5">Castelo Branco</option>
                    <option value="6">Coimbra</option>
                    <option value="7">Évora</option>
                    <option value="8">Faro</option>
                    <option value="9">Guarda</option>
                    <option value="10">Leiria</option>
                    <option value="11">Lisboa</option>
                    <option value="12">Portalegre</option>
                    <option value="13">Porto</option>
                    <option value="14">Santarém</option>
                    <option value="15">Setúbal</option>
                    <option value="16">Viana do Castelo</option>
                    <option value="17">Vila Real</option>
                    <option value="18">Viseu</option>
                </select>
                <label for="etiqueta" class="form-label">{{ $t('formAnimalMsg.etiqueta') }}</label>
                <select class="form-select" id="etiqueta" v-model="animal.etiqueta">
                    <option v-for="(item, index) in $tm('formAnimalMsg.etiquetas')" :key="item" :value="index+1">{{item}}</option>
                </select>
                <label for="descricao" class="form-label">{{ $t('formAnimalMsg.descricao') }}</label>
                <textarea id="descricao" class="form-control" placeholder="Desccrição" v-model="animal.descricao"></textarea>
                <label for="imagens" class="form-label">{{ $t('formAnimalMsg.fotografias') }}</label>
                <input type="file" class="form-control" id="imagens" accept="image/*" multiple v-on:change="mostrarFotos">
                
                <div class="row row-cols-5 mt-3">
                <div class="col-2" v-for="p in preview" :key="p">
                    <img :src="p" width="60" height="60" class="rounded">
                </div>
            </div>
                <button type="button" class="btn px-5 mt-3 text-white fw-bold float-end"
                    style="background-color: #FD7E14;">{{ $t('formAnimalMsg.publicar') }}</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FormAnimal',
    data() {
        return {
            animal: {
                nome: null,
                sexo: 1,
                especie: 1,
                raca: 1,
                porte: 1,
                idade: 1,
                cor: 1,
                distrito: 1,
                etiqueta: 1,
                descricao: null,
                fotografias: null
            },
            racas: ["1", "2"],
            preview: []
        }
    },
    components: {
    },
    methods: {
        mostrarFotos(e) {
            this.preview = []
            for (let i = 0; i < e.target.files.length; i++) {
                this.preview.push(URL.createObjectURL(e.target.files[i]))
            }
        }
    }
}
</script>