FROM squidfunk/mkdocs-material
COPY snippets /docs/snippets/
COPY mkdocs.yml mkdocs.yml
COPY index.md /docs/snippets/index.md
COPY images/logo.png /docs/snippets/logo.png
COPY images/favicon.ico /docs/snippets/favicon.ico
