<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper black darken-1">
        <a href="#" class="brand-logo center">Leonardo Flix</a>
      </div>
    </nav>
  

    <div class="container">
      <form @submit.prevent="salvarFilme">
        <label>Titulo</label>
        <input type="text" placeholder="titulo" v-model="filme.titulo" required/>
        <label>Diretor</label>
        <input type="text" placeholder="direto" v-model="filme.diretor" required/>
        <label>Sinopse</label>
        <input type="text" placeholder="sinopse" v-model="filme.sinopse" required/>
        <label>Ano</label>
        <input type="number" min="1895" max="2020" placeholder="Ano" v-model="filme.ano" required/>
        <label>Genero</label>
        <h6 v-for="genero of generos" :key="genero.idgenero">{{genero.idgenero}} - {{genero.nome}}</h6>

        <input type="number" min="1" placeholder="Genero" v-model="filme.idgenero" required/>

        <button class="waves-effect waves-light btn-small">
          Salvar
          <i class="material-icons left">save</i>
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Diretor</th>
            <th>Sinopse</th>
            <th>Ano</th>
            <th>Genero</th>
            <th>OPÇÕES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="filme of filmes" :key="filme.idfilme">
            <td>{{filme.titulo}}</td>
            <td>{{filme.diretor}}</td>
            <td>{{filme.sinopse}}</td>
            <td>{{filme.ano}}</td>
            <td>{{filme.idgenero}}</td>
            <td>
              <button @click="editarFilme(filme)" class="waves-effect btn-small blue darken-1">
                <i class="material-icons">create</i>
              </button>
              <button @click="remover(filme.idfilme)" class="waves-effect btn-small red darken-1">
                <i class="material-icons">delete_sweep</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Filme from "./services/filme";
import Genero from "./services/genero";
export default {
  name: `app`,
  data() {
    return {
      filme: {
        idFilme:'',
        titulo: '',
        diretor: '',
        sinopse: '',
        ano: '',
        idgenero: '',
      },
      filmes: [],
      generos: [],
      errors: [],
    };
  },
  mounted() {
    
    this.listarFilmes(),
    Genero.listar().then((resposta) => {
      console.log(resposta.data);
      this.generos = resposta.data;
    });
  },

  methods: {
    
    
    listarFilmes() {
      Filme.listar().then((resposta) => {
        this.filmes = resposta.data;
      });
    },

    salvarFilme() {
      
      if(!this.filme.idFilme){
      var resp
        Filme.salvar(this.filme).then(() =>{
          resp = this.filme.titulo
          alert(resp + ' foi salvo com sucesso!')
          this.filme ={}
          this.listarFilmes()
        })
      }else{
        Filme.atualizar(this.filme).then(() =>{
          resp = this.filme.titulo
          alert(resp + ' foi atualizado com sucesso!')
          this.filme ={}
          this.listarFilmes()
        })
      }

    },


    editarFilme(filme){
      this.filme = filme
    },

    remover(id){
      if(confirm('Deseja excluir o filme?')){
        Filme.apagar(id).then(() => {
          this.listarFilmes()
          this.errors = {}
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }
    }
  },
};
</script>

<style>
</style>
