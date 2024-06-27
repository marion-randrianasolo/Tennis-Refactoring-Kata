// Importation des modules nécessaires
import { assert } from 'chai';
import TennisGame2 from './TennisGame2Initial.js';
import fs from 'fs';

// Fonction pour sauvegarder le Golden Master dans un fichier
function saveGoldenMaster(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

// Fonction pour charger le Golden Master à partir d'un fichier
function loadGoldenMaster(filename) {
    return JSON.parse(fs.readFileSync(filename)); // Lecture des données à partir d'un fichier JSON
}

// Fonction pour générer les cas de test
function generateTestCases() {
    const testCases = []; // Tableau pour stocker les cas de test

    // Initialisation du jeu avec deux joueurs
    const game = new TennisGame2("player1", "player2");
    // Ajout du score initial au tableau des cas de test
    testCases.push({ action: 'initial', score: game.getScore() });

    // Simulation des points gagnés par les joueurs et ajout des scores au tableau des cas de test
    game.wonPoint("player1");
    testCases.push({ action: 'player1 scores', score: game.getScore() });

    game.wonPoint("player2");
    testCases.push({ action: 'player2 scores', score: game.getScore() });

    game.wonPoint("player1");
    testCases.push({ action: 'player1 scores again', score: game.getScore() });

    game.wonPoint("player1");
    testCases.push({ action: 'player1 scores again', score: game.getScore() });

    game.wonPoint("player2");
    testCases.push({ action: 'player2 scores again', score: game.getScore() });

    game.wonPoint("player1");
    testCases.push({ action: 'player1 scores again', score: game.getScore() });

    // Retourne les cas de test générés
    return testCases;
}

// Définition des tests pour vérifier le Golden Master
describe('Golden Master Tests', function() {
    const goldenMasterFile = './goldenMaster.json'; // Chemin du fichier Golden Master

    // Test pour sauvegarder le comportement actuel comme Golden Master
    it('should save current behavior as Golden Master', function() {
        const testCases = generateTestCases(); // Génération des cas de test
        saveGoldenMaster(goldenMasterFile, testCases); // Sauvegarde des cas de test dans un fichier
        const savedData = loadGoldenMaster(goldenMasterFile); // Chargement des données sauvegardées
        assert.deepEqual(testCases, savedData); // Vérification que les données sauvegardées correspondent aux cas de test générés
    });

    // Test pour vérifier que le comportement actuel correspond au Golden Master
    it('should match Golden Master', function() {
        const testCases = generateTestCases(); // Génération des cas de test
        const goldenMaster = loadGoldenMaster(goldenMasterFile); // Chargement du Golden Master
        assert.deepEqual(testCases, goldenMaster); // Vérification que les cas de test générés correspondent au Golden Master
    });
});
