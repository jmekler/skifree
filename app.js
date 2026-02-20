// SkiFree - Color Inverted
// Black background, colorful terrain/objects

const CONFIG = {
  storageKey: 'skifree-data',
  width: 600,
  height: 600,
  worldWidth: 3600,  // obstacles wrap within this horizontal band
};

// ── Pixel Art Sprites ──

const SPRITES = {};

function createSprite(width, height, drawFn) {
  const c = document.createElement('canvas');
  c.width = width;
  c.height = height;
  const ctx = c.getContext('2d');
  drawFn(ctx, width, height);
  return c;
}

function buildSprites() {
  // ── Player Skier: Down ──
  SPRITES.skierDown = createSprite(22, 28, (ctx) => {
    const ski = '#2299ff', boot = '#222';
    ctx.fillStyle = ski;
    ctx.fillRect(4, 20, 3, 8); ctx.fillRect(15, 20, 3, 8);
    ctx.fillRect(3, 19, 4, 2); ctx.fillRect(15, 19, 4, 2);
    ctx.fillStyle = boot;
    ctx.fillRect(5, 18, 3, 3); ctx.fillRect(14, 18, 3, 3);
    ctx.fillStyle = '#2255cc';
    ctx.fillRect(7, 14, 3, 5); ctx.fillRect(12, 14, 3, 5);
    ctx.fillStyle = '#e03030';
    ctx.fillRect(6, 6, 10, 8); ctx.fillRect(5, 7, 12, 6);
    ctx.fillStyle = '#f04040';
    ctx.fillRect(7, 7, 3, 4);
    ctx.fillStyle = '#e03030';
    ctx.fillRect(2, 8, 4, 3); ctx.fillRect(16, 8, 4, 3);
    ctx.fillStyle = '#e8e8e8';
    ctx.fillRect(7, 1, 8, 5); ctx.fillRect(8, 0, 6, 2);
    ctx.fillStyle = '#ffdd00';
    ctx.fillRect(7, 3, 8, 2);
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(8, 5, 6, 2);
  });

  // ── Player Skier: Left ──
  SPRITES.skierLeft = createSprite(24, 28, (ctx) => {
    const ski = '#2299ff', boot = '#222';
    ctx.fillStyle = ski;
    ctx.fillRect(1, 21, 10, 2); ctx.fillRect(3, 23, 10, 2);
    ctx.fillRect(0, 20, 3, 2); ctx.fillRect(2, 22, 3, 2);
    ctx.fillStyle = boot;
    ctx.fillRect(8, 18, 3, 3); ctx.fillRect(10, 19, 3, 3);
    ctx.fillStyle = '#2255cc';
    ctx.fillRect(9, 14, 3, 5); ctx.fillRect(11, 15, 3, 4);
    ctx.fillStyle = '#e03030';
    ctx.fillRect(8, 6, 8, 8); ctx.fillRect(7, 7, 9, 6);
    ctx.fillStyle = '#f04040';
    ctx.fillRect(8, 7, 3, 4);
    ctx.fillStyle = '#c02020';
    ctx.fillRect(15, 8, 3, 3);
    ctx.fillStyle = '#e8e8e8';
    ctx.fillRect(8, 1, 7, 5); ctx.fillRect(9, 0, 5, 2);
    ctx.fillStyle = '#ffdd00';
    ctx.fillRect(7, 3, 4, 2);
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(8, 5, 4, 2);
  });

  // ── Player Skier: Hard Left ──
  SPRITES.skierHardLeft = createSprite(26, 26, (ctx) => {
    const ski = '#2299ff', boot = '#222';
    ctx.fillStyle = ski;
    ctx.fillRect(0, 19, 14, 2); ctx.fillRect(0, 21, 12, 2);
    ctx.fillStyle = boot;
    ctx.fillRect(11, 16, 3, 3); ctx.fillRect(10, 17, 3, 3);
    ctx.fillStyle = '#2255cc';
    ctx.fillRect(12, 12, 3, 5); ctx.fillRect(11, 13, 3, 4);
    ctx.fillStyle = '#e03030';
    ctx.fillRect(11, 5, 7, 7); ctx.fillRect(10, 6, 8, 5);
    ctx.fillStyle = '#f04040';
    ctx.fillRect(11, 6, 3, 3);
    ctx.fillStyle = '#e03030';
    ctx.fillRect(6, 7, 5, 3);
    ctx.fillStyle = '#c02020';
    ctx.fillRect(18, 7, 3, 3);
    ctx.fillStyle = '#e8e8e8';
    ctx.fillRect(12, 0, 6, 5); ctx.fillRect(13, 0, 4, 2);
    ctx.fillStyle = '#ffdd00';
    ctx.fillRect(10, 2, 4, 2);
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(11, 4, 4, 2);
  });

  // ── Player Skier: Right ──
  SPRITES.skierRight = createSprite(24, 28, (ctx) => {
    const ski = '#2299ff', boot = '#222';
    ctx.fillStyle = ski;
    ctx.fillRect(13, 21, 10, 2); ctx.fillRect(11, 23, 10, 2);
    ctx.fillRect(21, 20, 3, 2); ctx.fillRect(19, 22, 3, 2);
    ctx.fillStyle = boot;
    ctx.fillRect(13, 18, 3, 3); ctx.fillRect(11, 19, 3, 3);
    ctx.fillStyle = '#2255cc';
    ctx.fillRect(12, 14, 3, 5); ctx.fillRect(10, 15, 3, 4);
    ctx.fillStyle = '#e03030';
    ctx.fillRect(8, 6, 8, 8); ctx.fillRect(8, 7, 9, 6);
    ctx.fillStyle = '#f04040';
    ctx.fillRect(13, 7, 3, 4);
    ctx.fillStyle = '#c02020';
    ctx.fillRect(6, 8, 3, 3);
    ctx.fillStyle = '#e03030';
    ctx.fillRect(15, 8, 4, 3);
    ctx.fillStyle = '#e8e8e8';
    ctx.fillRect(9, 1, 7, 5); ctx.fillRect(10, 0, 5, 2);
    ctx.fillStyle = '#ffdd00';
    ctx.fillRect(13, 3, 4, 2);
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(12, 5, 4, 2);
  });

  // ── Player Skier: Hard Right ──
  SPRITES.skierHardRight = createSprite(26, 26, (ctx) => {
    const ski = '#2299ff', boot = '#222';
    ctx.fillStyle = ski;
    ctx.fillRect(12, 19, 14, 2); ctx.fillRect(14, 21, 12, 2);
    ctx.fillStyle = boot;
    ctx.fillRect(12, 16, 3, 3); ctx.fillRect(13, 17, 3, 3);
    ctx.fillStyle = '#2255cc';
    ctx.fillRect(11, 12, 3, 5); ctx.fillRect(12, 13, 3, 4);
    ctx.fillStyle = '#e03030';
    ctx.fillRect(8, 5, 7, 7); ctx.fillRect(8, 6, 8, 5);
    ctx.fillStyle = '#f04040';
    ctx.fillRect(12, 6, 3, 3);
    ctx.fillStyle = '#e03030';
    ctx.fillRect(15, 7, 5, 3);
    ctx.fillStyle = '#c02020';
    ctx.fillRect(5, 7, 3, 3);
    ctx.fillStyle = '#e8e8e8';
    ctx.fillRect(8, 0, 6, 5); ctx.fillRect(9, 0, 4, 2);
    ctx.fillStyle = '#ffdd00';
    ctx.fillRect(12, 2, 4, 2);
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(11, 4, 4, 2);
  });

  // ── Player Skier: Jump ──
  SPRITES.skierJump = createSprite(24, 24, (ctx) => {
    const ski = '#2299ff', boot = '#222';
    ctx.fillStyle = ski;
    ctx.fillRect(7, 18, 10, 2); ctx.fillRect(6, 20, 12, 2); ctx.fillRect(5, 22, 14, 2);
    ctx.fillStyle = boot;
    ctx.fillRect(8, 16, 3, 3); ctx.fillRect(13, 16, 3, 3);
    ctx.fillStyle = '#2255cc';
    ctx.fillRect(9, 13, 3, 4); ctx.fillRect(12, 13, 3, 4);
    ctx.fillStyle = '#e03030';
    ctx.fillRect(8, 5, 8, 8);
    ctx.fillStyle = '#f04040';
    ctx.fillRect(9, 6, 3, 4);
    ctx.fillStyle = '#e03030';
    ctx.fillRect(2, 6, 6, 3); ctx.fillRect(16, 6, 6, 3);
    ctx.fillStyle = '#e8e8e8';
    ctx.fillRect(9, 0, 6, 5); ctx.fillRect(10, 0, 4, 2);
    ctx.fillStyle = '#ffdd00';
    ctx.fillRect(9, 2, 6, 2);
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(10, 4, 4, 2);
  });

  // ── Player Skier: Crash ──
  SPRITES.skierCrash = createSprite(30, 26, (ctx) => {
    const ski = '#2299ff';
    ctx.fillStyle = ski;
    ctx.fillRect(0, 2, 8, 2); ctx.fillRect(22, 0, 8, 2);
    ctx.fillStyle = '#e03030';
    ctx.fillRect(10, 6, 10, 6); ctx.fillRect(8, 8, 14, 4);
    ctx.fillStyle = '#2255cc';
    ctx.fillRect(8, 12, 5, 5); ctx.fillRect(17, 12, 5, 5);
    ctx.fillStyle = '#e8e8e8';
    ctx.fillRect(4, 0, 5, 4);
    ctx.fillStyle = '#ffdd00';
    ctx.fillRect(5, 2, 3, 2);
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(12, 4, 4, 3);
    ctx.fillStyle = '#ff0';
    ctx.fillRect(14, 2, 2, 2); ctx.fillRect(12, 3, 2, 2); ctx.fillRect(16, 3, 2, 2);
  });

  // ── Snowboarder sprites (easter egg) ──
  // Down
  SPRITES.boarderDown = createSprite(22, 28, (ctx) => {
    const board = '#ff6600', boot = '#222';
    // Board (single wide board perpendicular)
    ctx.fillStyle = board;
    ctx.fillRect(2, 22, 18, 3);
    ctx.fillRect(0, 23, 22, 2);
    // Board graphics
    ctx.fillStyle = '#ff9944';
    ctx.fillRect(4, 22, 4, 2); ctx.fillRect(14, 22, 4, 2);
    // Boots
    ctx.fillStyle = boot;
    ctx.fillRect(6, 19, 4, 4); ctx.fillRect(12, 19, 4, 4);
    // Pants (dark green)
    ctx.fillStyle = '#336644';
    ctx.fillRect(7, 14, 4, 6); ctx.fillRect(11, 14, 4, 6);
    // Jacket (purple)
    ctx.fillStyle = '#7733aa';
    ctx.fillRect(6, 6, 10, 8); ctx.fillRect(5, 7, 12, 6);
    ctx.fillStyle = '#9944cc';
    ctx.fillRect(7, 7, 3, 4);
    // Arms out for balance (no poles!)
    ctx.fillStyle = '#7733aa';
    ctx.fillRect(2, 7, 4, 3); ctx.fillRect(16, 7, 4, 3);
    // Gloves
    ctx.fillStyle = '#222';
    ctx.fillRect(1, 8, 2, 2); ctx.fillRect(19, 8, 2, 2);
    // Beanie (instead of helmet)
    ctx.fillStyle = '#ff4488';
    ctx.fillRect(7, 0, 8, 5); ctx.fillRect(8, 0, 6, 2);
    // Beanie pom
    ctx.fillStyle = '#fff';
    ctx.fillRect(10, 0, 2, 2);
    // Goggles
    ctx.fillStyle = '#44ddff';
    ctx.fillRect(7, 3, 8, 2);
    // Skin
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(8, 5, 6, 2);
  });

  // Left
  SPRITES.boarderLeft = createSprite(24, 28, (ctx) => {
    const board = '#ff6600', boot = '#222';
    ctx.fillStyle = board;
    ctx.fillRect(2, 22, 14, 3); ctx.fillRect(0, 23, 16, 2);
    ctx.fillStyle = '#ff9944';
    ctx.fillRect(3, 22, 4, 2);
    ctx.fillStyle = boot;
    ctx.fillRect(8, 19, 4, 4); ctx.fillRect(10, 20, 4, 3);
    ctx.fillStyle = '#336644';
    ctx.fillRect(9, 14, 4, 6); ctx.fillRect(11, 15, 3, 5);
    ctx.fillStyle = '#7733aa';
    ctx.fillRect(8, 6, 8, 8); ctx.fillRect(7, 7, 9, 6);
    ctx.fillStyle = '#9944cc';
    ctx.fillRect(8, 7, 3, 4);
    ctx.fillStyle = '#7733aa';
    ctx.fillRect(4, 7, 4, 3); ctx.fillRect(15, 8, 4, 3);
    ctx.fillStyle = '#222';
    ctx.fillRect(3, 8, 2, 2); ctx.fillRect(18, 9, 2, 2);
    ctx.fillStyle = '#ff4488';
    ctx.fillRect(8, 0, 7, 5); ctx.fillRect(9, 0, 5, 2);
    ctx.fillStyle = '#fff';
    ctx.fillRect(11, 0, 2, 2);
    ctx.fillStyle = '#44ddff';
    ctx.fillRect(7, 3, 4, 2);
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(8, 5, 4, 2);
  });

  // Hard Left
  SPRITES.boarderHardLeft = createSprite(26, 26, (ctx) => {
    const board = '#ff6600';
    ctx.fillStyle = board;
    ctx.fillRect(0, 20, 16, 3); ctx.fillRect(0, 22, 14, 2);
    ctx.fillStyle = '#ff9944';
    ctx.fillRect(1, 20, 4, 2);
    ctx.fillStyle = '#222';
    ctx.fillRect(11, 17, 3, 4); ctx.fillRect(10, 18, 3, 3);
    ctx.fillStyle = '#336644';
    ctx.fillRect(12, 12, 3, 6); ctx.fillRect(11, 13, 3, 5);
    ctx.fillStyle = '#7733aa';
    ctx.fillRect(11, 5, 7, 7); ctx.fillRect(10, 6, 8, 5);
    ctx.fillStyle = '#9944cc';
    ctx.fillRect(11, 6, 3, 3);
    ctx.fillStyle = '#7733aa';
    ctx.fillRect(6, 6, 5, 3); ctx.fillRect(18, 7, 4, 3);
    ctx.fillStyle = '#222';
    ctx.fillRect(5, 7, 2, 2); ctx.fillRect(21, 8, 2, 2);
    ctx.fillStyle = '#ff4488';
    ctx.fillRect(12, 0, 6, 5); ctx.fillRect(13, 0, 4, 2);
    ctx.fillStyle = '#fff';
    ctx.fillRect(15, 0, 2, 2);
    ctx.fillStyle = '#44ddff';
    ctx.fillRect(10, 2, 4, 2);
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(11, 4, 4, 2);
  });

  // Right
  SPRITES.boarderRight = createSprite(24, 28, (ctx) => {
    const board = '#ff6600', boot = '#222';
    ctx.fillStyle = board;
    ctx.fillRect(8, 22, 14, 3); ctx.fillRect(8, 23, 16, 2);
    ctx.fillStyle = '#ff9944';
    ctx.fillRect(17, 22, 4, 2);
    ctx.fillStyle = boot;
    ctx.fillRect(12, 19, 4, 4); ctx.fillRect(10, 20, 4, 3);
    ctx.fillStyle = '#336644';
    ctx.fillRect(11, 14, 4, 6); ctx.fillRect(10, 15, 3, 5);
    ctx.fillStyle = '#7733aa';
    ctx.fillRect(8, 6, 8, 8); ctx.fillRect(8, 7, 9, 6);
    ctx.fillStyle = '#9944cc';
    ctx.fillRect(13, 7, 3, 4);
    ctx.fillStyle = '#7733aa';
    ctx.fillRect(16, 7, 4, 3); ctx.fillRect(5, 8, 4, 3);
    ctx.fillStyle = '#222';
    ctx.fillRect(19, 8, 2, 2); ctx.fillRect(4, 9, 2, 2);
    ctx.fillStyle = '#ff4488';
    ctx.fillRect(9, 0, 7, 5); ctx.fillRect(10, 0, 5, 2);
    ctx.fillStyle = '#fff';
    ctx.fillRect(12, 0, 2, 2);
    ctx.fillStyle = '#44ddff';
    ctx.fillRect(13, 3, 4, 2);
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(12, 5, 4, 2);
  });

  // Hard Right
  SPRITES.boarderHardRight = createSprite(26, 26, (ctx) => {
    const board = '#ff6600';
    ctx.fillStyle = board;
    ctx.fillRect(10, 20, 16, 3); ctx.fillRect(12, 22, 14, 2);
    ctx.fillStyle = '#ff9944';
    ctx.fillRect(21, 20, 4, 2);
    ctx.fillStyle = '#222';
    ctx.fillRect(12, 17, 3, 4); ctx.fillRect(13, 18, 3, 3);
    ctx.fillStyle = '#336644';
    ctx.fillRect(11, 12, 3, 6); ctx.fillRect(12, 13, 3, 5);
    ctx.fillStyle = '#7733aa';
    ctx.fillRect(8, 5, 7, 7); ctx.fillRect(8, 6, 8, 5);
    ctx.fillStyle = '#9944cc';
    ctx.fillRect(12, 6, 3, 3);
    ctx.fillStyle = '#7733aa';
    ctx.fillRect(15, 6, 5, 3); ctx.fillRect(4, 7, 4, 3);
    ctx.fillStyle = '#222';
    ctx.fillRect(19, 7, 2, 2); ctx.fillRect(3, 8, 2, 2);
    ctx.fillStyle = '#ff4488';
    ctx.fillRect(8, 0, 6, 5); ctx.fillRect(9, 0, 4, 2);
    ctx.fillStyle = '#fff';
    ctx.fillRect(10, 0, 2, 2);
    ctx.fillStyle = '#44ddff';
    ctx.fillRect(12, 2, 4, 2);
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(11, 4, 4, 2);
  });

  // Jump
  SPRITES.boarderJump = createSprite(24, 24, (ctx) => {
    const board = '#ff6600';
    // Board grabbed underneath
    ctx.fillStyle = board;
    ctx.fillRect(5, 20, 14, 3);
    ctx.fillStyle = '#ff9944';
    ctx.fillRect(7, 20, 4, 2); ctx.fillRect(13, 20, 4, 2);
    ctx.fillStyle = '#222';
    ctx.fillRect(8, 17, 4, 4); ctx.fillRect(12, 17, 4, 4);
    ctx.fillStyle = '#336644';
    ctx.fillRect(9, 13, 3, 5); ctx.fillRect(12, 13, 3, 5);
    ctx.fillStyle = '#7733aa';
    ctx.fillRect(8, 5, 8, 8);
    ctx.fillStyle = '#9944cc';
    ctx.fillRect(9, 6, 3, 4);
    // One arm grabbing board, one out
    ctx.fillStyle = '#7733aa';
    ctx.fillRect(2, 5, 6, 3); // arm out
    ctx.fillRect(16, 8, 4, 3); // arm reaching to board
    ctx.fillRect(18, 11, 3, 3);
    ctx.fillRect(19, 14, 3, 3);
    ctx.fillStyle = '#222';
    ctx.fillRect(1, 6, 2, 2); // glove
    ctx.fillStyle = '#ff4488';
    ctx.fillRect(9, 0, 6, 5); ctx.fillRect(10, 0, 4, 2);
    ctx.fillStyle = '#fff';
    ctx.fillRect(11, 0, 2, 2);
    ctx.fillStyle = '#44ddff';
    ctx.fillRect(9, 2, 6, 2);
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(10, 4, 4, 2);
  });

  // Crash
  SPRITES.boarderCrash = createSprite(30, 26, (ctx) => {
    const board = '#ff6600';
    ctx.fillStyle = board;
    ctx.fillRect(20, 0, 10, 3); // board flying
    ctx.fillStyle = '#ff9944';
    ctx.fillRect(22, 0, 3, 2);
    ctx.fillStyle = '#7733aa';
    ctx.fillRect(10, 6, 10, 6); ctx.fillRect(8, 8, 14, 4);
    ctx.fillStyle = '#336644';
    ctx.fillRect(8, 12, 5, 5); ctx.fillRect(17, 12, 5, 5);
    ctx.fillStyle = '#ff4488';
    ctx.fillRect(3, 0, 5, 4);
    ctx.fillStyle = '#fff';
    ctx.fillRect(5, 0, 2, 2);
    ctx.fillStyle = '#44ddff';
    ctx.fillRect(4, 2, 3, 2);
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(12, 4, 4, 3);
    ctx.fillStyle = '#ff0';
    ctx.fillRect(14, 2, 2, 2); ctx.fillRect(12, 3, 2, 2); ctx.fillRect(16, 3, 2, 2);
  });

  // ── Small Tree ──
  SPRITES.treeSmall = createSprite(22, 32, (ctx) => {
    ctx.fillStyle = '#8B5E3C';
    ctx.fillRect(9, 24, 4, 8);
    ctx.fillStyle = '#6B3F1F';
    ctx.fillRect(10, 26, 2, 4);
    ctx.fillStyle = '#1B7A2B';
    ctx.fillRect(2, 18, 18, 6); ctx.fillRect(3, 17, 16, 2);
    ctx.fillStyle = '#22992E';
    ctx.fillRect(4, 12, 14, 6); ctx.fillRect(5, 11, 12, 2);
    ctx.fillStyle = '#2BAF38';
    ctx.fillRect(6, 6, 10, 6); ctx.fillRect(7, 4, 8, 3);
    ctx.fillStyle = '#33C244';
    ctx.fillRect(8, 2, 6, 3); ctx.fillRect(9, 0, 4, 3);
    ctx.fillStyle = '#fff';
    ctx.fillRect(9, 0, 4, 2); ctx.fillRect(6, 4, 3, 2); ctx.fillRect(13, 5, 3, 2);
    ctx.fillRect(3, 12, 3, 2); ctx.fillRect(16, 13, 3, 2);
    ctx.fillRect(2, 18, 3, 2); ctx.fillRect(17, 19, 3, 2);
  });

  // ── Large Tree ──
  SPRITES.treeLarge = createSprite(32, 44, (ctx) => {
    ctx.fillStyle = '#8B5E3C';
    ctx.fillRect(13, 34, 6, 10);
    ctx.fillStyle = '#6B3F1F';
    ctx.fillRect(14, 36, 3, 6);
    ctx.fillStyle = '#145E20';
    ctx.fillRect(2, 28, 28, 6); ctx.fillRect(4, 26, 24, 3);
    ctx.fillStyle = '#1B7A2B';
    ctx.fillRect(4, 20, 24, 7); ctx.fillRect(5, 18, 22, 3);
    ctx.fillStyle = '#22992E';
    ctx.fillRect(6, 12, 20, 7); ctx.fillRect(7, 10, 18, 3);
    ctx.fillStyle = '#2BAF38';
    ctx.fillRect(8, 6, 16, 5); ctx.fillRect(9, 4, 14, 3);
    ctx.fillStyle = '#33C244';
    ctx.fillRect(10, 2, 12, 3); ctx.fillRect(12, 0, 8, 3);
    ctx.fillStyle = '#fff';
    ctx.fillRect(12, 0, 8, 2); ctx.fillRect(8, 4, 3, 2); ctx.fillRect(21, 5, 3, 2);
    ctx.fillRect(4, 12, 3, 2); ctx.fillRect(25, 13, 3, 2);
    ctx.fillRect(2, 20, 4, 2); ctx.fillRect(26, 21, 4, 2);
    ctx.fillRect(2, 28, 4, 2); ctx.fillRect(26, 29, 4, 2);
  });

  // ── Rock ──
  SPRITES.rock = createSprite(20, 14, (ctx) => {
    ctx.fillStyle = '#4a3a2a';
    ctx.fillRect(1, 6, 18, 8); ctx.fillRect(3, 4, 14, 2);
    ctx.fillStyle = '#7a6a5a';
    ctx.fillRect(2, 4, 16, 8); ctx.fillRect(4, 2, 12, 3);
    ctx.fillStyle = '#9a8a7a';
    ctx.fillRect(4, 2, 8, 3); ctx.fillRect(3, 4, 6, 3);
    ctx.fillStyle = '#b0a090';
    ctx.fillRect(5, 2, 4, 2);
    ctx.fillStyle = '#3a2a1a';
    ctx.fillRect(10, 6, 2, 4); ctx.fillRect(6, 8, 2, 2);
  });

  // ── Mogul ──
  SPRITES.mogul = createSprite(28, 10, (ctx) => {
    ctx.fillStyle = '#2a3a4a';
    ctx.fillRect(4, 6, 20, 4); ctx.fillRect(2, 8, 24, 2);
    ctx.fillStyle = '#3a4a5a';
    ctx.fillRect(6, 4, 16, 3);
    ctx.fillStyle = '#4a5a6a';
    ctx.fillRect(8, 2, 12, 3);
    ctx.fillStyle = '#8ab8d8';
    ctx.fillRect(10, 2, 6, 2); ctx.fillRect(8, 4, 4, 2);
  });

  // ── Ramp ──
  SPRITES.ramp = createSprite(34, 14, (ctx) => {
    ctx.fillStyle = '#553300';
    ctx.fillRect(0, 10, 34, 4);
    ctx.fillStyle = '#cc6600';
    ctx.fillRect(0, 8, 34, 4); ctx.fillRect(2, 6, 30, 3);
    ctx.fillRect(6, 4, 22, 3); ctx.fillRect(10, 2, 14, 3);
    ctx.fillStyle = '#ff9922';
    ctx.fillRect(12, 1, 10, 2); ctx.fillRect(8, 3, 18, 2);
    ctx.fillStyle = '#ffcc00';
    ctx.fillRect(14, 3, 2, 4); ctx.fillRect(18, 3, 2, 4);
    ctx.fillRect(13, 7, 4, 2); ctx.fillRect(17, 7, 4, 2);
  });

  // ── Big Ramp ──
  SPRITES.bigRamp = createSprite(50, 22, (ctx) => {
    ctx.fillStyle = '#442200';
    ctx.fillRect(0, 18, 50, 4);
    ctx.fillStyle = '#995500';
    ctx.fillRect(0, 14, 50, 6); ctx.fillRect(3, 10, 44, 5);
    ctx.fillRect(8, 6, 34, 5); ctx.fillRect(14, 2, 22, 5);
    ctx.fillStyle = '#cc7700';
    ctx.fillRect(16, 1, 18, 3); ctx.fillRect(10, 5, 30, 3);
    ctx.fillStyle = '#ffcc00';
    ctx.fillRect(18, 3, 3, 6); ctx.fillRect(24, 3, 3, 6); ctx.fillRect(30, 3, 3, 6);
    ctx.fillRect(16, 10, 5, 3); ctx.fillRect(22, 10, 5, 3); ctx.fillRect(29, 10, 5, 3);
    // Arrow markings
    ctx.fillStyle = '#ff4400';
    ctx.fillRect(23, 0, 4, 2);
  });

  // ── Portal ──
  SPRITES.portal = createSprite(30, 40, (ctx) => {
    // Outer glow
    ctx.fillStyle = '#1a0033';
    ctx.fillRect(3, 8, 24, 30);
    // Arch frame
    ctx.fillStyle = '#6622aa';
    ctx.fillRect(2, 6, 26, 4); ctx.fillRect(0, 10, 6, 28); ctx.fillRect(24, 10, 6, 28);
    ctx.fillRect(2, 36, 26, 4);
    // Inner frame highlight
    ctx.fillStyle = '#9944dd';
    ctx.fillRect(4, 8, 22, 2); ctx.fillRect(2, 10, 4, 26); ctx.fillRect(24, 10, 4, 26);
    ctx.fillRect(4, 34, 22, 2);
    // Swirling interior
    ctx.fillStyle = '#220066';
    ctx.fillRect(6, 12, 18, 22);
    ctx.fillStyle = '#4400aa';
    ctx.fillRect(8, 14, 14, 18);
    ctx.fillStyle = '#00cccc';
    ctx.fillRect(10, 16, 10, 2); ctx.fillRect(12, 20, 8, 2);
    ctx.fillRect(10, 24, 10, 2); ctx.fillRect(12, 28, 8, 2);
    // Sparkle accents
    ctx.fillStyle = '#88ffff';
    ctx.fillRect(11, 17, 2, 1); ctx.fillRect(17, 21, 2, 1);
    ctx.fillRect(13, 25, 2, 1); ctx.fillRect(15, 29, 2, 1);
    // Top cap
    ctx.fillStyle = '#aa66ee';
    ctx.fillRect(8, 4, 14, 4); ctx.fillRect(10, 2, 10, 3);
    ctx.fillStyle = '#88ffff';
    ctx.fillRect(13, 2, 4, 2);
  });

  // ── Finish Line ──
  SPRITES.finishLine = createSprite(60, 12, (ctx) => {
    // Checkered pattern
    const sq = 6;
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 10; col++) {
        ctx.fillStyle = (row + col) % 2 === 0 ? '#fff' : '#111';
        ctx.fillRect(col * sq, row * sq, sq, sq);
      }
    }
    // Border
    ctx.strokeStyle = '#ffcc00';
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, 60, 12);
  });

  // ── NPC Skier ──
  SPRITES.otherSkier = createSprite(18, 24, (ctx) => {
    const ski = '#dd44dd', boot = '#222';
    ctx.fillStyle = ski;
    ctx.fillRect(3, 18, 3, 6); ctx.fillRect(12, 18, 3, 6);
    ctx.fillRect(2, 17, 4, 2); ctx.fillRect(12, 17, 4, 2);
    ctx.fillStyle = boot;
    ctx.fillRect(4, 16, 3, 3); ctx.fillRect(11, 16, 3, 3);
    ctx.fillStyle = '#333399';
    ctx.fillRect(5, 12, 3, 5); ctx.fillRect(10, 12, 3, 5);
    ctx.fillStyle = '#22aa44';
    ctx.fillRect(4, 5, 10, 7);
    ctx.fillStyle = '#33cc55';
    ctx.fillRect(5, 6, 4, 3);
    ctx.fillStyle = '#22aa44';
    ctx.fillRect(1, 7, 3, 3); ctx.fillRect(14, 7, 3, 3);
    ctx.fillStyle = '#aaa';
    ctx.fillRect(0, 9, 2, 10); ctx.fillRect(16, 9, 2, 10);
    ctx.fillStyle = '#44bbff';
    ctx.fillRect(5, 0, 8, 5); ctx.fillRect(6, 0, 6, 2);
    ctx.fillStyle = '#ff6600';
    ctx.fillRect(5, 2, 8, 2);
    ctx.fillStyle = '#f0c090';
    ctx.fillRect(6, 4, 6, 2);
  });

  // ── Yeti ──
  SPRITES.yeti = createSprite(36, 44, (ctx) => {
    ctx.fillStyle = '#1a1a2a';
    ctx.fillRect(6, 38, 10, 6); ctx.fillRect(20, 38, 10, 6);
    ctx.fillStyle = '#99aacc';
    ctx.fillRect(5, 36, 10, 6); ctx.fillRect(21, 36, 10, 6);
    ctx.fillStyle = '#c0d0e8';
    ctx.fillRect(8, 28, 7, 10); ctx.fillRect(21, 28, 7, 10);
    ctx.fillStyle = '#d8e4f0';
    ctx.fillRect(6, 12, 24, 18); ctx.fillRect(8, 10, 20, 4);
    ctx.fillStyle = '#e8f0ff';
    ctx.fillRect(12, 16, 12, 8);
    ctx.fillStyle = '#c0d0e8';
    ctx.fillRect(0, 14, 8, 8); ctx.fillRect(28, 14, 8, 8);
    ctx.fillStyle = '#ffcc00';
    ctx.fillRect(0, 22, 3, 3); ctx.fillRect(33, 22, 3, 3);
    ctx.fillStyle = '#d8e4f0';
    ctx.fillRect(10, 2, 16, 10); ctx.fillRect(8, 4, 20, 6);
    ctx.fillStyle = '#e8f0ff';
    ctx.fillRect(14, 0, 3, 3); ctx.fillRect(19, 0, 3, 3);
    ctx.fillRect(12, 1, 2, 2); ctx.fillRect(22, 1, 2, 2);
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(12, 5, 4, 3); ctx.fillRect(20, 5, 4, 3);
    ctx.fillStyle = '#ff4444';
    ctx.fillRect(13, 4, 2, 1); ctx.fillRect(21, 4, 2, 1);
    ctx.fillStyle = '#ffff00';
    ctx.fillRect(13, 6, 2, 1); ctx.fillRect(21, 6, 2, 1);
    ctx.fillStyle = '#cc0000';
    ctx.fillRect(14, 9, 8, 2);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(15, 9, 2, 2); ctx.fillRect(19, 9, 2, 2);
  });
}

// ── Lo-Fi Sound Engine (Web Audio API) ──

let audioCtx = null;

function initAudio() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  } catch (e) {
    audioCtx = null;
  }
}

function ensureAudio() {
  if (!audioCtx) initAudio();
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playTone(freq, duration, type, volume, rampDown) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type || 'square';
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  gain.gain.setValueAtTime(volume || 0.08, audioCtx.currentTime);
  if (rampDown !== false) {
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
  }
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + duration);
}

function playNoise(duration, volume, filterFreq) {
  if (!audioCtx) return;
  const bufferSize = audioCtx.sampleRate * duration;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(filterFreq || 2000, audioCtx.currentTime);
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(volume || 0.06, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);
  source.start(audioCtx.currentTime);
}

const SFX = {
  turn() {
    playNoise(0.06, 0.04, 1500);
  },
  speedUp() {
    playTone(200, 0.1, 'sawtooth', 0.04);
    playTone(300, 0.08, 'sawtooth', 0.03);
  },
  slowDown() {
    playTone(300, 0.1, 'sawtooth', 0.04);
    playTone(200, 0.08, 'sawtooth', 0.03);
  },
  jump() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.2);
  },
  land() {
    playNoise(0.1, 0.05, 800);
    playTone(80, 0.08, 'sine', 0.06);
  },
  mogul() {
    playTone(100, 0.08, 'sine', 0.05);
    playNoise(0.05, 0.03, 600);
  },
  crash() {
    playNoise(0.4, 0.12, 3000);
    playTone(80, 0.3, 'sawtooth', 0.08);
    setTimeout(() => playNoise(0.3, 0.08, 1500), 100);
    setTimeout(() => playTone(50, 0.4, 'sine', 0.06), 150);
  },
  ramp() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.15);
  },
  switchMode() {
    // Snowboarder toggle sound - little jingle
    playTone(440, 0.1, 'square', 0.06);
    setTimeout(() => playTone(554, 0.1, 'square', 0.06), 80);
    setTimeout(() => playTone(660, 0.15, 'square', 0.06), 160);
  },
  whiteoutTick() {
    playNoise(0.03, 0.02, 4000);
  },
  trick() {
    playTone(520, 0.06, 'square', 0.04);
    playTone(620, 0.04, 'triangle', 0.03);
  },
  trickLand() {
    playTone(880, 0.08, 'square', 0.05);
    setTimeout(() => playTone(1100, 0.1, 'triangle', 0.04), 60);
  },
  styleOnSkier() {
    // Whoosh + impact combo
    playNoise(0.15, 0.08, 3500);
    setTimeout(() => {
      playTone(250, 0.12, 'sawtooth', 0.06);
      playNoise(0.2, 0.1, 800);
    }, 80);
    setTimeout(() => playTone(400, 0.15, 'triangle', 0.05), 150);
    setTimeout(() => playTone(600, 0.1, 'triangle', 0.04), 220);
  },
  yetiCatch() {
    // Deep growl + chomp
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(60, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, audioCtx.currentTime + 0.5);
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.5);
    // Chomp
    setTimeout(() => {
      playNoise(0.15, 0.1, 600);
      playTone(90, 0.1, 'square', 0.08);
    }, 100);
    // Second chomp
    setTimeout(() => {
      playNoise(0.12, 0.08, 500);
      playTone(70, 0.12, 'square', 0.06);
    }, 250);
  },
};

// ── Game State ──

const state = {
  currentScreen: 'game-screen',
  focusedIndex: 0,
  focusables: [],

  // Game state
  gameRunning: true,
  paused: false,
  crashed: false,
  jumping: false,
  jumpTimer: 0,
  jumpHeight: 0,
  wasJumping: false, // track landing

  // Tricks (during jump only)
  trickSpin: 0,        // accumulated spin in radians (left/right)
  trickFlip: 0,        // accumulated flip in radians (front/back)
  trickSpinSpeed: 0,   // current spin velocity
  trickFlipSpeed: 0,   // current flip velocity
  trickLanded: '',     // last trick name for brief display
  trickLandedTimer: 0, // frames to show trick name

  // Skier
  skierX: 300,  // fixed at center — world moves, not the skier
  skierY: 200,
  skierDirection: 0,
  speed: 3,
  minSpeed: 1.5,
  maxSpeed: 10,
  baseSpeed: 3,

  // Snowboarder easter egg (toggle by jumping over large trees)
  isSnowboarder: false,

  // Whiteout crash animation
  whiteoutProgress: 0,    // 0 to 1
  whiteoutAnimating: false,
  crashScoreShown: false,
  crashScoreTime: 0,      // timestamp when score appeared
  crashByYeti: false,     // true if yeti caught you (red whiteout)
  snowfall: [],           // falling snow particles for whiteout
  snowPile: null,         // Uint16Array - accumulated snow height per column

  // Bonus text (jumping over skiers etc.)
  bonusText: '',
  bonusTextTimer: 0,
  bonusTextX: 0,
  bonusTextY: 0,

  // Trail (tracks left behind)
  trail: [],

  // World
  worldY: 0,
  worldX: 0,
  distance: 0,

  // Zones
  zone: 'mountain',
  zoneDistance: 0,
  zoneGraceDist: 0,
  savedWorldX: 0,
  savedWorldY: 0,
  savedSkierX: 300,

  // Obstacles
  obstacles: [],
  obstacleSpawnDistance: 0,

  // Yeti
  yetiActive: false,
  yetiX: 0,
  yetiY: 0,
  yetiVX: 0,             // yeti velocity (has inertia)
  yetiVY: 0,
  yetiTriggered: false,
  yetiStamina: 100,       // yeti tires out over time
  yetiMaxSpeed: 5,        // yeti top speed (player max is 10)
  yetiNextTrigger: 5000,  // distance for next yeti appearance

  // Score
  score: 0,
  bestScore: 0,

  // Particles
  particles: [],

  // Best distance
  bestDistance: 0,
};

let canvas, ctx;
let animFrameId;
let lastTime = 0;

// ── Initialization ──

let splashSnow = [];
let splashAnimId = null;

function init() {
  canvas = document.getElementById('game-canvas');
  ctx = canvas.getContext('2d');

  buildSprites();
  loadData();
  setupInput();
  showSplash();
}

function showSplash() {
  state.currentScreen = 'splash-screen';
  document.getElementById('splash-screen').classList.remove('hidden');
  document.getElementById('game-screen').classList.remove('hidden');
  document.getElementById('menu-screen').classList.add('hidden');

  // Hide the game overlay during splash
  document.getElementById('game-overlay').classList.add('hidden');

  // Show best distance if any
  const bestEl = document.getElementById('splash-best');
  if (state.bestDistance > 0) {
    bestEl.textContent = `Best: ${Math.floor(state.bestDistance)}m`;
  } else {
    bestEl.textContent = '';
  }

  // Animate snow on splash
  splashSnow = [];
  for (let i = 0; i < 60; i++) {
    splashSnow.push({
      x: Math.random() * CONFIG.width,
      y: Math.random() * CONFIG.height,
      vy: 0.3 + Math.random() * 1,
      vx: (Math.random() - 0.5) * 0.3,
      size: Math.random() < 0.3 ? 2 : 1,
      alpha: 0.2 + Math.random() * 0.4,
    });
  }
  splashAnimate();
}

function splashAnimate() {
  if (state.currentScreen !== 'splash-screen') return;

  // Draw snow on the canvas behind the splash overlay
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, CONFIG.width, CONFIG.height);

  // Radial gradient matching the slope
  const grad = ctx.createRadialGradient(
    CONFIG.width / 2, CONFIG.height / 2, 0,
    CONFIG.width / 2, CONFIG.height / 2, CONFIG.width * 0.7
  );
  grad.addColorStop(0, 'rgba(255, 255, 255, 0.09)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, CONFIG.width, CONFIG.height);

  for (const s of splashSnow) {
    s.y += s.vy;
    s.x += s.vx;
    if (s.y > CONFIG.height) { s.y = -2; s.x = Math.random() * CONFIG.width; }
    if (s.x < 0) s.x += CONFIG.width;
    if (s.x >= CONFIG.width) s.x -= CONFIG.width;
    ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
    ctx.fillRect(s.x, s.y, s.size, s.size);
  }

  // Draw small trees scattered on the canvas
  if (SPRITES.treeSmall) {
    const treeSeed = [50, 140, 280, 390, 500, 95, 210, 350, 460, 555];
    const treeY =    [520, 480, 540, 490, 510, 560, 550, 570, 530, 500];
    for (let i = 0; i < treeSeed.length; i++) {
      const sprite = i % 3 === 0 ? SPRITES.treeLarge : SPRITES.treeSmall;
      if (sprite) {
        ctx.globalAlpha = 0.3;
        ctx.drawImage(sprite, treeSeed[i] - sprite.width / 2, treeY[i] - sprite.height / 2);
      }
    }
    ctx.globalAlpha = 1;
  }

  splashAnimId = requestAnimationFrame(splashAnimate);
}

function dismissSplash() {
  if (splashAnimId) cancelAnimationFrame(splashAnimId);
  splashAnimId = null;

  // Transfer splash snow into game particles for a seamless transition
  state.particles = splashSnow.map(s => ({
    x: s.x,
    y: s.y,
    vx: s.vx,
    vy: s.vy,
    life: 200 + Math.random() * 200,
    size: s.size,
  }));

  document.getElementById('splash-screen').classList.add('hidden');
  document.getElementById('game-overlay').classList.remove('hidden');
  startGame();
}

function loadData() {
  try {
    const saved = localStorage.getItem(CONFIG.storageKey);
    if (saved) {
      const data = JSON.parse(saved);
      state.bestDistance = data.bestDistance || 0;
      state.bestScore = data.bestScore || 0;
      state.isSnowboarder = data.isSnowboarder || false;
    }
  } catch (e) {}
}

function saveData() {
  try {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify({
      bestDistance: state.bestDistance,
      bestScore: state.bestScore,
      isSnowboarder: state.isSnowboarder,
    }));
  } catch (e) {}
}

// ── Input Handling ──

function setupInput() {
  document.addEventListener('keydown', (e) => {
    e.preventDefault();
    ensureAudio();

    if (state.currentScreen === 'splash-screen') {
      dismissSplash();
      return;
    }

    if (state.currentScreen === 'menu-screen') {
      handleMenuInput(e.key);
      return;
    }

    // Park hotkey — works in any game state
    if ((e.key === 'p' || e.key === 'P') && state.zone === 'mountain' && !state.whiteoutAnimating) {
      enterZone('park');
      return;
    }

    // During whiteout animation, wait for it to finish
    if (state.whiteoutAnimating) return;

    // After whiteout is done and score is shown, wait a beat then allow restart
    if (state.crashed && state.crashScoreShown) {
      if (performance.now() - state.crashScoreTime > 500) {
        startGame();
      }
      return;
    }

    if (state.crashed) return;

    if (state.paused) {
      if (e.key === 'Enter' || e.key === ' ') {
        togglePause();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowLeft':
        if (state.jumping) { trickSpin(-1); }
        else { turnLeft(); }
        break;
      case 'ArrowRight':
        if (state.jumping) { trickSpin(1); }
        else { turnRight(); }
        break;
      case 'ArrowDown':
        if (state.jumping) { trickFlip(1); }
        else { speedUp(); }
        break;
      case 'ArrowUp':
        if (state.jumping) { trickFlip(-1); }
        else { handleJumpPress(); }
        break;
      case 'Enter':
      case ' ':
        handleJumpPress();
        break;
      case 'Escape':
      case 'Backspace':
        showMenu();
        break;
    }
  });
}

function handleJumpPress() {
  jump();
}

function handleMenuInput(key) {
  const btns = document.querySelectorAll('#menu-screen .focusable');
  switch (key) {
    case 'ArrowUp':
      state.focusedIndex = Math.max(0, state.focusedIndex - 1);
      updateMenuFocus(btns);
      break;
    case 'ArrowDown':
      state.focusedIndex = Math.min(btns.length - 1, state.focusedIndex + 1);
      updateMenuFocus(btns);
      break;
    case 'Enter':
    case ' ':
      const action = btns[state.focusedIndex]?.dataset.action;
      if (action === 'resume-game') resumeGame();
      else if (action === 'new-game') startGame();
      break;
    case 'Escape':
    case 'Backspace':
      resumeGame();
      break;
  }
}

function updateMenuFocus(btns) {
  btns.forEach((b, i) => {
    b.classList.toggle('focused', i === state.focusedIndex);
  });
}

// ── Game Controls ──

function turnLeft() {
  state.skierDirection = Math.max(-3, state.skierDirection - 1);
  SFX.turn();
}

function turnRight() {
  state.skierDirection = Math.min(3, state.skierDirection + 1);
  SFX.turn();
}

function speedUp() {
  state.speed = Math.min(state.maxSpeed, state.speed + 0.5);
  SFX.speedUp();
}

function slowDown() {
  state.speed = Math.max(state.minSpeed, state.speed - 0.5);
  SFX.slowDown();
}

function jump(fromRamp) {
  if (!state.jumping && !state.crashed) {
    state.jumping = true;
    state.jumpTimer = 0;
    state.trickSpin = 0;
    state.trickFlip = 0;
    state.trickSpinSpeed = 0;
    state.trickFlipSpeed = 0;

    // Speed: max speed = 2x airtime vs min speed (linear 1.0–2.0)
    // Small ramp = 2x normal jump, big ramp = 2x small ramp (4x normal)
    const speedRatio = (state.speed - state.minSpeed) / (state.maxSpeed - state.minSpeed);
    const speedFactor = 1.0 + speedRatio; // 1.0 at min, 2.0 at max
    const rampBoost = fromRamp === 'big' ? 4 : fromRamp ? 2 : 1;
    state.jumpDuration = 20 * speedFactor * rampBoost;
    state.jumpMaxHeight = 30 * speedFactor * rampBoost;

    SFX.jump();
  }
}

function trickSpin(dir) {
  // dir: -1 = left spin, 1 = right spin
  state.trickSpinSpeed += dir * 0.15;
  SFX.trick();
}

function trickFlip(dir) {
  // dir: -1 = backflip (up key), 1 = frontflip (down key)
  state.trickFlipSpeed += dir * 0.15;
  SFX.trick();
}

function togglePause() {
  state.paused = !state.paused;
  if (!state.paused) {
    lastTime = performance.now();
    gameLoop(lastTime);
  }
}

function showMenu() {
  state.paused = true;
  state.currentScreen = 'menu-screen';
  document.getElementById('menu-screen').classList.remove('hidden');

  const statsEl = document.getElementById('menu-stats');
  statsEl.textContent = `Distance: ${Math.floor(state.distance)}m | Best: ${Math.floor(state.bestDistance)}m`;

  state.focusedIndex = 0;
  const btns = document.querySelectorAll('#menu-screen .focusable');
  updateMenuFocus(btns);
}

function resumeGame() {
  state.currentScreen = 'game-screen';
  document.getElementById('menu-screen').classList.add('hidden');
  state.paused = false;
  animFrameId = requestAnimationFrame((ts) => {
    lastTime = ts;
    gameLoop(ts);
  });
}

// ── Game Lifecycle ──

function startGame() {
  if (state.distance > state.bestDistance) {
    state.bestDistance = state.distance;
    saveData();
  }

  state.gameRunning = true;
  state.paused = false;
  state.crashed = false;
  state.jumping = false;
  state.jumpTimer = 0;
  state.jumpHeight = 0;
  state.wasJumping = false;
  state.trickSpin = 0;
  state.trickFlip = 0;
  state.trickSpinSpeed = 0;
  state.trickFlipSpeed = 0;
  state.trickLanded = '';
  state.trickLandedTimer = 0;
  state.skierX = 300;
  state.skierDirection = 0;
  state.isSnowboarder = false;
  state.speed = state.baseSpeed;
  state.worldY = 0;
  state.worldX = 0;
  state.distance = 0;
  state.zone = 'mountain';
  state.zoneDistance = 0;
  state.zoneGraceDist = 0;
  state.savedWorldX = 0;
  state.savedWorldY = 0;
  state.savedSkierX = 300;
  state.obstacles = [];
  state.trail = [];
  state.obstacleSpawnDistance = 0;
  state.testParkJumps = 0;
  // Keep any particles carried over from splash for seamless transition
  if (!state.particles.length) state.particles = [];
  state.yetiActive = false;
  state.yetiTriggered = false;
  state.yetiVX = 0;
  state.yetiVY = 0;
  state.yetiStamina = 100;
  state.yetiNextTrigger = 5000;
  state.score = 0;
  state.whiteoutProgress = 0;
  state.whiteoutAnimating = false;
  state.crashScoreShown = false;
  state.crashScoreTime = 0;
  state.crashByYeti = false;
  state.snowfall = [];
  state.snowPile = null;
  state.bonusText = '';
  state.bonusTextTimer = 0;

  state.currentScreen = 'game-screen';
  document.getElementById('menu-screen').classList.add('hidden');
  document.getElementById('crash-msg').classList.add('hidden');

  // Portal to The Park — off to the left, requires exploration to find
  state.obstacles.push({
    type: 'portal',
    x: -1400,
    y: 1200,
    hit: false,
    zone: 'park',
  });

  if (animFrameId) cancelAnimationFrame(animFrameId);
  animFrameId = requestAnimationFrame((ts) => {
    lastTime = ts;
    gameLoop(ts);
  });
}

// ── Obstacle Generation ──

function spawnObstacle(yOffset) {
  let types;
  if (state.zone === 'park') {
    types = ['ramp', 'ramp', 'ramp', 'ramp', 'bigRamp', 'bigRamp', 'bigRamp',
             'otherSkier', 'otherSkier', 'mogul', 'treeSmall'];
  } else {
    types = ['treeSmall', 'treeSmall', 'treeSmall', 'treeLarge', 'treeLarge',
             'rock', 'rock', 'mogul', 'ramp', 'otherSkier'];
  }
  let type = types[Math.floor(Math.random() * types.length)];

  // Rare big ramp on mountain: ~1 in every 10-20 ramps
  if (state.zone === 'mountain' && type === 'ramp' && Math.random() < 0.08) {
    type = 'bigRamp';
  }

  // Difficulty narrows the horizontal spread so obstacles cluster tighter
  const distSince = Math.max(0, state.distance - 150);
  const difficulty = state.zone === 'park' ? 0.3 : Math.min(1, distSince / 3000);
  const parkWidth = 1200;
  const spreadW = state.zone === 'park' ? parkWidth : CONFIG.worldWidth * (1 - difficulty * 0.5);
  const spreadY = 200 * (1 - difficulty * 0.6);

  const ob = {
    type: type,
    x: state.worldX + (Math.random() * spreadW - spreadW / 2),
    y: yOffset || state.worldY + CONFIG.height + Math.random() * spreadY,
    hit: false,
  };

  if (type === 'otherSkier') {
    ob.vx = (Math.random() - 0.5) * 1.5;
    ob.vy = Math.random() * 0.5;
  }

  state.obstacles.push(ob);
}

function getObstacleHitbox(ob) {
  switch (ob.type) {
    case 'treeSmall': return { w: 14, h: 24, offY: 8 };
    case 'treeLarge': return { w: 20, h: 32, offY: 12 };
    case 'rock': return { w: 16, h: 10, offY: 2 };
    case 'mogul': return { w: 22, h: 6, offY: 2 };
    case 'ramp': return { w: 30, h: 10, offY: 4, isRamp: true };
    case 'bigRamp': return { w: 44, h: 16, offY: 4, isRamp: true, isBigRamp: true };
    case 'otherSkier': return { w: 12, h: 18, offY: 4 };
    case 'portal': return { w: 24, h: 34, offY: 4, isPortal: true };
    case 'finishLine': return { w: 56, h: 8, offY: 0, isFinishLine: true };
    default: return { w: 10, h: 10, offY: 0 };
  }
}

// ── Game Loop ──

function gameLoop(timestamp) {
  if (state.paused || state.currentScreen !== 'game-screen') return;

  const dt = Math.min((timestamp - lastTime) / 16.67, 3);
  lastTime = timestamp;

  if (state.whiteoutAnimating) {
    updateWhiteout(dt);
    renderWhiteout();
    animFrameId = requestAnimationFrame(gameLoop);
    return;
  }

  // Whiteout finished — keep showing the final score screen
  if (state.crashed && state.crashScoreShown) {
    renderWhiteout();
    return;
  }

  update(dt);
  render();

  if (state.gameRunning && !state.crashed) {
    animFrameId = requestAnimationFrame(gameLoop);
  }
}

function update(dt) {
  if (state.crashed) return;

  const dirSpeeds = {
    '-3': { dx: -1.4, dy: 0.15 },
    '-2': { dx: -1.0, dy: 0.4 },
    '-1': { dx: -0.5, dy: 0.85 },
    '0':  { dx: 0,    dy: 1.0 },
    '1':  { dx: 0.5,  dy: 0.85 },
    '2':  { dx: 1.0,  dy: 0.4 },
    '3':  { dx: 1.4,  dy: 0.15 },
  };

  const dir = dirSpeeds[state.skierDirection];
  const moveX = dir.dx * state.speed * dt;
  const moveY = dir.dy * state.speed * dt;

  state.worldX += moveX;
  state.worldY += moveY;
  state.distance += moveY * 0.5;
  state.zoneDistance += moveY * 0.5;
  if (state.zone === 'mountain') state.score += moveY * 0.5;

  // Skier drifts slightly side-to-side but springs back to center
  state.skierX += moveX * 0.15;
  const center = CONFIG.width / 2;
  state.skierX += (center - state.skierX) * 0.03 * dt;
  // Hard clamp so they never reach the edge
  if (state.skierX < 60) state.skierX = 60;
  else if (state.skierX > CONFIG.width - 60) state.skierX = CONFIG.width - 60;

  // Record trail when grounded
  if (!state.jumping && !state.crashed) {
    const last = state.trail[state.trail.length - 1];
    // Only record if moved enough (avoid filling memory when stationary)
    if (!last || last.gap || Math.abs(state.worldX - last.wx) > 2 || Math.abs(state.worldY - last.wy) > 2) {
      state.trail.push({ wx: state.worldX, wy: state.worldY, sx: state.skierX, board: state.isSnowboarder, gap: false });
    }
  } else if (state.jumping && state.trail.length > 0 && !state.trail[state.trail.length - 1].gap) {
    // Mark a gap so tracks break during jumps
    state.trail.push({ gap: true });
  }
  // Cull trail points that scrolled off screen (worldY well above camera top)
  const cullY = state.worldY - CONFIG.height - 100;
  while (state.trail.length > 0) {
    const p = state.trail[0];
    if (p.gap || p.wy < cullY) { state.trail.shift(); }
    else break;
  }

  // Jump physics
  if (state.jumping) {
    state.wasJumping = true;
    state.jumpTimer += dt;
    const jumpDuration = state.jumpDuration || 30;
    const jumpMaxHeight = state.jumpMaxHeight || 40;
    const t = state.jumpTimer / jumpDuration;
    state.jumpHeight = Math.sin(t * Math.PI) * jumpMaxHeight;

    // Update trick rotations
    state.trickSpin += state.trickSpinSpeed * dt;
    state.trickFlip += state.trickFlipSpeed * dt;
    // Slight drag on spin/flip speed
    state.trickSpinSpeed *= 0.97;
    state.trickFlipSpeed *= 0.97;

    if (state.jumpTimer >= jumpDuration) {
      // Evaluate tricks before resetting
      const fullSpins = Math.abs(state.trickSpin) / (Math.PI * 2);
      const fullFlips = Math.abs(state.trickFlip) / (Math.PI * 2);

      // How many tricks you're allowed depends on airtime
      const maxTricks = jumpDuration < 60 ? 0 : jumpDuration > 100 ? 2 : 1;

      // If you attempted more tricks than your airtime allows, you crash
      const spinCount = Math.floor(fullSpins + 0.2);
      const flipCount = Math.floor(fullFlips + 0.2);
      const totalTricks = (fullSpins >= 0.8 ? spinCount : 0) + (fullFlips >= 0.8 ? flipCount : 0);

      // Crash if: started a rotation (>30%) but didn't complete it,
      // OR attempted more tricks than airtime allows
      const spinStarted = fullSpins > 0.3;
      const spinLanded = fullSpins < 0.2 || (fullSpins % 1) < 0.25 || (fullSpins % 1) > 0.75;
      const flipStarted = fullFlips > 0.3;
      const flipLanded = fullFlips < 0.2 || (fullFlips % 1) < 0.25 || (fullFlips % 1) > 0.75;

      const bailedRotation = (spinStarted && !spinLanded) || (flipStarted && !flipLanded);
      const tooManyTricks = totalTricks > maxTricks;

      if (bailedRotation || tooManyTricks) {
        // Bailed — didn't finish the rotation
        state.jumping = false;
        state.jumpTimer = 0;
        state.jumpHeight = 0;
        state.trickSpin = 0;
        state.trickFlip = 0;
        state.trickSpinSpeed = 0;
        state.trickFlipSpeed = 0;
        crash();
        return;
      }

      const trickNames = [];
      if (fullSpins >= 0.8) {
        const count = Math.floor(fullSpins + 0.2); // generous rounding
        const spinDir = state.trickSpin > 0 ? '' : '';
        if (count >= 3) trickNames.push(count + '× SPIN');
        else if (count >= 2) trickNames.push('DOUBLE SPIN');
        else trickNames.push('360 SPIN');
      }
      if (fullFlips >= 0.8) {
        const count = Math.floor(fullFlips + 0.2);
        const flipType = state.trickFlip > 0 ? 'FRONTFLIP' : 'BACKFLIP';
        if (count >= 3) trickNames.push(count + '× ' + flipType);
        else if (count >= 2) trickNames.push('DOUBLE ' + flipType);
        else trickNames.push(flipType);
      }
      if (trickNames.length > 0) {
        // Score tricks: 300 per spin/flip, 500 double, 800 triple+
        let trickScore = 0;
        if (fullSpins >= 0.8) {
          const count = Math.floor(fullSpins + 0.2);
          trickScore += count >= 3 ? 800 : count >= 2 ? 500 : 300;
        }
        if (fullFlips >= 0.8) {
          const count = Math.floor(fullFlips + 0.2);
          trickScore += count >= 3 ? 800 : count >= 2 ? 500 : 300;
        }
        // Combo bonus: spin + flip = 1.5x
        if (fullSpins >= 0.8 && fullFlips >= 0.8) {
          trickScore = Math.floor(trickScore * 1.5);
        }
        state.score += trickScore;
        state.trickLanded = trickNames.join(' + ') + ' +' + trickScore;
        state.trickLandedTimer = 90;
        SFX.trickLand();
      }

      state.jumping = false;
      state.jumpTimer = 0;
      state.jumpHeight = 0;
      state.trickSpin = 0;
      state.trickFlip = 0;
      state.trickSpinSpeed = 0;
      state.trickFlipSpeed = 0;
      SFX.land();
    }
  } else if (state.wasJumping) {
    state.wasJumping = false;
  }

  // Trick landed display timer
  if (state.trickLandedTimer > 0) {
    state.trickLandedTimer -= dt;
    if (state.trickLandedTimer <= 0) {
      state.trickLanded = '';
    }
  }

  // Bonus text timer (jumping over skiers)
  if (state.bonusTextTimer > 0) {
    state.bonusTextTimer -= dt;
    state.bonusTextY -= 0.5 * dt; // float upward
    if (state.bonusTextTimer <= 0) {
      state.bonusText = '';
    }
  }

  // No spawning in the first 150m on the mountain — open field to learn controls
  if (state.zone === 'mountain' && state.distance < 150) return;

  // Grace period after zone return — no spawning for a safe buffer
  if (state.zoneGraceDist > 0) {
    state.zoneGraceDist -= moveY * 0.5;
    return;
  }

  // Spawn new obstacles — density ramps up gradually
  // Early game (150-500m): sparse, wide spacing
  // Mid game (500-3000m): steadily increasing
  // Late game (3000m+): dense and tight
  const distSince = Math.max(0, state.distance - 150);
  const difficulty = state.zone === 'park' ? 0.3 : Math.min(1, distSince / 3000);
  const spawnInterval = state.zone === 'park' ? 35 : 20 - difficulty * 10;
  const maxExtra = Math.floor(difficulty * 3);
  const spawnCount = state.zone === 'park'
    ? 1 + Math.floor(Math.random() * 2)
    : 2 + Math.floor(Math.random() * (1 + maxExtra));

  state.obstacleSpawnDistance += moveY;
  if (state.obstacleSpawnDistance > spawnInterval) {
    state.obstacleSpawnDistance = 0;
    for (let s = 0; s < spawnCount; s++) spawnObstacle();
  }

  // Update and cull obstacles
  for (let i = state.obstacles.length - 1; i >= 0; i--) {
    const ob = state.obstacles[i];

    if (ob.type === 'otherSkier' && ob.vx !== undefined) {
      if (ob.wipedOut) {
        ob.x += ob.wipeoutVX * dt;
        ob.y += ob.wipeoutVY * dt;
        ob.wipeoutSpin += 0.2 * dt;
        ob.wipeoutTimer -= dt;
        if (ob.wipeoutTimer <= 0) {
          state.obstacles.splice(i, 1);
          continue;
        }
      } else {
        ob.x += ob.vx * dt;
        ob.y += ob.vy * dt;
      }
    }

    if (ob.y < state.worldY - 200 && ob.type !== 'portal' && ob.type !== 'finishLine') {
      state.obstacles.splice(i, 1);
      continue;
    }

    // Portal and finish line collisions (work even while jumping)
    if (!ob.hit && (ob.type === 'portal' || ob.type === 'finishLine')) {
      const hb = getObstacleHitbox(ob);
      let screenX = ob.x - state.worldX + CONFIG.width / 2;
      const screenY = ob.y - state.worldY + state.skierY;
      screenX = wrapScreenX(screenX);

      const skierLeft = state.skierX - 6;
      const skierRight = state.skierX + 6;
      const skierTop = state.skierY - 4;
      const skierBot = state.skierY + 10;

      const obLeft = screenX - hb.w / 2;
      const obRight = screenX + hb.w / 2;
      const obTop = screenY - hb.h / 2 + hb.offY;
      const obBot = screenY + hb.h / 2 + hb.offY;

      if (skierRight > obLeft && skierLeft < obRight &&
          skierBot > obTop && skierTop < obBot) {
        if (hb.isPortal) {
          enterZone(ob.zone);
          return;
        } else if (hb.isFinishLine) {
          exitZone();
          return;
        }
      }
    }

    if (!ob.hit && !state.jumping) {
      const hb = getObstacleHitbox(ob);
      let screenX = ob.x - state.worldX + CONFIG.width / 2;
      const screenY = ob.y - state.worldY + state.skierY;

      // Wrap obstacle screenX into view
      screenX = wrapScreenX(screenX);

      const skierLeft = state.skierX - 6;
      const skierRight = state.skierX + 6;
      const skierTop = state.skierY - 4;
      const skierBot = state.skierY + 10;

      const obLeft = screenX - hb.w / 2;
      const obRight = screenX + hb.w / 2;
      const obTop = screenY - hb.h / 2 + hb.offY;
      const obBot = screenY + hb.h / 2 + hb.offY;

      if (skierRight > obLeft && skierLeft < obRight &&
          skierBot > obTop && skierTop < obBot) {
        if (hb.isRamp) {
          if (!state.jumping) {
            jump(hb.isBigRamp ? 'big' : true);
            SFX.ramp();
          }
        } else if (ob.type === 'mogul') {
          state.speed = Math.max(state.minSpeed, state.speed - 0.3);
          ob.hit = true;
          SFX.mogul();
        } else {
          crash();
          return;
        }
      }
    }

    // Easter egg: jumping over a large tree toggles snowboarder mode
    if (!ob.hit && state.jumping && ob.type === 'treeLarge' && !ob.jumpedOver) {
      const hb = getObstacleHitbox(ob);
      let screenX = ob.x - state.worldX + CONFIG.width / 2;
      const screenY = ob.y - state.worldY + state.skierY;
      screenX = wrapScreenX(screenX);

      const skierLeft = state.skierX - 6;
      const skierRight = state.skierX + 6;
      const obLeft = screenX - hb.w / 2;
      const obRight = screenX + hb.w / 2;
      const obTop = screenY - hb.h / 2 + hb.offY;
      const obBot = screenY + hb.h / 2 + hb.offY;

      // Check horizontal overlap and that skier Y is within tree zone
      if (skierRight > obLeft && skierLeft < obRight &&
          state.skierY > obTop - 20 && state.skierY < obBot + 20) {
        ob.jumpedOver = true;
        state.score += 500;
        state.isSnowboarder = !state.isSnowboarder;
        SFX.switchMode();
        state.bonusText = state.isSnowboarder ? 'SHRED! +500' : 'POLES OUT! +500';
        state.bonusTextTimer = 80;
        state.bonusTextX = state.skierX;
        state.bonusTextY = state.skierY - 30;
        saveData();
      }
    }

    // Jumping over another skier — they wipe out!
    if (state.jumping && ob.type === 'otherSkier' && !ob.wipedOut) {
      const hb = getObstacleHitbox(ob);
      let screenX = ob.x - state.worldX + CONFIG.width / 2;
      const screenY = ob.y - state.worldY + state.skierY;
      screenX = wrapScreenX(screenX);

      const skierLeft = state.skierX - 6;
      const skierRight = state.skierX + 6;
      const obLeft = screenX - hb.w / 2;
      const obRight = screenX + hb.w / 2;
      const obTop = screenY - hb.h / 2 + hb.offY;
      const obBot = screenY + hb.h / 2 + hb.offY;

      if (skierRight > obLeft && skierLeft < obRight &&
          state.skierY > obTop - 25 && state.skierY < obBot + 25) {
        ob.wipedOut = true;
        ob.wipeoutSpin = 0;
        ob.wipeoutVX = (Math.random() - 0.5) * 6;
        ob.wipeoutVY = -2 + Math.random() * 2;
        ob.wipeoutTimer = 120;
        // Burst of snow from the NPC
        for (let j = 0; j < 12; j++) {
          state.particles.push({
            x: screenX + (Math.random() - 0.5) * 16,
            y: screenY + (Math.random() - 0.5) * 16,
            vx: (Math.random() - 0.5) * 5,
            vy: (Math.random() - 0.5) * 5,
            life: 40 + Math.random() * 40,
            size: 1 + Math.floor(Math.random() * 3),
          });
        }
        // Speed boost
        state.speed = Math.min(state.maxSpeed, state.speed + 0.8);
        state.score += 200;
        // Show text
        const phrases = ['STYLED! +200', 'SENT IT! +200', 'SHREDDED! +200', 'LATER! +200', 'SEE YA! +200'];
        state.bonusText = phrases[Math.floor(Math.random() * phrases.length)];
        state.bonusTextTimer = 80;
        state.bonusTextX = screenX;
        state.bonusTextY = screenY - 20;
        SFX.styleOnSkier();
      }
    }

    // Score for jumping over rocks and small trees
    if (state.jumping && !ob.jumpedOver && (ob.type === 'rock' || ob.type === 'treeSmall')) {
      const hb = getObstacleHitbox(ob);
      let screenX = ob.x - state.worldX + CONFIG.width / 2;
      const screenY = ob.y - state.worldY + state.skierY;
      screenX = wrapScreenX(screenX);

      const skierLeft = state.skierX - 6;
      const skierRight = state.skierX + 6;
      const obLeft = screenX - hb.w / 2;
      const obRight = screenX + hb.w / 2;
      const obTop = screenY - hb.h / 2 + hb.offY;
      const obBot = screenY + hb.h / 2 + hb.offY;

      if (skierRight > obLeft && skierLeft < obRight &&
          state.skierY > obTop - 20 && state.skierY < obBot + 20) {
        ob.jumpedOver = true;
        state.score += 50;
      }
    }
  }

  // Snow particles
  if (Math.random() < 0.3) {
    state.particles.push({
      x: Math.random() * CONFIG.width,
      y: -2,
      vx: (Math.random() - 0.5) * 0.5,
      vy: 1 + Math.random() * 2,
      life: 200 + Math.random() * 200,
      size: Math.random() < 0.3 ? 2 : 1,
    });
  }

  for (let i = state.particles.length - 1; i >= 0; i--) {
    const p = state.particles[i];
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.life -= dt;
    if (p.life <= 0 || p.y > CONFIG.height) {
      state.particles.splice(i, 1);
    }
  }

  // Yeti (mountain only)
  if (state.zone === 'mountain' && state.distance > state.yetiNextTrigger && !state.yetiTriggered) {
    state.yetiTriggered = true;
    state.yetiActive = true;
    state.yetiStamina = 100;
    state.yetiJumpedOver = false;
    state.yetiVX = 0;
    state.yetiVY = 0;
    // Spawn just off-screen to the side and slightly behind
    const side = Math.random() > 0.5 ? 1 : -1;
    state.yetiX = state.worldX + side * 350;
    state.yetiY = state.worldY + CONFIG.height * 0.8;
  }

  if (state.yetiActive) {
    // Calculate yeti screen position
    let yx = state.yetiX - state.worldX + CONFIG.width / 2;
    let yy = state.yetiY - state.worldY + state.skierY;

    // Direction toward player in screen space
    const dx = state.skierX - yx;
    const dy = state.skierY - yy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 0) {
      const targetVX = dx / dist;
      const targetVY = dy / dist;

      // Yeti has inertia — can't turn instantly
      // Turning is sluggish so sharp player cuts create separation
      const turnRate = 0.06;
      state.yetiVX += (targetVX - state.yetiVX) * turnRate * dt;
      state.yetiVY += (targetVY - state.yetiVY) * turnRate * dt;

      // Normalize
      const vMag = Math.sqrt(state.yetiVX * state.yetiVX + state.yetiVY * state.yetiVY);
      if (vMag > 0) {
        state.yetiVX /= vMag;
        state.yetiVY /= vMag;
      }
    }

    // Yeti speed: fast enough to be threatening but capped so high player speed can escape
    const staminaFactor = Math.max(0.4, state.yetiStamina / 100);
    const yetiSpeed = Math.min(state.yetiMaxSpeed, state.speed * 0.85 + 1.5) * staminaFactor;

    // Move yeti in world space
    state.yetiX += state.yetiVX * yetiSpeed * dt;
    state.yetiY += state.yetiVY * yetiSpeed * dt + moveY;

    // Drain stamina slowly — gives about 10-15 seconds of chase
    const drainRate = 0.015 + (state.speed / state.maxSpeed) * 0.02;
    state.yetiStamina -= drainRate * dt;

    // Recalculate screen pos after movement
    yx = state.yetiX - state.worldX + CONFIG.width / 2;
    yy = state.yetiY - state.worldY + state.skierY;
    const finalDist = Math.sqrt((yx - state.skierX) ** 2 + (yy - state.skierY) ** 2);

    // Yeti gives up only if stamina fully drained OR very far away
    if (state.yetiStamina <= 0 && finalDist > 200) {
      state.yetiActive = false;
      state.yetiTriggered = false;
      state.yetiNextTrigger = state.distance + 1000;
    }

    // Collision — jumping dodges the yeti
    if (finalDist < 22 && !state.jumping) {
      state.crashByYeti = true;
      SFX.yetiCatch();
      crash();
    }

    // Jumping over the yeti — huge points
    if (finalDist < 40 && state.jumping && !state.yetiJumpedOver) {
      state.yetiJumpedOver = true;
      state.score += 1000;
      state.bonusText = 'YETI JUMP! +1000';
      state.bonusTextTimer = 100;
      state.bonusTextX = state.skierX;
      state.bonusTextY = state.skierY - 40;
    }
  }

  // Update display
  const zoneLabel = state.zone === 'mountain' ? '' : 'THE PARK  ';
  document.getElementById('game-distance').textContent = zoneLabel + Math.floor(state.distance) + 'm  ' + Math.floor(state.score) + 'pts';
  const speedBars = Math.round(((state.speed - state.minSpeed) / (state.maxSpeed - state.minSpeed)) * 6);
  document.getElementById('game-speed').textContent = '\u25B2'.repeat(speedBars) + '\u25B3'.repeat(6 - speedBars);
}

// ── Zone Transitions ──

function enterZone(zoneName) {
  // Save mountain position so we can return
  state.savedWorldX = state.worldX;
  state.savedWorldY = state.worldY;
  state.savedSkierX = state.skierX;

  // Transition to the new zone
  state.zone = zoneName;
  state.zoneDistance = 0;
  state.zoneGraceDist = 0;
  state.worldX = 0;
  state.worldY = 0;
  state.skierX = 300;
  state.skierDirection = 0;
  state.obstacles = [];
  state.trail = [];
  state.obstacleSpawnDistance = 0;

  // Disable yeti in zones
  state.yetiActive = false;
  state.yetiTriggered = false;

  // Place the finish line at ~3000m zone distance (worldY ~6000)
  state.obstacles.push({
    type: 'finishLine',
    x: 0,
    y: 6000,
    hit: false,
  });

  // Show zone name
  const zoneNames = { park: 'THE PARK' };
  state.bonusText = zoneNames[zoneName] || zoneName.toUpperCase();
  state.bonusTextTimer = 120;
  state.bonusTextX = CONFIG.width / 2;
  state.bonusTextY = CONFIG.height / 2 - 40;

  SFX.ramp();
}

function exitZone() {
  // Restore mountain position
  state.worldX = state.savedWorldX;
  state.worldY = state.savedWorldY;
  state.skierX = CONFIG.width / 2;
  state.zone = 'mountain';
  state.zoneDistance = 0;
  state.obstacles = [];
  state.trail = [];
  state.obstacleSpawnDistance = 0;
  state.zoneGraceDist = 200;

  // Re-place the park portal so it's findable again
  state.obstacles.push({
    type: 'portal',
    x: -1400,
    y: 1200,
    hit: false,
    zone: 'park',
  });

  // Delay yeti after returning
  state.yetiActive = false;
  state.yetiTriggered = false;
  state.yetiNextTrigger = state.distance + 1000;

  // Show return text
  state.bonusText = 'BACK ON THE MOUNTAIN';
  state.bonusTextTimer = 120;
  state.bonusTextX = CONFIG.width / 2;
  state.bonusTextY = CONFIG.height / 2 - 40;

  SFX.ramp();
}

function crash() {
  state.crashed = true;
  state.gameRunning = false;
  if (!state.crashByYeti) SFX.crash();

  // Start whiteout animation
  state.whiteoutAnimating = true;
  state.whiteoutProgress = 0;
  state.crashScoreShown = false;
  state.snowfall = [];
  // Snow pile: one height value per 4px column
  const cols = Math.ceil(CONFIG.width / 4);
  state.snowPile = new Uint16Array(cols);

  // Spawn crash particles
  for (let i = 0; i < 20; i++) {
    state.particles.push({
      x: state.skierX + (Math.random() - 0.5) * 20,
      y: state.skierY + (Math.random() - 0.5) * 20,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      life: 30 + Math.random() * 30,
      size: 1 + Math.floor(Math.random() * 3),
    });
  }

  if (state.distance > state.bestDistance) {
    state.bestDistance = state.distance;
  }
  if (state.score > state.bestScore) {
    state.bestScore = state.score;
  }
  saveData();
  render();
  lastTime = performance.now();
  animFrameId = requestAnimationFrame(gameLoop);
}

// ── Whiteout Animation ──

function updateWhiteout(dt) {
  state.whiteoutProgress += dt / 140;

  // Spawn heavy snowfall — rate increases as animation progresses
  const spawnRate = 8 + Math.floor(state.whiteoutProgress * 40);
  const isRed = state.crashByYeti;
  for (let i = 0; i < spawnRate; i++) {
    const size = 2 + Math.floor(Math.random() * 4);
    state.snowfall.push({
      x: Math.random() * CONFIG.width,
      y: -size - Math.random() * 40,
      vy: 3 + Math.random() * 5 + state.whiteoutProgress * 4,
      vx: (Math.random() - 0.5) * 1.5,
      size: size,
      shade: isRed
        ? { r: 0x77 + Math.floor(Math.random() * 0x44), g: Math.floor(Math.random() * 0x22), b: Math.floor(Math.random() * 0x22) }
        : Math.floor(0x77 + Math.random() * 0x44),
    });
  }

  // Update falling snow and accumulate into pile
  const colW = 4;
  const cols = state.snowPile.length;
  for (let i = state.snowfall.length - 1; i >= 0; i--) {
    const flake = state.snowfall[i];
    flake.y += flake.vy * dt;
    flake.x += flake.vx * dt;

    if (flake.x < 0) flake.x += CONFIG.width;
    if (flake.x >= CONFIG.width) flake.x -= CONFIG.width;

    const col = Math.min(cols - 1, Math.floor(flake.x / colW));
    const pileTop = CONFIG.height - state.snowPile[col];

    if (flake.y + flake.size >= pileTop) {
      // Deposit mostly in hit column for uneven buildup
      const deposit = Math.ceil(flake.size * 0.8);
      state.snowPile[col] = Math.min(CONFIG.height, state.snowPile[col] + deposit);
      // Tiny splash to neighbors
      if (col > 0) state.snowPile[col - 1] = Math.min(CONFIG.height, state.snowPile[col - 1] + 1);
      if (col < cols - 1) state.snowPile[col + 1] = Math.min(CONFIG.height, state.snowPile[col + 1] + 1);
      state.snowfall.splice(i, 1);
    }
  }

  // Light settling — only shave off extreme spikes (>12px diff with neighbor)
  // Preserves natural drifts and unevenness
  for (let c = 1; c < cols - 1; c++) {
    const diffL = state.snowPile[c] - state.snowPile[c - 1];
    if (diffL > 12) {
      state.snowPile[c] -= 2;
      state.snowPile[c - 1] += 1;
    }
    const diffR = state.snowPile[c] - state.snowPile[c + 1];
    if (diffR > 12) {
      state.snowPile[c] -= 2;
      state.snowPile[c + 1] += 1;
    }
  }

  // Guarantee fill progress — minimum height increases with time
  // but with per-column sine noise so the minimum itself is hilly
  if (state.whiteoutProgress > 0.4) {
    const baseMin = Math.floor((state.whiteoutProgress - 0.4) * 1.67 * CONFIG.height);
    for (let c = 0; c < cols; c++) {
      const noise = Math.sin(c * 0.3) * 15 + Math.sin(c * 0.7 + 2) * 10 + Math.sin(c * 0.13 + 5) * 8;
      const colMin = Math.max(0, baseMin + noise);
      if (state.snowPile[c] < colMin) {
        state.snowPile[c] = Math.floor(colMin);
      }
    }
  }

  // Don't end animation until every column fully covers the screen
  let allFilled = true;
  if (state.whiteoutProgress >= 1) {
    for (let c = 0; c < cols; c++) {
      if (state.snowPile[c] < CONFIG.height) {
        allFilled = false;
        break;
      }
    }
    if (allFilled) {
      state.whiteoutAnimating = false;
      state.crashScoreShown = true;
      state.crashScoreTime = performance.now();
    }
  }

  if (Math.random() < 0.12) {
    SFX.whiteoutTick();
  }
}

function renderWhiteout() {
  // Render the frozen game scene underneath
  render();

  const p = state.whiteoutProgress;
  const colW = 4;
  const cols = state.snowPile ? state.snowPile.length : 0;

  // Draw falling snowflakes
  for (const flake of state.snowfall) {
    if (typeof flake.shade === 'object') {
      const r = flake.shade.r.toString(16).padStart(2, '0');
      const g = flake.shade.g.toString(16).padStart(2, '0');
      const b = flake.shade.b.toString(16).padStart(2, '0');
      ctx.fillStyle = '#' + r + g + b;
    } else {
      const hex = flake.shade.toString(16);
      ctx.fillStyle = '#' + hex + hex + hex;
    }
    ctx.fillRect(flake.x, flake.y, flake.size, flake.size);
  }

  // Draw accumulated snow pile
  const isRed = state.crashByYeti;
  if (state.snowPile) {
    for (let c = 0; c < cols; c++) {
      const h = state.snowPile[c];
      if (h <= 0) continue;
      const x = c * colW;
      const top = CONFIG.height - h;
      // Main pile body
      ctx.fillStyle = isRed ? '#881111' : '#999';
      ctx.fillRect(x, top + 3, colW, h);
      // Lighter top edge
      ctx.fillStyle = isRed ? '#aa2222' : '#aaa';
      ctx.fillRect(x, top, colW, 3);
    }
  }

  // Score text fades in as snow piles up
  if (p > 0.55) {
    const textAlpha = Math.min(1, (p - 0.55) / 0.3);
    ctx.globalAlpha = textAlpha;

    ctx.fillStyle = isRed ? '#fff' : '#111';
    ctx.font = 'bold 48px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(isRed ? 'DEVOURED' : 'WIPED OUT', CONFIG.width / 2, 200);

    ctx.font = 'bold 32px "Courier New", monospace';
    ctx.fillText(`${Math.floor(state.distance)}m  ${Math.floor(state.score)}pts`, CONFIG.width / 2, 260);

    const isNewBest = state.score >= state.bestScore;
    if (isNewBest) {
      ctx.fillStyle = isRed ? '#ffcc00' : '#cc0000';
      ctx.font = 'bold 22px "Courier New", monospace';
      ctx.fillText('NEW BEST!', CONFIG.width / 2, 300);
    } else {
      ctx.fillStyle = isRed ? '#ddd' : '#333';
      ctx.font = '20px "Courier New", monospace';
      ctx.fillText(`Best: ${Math.floor(state.bestScore)}pts`, CONFIG.width / 2, 300);
    }

    if (p >= 1) {
      ctx.fillStyle = isRed ? '#ccc' : '#444';
      ctx.font = '18px "Courier New", monospace';
      ctx.fillText('Press any key to ride again', CONFIG.width / 2, 380);
    }

    ctx.globalAlpha = 1;
    ctx.textAlign = 'left';
  }
}

// ── World Wrapping ──

// Wrap a screen-space X coordinate so obstacles loop around horizontally
function wrapScreenX(sx) {
  const w = CONFIG.worldWidth;
  // Bring into range [-w/2, w/2] relative to center, then offset to screen
  let rel = sx - CONFIG.width / 2;
  rel = ((rel % w) + w + w / 2) % w - w / 2;
  return rel + CONFIG.width / 2;
}

// ── Rendering ──

function render() {
  // Speed blur: at high speed, don't fully clear — leave fading trails
  const speedRatio = (state.speed - state.minSpeed) / (state.maxSpeed - state.minSpeed);
  if (speedRatio > 0.7 && !state.crashed) {
    const blurAlpha = (speedRatio - 0.7) / 0.3 * 0.45;
    ctx.fillStyle = `rgba(0, 0, 0, ${1 - blurAlpha})`;
  } else {
    ctx.fillStyle = '#000';
  }
  ctx.fillRect(0, 0, CONFIG.width, CONFIG.height);

  // Subtle radial gradient — slightly lighter center, black edges
  const grad = ctx.createRadialGradient(
    CONFIG.width / 2, CONFIG.height / 2, 0,
    CONFIG.width / 2, CONFIG.height / 2, CONFIG.width * 0.7
  );
  grad.addColorStop(0, 'rgba(255, 255, 255, 0.09)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, CONFIG.width, CONFIG.height);

  drawTracks();

  // Draw obstacles
  for (const ob of state.obstacles) {
    let screenX = ob.x - state.worldX + CONFIG.width / 2;
    const screenY = ob.y - state.worldY + state.skierY;

    // Wrap horizontally
    screenX = wrapScreenX(screenX);

    if (screenX < -50 || screenX > CONFIG.width + 50 ||
        screenY < -50 || screenY > CONFIG.height + 50) continue;

    const sprite = SPRITES[ob.type];
    if (sprite) {
      if (ob.wipedOut) {
        // Wiped-out NPC spins and fades away
        const alpha = Math.min(1, ob.wipeoutTimer / 40);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(screenX, screenY);
        ctx.rotate(ob.wipeoutSpin);
        ctx.drawImage(sprite, -sprite.width / 2, -sprite.height / 2);
        ctx.restore();
        ctx.globalAlpha = 1;
      } else {
        ctx.drawImage(sprite, screenX - sprite.width / 2, screenY - sprite.height / 2);
      }
    }
  }

  // Draw yeti
  if (state.yetiActive) {
    let yx = state.yetiX - state.worldX + CONFIG.width / 2;
    const yy = state.yetiY - state.worldY + state.skierY;
    yx = wrapScreenX(yx);
    if (yx > -50 && yx < CONFIG.width + 50 && yy > -50 && yy < CONFIG.height + 50) {
      ctx.drawImage(SPRITES.yeti, yx - 16, yy - 20);
    }
  }

  drawSkier();

  // Snow particles
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  for (const p of state.particles) {
    ctx.fillRect(p.x, p.y, p.size, p.size);
  }

  // Jump shadow
  if (state.jumping) {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.ellipse(state.skierX, state.skierY + 12, 10, 4, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Bonus text (styled on skier etc.)
  if (state.bonusText && state.bonusTextTimer > 0) {
    const alpha = Math.min(1, state.bonusTextTimer / 25);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#00ffcc';
    ctx.font = 'bold 22px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(state.bonusText, state.bonusTextX, state.bonusTextY);
    ctx.textAlign = 'left';
    ctx.globalAlpha = 1;
  }
}

function drawSkier() {
  let sprite;
  let offsetY = -state.jumpHeight;
  const board = state.isSnowboarder;

  if (state.crashed) {
    sprite = board ? SPRITES.boarderCrash : SPRITES.skierCrash;
  } else if (state.jumping) {
    sprite = board ? SPRITES.boarderJump : SPRITES.skierJump;
  } else {
    switch (state.skierDirection) {
      case -3: sprite = board ? SPRITES.boarderHardLeft : SPRITES.skierHardLeft; break;
      case -2: sprite = board ? SPRITES.boarderHardLeft : SPRITES.skierHardLeft; break;
      case -1: sprite = board ? SPRITES.boarderLeft : SPRITES.skierLeft; break;
      case 0:  sprite = board ? SPRITES.boarderDown : SPRITES.skierDown; break;
      case 1:  sprite = board ? SPRITES.boarderRight : SPRITES.skierRight; break;
      case 2:  sprite = board ? SPRITES.boarderHardRight : SPRITES.skierHardRight; break;
      case 3:  sprite = board ? SPRITES.boarderHardRight : SPRITES.skierHardRight; break;
    }
  }

  if (sprite) {
    const drawX = state.skierX;
    const drawY = state.skierY + offsetY;
    const hasTrick = state.jumping && (Math.abs(state.trickSpin) > 0.05 || Math.abs(state.trickFlip) > 0.05);

    if (hasTrick) {
      ctx.save();
      ctx.translate(drawX, drawY);

      // Spin = Z-axis rotation (visible as normal rotation)
      ctx.rotate(state.trickSpin);

      // Flip = simulate with vertical scaling (flip around X axis)
      // cos of flip angle gives a scale from 1 to -1 and back
      const flipScale = Math.cos(state.trickFlip);
      ctx.scale(1, flipScale);

      ctx.drawImage(sprite, -sprite.width / 2, -sprite.height / 2);
      ctx.restore();
    } else {
      ctx.drawImage(sprite, drawX - sprite.width / 2, drawY - sprite.height / 2);
    }
  }

  // Draw trick name when landed
  if (state.trickLanded && state.trickLandedTimer > 0) {
    const alpha = Math.min(1, state.trickLandedTimer / 30);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#ffcc00';
    ctx.font = 'bold 20px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(state.trickLanded, state.skierX, state.skierY - 40);
    ctx.textAlign = 'left';
    ctx.globalAlpha = 1;
  }
}

function drawTracks() {
  if (state.trail.length < 2) return;

  const camY = state.worldY - state.skierY;

  for (let i = 1; i < state.trail.length; i++) {
    const prev = state.trail[i - 1];
    const curr = state.trail[i];

    // Skip gap markers (jumps break the trail)
    if (prev.gap || curr.gap) continue;

    // Convert world coords to screen coords, accounting for skier's screen offset at that moment
    const x0 = prev.sx + (prev.wx - state.worldX);
    const y0 = prev.wy - camY;
    const x1 = curr.sx + (curr.wx - state.worldX);
    const y1 = curr.wy - camY;

    // Skip if both points are off screen
    if ((y0 < -10 && y1 < -10) || (y0 > CONFIG.height + 10 && y1 > CONFIG.height + 10)) continue;
    if ((x0 < -50 && x1 < -50) || (x0 > CONFIG.width + 50 && x1 > CONFIG.width + 50)) continue;

    if (curr.board) {
      // Snowboard: single wide track
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();
    } else {
      // Skier: two thin parallel tracks
      const dx = x1 - x0;
      const dy = y1 - y0;
      const len = Math.sqrt(dx * dx + dy * dy);
      if (len < 0.1) continue;
      // Perpendicular offset for the two ski tracks
      const px = (-dy / len) * 5;
      const py = (dx / len) * 5;

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x0 + px, y0 + py);
      ctx.lineTo(x1 + px, y1 + py);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x0 - px, y0 - py);
      ctx.lineTo(x1 - px, y1 - py);
      ctx.stroke();
    }
  }
}

// ── Start ──

document.addEventListener('DOMContentLoaded', init);
