//& This file managed the quest menu

function drawQuestMenu() {
    if (canDrawMenus) {
        let actualQuestTextMenu = ''
        let headNumber = -1;
        image(questMenuBackground, 10, 8, 384, 128)
        fill("white")
        noStroke();
        if (actualQuestName === 'seedsBagQuest') {
            headNumber = 3;
            actualQuestTextMenu = "Je dois retrouver Octavia en salle Botanique."
            if (quests.seedsBagQuest.canTakeSeedBag) {
                actualQuestTextMenu = "Allie est en salle des clones, c'est elle qui à les graines."
            }
            if (quests.seedsBagQuest.seedBagHasBeenTaked) {
                actualQuestTextMenu = "Je dois rendre les graines à Octavia."
            }
        }
        if (actualQuestName === 'questCloneMap') {
            headNumber = 2;
            actualQuestTextMenu = "Allie m'a demandé de retourner la voir."
            if (quests.questCloneMap.canDrawInteractionClonMapQuest) {
                actualQuestTextMenu = "Je dois utiliser l'interface de contrôle."
            }
            if (quests.questCloneMap.questCloneMapIsOver) {
                actualQuestTextMenu = "Le problème est résolu, je devrais le dire à Allie."
            }
        }
        if (actualQuestName === 'repareCapsulesMap') {
            headNumber = 1;
            actualQuestTextMenu = "Cela fait un moment que je n'ai pas vu Finn, je devrais peut-être aller voir ce qu'il fait."
            if (quests.repareCapsulesMap.canTakeWrench) {
                actualQuestTextMenu = "D'après Finn, la clé à molette devrait se trouver dans un des coffres ..."
            }
            if (quests.repareCapsulesMap.wrenchIsTaked) {
                actualQuestTextMenu = "Je devrais rejoindre Finn."
            }
            if (quests.repareCapsulesMap.canRepareWall) {
                actualQuestTextMenu = "Il faut réparer cette fuite avant que nous manquions d'oxygène ..."
            }
            if (quests.repareCapsulesMap.wallIsRepare) {
                actualQuestTextMenu = "C'est réparé. Allons voir Finn."
            }
        }
        if (actualQuestName === 'sleepQuest') {
            headNumber = 0;
            actualQuestTextMenu = "Finn a raison, je devrais aller me reposer."
        }
        if (actualQuestName === 'goToCloneMapAfterSleep') {
            headNumber = 0;
            actualQuestTextMenu = "Que se passe-t-il ?"
            if (quests.goToCloneMapAfterSleep.haveShowMoreInformationAboutAlert) {
                actualQuestTextMenu = "Je dois trouver la carte d'accès, et une arme ..."
            }
            if (quests.goToCloneMapAfterSleep.haveGun && quests.goToCloneMapAfterSleep.haveCard) {
                actualQuestTextMenu = "Il est temps d'aller voir ce qu'il se passe en salle des clones."
            }
            if (quests.goToCloneMapAfterSleep.haveGun && !quests.goToCloneMapAfterSleep.haveCard && quests.fight.animationFightCanStart) {
                actualQuestTextMenu = "Il est temps d'aller voir ce qu'il se passe en salle des clones."
            }
        }
        if (actualQuestName === 'lastQuest') {
            headNumber = 4;
            actualQuestTextMenu = "Toutes les recherches sont stockées dans la salle des commandes... Je dois les récupérer.";
            if (quests.lastQuest.haveFiles) {
                actualQuestTextMenu = "Si je ne fais rien, Ève finira par me retrouver. Lancer l'autodestruction, c'est le seul moyen ... ";
            }
            if (quests.lastQuest.haveStartDestruction) {
                actualQuestTextMenu = "Je dois me dépêcher de rejoindre la capsule de survie, la station va bientôt exploser et tout emporter."
            }
            if (quests.lastQuest.haveStartDestruction && actualMapEngineTwo === "capsuleMap") {
                actualQuestTextMenu = "Avant de sortir je dois m'équiper d'une combinaison et ouvrir les portes."
            }
        }
        textLeading(20);
        textSize(25);
        text(actualQuestTextMenu, 130, 45, 250, 120);
        noFill();
        image(dialogsHeads.get(16 * headNumber, 0, 16, 16), 10, 20, 112, 112);
    }
}