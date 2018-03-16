
var aList    = [];
var aItems   = [];


$(document).ready(function () {

    $.getJSON("../assets/data/orderedCustomerData.json", function (data) {
        var cupom;
        var prevCupom;
        var filialNome;
        var filialEndereco;
        var data;
        var valorTotal = 0;
        var ul = document.getElementById("transactions");

        $.each(data, function(i, item){
            cupom = item.Cupom;
            if (prevCupom === undefined) {
                valorTotal += item['Valor Venda'];
                filialNome = item['Filial Nome'];
                filialEndereco = item['Filial Endereco'];
                data = item['Data Venda'];
            } else if (cupom === prevCupom) {
                valorTotal += item['Valor Venda'];
            } else {
                var li = document.createElement("li");
                li.classList.add("timeline-inverted");

                var badgeInfo = document.createElement("div");
                badgeInfo.classList.add("timeline-badge");
                badgeInfo.classList.add("info");

                var panel = document.createElement("div");
                panel.classList.add("timeline-panel");

                var heading = document.createElement("div");
                heading.classList.add("timeline-heading");
                heading.setAttribute("cupom",cupom);


                var title = document.createElement("h4");
                title.classList.add("timeline-title");
                title.classList.add("quicksand");
                title.appendChild(document.createTextNode(filialNome));

                var link = document.createElement("a");
                link.href="#";
                link.onclick= filterItemCard;
                link.appendChild(title);

                var body = document.createElement("div");
                body.classList.add("timeline-body");

                var address = document.createElement("h6");
                address.classList.add("transaction-body-info");
                address.classList.add("quicksand");
                address.classList.add("grey-color");
                address.appendChild(document.createTextNode(filialEndereco));

                var transactionCost = document.createElement("h6");
                transactionCost.classList.add("transaction-body-info");
                transactionCost.classList.add("quicksand");
                transactionCost.appendChild(document.createTextNode('R$' + parseFloat(valorTotal.toFixed(2))));

                var date = document.createElement("h6");
                date.classList.add("transaction-body-info");
                title.classList.add("quicksand");
                date.appendChild(document.createTextNode(data));

                heading.appendChild(link);

                body.appendChild(address);
                body.appendChild(transactionCost);
                body.appendChild(date);

                panel.appendChild(heading);
                panel.appendChild(body);

                li.appendChild(badgeInfo);
                li.appendChild(panel);

                li.setAttribute("id", prevCupom);
                ul.appendChild(li);

                valorTotal = 0;
                valorTotal += item['Valor Venda'];
                filialNome = item['Filial Nome'];
                filialEndereco = item['Filial Endereco'];
                data = item['Data Venda'];
            }
            prevCupom = item.Cupom;
        });
        getShoppingData();
    });
});

function getShoppingData(){

     $.getJSON("../assets/data/segmentBCustomerData.json", function (data) {
        var sProduct;
        var sProductDescription;
        var sSellingPrice;
        var sProductPrice;
        var sClient;
        var sQuantity;
        var sCupom;

        $.each(data, function(i, item){
                sProduct                = item['Produto'];
                sProductDescription     = item['Descricao'];
                sSellingPrice           = item['Valor Venda'];
                sProductPrice           = item['Preco Produto'];
                sQuantity               = item['Quantidade'];
                sClient                 = item['Cliente'];
                sCupom                  = item['Cupom'];
                if (sClient === 871){
                    aItems.push({
                        Cupom       : sCupom, 
                        product     : sProduct, 
                        description : sProductDescription, 
                        quantity    : sQuantity, 
                        selling     : sSellingPrice, 
                        price       : sProductPrice
                    });
                }
            });
    });
}


function changeId(object, id){
    if (id != null && typeof id === "string"){
            object.id = id;
        }
    return object;
}

function changeClass(object, className){
    if(className != null && typeof className === "string"){
            object.className = className;
        }
    return object;
}

function constructElement(type, className, id){
    let createdElement = document.createElement(type);
    createdElement = changeClass(createdElement, className);
    createdElement = changeId(createdElement, id);   
    return createdElement;
}

function crateItemCard(sProduct, sProductDescription, sQuantity, sSellingPrice, sProductPrice){
    let descriptionList = constructElement("dl", "product-card");

    let part1dt = constructElement("dt", "product-card");
    let text1   = document.createTextNode(" Product:");
    let part1i  = constructElement("i", "fa fa-shopping-cart");
    part1dt.appendChild(part1i);
    part1dt.appendChild(text1);

    let part1dd = constructElement("dd", "product-card");
    part1dd.append(sProduct);

    let part2dt = constructElement("dt", "product-card");
    let text2   = document.createTextNode(" Description:");
    let part2i  = constructElement("i", "fa comment-alt");
    part2dt.appendChild(part2i);
    part2dt.appendChild(text2);

     let part2dd = constructElement("dd", "product-card");
    part2dd.append(sProductDescription);

    let part5dt = constructElement("dt", "product-card");
    let text5   = document.createTextNode(" Quantity:");
    let part5i  = constructElement("i", "fa fa-cubes");
    part5dt.appendChild(part5i);
    part5dt.appendChild(text5);

    let part5dd = constructElement("dd", "product-card");
    part5dd.append(sQuantity);

    let part3dt = constructElement("dt", "product-card");
    let text3   = document.createTextNode(" Selling Price:");
    let part3i  = constructElement("i", "fa fa-credit-card");
    part3dt.appendChild(part3i);
    part3dt.appendChild(text3);

    let part3dd = constructElement("dd", "product-card");
    part3dd.append(sSellingPrice);

    let part4dt = constructElement("dt", "product-card");
    let text4   = document.createTextNode(" Product Price:");
    let part4i  = constructElement("i", "fa fa-tag");
    part4dt.appendChild(part4i);
    part4dt.appendChild(text4);

    let part4dd = constructElement("dd", "product-card");
    part4dd.append(sProductPrice);


    descriptionList.appendChild(part1dt);
    descriptionList.appendChild(part1dd);
    descriptionList.appendChild(part2dt);
    descriptionList.appendChild(part2dd);
    descriptionList.appendChild(part5dt);
    descriptionList.appendChild(part5dd);
    descriptionList.appendChild(part3dt);
    descriptionList.appendChild(part3dd);
    descriptionList.appendChild(part4dt);
    descriptionList.appendChild(part4dd);

    var element = document.getElementById("product-list");

    element.appendChild(descriptionList);
}

function filterItemCard(e){
    var cupom = e.currentTarget.parentElement.getAttribute("cupom");

    /*
    removechildren;    
    
    */
    for (var i=0; i<aItems.length; i++){
        if (aItems[i].Cupom === parseInt(cupom)){
            crateItemCard(aItems[i].product, aItems[i].description, aItems[i].quantity, aItems[i].selling, aItems[i].price);
        }
    }
}
