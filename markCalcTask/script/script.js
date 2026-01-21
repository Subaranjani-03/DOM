debugger
      let total = () => {
        debugger
        //getting input value
        let tam = document.getElementById("tamil").value
        let eng = document.getElementById("english").value
        let mat = document.getElementById("maths").value
        let sci = document.getElementById("science").value
        let soc = document.getElementById("social").value

        //getting span id
        let tamError = document.getElementById("tamError");
        let engError = document.getElementById("engError");
        let matError = document.getElementById("matError");
        let sciError = document.getElementById("sciError");
        let socError = document.getElementById("socError");

        let isCheck = true

        //error validations
        if (tam === "") {
          tamError.innerText = "Must Fill This Field !";
          isCheck = false
        } else if (tam < 0 || tam > 100) {
          tamError.innerText = "Invalid Mark !";
          isCheck = false
        } else {
          tamError.innerText = "";
          // isCheck = true
        }

        if (eng === "") {
          engError.innerText = "Must Fill This Field !";
          isCheck = false
        } else if (eng < 0 || eng > 100) {
          engError.innerText = "Invalid Mark !";
          isCheck = false
        } else {
          engError.innerText = "";
          // isCheck = true
        }

        if (mat === "") {
          matError.innerText = "Must Fill This Field !";
          isCheck = false
        } else if (mat < 0 || mat > 100) {
          matError.innerText = "Invalid Mark !";
          isCheck = false
        } else {
          matError.innerText = "";
          // isCheck = true
        }

        if (sci === "") {
          sciError.innerText = "Must Fill This Field !";
          isCheck = false
        } else if (sci < 0 || sci > 100) {
          sciError.innerText = "Invalid Mark !";
          isCheck = false
        } else {
          sciError.innerText = "";
          // isCheck = true
        }

        if (soc === "") {
          socError.innerText = " Must Fill This Field !"
          isCheck = false
        } else if (soc < 0 || soc > 100) {
          socError.innerText = "Invalid Mark !";
          isCheck = false
        } else {
          socError.innerText = "";
          // isCheck = true
        }

        // //total mark
        if(isCheck){
          let sum = Number(tam) + Number(eng) + Number(mat) + Number(sci) + Number(soc)
          let tot = document.getElementById("totalCalc");
          tot.innerText = `Your Total Mark Is ${sum} / 500`;
        }
      };