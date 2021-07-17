# Agora é sua vez!
> Para os próximos exercícios use a seguinte página HTML como base para fazer o que é pedido.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.6/css/all.css">
  <link rel="stylesheet" href="./css/feed.css">
  <title>Document</title>
</head>

<body>
  <div id="app" class="columns">
    <div class="column">
      <div class="tweet">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src="https://semantic-ui.com/images/avatar2/large/matthew.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>James</strong><small>@jokerjames</small>
                  <br>
                  If you don't succeed, dust yourself off and try again.
                </p>
              </div>
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small" id='likeIcon'><i class="fas fa-heart"></i></span>
                  <span class="likes" id='currentLikes'>0</span>
                  <span class="icon is-small" id='starIcon'><i class="fas fa-star"></i></span>
                  <span class="likes" id='currentStars'>0</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

```css
/* Link de referência: https://codepen.io/itslit/pen/xWjZKy */
html, body {
  height: 100%;
  padding-top: 10px;
  background: #e6ecf1;
}

#app {
  height: 100%;
  padding-top: 0px;
  text-align: center;
}

#app .button {
  margin-bottom: 20px;
}

#app .tweet {
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 15px;
}

#app .box {
  margin-bottom: 0;
  border-radius: 0;
}

#app .content small {
  color: #00d1b2;
}

#app img {
  border-radius: 30px;
}

#app .level-item {
  padding-left: 10px;
  color: #00d1b2;
}

#app input:focus {
  border-color: #00d1b2;
}

#app .likes {
  padding: 0 7.5px;
}

#app input {
  font-weight: bold;
}

#app .tweets-move {
  transition: transform 1s;
}
```

> Antes de começar faça o setup básico para sua aplicação ter a comunicação do socket preparada do lado do cliente e do lado do servidor.
01. Faça com que quando o cliente clicar no elemento com o id likeIcon , seja emitido um evento likePost para o servidor.
02. Do lado do servidor faça um listener para capturar o evento likePost que vai incrementar a quantidade atual de likes do post.
03. Emita um evento updateLikes apenas para o cliente que enviou o like enviando a quantidade atual de likes.
04. Modifique o código feito no exercício anterior para com que o evento updateLikes seja enviado para todos os clientes conectados.
05. Faça com que o ícone com id starIcon emita um evento starPost e atualize a quantidade diretamente pelo front-end.
06. No servidor implemente um listener para o evento starPost e emita um evento updateStars com a quantidade para todos os clientes exceto o cliente que enviou o evento.
07. Implemente um listener para o evento updateStars para atualizar a quantidade atual de estrelas.

## Bônus
08. Reestruture a aplicação para usar a arquitetura MVC e refatore toda a parte do socket para permitir que seja possível fazer like especificamente em cada tweet sem afetar a quantidade dos demais.
