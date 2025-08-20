class personagens{
	constructor(nomeDoPersonagem, idadeDoPersonagem, tipoDoPersonagem, tipoDoAtaque){
    	this.nomeDoPersonagem = nomeDoPersonagem
        this.idadeDoPersonagem = idadeDoPersonagem
        this.tipoDoPersonagem = tipoDoPersonagem
        this.tipoDoAtaque = tipoDoAtaque
        }
 	
	ataque(){
    	console.log(`O ${this.tipoDoPersonagem} atacou usando ${this.tipoDoAtaque}`)
        }
        
    }
       	
    let personagemMago = new personagens ("Vinicius", "23", "Mago", "magia")
    let personagemGuerreiro = new personagens ("Hugo", "24", "Guerreiro", "espada")
    let personagemMonge = new personagens ("Guto", "25", "Monge", "artes marciais")
   	let personagemNinja = new personagens ("Naldin", "25", "Ninja", "shuriken")
    
    personagemMago.ataque()
    
    console.log (" ")
    
    personagemGuerreiro.ataque()
    
    console.log (" ")

    personagemMonge.ataque()
    
	console.log (" ")

    personagemNinja.ataque()