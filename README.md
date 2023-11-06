# Criar .nojekyll

O Jekyll - builder que o GitHub Pages utiliza - considera arquivos e pastas que começam com _ como recursos especiais e acaba não copiando eles.
Basta criar um arquivo vazio na root da branch gh-pages chamado .nojekyll. Isso vai fazer ele ignorar o processo de build com o Jekyll.
