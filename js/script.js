$("#inputPrice").mask("000.000.000.000.000,00", { reverse: true });

var products = [
  {
    id: 1,
    name: "Computador M1-TX",
    description: "Intel I7, 16GB, SSD 256, HD 1T",
    price: 4900,
    category: 1,
    promotion: true,
    new: true,
  },
  {
    id: 2,
    name: "Computador M2-TX",
    description: "Intel I7, 32GB, SSD 512, HD 1T",
    price: 5900,
    category: 2,
    promotion: false,
    new: true,
  },
  {
    id: 3,
    name: "Computador M1-T",
    description: "Intel I5, 16GB, HD 1T",
    price: 2900,
    category: 3,
    promotion: false,
    new: false,
  },
];

var categories = [
  { id: 1, name: "Produção Própria" },
  { id: 2, name: "Nacional" },
  { id: 3, name: "Importado" },
];

//Carregamento
loadProducts();

//carregar todos os produtos do array
function loadProducts() {
  for (let prod of products) {
    addNewRow(prod);
  }
}

//converter o valor do produto que esta do tipo texto, para ser reconhecido como numero no browser
function convertToNumber(priceFormat){
  return priceFormat.replace(/\./g, '').replace(',', '.');
}

//salvar cadastro
function save() {

    var newProd = {
        id: products.length + 1,
        name: document.getElementById("inputName").value,
        description: document.getElementById("inputDesc").value,
        price: convertToNumber(document.getElementById("inputPrice").value),
        category: document.getElementById("formSelect").value,
        promotion: document.getElementById("checkboxPromotion").checked,
        new: document.getElementById("checkboxLanc").checked,
    }

    addNewRow(newProd);
    products.push(newProd);// salvar o produto cadastrado no array products

}

//add nova linha
function addNewRow(prod) {
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
  var cell = newRow.insertCell();
  cell.className="d-none d-md-table-cell";
  cell.appendChild(desc);
 
  //inserir preco do produto
  var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }); //PRECO FORMATADO
  var price = document.createTextNode(formatter.format(prod.price));
  newRow.insertCell().appendChild(price);

  //inserir categoria
  var cat = document.createTextNode(categories[prod.category - 1].name);
  newRow.insertCell().appendChild(cat);

  var options = "";

  if (prod.promotion) {
    options = '<span class="badge bg-success me-1">P</span>';
  }
  if (prod.new) {
    options += '<span class="badge bg-secondary ">L</span>';
  }
  cell2 = newRow.insertCell();
  cell2.className="d-none d-md-table-cell";
  cell2.innerHTML = options;


  
}
