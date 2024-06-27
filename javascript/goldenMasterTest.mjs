import { assert } from 'chai';
import TennisGame2 from './TennisGame2.js';
import fs from 'fs';

function saveGoldenMaster(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

function loadGoldenMaster(filename) {
    return JSON.parse(fs.readFileSync(filename));
}

function generateTestCases() {
    const testCases = [];

    const languages = ['en', 'es', 'fr'];
    languages.forEach(lang => {
        const game = new TennisGame2("player1", "player2", lang);

        // Initial score
        testCases.push({ language: lang, action: 'initial', score: game.getScore() });

        // Player 1 scores
        game.wonPoint("player1");
        testCases.push({ language: lang, action: 'player1 scores', score: game.getScore() });

        // Player 2 scores
        game.wonPoint("player2");
        testCases.push({ language: lang, action: 'player2 scores', score: game.getScore() });

        // Player 1 scores again
        game.wonPoint("player1");
        testCases.push({ language: lang, action: 'player1 scores again', score: game.getScore() });

        // Player 1 scores again
        game.wonPoint("player1");
        testCases.push({ language: lang, action: 'player1 scores again', score: game.getScore() });

        // Player 2 scores again
        game.wonPoint("player2");
        testCases.push({ language: lang, action: 'player2 scores again', score: game.getScore() });

        // Player 1 scores again
        game.wonPoint("player1");
        testCases.push({ language: lang, action: 'player1 scores again', score: game.getScore() });

        // Both players reach Deuce
        game.SetP1Score(3);
        game.SetP2Score(3);
        testCases.push({ language: lang, action: 'deuce', score: game.getScore() });

        // Player 1 gets advantage
        game.wonPoint("player1");
        testCases.push({ language: lang, action: 'advantage player1', score: game.getScore() });

        // Player 1 wins
        game.wonPoint("player1");
        testCases.push({ language: lang, action: 'win for player1', score: game.getScore() });
    });

    return testCases;
}

describe('Golden Master Tests', function() {
    const goldenMasterFile = './goldenMaster2.json';

    it('should save current behavior as Golden Master', function() {
        const testCases = generateTestCases();
        saveGoldenMaster(goldenMasterFile, testCases);
        const savedData = loadGoldenMaster(goldenMasterFile);
        assert.deepEqual(testCases, savedData);
    });

    it('should match Golden Master', function() {
        const testCases = generateTestCases();
        const goldenMaster = loadGoldenMaster(goldenMasterFile);
        assert.deepEqual(testCases, goldenMaster);
    });
});
