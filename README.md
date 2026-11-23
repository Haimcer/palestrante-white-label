# Site White Label para Palestrante

Template estático em HTML, CSS e JavaScript puro, componentizado por módulos e preparado para personalização rápida.

## Como rodar localmente

Como o projeto usa `type="module"`, abra com um servidor local:

```bash
cd palestrante-white-label
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Onde editar

A maior parte das alterações fica em:

```text
data/site.config.js
```

Troque ali:

- nome do palestrante;
- slogan;
- textos comerciais;
- links de imagens;
- link do vídeo;
- temas de palestras;
- depoimentos;
- clientes/logos;
- e-mail;
- telefone;
- WhatsApp;
- SEO;
- cores do projeto.

Todos os pontos principais estão marcados com `TODO [WHITE LABEL]`.

## Estrutura

```text
palestrante-white-label/
├── index.html
├── data/
│   └── site.config.js
├── assets/
│   ├── css/
│   └── js/
└── modules/
    ├── components/
    ├── core/
    └── sections/
```

## Produção

Pode publicar direto em hospedagem estática, como:

- Hostinger;
- Netlify;
- Vercel;
- GitHub Pages;
- servidor próprio com Nginx/Apache.

Antes de publicar, ajuste:

1. `data/site.config.js` → `site.url`, `seo`, `brand`, `contact` e imagens.
2. `robots.txt` → domínio final.
3. `sitemap.xml` → domínio final.
4. `site.webmanifest` → nome, cor e ícones finais.

## Observação importante

Este projeto recria uma estrutura comercial parecida com sites de palestrantes, mas não copia o HTML pesado do Wix. A ideia é ter uma base white label própria, leve, editável e reutilizável.


---

Desenvolvido por [Allan Ribeiro](https://github.com/Haimcer)
