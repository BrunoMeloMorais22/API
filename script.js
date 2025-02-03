


async function clima() {
    const cidade = document.getElementById("cidade").value
    if(cidade) {
        await buscarClima(cidade)
    }

    else{
        console.log("Digite uma cidade")
    }
}


async function buscarClima(climaCidade) {
    try{
    
        let resultado = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${climaCidade},BR&appid=2e53058479c5e6075b8e4570c6c3a7fd&units=metric`)

        if(!resultado.ok) throw new Error(`Erro: ${resultado.statusText}`);

        let dados = await resultado.json();

        if(!dados.name){
            console.log("Cidade não encontrada")
        }

        let h3 = document.createElement('h3')
        h3.textContent = "Buscando cidade..."

        let p = document.createElement("p")
        p.textContent = ` 🌍  Nome: ${dados.name}`
        
        let p2 = document.createElement("p")
        p2.textContent = ` 🌡️ Temperatura: ${dados.main.temp}`

        let p3 = document.createElement("p")
        p3.textContent = ` 🌧️ Descrição: ${dados.weather[0].description}`


        document.getElementById('info').appendChild(h3)


        setTimeout(() =>{
            document.getElementById('info').appendChild(p)
            document.getElementById('info').appendChild(p2)
            document.getElementById('info').appendChild(p3)
        }, 2000)
        
        }

        catch(erro){
            console.log(erro.message)
        }
    }
