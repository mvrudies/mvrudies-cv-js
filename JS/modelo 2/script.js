function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada: ${idade} anos ! `
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Masculino'
            document.body.style.background = '#2E2926'
            if(idade >= 0 && idade < 4){
               //Bebe 
               img.setAttribute('src', 'bebe_m.png')
            }else if (idade < 13){
               //Criança
               img.setAttribute('src', 'criança_m.png')
            }else if (idade < 18){
                //Adolecente
                img.setAttribute('src', 'ado_m.png')
            }else if (idade < 30){
                //Jovem Adulto
                img.setAttribute('src', 'jovemAdu_m.png')
            }else if (idade < 65){
                //Adulto
                img.setAttribute('src', 'Adu_m.png')
            }else{
                //Idoso
                img.setAttribute('src', 'Idoso_m.png')
            }
        } else if (fsex[1].checked){
            genero = 'Feminino'
            document.body.style.background = '#843339'
            if(idade >= 0 && idade < 4){
                //Bebe 
                img.setAttribute('src', 'bebe_f.png')
             }else if (idade < 13){
                //Criança
                img.setAttribute('src', 'criança_f.png')
             }else if (idade < 18){
                 //Adolecente
                 img.setAttribute('src', 'ado_f.png')
             }else if (idade < 30){
                 //Jovem Adulto
                 img.setAttribute('src', 'jovemAdu_f.png')
             }else if (idade < 65){
                 //Adulto
                 img.setAttribute('src', 'Adu_f.png')
             }else{
                //Idoso
                img.setAttribute('src', 'Idoso_f.png')
             }
        }
        res.innerHTML =`Detectamos gênero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}