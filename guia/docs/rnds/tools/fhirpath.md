---
id: fhirpath
title: FHIRPath
sidebar_label: FHIRPath
---

Implementações do FHIR retornam, em geral, representações de recursos em JSON. Neste caso, o JSON retornado pode ser consultado por meio de JsonPath. Há vasta informação sobre o Jsonpath, como a possibilidade de execução de consultas [online](https://jsonpath.com/), a [especificação detalhada](https://goessner.net/articles/JsonPath/), [tutorial](https://www.baeldung.com/guide-to-jayway-jsonpath) e até aplicação em [java](https://github.com/json-path/JsonPath)) que executa Jsonpath.

FHIRPath é similar a JsonPath, contudo, contém funções específicas para FHIR. FHIRPath também é usado pela _Clinical Quality Language_ ([CQL](https://cql.hl7.org/index.html)).

A [definição de FHIRPath](http://hl7.org/fhirpath/) também está disponível, inclusive em [detalhes](https://github.com/HL7/FHIRPath/blob/master/spec/index.adoc). 

Consultas baseadas em FHIRPath podem ser executadas por meio do portal [clinfhir](http://clinfhir.com). Adicionalmente, pode-se usar a implementação [fhirpath](https://github.com/HL7/fhirpath.js) em Javascript, dentre outras opções.

Esta implementação é empregada nos exemplos fornecidos abaixo.

### Instalação

```shell
$ git clone https://github.com/kyriosdata/rnds
$ cd rnds/tools/fhirpath
$ yarn install
```

Em projeto existente (dependências de desenvolvimento):
```shell
$ yarn add fhirpath --dev
```

### Operação trivial

Contando quantas entradas possuem no documento **exemplo.json**.

- Qual o tipo do recurso?

```shell
$ yarn fhirpath -- -f exemplo.json -e "resourceType"
```

- Quando o _Bundle_ foi atualizado pela última vez?

```shell
$ yarn fhirpath -- -f exemplo.json -e "meta.lastUpdated"
```

- Qual o identificador local (definido pelo laboratório) do _Bundle_?

```shell
$ yarn fhirpath -- -f exemplo.json -e "identifier.value"
```

- Quantos recursos estão reunidos no _Bundle_?

```shell
$ npm run fhirpath -- -f exemplo.json -e "entry.count()"
```

- Quais os tipos dos recursos reunidos no _Bundle_?

```shell
$ yarn fhirpath -- -f exemplo.json -e "entry.resource.resourceType"
```
