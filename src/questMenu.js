//& This file managed the quest menu

function drawQuestMenu() {
    if (canDrawMenus) {
        let actualQuestTextMenu = ''
        let headNumber = -1;
        image(questMenuBackground,10, 8, 384, 128)
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
                actualQuestTextMenu = "J'ai résolu le problème d'Allie, je dois lui dire."
            }
        }
        if (actualQuestName === 'repareCapsulesMap') {
            headNumber = 1;
            actualQuestTextMenu = "Cela fait un moment que je n'est pas vu Finn, je devrais peut-être aller voir ce qu'il fait."
            if (quests.repareCapsulesMap.canTakeWrench) {
                actualQuestTextMenu = "D'après Finn, la clé à molette devrait se trouver dans un des coffres. Essayons de la trouver."
            }
            if (quests.repareCapsulesMap.wrenchIsTaked) {
                actualQuestTextMenu = "Je devrais rejoindre Finn."
            }
            if (quests.repareCapsulesMap.canRepareWall) {
                actualQuestTextMenu = "Allons vite réparer cette fuite !"
            }
            if (quests.repareCapsulesMap.wallIsRepare) {
                actualQuestTextMenu = "C'est réparé. Allons voir Finn."
            }
        }
        if (actualQuestName === 'sleepQuest') {
            headNumber = 0;
            actualQuestTextMenu = "Finn à raison, je devrais aller me reposer."
        }
        if (actualQuestName === 'goToCloneMapAfterSleep') {
            headNumber = 0;
            actualQuestTextMenu = "Que se passe-t-il ?"
            if (quests.goToCloneMapAfterSleep.haveShowMoreInformationAboutAlert) {
                actualQuestTextMenu = "Je dois aller chercher la carte d'accès et une arme."
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
            actualQuestTextMenu = "Avant de quitté la station je doit me rendre en salle des commandes pour aller récupérer les contrendus de mission.";
            if (quests.lastQuest.haveFiles) {
                actualQuestTextMenu = "Maintenant que j'ai récupérer les contrendus il est temps de lancé la destruiction de la station. C'est la seule solution...";
            }
            if (quests.lastQuest.haveStartDestruction) {
                actualQuestTextMenu = "Je doit me dêpecher de rejoindre la capsule, la station va bientôt exploser et tout emporter avec elle."
            }
        }
        textLeading(20);
        textSize(25);
        text(actualQuestTextMenu, 130, 45, 250, 120);
        noFill();
        image(dialogsHeads.get(16 * headNumber, 0, 16, 16), 10, 20, 112, 112);
    }
}