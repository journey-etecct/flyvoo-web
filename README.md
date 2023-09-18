# Flyvoo WEB (React)

O projeto tem dois Router's (um pra quando o usuário está logado e outro para quando o usuário <b>NÂO</b> estiver logado). O primeiro vai estar marcado com um `// USUÁRIO LOGADO` e o outro vai estar marcado com `// USUÁRIO NÃO LOGADO`.

O projeto já está pronto para adicionar novas telas que funcionam com roteamento nos seus devidos Routers. Para adicionar uma nova rota, é só criar uma pasta com um `index.tsx` e adicionar a função exportada no Router do `page.tsx` inicial. Exemplo:

```
<Router>
  ...
  <Routes>
    ...
    <Route path="/caminhoDaRota" Component={ComponenteDaRotaCriada}></Route>
    ...
  </Routes>
</Router>
```

Para criação de componentes, apenas crie uma pasta com um `index.tsx` na pasta `components`. Para importar imagens, videos etc., coloque-os na pasta `public` do projeto e referencie como se o projeto estivesse no `public`. Exemplo:

```
<Image src="/img/logo.png" width={84} height={64} alt="Logo do Flyvoo" />
```

Imagem localizada em: public/img/logo.png
