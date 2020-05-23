var body = document.body
var butcalendar = document.querySelector('#butli4')
butcalendar.addEventListener('click', calen)

let contcont = 0
function calen(){
    var calendar = document.querySelector('#calendar')
    calendar.style.display = 'block'
    contcont += 1
    if(contcont == 1){
        junho()
    }
}

var mes = document.querySelector('#calendar header h2')

let mesatual = new Date().getMonth()

switch(mesatual){
    case 0:
        mesatual = 'JANEIRO'
        break
    case 1:
        mesatual = 'FEVEREIRO'
        break
    case 2:
        mesatual = 'MARÇO'
        break
    case 3:
        mesatual = 'ABRIL'
        break
    case 4:
        mesatual = 'MAIO'
        break
    case 5:
        mesatual = 'JUNHO'
        break
    case 6:
        mesatual = 'JULHO'
        break
    case 7:
        mesatual = 'AGOSTO'
        break
    case 8:
        mesatual = 'SETEMBRO'
        break
    case 9:
        mesatual = 'OUTUBRO'
        break
    case 10:
        mesatual = 'NOVEMBRO'
        break
    case 11:
        mesatual = 'DEZEMBRO'
        break
}
mes.innerHTML = mesatual

let final
if(new Date().getMonth() % 2 == 0){
    final = 31
}
else{
    final = 30
}

function maio(){
    var table = document.querySelector('#datas table')
    let tr = document.createElement('tr')
    let tr1 = document.createElement('tr')
    let tr2 = document.createElement('tr')
    let tr3 = document.createElement('tr')
    let tr4 = document.createElement('tr')
    let tri = document.createElement('tr')
    
    
    
    let continit = 1
    let day = new Date().getDate()
    
    for(let init = 1; init <= 7; init++){
        let tdi = document.createElement('td')
        tdi.style.padding = '20px'
        if(init <= 5){
            tdi.innerHTML = '<br>'
            tri.appendChild(tdi)
            table.appendChild(tri)
        }
        if(init > 5){
            tdi.innerHTML = continit
            tdi.style.color = 'purple'
            tdi.style.fontWeight = 'bold'
            tdi.style.backgroundColor = 'white'
            tdi.style.cursor = 'pointer'
            tdi.addEventListener('mouseenter', entrari)
            tdi.addEventListener('mouseout', sairi)
            function entrari(){
                tdi.style.backgroundColor = 'yellow'
                if(init == day){
                    tdi.style.backgroundColor = 'purple'
                }
            }
            function sairi(){
                tdi.style.backgroundColor = 'white'
                if(init == day){
                    tdi.style.backgroundColor = '#424242'
                    tdi.style.color = 'yellow'
                }
            }
            if(init == day){
                tdi.style.backgroundColor = '#424242'
                tdi.style.color = 'yellow'
            }
            tri.appendChild(tdi)
            table.appendChild(tri)
            continit += 1
        }
    }
    
    for(let d = 3; d <= final; d++){
        if(d <= 9){
            let td = document.createElement('td')
            td.style.padding = '20px'
            td.style.color = 'purple'
            td.style.fontWeight = 'bold'
            td.style.backgroundColor = 'white'
            td.style.cursor = 'pointer'
            td.innerHTML = d
            td.addEventListener('mouseenter', entrar1)
            td.addEventListener('mouseout', sair1)
            function entrar1(){
                td.style.backgroundColor = 'yellow'
                if(d == day){
                    td.style.backgroundColor = 'purple'
                }
            }
            function sair1(){
                td.style.backgroundColor = 'white'
                if(d == 3){
                    td.style.backgroundColor = 'red'
                }
                if(d == day){
                    td.style.backgroundColor = '#424242'
                    td.style.color = 'yellow'
                }
            }
            if(d == 3){
                td.style.backgroundColor = 'red'
                td.style.color = 'white'
            }
            if(d == day){
                td.style.backgroundColor = '#424242'
                td.style.color = 'yellow'
            }
            tr.appendChild(td)
            table.appendChild(tr)
        }
        else if(d > 9 && d <= 16){
            let td1 = document.createElement('td')
            td1.style.padding = '20px'
            td1.style.color = 'purple'
            td1.style.fontWeight = 'bold'
            td1.style.backgroundColor = 'white'
            td1.style.cursor = 'pointer'
            td1.innerHTML = d
            td1.addEventListener('mouseenter', entrar2)
            td1.addEventListener('mouseout', sair2)
            function entrar2(){
                td1.style.backgroundColor = 'yellow'
                if(d == day){
                    td1.style.backgroundColor = 'purple'
                }
            }
            function sair2(){
                td1.style.backgroundColor = 'white'
                if(d == 10){
                    td1.style.backgroundColor = 'red'
                }
                if(d == day){
                    td1.style.backgroundColor = '#424242'
                    td1.style.color = 'yellow'
                }
            }
            if(d == 10){
                td1.style.backgroundColor = 'red'
                td1.style.color = 'white'
            }
            if(d == day){
                td1.style.backgroundColor = '#424242'
                td1.style.color = 'yellow'
            }
            tr1.appendChild(td1)
            table.appendChild(tr1)
        }
        else if(d > 16 && d <= 23){
            let td2 = document.createElement('td')
            td2.style.padding = '20px'
            td2.style.color = 'purple'
            td2.style.fontWeight = 'bold'
            td2.style.backgroundColor = 'white'
            td2.style.cursor = 'pointer'
            td2.innerHTML = d
            td2.addEventListener('mouseenter', entrar3)
            td2.addEventListener('mouseout', sair3)
            function entrar3(){
                td2.style.backgroundColor = 'yellow'
                if(d == day){
                    td2.style.backgroundColor = 'purple'
                }
            }
            function sair3(){
                td2.style.backgroundColor = 'white'
                if(d == day){
                    td2.style.backgroundColor = '#424242'
                    td2.style.color = 'yellow'
                }
                if(d == 17){
                    td2.style.backgroundColor = 'red'
                }
            }
            if(d == 17){
                td2.style.backgroundColor = 'red'
                td2.style.color = 'white'
            }
            if(d == day){
                td2.style.backgroundColor = '#424242'
                td2.style.color = 'yellow'
            }
            tr2.appendChild(td2)
            table.appendChild(tr2)
        }
        else if(d > 23 && d <= 30){
            let td3 = document.createElement('td')
            td3.style.padding = '20px'
            td3.style.color = 'purple'
            td3.style.fontWeight = 'bold'
            td3.style.backgroundColor = 'white'
            td3.style.cursor = 'pointer'
            td3.innerHTML = d
            td3.addEventListener('mouseenter', entrar4)
            td3.addEventListener('mouseout', sair4)
            function entrar4(){
                td3.style.backgroundColor = 'yellow'
                if(d == day){
                    td3.style.backgroundColor = 'purple'
                }
            }
            function sair4(){
                td3.style.backgroundColor = 'white'
                if(d == 24){
                    td3.style.backgroundColor = 'red'
                }
                if(d == day){
                    td3.style.backgroundColor = '#424242'
                    td3.style.color = 'yellow'
                }
            }
            if(d == 24){
                td3.style.backgroundColor = 'red'
                td3.style.color = 'white'
            }
            if(d == day){
                td3.style.backgroundColor = '#424242'
                td3.style.color = 'yellow'
            }
            tr3.appendChild(td3)
            table.appendChild(tr3)
        }
        else if(d > 30){
            let td4 = document.createElement('td')
            td4.style.padding = '20px'
            td4.style.color = 'purple'
            td4.style.fontWeight = 'bold'
            td4.style.backgroundColor = 'white'
            td4.style.cursor = 'pointer'
            td4.innerHTML = d
            td4.addEventListener('mouseenter', entrar5)
            td4.addEventListener('mouseout', sair5)
            function entrar5(){
                td4.style.backgroundColor = 'yellow'
                if(d == day){
                    td4.style.backgroundColor = 'purple'
                }
            }
            function sair5(){
                td4.style.backgroundColor = 'white'
                if(d == 31){
                    td4.style.backgroundColor = 'red'
                }
                if(d == day){
                    td4.style.backgroundColor = '#424242'
                    td4.style.color = 'yellow'
                }
            }
            if(d == 31){
                td4.style.backgroundColor = 'red'
                td4.style.color = 'white'
            }
            if(d == day){
                td4.style.backgroundColor = '#424242'
                td4.style.color = 'yellow'
            }
            tr4.appendChild(td4)
            table.appendChild(tr4)
        }
    }
}


function junho(){
    var table = document.querySelector('#datas table')
    let tr = document.createElement('tr')
    let tr1 = document.createElement('tr')
    let tr2 = document.createElement('tr')
    let tr3 = document.createElement('tr')
    let tr4 = document.createElement('tr')
    let tri = document.createElement('tr')
    
    
    
    let continit = 1
    let day = new Date().getDate()
    
    for(let init = 1; init <= 7; init++){
        let tdi = document.createElement('td')
        tdi.style.padding = '20px'
        if(init == 1){
            tdi.innerHTML = '<br>'
            tri.appendChild(tdi)
            table.appendChild(tri)
        }
        if(init > 1){
            tdi.innerHTML = continit
            tdi.style.color = 'purple'
            tdi.style.fontWeight = 'bold'
            tdi.style.backgroundColor = 'white'
            tdi.style.cursor = 'pointer'
            tdi.addEventListener('mouseenter', entrari)
            tdi.addEventListener('mouseout', sairi)
            function entrari(){
                tdi.style.backgroundColor = 'yellow'
                if(init == day){
                    tdi.style.backgroundColor = 'purple'
                }
            }
            function sairi(){
                tdi.style.backgroundColor = 'white'
                if(init == day){
                    tdi.style.backgroundColor = '#424242'
                    tdi.style.color = 'yellow'
                }
            }
            if(init == day){
                tdi.style.backgroundColor = '#424242'
                tdi.style.color = 'yellow'
            }
            tri.appendChild(tdi)
            table.appendChild(tri)
            continit += 1
        }
    }
    
    for(let d = 7; d <= final; d++){
        if(d <= 13){
            let td = document.createElement('td')
            td.style.padding = '20px'
            td.style.color = 'purple'
            td.style.fontWeight = 'bold'
            td.style.backgroundColor = 'white'
            td.style.cursor = 'pointer'
            td.innerHTML = d
            td.addEventListener('mouseenter', entrar1)
            td.addEventListener('mouseout', sair1)
            function entrar1(){
                td.style.backgroundColor = 'yellow'
                if(d == day){
                    td.style.backgroundColor = 'purple'
                }
            }
            function sair1(){
                td.style.backgroundColor = 'white'
                if(d == 7){
                    td.style.backgroundColor = 'red'
                }
                if(d == day){
                    td.style.backgroundColor = '#424242'
                    td.style.color = 'yellow'
                }
            }
            if(d == 7){
                td.style.backgroundColor = 'red'
                td.style.color = 'white'
            }
            if(d == day){
                td.style.backgroundColor = '#424242'
                td.style.color = 'yellow'
            }
            tr.appendChild(td)
            table.appendChild(tr)
        }
        else if(d > 13 && d <= 20){
            let td1 = document.createElement('td')
            td1.style.padding = '20px'
            td1.style.color = 'purple'
            td1.style.fontWeight = 'bold'
            td1.style.backgroundColor = 'white'
            td1.style.cursor = 'pointer'
            td1.innerHTML = d
            td1.addEventListener('mouseenter', entrar2)
            td1.addEventListener('mouseout', sair2)
            function entrar2(){
                td1.style.backgroundColor = 'yellow'
                if(d == day){
                    td1.style.backgroundColor = 'purple'
                }
            }
            function sair2(){
                td1.style.backgroundColor = 'white'
                if(d == 14){
                    td1.style.backgroundColor = 'red'
                }
                if(d == day){
                    td1.style.backgroundColor = '#424242'
                    td1.style.color = 'yellow'
                }
            }
            if(d == 14){
                td1.style.backgroundColor = 'red'
                td1.style.color = 'white'
            }
            if(d == day){
                td1.style.backgroundColor = '#424242'
                td1.style.color = 'yellow'
            }
            tr1.appendChild(td1)
            table.appendChild(tr1)
        }
        else if(d > 20 && d <= 27){
            let td2 = document.createElement('td')
            td2.style.padding = '20px'
            td2.style.color = 'purple'
            td2.style.fontWeight = 'bold'
            td2.style.backgroundColor = 'white'
            td2.style.cursor = 'pointer'
            td2.innerHTML = d
            td2.addEventListener('mouseenter', entrar3)
            td2.addEventListener('mouseout', sair3)
            function entrar3(){
                td2.style.backgroundColor = 'yellow'
                if(d == day){
                    td2.style.backgroundColor = 'purple'
                }
            }
            function sair3(){
                td2.style.backgroundColor = 'white'
                if(d == day){
                    td2.style.backgroundColor = '#424242'
                    td2.style.color = 'yellow'
                }
                if(d == 21){
                    td2.style.backgroundColor = 'red'
                }
            }
            if(d == 21){
                td2.style.backgroundColor = 'red'
                td2.style.color = 'white'
            }
            if(d == day){
                td2.style.backgroundColor = '#424242'
                td2.style.color = 'yellow'
            }
            tr2.appendChild(td2)
            table.appendChild(tr2)
        }
        else if(d > 27 && d <= 34){
            let td3 = document.createElement('td')
            td3.style.padding = '20px'
            td3.style.color = 'purple'
            td3.style.fontWeight = 'bold'
            td3.style.backgroundColor = 'white'
            td3.style.cursor = 'pointer'
            td3.innerHTML = d
            td3.addEventListener('mouseenter', entrar4)
            td3.addEventListener('mouseout', sair4)
            function entrar4(){
                td3.style.backgroundColor = 'yellow'
                if(d == day){
                    td3.style.backgroundColor = 'purple'
                }
            }
            function sair4(){
                td3.style.backgroundColor = 'white'
                if(d == 28){
                    td3.style.backgroundColor = 'red'
                }
                if(d == day){
                    td3.style.backgroundColor = '#424242'
                    td3.style.color = 'yellow'
                }
            }
            if(d == 28){
                td3.style.backgroundColor = 'red'
                td3.style.color = 'white'
            }
            if(d == day){
                td3.style.backgroundColor = '#424242'
                td3.style.color = 'yellow'
            }
            tr3.appendChild(td3)
            table.appendChild(tr3)
        }
        else if(d > 34){
            let td4 = document.createElement('td')
            td4.style.padding = '20px'
            td4.style.color = 'purple'
            td4.style.fontWeight = 'bold'
            td4.style.backgroundColor = 'white'
            td4.style.cursor = 'pointer'
            td4.innerHTML = d
            td4.addEventListener('mouseenter', entrar5)
            td4.addEventListener('mouseout', sair5)
            function entrar5(){
                td4.style.backgroundColor = 'yellow'
                if(d == day){
                    td4.style.backgroundColor = 'purple'
                }
            }
            function sair5(){
                td4.style.backgroundColor = 'white'
                if(d == day){
                    td4.style.backgroundColor = '#424242'
                    td4.style.color = 'yellow'
                }
            }
            if(d == day){
                td4.style.backgroundColor = '#424242'
                td4.style.color = 'yellow'
            }
            tr4.appendChild(td4)
            table.appendChild(tr4)
        }
    }
}




let butclose = document.querySelector('#close')
butclose.addEventListener('click', fechar)
function fechar(){
    calendar.style.display = 'none'
}
