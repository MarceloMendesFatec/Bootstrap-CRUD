var products = [
    {
        id: 1,
        name: "Computador M1-TX",
        description: "Intel I7, 16GB, SSD 256, HD 1T",
        price: 4900,
        category: 1,
        promotion: true,
        new: true
    },
    {
        id: 2,
        name: "Computador M2-TX",
        description: "Intel I7, 32GB, SSD 512, HD 1T",
        price: 5900,
        category: 2,
        promotion: false,
        new: true
    },
    {
        id: 3,
        name: "Computador M1-T",
        description: "Intel I5, 16GB, HD 1T",
        price: 2900,
        category: 3,
        promotion: false,
        new: false
    },
];

var categories = [
    { id: 1, name: "Produção Própria" },
    { id: 2, name: "Nacional" },
    { id: 3, name: "Importado" }
];

//Carregamento
loadProducts();

//carregar todos os produtos do array
function loadProducts(){
    for(let prod of products){
        addNewRow(prod);
        
    }

}

//add nova linha
 function addNewRow(prod){
    var table = document.getElementById("productsTable");

    var newRow = table.insertRow();


    //inserir id do produto
    var idNode = document.createTextNode(prod.id);
    newRow.insertCell().appendChild(idNode);
    //inserir nome do produto
    var name = document.createTextNode(prod.name);
    newRow.insertCell().appendChild(name);
    //inserir descricao do produto
    var desc = document.createTextNode(prod.description);
    newRow.insertCell().appendChild(desc);
    //inserir preco do produto
    var price = document.createTextNode(prod.price);
    newRow.insertCell().appendChild(price);
    //inserir categoria
    var cat = document.createTextNode(categories[prod.category-1].name);
    newRow.insertCell().appendChild(cat);

    var options='';

    if(prod.promotion){
        options = '<span class="badge bg-success me-2">P</span>'
    }
    if(prod.new){
        options += '<span class="badge bg-secondary ">L</span>'
    }

    newRow.insertCell().innerHTML = options;

}