// --- EX 31
async function buscarUsuariosConsole() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await resposta.json();
    console.log("EX 1: Usuários");
    usuarios.forEach(u => console.log(`Nome: ${u.name} | Email: ${u.email}`));
}
buscarUsuariosConsole();


// --- EX 2
async function renderizarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await resposta.json();
    const div = document.getElementById("lista-usuarios");
    
    usuarios.forEach(lista => {
        div.innerHTML += `<p><strong>${lista.name}</strong> - ${lista.email}</p>`;
    });
}
renderizarUsuarios();


// --- EX 3
async function buscar3Posts() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await resposta.json();
    const container = document.getElementById("posts-container");

    posts.slice(0, 3).forEach(post => {
        container.innerHTML += `
            <div class="post-item">
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            </div>`;
    });
}
buscar3Posts();


// --- EX4
const form = document.getElementById("form-post");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const titulo = document.getElementById("titulo").value;
    const texto = document.getElementById("texto").value;
    const mural = document.getElementById("cards");

    // Cria o elemento do card
    const novoCard = document.createElement("div");
    novoCard.className = "card";
    novoCard.innerHTML = `<h3>${titulo}</h3><p>${texto}</p>`;

    mural.appendChild(novoCard);
    form.reset();
});


// --- EX 5
const btnCarregar = document.getElementById("carregar");
btnCarregar.addEventListener("click", async () => {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/1"); 
    const post = await resposta.json();
    const container = document.getElementById("container");

    container.innerHTML = `
        <div class="card">
            <p><strong>Carregado via Botão:</strong></p>
            <h3>${post.title}</h3>
        </div>`;
});