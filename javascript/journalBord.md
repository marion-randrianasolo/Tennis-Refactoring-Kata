### Journal de Bord

Projet : `Tennis Kata - JS - Fichier : TennisGame2.js`

### Objectif :

    1. Réaliser un Golden Master pour sécuriser le code.
    2. Simuler une itération en implémentant une fonctionnalité supplémentaire et en assainissant le code.
   
**Étape 1 : Réalisation d'un Golden Master**

	Analyse Initiale :
	- Le code original contenait beaucoup de redondances et des conditions complexes difficiles à maintenir.
	- Le calcul des scores était fait directement dans la méthode `getScore`, rendant le code moins lisible.
	- Le code ne supportait que l'anglais et n'était pas facilement extensible pour ajouter d'autres langues.

	Problèmes Identifiés :
	1. Redondance : De nombreuses conditions répétitives pour déterminer les scores des joueurs.
	2. Lisibilité : La méthode `getScore` était trop longue et difficile à lire.
	3. Extensibilité : Difficulté à ajouter de nouvelles langues ou termes sans modifier beaucoup de code.
	4. Absence de modularité : Les différentes parties de la logique étaient trop imbriquées dans une seule méthode.

	Réalisation du Golden Master :
		1. Création des Tests de Référence :
		   - Création de tests pour capturer les sorties actuelles du système.
		   - Exécution des tests pour capturer le comportement actuel et le sauvegarder comme Golden Master.
		   
		2. Sauvegarde des Résultats :
		   - Les résultats des tests sont sauvegardés dans un fichier `goldenMaster.json`.

**Étape 2 : Simulation d'Itération**

Objectifs de l'Itération :

    1. Assainir le Code :
         - Refactoriser le code pour le rendre plus propre, maintenable et modulaire.
    2. Implémenter une Fonctionnalité Supplémentaire :
         - Ajouter la fonctionnalité de traduction pour supporter plusieurs langues (anglais, espagnol, français).

### Plan d'Amélioration :

	1. Refactoring Initial du Code : Avant de développer la fonctionnalité de traduction, il est crucial de rendre le code existant plus propre et plus modulaire. Cela implique :
	   - Utilisation de Tableaux et de Dictionnaires : Centraliser les scores et les termes spécifiques dans des structures de données.
	   - Décomposition de la Logique : Séparer la logique de calcul des scores en plusieurs méthodes plus petites et spécialisées.
	   - Refactoring de la Méthode `getScore` : Rendre la méthode `getScore` plus lisible et plus courte en utilisant des méthodes auxiliaires.

	2. Développement de la Fonctionnalité de Traduction : Une fois le code refactorisé, ajouter le support pour plusieurs langues (anglais, espagnol, français) en utilisant des tableaux et des dictionnaires :
	   - Ajout des Langues : Ajouter les termes spécifiques pour chaque langue dans les dictionnaires.
	   - Modification des Méthodes : Adapter les méthodes pour utiliser les termes appropriés en fonction de la langue sélectionnée.

	3. Tests Unitaires : Après l'implémentation de la fonctionnalité de traduction, créer des tests pour couvrir les différents scénarios possibles, incluant les cas où les scores sont égaux, les situations de fin de partie, et les changements de langue en cours de jeu.

	4. Améliorations Futures (si le temps le permet) :
	   - Optimisation des Performances : Analyser et optimiser le code pour améliorer les performances, si nécessaire.
	   - Ajout de Nouvelles Fonctionnalités : Par exemple, ajouter plus de langues ou des fonctionnalités avancées de jeu.

### Implémentation :

	1. Création des Tests de Référence et Sauvegarde comme Golden Master :
	   - Mise en place des tests de bout en bout pour capturer les sorties actuelles.
	   - Enregistrement des résultats dans un fichier Golden Master.

	2. Assainissement du Code :
	   - Introduction de tableaux et dictionnaires pour centraliser les scores et les termes spécifiques.
	   - Décomposition de la logique de calcul des scores en plusieurs méthodes plus petites et spécialisées.
	   - Refactorisation de la méthode `getScore` pour améliorer la lisibilité et la modularité.

	3. Ajout de la Fonctionnalité de Traduction :
	   - Ajout des termes spécifiques pour chaque langue dans des dictionnaires.
	   - Adaptation des méthodes pour utiliser les termes appropriés en fonction de la langue sélectionnée.

	4. Création des Tests Unitaires :
	   - Développement de tests pour vérifier les différentes fonctionnalités et les langues ajoutées.

### Comparaison avec une Itération sans Golden Master

	- Sécurité des Modifications : La création d'un Golden Master assure que les modifications apportées au code ne modifient pas le comportement attendu, ce qui est particulièrement crucial lors du refactoring.
	- Détection de Régressions : Les tests de Golden Master permettent de détecter rapidement les régressions introduites par de nouvelles modifications.
	- Confiance Accrue : Avec un Golden Master, il est plus facile d'effectuer des changements importants et d'ajouter de nouvelles fonctionnalités sans craindre de casser des fonctionnalités existantes.
	- Processus Structuré : La réalisation du Golden Master et l'approche structurée de l'itération permettent une meilleure gestion du temps et des priorités.

La mise en place d'un Golden Master avant de commencer l'itération permet de sécuriser le code et de garantir que les modifications apportées n'altèrent pas le comportement attendu.