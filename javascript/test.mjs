import { assert } from 'chai';
import TennisGame2 from './TennisGame2.js';

describe('TennisGame2', function() {
    it('should return "Love-All" when both players have 0 points', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        assert.equal(await game.getScore(), "Love-All");
    });

    it('should return "Fifteen-Love" when player1 has 1 point', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.wonPoint("player1");
        assert.equal(await game.getScore(), "Fifteen-Love");
    });

    it('should return "Love-Fifteen" when player2 has 1 point', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.wonPoint("player2");
        assert.equal(await game.getScore(), "Love-Fifteen");
    });

    it('should return "Thirty-All" when both players have 2 points', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.SetP1Score(2);
        game.SetP2Score(2);
        assert.equal(await game.getScore(), "Thirty-All");
    });

    it('should return "Deuce" when both players have 3 points', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.SetP1Score(3);
        game.SetP2Score(3);
        assert.equal(await game.getScore(), "Deuce");
    });

    it('should return "Advantage player1" when player1 has 4 points and player2 has 3 points', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.SetP1Score(4);
        game.SetP2Score(3);
        assert.equal(await game.getScore(), "Advantage player1");
    });

    it('should return "Advantage player2" when player2 has 4 points and player1 has 3 points', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.SetP1Score(3);
        game.SetP2Score(4);
        assert.equal(await game.getScore(), "Advantage player2");
    });

    it('should return "Win for player1" when player1 has 5 points and player2 has 3 points', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.SetP1Score(5);
        game.SetP2Score(3);
        assert.equal(await game.getScore(), "Win for player1");
    });

    it('should return "Win for player2" when player2 has 5 points and player1 has 3 points', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.SetP1Score(3);
        game.SetP2Score(5);
        assert.equal(await game.getScore(), "Win for player2");
    });

    it('should return "Quince-Igual" when both players have 1 point in Spanish', async function() {
        const game = new TennisGame2("player1", "player2", 'es');
        game.wonPoint("player1");
        game.wonPoint("player2");
        assert.equal(await game.getScore(), "Quince-Igual");
    });

    it('should return "Treinta-Cero" when player1 has 2 points and player2 has 0 points in Spanish', async function() {
        const game = new TennisGame2("player1", "player2", 'es');
        game.SetP1Score(2);
        assert.equal(await game.getScore(), "Treinta-Cero");
    });

    it('should return "Ventaja player1" when player1 has advantage in Spanish', async function() {
        const game = new TennisGame2("player1", "player2", 'es');
        game.SetP1Score(4);
        game.SetP2Score(3);
        assert.equal(await game.getScore(), "Ventaja player1");
    });

    it('should return "Victoria para player1" when player1 wins in Spanish', async function() {
        const game = new TennisGame2("player1", "player2", 'es');
        game.SetP1Score(5);
        game.SetP2Score(3);
        assert.equal(await game.getScore(), "Victoria para player1");
    });

    it('should return "Victoria para player2" when player2 wins in Spanish', async function() {
        const game = new TennisGame2("player1", "player2", 'es');
        game.SetP1Score(3);
        game.SetP2Score(5);
        assert.equal(await game.getScore(), "Victoria para player2");
    });

    it('should return "Thirty-Fifteen" when player1 has 2 points and player2 has 1 point', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.SetP1Score(2);
        game.SetP2Score(1);
        assert.equal(await game.getScore(), "Thirty-Fifteen");
    });

    it('should return "Forty-Thirty" when player1 has 3 points and player2 has 2 points', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.SetP1Score(3);
        game.SetP2Score(2);
        assert.equal(await game.getScore(), "Forty-Thirty");
    });

    it('should return "Deuce" when both players have 4 points', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.SetP1Score(4);
        game.SetP2Score(4);
        assert.equal(await game.getScore(), "Deuce");
    });

    it('should return "Advantage player1" when player1 has 5 points and player2 has 4 points', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.SetP1Score(5);
        game.SetP2Score(4);
        assert.equal(await game.getScore(), "Advantage player1");
    });

    it('should return "Advantage player2" when player2 has 5 points and player1 has 4 points', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.SetP1Score(4);
        game.SetP2Score(5);
        assert.equal(await game.getScore(), "Advantage player2");
    });

    it('should return "Win for player1" when player1 has 6 points and player2 has 4 points', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.SetP1Score(6);
        game.SetP2Score(4);
        assert.equal(await game.getScore(), "Win for player1");
    });

    it('should return "Win for player2" when player2 has 6 points and player1 has 4 points', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.SetP1Score(4);
        game.SetP2Score(6);
        assert.equal(await game.getScore(), "Win for player2");
    });

    it('should correctly handle changing the language during the game', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.wonPoint("player1");
        game.wonPoint("player2");
        game.language = 'es';
        assert.equal(await game.getScore(), "Quince-Igual");
    });

    it('should return "Cuarenta-Treinta" when player1 has 3 points and player2 has 2 points in Spanish', async function() {
        const game = new TennisGame2("player1", "player2", 'es');
        game.SetP1Score(3);
        game.SetP2Score(2);
        assert.equal(await game.getScore(), "Cuarenta-Treinta");
    });

    it('should return "Igualdad" when both players have 4 points in Spanish', async function() {
        const game = new TennisGame2("player1", "player2", 'es');
        game.SetP1Score(4);
        game.SetP2Score(4);
        assert.equal(await game.getScore(), "Igualdad");
    });

    it('should return "Ventaja player1" when player1 has 5 points and player2 has 4 points in Spanish', async function() {
        const game = new TennisGame2("player1", "player2", 'es');
        game.SetP1Score(5);
        game.SetP2Score(4);
        assert.equal(await game.getScore(), "Ventaja player1");
    });

    it('should return "Ventaja player2" when player2 has 5 points and player1 has 4 points in Spanish', async function() {
        const game = new TennisGame2("player1", "player2", 'es');
        game.SetP1Score(4);
        game.SetP2Score(5);
        assert.equal(await game.getScore(), "Ventaja player2");
    });

    it('should return "Victoria para player1" when player1 has 6 points and player2 has 4 points in Spanish', async function() {
        const game = new TennisGame2("player1", "player2", 'es');
        game.SetP1Score(6);
        game.SetP2Score(4);
        assert.equal(await game.getScore(), "Victoria para player1");
    });

    it('should return "Victoria para player2" when player2 has 6 points and player1 has 4 points in Spanish', async function() {
        const game = new TennisGame2("player1", "player2", 'es');
        game.SetP1Score(4);
        game.SetP2Score(6);
        assert.equal(await game.getScore(), "Victoria para player2");
    });

    // Tests pour le français

    it('should return "Zéro-Égalité" when both players have 0 points in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        assert.equal(await game.getScore(), "Zéro-Égalité");
    });

    it('should return "Quinze-Zéro" when player1 has 1 point in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        game.wonPoint("player1");
        assert.equal(await game.getScore(), "Quinze-Zéro");
    });

    it('should return "Zéro-Quinze" when player2 has 1 point in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        game.wonPoint("player2");
        assert.equal(await game.getScore(), "Zéro-Quinze");
    });

    it('should return "Trente-Égalité" when both players have 2 points in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        game.SetP1Score(2);
        game.SetP2Score(2);
        assert.equal(await game.getScore(), "Trente-Égalité");
    });

    it('should return "Égalité" when both players have 3 points in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        game.SetP1Score(3);
        game.SetP2Score(3);
        assert.equal(await game.getScore(), "Égalité");
    });

    it('should return "Avantage player1" when player1 has 4 points and player2 has 3 points in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        game.SetP1Score(4);
        game.SetP2Score(3);
        assert.equal(await game.getScore(), "Avantage player1");
    });

    it('should return "Avantage player2" when player2 has 4 points and player1 has 3 points in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        game.SetP1Score(3);
        game.SetP2Score(4);
        assert.equal(await game.getScore(), "Avantage player2");
    });

    it('should return "Victoire pour player1" when player1 has 5 points and player2 has 3 points in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        game.SetP1Score(5);
        game.SetP2Score(3);
        assert.equal(await game.getScore(), "Victoire pour player1");
    });

    it('should return "Victoire pour player2" when player2 has 5 points and player1 has 3 points in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        game.SetP1Score(3);
        game.SetP2Score(5);
        assert.equal(await game.getScore(), "Victoire pour player2");
    });

    it('should correctly handle changing the language during the game to French', async function() {
        const game = new TennisGame2("player1", "player2", 'en');
        game.wonPoint("player1");
        game.wonPoint("player2");
        game.language = 'fr';
        assert.equal(await game.getScore(), "Quinze-Égalité");
    });

    it('should return "Quarante-Trente" when player1 has 3 points and player2 has 2 points in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        game.SetP1Score(3);
        game.SetP2Score(2);
        assert.equal(await game.getScore(), "Quarante-Trente");
    });

    it('should return "Égalité" when both players have 4 points in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        game.SetP1Score(4);
        game.SetP2Score(4);
        assert.equal(await game.getScore(), "Égalité");
    });

    it('should return "Avantage player1" when player1 has 5 points and player2 has 4 points in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        game.SetP1Score(5);
        game.SetP2Score(4);
        assert.equal(await game.getScore(), "Avantage player1");
    });

    it('should return "Avantage player2" when player2 has 5 points and player1 has 4 points in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        game.SetP1Score(4);
        game.SetP2Score(5);
        assert.equal(await game.getScore(), "Avantage player2");
    });

    it('should return "Victoire pour player1" when player1 has 6 points and player2 has 4 points in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        game.SetP1Score(6);
        game.SetP2Score(4);
        assert.equal(await game.getScore(), "Victoire pour player1");
    });

    it('should return "Victoire pour player2" when player2 has 6 points and player1 has 4 points in French', async function() {
        const game = new TennisGame2("player1", "player2", 'fr');
        game.SetP1Score(4);
        game.SetP2Score(6);
        assert.equal(await game.getScore(), "Victoire pour player2");
    });
});
