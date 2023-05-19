let cart = [];
let bookPrice = [100.00, 42.50, 28.75, 39.90, 24.99, 37.25, 45.00, 29.50, 33.15, 27.80];
let costOfTheBook;
let numberInput = document.getElementById('number');
let errorMessage = document.getElementById('error');

function validatePhoneNumber() {
    let phoneNumber = numberInput.value.trim();
    let phonePattern = /^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$/;
    if (phonePattern.test(phoneNumber)) {
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
}

function bookCounter() {
    costOfTheBook = bookPrice[document.getElementById("book-title").selectedIndex];
    let numberOfBooks = document.getElementById("counter").value;
    if (numberOfBooks !== "") {
        document.getElementById("cost").value = numberOfBooks * costOfTheBook;
    }
}

function usePromoCode() {
    let promoCode = document.getElementById("promo-code").value;
    if (promoCode === "p5") {
        document.getElementById("cost").value *= 0.95;
        alert("Успішне застосування промокоду")
    } else if (promoCode === "p10") {
        document.getElementById("cost").value *= 0.9;
        alert("Успішне застосування промокоду")
    } else if (promoCode === "p15") {
        document.getElementById("cost").value *= 0.85;
        alert("Успішне застосування промокоду")
    } else if (promoCode === "p20") {
        document.getElementById("cost").value *= 0.8;
        alert("Успішне застосування промокоду")
    } else if (promoCode === "") {
        document.getElementById("cost").value *= 1;
    } else {
        alert("Промокод неправильний");
    }
}

let homeDelivery = document.getElementById("input-field-2");
let textarea = document.querySelector(".textarea-field");
homeDelivery.addEventListener("click", textareaField);
function textareaField() {
    textarea.style.display = "block";
}

function totalAmount() {
    let cost = document.getElementById("cost").value;
    if (cost !== "") {
        costOfTheBook = parseInt(cost, 10);
        let deliveryBook1 = 0.0, deliveryBook2 = 0.0, packingBook = 0.0;
        if (document.getElementById("input-field-1").checked) deliveryBook1 = costOfTheBook * 0.05;
        if (document.getElementById("input-field-2").checked) deliveryBook2 = costOfTheBook * 0.15;
        if (document.getElementById("input-field-3").checked) packingBook = costOfTheBook * 0.1;
        let sum = 1.4;
        sum = costOfTheBook + deliveryBook1 + deliveryBook2 + packingBook;
        document.getElementById("total-cost").value = sum;
    } else {
        alert("Вкажіть, буль ласка, кількість");
    }
}

numberInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        validatePhoneNumber();
    }
});

function clearFields() {
    document.getElementById('book-title').getElementsByTagName('option')[0].selected = 'selected';
    document.getElementById('counter').value = null;
    document.getElementById('cost').value = null;
    document.getElementById("input-field-1").checked = true;
    document.getElementById("input-field-2").checked = false;
    document.getElementById("input-field-3").checked = false;
    document.getElementById('promo-code').value = null;
    document.getElementById('textarea').value = null;
    document.getElementById('total-cost').value = null;
    document.getElementById('customer-name').value = null;
    document.getElementById('customer-surname').value = null;
    document.getElementById('number').value = null;
}

function orderSummary() {
    let table = '<table cellspacing="2" border="1" cellpadding="5"><tr style="font-weight: bold;"><td>Назва</td> <td>Імя</td> <td>Прізвище</td> <td>Доставка</td> <td>Упаковка</td> <td>Кількість</td> <td>Ціна</td> <td>Адреса</td> </tr>';
    for (let i = 0; i < cart.length; i++) {
        table += "<tr>";
        table += "<td>" + cart[i][0] + "</td>";
        table += "<td>" + cart[i][6] + "</td>";
        table += "<td>" + cart[i][7] + "</td>";
        if (cart[i][3]) table += "<td>" + "Поштою" + "</td>";
        if (cart[i][4]) table += "<td>" + "Доставка додому" + "</td>";
        if (cart[i][5]) table += '<td style="text-align: center;">' + "так" + "</td>";
        else table += '<td style="text-align: center;">' + "ні" + "</td>";
        table += '<td style="text-align: center;">' + cart[i][1] + "</td>";
        table += '<td style="text-align: center;">' + cart[i][2] + "</td>";
        if (!cart[i][8]) {
            table += '<td style="text-align: center;">' + "Відділення пошти" + "</td>";
        } else {
            table += '<td style="text-align: center;">' + cart[i][8] + "</td>";
        }
        table += "</tr>";
    }
    document.getElementById('order-summary').innerHTML = table;
}

function add() {
    if (document.getElementById('total-cost').value == "" || document.getElementById('customer-name').value == "" || document.getElementById('customer-surname').value == "") {
        alert("Заповніть поля");
    } else {
        let name = document.getElementById("book-title").value;
        if (name == "Убивство у Східному експресі (Аґата Крісті) - 100.00 ₴") name = "Убивство у Східному експресі";
        if (name == "1984 (Джордж Орвелл) - 42.50 ₴") name = "1984";
        if (name == "Ворошиловград (Олександр Ірванець) - 28.75 ₴") name = "Ворошиловград";
        if (name == "Маленькі життя (Ханья Янагіхара) - 39.90 ₴") name = "Маленькі життя";
        if (name == "Ігри розуму (Джошуа Фоер) - 24.99 ₴") name = "Ігри розуму";
        if (name == "Пластилиновий Хліб (Андрій Любка) - 37.25 ₴") name = "Пластилиновий Хліб";
        if (name == "Гаррі Поттер і Філософський камінь (Джоан Роулінг) - 45.00 ₴") name = "Гаррі Поттер і Філософський камінь";
        if (name == "Темні башти (Дмитро Білоус) - 29.50 ₴") name = "Темні башти";
        if (name == "Великий Гетсбі (Френсіс Скотт Фіцджеральд) - 33.15 ₴") name = "Великий Гетсбі";
        if (name == "Хто прокрався у мою хату? (Марія Примаченко) - 27.80 ₴") name = "Хто прокрався у мою хату?";

        let counter = document.getElementById("counter").value;
        let totalCost = document.getElementById("total-cost").value;
        let deliveryMeth1 = document.getElementById("input-field-1").checked;
        let deliveryMeth2 = document.getElementById("input-field-2").checked;
        let adress = document.getElementsByClassName("textarea")[0].value;

        let packingMeth = document.getElementById("input-field-3").checked;
        let userName = document.getElementById("customer-name").value;
        let userSurname = document.getElementById("customer-surname").value;
        let el = [name, counter, totalCost, deliveryMeth1, deliveryMeth2, packingMeth, userName, userSurname, adress];

        cart.push(el);
        usePromoCode();
        validatePhoneNumber();
        clearFields();
        orderSummary();
    }
}

let elem = document.getElementById("counter");
elem.addEventListener('change', bookCounter);
elem = document.getElementById("book-title");
elem.addEventListener('change', bookCounter);
elem = document.getElementById("use-promo");
elem.addEventListener('click', usePromoCode);
elem = document.getElementById("result");
elem.addEventListener('click', totalAmount);
elem = document.getElementById("clear");
elem.addEventListener('click', clearFields);
elem = document.getElementById("send");
elem.addEventListener('click', add); 
