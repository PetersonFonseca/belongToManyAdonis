'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Aluno extends Model {
  modalidades() {
    return this.belongsToMany('App/Models/Modalidade')
  }
}

module.exports = Aluno
