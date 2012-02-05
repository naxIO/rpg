define (require) ->
  {Map} = require('app/maps')
  {images} = require('app/images')(main)

  (maps) ->
    sprites = require('app/sprites')(main)

    map = Map.create('lw_52', 1024, 1024)
      .withBackground (bg) ->
                           # (x1, y1), (width, height)
        bg.fill '#48a048', [0, 0], [1024, 1024]
        bg.fill '#3860b0', [944, 0], [80, 688]
        bg.fill '#3860b0', [832, 96], [112, 496]
        bg.add sprites['flower'],
          [160, 608]
          [320, 320]
          [336, 336]
          [352, 160]
          [352, 320]
          [368, 176]
          [384, 32 ]
          [384, 128]
          [384, 160]
          [400, 144]
          [704, 320]
          [720, 336]
          [736, 288]
          [736, 320]
          [768, 512]
          [768, 512]
          [784, 528]
          [800, 512]
        bg.add images['links_house'], [288, 352]
        #bg.add sprites['waves'], [whatever, whatever], frameDelay: 2

      .withForeground (fg) ->
        guard = require('app/mobs/guard')
        # TODO: Get this to work
        fg.add guard,
          [407, 944]
          [478, 944]
          [950, 752]
          [950, 816]

    return map
