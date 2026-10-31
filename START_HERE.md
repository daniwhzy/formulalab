# FormulaLab — Começa aqui 💗

O site já foi colocado diretamente neste repositório, sem transferência de ZIP.

## Ficheiros disponíveis
- Páginas: `index.html`, `index-en.html`
- Estilos: `styles.css`, `layout.css`, `cards.css`, `responsive.css`
- Código: `app.js`, `site-core.js`, `site-catalog.js`, `site-compare.js`, `site-extras.js`
- Produtos: `data.js` e `catalog-1.js` a `catalog-4.js` (20 produtos)

## Publicar no GitHub Pages
1. Abre **Settings → Pages**.
2. Em **Build and deployment → Source**, seleciona **GitHub Actions**.
3. Em **Actions**, abre **Publish FormulaLab website** e executa novamente o workflow.

O endereço previsto é: https://daniwhzy.github.io/formulalab/

## Mascote original
Os seis PNGs originais ainda precisam de ser colocados em `assets/avatars/`. Sem eles, o site apresenta temporariamente um símbolo ♡, em vez de imagens partidas.

Para utilizar a montagem original das seis personagens que já tens no telemóvel:
1. Abre a pasta `assets` neste repositório.
2. Usa **Add file → Upload files** e seleciona o ficheiro original da montagem (3 colunas × 2 linhas).
3. Uma automação em `.github/workflows/prepare-mascots.yml` tentará gerar `welcome.png`, `happy.png`, `thinking.png`, `explaining.png`, `warning.png`, `love.png`.
4. Verifica os seis recortes em `assets/avatars` depois da execução e ajusta se necessário.

Não partilhes imagens pessoais no repositório público.

## Atenção
A semelhança INCI é uma comparação de nomes de ingredientes, não uma medida da eficácia ou da segurança do produto. Os preços europeus são referências e não preços em Angola.
