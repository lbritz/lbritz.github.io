

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


function openItemsList(sProduct, sProductDescription, sSellingPrice, sProductPrice){
    let descriptionList = constructElement("dl", "product-card");

    let part1dt = constructElement("dt", "product-card");
    let text1   = document.createTextNode("Product");
    let part1i  = constructElement("i", "fa fa-shopping-cart");
    part1dt.appendChild(part1i);
    part1dt.appendChild(text1);

    let part1dd = constructElement("dd", "product-card");
    part1dd.appendChild(sProduct);

    let part2dt = constructElement("dt", "product-card");
    let text2   = document.createTextNode("Description");
    let part2i  = constructElement("i", "fa fa-cubes");
    part2dt.appendChild(part2i);
    part2dt.appendChild(text2);

    let part2dd = constructElement("dd", "product-card");
    part2dd.appendChild(sProductDescription);

    let part3dt = constructElement("dt", "product-card");
    let text3   = document.createTextNode("Selling Price");
    let part3i  = constructElement("i", "fa fa-credit-card");
    part3dt.appendChild(part3i);
    part3dt.appendChild(text3);

    let part3dd = constructElement("dd", "product-card");
    part3dd.appendChild(sSellingPrice);

    let part4dt = constructElement("dt", "product-card");
    let text4   = document.createTextNode("Product Price");
    let part4i  = constructElement("i", "fa fa-tag");
    part4dt.appendChild(part4i);
    part4dt.appendChild(text4);

    let part4dd = constructElement("dd", "product-card");
    part4dd.appendChild(sProductPrice);


    descriptionList.appendChild(part1dt);
    descriptionList.appendChild(part1dd);
    descriptionList.appendChild(part2dt);
    descriptionList.appendChild(part2dd);
    descriptionList.appendChild(part3dt);
    descriptionList.appendChild(part3dd);
    descriptionList.appendChild(part4dt);
    descriptionList.appendChild(part4dd);

    var element = document.getElementById("product-list");

    element.appendChild(descriptionList);
  
}







function teste(){

     $.getJSON("../assets/data/segmentBCustomerData.json", function (data) {
        var Cliente;
        var Filial;
        var Segment;
        var Data;

        $.each(data, function(i, item){
                Cliente = item['Cliente'];
                Filial  = item['Filial'];
                Segment = item['Segment'];
                Data    = item['Data Venda'];
                if (Cliente === 871){
                    openItemsList();
                }
            });
    });
}