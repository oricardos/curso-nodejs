Módulos: são conjuntos de código.

3 tipos de Módulos:
-> TODOS OS ARQUIVOS JS SÃO MÓDULOS
-> Nativos
-> npm (Node Package Manager)

- para importar um módulo, usa o require('...');
- o módulo precisa ser exportado para ser usado( module.exports = ...)
- para exportar mais de um módulo, adiciona os módulos dentro de um objeto:
  module.exports = { module1, module2, mod...}

Uma outra forma de exportar um módulo é utilizando o exports.module, ex.:

- exports.printName = (name) => {...}
  ou
- exports.lastName = 'Silva'
