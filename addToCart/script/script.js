 let number = 0

      let addToCart = () => {
        let value = document.getElementById("count")
        number += 1
        value.innerText = number
      }
      let addToCartDecre = () => {
        let value = document.getElementById("count")
        if (number < 1) {
          alert("No Products In Cart To Remove!")
        } else {
          number -= 1
          value.innerText = number
        }
      }
      let theme = () => {
        let a = document.getElementById("color")
        let b = document.getElementById("themecolor").value
        a.style.backgroundColor = b
      }