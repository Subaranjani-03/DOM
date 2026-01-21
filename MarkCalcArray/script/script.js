let markForm = () => {

    // getting inputs

    let name = document.getElementById('name').value
    let tam = document.getElementById('tam').value
    let eng = document.getElementById('eng').value
    let mat = document.getElementById('mat').value
    let sci = document.getElementById('sci').value
    let soc = document.getElementById('soc').value

    // getting errors

    let nameErr = document.getElementById('nameErr')
    let tamErr = document.getElementById('tamErr')
    let engErr = document.getElementById('engErr')
    let matErr = document.getElementById('matErr')
    let sciErr = document.getElementById('sciErr')
    let socErr = document.getElementById('socErr')

    // getting final result id

    let user = document.getElementById('user')
    let total = document.getElementById('total')



    // validation
    let isCheck = true

    //name validation
    if(name === ''){
        nameErr.innerText = 'Must Fill This Field'
        document.getElementById('name').style.border = '1px solid red'
        isCheck = false
    }
    else{
        nameErr.innerText = ''
        document.getElementById('name').style.border = ''
    }
    
    //tamil validation
    if(tam === ''){
        tamErr.innerText = 'Must Fill This Field'
        document.getElementById('tam').style.border = '1px solid red'
        isCheck = false
    }
    else if(tam > 100 || tam < 0){
        tamErr.innerText = 'Mark Must Be Between 0 - 100'
        document.getElementById('tam').style.border = '1px solid red'
        isCheck = false
    }
    else{
        tamErr.innerText = ''
        document.getElementById('tam').style.border = ''
        
    }

    //english validation
    if(eng === ''){
        engErr.innerText = 'Must Fill This Field'
        document.getElementById('eng').style.border = '1px solid red'
        isCheck = false
    }
    else if(eng > 100 || eng < 0){
        engErr.innerText = 'Mark Must Be Between 0 - 100'
        document.getElementById('eng').style.border = '1px solid red'
        isCheck = false
    }
    else{
        engErr.innerText = ''
        document.getElementById('eng').style.border = ''
    }

    //maths validation
    if(mat === ''){
        matErr.innerText = 'Must Fill This Field'
        document.getElementById('mat').style.border = '1px solid red'
        isCheck = false
    }
    else if(mat > 100 || mat < 0){
        matErr.innerText = 'Mark Must Be Between 0 - 100'
        document.getElementById('mat').style.border = '1px solid red'
        isCheck = false
    }
    else{
        matErr.innerText = ''
        document.getElementById('mat').style.border = ''
    }

    //science validation
    if(sci === ''){
        sciErr.innerText = 'Must Fill This Field'
        document.getElementById('sci').style.border = '1px solid red'
        isCheck = false
    }
    else if(sci > 100 || sci < 0){
        sciErr.innerText = 'Mark Must Be Between 0 - 100'
        document.getElementById('sci').style.border = '1px solid red'
        isCheck = false
    }
    else{
        sciErr.innerText = ''
        document.getElementById('sci').style.border = ''
    }

    //social validation
    if(soc === ''){
        socErr.innerText = 'Must Fill This Field'
        document.getElementById('soc').style.border = '1px solid red'
        isCheck = false
    }
    else if(soc > 100 || soc < 0){
        socErr.innerText = 'Mark Must Be Between 0 - 100'
        document.getElementById('soc').style.border = '1px solid red'
        isCheck = false
    }
    else{
        socErr.innerText = ''
        document.getElementById('soc').style.border = ''
    }


    if(isCheck){

        //extracting name and marks with array
        let name_mark = [name,Number(tam),Number(eng),Number(mat),Number(sci),Number(soc)]

        //destructuring name and marks
        let [names, ...digits] = name_mark

        // total calucation using for..of
        let grandTotal = 0

        for(let idex of digits){
            grandTotal += idex
        }
      
        // display result
        user.innerText = `Name : ${names}`
        total.innerText = `Total : ${grandTotal} / 500`
    }
}