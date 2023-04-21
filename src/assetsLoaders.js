//& This file actually managed all the assets

//^ This function load all assets at the game loading
function loadAssets() {
  map1 = loadJSON("json/map1.json");
  map2 = loadJSON("json/map2.json");
  map3 = loadJSON("json/map3.json");
  npc = loadJSON("json/npc.json");
  quests = loadJSON("json/quests.json");
  moreInteractionJSON = loadJSON("json/moreInteractions.json");
  mainFont = loadFont("fonts/mainFont.ttf");

  homePageBackgroundImage = loadImage("assets/menu/homePageBackgroundImage.png");
  homePagePlayButton = loadImage("assets/menu/homePagePlayButton.png");
  homePagePlayButtonHover = loadImage("assets/menu/homePagePlayButtonHover.png");
  clickImage = loadImage("assets/menu/clickImage.png");
  settingsImage = loadImage("assets/menu/settingsImage.png")

  card = loadImage("assets/objects/card.png");
  files = loadImage("assets/objects/files.png")
  note0 = loadImage("assets/objects/note0.png");
  note1 = loadImage("assets/objects/note1.png");
  note2 = loadImage("assets/objects/note2.png");


  mainCaracter = loadImage("assets/caracters/mainCaracter.png");
  mainCaracterWeapon = loadImage("assets/caracters/mainCaracterWeapon.png");
  mainCaracterDark = loadImage("assets/caracters/mainCaracterDark.png");
  mainCaracterDarkWeapon = loadImage("assets/caracters/mainCaracterDarkWeapon.png");
  mainCaracterWithSuit = loadImage("assets/caracters/mainCaracterWithSuit.png");
  npcOctavia = loadImage("assets/caracters/npcOctavia.png");
  npcAllie = loadImage("assets/caracters/npcAllie.png");
  npcFinn = loadImage("assets/caracters/npcFinn.png");
  eve = loadImage("assets/caracters/eve.png");
  eveEndGame = loadImage("assets/caracters/eveEndGame.png");
  dialogsHeads = loadImage("assets/caracters/dialogsHeads.png");
  assets = loadImage("assets/assets.png");
  darksAssets = loadImage("assets/darksAssets.png");
  interactionButton = loadImage("assets/interactionButton.png");
  arrowsButton = loadImage("assets/arrowsButton.png")

  backgroundCloneMap = loadImage("assets/cloneMap/backgroundCloneMap.png");
  lightCloneMap = loadImage("assets/cloneMap/lightCloneMap.png");
  jarAnimationCloneMap = loadImage("assets/cloneMap/jarAnimationCloneMap.png");
  questAnimationCloneMap = loadImage("assets/cloneMap/questAnimationCloneMap.png");
  questCloneMap1 = loadImage("assets/cloneMap/questCloneMap1.png");
  frontOfCloneMap = loadImage("assets/cloneMap/frontOfCloneMap.png");
  upArrowCloneMapQuest = loadImage("assets/cloneMap/upArrowCloneMapQuest.png");
  downArrowCloneMapQuest = loadImage("assets/cloneMap/downArrowCloneMapQuest.png");
  endScreenQuestCloneMap = loadImage("assets/cloneMap/endScreenQuestCloneMap.png");
  screenAnimationCloneMap = loadImage("assets/cloneMap/screenAnimationCloneMap.png");

  backgroundCloneMapActeTwo = loadImage("assets/cloneMap/backgroundCloneMapActeTwo.png");
  lightCloneMapActeTwo = loadImage("assets/cloneMap/lightCloneMapActeTwo.png");
  frontOfCloneMapActeTwo = loadImage("assets/cloneMap/frontOfCloneMapActeTwo.png");


  backgroundBotanicMap = loadImage("assets/botanicMap/backgroundBotanicMap.png");
  planteAnimationBotanicMap = loadImage("assets/botanicMap/planteAnimationBotanicMap.png")
  lightBotanicMap = loadImage("assets/botanicMap/lightBotanicMap.png")
  seedsBagBotanicMap = loadImage("assets/botanicMap/seedsBagBotanicMap.png")
  frontOfBotanicMap = loadImage("assets/botanicMap/frontOfBotanicMap.png")

  backgroundCommandMap = loadImage("assets/commandMap/backgroundCommandMap.png")
  lightCommandMap = loadImage("assets/commandMap/lightCommandMap.png")
  animationScreenCommandMap = loadImage("assets/commandMap/animationScreenCommandMap.png")
  controlPanelAnimationCommandMap = loadImage("assets/commandMap/controlPanelAnimationCommandMap.png")
  earthAnimationCommandMap = loadImage("assets/commandMap/earthAnimationCommandMap.png")
  seatsCommandMap = loadImage("assets/commandMap/seatsCommandMap.png")
  gunCommandMap = loadImage("assets/commandMap/gunCommandMap.png")
  cardCommandMap = loadImage("assets/commandMap/cardCommandMap.png")

  normalPipe = loadImage("assets/capsuleMap/normalPipe.png")
  gazPipe = loadImage("assets/capsuleMap/gazPipe.png")
  redLigthsCapsuleMap = loadImage("assets/capsuleMap/redLigthsCapsuleMap.png")
  redLigthsAnimation = loadImage("assets/capsuleMap/redLigthsAnimationCapsuleMap.png")
  wrenchCapsulesMap = loadImage("assets/capsuleMap/wrenchCapsulesMap.png")
  pipeFront = loadImage("assets/capsuleMap/pipeFront.png")
  ligthsCapsuleMap = loadImage("assets/capsuleMap/ligthsCapsuleMap.png")

  backgroundCapsuleMapWithoutSuit = loadImage("assets/capsuleMap/backgroundCapsuleMapWithoutSuit.png")
  caspule = loadImage("assets/capsuleMap/caspule.png")
  buttonOff = loadImage("assets/capsuleMap/buttonOff.png")
  buttonOn = loadImage("assets/capsuleMap/buttonOn.png")
  doorOpenAnimation = loadImage("assets/capsuleMap/doorOpenAnimation.png")
  suit = loadImage("assets/capsuleMap/suit.png")
  lightAlone = loadImage("assets/capsuleMap/lightAlone.png")
  lightAloneOff = loadImage("assets/capsuleMap/lightAloneOff.png")

  backgroundDormsMap = loadImage("assets/dormsMap/backgroundDormsMap.png")
  screenOneAnimationDormsMap = loadImage("assets/dormsMap/screenOneAnimationDormsMap.png")
  screenTwoAnimationDormsMap = loadImage("assets/dormsMap/screenTwoAnimationDormsMap.png")
  ligthsDormsMap = loadImage("assets/dormsMap/ligthsDormsMap.png")
  frontOfDormsMap = loadImage("assets/dormsMap/frontOfDormsMap.png")

  alienImg = loadImage("assets/caracters/eve.png");
  playerWeapon = loadImage("assets/caracters/mainCaracterWeapon.png");
  playerAlienImg = loadImage("assets/fight/AnimFightSpam.png");
  alienHit = loadImage("assets/fight/AnimHit.png");
  playerDie = loadImage("assets/fight/AnimMort.png");
  ammo = loadImage("assets/fight/Ammo.png")
  spaceSpam = loadImage("assets/fight/spaceSpam.png")

  inventoryBackground = loadImage("assets/menu/inventoryBackground.png")
  inventorySelectedBackground = loadImage("assets/menu/inventorySelectedBackground.png")
  questMenuBackground = loadImage("assets/menu/questMenuBackground.png")
  dialogsBackground = loadImage("assets/menu/dialogsBackground.png")

  mainMenuBackgroundSound = createAudio("assets/sounds/mainMenuBackgroundSound.mp3")
  botanicMapBackgroundSound = createAudio("assets/sounds/botanicMapBackgroundSound.mp3")
  capsuleMapBackgroundSound = createAudio("assets/sounds/capsuleMapBackgroundSound.mp3")
  cloneMapBackgroundSound = createAudio("assets/sounds/cloneMapBackgroundSound.mp3")
  topDownMapBackgroundSound = createAudio("assets/sounds/topDownMapBackgroundSound.mp3")
  dormsMapBackgroundSound = createAudio("assets/sounds/dormsMapBackgroundSound.mp3")
  commmandMapBackgroundSound = createAudio("assets/sounds/commmandMapBackgroundSound.mp3")

  doorSound = createAudio("assets/sounds/doorSound.mp3")
}

//^ This function recover all assets
function initAssets() {
  empty = assets.get(0, 0, tileSizeCut, tileSizeCut);
  tile1 = assets.get(0 + tileSizeCut * 1, 0, tileSizeCut, tileSizeCut);
  tile2 = assets.get(0 + tileSizeCut * 2, 0, tileSizeCut, tileSizeCut);
  tile3 = assets.get(0 + tileSizeCut * 3, 0, tileSizeCut, tileSizeCut);
  tile4 = assets.get(0 + tileSizeCut * 4, 0, tileSizeCut, tileSizeCut);
  tile5 = assets.get(0 + tileSizeCut * 5, 0, tileSizeCut, tileSizeCut);

  tile6 = assets.get(0, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);
  tile7 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);
  tile8 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);
  tile9 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);
  tile10 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);
  tile11 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);

  tile12 = assets.get(0, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  tile13 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  tile14 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  tile15 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  tile16 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  tile17 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);

  tile18 = assets.get(0, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  tile19 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  tile20 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  tile21 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  tile22 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  tile23 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);

  tile24 = assets.get(0, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  tile25 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  tile26 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  tile27 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  tile28 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  tile29 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);

  tile30 = assets.get(0, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  tile31 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  tile32 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  tile33 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  tile34 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  tile35 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);

  tile36 = assets.get(0, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);
  tile37 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);
  tile38 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);
  tile39 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);
  tile40 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);
  tile41 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);

  tile42 = assets.get(0, 0 + tileSizeCut * 7, tileSizeCut, tileSizeCut);
  tile43 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 7, tileSizeCut, tileSizeCut);
  tile44 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 7, tileSizeCut, tileSizeCut);
  tile45 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 7, tileSizeCut, tileSizeCut);
  tile46 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 7, tileSizeCut, tileSizeCut);
  tile47 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 7, tileSizeCut, tileSizeCut);

  tile48 = assets.get(0, 0 + tileSizeCut * 8, tileSizeCut, tileSizeCut);
  tile49 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 8, tileSizeCut, tileSizeCut);
  tile50 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 8, tileSizeCut, tileSizeCut);
  tile51 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 8, tileSizeCut, tileSizeCut);
  tile52 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 8, tileSizeCut, tileSizeCut);
  tile53 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 8, tileSizeCut, tileSizeCut);

  tile54 = assets.get(0, 0 + tileSizeCut * 9, tileSizeCut, tileSizeCut);
  tile55 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 9, tileSizeCut, tileSizeCut);
  tile56 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 9, tileSizeCut, tileSizeCut);
  tile57 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 9, tileSizeCut, tileSizeCut);
  tile58 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 9, tileSizeCut, tileSizeCut);
  tile59 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 9, tileSizeCut, tileSizeCut);

  tile60 = assets.get(0, 0 + tileSizeCut * 10, tileSizeCut, tileSizeCut);
  tile61 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 10, tileSizeCut, tileSizeCut);
  tile62 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 10, tileSizeCut, tileSizeCut);
  tile63 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 10, tileSizeCut, tileSizeCut);
  tile64 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 10, tileSizeCut, tileSizeCut);
  tile65 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 10, tileSizeCut, tileSizeCut);

  tile66 = assets.get(0, 0 + tileSizeCut * 11, tileSizeCut, tileSizeCut);
  tile67 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 11, tileSizeCut, tileSizeCut);
  tile68 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 11, tileSizeCut, tileSizeCut);
  tile69 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 11, tileSizeCut, tileSizeCut);
  tile70 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 11, tileSizeCut, tileSizeCut);
  tile71 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 11, tileSizeCut, tileSizeCut);

  tile72 = assets.get(0, 0 + tileSizeCut * 12, tileSizeCut, tileSizeCut);
  tile73 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 12, tileSizeCut, tileSizeCut);
  tile74 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 12, tileSizeCut, tileSizeCut);
  tile75 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 12, tileSizeCut, tileSizeCut);
  tile76 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 12, tileSizeCut, tileSizeCut);
  tile77 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 12, tileSizeCut, tileSizeCut);

  tile78 = assets.get(0, 0 + tileSizeCut * 13, tileSizeCut, tileSizeCut);
  tile79 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 13, tileSizeCut, tileSizeCut);
  tile80 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 13, tileSizeCut, tileSizeCut);
  tile81 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 13, tileSizeCut, tileSizeCut);
  tile82 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 13, tileSizeCut, tileSizeCut);
  tile83 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 13, tileSizeCut, tileSizeCut);

  tile84 = assets.get(0, 0 + tileSizeCut * 14, tileSizeCut, tileSizeCut);
  tile85 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 14, tileSizeCut, tileSizeCut);
  tile86 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 14, tileSizeCut, tileSizeCut);
  tile87 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 14, tileSizeCut, tileSizeCut);
  tile88 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 14, tileSizeCut, tileSizeCut);
  tile89 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 14, tileSizeCut, tileSizeCut);

  tile90 = assets.get(0, 0 + tileSizeCut * 15, tileSizeCut, tileSizeCut);
  tile91 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 15, tileSizeCut, tileSizeCut);
  tile92 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 15, tileSizeCut, tileSizeCut);
  tile93 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 15, tileSizeCut, tileSizeCut);
  tile94 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 15, tileSizeCut, tileSizeCut);
  tile95 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 15, tileSizeCut, tileSizeCut);

  tile96 = assets.get(0, 0 + tileSizeCut * 16, tileSizeCut, tileSizeCut);
  tile97 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 16, tileSizeCut, tileSizeCut);
  tile98 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 16, tileSizeCut, tileSizeCut);
  tile99 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 16, tileSizeCut, tileSizeCut);
  tile100 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 16, tileSizeCut, tileSizeCut);
  tile101 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 16, tileSizeCut, tileSizeCut);

  tile102 = assets.get(0, 0 + tileSizeCut * 17, tileSizeCut, tileSizeCut);
  tile103 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 17, tileSizeCut, tileSizeCut);
  tile104 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 17, tileSizeCut, tileSizeCut);
  tile105 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 17, tileSizeCut, tileSizeCut);
  tile106 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 17, tileSizeCut, tileSizeCut);
  tile107 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 17, tileSizeCut, tileSizeCut);

  tile108 = assets.get(0, 0 + tileSizeCut * 18, tileSizeCut, tileSizeCut);
  tile109 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 18, tileSizeCut, tileSizeCut);
  tile110 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 18, tileSizeCut, tileSizeCut);
  tile111 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 18, tileSizeCut, tileSizeCut);
  tile112 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 18, tileSizeCut, tileSizeCut);
  tile113 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 18, tileSizeCut, tileSizeCut);

  tile114 = assets.get(0, 0 + tileSizeCut * 19, tileSizeCut, tileSizeCut);
  tile115 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 19, tileSizeCut, tileSizeCut);
  tile116 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 19, tileSizeCut, tileSizeCut);
  tile117 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 19, tileSizeCut, tileSizeCut);
  tile118 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 19, tileSizeCut, tileSizeCut);
  tile119 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 19, tileSizeCut, tileSizeCut);

  tile120 = assets.get(0, 0 + tileSizeCut * 20, tileSizeCut, tileSizeCut);
  tile121 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 20, tileSizeCut, tileSizeCut);
  tile122 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 20, tileSizeCut, tileSizeCut);
  tile123 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 20, tileSizeCut, tileSizeCut);
  tile124 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 20, tileSizeCut, tileSizeCut);
  tile125 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 20, tileSizeCut, tileSizeCut);

  tile126 = assets.get(0, 0 + tileSizeCut * 21, tileSizeCut, tileSizeCut);
  tile127 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 21, tileSizeCut, tileSizeCut);
  tile128 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 21, tileSizeCut, tileSizeCut);
  tile129 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 21, tileSizeCut, tileSizeCut);
  tile130 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 21, tileSizeCut, tileSizeCut);
  tile131 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 21, tileSizeCut, tileSizeCut);

  tile132 = assets.get(0, 0 + tileSizeCut * 22, tileSizeCut, tileSizeCut);
  tile133 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 22, tileSizeCut, tileSizeCut);
  tile134 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 22, tileSizeCut, tileSizeCut);
  tile135 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 22, tileSizeCut, tileSizeCut);
  tile136 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 22, tileSizeCut, tileSizeCut);
  tile137 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 22, tileSizeCut, tileSizeCut);

  tile138 = assets.get(0, 0 + tileSizeCut * 23, tileSizeCut, tileSizeCut);
  tile139 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 23, tileSizeCut, tileSizeCut);
  tile140 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 23, tileSizeCut, tileSizeCut);
  tile141 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 23, tileSizeCut, tileSizeCut);
  tile142 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 23, tileSizeCut, tileSizeCut);
  tile143 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 23, tileSizeCut, tileSizeCut);

  tile144 = assets.get(0, 0 + tileSizeCut * 24, tileSizeCut, tileSizeCut);
  tile145 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 24, tileSizeCut, tileSizeCut);
  tile146 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 24, tileSizeCut, tileSizeCut);
  tile147 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 24, tileSizeCut, tileSizeCut);
  tile148 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 24, tileSizeCut, tileSizeCut);
  tile149 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 24, tileSizeCut, tileSizeCut);

  tile150 = assets.get(0, 0 + tileSizeCut * 25, tileSizeCut, tileSizeCut);
  tile151 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 25, tileSizeCut, tileSizeCut);
  tile152 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 25, tileSizeCut, tileSizeCut);
  tile153 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 25, tileSizeCut, tileSizeCut);
  tile154 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 25, tileSizeCut, tileSizeCut);
  tile155 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 25, tileSizeCut, tileSizeCut);

  tile156 = assets.get(0, 0 + tileSizeCut * 26, tileSizeCut, tileSizeCut);
  tile157 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 26, tileSizeCut, tileSizeCut);
  tile158 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 26, tileSizeCut, tileSizeCut);
  tile159 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 26, tileSizeCut, tileSizeCut);
  tile160 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 26, tileSizeCut, tileSizeCut);
  tile161 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 26, tileSizeCut, tileSizeCut);

  tile162 = assets.get(0, 0 + tileSizeCut * 27, tileSizeCut, tileSizeCut);
  tile163 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 27, tileSizeCut, tileSizeCut);
  tile164 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 27, tileSizeCut, tileSizeCut);
  tile165 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 27, tileSizeCut, tileSizeCut);
  tile166 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 27, tileSizeCut, tileSizeCut);
  tile167 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 27, tileSizeCut, tileSizeCut);

  tile168 = assets.get(0, 0 + tileSizeCut * 28, tileSizeCut, tileSizeCut);
  tile169 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 28, tileSizeCut, tileSizeCut);
  tile170 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 28, tileSizeCut, tileSizeCut);
  tile171 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 28, tileSizeCut, tileSizeCut);
  tile172 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 28, tileSizeCut, tileSizeCut);
  tile173 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 28, tileSizeCut, tileSizeCut);

  tile174 = assets.get(0, 0 + tileSizeCut * 29, tileSizeCut, tileSizeCut);
  tile175 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 29, tileSizeCut, tileSizeCut);
  tile176 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 29, tileSizeCut, tileSizeCut);
  tile177 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 29, tileSizeCut, tileSizeCut);
  tile178 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 29, tileSizeCut, tileSizeCut);
  tile179 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 29, tileSizeCut, tileSizeCut);

  tile180 = assets.get(0, 0 + tileSizeCut * 30, tileSizeCut, tileSizeCut);
  tile181 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 30, tileSizeCut, tileSizeCut);
  tile182 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 30, tileSizeCut, tileSizeCut);
  tile183 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 30, tileSizeCut, tileSizeCut);
  tile184 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 30, tileSizeCut, tileSizeCut);
  tile185 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 30, tileSizeCut, tileSizeCut);

  tile186 = assets.get(0, 0 + tileSizeCut * 31, tileSizeCut, tileSizeCut);
  tile187 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 31, tileSizeCut, tileSizeCut);
  tile188 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 31, tileSizeCut, tileSizeCut);
  tile189 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 31, tileSizeCut, tileSizeCut);
  tile190 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 31, tileSizeCut, tileSizeCut);
  tile191 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 31, tileSizeCut, tileSizeCut);

  tile192 = assets.get(0, 0 + tileSizeCut * 32, tileSizeCut, tileSizeCut);
  tile193 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 32, tileSizeCut, tileSizeCut);
  tile194 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 32, tileSizeCut, tileSizeCut);
  tile195 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 32, tileSizeCut, tileSizeCut);
  tile196 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 32, tileSizeCut, tileSizeCut);
  tile197 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 32, tileSizeCut, tileSizeCut);

  tile198 = assets.get(0, 0 + tileSizeCut * 33, tileSizeCut, tileSizeCut);
  tile199 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 33, tileSizeCut, tileSizeCut);
  tile200 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 33, tileSizeCut, tileSizeCut);
  tile201 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 33, tileSizeCut, tileSizeCut);
  tile202 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 33, tileSizeCut, tileSizeCut);
  tile203 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 33, tileSizeCut, tileSizeCut);

  tile204 = assets.get(0, 0 + tileSizeCut * 34, tileSizeCut, tileSizeCut);
  tile205 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 34, tileSizeCut, tileSizeCut);
  tile206 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 34, tileSizeCut, tileSizeCut);
  tile207 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 34, tileSizeCut, tileSizeCut);
  tile208 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 34, tileSizeCut, tileSizeCut);
  tile209 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 34, tileSizeCut, tileSizeCut);

  tile210 = assets.get(0, 0 + tileSizeCut * 35, tileSizeCut, tileSizeCut);
  tile211 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 35, tileSizeCut, tileSizeCut);
  tile212 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 35, tileSizeCut, tileSizeCut);
  tile213 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 35, tileSizeCut, tileSizeCut);
  tile214 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 35, tileSizeCut, tileSizeCut);
  tile215 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 35, tileSizeCut, tileSizeCut);

  tile216 = assets.get(0, 0 + tileSizeCut * 36, tileSizeCut, tileSizeCut);
  tile217 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 36, tileSizeCut, tileSizeCut);
  tile218 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 36, tileSizeCut, tileSizeCut);
  tile219 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 36, tileSizeCut, tileSizeCut);
  tile220 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 36, tileSizeCut, tileSizeCut);
  tile221 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 36, tileSizeCut, tileSizeCut);

  tile222 = assets.get(0, 0 + tileSizeCut * 37, tileSizeCut, tileSizeCut);
  tile223 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 37, tileSizeCut, tileSizeCut);
  tile224 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 37, tileSizeCut, tileSizeCut);
  tile225 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 37, tileSizeCut, tileSizeCut);
  tile226 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 37, tileSizeCut, tileSizeCut);
  tile227 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 37, tileSizeCut, tileSizeCut);

  tile228 = assets.get(0, 0 + tileSizeCut * 38, tileSizeCut, tileSizeCut);
  tile229 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 38, tileSizeCut, tileSizeCut);
  tile230 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 38, tileSizeCut, tileSizeCut);
  tile231 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 38, tileSizeCut, tileSizeCut);
  tile232 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 38, tileSizeCut, tileSizeCut);
  tile233 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 38, tileSizeCut, tileSizeCut);

  tile234 = assets.get(0, 0 + tileSizeCut * 39, tileSizeCut, tileSizeCut);
  tile235 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 39, tileSizeCut, tileSizeCut);
  tile236 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 39, tileSizeCut, tileSizeCut);
  tile237 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 39, tileSizeCut, tileSizeCut);
  tile238 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 39, tileSizeCut, tileSizeCut);
  tile239 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 39, tileSizeCut, tileSizeCut);

  tile240 = assets.get(0, 0 + tileSizeCut * 40, tileSizeCut, tileSizeCut);
  tile241 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 40, tileSizeCut, tileSizeCut);
  tile242 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 40, tileSizeCut, tileSizeCut);
  tile243 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 40, tileSizeCut, tileSizeCut);
  tile244 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 40, tileSizeCut, tileSizeCut);
  tile245 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 40, tileSizeCut, tileSizeCut);

  tile246 = assets.get(0, 0 + tileSizeCut * 41, tileSizeCut, tileSizeCut);
  tile247 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 41, tileSizeCut, tileSizeCut);
  tile248 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 41, tileSizeCut, tileSizeCut);
  tile249 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 41, tileSizeCut, tileSizeCut);
  tile250 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 41, tileSizeCut, tileSizeCut);
  tile251 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 41, tileSizeCut, tileSizeCut);

  tile252 = assets.get(0, 0 + tileSizeCut * 42, tileSizeCut, tileSizeCut);
  tile253 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 42, tileSizeCut, tileSizeCut);
  tile254 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 42, tileSizeCut, tileSizeCut);
  tile255 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 42, tileSizeCut, tileSizeCut);
  tile256 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 42, tileSizeCut, tileSizeCut);
  tile257 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 42, tileSizeCut, tileSizeCut);

  tile258 = assets.get(0, 0 + tileSizeCut * 43, tileSizeCut, tileSizeCut);
  tile259 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 43, tileSizeCut, tileSizeCut);
  tile260 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 43, tileSizeCut, tileSizeCut);
  tile261 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 43, tileSizeCut, tileSizeCut);
  tile262 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 43, tileSizeCut, tileSizeCut);
  tile263 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 43, tileSizeCut, tileSizeCut);

  tile264 = assets.get(0, 0 + tileSizeCut * 44, tileSizeCut, tileSizeCut);
  tile265 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 44, tileSizeCut, tileSizeCut);
  tile266 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 44, tileSizeCut, tileSizeCut);
  tile267 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 44, tileSizeCut, tileSizeCut);
  tile268 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 44, tileSizeCut, tileSizeCut);
  tile269 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 44, tileSizeCut, tileSizeCut);

  tile270 = assets.get(0, 0 + tileSizeCut * 45, tileSizeCut, tileSizeCut);
  tile271 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 45, tileSizeCut, tileSizeCut);
  tile272 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 45, tileSizeCut, tileSizeCut);
  tile273 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 45, tileSizeCut, tileSizeCut);
  tile274 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 45, tileSizeCut, tileSizeCut);
  tile275 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 45, tileSizeCut, tileSizeCut);

  tile276 = assets.get(0, 0 + tileSizeCut * 46, tileSizeCut, tileSizeCut);
  tile277 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 46, tileSizeCut, tileSizeCut);
  tile278 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 46, tileSizeCut, tileSizeCut);
  tile279 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 46, tileSizeCut, tileSizeCut);
  tile280 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 46, tileSizeCut, tileSizeCut);
  tile281 = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 46, tileSizeCut, tileSizeCut);

  emptydark = darksAssets.get(0, 0, tileSizeCut, tileSizeCut);
  tiledark1 = darksAssets.get(0 + tileSizeCut * 1, 0, tileSizeCut, tileSizeCut);
  tiledark2 = darksAssets.get(0 + tileSizeCut * 2, 0, tileSizeCut, tileSizeCut);
  tiledark3 = darksAssets.get(0 + tileSizeCut * 3, 0, tileSizeCut, tileSizeCut);
  tiledark4 = darksAssets.get(0 + tileSizeCut * 4, 0, tileSizeCut, tileSizeCut);
  tiledark5 = darksAssets.get(0 + tileSizeCut * 5, 0, tileSizeCut, tileSizeCut);

  tiledark6 = darksAssets.get(0, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);
  tiledark7 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);
  tiledark8 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);
  tiledark9 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);
  tiledark10 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);
  tiledark11 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);

  tiledark12 = darksAssets.get(0, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  tiledark13 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  tiledark14 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  tiledark15 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  tiledark16 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  tiledark17 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);

  tiledark18 = darksAssets.get(0, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  tiledark19 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  tiledark20 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  tiledark21 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  tiledark22 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  tiledark23 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);

  tiledark24 = darksAssets.get(0, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  tiledark25 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  tiledark26 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  tiledark27 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  tiledark28 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  tiledark29 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);

  tiledark30 = darksAssets.get(0, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  tiledark31 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  tiledark32 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  tiledark33 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  tiledark34 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  tiledark35 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);

  tiledark36 = darksAssets.get(0, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);
  tiledark37 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);
  tiledark38 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);
  tiledark39 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);
  tiledark40 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);
  tiledark41 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);

  tiledark42 = darksAssets.get(0, 0 + tileSizeCut * 7, tileSizeCut, tileSizeCut);
  tiledark43 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 7, tileSizeCut, tileSizeCut);
  tiledark44 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 7, tileSizeCut, tileSizeCut);
  tiledark45 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 7, tileSizeCut, tileSizeCut);
  tiledark46 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 7, tileSizeCut, tileSizeCut);
  tiledark47 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 7, tileSizeCut, tileSizeCut);

  tiledark48 = darksAssets.get(0, 0 + tileSizeCut * 8, tileSizeCut, tileSizeCut);
  tiledark49 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 8, tileSizeCut, tileSizeCut);
  tiledark50 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 8, tileSizeCut, tileSizeCut);
  tiledark51 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 8, tileSizeCut, tileSizeCut);
  tiledark52 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 8, tileSizeCut, tileSizeCut);
  tiledark53 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 8, tileSizeCut, tileSizeCut);

  tiledark54 = darksAssets.get(0, 0 + tileSizeCut * 9, tileSizeCut, tileSizeCut);
  tiledark55 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 9, tileSizeCut, tileSizeCut);
  tiledark56 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 9, tileSizeCut, tileSizeCut);
  tiledark57 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 9, tileSizeCut, tileSizeCut);
  tiledark58 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 9, tileSizeCut, tileSizeCut);
  tiledark59 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 9, tileSizeCut, tileSizeCut);

  tiledark60 = darksAssets.get(0, 0 + tileSizeCut * 10, tileSizeCut, tileSizeCut);
  tiledark61 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 10, tileSizeCut, tileSizeCut);
  tiledark62 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 10, tileSizeCut, tileSizeCut);
  tiledark63 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 10, tileSizeCut, tileSizeCut);
  tiledark64 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 10, tileSizeCut, tileSizeCut);
  tiledark65 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 10, tileSizeCut, tileSizeCut);

  tiledark66 = darksAssets.get(0, 0 + tileSizeCut * 11, tileSizeCut, tileSizeCut);
  tiledark67 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 11, tileSizeCut, tileSizeCut);
  tiledark68 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 11, tileSizeCut, tileSizeCut);
  tiledark69 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 11, tileSizeCut, tileSizeCut);
  tiledark70 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 11, tileSizeCut, tileSizeCut);
  tiledark71 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 11, tileSizeCut, tileSizeCut);

  tiledark72 = darksAssets.get(0, 0 + tileSizeCut * 12, tileSizeCut, tileSizeCut);
  tiledark73 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 12, tileSizeCut, tileSizeCut);
  tiledark74 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 12, tileSizeCut, tileSizeCut);
  tiledark75 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 12, tileSizeCut, tileSizeCut);
  tiledark76 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 12, tileSizeCut, tileSizeCut);
  tiledark77 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 12, tileSizeCut, tileSizeCut);

  tiledark78 = darksAssets.get(0, 0 + tileSizeCut * 13, tileSizeCut, tileSizeCut);
  tiledark79 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 13, tileSizeCut, tileSizeCut);
  tiledark80 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 13, tileSizeCut, tileSizeCut);
  tiledark81 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 13, tileSizeCut, tileSizeCut);
  tiledark82 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 13, tileSizeCut, tileSizeCut);
  tiledark83 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 13, tileSizeCut, tileSizeCut);

  tiledark84 = darksAssets.get(0, 0 + tileSizeCut * 14, tileSizeCut, tileSizeCut);
  tiledark85 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 14, tileSizeCut, tileSizeCut);
  tiledark86 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 14, tileSizeCut, tileSizeCut);
  tiledark87 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 14, tileSizeCut, tileSizeCut);
  tiledark88 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 14, tileSizeCut, tileSizeCut);
  tiledark89 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 14, tileSizeCut, tileSizeCut);

  tiledark90 = darksAssets.get(0, 0 + tileSizeCut * 15, tileSizeCut, tileSizeCut);
  tiledark91 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 15, tileSizeCut, tileSizeCut);
  tiledark92 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 15, tileSizeCut, tileSizeCut);
  tiledark93 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 15, tileSizeCut, tileSizeCut);
  tiledark94 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 15, tileSizeCut, tileSizeCut);
  tiledark95 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 15, tileSizeCut, tileSizeCut);

  tiledark96 = darksAssets.get(0, 0 + tileSizeCut * 16, tileSizeCut, tileSizeCut);
  tiledark97 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 16, tileSizeCut, tileSizeCut);
  tiledark98 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 16, tileSizeCut, tileSizeCut);
  tiledark99 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 16, tileSizeCut, tileSizeCut);
  tiledark100 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 16, tileSizeCut, tileSizeCut);
  tiledark101 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 16, tileSizeCut, tileSizeCut);

  tiledark102 = darksAssets.get(0, 0 + tileSizeCut * 17, tileSizeCut, tileSizeCut);
  tiledark103 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 17, tileSizeCut, tileSizeCut);
  tiledark104 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 17, tileSizeCut, tileSizeCut);
  tiledark105 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 17, tileSizeCut, tileSizeCut);
  tiledark106 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 17, tileSizeCut, tileSizeCut);
  tiledark107 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 17, tileSizeCut, tileSizeCut);

  tiledark108 = darksAssets.get(0, 0 + tileSizeCut * 18, tileSizeCut, tileSizeCut);
  tiledark109 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 18, tileSizeCut, tileSizeCut);
  tiledark110 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 18, tileSizeCut, tileSizeCut);
  tiledark111 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 18, tileSizeCut, tileSizeCut);
  tiledark112 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 18, tileSizeCut, tileSizeCut);
  tiledark113 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 18, tileSizeCut, tileSizeCut);

  tiledark114 = darksAssets.get(0, 0 + tileSizeCut * 19, tileSizeCut, tileSizeCut);
  tiledark115 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 19, tileSizeCut, tileSizeCut);
  tiledark116 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 19, tileSizeCut, tileSizeCut);
  tiledark117 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 19, tileSizeCut, tileSizeCut);
  tiledark118 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 19, tileSizeCut, tileSizeCut);
  tiledark119 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 19, tileSizeCut, tileSizeCut);

  tiledark120 = darksAssets.get(0, 0 + tileSizeCut * 20, tileSizeCut, tileSizeCut);
  tiledark121 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 20, tileSizeCut, tileSizeCut);
  tiledark122 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 20, tileSizeCut, tileSizeCut);
  tiledark123 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 20, tileSizeCut, tileSizeCut);
  tiledark124 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 20, tileSizeCut, tileSizeCut);
  tiledark125 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 20, tileSizeCut, tileSizeCut);

  tiledark126 = darksAssets.get(0, 0 + tileSizeCut * 21, tileSizeCut, tileSizeCut);
  tiledark127 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 21, tileSizeCut, tileSizeCut);
  tiledark128 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 21, tileSizeCut, tileSizeCut);
  tiledark129 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 21, tileSizeCut, tileSizeCut);
  tiledark130 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 21, tileSizeCut, tileSizeCut);
  tiledark131 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 21, tileSizeCut, tileSizeCut);

  tiledark132 = darksAssets.get(0, 0 + tileSizeCut * 22, tileSizeCut, tileSizeCut);
  tiledark133 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 22, tileSizeCut, tileSizeCut);
  tiledark134 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 22, tileSizeCut, tileSizeCut);
  tiledark135 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 22, tileSizeCut, tileSizeCut);
  tiledark136 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 22, tileSizeCut, tileSizeCut);
  tiledark137 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 22, tileSizeCut, tileSizeCut);

  tiledark138 = darksAssets.get(0, 0 + tileSizeCut * 23, tileSizeCut, tileSizeCut);
  tiledark139 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 23, tileSizeCut, tileSizeCut);
  tiledark140 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 23, tileSizeCut, tileSizeCut);
  tiledark141 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 23, tileSizeCut, tileSizeCut);
  tiledark142 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 23, tileSizeCut, tileSizeCut);
  tiledark143 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 23, tileSizeCut, tileSizeCut);

  tiledark144 = darksAssets.get(0, 0 + tileSizeCut * 24, tileSizeCut, tileSizeCut);
  tiledark145 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 24, tileSizeCut, tileSizeCut);
  tiledark146 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 24, tileSizeCut, tileSizeCut);
  tiledark147 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 24, tileSizeCut, tileSizeCut);
  tiledark148 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 24, tileSizeCut, tileSizeCut);
  tiledark149 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 24, tileSizeCut, tileSizeCut);

  tiledark150 = darksAssets.get(0, 0 + tileSizeCut * 25, tileSizeCut, tileSizeCut);
  tiledark151 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 25, tileSizeCut, tileSizeCut);
  tiledark152 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 25, tileSizeCut, tileSizeCut);
  tiledark153 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 25, tileSizeCut, tileSizeCut);
  tiledark154 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 25, tileSizeCut, tileSizeCut);
  tiledark155 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 25, tileSizeCut, tileSizeCut);

  tiledark156 = darksAssets.get(0, 0 + tileSizeCut * 26, tileSizeCut, tileSizeCut);
  tiledark157 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 26, tileSizeCut, tileSizeCut);
  tiledark158 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 26, tileSizeCut, tileSizeCut);
  tiledark159 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 26, tileSizeCut, tileSizeCut);
  tiledark160 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 26, tileSizeCut, tileSizeCut);
  tiledark161 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 26, tileSizeCut, tileSizeCut);

  tiledark162 = darksAssets.get(0, 0 + tileSizeCut * 27, tileSizeCut, tileSizeCut);
  tiledark163 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 27, tileSizeCut, tileSizeCut);
  tiledark164 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 27, tileSizeCut, tileSizeCut);
  tiledark165 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 27, tileSizeCut, tileSizeCut);
  tiledark166 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 27, tileSizeCut, tileSizeCut);
  tiledark167 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 27, tileSizeCut, tileSizeCut);

  tiledark168 = darksAssets.get(0, 0 + tileSizeCut * 28, tileSizeCut, tileSizeCut);
  tiledark169 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 28, tileSizeCut, tileSizeCut);
  tiledark170 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 28, tileSizeCut, tileSizeCut);
  tiledark171 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 28, tileSizeCut, tileSizeCut);
  tiledark172 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 28, tileSizeCut, tileSizeCut);
  tiledark173 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 28, tileSizeCut, tileSizeCut);

  tiledark174 = darksAssets.get(0, 0 + tileSizeCut * 29, tileSizeCut, tileSizeCut);
  tiledark175 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 29, tileSizeCut, tileSizeCut);
  tiledark176 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 29, tileSizeCut, tileSizeCut);
  tiledark177 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 29, tileSizeCut, tileSizeCut);
  tiledark178 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 29, tileSizeCut, tileSizeCut);
  tiledark179 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 29, tileSizeCut, tileSizeCut);

  tiledark180 = darksAssets.get(0, 0 + tileSizeCut * 30, tileSizeCut, tileSizeCut);
  tiledark181 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 30, tileSizeCut, tileSizeCut);
  tiledark182 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 30, tileSizeCut, tileSizeCut);
  tiledark183 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 30, tileSizeCut, tileSizeCut);
  tiledark184 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 30, tileSizeCut, tileSizeCut);
  tiledark185 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 30, tileSizeCut, tileSizeCut);

  tiledark186 = darksAssets.get(0, 0 + tileSizeCut * 31, tileSizeCut, tileSizeCut);
  tiledark187 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 31, tileSizeCut, tileSizeCut);
  tiledark188 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 31, tileSizeCut, tileSizeCut);
  tiledark189 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 31, tileSizeCut, tileSizeCut);
  tiledark190 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 31, tileSizeCut, tileSizeCut);
  tiledark191 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 31, tileSizeCut, tileSizeCut);

  tiledark192 = darksAssets.get(0, 0 + tileSizeCut * 32, tileSizeCut, tileSizeCut);
  tiledark193 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 32, tileSizeCut, tileSizeCut);
  tiledark194 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 32, tileSizeCut, tileSizeCut);
  tiledark195 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 32, tileSizeCut, tileSizeCut);
  tiledark196 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 32, tileSizeCut, tileSizeCut);
  tiledark197 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 32, tileSizeCut, tileSizeCut);

  tiledark198 = darksAssets.get(0, 0 + tileSizeCut * 33, tileSizeCut, tileSizeCut);
  tiledark199 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 33, tileSizeCut, tileSizeCut);
  tiledark200 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 33, tileSizeCut, tileSizeCut);
  tiledark201 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 33, tileSizeCut, tileSizeCut);
  tiledark202 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 33, tileSizeCut, tileSizeCut);
  tiledark203 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 33, tileSizeCut, tileSizeCut);

  tiledark204 = darksAssets.get(0, 0 + tileSizeCut * 34, tileSizeCut, tileSizeCut);
  tiledark205 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 34, tileSizeCut, tileSizeCut);
  tiledark206 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 34, tileSizeCut, tileSizeCut);
  tiledark207 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 34, tileSizeCut, tileSizeCut);
  tiledark208 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 34, tileSizeCut, tileSizeCut);
  tiledark209 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 34, tileSizeCut, tileSizeCut);

  tiledark210 = darksAssets.get(0, 0 + tileSizeCut * 35, tileSizeCut, tileSizeCut);
  tiledark211 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 35, tileSizeCut, tileSizeCut);
  tiledark212 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 35, tileSizeCut, tileSizeCut);
  tiledark213 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 35, tileSizeCut, tileSizeCut);
  tiledark214 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 35, tileSizeCut, tileSizeCut);
  tiledark215 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 35, tileSizeCut, tileSizeCut);

  tiledark216 = darksAssets.get(0, 0 + tileSizeCut * 36, tileSizeCut, tileSizeCut);
  tiledark217 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 36, tileSizeCut, tileSizeCut);
  tiledark218 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 36, tileSizeCut, tileSizeCut);
  tiledark219 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 36, tileSizeCut, tileSizeCut);
  tiledark220 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 36, tileSizeCut, tileSizeCut);
  tiledark221 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 36, tileSizeCut, tileSizeCut);

  tiledark222 = darksAssets.get(0, 0 + tileSizeCut * 37, tileSizeCut, tileSizeCut);
  tiledark223 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 37, tileSizeCut, tileSizeCut);
  tiledark224 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 37, tileSizeCut, tileSizeCut);
  tiledark225 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 37, tileSizeCut, tileSizeCut);
  tiledark226 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 37, tileSizeCut, tileSizeCut);
  tiledark227 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 37, tileSizeCut, tileSizeCut);

  tiledark228 = darksAssets.get(0, 0 + tileSizeCut * 38, tileSizeCut, tileSizeCut);
  tiledark229 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 38, tileSizeCut, tileSizeCut);
  tiledark230 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 38, tileSizeCut, tileSizeCut);
  tiledark231 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 38, tileSizeCut, tileSizeCut);
  tiledark232 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 38, tileSizeCut, tileSizeCut);
  tiledark233 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 38, tileSizeCut, tileSizeCut);

  tiledark234 = darksAssets.get(0, 0 + tileSizeCut * 39, tileSizeCut, tileSizeCut);
  tiledark235 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 39, tileSizeCut, tileSizeCut);
  tiledark236 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 39, tileSizeCut, tileSizeCut);
  tiledark237 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 39, tileSizeCut, tileSizeCut);
  tiledark238 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 39, tileSizeCut, tileSizeCut);
  tiledark239 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 39, tileSizeCut, tileSizeCut);

  tiledark240 = darksAssets.get(0, 0 + tileSizeCut * 40, tileSizeCut, tileSizeCut);
  tiledark241 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 40, tileSizeCut, tileSizeCut);
  tiledark242 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 40, tileSizeCut, tileSizeCut);
  tiledark243 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 40, tileSizeCut, tileSizeCut);
  tiledark244 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 40, tileSizeCut, tileSizeCut);
  tiledark245 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 40, tileSizeCut, tileSizeCut);

  tiledark246 = darksAssets.get(0, 0 + tileSizeCut * 41, tileSizeCut, tileSizeCut);
  tiledark247 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 41, tileSizeCut, tileSizeCut);
  tiledark248 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 41, tileSizeCut, tileSizeCut);
  tiledark249 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 41, tileSizeCut, tileSizeCut);
  tiledark250 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 41, tileSizeCut, tileSizeCut);
  tiledark251 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 41, tileSizeCut, tileSizeCut);

  tiledark252 = darksAssets.get(0, 0 + tileSizeCut * 42, tileSizeCut, tileSizeCut);
  tiledark253 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 42, tileSizeCut, tileSizeCut);
  tiledark254 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 42, tileSizeCut, tileSizeCut);
  tiledark255 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 42, tileSizeCut, tileSizeCut);
  tiledark256 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 42, tileSizeCut, tileSizeCut);
  tiledark257 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 42, tileSizeCut, tileSizeCut);

  tiledark258 = darksAssets.get(0, 0 + tileSizeCut * 43, tileSizeCut, tileSizeCut);
  tiledark259 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 43, tileSizeCut, tileSizeCut);
  tiledark260 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 43, tileSizeCut, tileSizeCut);
  tiledark261 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 43, tileSizeCut, tileSizeCut);
  tiledark262 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 43, tileSizeCut, tileSizeCut);
  tiledark263 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 43, tileSizeCut, tileSizeCut);

  tiledark264 = darksAssets.get(0, 0 + tileSizeCut * 44, tileSizeCut, tileSizeCut);
  tiledark265 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 44, tileSizeCut, tileSizeCut);
  tiledark266 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 44, tileSizeCut, tileSizeCut);
  tiledark267 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 44, tileSizeCut, tileSizeCut);
  tiledark268 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 44, tileSizeCut, tileSizeCut);
  tiledark269 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 44, tileSizeCut, tileSizeCut);

  tiledark270 = darksAssets.get(0, 0 + tileSizeCut * 45, tileSizeCut, tileSizeCut);
  tiledark271 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 45, tileSizeCut, tileSizeCut);
  tiledark272 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 45, tileSizeCut, tileSizeCut);
  tiledark273 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 45, tileSizeCut, tileSizeCut);
  tiledark274 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 45, tileSizeCut, tileSizeCut);
  tiledark275 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 45, tileSizeCut, tileSizeCut);

  tiledark276 = darksAssets.get(0, 0 + tileSizeCut * 46, tileSizeCut, tileSizeCut);
  tiledark277 = darksAssets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 46, tileSizeCut, tileSizeCut);
  tiledark278 = darksAssets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 46, tileSizeCut, tileSizeCut);
  tiledark279 = darksAssets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 46, tileSizeCut, tileSizeCut);
  tiledark280 = darksAssets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 46, tileSizeCut, tileSizeCut);
  tiledark281 = darksAssets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 46, tileSizeCut, tileSizeCut);
}

//^ This function find the good asset for the map creation
//- Take in param the acutal layer with, the row and the colum
function findActualAsset(layer, row, column) {
  let assetName = layer[row][column];
  switch (assetName) {
    case 0:
      return empty;
    case 1:
      return tile1;
    case 2:
      return tile2;
    case 3:
      return tile3;
    case 4:
      return tile4;
    case 5:
      return tile5;

    case 6:
      return tile6;
    case 7:
      return tile7;
    case 8:
      return tile8;
    case 9:
      return tile9;
    case 10:
      return tile10;
    case 11:
      return tile11;

    case 12:
      return tile12;
    case 13:
      return tile13;
    case 14:
      return tile14;
    case 15:
      return tile15;
    case 16:
      return tile16;
    case 17:
      return tile17;

    case 18:
      return tile18;
    case 19:
      return tile19;
    case 20:
      return tile20;
    case 21:
      return tile21;
    case 22:
      return tile22;
    case 23:
      return tile23;

    case 24:
      return tile24;
    case 25:
      return tile25;
    case 26:
      return tile26;
    case 27:
      return tile27;
    case 28:
      return tile28;
    case 29:
      return tile29;

    case 30:
      return tile30;
    case 31:
      return tile31;
    case 32:
      return tile32;
    case 33:
      return tile33;
    case 34:
      return tile34;
    case 35:
      return tile35;

    case 36:
      return tile36;
    case 37:
      return tile37;
    case 38:
      return tile38;
    case 39:
      return tile39;
    case 40:
      return tile40;
    case 41:
      return tile41;

    case 42:
      return tile42;
    case 43:
      return tile43;
    case 44:
      return tile44;
    case 45:
      return tile45;
    case 46:
      return tile46;
    case 47:
      return tile47;

    case 48:
      return tile48;
    case 49:
      return tile49;
    case 50:
      return tile50;
    case 51:
      return tile51;
    case 52:
      return tile52;
    case 53:
      return tile53;

    case 54:
      return tile54;
    case 55:
      return tile55;
    case 56:
      return tile56;
    case 57:
      return tile57;
    case 58:
      return tile58;
    case 59:
      return tile59;

    case 60:
      return tile60;
    case 61:
      return tile61;
    case 62:
      return tile62;
    case 63:
      return tile63;
    case 64:
      return tile64;
    case 65:
      return tile65;

    case 66:
      return tile66;
    case 67:
      return tile67;
    case 68:
      return tile68;
    case 69:
      return tile69;
    case 70:
      return tile70;
    case 71:
      return tile71;

    case 72:
      return tile72;
    case 73:
      return tile73;
    case 74:
      return tile74;
    case 75:
      return tile75;
    case 76:
      return tile76;
    case 77:
      return tile77;

    case 78:
      return tile78;
    case 79:
      return tile79;
    case 80:
      return tile80;
    case 81:
      return tile81;
    case 82:
      return tile82;
    case 83:
      return tile83;

    case 84:
      return tile84;
    case 85:
      return tile85;
    case 86:
      return tile86;
    case 87:
      return tile87;
    case 88:
      return tile88;
    case 89:
      return tile89;

    case 90:
      return tile90;
    case 91:
      return tile91;
    case 92:
      return tile92;
    case 93:
      return tile93;
    case 94:
      return tile94;
    case 95:
      return tile95;

    case 96:
      return tile96;
    case 97:
      return tile97;
    case 98:
      return tile98;
    case 99:
      return tile99;
    case 100:
      return tile100;
    case 101:
      return tile101;

    case 102:
      return tile102;
    case 103:
      return tile103;
    case 104:
      return tile104;
    case 105:
      return tile105;
    case 106:
      return tile106;
    case 107:
      return tile107;

    case 108:
      return tile108;
    case 109:
      return tile109;
    case 110:
      return tile110;
    case 111:
      return tile111;
    case 112:
      return tile112;
    case 113:
      return tile113;

    case 114:
      return tile114;
    case 115:
      return tile115;
    case 116:
      return tile116;
    case 117:
      return tile117;
    case 118:
      return tile118;
    case 119:
      return tile119;

    case 120:
      return tile120;
    case 121:
      return tile121;
    case 122:
      return tile122;
    case 123:
      return tile123;
    case 124:
      return tile124;
    case 125:
      return tile125;

    case 126:
      return tile126;
    case 127:
      return tile127;
    case 128:
      return tile128;
    case 129:
      return tile129;
    case 130:
      return tile130;
    case 131:
      return tile131;

    case 132:
      return tile132;
    case 133:
      return tile133;
    case 134:
      return tile134;
    case 135:
      return tile135;
    case 136:
      return tile136;
    case 137:
      return tile137;

    case 138:
      return tile138;
    case 139:
      return tile139;
    case 140:
      return tile140;
    case 141:
      return tile141;
    case 142:
      return tile142;
    case 143:
      return tile143;

    case 144:
      return tile144;
    case 145:
      return tile145;
    case 146:
      return tile146;
    case 147:
      return tile147;
    case 148:
      return tile148;
    case 149:
      return tile149;

    case 150:
      return tile150;
    case 151:
      return tile151;
    case 152:
      return tile152;
    case 153:
      return tile153;
    case 154:
      return tile154;
    case 155:
      return tile155;

    case 156:
      return tile156;
    case 157:
      return tile157;
    case 158:
      return tile158;
    case 159:
      return tile159;
    case 160:
      return tile160;
    case 161:
      return tile161;

    case 162:
      return tile162;
    case 163:
      return tile163;
    case 164:
      return tile164;
    case 165:
      return tile165;
    case 166:
      return tile166;
    case 167:
      return tile167;

    case 168:
      return tile168;
    case 169:
      return tile169;
    case 170:
      return tile170;
    case 171:
      return tile171;
    case 172:
      return tile172;
    case 173:
      return tile173;

    case 174:
      return tile174;
    case 175:
      return tile175;
    case 176:
      return tile176;
    case 177:
      return tile177;
    case 178:
      return tile178;
    case 179:
      return tile179;

    case 180:
      return tile180;
    case 181:
      return tile181;
    case 182:
      return tile182;
    case 183:
      return tile183;
    case 184:
      return tile184;
    case 185:
      return tile185;

    case 186:
      return tile186;
    case 187:
      return tile187;
    case 188:
      return tile188;
    case 189:
      return tile189;
    case 190:
      return tile190;
    case 191:
      return tile191;

    case 192:
      return tile192;
    case 193:
      return tile193;
    case 194:
      return tile194;
    case 195:
      return tile195;
    case 196:
      return tile196;
    case 197:
      return tile197;

    case 198:
      return tile198;
    case 199:
      return tile199;
    case 200:
      return tile200;
    case 201:
      return tile201;
    case 202:
      return tile202;
    case 203:
      return tile203;

    case 204:
      return tile204;
    case 205:
      return tile205;
    case 206:
      return tile206;
    case 207:
      return tile207;
    case 208:
      return tile208;
    case 209:
      return tile209;

    case 210:
      return tile210;
    case 211:
      return tile211;
    case 212:
      return tile212;
    case 213:
      return tile213;
    case 214:
      return tile214;
    case 215:
      return tile215;

    case 216:
      return tile216;
    case 217:
      return tile217;
    case 218:
      return tile218;
    case 219:
      return tile219;
    case 220:
      return tile220;
    case 221:
      return tile221;

    case 222:
      return tile222;
    case 223:
      return tile223;
    case 224:
      return tile224;
    case 225:
      return tile225;
    case 226:
      return tile226;
    case 227:
      return tile227;

    case 228:
      return tile228;
    case 229:
      return tile229;
    case 230:
      return tile230;
    case 231:
      return tile231;
    case 232:
      return tile232;
    case 233:
      return tile233;

    case 234:
      return tile234;
    case 235:
      return tile235;
    case 236:
      return tile236;
    case 237:
      return tile237;
    case 238:
      return tile238;
    case 239:
      return tile239;

    case 240:
      return tile240;
    case 241:
      return tile241;
    case 242:
      return tile242;
    case 243:
      return tile243;
    case 244:
      return tile244;
    case 245:
      return tile245;

    case 246:
      return tile246;
    case 247:
      return tile247;
    case 248:
      return tile248;
    case 249:
      return tile249;
    case 250:
      return tile250;
    case 251:
      return tile251;

    case 252:
      return tile252;
    case 253:
      return tile253;
    case 254:
      return tile254;
    case 255:
      return tile255;
    case 256:
      return tile256;
    case 257:
      return tile257;

    case 258:
      return tile258;
    case 259:
      return tile259;
    case 260:
      return tile260;
    case 261:
      return tile261;
    case 262:
      return tile262;
    case 263:
      return tile263;

    case 264:
      return tile264;
    case 265:
      return tile265;
    case 266:
      return tile266;
    case 267:
      return tile267;
    case 268:
      return tile268;
    case 269:
      return tile269;

    case 270:
      return tile270;
    case 271:
      return tile271;
    case 272:
      return tile272;
    case 273:
      return tile273;
    case 274:
      return tile274;
    case 275:
      return tile275;

    case 276:
      return tile276;
    case 277:
      return tile277;
    case 278:
      return tile278;
    case 279:
      return tile279;
    case 280:
      return tile280;
    case 281:
      return tile281;



    case 999:
      return tile25;
    case 998:
      return tile25;
    case 997:
      return tile25;
    case 996:
      return tile25;
    case 995:
      return tile25;

    default:
      throw new Error("Can't find the asset named : " + assetName + " at " + column + " " + row);
  }
}

function findActualDarkAsset(layer, row, column) {
  let assetName = layer[row][column];
  switch (assetName) {
    case 0:
      return emptydark;
    case 1:
      return tiledark1;
    case 2:
      return tiledark2;
    case 3:
      return tiledark3;
    case 4:
      return tiledark4;
    case 5:
      return tiledark5;

    case 6:
      return tiledark6;
    case 7:
      return tiledark7;
    case 8:
      return tiledark8;
    case 9:
      return tiledark9;
    case 10:
      return tiledark10;
    case 11:
      return tiledark11;

    case 12:
      return tiledark12;
    case 13:
      return tiledark13;
    case 14:
      return tiledark14;
    case 15:
      return tiledark15;
    case 16:
      return tiledark16;
    case 17:
      return tiledark17;

    case 18:
      return tiledark18;
    case 19:
      return tiledark19;
    case 20:
      return tiledark20;
    case 21:
      return tiledark21;
    case 22:
      return tiledark22;
    case 23:
      return tiledark23;

    case 24:
      return tiledark24;
    case 25:
      return tiledark25;
    case 26:
      return tiledark26;
    case 27:
      return tiledark27;
    case 28:
      return tiledark28;
    case 29:
      return tiledark29;

    case 30:
      return tiledark30;
    case 31:
      return tiledark31;
    case 32:
      return tiledark32;
    case 33:
      return tiledark33;
    case 34:
      return tiledark34;
    case 35:
      return tiledark35;

    case 36:
      return tiledark36;
    case 37:
      return tiledark37;
    case 38:
      return tiledark38;
    case 39:
      return tiledark39;
    case 40:
      return tiledark40;
    case 41:
      return tiledark41;

    case 42:
      return tiledark42;
    case 43:
      return tiledark43;
    case 44:
      return tiledark44;
    case 45:
      return tiledark45;
    case 46:
      return tiledark46;
    case 47:
      return tiledark47;

    case 48:
      return tiledark48;
    case 49:
      return tiledark49;
    case 50:
      return tiledark50;
    case 51:
      return tiledark51;
    case 52:
      return tiledark52;
    case 53:
      return tiledark53;

    case 54:
      return tiledark54;
    case 55:
      return tiledark55;
    case 56:
      return tiledark56;
    case 57:
      return tiledark57;
    case 58:
      return tiledark58;
    case 59:
      return tiledark59;

    case 60:
      return tiledark60;
    case 61:
      return tiledark61;
    case 62:
      return tiledark62;
    case 63:
      return tiledark63;
    case 64:
      return tiledark64;
    case 65:
      return tiledark65;

    case 66:
      return tiledark66;
    case 67:
      return tiledark67;
    case 68:
      return tiledark68;
    case 69:
      return tiledark69;
    case 70:
      return tiledark70;
    case 71:
      return tiledark71;

    case 72:
      return tiledark72;
    case 73:
      return tiledark73;
    case 74:
      return tiledark74;
    case 75:
      return tiledark75;
    case 76:
      return tiledark76;
    case 77:
      return tiledark77;

    case 78:
      return tiledark78;
    case 79:
      return tiledark79;
    case 80:
      return tiledark80;
    case 81:
      return tiledark81;
    case 82:
      return tiledark82;
    case 83:
      return tiledark83;

    case 84:
      return tiledark84;
    case 85:
      return tiledark85;
    case 86:
      return tiledark86;
    case 87:
      return tiledark87;
    case 88:
      return tiledark88;
    case 89:
      return tiledark89;

    case 90:
      return tiledark90;
    case 91:
      return tiledark91;
    case 92:
      return tiledark92;
    case 93:
      return tiledark93;
    case 94:
      return tiledark94;
    case 95:
      return tiledark95;

    case 96:
      return tiledark96;
    case 97:
      return tiledark97;
    case 98:
      return tiledark98;
    case 99:
      return tiledark99;
    case 100:
      return tiledark100;
    case 101:
      return tiledark101;

    case 102:
      return tiledark102;
    case 103:
      return tiledark103;
    case 104:
      return tiledark104;
    case 105:
      return tiledark105;
    case 106:
      return tiledark106;
    case 107:
      return tiledark107;

    case 108:
      return tiledark108;
    case 109:
      return tiledark109;
    case 110:
      return tiledark110;
    case 111:
      return tiledark111;
    case 112:
      return tiledark112;
    case 113:
      return tiledark113;

    case 114:
      return tiledark114;
    case 115:
      return tiledark115;
    case 116:
      return tiledark116;
    case 117:
      return tiledark117;
    case 118:
      return tiledark118;
    case 119:
      return tiledark119;

    case 120:
      return tiledark120;
    case 121:
      return tiledark121;
    case 122:
      return tiledark122;
    case 123:
      return tiledark123;
    case 124:
      return tiledark124;
    case 125:
      return tiledark125;

    case 126:
      return tiledark126;
    case 127:
      return tiledark127;
    case 128:
      return tiledark128;
    case 129:
      return tiledark129;
    case 130:
      return tiledark130;
    case 131:
      return tiledark131;

    case 132:
      return tiledark132;
    case 133:
      return tiledark133;
    case 134:
      return tiledark134;
    case 135:
      return tiledark135;
    case 136:
      return tiledark136;
    case 137:
      return tiledark137;

    case 138:
      return tiledark138;
    case 139:
      return tiledark139;
    case 140:
      return tiledark140;
    case 141:
      return tiledark141;
    case 142:
      return tiledark142;
    case 143:
      return tiledark143;

    case 144:
      return tiledark144;
    case 145:
      return tiledark145;
    case 146:
      return tiledark146;
    case 147:
      return tiledark147;
    case 148:
      return tiledark148;
    case 149:
      return tiledark149;

    case 150:
      return tiledark150;
    case 151:
      return tiledark151;
    case 152:
      return tiledark152;
    case 153:
      return tiledark153;
    case 154:
      return tiledark154;
    case 155:
      return tiledark155;

    case 156:
      return tiledark156;
    case 157:
      return tiledark157;
    case 158:
      return tiledark158;
    case 159:
      return tiledark159;
    case 160:
      return tiledark160;
    case 161:
      return tiledark161;

    case 162:
      return tiledark162;
    case 163:
      return tiledark163;
    case 164:
      return tiledark164;
    case 165:
      return tiledark165;
    case 166:
      return tiledark166;
    case 167:
      return tiledark167;

    case 168:
      return tiledark168;
    case 169:
      return tiledark169;
    case 170:
      return tiledark170;
    case 171:
      return tiledark171;
    case 172:
      return tiledark172;
    case 173:
      return tiledark173;

    case 174:
      return tiledark174;
    case 175:
      return tiledark175;
    case 176:
      return tiledark176;
    case 177:
      return tiledark177;
    case 178:
      return tiledark178;
    case 179:
      return tiledark179;

    case 180:
      return tiledark180;
    case 181:
      return tiledark181;
    case 182:
      return tiledark182;
    case 183:
      return tiledark183;
    case 184:
      return tiledark184;
    case 185:
      return tiledark185;

    case 186:
      return tiledark186;
    case 187:
      return tiledark187;
    case 188:
      return tiledark188;
    case 189:
      return tiledark189;
    case 190:
      return tiledark190;
    case 191:
      return tiledark191;

    case 192:
      return tiledark192;
    case 193:
      return tiledark193;
    case 194:
      return tiledark194;
    case 195:
      return tiledark195;
    case 196:
      return tiledark196;
    case 197:
      return tiledark197;

    case 198:
      return tiledark198;
    case 199:
      return tiledark199;
    case 200:
      return tiledark200;
    case 201:
      return tiledark201;
    case 202:
      return tiledark202;
    case 203:
      return tiledark203;

    case 204:
      return tiledark204;
    case 205:
      return tiledark205;
    case 206:
      return tiledark206;
    case 207:
      return tiledark207;
    case 208:
      return tiledark208;
    case 209:
      return tiledark209;

    case 210:
      return tiledark210;
    case 211:
      return tiledark211;
    case 212:
      return tiledark212;
    case 213:
      return tiledark213;
    case 214:
      return tiledark214;
    case 215:
      return tiledark215;

    case 216:
      return tiledark216;
    case 217:
      return tiledark217;
    case 218:
      return tiledark218;
    case 219:
      return tiledark219;
    case 220:
      return tiledark220;
    case 221:
      return tiledark221;

    case 222:
      return tiledark222;
    case 223:
      return tiledark223;
    case 224:
      return tiledark224;
    case 225:
      return tiledark225;
    case 226:
      return tiledark226;
    case 227:
      return tiledark227;

    case 228:
      return tiledark228;
    case 229:
      return tiledark229;
    case 230:
      return tiledark230;
    case 231:
      return tiledark231;
    case 232:
      return tiledark232;
    case 233:
      return tiledark233;

    case 234:
      return tiledark234;
    case 235:
      return tiledark235;
    case 236:
      return tiledark236;
    case 237:
      return tiledark237;
    case 238:
      return tiledark238;
    case 239:
      return tiledark239;

    case 240:
      return tiledark240;
    case 241:
      return tiledark241;
    case 242:
      return tiledark242;
    case 243:
      return tiledark243;
    case 244:
      return tiledark244;
    case 245:
      return tiledark245;

    case 246:
      return tiledark246;
    case 247:
      return tiledark247;
    case 248:
      return tiledark248;
    case 249:
      return tiledark249;
    case 250:
      return tiledark250;
    case 251:
      return tiledark251;

    case 252:
      return tiledark252;
    case 253:
      return tiledark253;
    case 254:
      return tiledark254;
    case 255:
      return tiledark255;
    case 256:
      return tiledark256;
    case 257:
      return tiledark257;

    case 258:
      return tiledark258;
    case 259:
      return tiledark259;
    case 260:
      return tiledark260;
    case 261:
      return tiledark261;
    case 262:
      return tiledark262;
    case 263:
      return tiledark263;

    case 264:
      return tiledark264;
    case 265:
      return tiledark265;
    case 266:
      return tiledark266;
    case 267:
      return tiledark267;
    case 268:
      return tiledark268;
    case 269:
      return tiledark269;

    case 270:
      return tiledark270;
    case 271:
      return tiledark271;
    case 272:
      return tiledark272;
    case 273:
      return tiledark273;
    case 274:
      return tiledark274;
    case 275:
      return tiledark275;

    case 276:
      return tiledark276;
    case 277:
      return tiledark277;
    case 278:
      return tiledark278;
    case 279:
      return tiledark279;
    case 280:
      return tiledark280;
    case 281:
      return tiledark281;



    case 999:
      return tiledark25;
    case 998:
      return tiledark25;
    case 997:
      return tiledark25;
    case 996:
      return tiledark25;
    case 995:
      return tiledark25;

    default:
      throw new Error("Can't find the asset named : " + assetName + " at " + column + " " + row);
  }
}

//^ This function find the good object
//- Take in param the object name as a string
function findActualObject(objectName) {
  switch (objectName) {
    case "seedsBagBotanicMap":
      return seedsBagBotanicMap;
    case "wrenchCapsulesMap":
      return wrenchCapsulesMap;
    case "card":
      return card;
    case "files":
      return files;
    default:
      throw new Error("Can't find the asset named : " + objectName);
  }
}

//^ This function find the good NPC
//- Take in param the npc name as a string
function findActualNpc(npcName) {
  switch (npcName) {
    case "npcAllie":
      return npcAllie;
    case "npcOctavia":
      return npcOctavia;
    case "npcFinn":
      return npcFinn;
    case "eve":
      return eve;
    case "eveEndGame":
      return eveEndGame;
    default:
      throw new Error("Can't find the asset named : " + npcName);
  }
}
