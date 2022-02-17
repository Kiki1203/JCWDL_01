let menu = Number(prompt(`Silahkan pilih menu \n 1. Menu Kasir \n 2. Menu Customer`));
if (menu === 1) {
  document.getElementsByClassName('menuCustomer')[0].setAttribute('hidden', true);
  document.getElementsByClassName('menuCustomer')[1].setAttribute('hidden', true);
  document.getElementsByClassName('menuCustomer')[2].setAttribute('hidden', true);
} else {
  document.getElementsByClassName('menuKasir')[0].setAttribute('hidden', true);
}

// ### Show Data Products
function showDataProducts(idx) {
  let output = '';
  dataProducts.forEach((value, index) => {
    if (idx == index) {
      output += `
                    <tr>
                        <td>
                            ${index + 1}
                        </td>
                        <td>
                          <select name="category" class="editProduct" >
                          <option value="All">All</option>
                          <option value="Clothes">Clothes</option>
                          <option value="Fruit">Fruit</option>
                          <option value="Electronic">Electronic</option>
                        </select>
                        </td>
                        <td>
                          <input type="text" class="editProduct" value="${value.name}">
                        </td>
                        <td>
                          <input type="number" class="editProduct" value="${value.price}">
                        </td>
                        <td>
                          <input type="number" class="editProduct" value="${value.stock}">
                        </td>
                        <td>
                          <image src="${value.image}" width="100px" />
                        </td>
                        <td>
                            <input type="button" value="Save" onClick="onSaveDataProduct(${index})">
                            <input type="button" value="Cancel" onClick="showDataProducts()">
                        </td>
                    </tr>
                `;
    } else {
      output += `
                    <tr>
                        <td>
                            ${index + 1}
                        </td>
                        <td>
                            ${value.category}
                        </td>
                        <td>
                            ${value.name}
                        </td>
                        <td>
                            ${value.price}
                        </td>
                        <td>
                            ${value.stock}
                        </td>
                        <td>
                            <image src="${value.image}" width="100px" />
                        </td>
                        <td>
                            <input type="button" value="Edit" onClick="showDataProducts(${index})" ${menu === 2 ? 'hidden' : ''}>
                            <input type="button" value="Delete" onClick="DeleteDataProduct(${index})" ${menu === 2 ? 'hidden' : ''}>
                            <input type="button" value="+ Add To Cart" onClick="addToCart(${index})" ${menu === 1 ? 'hidden' : ''}>
                        </td>
                    </tr>
                `;
    }
  });

  let getTable = document.getElementById('tableProducts').getElementsByTagName('tbody')[0];
  getTable.innerHTML = output;
}
showDataProducts();

// ### Add Data Product
document.getElementById('buttonSubmit').addEventListener('click', AddDataProduct);
function AddDataProduct() {
  let inputs = document.getElementsByClassName('inputProduct');

  let productCategory = inputs[4].value;
  let productName = inputs[0].value;
  let productPrice = inputs[1].value;
  let productStock = inputs[2].value;
  let productImage = inputs[3].value;

  if (productCategory && productName && productPrice && productStock && productImage) {
    // Push Datanya
    dataProducts.push({
      category: productCategory,
      name: productName,
      price: productPrice,
      stock: productStock,
      image: productImage,
    });

    showDataProducts();

    inputs[0].value = '';
    inputs[1].value = '';
    inputs[2].value = '';
    inputs[3].value = '';
    inputs[4].value = '';
    document.getElementById('alert').innerHTML = ``;
  } else {
    document.getElementById('alert').innerHTML = `Semua data harus di isi !`;
  }
}

// ### Delete Data Product
function DeleteDataProduct(index) {
  let confirmBox = confirm(`
              Are you sure want to delete ${dataProducts[index].name}?
          `);

  if (confirmBox) {
    // confirmBox === true
    // Delete Data
    dataProducts.splice(index, 1);
    alert('Delete Product Success!');
    showDataProducts();
  }
}

// ### Edit Data Product
function onSaveDataProduct(index) {
  let inputEdit = document.getElementsByClassName('editProduct');

  let newProductName = inputEdit[1].value;
  let newProductPrice = inputEdit[2].value;
  let newProductStock = inputEdit[3].value;
  let newProductCategory = inputEdit[0].value;

  if (newProductName && newProductPrice && newProductStock && newProductCategory) {
    dataProducts[index].name = newProductName;
    dataProducts[index].price = newProductPrice;
    dataProducts[index].stock = newProductStock;
    dataProducts[index].category = newProductCategory;

    document.getElementById('errorMessage1').innerHTML = '';

    showDataProducts();
  } else {
    document.getElementById('errorMessage1').innerHTML = 'Data Must Be Filled!';
  }
}

showDataProducts();
function addToCart(index) {
  let quantity = Number(prompt('Silahkan Masukan Quantity :'));

  if (quantity > dataProducts[index].stock || quantity === 0 || quantity < 1) {
    alert('Quantity Melebihi Stock / Quantity Masih Kosong');
  } else {
    let checkProductExist = false;
    let indexProductExist;
    // [{id: 0, name: "Lenovo Ideapad Gaming", quantity: 4}]
    dataCarts.forEach((value, idx) => {
      if (index === value.id) {
        checkProductExist = true;
        indexProductExist = idx;
      }
    });

    if (checkProductExist) {
      if (dataProducts[index].stock + 1 <= dataCarts[indexProductExist].quantity + quantity) {
        alert('Product melebihi stock');
      } else {
        // checkProductExist === true
        dataCarts[indexProductExist].quantity += quantity;
        dataCarts[indexProductExist].total = dataCarts[indexProductExist].quantity * dataCarts[indexProductExist].price;

        showDataCarts();
      }
    } else {
      let dataToSave = {
        id: index,
        name: dataProducts[index].name,
        image: dataProducts[index].image,
        price: dataProducts[index].price,
        quantity: quantity,
        total: quantity * dataProducts[index].price,
      };

      dataCarts.push(dataToSave);

      document.getElementById('totalCarts').innerHTML = `Carts : ${dataCarts.length}`;

      showDataCarts();
    }
  }
}
// ### Show Data Carts
function showDataCarts() {
  let output = '';
  dataCarts.forEach((value, index) => {
    output += `
            <tr>
                <td>
                    ${index + 1}
                </td>
                <td>
                    ${value.name}
                </td>
                <td>
                    <image src="${value.image}" width="75px">
                </td>
                <td>
                    ${value.price}
                </td>
                <td>
                    ${value.quantity}
                </td>
                <td>
                    ${value.total}
                </td>
                <td>
                    <input type="button" value="Delete" onClick="DeleteCarts(${index})">
                </td>
            </tr>
        `;
  });
  console.log(output);
  document.getElementById('tableCarts').getElementsByTagName('tbody')[0].innerHTML = output;
}

showDataCarts();

// ### Delete carts Product
function DeleteCarts(index) {
  let confirmBox2 = confirm(`
              Are you sure want to delete ${dataCarts[index].name} from carts?
          `);

  if (confirmBox2) {
    // confirmBox === true
    // Delete Data
    dataCarts.splice(index, 1);
    alert('Delete Cart Success!');
    showDataCarts();
  }
}

// ---------------------------------filter---------------------------------

// ### Function Filter by Name
function FilterByName() {
  let filterName = document.getElementById('filterName').value; // Lenovo; lenovo
  filterName = filterName.toLowerCase(); // lenovo; lenovo

  let dataFilterByName = dataProducts.filter((value) => {
    let nameToLowerCase = value.name.toLowerCase();

    return nameToLowerCase.includes(filterName); // Apakah karakter inputan user terdapat didalam value.namenya?
  });
  // [
  //     {
  //         name: 'ASUS TUF',
  //         price: 12500000,
  //         stock: 50,
  //         image: 'https://img.tek.id/img/content/2019/07/23/18559/tuf-gaming-fx505-dt-laptop-gaming-murah-yang-hampir-sempurna-Lx7LHkyT4i.jpg',
  //         category: 'Laptop'
  //     }
  // ]

  return RenderDataFilter(dataFilterByName);
}

// ### Function Filter by Price
function FilterByPrice() {
  let filterByMin = document.getElementById('Min').value;
  let filterByMax = document.getElementById('Max').value;

  if (filterByMin && filterByMax) {
    let dataFilterByPrice = dataProducts.filter((value) => {
      return value.price >= filterByMin && value.price <= filterByMax;
    });

    return RenderDataFilter(dataFilterByPrice);
  }
}

// ### Function Filter by Category
function FilterByCategory() {
  let filterByCategory = document.getElementById('filterCategory').value;
  let newFilterCategory = dataProducts.filter((value) => {
    if (filterByCategory == 0) {
      return true;
    }
    return value.category == filterByCategory;
  });
  return RenderDataFilter(newFilterCategory);
}

// ### Function Rendering Data Filter
function RenderDataFilter(newArr) {
  let output = '';
  newArr.forEach((value, index) => {
    output += `
                    <tr>
                        <td>
                            ${index + 1}
                        </td>
                        <td>
                            ${value.category}
                        </td>
                        <td>
                            ${value.name}
                        </td>
                        <td>
                            ${value.price}
                        </td>
                        <td>
                            ${value.stock}
                        </td>
                        <td>
                            <image src="${value.image}" width="100px" />
                        </td>
                        <td>
                        <input type="button" class ="b" alue="Edit" onClick="showDataProducts(${index})" ${menu === 2 ? 'hidden' : ''}>
                        <input type="button" value="Delete" onClick="DeleteDataProduct(${index})" ${menu === 2 ? 'hidden' : ''}>
                        <input type="button" value="+ Add To Cart" onClick="addToCart(${index})" ${menu === 1 ? 'hidden' : ''}>
                        </td>
                    </tr>
                `;
  });

  let getTable = document.getElementById('tableProducts').getElementsByTagName('tbody')[0];
  console.log(getTable);
  getTable.innerHTML = output;
}

// -----------------------------onPayment-----------------------------------

// ### Payment
function onPayment() {
  dataCarts.forEach((value) => {
    let dataToSave = {
      id: value.id,
      name: value.name,
      price: value.price,
      quantity: value.quantity,
      total: value.total,
    };

    dataTransaction.push(dataToSave);
  });

  let output = '';
  dataTransaction.forEach((value, index) => {
    output += `
          <tr>
              <td>
                  ${index + 1}
              </td>
              <td>
                  ${value.name}
              </td>
              <td>
                  ${value.price}
              </td>
              <td>
                  ${value.quantity}
              </td>
              <td>
                  ${value.total}
              </td>
          </tr>
      `;
  });
  dataCarts.forEach((value) => {
    dataProducts[value.id].stock -= value.quantity;
  });
  showDataProducts();

  dataCarts = [];
  showDataCarts();

  let tablePayment = document.getElementById('tablePayment').getElementsByTagName('tbody')[0];
  tablePayment.innerHTML = output;
}
