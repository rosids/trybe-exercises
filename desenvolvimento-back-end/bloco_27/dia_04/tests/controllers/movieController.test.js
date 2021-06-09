const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');
const { ObjectId } = require('mongodb');

describe('Ao chamar o controller de getAll', () => {
  describe('quando não existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'getAll')
        .resolves([]);
    })

    after(() => {
      MoviesService.getAll.restore();
    })

    it('é chamado o método "status" passando 200', async () => {
      await MoviesController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await MoviesController.getAll(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });

  });

  describe('quando existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'getAll')
        .resolves([
          {
            id: '604cb554311d68f491ba5781',
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        ]);
    })

    after(() => {
      MoviesService.getAll.restore();
    })

    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await MoviesController.getAll(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });

  });
});

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(false);
    })

    after(() => {
      MoviesService.create.restore();
    })

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(true);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });
});

describe('É possível pesquisar um filme pelo ID', () => {
  let request, response, payloadMovie;
  beforeEach(() => {
    response = {};
    request = {};
    response.json = sinon.stub().returns();
    response.status = sinon.stub().returns(response);
  });
  
  describe('Quando o filme é encontrado', () => {
    let movieId;

    beforeEach(async () => {
      movieId = ObjectId();
      request.params = { id: movieId };
      payloadMovie = {
        _id: movieId,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      sinon.stub(MoviesService, 'findById').resolves(payloadMovie);
    });

    afterEach(() => MoviesService.findById.restore());

    it('Response.json é chamado como objeto do filme', async () => {
      await MoviesController.findById(request, response);
      expect(response.json.calledWith(payloadMovie)).to.be.true;
    });

    it('ID usado como parametro está sendo usado', async () => {
      await MoviesController.findById(request, response);
      expect(MoviesService.findById.calledWith(request.params.id)).to.be.true;
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('Quando o filme não é encontrado', () => {
    const error = {
      error: {
        code: 'not_found',
        message: 'Filme não encontrado',
      },
    };

    beforeEach(async () => {
      request.params = { id: ObjectId() };
      sinon.stub(MoviesService, 'findById').resolves(null);
    });

    afterEach(() => MoviesService.findById.restore());
    it('Retorna um objeto de error', async() => {
      await MoviesController.findById(request, response);
      expect(response.json.calledWith(error)).to.be.true;
      expect(response.status.calledWith(404)).to.be.equal(true);
    });
  });
});