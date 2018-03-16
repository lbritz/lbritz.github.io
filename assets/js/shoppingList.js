

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


function openItemsList(){
    let descriptionList = constructElement("dl", "product-card");

    let part1dt = constructElement("dt", "product-card");
    let text1    = document.createTextNode("1233455");
    let part1i  = constructElement("i", "fa fa-shopping-cart");
    part1dt.appendChild(part1i);
    part1dt.appendChild(text1);

    let part1dd = constructElement("dd", "product-card");

    let part2dt = constructElement("dt", "product-card");
    let text2    = document.createTextNode("1233455");
    let part2i  = constructElement("i", "fa fa-cubes");
    part2dt.appendChild(part2i);
    part2dt.appendChild(text2);

    let part2dd = constructElement("dd", "product-card");

    let part3dt = constructElement("dt", "product-card");
    let text3    = document.createTextNode("1233455");
    let part3i  = constructElement("i", "fa fa-credit-card");
    part3dt.appendChild(part3i);
    part3dt.appendChild(text3);

    let part3dd = constructElement("dd", "product-card");

    let part4dt = constructElement("dt", "product-card");
    let text4    = document.createTextNode("1233455");
    let part4i  = constructElement("i", "fa fa-tag");
    part4dt.appendChild(part4i);
    part4dt.appendChild(text4);

    let part4dd = constructElement("dd", "product-card");


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

/*          <dl class="product-card">
 
                <dt><i class="fa fa-shopping-cart"></i> Produto</dt>
                <dd>Descrição realmente longa para testar o que acontece com ela</dd>

                <dt><i class="fa fa-cubes"></i> Quantidade</dt>
                <dd>33</dd>

                <dt><i class="fa fa-credit-card"></i> Preço Venda </dt>
                <dd>44</dd>

                <dt><i class="fa fa-tag"></i> Preço produto</dt>
                <dd>55</dd>
            </dl>*/