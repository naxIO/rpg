var __slice = Array.prototype.slice;

define(function(require) {
  var Bounds, attachable, canvas, meta, tickable, viewport, _ref;
  meta = require('app/meta2');
  _ref = require('app/roles'), attachable = _ref.attachable, tickable = _ref.tickable;
  Bounds = require('app/bounds');
  canvas = require('app/canvas');
  viewport = meta.def('game.viewport', attachable, tickable, {
    width: 512,
    height: 448,
    init: function(core) {
      this.core = core;
      return this._super(this.core);
    },
    setElement: function() {
      return this.$element = $('<div id="viewport" />').css({
        width: this.width,
        height: this.height,
        'background-repeat': 'no-repeat'
      });
    },
    attach: function() {
      return this._super();
    },
    tick: function() {
      return this.draw();
    },
    draw: function() {
      var bom, positionStr;
      bom = this.bounds;
      positionStr = [-bom.x1 + 'px', -bom.y1 + 'px'].join(" ");
      return this.$element.css('background-position', positionStr);
    },
    setMap: function(map) {
      this.currentMap = map;
      this.$element.css('background-image', map.background.getDataUrl());
      this.$element.html(map.foreground.canvas);
      return this._setBounds();
    },
    translate: function() {
      var args, _ref2;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      (_ref2 = this.bounds).translate.apply(_ref2, args);
      return this;
    },
    translateBySide: function(side, value) {
      return this.bounds.translateBySide(side, value);
    },
    inspect: function() {
      return JSON.stringify({
        "bounds": this.bounds.inspect()
      });
    },
    debug: function() {
      return console.log("viewport.bounds = " + (this.bounds.inspect()));
    },
    _setBounds: this.bounds = Bounds.rect(0, 0, this.width, this.height)
  });
  return viewport;
});
