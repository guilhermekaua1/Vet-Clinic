# VetClinic

Este é um projeto desenvolvido durante o Programa de Bolsa da empresa Compass UOL, o intuito do projeto é praticar alguns dos conceitos vistos para a criação da primeira API usando o framework Express. Este projeto visa realizar o gerenciamento básico de uma clinica veterinária, possibilitando a criação, consulta, alteração e remoção de tutores e pets vinculados a clinica.

## Índice

- [Instalação](#instalação)
- [Arquivo .env](#arquivo-env)
- [Como Usar](#como-usar)
- [Endpoints](#endpoints)
- [Erros encontrados](#erros-encotrados)

## Instalação

Certifique-se de ter o Node.js instalado.
Clone o repositório e instale as dependências usando npm:

```bash
    git clone https://github.com/guilhermekaua1/Vet-Clinic.git
    cd VetClinic
    npm install
```

## Arquivo .env

O projeto possui um arquivo .env para variáveis de ambiente que está definido da seguinte forma:

    PORT_DB=<porta que o servidor irá escutar>
    NAME_DB=<nome do arquivo que armazena os registros>

Você poderá renomear ou criar um novo arquivo nomeado como *.env*, isso fará com que a aplicação faça a execução correta.

## Como usar
Na pasta do projeto no terminal, execute o seguinte comando:
``` bash
    # Inicia a execução da API.
    npm start
```

Você pode fazer uso do Postman para testar a aplicação nas rotas mencionadas abaixo.

## Endpoints

    GET - /tutors
    POST - /tutors
    PUT - /tutors/{tutorID}
    DELETE - /tutors/{tutorId}

    POST - /pets/{tutorId}
    PUT - /pets/{petId}/tutors/{tutorId}
    DELETE - /pets/{petId}/tutors/{tutorId}


## Erros encotrados

Todo e qualquer erro encontrado pode ser reportado a mim, pois acredito que existam muitas coisas para melhorar.
