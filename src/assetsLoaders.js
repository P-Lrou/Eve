//& This file actually managed all the assets

//^ This function load all assets at the game loading
function loadAssets() {
  map1 = loadJSON("json/map1.json");
  npc = loadJSON("json/npc.json");
  quests = loadJSON("json/quests.json");
  moreInteractionJSON = loadJSON("json/moreInteractions.json");
  mainFont = loadFont("fonts/mainFont.ttf");

  homePageBackgroundImage = loadImage("assets/menu/homePageBackgroundImage.png");
  homePagePlayButton = loadImage("assets/menu/homePagePlayButton.png");
  homePagePlayButtonHover = loadImage("assets/menu/homePagePlayButtonHover.png");


  mainCaracter = loadImage("assets/mainCaracter.png");
  npcRose = loadImage("assets/npcRose.png");
  npcJulliette = loadImage("assets/npcJulliette.png");
  npcFinn = loadImage("assets/npcFinn.png");
  dialogsHeads = loadImage("assets/dialogsHeads.png");
  assets = loadImage("assets/assets.png");
  interactionButton = loadImage("assets/interactionButton.png");
  arrowsButton = loadImage("assets/arrowsButton.png")

  backgroundCloneMap = loadImage("assets/cloneMap/backgroundCloneMap.png");
  lightCloneMap = loadImage("assets/cloneMap/lightCloneMap.png");
  jarAnimationCloneMap = loadImage("assets/cloneMap/jarAnimationCloneMap.png");
  questAnimationCloneMap = loadImage("assets/cloneMap/questAnimationCloneMap.png");
  questCloneMap1 = loadImage("assets/cloneMap/questCloneMap1.png");
  frontOfCloneMap = loadImage("assets/cloneMap/frontOfCloneMap.png");

  backgroundBotanicMap = loadImage("assets/botanicMap/backgroundBotanicMap.png");
  planteAnimationBotanicMap = loadImage("assets/botanicMap/planteAnimationBotanicMap.png")
  lightBotanicMap = loadImage("assets/botanicMap/lightBotanicMap.png")
  seedsBagBotanicMap = loadImage("assets/botanicMap/seedsBagBotanicMap.png")

  backgroundCommandMap = loadImage("assets/commandMap/backgroundCommandMap.png")
  lightCommandMap = loadImage("assets/commandMap/lightCommandMap.png")
  animationScreenCommandMap = loadImage("assets/commandMap/animationScreenCommandMap.png")
  controlPanelAnimationCommandMap = loadImage("assets/commandMap/controlPanelAnimationCommandMap.png")
  earthAnimationCommandMap = loadImage("assets/commandMap/earthAnimationCommandMap.png")
  seatsCommandMap = loadImage("assets/commandMap/seatsCommandMap.png")

  backgroundCapsuleMap = loadImage("assets/capsuleMap/backgroundCapsuleMap.png")
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

//^ This function find the good object
//- Take in param the object name as a string
function findActualObject(objectName) {
  switch (objectName) {
    case "seedsBagBotanicMap":
      return seedsBagBotanicMap;
    default:
      throw new Error("Can't find the asset named : " + objectName);
  }
}

//^ This function find the good NPC
//- Take in param the npc name as a string
function findActualNpc(npcName) {
  switch (npcName) {
    case "npcRose":
      return npcRose;
    case "npcJulliette":
      return npcJulliette;
    case "npcFinn":
      return npcFinn;
    default:
      throw new Error("Can't find the asset named : " + npcName);
  }
}
