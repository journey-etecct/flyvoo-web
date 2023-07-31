<?php
session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!--icone-->
    <link rel="shortcut icon" href="../img/logotriangulotransparente.png" type="image/x-icon">
    
    <!--links-->
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <script src="./assets/js/main.js" defer></script>

    <title>Flyvoo</title>
    
  </head>
  <body>

  <!--PHP que pega as informações salvas da sessão-->

  <?php
        if(isset($_SESSION['id']) and (isset($_SESSION['nome']))){
            echo "Bem vindo " . $_SESSION['nome'] . "<br>";
        }else{
            echo "<div id='dados-usuario'>";
            echo "</div>";
        };
  ?>

    <div class="cabeçalho">
      <div id="logo-container"><a href="#"><img class="logo" type="button" src="../img/logotriangulotransparente.png"></a>
        <h2>Flyvoo</h2>
      </div>
        <a href="./form/cadastro.html" target="blank"><img src="./img/img1w.png" id="cadastro"></a>
      <!--<button class="btn-cad" href="#"><img src="/assets/img/cadastro.png"></button>-->
    </div>
    <div class="wrapper">
      <i class="bi bi-arrow-left-circle-fill" id="left"></i>
    <ul class="carousel">
        <li class="card">
          <div class="img"><img src="./img/logica.png" alt="img" draggable="false"></div>
          <h2><i class="bi bi-star-fill"></i><i class="bi bi-star-half" ></i><i class="bi bi-star"></i></h2>
          <h2>Sobre mim</h2>
          <button>Iniciar</button>
        </li>
        <li class="card">
          <div class="img"><img src="./img/calculo.png" alt="img" draggable="false"></div>
          <h2><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></h2>
          <h2>Raciocínio lógico</h2>
          <button>Iniciar</button>
        </li>
        <li class="card">
          <div class="img"><img src="./img/foto1.jpg" alt="img" draggable="false"></div>
          <h2><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></h2>
          <h2>Cultura</h2>
          <button>Iniciar</button>
        </li>
        <li class="card">
          <div class="img"><img src="./img/foto1.jpg" alt="img" draggable="false"></div>
          <h2><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></h2>
          <h2>Lógica 4</h2>
          <button>Iniciar</button>
        </li>
        <li class="card">
          <div class="img"><img src="./img/foto1.jpg" alt="img" draggable="false"></div>
          <h2><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></h2>
          <h2>Lógica 5</h2>
          <button>Iniciar</button>
        </li>
        <li class="card">
          <div class="img"><img src="./img/foto1.jpg" alt="img" draggable="false"></div>
          <h2><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></h2>
          <h2>Lógica 6</h2>
          <button>Iniciar</button>
        </li>
      </ul>
      <i class="bi bi-arrow-right-circle-fill" id="right"></i>
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