const btn = document.querySelectorAll(".prod_1 button")
btn.forEach(function(button, index) {
        button.addEventListener("click", function(event) {
            var btnItem = event.target
            var product = btnItem.parentElement
            var productImg = product.querySelector("#image").src
            var productName = product.querySelector("#product_name").innerText
            var productPrice = product.querySelector(".price").innerText
            // addcart(productPrice, productImg, productName)
            localStorage.setItem("list")
            localStorage.setItem(key, value)
            alert("Đã thêm vào giỏ hàng")
        })
    })

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

    var trcontent = '<tr><td style="display: flex; align-items: center;"><img src="' + productImg + '"><span class="title">' + productName + '</span></td><td><p><span class="prices">' + productPrice + '</span><sup>đ</sup></p></td><td><input style="width:30px;outline: none;" type="number" value="1" min="1"> </td><td style="cursor: pointer;text-align: right;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
        // console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}

