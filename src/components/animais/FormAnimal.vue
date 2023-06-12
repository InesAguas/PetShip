<template>
    <div class="container mt-5 p-5 pt-3 rounded-3 border" style="max-width: 1000px; background-color:white;">
        <div class="row bg-blue-300">
            <div class="row">
            <h2 class="fw-bold mb-4" style="color: #653208;">{{ $t('formAnimalMsg.anunciar') }}</h2>
            
        </div>
            <div class="col-10 col-sm-8 col-md-6 offset-md-0 offset-sm-2  offset-1" >
                <label for="nome" class="form-label">{{ $t('formAnimalMsg.nome') }}</label>
                <input type="text" id="nome" class="form-control" v-bind:placeholder="$t('formAnimalMsg.nome')" v-model="animal.nome">
                <label for="sexo" class="form-label">{{ $t('formAnimalMsg.sexo') }}</label>
                <select class="form-select" id="sexo" v-model="animal.sexo">
                    <option v-bind:value="1">{{ $t('formAnimalMsg.sexos[0]') }}</option>
                    <option v-bind:value="2">{{ $t('formAnimalMsg.sexos[1]') }}</option>
                </select>
                <label for="especie" class="form-label">{{ $t('formAnimalMsg.especie') }}</label>
                <select class="form-select" id="especie" v-model="animal.especie" v-on:change="alterarRacas">
                    <option v-bind:value="1">{{ $t('formAnimalMsg.especies[0]') }}</option>
                    <option v-bind:value="2">{{ $t('formAnimalMsg.especies[1]') }}</option>
                </select>
                <label for="raca" class="form-label">{{ $t('formAnimalMsg.raca') }}</label>
                <select class="form-select" id="raca" v-model="animal.raca">
                    <option v-for="(item,index) in racas" :key="item" :value="index+1">{{item}}</option>
                </select>
                <label for="porte" class="form-label">{{ $t('formAnimalMsg.porte') }}</label>
                <select class="form-select" id="porte" v-model="animal.porte">
                    <option v-for="(item,index) in $tm('formAnimalMsg.portes')" :key="item" :value="index+1">{{item}}</option>
                </select>
                <label for="idade" class="form-label">{{ $t('formAnimalMsg.idade') }}</label>
                <select class="form-select" id="idade" v-model="animal.idade">
                    <option v-for="(item,index) in $tm('formAnimalMsg.idades')" :key="item" :value="index+1">{{item}}</option>
                </select>
                <label for="cor" class="form-label">{{ $t('formAnimalMsg.cor') }}</label>
                <select class="form-select" id="cor" v-model="animal.cor">
                    <option v-for="(item, index) in $tm('formAnimalMsg.cores')" :key="item" :value="index+1">{{item}}</option>
                </select>

            </div>
            <div class="col-10 col-sm-8 col-md-6 offset-md-0 offset-sm-2 offset-1">
                <label for="distrito" class="form-label">{{ $t('formAnimalMsg.distrito') }}</label>
                <select class="form-select" id="distrito" v-model="animal.distrito">
                    <option v-for="item in distritos" :key="item" :value="item">{{item}}</option>                 
                </select>
                <label for="etiqueta" class="form-label">{{ $t('formAnimalMsg.etiqueta') }}</label>
                <select class="form-select" id="etiqueta" v-model="animal.etiqueta">
                    <option v-for="(item,index) in $tm('formAnimalMsg.etiquetas')" :key="item" :value="index+1">{{item}}</option>
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
                    style="background-color: #FD7E14;" @click="anunciarAnimal">{{ $t('formAnimalMsg.publicar') }}</button>
                    <div class="alert alert-danger p-2 mt-3" role="alert" style="max-width:250px" v-show="erro">
                        {{ this.mensagemErro }}
                    </div>
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
                distrito: "Aveiro",
                etiqueta: 1,
                descricao: null,
                fotografias: []
            },
            distritos: ["Aveiro", "Beja", "Braga", "Bragança","Castelo Branco", 
            "Coimbra", "Évora","Faro","Guarda","Leiria","Lisboa","Portalegre","Porto","Santarém","Setúbal","Viana do Castelo","Vila Real","Viseu"],
            racas: this.$tm('formAnimalMsg.racas_caes'),
            preview: [],
            mensagemErro: null,
            erro: false,
        }
    },
    components: {
    },
    methods: {
        mostrarFotos(e) {
            this.preview = []
            for (let i = 0; i < e.target.files.length; i++) {
                this.preview.push(URL.createObjectURL(e.target.files[i]))
                this.animal.fotografias.push(e.target.files[i])
            }
        },

        anunciarAnimal() {

            if(this.animal.nome == null || this.animal.nome == ""){
                this.mensagemErro = "O nome do animal é obrigatório"
                this.erro = true;
                return;
            }

            this.erro = false;

            this.axios.post("/novoanuncio", this.animal, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
                .then(function (response) {
                    console.log(response.data.sucesso);
                    alert("Anuncio criado com sucesso")
                })
                .catch((error) => {
                    if (error.response.status == 422) {
                        this.mensagemErro = error.response.data.message
                        this.erro = true;
                    } else {
                        this.mensagemErro = error.response.data.message
                        this.erro = true;
                    }
                    console.log(this.mensagemErro)
                });
        },

        alterarRacas() {
            if (this.animal.especie == 1) {
                this.racas = this.$tm('formAnimalMsg.racas_caes')
            } else {
                this.racas = this.$tm('formAnimalMsg.racas_gatos')
            }
        }
    }
}
</script>