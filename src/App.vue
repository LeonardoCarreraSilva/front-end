<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper dark darken-1">
        <a href="#" class="brand-logo center">Leonardo Flix</a>
      </div>
    </nav>

    <div class="container">

      <form>

          <label>Titulo</label>
          <input type="text" placeholder="titulo">
          <label>Diretor</label>
          <input type="text" placeholder="direto">
          <label>Sinopse</label>
          <input type="textarea" placeholder="sinopse">
          <label>Ano</label>
          <input type="number" placeholder="Ano">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Arduino</td>
            <td>100</td>
            <td>50.00</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

</script>

<style>

</style>
