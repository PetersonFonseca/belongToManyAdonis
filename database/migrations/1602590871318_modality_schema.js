'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ModalitySchema extends Schema {
  up () {
    this.create('modalities', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('modalities')
  }
}

module.exports = ModalitySchema
