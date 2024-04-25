var TennisGame2 = function(player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;

    this.P1res = ""; // Problème : Signification ambiguë, pas clair ce que cela représente
    this.P2res = ""; // Problème : Signification ambiguë, pas clair ce que cela représente

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.getScore = function() {
    var score = "";

    // Problème potentiel : Conditions complexes pour détecter les scores et les situations de jeu

    if (this.P1point === this.P2point && this.P1point < 3) {
        // Problème potentiel : Répétition de code pour la conversion du score en mots
    }

    if (this.P1point === this.P2point && this.P1point > 2)
        score = "Deuce";

    // ...

    if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
        score = "Win for player1"; // Problème potentiel : Conditions complexes pour détecter la victoire
    }

    // ...

    return score;
};

TennisGame2.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};

TennisGame2.prototype.P1Score = function() {
    this.P1point++; // Problème potentiel : Manque de vérification de limite de score
};

TennisGame2.prototype.P2Score = function() {
    this.P2point++; // Problème potentiel : Manque de vérification de limite de score
};

TennisGame2.prototype.wonPoint = function(player) {
    // Problème potentiel : Logique conditionnelle complexe pour déterminer quel joueur a marqué un point
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
