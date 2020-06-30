class Personagem extends Animacao {

  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {

    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.variacaoY = variacaoY;

    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -40;
    this.pulos = 0;
    this.invencivel = false;

  }

  pula() {

    if (this.pulos < 2) {

      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos = this.pulos + 1;

    }

  }

  aplicaGravidade() {

    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {

      this.y = this.yInicial;

      this.pulos = 0;

    }

  }

  tornarInvencivel() {

    this.invencivel = true;
    setTimeout(() => {

      this.invencivel = false

    }, 500);

  }

  estaColidindo(inimigo) {
    noFill()
    rect(this.x, this.y, this.largura, this.altura)    
    rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura) 
    if (this.invencivel) {

      return false;

    }

    const precisao = .7;

    const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

    return colisao;

  }
  
  Recomecar() {
    pontuacao.pontos = 0;
    personagem.y = height - personagem.altura - personagem.variacaoY;
    vida.reiniciaVida()
  }
}