'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Modalidade extends Model {
  alunos() {
    return this.belongsToMany('App/Models/Aluno')
  }
}

module.exports = Modalidade
