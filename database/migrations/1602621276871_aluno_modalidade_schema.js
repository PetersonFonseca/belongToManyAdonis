'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunoModalidadeSchema extends Schema {
  up () {
    this.create('aluno_modalidade', (table) => {
      table.increments()
      table
        .integer('aluno_id')
        .unsigned()
        .index('aluno_id')
      table
        .integer('modalidade_id')
        .unsigned()
        .index('modalidade_id')
      table
        .foreign('aluno_id')
        .references('alunos.id')
        .onDelete('cascade')
      table
        .foreign('modalidade_id')
        .references('modalidades.id')
        .onDelete('cascade')
    })
  }

  down () {
    this.drop('aluno_modalidade')
  }
}

module.exports = AlunoModalidadeSchema
