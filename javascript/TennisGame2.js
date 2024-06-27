var TennisGame2 = function(player1Name, player2Name, language = 'en') {
    this.P1point = 0;
    this.P2point = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.language = language;
};

// Tableaux des scores pour chaque langue
TennisGame2.SCORES = {
    en: ["Love", "Fifteen", "Thirty", "Forty"],
    es: ["Cero", "Quince", "Treinta", "Cuarenta"],
    fr: ["Zéro", "Quinze", "Trente", "Quarante"]
};

// Dictionnaires des termes spécifiques au tennis pour chaque langue
TennisGame2.TERMS = {
    en: {
        All: "All",
        Deuce: "Deuce",
        Advantage: "Advantage",
        Win: "Win for"
    },
    es: {
        All: "Igual",
        Deuce: "Igualdad",
        Advantage: "Ventaja",
        Win: "Victoria para"
    },
    fr: {
        All: "Égalité",
        Deuce: "Égalité",
        Advantage: "Avantage",
        Win: "Victoire pour"
    }
};

// Méthode pour obtenir le score actuel du jeu
TennisGame2.prototype.getScore = function() {
    const lang = this.language;

    if (this.isTied()) {
        return this.getTiedScore(lang);
    } else if (this.isEndGame()) {
        return this.getEndGameScore(lang);
    } else {
        return this.getRegularScore(lang);
    }
};

// Vérifie si les scores des deux joueurs sont égaux
TennisGame2.prototype.isTied = function() {
    return this.P1point === this.P2point;
};

// Vérifie si le jeu est en phase de fin de partie
TennisGame2.prototype.isEndGame = function() {
    return this.P1point >= 4 || this.P2point >= 4;
};

// Obtient le score pour une situation de score égal
TennisGame2.prototype.getTiedScore = function(lang) {
    return this.P1point < 3
        ? `${TennisGame2.SCORES[lang][this.P1point]}-${TennisGame2.TERMS[lang].All}`
        : TennisGame2.TERMS[lang].Deuce;
};

// Obtient le score pour une situation de fin de partie
TennisGame2.prototype.getEndGameScore = function(lang) {
    const pointDiff = this.P1point - this.P2point;
    if (pointDiff === 1) {
        return `${TennisGame2.TERMS[lang].Advantage} ${this.player1Name}`;
    } else if (pointDiff === -1) {
        return `${TennisGame2.TERMS[lang].Advantage} ${this.player2Name}`;
    } else if (pointDiff >= 2) {
        return `${TennisGame2.TERMS[lang].Win} ${this.player1Name}`;
    } else {
        return `${TennisGame2.TERMS[lang].Win} ${this.player2Name}`;
    }
};

// Obtient le score pour une situation de jeu régulier
TennisGame2.prototype.getRegularScore = function(lang) {
    return `${TennisGame2.SCORES[lang][this.P1point]}-${TennisGame2.SCORES[lang][this.P2point]}`;
};

// Méthode pour régler le score du joueur 1
TennisGame2.prototype.SetP1Score = function(number) {
    for (let i = 0; i < number; i++) {
        this.P1Score();
    }
};

// Méthode pour régler le score du joueur 2
TennisGame2.prototype.SetP2Score = function(number) {
    for (let i = 0; i < number; i++) {
        this.P2Score();
    }
};

// Méthode pour incrémenter le score du joueur 1
TennisGame2.prototype.P1Score = function() {
    this.P1point++;
};

// Méthode pour incrémenter le score du joueur 2
TennisGame2.prototype.P2Score = function() {
    this.P2point++;
};

// Méthode pour indiquer quel joueur a gagné un point
TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1") {
        this.P1Score();
    } else {
        this.P2Score();
    }
};

// Exportation du module si utilisé côté serveur
if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
