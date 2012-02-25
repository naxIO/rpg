(game = @game).define 'spriteCollection', (name) ->
  ImageSequence = @ImageSequence
  imageCollection = @imageCollection

  sprites = {}

  add = (imagePath, width, height, frameIndices, opts={}) ->
    sprites[imagePath] = ImageSequence.create(imageCollection.get(imagePath), width, height, frameIndices, opts)

  #---

  add 'flower', 16, 16, [2, 0, 1], frameDuration: 6, doesRepeat: true

  #---

  return {
    get: (name) -> sprites[name]
  }