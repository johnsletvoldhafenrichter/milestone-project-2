class StartScenePlatform extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScenePlatform' })
    }

    create() {
        this.add.text(150, 250, 'Click to start!', { fill: '#000000', fontSize: '20px' });
        this.input.on('pointerdown', () => {
            this.scene.stop('StarScenePlatform')
            this.scene.start('GameScenePlatform')
        });
    }
}