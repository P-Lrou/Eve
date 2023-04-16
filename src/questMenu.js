//& This file managed the quest menu

function drawQuestMenu() {
    if (canDrawMenus) {
        tint(255, alphaArrows)
        let actualQuestTextMenu = ''
        let headNumber = -1;
        fill("rgba(31, 31, 31, 0.80)");
        strokeWeight(4);
        stroke("rgba(213, 213, 213, 0.24)");
        rect(10, 8, 200, 220, 20);
        fill("white")
        noStroke();
        textSize(11);
        textLeading(18);
        text("Quêtes :", 25, 60, 180, 120);
        if (actualQuestName === 'seedsBagQuest') {
            headNumber = 3
            actualQuestTextMenu = "Retrouve Rose dans la salle botanique."
            if (quests.seedsBagQuest.canTakeSeedBag) {
                actualQuestTextMenu = "Va voir Juillette dans la salle des clones pour récupérer les graines."
            }
            if (quests.seedsBagQuest.seedBagHasBeenTaked) {
                actualQuestTextMenu = "Retourne voir Rose pour lui apporter les graines."
            }
        }
        if (actualQuestName === 'questCloneMap') {
            headNumber = 2
            actualQuestTextMenu = "Retourne voir Juliette en salle des clones."
            if (quests.questCloneMap.canDrawInteractionClonMapQuest) {
                actualQuestTextMenu = "Cherche un moyen de réguler les niveau d'oxygène."
            }
            if (quests.questCloneMap.questCloneMapIsOver) {
                actualQuestTextMenu = "Va voir Juliette afin de l'informée que les niveaux sont à jour."
            }
        }
        if (actualQuestName === 'repareCapsulesMap') {
            headNumber = 1
            actualQuestTextMenu = "Cela fait un moment que je n'est pas vu Finn, je devrais peut-être allez voir ce qu'il fait."
            if (quests.repareCapsulesMap.canTakeWrench) {
                actualQuestTextMenu = "D'après Finn, la clé à molette devrait ce trouver dans les couloirs du vaisseaux. Essayons de la trouver."
            }
            if (quests.repareCapsulesMap.wrenchIsTaked) {
                actualQuestTextMenu = "Retourne voir Finn pour lui montrer la clé."
            }
            if (quests.repareCapsulesMap.canRepareWall) {
                actualQuestTextMenu = "Va réparer la capsules."
            }
            if (quests.repareCapsulesMap.wallIsRepare) {
                actualQuestTextMenu = "Va voir Finn pour lui dire que le mur est réparé."
            }
        }
        if (actualQuestName === 'sleepQuest') {
            headNumber = 0
            actualQuestTextMenu = "Il se fait tard, je ferai bien d'aller me coucher."
        }
        if (actualQuestName === 'goToCloneMapAfterSleep') {
            headNumber = 0;
            actualQuestTextMenu = "J'ai entendu un cris dans la salles des clones. Je ferai bien d'aller chercher de quoi me protéger dans la salles des commandes."
        }
        textSize(9);
        text(actualQuestTextMenu, 25, 110, 180, 120);
        noTint();
        noFill();
        image(dialogsHeads.get(16 * headNumber, 0, 16, 16), 110, 5, 96, 96);
    }
}