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

            var title = document.createElement("h4");
            title.classList.add("timeline-title");
            title.classList.add("quicksand");
            title.appendChild(document.createTextNode(filialNome));

            var body = document.createElement("div");
            body.classList.add("timeline-body");

            var address = document.createElement("h6");
            address.classList.add("transaction-body-info");
            title.classList.add("quicksand");
            address.appendChild(document.createTextNode(filialEndereco));

            var transactionCost = document.createElement("h6");
            transactionCost.classList.add("transaction-body-info");
            title.classList.add("quicksand");
            transactionCost.appendChild(document.createTextNode('R$' + parseFloat(valorTotal.toFixed(2))));

            var date = document.createElement("h6");
            date.classList.add("transaction-body-info");
            title.classList.add("quicksand");
            date.appendChild(document.createTextNode(data));

            heading.appendChild(title);

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
});