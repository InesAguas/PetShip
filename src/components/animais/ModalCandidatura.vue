<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Candidatura de Adoção</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row" v-if="conteudoCurrent == 1">
                        <div class="col">
                            <form>
                                <div class="mb-3">
                                    <label for="name" class="form-label">{{ $t('registarMsg.nome') }}</label>
                                    <input type="text" class="form-control" id="name" aria-describedby="name"
                                        v-bind:placeholder="utilizadorLogado.nome" v-bind:value="utilizadorLogado.nome" @input="verificarCamposPreenchidos">
                                </div>
                                <div class="mb-3">
                                    <label for="cc" class="form-label">Cartão de cidadão</label>
                                    <input type="text" class="form-control" id="cc" aria-describedby="cc"
                                        placeholder="Cartão de Cidadão" @input="verificarCamposPreenchidos">
                                </div>
                                <div class="mb-3">
                                    <label for="telefone" class="form-label">Telefone</label>
                                    <input type="text" class="form-control" id="telefone" aria-describedby="telefone"
                                        v-bind:placeholder="utilizadorLogado.telefone"
                                        v-bind:value="utilizadorLogado.telefone" @input="verificarCamposPreenchidos">
                                </div>
                                <div>
                                    <p class="fw-bold">*Campos Obrigatórios</p>
                                </div>
                            </form>
                        </div>
                        <div class="col">
                            <form>
                                <div class="mb-3">
                                    <label for="morada" class="form-label">Morada</label>
                                    <input type="text" class="form-control" id="morada" aria-describedby="morada"
                                        v-bind:placeholder="utilizadorLogado.localizacao"
                                        v-bind:value="utilizadorLogado.localizacao" @input="verificarCamposPreenchidos">
                                </div>
                                <div class="row mb-3">
                                    <div class="col">
                                        <label for="exampleFormControlInput1" class="form-label">Distrito</label>
                                        <select class="form-select" aria-label="Default select example"
                                            v-model="utilizadorDistrito">
                                            <option selected value="">{{ $t('pageAdotar.qualquer') }}</option>
                                            <option v-for="(distrito, index) in distritos" :key="index" :value="distrito">{{
                                                distrito }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <label for="codPostal" class="form-label">Código Postal</label>
                                        <input type="text" class="form-control" id="codPostal" aria-describedby="codPostal"
                                            v-bind:placeholder="utilizadorLogado.codigo_postal ? utilizadorLogado.codigo_postal : '0000-000'"
                                            v-bind:value="utilizadorLogado.codigo_postal" @input="verificarCamposPreenchidos">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="text" class="form-control" id="email" aria-describedby="email"
                                        v-bind:placeholder="utilizadorLogado.email" v-bind:value="utilizadorLogado.email" @input="verificarCamposPreenchidos">
                                </div>
                            </form>

                        </div>
                    </div>
                    <div class="row ms-3 me-3" v-if="conteudoCurrent == 2">
                        <h5>Declaração</h5>
                        <textarea class="form-control disabled mb-3" rows="15" readonly>Declara,ainda,que assume a responsabilidade pelo estado de saúde do animal adotado, uma vez que foi informado de que, dadas as caraterísticas de um canil/ centro de recolha e/ ou qualquer animal que se puder encontrar em período de incubação de qualquer doença sem sintimatologia aparente, não é possível atestar, garantir e comprovar um perfeito estado sanitário de todos os animais aqui alojados.


Condições exigidas ao adotante:

Para realizar a adoção de um animal de companhia,deve:
    
    1. Ter mais de 16 anos de idade;
    2. Ter condições de alojamento e manutenção para o animal;
    3. Apresentar o seu cartão de cidadão;
    4. Aceitar o termo de responsabilidade;
    5. No caso do canídeo não se encontrar vacinado contra a raiva e tiver idade superior a 3 meses, é obrigatório a vacinação antirrábica no momento da restituição, devendo, para o efeito, pagar a respectiva vacina;


Tratamento dos dados pessoais:

Aceita que os seus dados pessoais sejam utilizados afim de receber informações e/ou ser contactado pelos serviços do canil/centro de recolha,se assim considerar pertinente.

                        </textarea>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="responsabilidade"
                                v-model="aceitouResponsabilidade">
                            <label class="form-check-label" for="responsabilidade">
                                Declaro que aceito os termos de responsabilidade*
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="condicoes"
                                v-model="aceitouCondicoes">
                            <label class="form-check-label" for="condicoes">
                                Declaro que tenho todas a condições para adotar o animal*
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="dadosPessoais"
                                v-model="aceitouDadosPessoais">
                            <label class="form-check-label" for="dadosPessoais">
                                Declaro que aceito o tratamento dos meus dados pessoais*
                            </label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" v-if="first">Cancelar</button>
                    <button type="button" class="btn btn-secondary" @click="prev" v-if="!first">Voltar</button>
                    <button type="button" class="btn btn-primary" id="seguinte" style="background-color:#FD7E14; display: none;" @click="next"
                        v-if="first">Seguinte</button>
                    <button type="button" class="btn btn-primary" style="background-color:#FD7E14;"
                        v-if="!first && checkboxesSelecionadas">Confirmar</button>
                </div>
            </div>
        </div>
    </div>
</template>
   
<script>


export default {
    name: 'ModalCandidatura',
    props: [
        'utilizadorLogado',
    ],
    data() {
        return {
            distritos: ["Aveiro", "Beja", "Braga", "Bragança", "Castelo Branco", "Coimbra", "Évora", "Faro", "Guarda", "Leiria", "Lisboa", "Portalegre", "Porto", "Santarém", "Setúbal", "Viana do Castelo", "Vila Real", "Viseu"],
            conteudoCurrent: 1,
            first: true,
            aceitouResponsabilidade: false,
            aceitouCondicoes: false,
            aceitouDadosPessoais: false,
            utilizadorDistrito: this.utilizadorLogado.distrito,
            camposPreenchidos: false,
        }
    },
    computed: {
        checkboxesSelecionadas() {
            return this.aceitouResponsabilidade && this.aceitouCondicoes && this.aceitouDadosPessoais;
        }
    },
    methods: {
        next() {
            if (this.camposPreenchidos) {
                this.conteudoCurrent++;
                if (this.conteudoCurrent == 2) {
                    this.first = false;
                }
            }
        },
        prev() {
            this.conteudoCurrent--;
            if (this.conteudoCurrent == 1) {
                this.first = true;
            }

        },
        verificarCamposPreenchidos() {
            const nomePreenchido = this.utilizadorLogado.nome && this.utilizadorLogado.nome.trim() !== '';
            const ccPreenchido = document.getElementById('cc').value.trim() !== '';
            const telefonePreenchido = this.utilizadorLogado.telefone && this.utilizadorLogado.telefone.trim() !== '';
            const moradaPreenchida = this.utilizadorLogado.localizacao && this.utilizadorLogado.localizacao.trim() !== '';
            const distritoPreenchido = this.utilizadorDistrito && this.utilizadorDistrito.trim() !== '';
            const codPostalPreenchido = document.getElementById('codPostal').value.trim() !== '';
            const emailPreenchido = this.utilizadorLogado.email && this.utilizadorLogado.email.trim() !== '';
            document.getElementById('seguinte').style.display = (nomePreenchido && ccPreenchido && telefonePreenchido && moradaPreenchida && distritoPreenchido && codPostalPreenchido && emailPreenchido) ? 'block' : 'none';
            this.camposPreenchidos = nomePreenchido && ccPreenchido && telefonePreenchido && moradaPreenchida && distritoPreenchido && codPostalPreenchido && emailPreenchido;
        },
    }
}
</script>
    
    
   