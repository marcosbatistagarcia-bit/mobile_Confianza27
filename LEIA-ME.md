# Confianza R1 no GitHub Pages

## Conteúdo
- `index.html`: o sistema completo, em um só arquivo
- `dados/confianza-dados.json`: base inicial, lida na **primeira** vez que cada navegador abre o site
- `.nojekyll`: faz o GitHub Pages servir os arquivos como estão

## Publicar
1. Crie um repositório no GitHub, por exemplo `confianza`.
2. Envie os três itens acima para a raiz do repositório (botão *Add file → Upload files*), mantendo a pasta `dados/`.
3. Em *Settings → Pages*, escolha *Deploy from a branch*, branch `main` e pasta `/ (root)`.
4. Em 1 ou 2 minutos o site abre em `https://SEU-USUARIO.github.io/confianza/`.

## Alimentar a base
**Do Claude para o GitHub:** no Confianza publicado no Claude, entre como administrador da plataforma, abra *Plataforma → Exportar base completa* e substitua `dados/confianza-dados.json` no repositório pelo arquivo baixado (mesmo nome).

**Por empresa:** em *Dados de Entrada → Backup*, *Importar JSON* aceita o backup da 1ª versão e o backup do R1.

**Do GitHub para o Claude:** em *Plataforma → Importar base completa*, envie o `confianza-dados.json`. Usuários que já têm senha no Claude mantêm a senha.

## Importante
- O GitHub Pages **não tem banco de dados compartilhado**. O que alguém cadastra no site do GitHub fica só no navegador dessa pessoa. Para levar os dados de volta, use *Exportar base completa* e atualize o arquivo do repositório ou importe no Claude.
- Quem já abriu o site continua com a cópia local. Para receber uma base nova do repositório, é preciso limpar os dados do site no navegador.
- **O arquivo `dados/confianza-dados.json` fica público**: qualquer pessoa que souber o endereço consegue baixá-lo, mesmo que o repositório seja privado. Use no GitHub apenas os dados de demonstração. Dados reais de clientes precisam de um banco com login no servidor (Firebase, Supabase ou servidor próprio).
- A exportação sai sem senhas (exceto dos usuários de demonstração `.exemplo`), sem mensagens e sem registros de acesso. Quem estiver sem senha usa *Esqueci a senha* para criar uma.
