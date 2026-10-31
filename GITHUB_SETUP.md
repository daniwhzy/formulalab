# FormulaLab — passos de instalação no GitHub

O repositório já foi inicializado com os ficheiros HTML e uma automação de importação.

## A única transferência manual que falta

No repositório `daniwhzy/formulalab`:
1. Toca em **Add file → Upload files**.
2. Escolhe o ficheiro **FormulaLab_GitHub_Ready.zip** (o ZIP disponibilizado na conversa do ChatGPT).
3. Confirma o upload com **Commit changes**.
4. Abre o separador **Actions** e acompanha **Import and publish FormulaLab**.

A automação criada em `.github/workflows/import-formulalab.yml` vai:
- extrair o ZIP;
- verificar que existem as páginas, estilos, JavaScript, catálogo e seis imagens;
- executar o teste do algoritmo;
- enviar os ficheiros extraídos para o ramo `main`;
- tentar configurar e publicar o GitHub Pages.

Se o GitHub solicitar ativação de GitHub Pages, vai a **Settings → Pages → Build and deployment**, define **Source: GitHub Actions**, guarda e volta a **Actions** para executar o workflow manualmente.

O endereço previsto é `https://daniwhzy.github.io/formulalab/`, mas apenas depois de o deployment ficar concluído com sucesso.

## Importante

Os nomes e a estrutura dentro do ZIP devem ser preservados. Não publiques um ZIP isolado como se fosse o site. O código e as seis ilustrações precisam de estar disponíveis na raiz e em `assets/avatars/` depois da importação.
