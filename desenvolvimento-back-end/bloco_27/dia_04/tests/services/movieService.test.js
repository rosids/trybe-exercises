const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');
const { ObjectId } = require('mongodb');

describe('Busca todos os filmes no BD', () => {
  describe('quando não existe nenhum filme criado', () => {
    before(() => {
      sinon.stub(MoviesModel, 'getAll')
        .resolves([]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.empty;
    });

  });

  describe('quando existem filmes criados', () => {
    before(() => {
      sinon.stub(MoviesModel, 'getAll')
        .resolves([
          {
            id: '604cb554311d68f491ba5781',
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        ]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.not.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [ item ] = await MoviesService.getAll();

      expect(item).to.be.an('object');
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [ item ] = await MoviesService.getAll();

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });

  });
});

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = '604cb554311d68f491ba5781';

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    })

    after(() => {
      MoviesModel.create.restore();
    })

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('É possível pesquisar um filme pelo ID', () => {
  describe('Quando o filme é encontrado', () => {
    const movieId = ObjectId();
    beforeEach(async () => {
      const payloadMovie = {
        _id: movieId,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };
      
      sinon.stub(MoviesModel, 'findById').resolves(payloadMovie);
    });
    
    afterEach(() => MoviesModel.findById.restore());
    
    it('Retorna um objeto', async () => {
      const result = await MoviesService.findById(movieId);
      expect(result).to.be.a('object');
    });
    
    it('ID usado como parametro está sendo usado', async () => {
      await MoviesService.findById(movieId);
      expect(MoviesModel.findById.calledWith(movieId)).to.be.true;
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
      sinon.stub(MoviesModel, 'findById').resolves(null);
    });

    afterEach(() => MoviesModel.findById.restore());
    it('Retorna um objeto de error', async() => {
      const result = await MoviesService.findById('jhfjhdjsh');
      expect(result).to.deep.equal(error);
    });
  });
});