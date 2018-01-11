# ScrollSpy com Bootstrap

ScrollSpy do Bootstrap, ativa os itens do menu de navegação à medida que o usuário acessa as seções da página e adicionando uma rolagem suave otimizando a experiência do usuário.

## Veja ao vivo

**[demo](http://cristianefaria.com/demo-bootstrap-scrollspy/)**

## Como funciona

Scrollspy tem alguns requisitos para funcionar corretamente:

Neste exemplo usei a versão 3.3.7 do Bootstrap e a versão 3.2.1 do JQuery


## Uso


### Uso básico

Após o download, alinhe o **id** e a **classe** do seu navbar conforme o arquivo **scrollspy.js** do modelo.

### Uso Avançado

Edite o arquivo **scrollspy.js** incluído com o modelo.

Adicione ao body o scrollspy através da classe do seu navbar
```javascript
$('body').scrollspy({target: ".navbar", offset: 80});
```

Adicione uma rolagem suave em todos os links dentro da barra de navegação chamdo pelo seu id
```javascript
 $("#myNavbar a").on('click', function (event) { ... }
 ```

O valor (1000) especifica o número de milissegundos necessários para rolar para a área especificada
```javascript
$('html, body').animate({ ... }, 1000, function () { ... });
 ```


## Copyright and License

Copyright 2018 Cristiane Faria. Code released under the [MIT](https://github.com/cristiianefaria/scrollspy-com-bootstrap/blob/master/LICENSE) license.
