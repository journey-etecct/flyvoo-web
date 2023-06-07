<?php
session_start();
?>


<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <title>Flyvoo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./img/logotriangulotransparente.png" type="image/x-icon">
    <link rel="stylesheet" href="./assets/css/main.css">
    <script src="./assets/js/main.js" defer></script>
  </head>
  <body>

  <?php
        if(isset($_SESSION['id']) and (isset($_SESSION['nome']))){
            echo "Bem vindo " . $_SESSION['nome'] . "<br>";
        }else{
            echo "<div id='dados-usuario'>";
            echo "</div>";
        };
  ?>

    <div class="cabeçalho">
      <a href="#" class="btn-cad"><img class="logo" type="button" src="./img/logotriangulotransparente.png"></a>
      
        <a href="./form/cadastro.html" target="blank"><img src="./img/img1w.png" id="cadastro"></a>
      <!--<button class="btn-cad" href="#"><img src="/assets/img/cadastro.png"></button>-->
    </div>
    <div class="wrapper">
      <img id="left" src="./img/L.png">
      <ul class="carousel">
        <li class="card">
          <div class="img"><img src="./img/foto1.jpg" alt="img" draggable="false"></div>
          <h2><img src="./img/star_empty.png"><img src="./img/star_empty.png"><img src="./img/star_empty.png"></h2>
          <span>Lógica 1</span>
          <button>Iniciar</button>
        </li>
        <li class="card">
          <div class="img"><img src="./img/foto1.jpg" alt="img" draggable="false"></div>
          <h2><img src="./img/star_empty.png"><img src="./img/star_empty.png"><img src="./img/star_empty.png"></h2>
          <span>Lógica 2</span>
          <button>Iniciar</button>
        </li>
        <li class="card">
          <div class="img"><img src="./img/foto1.jpg" alt="img" draggable="false"></div>
          <h2><img src="./img/star_empty.png"><img src="./img/star_empty.png"><img src="./img/star_empty.png"></h2>
          <span>Design</span>
          <button>Iniciar</button>
        </li>
        <li class="card">
          <div class="img"><img src="./img/foto1.jpg" alt="img" draggable="false"></div>
          <h2><img src="./img/star_empty.png"><img src="./img/star_empty.png"><img src="./img/star_empty.png"></h2>
          <span>Design</span>
          <button>Iniciar</button>
        </li>
        <li class="card">
          <div class="img"><img src="./img/foto1.jpg" alt="img" draggable="false"></div>
          <h2><img src="./img/star_empty.png"><img src="./img/star_empty.png"><img src="./img/star_empty.png"></h2>
          <h2>Rafael Lucilio</h2>
          <span>Design</span>
        </li>
        <li class="card">
          <div class="img"><img src="./img/foto1.jpg" alt="img" draggable="false"></div>
          <h2><img src="./img/star_empty.png"><img src="./img/star_empty.png"><img src="./img/star_empty.png"></h2>
          <h2>Danilo Carvalho</h2>
          <span>Developer & Design</span>
        </li>
      </ul>
      <img id="right" src="./img/R.png">
    </div>
    <footer class="rodapé">
      <ul class="nav-header">
        <li>
          <a href="#"><img src="./img/img4w.png" id="icons" style="width: 40px;"></a>
        </li>
        <li>
          <a href="#"><img src="./img/img3w.png" id="icons" style="width: 40px;"></a>
        </li>
        <li>
          <a href="#"><img src="./img/img6w.png" id="icons" style="width: 40px;"></a>
        </li>
        <li>
          <a href="#"><img src="./img/config.png" id="icons" style="width: 40px;"></a>
        </li>
        </ul>
    </footer>
  </body>
</html>