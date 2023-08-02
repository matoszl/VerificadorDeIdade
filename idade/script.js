function verificar(){
    data = new Date()
    ano = data.getFullYear()
    nasc = document.getElementById('inasc')
    res = document.getElementById('res')
    if (nasc.value.length < 4 || nasc.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente! [ERRO]')
    }else {
        sexo = document.getElementsByName('sexo')
        idade = ano - Number(nasc.value)
        genero = ''
        img = document.getElementById('foto')
        if (sexo[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<14){
                //criança
                document.getElementById('foto').src= 'img/hbebe.png'
            }else if(idade<21){
                //jovem
                document.getElementById('foto').src= 'img/hjovem.png'
            }else if(idade<60){
                //adulto
                document.getElementById('foto').src= 'img/hadulto.png'
            }else {
                //idoso
                document.getElementById('foto').src= 'img/hidoso.png'
            }
        }else { 
            genero = 'Mulher'
            if(idade>=0 && idade<14){
                //criança
                document.getElementById('foto').src= 'img/mbebe.png'
            }else if(idade<21){
                //jovem
                document.getElementById('foto').src= 'img/mjovem.png'
            }else if(idade<60){
                //adulto
                document.getElementById('foto').src= 'img/madulto.png'
            }else {
                //idoso
                document.getElementById('foto').src= 'img/midoso.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Você é ' + genero + ' e tem ' + idade + ' anos'
        res.appendChild(img)
    }
}