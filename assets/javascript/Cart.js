const btn = document.querySelectorAll(".prod_1 button")
btn.forEach(function(button, index) {
        button.addEventListener("click", function(event) {
            var btnItem = event.target
            var product = btnItem.parentElement
            var productImg = product.querySelector("#image").src
            var productName = product.querySelector("#product_name").innerText
            var productPrice = product.querySelector(".prices").innerText
            
            addcart(productPrice, productImg, productName)
        })
    })
    
// ------------Thêm sản phẩm
function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName) {
            alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }

    var trcontent = '<tr><td style="display: flex; align-items: center;"><img src="' + productImg + '"><span class="title">' + productName + '</span></td><td><p><span class="price">' + productPrice + '</span><sup>đ</sup></p></td><td><input type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
        console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}
// ----------------Tính tổng tiền
function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0;
    for (var i = 0; i < cartItem.length; i++) {

        var inputValue = cartItem[i].querySelector("td input").value
        var productPrice = cartItem[i].querySelector(".price").innerHTML
        productPrice = productPrice.replace(/\./g, '')
        totalA = Number(inputValue) * Number(productPrice)

        totalC = totalC + totalA
        
        console.log(inputValue)
        console.log(productPrice)
        console.log(totalC)
    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
}
// -----------------------------Xóa sản phẩm
function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function(event) {
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
                console.log(cartitemR)
        })
    }
}

function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function() {
            carttotal()
        })
    }
}