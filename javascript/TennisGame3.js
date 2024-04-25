var TennisGame3 = function(p1N, p2N) {
    // Les noms des variables pour les points pourraient être plus descriptifs.
    this.p2 = 0;
    this.p1 = 0;

    // Les noms p1N et p2N pourraient être clarifiés pour indiquer qu'ils représentent des noms de joueur.
    this.p1N = p1N;
    this.p2N = p2N;
};

TennisGame3.prototype.getScore = function() {
    var s;
    // Les conditions ici pourraient être clarifiées pour une meilleure compréhension à première vue.
    if ((this.p1 < 4 && this.p2 < 4) && (this.p1 + this.p2 < 6)) {
        var p = ["Love", "Fifteen", "Thirty", "Forty"];
        s = p[this.p1];
        // Utilisation de l'opérateur ternaire pour la simplicité, mais cela peut affecter la lisibilité pour certains.
        return (this.p1 == this.p2) ? s + "-All" : s + "-" + p[this.p2];
    } else {
        // L'utilisation de "Deuce" pourrait être contrainte par des conditions plus explicites.
        if (this.p1 == this.p2)
            return "Deuce";
        // La détermination du joueur en avantage ou gagnant pourrait être refactorisée en une méthode privée pour clarifier.
        s = this.p1 > this.p2 ? this.p1N : this.p2N;
        // La condition pour déterminer l'avantage ou le gagnant est un peu cryptique.
        return ((this.p1 - this.p2) * (this.p1 - this.p2) == 1) ? "Advantage " + s : "Win for " + s;
    }
};

TennisGame3.prototype.wonPoint = function(playerName) {
    // Cette méthode est claire mais pourrait inclure une validation pour le nom du joueur.
    if (playerName == "player1")
        this.p1 += 1;
    else
        this.p2 += 1;
};

// Contrôle pour l'exportation du module seulement si on n'est pas dans un navigateur.
if (typeof window === "undefined") {
    module.exports = TennisGame3;
}
