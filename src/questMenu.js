//& This file managed the quest menu

function drawQuestMenu() {
    if (canDrawMenus) {
        tint(255, alphaArrows)
        let acutalTextQuestMenu = ''
        fill("rgba(31, 31, 31, 0.80)");
        strokeWeight(4);
        stroke("rgba(213, 213, 213, 0.24)");
        rect(10, 8, 200, 220, 20);
        fill("white")
        noStroke();
        textSize(12);
        textLeading(22);
        text("Quêtes :", 25, 60, 180, 120);
        if (actualQuestName === 'seedsBagQuest') {
            image(dialogsHeads.get(16 * 3, 0, 16, 16), 110, 5, 96, 96);
            acutalTextQuestMenu = "Retrouve Rose dans la salle botanique."
            if (quests.seedsBagQuest.canTakeSeedBag) {
                acutalTextQuestMenu = "Va voir Juillette dans la salle des clones pour récupérer les graines."
            }
            if (quests.seedsBagQuest.seedBagHasBeenTaked) {
                acutalTextQuestMenu = "Retourne voir Rose pour lui apporter les graines."
            }
        }
        if (actualQuestName === 'questCloneMap') {
            image(dialogsHeads.get(16 * 2, 0, 16, 16), 110, 5, 96, 96);
            acutalTextQuestMenu = "Retourne voir Juliette en salle des clones."
            if (quests.questCloneMap.canDrawInteractionClonMapQuest) {
                acutalTextQuestMenu = "Cherche un moyen de réguler les niveau d'oxygène."
            }
            if (quests.questCloneMap.questCloneMapIsOver) {
                acutalTextQuestMenu = "Va voir Juliette afin de l'informée que les niveaux sont à jour."
            }
        }
        textSize(10);
        text(acutalTextQuestMenu, 25, 110, 180, 120);
        noTint();
    }
}