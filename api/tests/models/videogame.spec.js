const { Videogame,Genres, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });
    });
  });
});


describe('Genres model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Genres.sync({ force: true }));
    describe('Genres', () => {
      it('should throw an error if Genres is null', (done) => {
        Genres.create({})
          .then(() => done(new Error('It requires a valid Genres')))
          .catch(() => done());
      });
      it('should work when its a valid Genre', () => {
        Genres.create({ genre: 'Action' });
      });
    });
  });
});
