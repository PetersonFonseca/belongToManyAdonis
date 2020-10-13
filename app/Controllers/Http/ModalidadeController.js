'use strict'

const Modalidade = use('App/Models/Modalidade')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with modalidades
 */
class ModalidadeController {
  /**
   * Show a list of all modalidades.
   * GET modalidades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

  }

  /**
   * Render a form to be used for creating a new modalidade.
   * GET modalidades/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new modalidade.
   * POST modalidades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['name'])
    const modalidade = await Modalidade.create(data)
    return modalidade
  }

  /**
   * Display a single modalidade.
   * GET modalidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

    /**
   * Update modalidade details.
   * PUT or PATCH modalidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    //Primeiro pegamos o Id do aluno logado que deseja participar desta modalidade
    //const userId = auth.user.id
    //como não criamos a autenticação para deixar o exemplo o mais simples possível vamos simular a const userId
    const userId = 1
    //agora recuperamos o id da modalidade escolhida
    const modalidade = await Modalidade.findOrFail(params.id)
    //agora fazemos a inclusao do aluno através do método attach aplicado ao metodo alunos que criamos lá no model de modalidade, lembra?
    await modalidade.alunos().attach(userId)
    return true
  }

  /**
   * Delete a modalidade with id.
   * DELETE modalidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ModalidadeController
