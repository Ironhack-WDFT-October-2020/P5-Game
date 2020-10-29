class Background {
  constructor(ImageArray) {
    this.images = ImageArray;
  }

  drawBackground() {
    // image(this.images[0].src, this.x, 0, width, height);
    // image(this.images[1].src, this.x, 0, width, height);
    // image(this.images[2].src, this.x, 0, width, height);
    // image(this.images[3].src, this.x, 0, width, height);

    this.images.forEach(function (backgroundImage) {
      backgroundImage.x -= backgroundImage.speed;
      image(backgroundImage.src, backgroundImage.x, 0, width, height);
      image(backgroundImage.src, backgroundImage.x - width, 0, width, height);
      if (backgroundImage.x < 0) {
        backgroundImage.x = width;
      }
    });
  }
}
