async function loadData(cepUsuario) {
    const RESPONSE = await fetch(`https://viacep.com.br/ws/${cepUsuario}/json/`);
if (!RESPONSE.ok){
    return false;
}
return RESPONSE.json();
}

// COMO MOSTRAR AS INFORMAÇOES NO JAVASCRIPT
let cep = Number(prompt("Digite o seu cep:"));

let dados = await loadData(cep)

let body = document.querySelector("body");

body.innerHTML =
`<h1>Dados da pesquisa</h1>
<ul>
    <li>${dados.cep}</li>
    <li>${dados.lagradouro}</li>
    <li>${dados.bairro}</li>
    <li>${dados.localidade}</li>
    <li>${dados.uf}</li>
    <li>${dados.estado}</li>
    <li>${dados.regiao}</li>
    <li>${dados.ddd}</li>
</ul>
`

