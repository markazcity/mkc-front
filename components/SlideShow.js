'use strict';

function __$$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactDom = require('react-dom');

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var performanceNow = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);


});

var root = typeof window === 'undefined' ? commonjsGlobal : window;
var vendors = ['moz', 'webkit'];
var suffix = 'AnimationFrame';
var raf = root['request' + suffix];
var caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60;

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = performanceNow()
        , next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last);
            } catch(e) {
              setTimeout(function() { throw e }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id
  };

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

var raf_1 = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
};
var cancel = function() {
  caf.apply(root, arguments);
};
var polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};

raf_1.cancel = cancel;
raf_1.polyfill = polyfill;

var css = ".box-gallery,\n.box-gallery div {\n  position: absolute;\n  top: 0;\n  left: 0;\n   width: 100%;\n  height: 100%;\n   user-select: none;\n}\n\n.box-gallery .box-panel {\n  z-index: -10;\n  -webkit-perspective: 1200px;\n  perspective: 1200px;\n}\n\n.box-gallery,\n.box-gallery .bg-tile,\n.box-gallery .bg-img {\n  overflow: hidden;\n}\n\n.box-gallery .bg-tile {\n  width: 50%;\n  height: 50%;\n}\n\n.box-gallery img {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.box-gallery .bg-img {\n  background: #999;\n}\n\n.box-gallery .bg-img img {\n  display: block;\n  height: 200%;\n}\n\n.box-gallery .bg-tile:nth-child(2),\n.box-gallery .bg-tile:nth-child(4) {\n  left: 50%;\n}\n\n.box-gallery .bg-tile:nth-child(3),\n.box-gallery .bg-tile:nth-child(4) {\n  top: 50%;\n}\n\n.box-gallery .bg-tile:nth-child(2) .bg-img img,\n.box-gallery .bg-tile:nth-child(4) .bg-img img {\n  left: -100%;\n}\n\n.box-gallery .bg-tile:nth-child(3) .bg-img img,\n.box-gallery .bg-tile:nth-child(4) .bg-img img {\n  top: -100%;\n}\n\n@media screen and (min-aspect-ratio: 1546/1067) {\n  .box-gallery .bg-img img {\n    width: 200%;\n    height: auto;\n  }\n}\n\n.box-gallery .box-panel.current {\n  z-index: 2;\n}\n\n.box-gallery .box-panel.current .bg-img {\n  -webkit-transition: -webkit-transform 1.1s ease-in-out;\n  transition: transform 1.1s ease-in-out;\n}\n\n.box-gallery .box-panel.active {\n  z-index: 1;\n}\n\n.box-gallery.effect-1 .box-panel.active .bg-tile,\n.box-gallery.effect-2 .box-panel.active .bg-tile {\n  -webkit-animation: scaleDown 1.1s ease-in-out;\n  animation: scaleDown 1.1s ease-in-out;\n}\n\n@-webkit-keyframes scaleDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 380px);\n    transform: translate3d(0, 0, 380px);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes scaleDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 380px);\n    transform: translate3d(0, 0, 380px);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.box-gallery.effect-2 .box-panel.current .bg-img {\n  -webkit-transition: -webkit-transform 0.9s cubic-bezier(0.7, 0, 0.3, 1);\n  transition: transform 0.9s cubic-bezier(0.7, 0, 0.3, 1);\n}\n\n.box-gallery.effect-2 .box-panel.current .bg-tile:nth-child(2) .bg-img {\n  -webkit-transition-delay: 0.15s;\n  transition-delay: 0.15s;\n}\n\n.box-gallery.effect-2 .box-panel.current .bg-tile:nth-child(3) .bg-img {\n  -webkit-transition-delay: 0.3s;\n  transition-delay: 0.3s;\n}\n\n.box-gallery.effect-2 .box-panel.current .bg-tile:nth-child(4) .bg-img {\n  -webkit-transition-delay: 0.45s;\n  transition-delay: 0.45s;\n}\n\n.box-gallery.effect-3 .box-panel::after {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  content: '';\n  transition: opacity 1.1s ease-in-out;\n}\n\n.box-gallery.effect-3 .box-panel.current::after,\n.box-gallery.effect-3 .box-panel.active::after {\n  opacity: 0;\n}\n\n.box-gallery.effect-3 .box-panel.current::after {\n  transition: none;\n}\n\n.box-gallery.effect-3 .box-panel.current .bg-img {\n  transition: transform 1.1s cubic-bezier(0.7, 0, 0.3, 1);\n}\n\n.box-gallery.effect-3 .box-panel.current .bg-tile:nth-child(2) .bg-img {\n  transition-delay: 0.15s;\n}\n\n.box-gallery.effect-3 .box-panel.current .bg-tile:nth-child(3) .bg-img {\n  transition-delay: 0.3s;\n}\n\n.box-gallery.effect-3 .box-panel.current .bg-tile:nth-child(4) .bg-img {\n  transition-delay: 0.45s;\n}\n";
__$$styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * @class ReactBackgroundSlideshow
 *
 * Component that displays a tiled background slideshow of images.
 *
 * Based off of this codrops article:
 * http://tympanus.net/codrops/2014/06/11/how-to-create-a-tiled-background-slideshow
 */

var tiles = [0, 1, 2, 3];

var ReactBackgroundSlideshow = function (_Component) {
  inherits(ReactBackgroundSlideshow, _Component);

  function ReactBackgroundSlideshow() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ReactBackgroundSlideshow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ReactBackgroundSlideshow.__proto__ || Object.getPrototypeOf(ReactBackgroundSlideshow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isAnimating: false,
      direction: 'next',
      current: typeof _this.props.startAt !== 'undefined' ? _this.props.startAt : Math.random() * _this.props.images.length | 0,
      effect: Math.random() * 3 | 0
    }, _this._resetTransforms = function () {
      _this._resizeRaf = null;

      var doc = window.document.documentElement;
      var width = Math.max(doc.clientWidth, window.innerWidth);
      var height = Math.max(doc.clientHeight, window.innerHeight);

      var w = width / 2 + 10;
      var h = height / 2 + 10;

      _this._transforms = {
        'effect-1': {
          'next': ['translate3d(0, ' + h + 'px, 0)', // transforms for 1 panel
          'translate3d(-' + w + 'px, 0, 0)', // transforms for 2 panel
          'translate3d(' + w + 'px, 0, 0)', // transforms for 3 panel
          'translate3d(0, -' + h + 'px, 0)' // transforms for 4 panel
          ],
          'prev': ['translate3d(' + w + 'px, 0, 0)', 'translate3d(0, ' + h + 'px, 0)', 'translate3d(0, -' + h + 'px, 0)', 'translate3d(-' + w + 'px, 0, 0)']
        },

        'effect-2': {
          'next': ['translate3d(-' + w + 'px, 0, 0)', 'translate3d(' + w + 'px, 0, 0)', 'translate3d(-' + w + 'px, 0, 0)', 'translate3d(' + w + 'px, 0, 0)'],
          'prev': ['translate3d(0,-' + h + 'px, 0)', 'translate3d(0,-' + h + 'px, 0)', 'translate3d(0,' + h + 'px, 0)', 'translate3d(0,' + h + 'px, 0)']
        },

        'effect-3': {
          'next': ['translate3d(0,' + h + 'px, 0)', 'translate3d(0,' + h + 'px, 0)', 'translate3d(0,' + h + 'px, 0)', 'translate3d(0,' + h + 'px, 0)'],
          'prev': ['translate3d(0,-' + h + 'px, 0)', 'translate3d(0,-' + h + 'px, 0)', 'translate3d(0,-' + h + 'px, 0)', 'translate3d(0,-' + h + 'px, 0)']
        }
      };
    }, _this._onResize = function () {
      if (!_this._resizeRaf) {
        _this._resizeRaf = raf_1(_this._resetTransforms);
      }
    }, _this._onTransition = function () {
      if (_this.state.isAnimating || _this._isAnimating) return false;
      _this._isAnimating = true;

      if (_this._timeout) {
        clearTimeout(_this._timeout);
        _this._timeout = null;
      }

      var _this$state = _this.state,
          effect = _this$state.effect,
          current = _this$state.current;


      var nextEffect = void 0;
      do {
        nextEffect = Math.min(2, Math.random() * 3 | 0);
      } while (nextEffect === effect);

      var currentPanel = _this._getPanel(current);
      _this._transitionCount = 0;
      currentPanel.addEventListener('transitionend', _this._onTransitionEnd);

      _this.setState({
        isAnimating: true,
        effect: nextEffect
      });
    }, _this._onTransitionEnd = function (event) {
      var current = _this.state.current;


      if (!event || !event.target.className === 'bg-img') return false;
      if (++_this._transitionCount < tiles.length) return false;

      var currentPanel = _this._getPanel(current);
      currentPanel.removeEventListener('transitionend', _this._onTransitionEnd);

      _this.setState({
        isAnimating: false,
        current: _this._getNextPanel()
      }, function () {
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            _this$props$images = _this$props.images,
            images = _this$props$images === undefined ? [] : _this$props$images;
        var current = _this.state.current;

        var image = images[current];
        if (onChange) {
          onChange({ index: current, image: image });
        }
        _this._isAnimating = false;
        _this._resetTransitionTimeout();
      });
    }, _this._getNextPanel = function () {
      var images = _this.props.images;
      var _this$state2 = _this.state,
          direction = _this$state2.direction,
          current = _this$state2.current;


      if (direction === 'next') {
        return current < images.length - 1 ? current + 1 : 0;
      } else {
        return current > 0 ? current - 1 : images.length - 1;
      }
    }, _this._getPanel = function (panel) {
      return reactDom.findDOMNode(_this.refs['panel-' + panel]);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ReactBackgroundSlideshow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this._onResize);

      this._isAnimating = false;
      this._resetTransforms();
      this._resetTransitionTimeout();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._onResize);

      if (this._timeout) {
        clearTimeout(this._timeout);
        this._timeout = null;
      }

      if (this._resizeRaf) {
        raf_1.cancel(this._resizeRaf);
        this._resizeRaf = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          alt = _props.alt,
          disableClick = _props.disableClick,
          images = _props.images;
      var _state = this.state,
          isAnimating = _state.isAnimating,
          direction = _state.direction,
          current = _state.current,
          effect = _state.effect;


      var next = this._getNextPanel();
      var effectName = 'effect-' + (effect + 1);

      return React__default.createElement(
        'div',
        {
          className: 'box-gallery ' + effectName,
          onClick: disableClick ? null : this._onTransition
        },
        images.map(function (image, i) {
          var isCurrent = i === current;
          var isActive = i === next && isAnimating;

          return React__default.createElement(
            'div',
            {
              className: 'box-panel ' + (isCurrent ? 'current' : '') + ' ' + (isActive ? 'active' : ''),
              ref: 'panel-' + i,
              key: i
            },
            tiles.map(function (_, j) {
              var transform = isCurrent && isAnimating ? _this2._transforms[effectName][direction][j] : null;

              var style = transform ? { transform: transform, WebkitTransform: transform } : null;

              return React__default.createElement(
                'div',
                { className: 'bg-tile', key: j },
                React__default.createElement(
                  'div',
                  {
                    className: 'bg-img',
                    style: style
                  },
                  React__default.createElement('img', { src: image, alt: alt })
                )
              );
            })
          );
        })
      );
    }
  }, {
    key: '_resetTransitionTimeout',
    value: function _resetTransitionTimeout() {
      var _props2 = this.props,
          animationDelay = _props2.animationDelay,
          disableInterval = _props2.disableInterval;


      if (!disableInterval) {
        this._timeout = setTimeout(this._onTransition, animationDelay);
      }
    }
  }]);
  return ReactBackgroundSlideshow;
}(React.Component);

ReactBackgroundSlideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  disableClick: PropTypes.bool,
  disableInterval: PropTypes.bool,
  animationDelay: PropTypes.number,
  alt: PropTypes.string,
  onChange: PropTypes.func,
  startAt: PropTypes.number,
};
ReactBackgroundSlideshow.defaultProps = {
  alt: 'background slideshow',
  animationDelay: 10000,
  disableClick: false,
  disableInterval: false
};

module.exports = ReactBackgroundSlideshow;
