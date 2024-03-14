#!/bin/bash

# Compilar todos os arquivos TypeScript (.ts) para JavaScript (.js)
#tsc *.ts

# Apagar os arquivos TypeScript (.ts) após a compilação
find . -type f -name "*.js" -delete
