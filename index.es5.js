import require$$0 from 'fs';
import require$$0$1, { join } from 'path';

var DimensionLevel;
(function (DimensionLevel) {
    DimensionLevel["LOW"] = "low";
    DimensionLevel["AVERAGE"] = "average";
    DimensionLevel["HIGH"] = "high";
})(DimensionLevel || (DimensionLevel = {}));
// https://www.thesaurus.com/e/writing/1st-person-vs-2nd-person-vs-3rd-person-pov/
var Perspective;
(function (Perspective) {
    Perspective[Perspective["FIRST_PERSON"] = 1] = "FIRST_PERSON";
    Perspective[Perspective["SECOND_PERSON"] = 2] = "SECOND_PERSON";
    Perspective[Perspective["THIRD_PERSON"] = 3] = "THIRD_PERSON";
})(Perspective || (Perspective = {}));
var DescriptorModule;
(function (DescriptorModule) {
    DescriptorModule[DescriptorModule["TALENT_ACQUISITION"] = 0] = "TALENT_ACQUISITION";
    DescriptorModule[DescriptorModule["TALENT_MANAGEMENT"] = 1] = "TALENT_MANAGEMENT";
})(DescriptorModule || (DescriptorModule = {}));
const DefaultDomainDetailSize = 5;

var JobApplicationScoreType;
(function (JobApplicationScoreType) {
    JobApplicationScoreType["ROLE_FIT"] = "role_fit";
    JobApplicationScoreType["CULTURE_FIT"] = "culture_fit";
    JobApplicationScoreType["HARD_SKILL"] = "hard_skill";
    JobApplicationScoreType["WORK_EXPERIENCE"] = "work_experience";
    JobApplicationScoreType["REASONING_LOGICAL"] = "reasoning_logical";
    JobApplicationScoreType["REASONING_NUMERIC"] = "reasoning_numeric";
    JobApplicationScoreType["REASONING_VERBAL"] = "reasoning_verbal";
    JobApplicationScoreType["REASONING_AVERAGE"] = "reasoning_average";
    JobApplicationScoreType["WORK_STYLE"] = "work_style";
    JobApplicationScoreType["WORK_VALUE"] = "work_value";
    JobApplicationScoreType["WORK_INTEREST"] = "work_interest";
    JobApplicationScoreType["BIG_FIVE"] = "big_five";
    JobApplicationScoreType["ADDITIONAL_FOUR"] = "additional_four";
    JobApplicationScoreType["JOB_OUTCOME"] = "job_outcome";
})(JobApplicationScoreType || (JobApplicationScoreType = {}));
var DescriptorType;
(function (DescriptorType) {
    DescriptorType["SUMMARY"] = "summary";
    DescriptorType["THRIVE"] = "thrive";
    DescriptorType["WORKING_WITH"] = "working_with";
    DescriptorType["WATCH_OUT"] = "watch_out";
    DescriptorType["DESCRIPTORS"] = "descriptors";
})(DescriptorType || (DescriptorType = {}));
var DimensionType;
(function (DimensionType) {
    DimensionType["STRENGTH"] = "strength";
    DimensionType["AVERAGE"] = "average";
    DimensionType["DEVELOPMENT"] = "development";
    DimensionType["DEVELOPMENT_AREA"] = "development_area";
})(DimensionType || (DimensionType = {}));
var LegacyBig5Type;
(function (LegacyBig5Type) {
    LegacyBig5Type["STRENGTH"] = "Strength";
    LegacyBig5Type["AVERAGE"] = "Average";
    LegacyBig5Type["DEVELOPMENT"] = "Development";
})(LegacyBig5Type || (LegacyBig5Type = {}));

var Locale;
(function (Locale) {
    Locale["EN_US"] = "en-US";
    Locale["PT_BR"] = "pt-BR";
    Locale["ID_ID"] = "id-ID";
    Locale["ES_ES"] = "es-ES";
    Locale["FR_FR"] = "fr-FR";
    Locale["JA_JP"] = "ja-JP";
    Locale["TH_TH"] = "th-TH";
    Locale["TR_TR"] = "tr-TR";
    Locale["VI_VN"] = "vi-VN";
})(Locale || (Locale = {}));
const SupportedLocales = Object.values(Locale);
const DefaultLocale = Locale.EN_US;

function _typeof$2(o) {
  "@babel/helpers - typeof";

  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$2(o);
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function toPrimitive(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableRest();
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};

var Logger = function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$1(this, Logger);

    this.init(concreteLogger, options);
  }

  _createClass$1(Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, _objectSpread(_objectSpread({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function clone(options) {
      options = options || this.options;
      options.prefix = options.prefix || this.prefix;
      return new Logger(this.logger, options);
    }
  }]);

  return Logger;
}();

var baseLogger = new Logger();

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck$1(this, EventEmitter);

    this.observers = {};
  }

  _createClass$1(EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];

        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event]) return;

      if (!listener) {
        delete this.observers[event];
        return;
      }

      this.observers[event] = this.observers[event].filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }

      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);

        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  return '' + object;
}
function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath$1(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();

    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath$1(object, path, newValue) {
  var _getLastOfPath = getLastOfPath$1(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}
function pushPath$1(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath$1(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath$1(object, path) {
  var _getLastOfPath3 = getLastOfPath$1(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath$1(data, key);

  if (value !== undefined) {
    return value;
  }

  return getPath$1(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
function escape$1(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}
var isIE10 = typeof window !== 'undefined' && window.navigator && typeof window.navigator.userAgentData === 'undefined' && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;
var chars = [' ', ',', '?', '!', ';'];
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || '';
  keySeparator = keySeparator || '';
  var possibleChars = chars.filter(function (c) {
    return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
  });
  if (possibleChars.length === 0) return true;
  var r = new RegExp("(".concat(possibleChars.map(function (c) {
    return c === '?' ? '\\?' : c;
  }).join('|'), ")"));
  var matched = !r.test(key);

  if (!matched) {
    var ki = key.indexOf(keySeparator);

    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }

  return matched;
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function deepFind(obj, path) {
  var keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  if (!obj) return undefined;
  if (obj[path]) return obj[path];
  var paths = path.split(keySeparator);
  var current = obj;

  for (var i = 0; i < paths.length; ++i) {
    if (!current) return undefined;

    if (typeof current[paths[i]] === 'string' && i + 1 < paths.length) {
      return undefined;
    }

    if (current[paths[i]] === undefined) {
      var j = 2;
      var p = paths.slice(i, i + j).join(keySeparator);
      var mix = current[p];

      while (mix === undefined && paths.length > i + j) {
        j++;
        p = paths.slice(i, i + j).join(keySeparator);
        mix = current[p];
      }

      if (mix === undefined) return undefined;
      if (mix === null) return null;

      if (path.endsWith(p)) {
        if (typeof mix === 'string') return mix;
        if (p && typeof mix[p] === 'string') return mix[p];
      }

      var joinedPath = paths.slice(i + j).join(keySeparator);
      if (joinedPath) return deepFind(mix, joinedPath, keySeparator);
      return undefined;
    }

    current = current[paths[i]];
  }

  return current;
}

var ResourceStore = function (_EventEmitter) {
  _inherits(ResourceStore, _EventEmitter);

  var _super = _createSuper(ResourceStore);

  function ResourceStore(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };

    _classCallCheck$1(this, ResourceStore);

    _this = _super.call(this);

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }

    _this.data = data || {};
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    if (_this.options.ignoreJSONStructure === undefined) {
      _this.options.ignoreJSONStructure = true;
    }

    return _this;
  }

  _createClass$1(ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);

      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }

      var result = getPath$1(this.data, path);
      if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
      return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === undefined) keySeparator = '.';
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      setPath$1(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };

      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }

      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      var pack = getPath$1(this.data, path) || {};

      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = _objectSpread$1(_objectSpread$1({}, pack), resources);
      }

      setPath$1(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }

      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS;
      if (this.options.compatibilityAPI === 'v1') return _objectSpread$1(_objectSpread$1({}, {}), this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function hasLanguageSomeTranslations(lng) {
      var data = this.getDataByLanguage(lng);
      var n = data && Object.keys(data) || [];
      return !!n.find(function (v) {
        return data[v] && Object.keys(data[v]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);

  return ResourceStore;
}(EventEmitter);

var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var checkedLoadedFor = {};

var Translator = function (_EventEmitter) {
  _inherits(Translator, _EventEmitter);

  var _super = _createSuper$1(Translator);

  function Translator(services) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$1(this, Translator);

    _this = _super.call(this);

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized(_this));
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = baseLogger.create('translator');
    return _this;
  }

  _createClass$1(Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };

      if (key === undefined || key === null) {
        return false;
      }

      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS || [];
      var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
      var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);

      if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
        var m = key.match(this.interpolator.nestingRegexp);

        if (m && m.length > 0) {
          return {
            key: key,
            namespaces: namespaces
          };
        }

        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }

      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options, lastKey) {
      var _this2 = this;

      if (_typeof$2(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        options = this.options.overloadTranslationOptionHandler(arguments);
      }

      if (!options) options = {};
      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)];
      var returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;

      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;

      var namespace = namespaces[namespaces.length - 1];
      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;

          if (returnDetails) {
            resolved.res = "".concat(namespace).concat(nsSeparator).concat(key);
            return resolved;
          }

          return "".concat(namespace).concat(nsSeparator).concat(key);
        }

        if (returnDetails) {
          resolved.res = key;
          return resolved;
        }

        return key;
      }

      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          if (!this.options.returnedObjectHandler) {
            this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          }

          var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$2(_objectSpread$2({}, options), {}, {
            ns: namespaces
          })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");

          if (returnDetails) {
            resolved.res = r;
            return resolved;
          }

          return r;
        }

        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy = resTypeIsArray ? [] : {};
          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy[m] = this.translate(deepKey, _objectSpread$2(_objectSpread$2({}, options), {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy[m] === deepKey) copy[m] = res[m];
            }
          }

          res = copy;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options, lastKey);
      } else {
        var usedDefault = false;
        var usedKey = false;
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var hasDefaultValue = Translator.hasDefaultValue(options);
        var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
        var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;

        if (!this.isValidLookup(res) && hasDefaultValue) {
          usedDefault = true;
          res = defaultValue;
        }

        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }

        var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
        var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
        var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;

        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);

          if (keySeparator) {
            var fk = this.resolve(key, _objectSpread$2(_objectSpread$2({}, options), {}, {
              keySeparator: false
            }));
            if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
          }

          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }

          var send = function send(l, k, specificDefaultValue) {
            var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;

            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
            }

            _this2.emit('missingKey', l, namespace, k, res);
          };

          if (this.options.saveMissing) {
            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (language) {
                _this2.pluralResolver.getSuffixes(language, options).forEach(function (suffix) {
                  send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                });
              });
            } else {
              send(lngs, key, defaultValue);
            }
          }
        }

        res = this.extendTranslation(res, keys, options, resolved, lastKey);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);

        if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
          if (this.options.compatibilityAPI !== 'v1') {
            res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace, ":").concat(key) : key, usedDefault ? res : undefined);
          } else {
            res = this.options.parseMissingKeyHandler(res);
          }
        }
      }

      if (returnDetails) {
        resolved.res = res;
        return resolved;
      }

      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved, lastKey) {
      var _this3 = this;

      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        if (options.interpolation) this.interpolator.init(_objectSpread$2(_objectSpread$2({}, options), {
          interpolation: _objectSpread$2(_objectSpread$2({}, this.options.interpolation), options.interpolation)
        }));
        var skipOnVariables = typeof res === 'string' && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
        var nestBef;

        if (skipOnVariables) {
          var nb = res.match(this.interpolator.nestingRegexp);
          nestBef = nb && nb.length;
        }

        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);

        if (skipOnVariables) {
          var na = res.match(this.interpolator.nestingRegexp);
          var nestAft = na && na.length;
          if (nestBef < nestAft) options.nest = false;
        }

        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (lastKey && lastKey[0] === args[0] && !options.context) {
            _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));

            return null;
          }

          return _this3.translate.apply(_this3, args.concat([key]));
        }, options);
        if (options.interpolation) this.interpolator.reset();
      }

      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$2({
          i18nResolved: resolved
        }, options) : options, this);
      }

      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey;
      var exactUsedKey;
      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys];
      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;

        var extracted = _this4.extractFromKey(k, options);

        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';

        var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();

        var needsContextHandling = options.context !== undefined && (typeof options.context === 'string' || typeof options.context === 'number') && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;

          if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;

            _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
          }

          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKeys = [key];

            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
              var zeroSuffix = "".concat(_this4.options.pluralSeparator, "zero");

              if (needsPluralHandling) {
                finalKeys.push(key + pluralSuffix);

                if (needsZeroSuffixLookup) {
                  finalKeys.push(key + zeroSuffix);
                }
              }

              if (needsContextHandling) {
                var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                finalKeys.push(contextKey);

                if (needsPluralHandling) {
                  finalKeys.push(contextKey + pluralSuffix);

                  if (needsZeroSuffixLookup) {
                    finalKeys.push(contextKey + zeroSuffix);
                  }
                }
              }
            }

            var possibleKey;

            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }], [{
    key: "hasDefaultValue",
    value: function hasDefaultValue(options) {
      var prefix = 'defaultValue';

      for (var option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
          return true;
        }
      }

      return false;
    }
  }]);

  return Translator;
}(EventEmitter);

function capitalize$1(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil = function () {
  function LanguageUtil(options) {
    _classCallCheck$1(this, LanguageUtil);

    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }

  _createClass$1(LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      if (p[p.length - 1].toLowerCase() === 'x') return null;
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');

        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize$1(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase();
          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize$1(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize$1(p[2].toLowerCase());
        }

        return p.join('-');
      }

      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isSupportedCode",
    value: function isSupportedCode(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
        code = this.getLanguagePartFromCode(code);
      }

      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function getBestMatchFromCodes(codes) {
      var _this = this;

      if (!codes) return null;
      var found;
      codes.forEach(function (code) {
        if (found) return;

        var cleanedLng = _this.formatLanguageCode(code);

        if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
      });

      if (!found && this.options.supportedLngs) {
        codes.forEach(function (code) {
          if (found) return;

          var lngOnly = _this.getLanguagePartFromCode(code);

          if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
          found = _this.options.supportedLngs.find(function (supportedLng) {
            if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
          });
        });
      }

      if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || [];
      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this2 = this;

      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];

      var addCode = function addCode(c) {
        if (!c) return;

        if (_this2.isSupportedCode(c)) {
          codes.push(c);
        } else {
          _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
        }
      };

      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }

      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);

  return LanguageUtil;
}();

var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he', 'iw'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
var deprecatedJsonVersions = ['v1', 'v2', 'v3'];
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver = function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$1(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');

    if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
      this.options.compatibilityJSON = 'v3';
      this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
    }

    this.rules = createRules();
  }

  _createClass$1(PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.shouldUseIntlApi()) {
        try {
          return new Intl.PluralRules(code, {
            type: options.ordinal ? 'ordinal' : 'cardinal'
          });
        } catch (_unused) {
          return;
        }
      }

      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var rule = this.getRule(code, options);

      if (this.shouldUseIntlApi()) {
        return rule && rule.resolvedOptions().pluralCategories.length > 1;
      }

      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.getSuffixes(code, options).map(function (suffix) {
        return "".concat(key).concat(suffix);
      });
    }
  }, {
    key: "getSuffixes",
    value: function getSuffixes(code) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var rule = this.getRule(code, options);

      if (!rule) {
        return [];
      }

      if (this.shouldUseIntlApi()) {
        return rule.resolvedOptions().pluralCategories.sort(function (pluralCategory1, pluralCategory2) {
          return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
        }).map(function (pluralCategory) {
          return "".concat(_this.options.prepend).concat(pluralCategory);
        });
      }

      return rule.numbers.map(function (number) {
        return _this.getSuffix(code, number, options);
      });
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var rule = this.getRule(code, options);

      if (rule) {
        if (this.shouldUseIntlApi()) {
          return "".concat(this.options.prepend).concat(rule.select(count));
        }

        return this.getSuffixRetroCompatible(rule, count);
      }

      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function getSuffixRetroCompatible(rule, count) {
      var _this2 = this;

      var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
      var suffix = rule.numbers[idx];

      if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        if (suffix === 2) {
          suffix = 'plural';
        } else if (suffix === 1) {
          suffix = '';
        }
      }

      var returnSuffix = function returnSuffix() {
        return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
      };

      if (this.options.compatibilityJSON === 'v1') {
        if (suffix === 1) return '';
        if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
        return returnSuffix();
      } else if (this.options.compatibilityJSON === 'v2') {
        return returnSuffix();
      } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        return returnSuffix();
      }

      return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function shouldUseIntlApi() {
      return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
    }
  }]);

  return PluralResolver;
}();

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Interpolator = function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck$1(this, Interpolator);

    this.logger = baseLogger.create('interpolator');
    this.options = options;

    this.format = options.interpolation && options.interpolation.format || function (value) {
      return value;
    };

    this.init(options);
  }

  _createClass$1(Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape$1;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
      this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;

      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }

      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          var path = getPathWithDefaults(data, defaultData, key);
          return _this.alwaysFormat ? _this.format(path, undefined, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
            interpolationkey: key
          })) : path;
        }

        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
          interpolationkey: k
        }));
      };

      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
      var todos = [{
        regex: this.regexpUnescape,
        safeValue: function safeValue(val) {
          return regexSafe(val);
        }
      }, {
        regex: this.regexp,
        safeValue: function safeValue(val) {
          return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
        }
      }];
      todos.forEach(function (todo) {
        replaces = 0;

        while (match = todo.regex.exec(str)) {
          var matchedVar = match[1].trim();
          value = handleFormat(matchedVar);

          if (value === undefined) {
            if (typeof missingInterpolationHandler === 'function') {
              var temp = missingInterpolationHandler(str, match, options);
              value = typeof temp === 'string' ? temp : '';
            } else if (options && options.hasOwnProperty(matchedVar)) {
              value = '';
            } else if (skipOnVariables) {
              value = match[0];
              continue;
            } else {
              _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));

              value = '';
            }
          } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
            value = makeString(value);
          }

          var safeValue = todo.safeValue(value);
          str = str.replace(match[0], safeValue);

          if (skipOnVariables) {
            todo.regex.lastIndex += value.length;
            todo.regex.lastIndex -= match[0].length;
          } else {
            todo.regex.lastIndex = 0;
          }

          replaces++;

          if (replaces >= _this.maxReplaces) {
            break;
          }
        }
      });
      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var _this2 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;

      var clonedOptions = _objectSpread$3({}, options);

      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;

      function handleHasOptions(key, inheritedOptions) {
        var sep = this.nestingOptionsSeparator;
        if (key.indexOf(sep) < 0) return key;
        var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
        var optionsString = "{".concat(c[1]);
        key = c[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        var matchedSingleQuotes = optionsString.match(/'/g);
        var matchedDoubleQuotes = optionsString.match(/"/g);

        if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
          optionsString = optionsString.replace(/'/g, '"');
        }

        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
        } catch (e) {
          this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
          return "".concat(key).concat(sep).concat(optionsString);
        }

        delete clonedOptions.defaultValue;
        return key;
      }

      while (match = this.nestingRegexp.exec(str)) {
        var formatters = [];
        var doReduce = false;

        if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
          var r = match[1].split(this.formatSeparator).map(function (elem) {
            return elem.trim();
          });
          match[1] = r.shift();
          formatters = r;
          doReduce = true;
        }

        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
        if (value && match[0] === str && typeof value !== 'string') return value;
        if (typeof value !== 'string') value = makeString(value);

        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        }

        if (doReduce) {
          value = formatters.reduce(function (v, f) {
            return _this2.format(v, f, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
              interpolationkey: match[1].trim()
            }));
          }, value.trim());
        }

        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }

      return str;
    }
  }]);

  return Interpolator;
}();

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function parseFormatStr(formatStr) {
  var formatName = formatStr.toLowerCase().trim();
  var formatOptions = {};

  if (formatStr.indexOf('(') > -1) {
    var p = formatStr.split('(');
    formatName = p[0].toLowerCase().trim();
    var optStr = p[1].substring(0, p[1].length - 1);

    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      var opts = optStr.split(';');
      opts.forEach(function (opt) {
        if (!opt) return;

        var _opt$split = opt.split(':'),
            _opt$split2 = _toArray(_opt$split),
            key = _opt$split2[0],
            rest = _opt$split2.slice(1);

        var val = rest.join(':').trim().replace(/^'+|'+$/g, '');
        if (!formatOptions[key.trim()]) formatOptions[key.trim()] = val;
        if (val === 'false') formatOptions[key.trim()] = false;
        if (val === 'true') formatOptions[key.trim()] = true;
        if (!isNaN(val)) formatOptions[key.trim()] = parseInt(val, 10);
      });
    }
  }

  return {
    formatName: formatName,
    formatOptions: formatOptions
  };
}

function createCachedFormatter(fn) {
  var cache = {};
  return function invokeFormatter(val, lng, options) {
    var key = lng + JSON.stringify(options);
    var formatter = cache[key];

    if (!formatter) {
      formatter = fn(lng, options);
      cache[key] = formatter;
    }

    return formatter(val);
  };
}

var Formatter = function () {
  function Formatter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck$1(this, Formatter);

    this.logger = baseLogger.create('formatter');
    this.options = options;
    this.formats = {
      number: createCachedFormatter(function (lng, options) {
        var formatter = new Intl.NumberFormat(lng, options);
        return function (val) {
          return formatter.format(val);
        };
      }),
      currency: createCachedFormatter(function (lng, options) {
        var formatter = new Intl.NumberFormat(lng, _objectSpread$4(_objectSpread$4({}, options), {}, {
          style: 'currency'
        }));
        return function (val) {
          return formatter.format(val);
        };
      }),
      datetime: createCachedFormatter(function (lng, options) {
        var formatter = new Intl.DateTimeFormat(lng, _objectSpread$4({}, options));
        return function (val) {
          return formatter.format(val);
        };
      }),
      relativetime: createCachedFormatter(function (lng, options) {
        var formatter = new Intl.RelativeTimeFormat(lng, _objectSpread$4({}, options));
        return function (val) {
          return formatter.format(val, options.range || 'day');
        };
      }),
      list: createCachedFormatter(function (lng, options) {
        var formatter = new Intl.ListFormat(lng, _objectSpread$4({}, options));
        return function (val) {
          return formatter.format(val);
        };
      })
    };
    this.init(options);
  }

  _createClass$1(Formatter, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var iOpts = options.interpolation;
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
    }
  }, {
    key: "add",
    value: function add(name, fc) {
      this.formats[name.toLowerCase().trim()] = fc;
    }
  }, {
    key: "addCached",
    value: function addCached(name, fc) {
      this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
    }
  }, {
    key: "format",
    value: function format(value, _format, lng, options) {
      var _this = this;

      var formats = _format.split(this.formatSeparator);

      var result = formats.reduce(function (mem, f) {
        var _parseFormatStr = parseFormatStr(f),
            formatName = _parseFormatStr.formatName,
            formatOptions = _parseFormatStr.formatOptions;

        if (_this.formats[formatName]) {
          var formatted = mem;

          try {
            var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
            var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
            formatted = _this.formats[formatName](mem, l, _objectSpread$4(_objectSpread$4(_objectSpread$4({}, formatOptions), options), valOptions));
          } catch (error) {
            _this.logger.warn(error);
          }

          return formatted;
        } else {
          _this.logger.warn("there was no format function for ".concat(formatName));
        }

        return mem;
      }, value);
      return result;
    }
  }]);

  return Formatter;
}();

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function removePending(q, name) {
  if (q.pending[name] !== undefined) {
    delete q.pending[name];
    q.pendingCount--;
  }
}

var Connector = function (_EventEmitter) {
  _inherits(Connector, _EventEmitter);

  var _super = _createSuper$2(Connector);

  function Connector(backend, store, services) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck$1(this, Connector);

    _this = _super.call(this);

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }

    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');
    _this.waitingReads = [];
    _this.maxParallelReads = options.maxParallelReads || 10;
    _this.readingCalls = 0;
    _this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    _this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }

    return _this;
  }

  _createClass$1(Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;

      var toLoad = {};
      var pending = {};
      var toLoadLanguages = {};
      var toLoadNamespaces = {};
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);

          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2;
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending[name] === undefined) pending[name] = true;
          } else {
            _this2.state[name] = 1;
            hasAllNamespaces = false;
            if (pending[name] === undefined) pending[name] = true;
            if (toLoad[name] === undefined) toLoad[name] = true;
            if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
          }
        });
        if (!hasAllNamespaces) toLoadLanguages[lng] = true;
      });

      if (Object.keys(toLoad).length || Object.keys(pending).length) {
        this.queue.push({
          pending: pending,
          pendingCount: Object.keys(pending).length,
          loaded: {},
          errors: [],
          callback: callback
        });
      }

      return {
        toLoad: Object.keys(toLoad),
        pending: Object.keys(pending),
        toLoadLanguages: Object.keys(toLoadLanguages),
        toLoadNamespaces: Object.keys(toLoadNamespaces)
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      if (err) this.emit('failedLoading', lng, ns, err);

      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      }

      this.state[name] = err ? -1 : 2;
      var loaded = {};
      this.queue.forEach(function (q) {
        pushPath$1(q.loaded, [lng], ns);
        removePending(q, name);
        if (err) q.errors.push(err);

        if (q.pendingCount === 0 && !q.done) {
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = {};
            var loadedKeys = q.loaded[l];

            if (loadedKeys.length) {
              loadedKeys.forEach(function (ns) {
                if (loaded[l][ns] === undefined) loaded[l][ns] = true;
              });
            }
          });
          q.done = true;

          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      });
      this.emit('loaded', loaded);
      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;

      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {});

      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: lng,
          ns: ns,
          fcName: fcName,
          tried: tried,
          wait: wait,
          callback: callback
        });
        return;
      }

      this.readingCalls++;
      return this.backend[fcName](lng, ns, function (err, data) {
        _this3.readingCalls--;

        if (_this3.waitingReads.length > 0) {
          var next = _this3.waitingReads.shift();

          _this3.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
        }

        if (err && data && tried < _this3.maxRetries) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }

        callback(err, data);
      });
    }
  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }

      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);

      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback();
        return null;
      }

      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        return;
      }

      if (key === undefined || key === null || key === '') return;

      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null, _objectSpread$5(_objectSpread$5({}, options), {}, {
          isUpdate: isUpdate
        }));
      }

      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);

  return Connector;
}(EventEmitter);

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: 'all',
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: 'fallback',
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: true,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if (_typeof$2(args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];

      if (_typeof$2(args[2]) === 'object' || _typeof$2(args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }

      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng, options) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1000,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }

  return options;
}

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function noop() {}

function bindMemberFunctions(inst) {
  var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(function (mem) {
    if (typeof inst[mem] === 'function') {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}

var I18n = function (_EventEmitter) {
  _inherits(I18n, _EventEmitter);

  var _super = _createSuper$3(I18n);

  function I18n() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck$1(this, I18n);

    _this = _super.call(this);

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };
    bindMemberFunctions(_assertThisInitialized(_this));

    if (callback && !_this.isInitialized && !options.isClone) {
      if (!_this.options.initImmediate) {
        _this.init(options, callback);

        return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
      }

      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }

    return _this;
  }

  _createClass$1(I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      if (!options.defaultNS && options.defaultNS !== false && options.ns) {
        if (typeof options.ns === 'string') {
          options.defaultNS = options.ns;
        } else if (options.ns.indexOf('translation') < 0) {
          options.defaultNS = options.ns[0];
        }
      }

      var defOpts = get();
      this.options = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, defOpts), this.options), transformOptions(options));

      if (this.options.compatibilityAPI !== 'v1') {
        this.options.interpolation = _objectSpread$6(_objectSpread$6({}, defOpts.interpolation), this.options.interpolation);
      }

      if (options.keySeparator !== undefined) {
        this.options.userDefinedKeySeparator = options.keySeparator;
      }

      if (options.nsSeparator !== undefined) {
        this.options.userDefinedNsSeparator = options.nsSeparator;
      }

      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      }

      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }

        var formatter;

        if (this.modules.formatter) {
          formatter = this.modules.formatter;
        } else if (typeof Intl !== 'undefined') {
          formatter = Formatter;
        }

        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });

        if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
          s.formatter = createClassOnDemand(formatter);
          s.formatter.init(s, this.options);
          this.options.interpolation.format = s.formatter.format.bind(s.formatter);
        }

        s.interpolator = new Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });

        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }

        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }

        this.translator = new Translator(this.services, this.options);
        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      }

      this.format = this.options.interpolation.format;
      if (!callback) callback = noop;

      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
      }

      if (!this.services.languageDetector && !this.options.lng) {
        this.logger.warn('init: no languageDetector is used and no lng is defined');
      }

      var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;

          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
      storeApiChained.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store2;

          (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);

          return _this2;
        };
      });
      var deferred = defer();

      var load = function load() {
        var finish = function finish(err, t) {
          if (_this2.isInitialized && !_this2.initializedStoreOnce) _this2.logger.warn('init: i18next is already initialized. You should call init just once!');
          _this2.isInitialized = true;
          if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);

          _this2.emit('initialized', _this2.options);

          deferred.resolve(t);
          callback(err, t);
        };

        if (_this2.languages && _this2.options.compatibilityAPI !== 'v1' && !_this2.isInitialized) return finish(null, _this2.t.bind(_this2));

        _this2.changeLanguage(_this2.options.lng, finish);
      };

      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }

      return deferred;
    }
  }, {
    key: "loadResources",
    value: function loadResources(language) {
      var _this3 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var usedCallback = callback;
      var usedLng = typeof language === 'string' ? language : this.language;
      if (typeof language === 'function') usedCallback = language;

      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
        var toLoad = [];

        var append = function append(lng) {
          if (!lng) return;

          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        if (!usedLng) {
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(usedLng);
        }

        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }

        this.services.backendConnector.load(toLoad, this.options.ns, function (e) {
          if (!e && !_this3.resolvedLanguage && _this3.language) _this3.setResolvedLanguage(_this3.language);
          usedCallback(e);
        });
      } else {
        usedCallback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
      if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');

      if (module.type === 'backend') {
        this.modules.backend = module;
      }

      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }

      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }

      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }

      if (module.type === 'postProcessor') {
        postProcessor.addPostProcessor(module);
      }

      if (module.type === 'formatter') {
        this.modules.formatter = module;
      }

      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }

      return this;
    }
  }, {
    key: "setResolvedLanguage",
    value: function setResolvedLanguage(l) {
      if (!l || !this.languages) return;
      if (['cimode', 'dev'].indexOf(l) > -1) return;

      for (var li = 0; li < this.languages.length; li++) {
        var lngInLngs = this.languages[li];
        if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;

        if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
          this.resolvedLanguage = lngInLngs;
          break;
        }
      }
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;

      this.isLanguageChangingTo = lng;
      var deferred = defer();
      this.emit('languageChanging', lng);

      var setLngProps = function setLngProps(l) {
        _this4.language = l;
        _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
        _this4.resolvedLanguage = undefined;

        _this4.setResolvedLanguage(l);
      };

      var done = function done(err, l) {
        if (l) {
          setLngProps(l);

          _this4.translator.changeLanguage(l);

          _this4.isLanguageChangingTo = undefined;

          _this4.emit('languageChanged', l);

          _this4.logger.log('languageChanged', l);
        } else {
          _this4.isLanguageChangingTo = undefined;
        }

        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };

      var setLng = function setLng(lngs) {
        if (!lng && !lngs && _this4.services.languageDetector) lngs = [];
        var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);

        if (l) {
          if (!_this4.language) {
            setLngProps(l);
          }

          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
        }

        _this4.loadResources(l, function (err) {
          done(err, l);
        });
      };

      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }

      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns, keyPrefix) {
      var _this5 = this;

      var fixedT = function fixedT(key, opts) {
        var options;

        if (_typeof$2(opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }

          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = _objectSpread$6({}, opts);
        }

        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
        var keySeparator = _this5.options.keySeparator || '.';
        var resultKey = options.keyPrefix ? "".concat(options.keyPrefix).concat(keySeparator).concat(key) : key;
        return _this5.t(resultKey, options);
      };

      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }

      fixedT.ns = ns;
      fixedT.keyPrefix = keyPrefix;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;

      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;

      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.isInitialized) {
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
        return false;
      }

      if (!this.languages || !this.languages.length) {
        this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
        return false;
      }

      var lng = this.resolvedLanguage || this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === 'cimode') return true;

      var loadNotPending = function loadNotPending(l, n) {
        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];

        return loadState === -1 || loadState === 2;
      };

      if (options.precheck) {
        var preResult = options.precheck(this, loadNotPending);
        if (preResult !== undefined) return preResult;
      }

      if (this.hasResourceBundle(lng, ns)) return true;
      if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;

      var deferred = defer();

      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }

      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      });

      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }

      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var mergedOptions = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, this.options), options), {
        isClone: true
      });

      var clone = new I18n(mergedOptions);

      if (options.debug !== undefined || options.prefix !== undefined) {
        clone.logger = clone.logger.clone(options);
      }

      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this8[m];
      });
      clone.services = _objectSpread$6({}, this.services);
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }]);

  return I18n;
}(EventEmitter);

_defineProperty(I18n, "createInstance", function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callback = arguments.length > 1 ? arguments[1] : undefined;
  return new I18n(options, callback);
});

var instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;

instance.createInstance;
instance.init;
instance.loadResources;
instance.reloadResources;
instance.use;
instance.changeLanguage;
instance.getFixedT;
instance.t;
instance.exists;
instance.setDefaultNamespace;
instance.hasLoadedNamespace;
instance.loadNamespaces;
instance.loadLanguages;

var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }
  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
  while (stack.length > 1) {
    if (!object) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();
    object = object[key];
  }
  if (!object) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}
function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
    obj = _getLastOfPath.obj,
    k = _getLastOfPath.k;
  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
    obj = _getLastOfPath2.obj,
    k = _getLastOfPath2.k;
  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
    obj = _getLastOfPath3.obj,
    k = _getLastOfPath3.k;
  if (!obj) return undefined;
  return obj[k];
}

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _typeof$1(obj) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof$1(obj); }
var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
var unicode = {
  Space_Separator: Space_Separator,
  ID_Start: ID_Start,
  ID_Continue: ID_Continue
};
var util = {
  isSpaceSeparator: function isSpaceSeparator(c) {
    return typeof c === 'string' && unicode.Space_Separator.test(c);
  },
  isIdStartChar: function isIdStartChar(c) {
    return typeof c === 'string' && (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c === '$' || c === '_' || unicode.ID_Start.test(c));
  },
  isIdContinueChar: function isIdContinueChar(c) {
    return typeof c === 'string' && (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9' || c === '$' || c === '_' || c === "\u200C" || c === "\u200D" || unicode.ID_Continue.test(c));
  },
  isDigit: function isDigit(c) {
    return typeof c === 'string' && /[0-9]/.test(c);
  },
  isHexDigit: function isHexDigit(c) {
    return typeof c === 'string' && /[0-9A-Fa-f]/.test(c);
  }
};
var source;
var parseState;
var stack;
var pos;
var line;
var column;
var token;
var key;
var root;
var parse = function parse(text, reviver) {
  source = String(text);
  parseState = 'start';
  stack = [];
  pos = 0;
  line = 1;
  column = 0;
  token = undefined;
  key = undefined;
  root = undefined;
  do {
    token = lex();

    parseStates[parseState]();
  } while (token.type !== 'eof');
  if (typeof reviver === 'function') {
    return internalize({
      '': root
    }, '', reviver);
  }
  return root;
};
function internalize(holder, name, reviver) {
  var value = holder[name];
  if (value != null && _typeof$1(value) === 'object') {
    for (var _key in value) {
      var replacement = internalize(value, _key, reviver);
      if (replacement === undefined) {
        delete value[_key];
      } else {
        value[_key] = replacement;
      }
    }
  }
  return reviver.call(holder, name, value);
}
var lexState;
var buffer;
var doubleQuote;
var _sign;
var c;
function lex() {
  lexState = 'default';
  buffer = '';
  doubleQuote = false;
  _sign = 1;
  for (;;) {
    c = peek();

    var _token = lexStates[lexState]();
    if (_token) {
      return _token;
    }
  }
}
function peek() {
  if (source[pos]) {
    return String.fromCodePoint(source.codePointAt(pos));
  }
}
function read() {
  var c = peek();
  if (c === '\n') {
    line++;
    column = 0;
  } else if (c) {
    column += c.length;
  } else {
    column++;
  }
  if (c) {
    pos += c.length;
  }
  return c;
}
var lexStates = {
  default: function _default() {
    switch (c) {
      case '\t':
      case '\v':
      case '\f':
      case ' ':
      case "\xA0":
      case "\uFEFF":
      case '\n':
      case '\r':
      case "\u2028":
      case "\u2029":
        read();
        return;
      case '/':
        read();
        lexState = 'comment';
        return;
      case undefined:
        read();
        return newToken('eof');
    }
    if (util.isSpaceSeparator(c)) {
      read();
      return;
    }

    return lexStates[parseState]();
  },
  comment: function comment() {
    switch (c) {
      case '*':
        read();
        lexState = 'multiLineComment';
        return;
      case '/':
        read();
        lexState = 'singleLineComment';
        return;
    }
    throw invalidChar(read());
  },
  multiLineComment: function multiLineComment() {
    switch (c) {
      case '*':
        read();
        lexState = 'multiLineCommentAsterisk';
        return;
      case undefined:
        throw invalidChar(read());
    }
    read();
  },
  multiLineCommentAsterisk: function multiLineCommentAsterisk() {
    switch (c) {
      case '*':
        read();
        return;
      case '/':
        read();
        lexState = 'default';
        return;
      case undefined:
        throw invalidChar(read());
    }
    read();
    lexState = 'multiLineComment';
  },
  singleLineComment: function singleLineComment() {
    switch (c) {
      case '\n':
      case '\r':
      case "\u2028":
      case "\u2029":
        read();
        lexState = 'default';
        return;
      case undefined:
        read();
        return newToken('eof');
    }
    read();
  },
  value: function value() {
    switch (c) {
      case '{':
      case '[':
        return newToken('punctuator', read());
      case 'n':
        read();
        literal('ull');
        return newToken('null', null);
      case 't':
        read();
        literal('rue');
        return newToken('boolean', true);
      case 'f':
        read();
        literal('alse');
        return newToken('boolean', false);
      case '-':
      case '+':
        if (read() === '-') {
          _sign = -1;
        }
        lexState = 'sign';
        return;
      case '.':
        buffer = read();
        lexState = 'decimalPointLeading';
        return;
      case '0':
        buffer = read();
        lexState = 'zero';
        return;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        buffer = read();
        lexState = 'decimalInteger';
        return;
      case 'I':
        read();
        literal('nfinity');
        return newToken('numeric', Infinity);
      case 'N':
        read();
        literal('aN');
        return newToken('numeric', NaN);
      case '"':
      case "'":
        doubleQuote = read() === '"';
        buffer = '';
        lexState = 'string';
        return;
    }
    throw invalidChar(read());
  },
  identifierNameStartEscape: function identifierNameStartEscape() {
    if (c !== 'u') {
      throw invalidChar(read());
    }
    read();
    var u = unicodeEscape();
    switch (u) {
      case '$':
      case '_':
        break;
      default:
        if (!util.isIdStartChar(u)) {
          throw invalidIdentifier();
        }
        break;
    }
    buffer += u;
    lexState = 'identifierName';
  },
  identifierName: function identifierName() {
    switch (c) {
      case '$':
      case '_':
      case "\u200C":
      case "\u200D":
        buffer += read();
        return;
      case '\\':
        read();
        lexState = 'identifierNameEscape';
        return;
    }
    if (util.isIdContinueChar(c)) {
      buffer += read();
      return;
    }
    return newToken('identifier', buffer);
  },
  identifierNameEscape: function identifierNameEscape() {
    if (c !== 'u') {
      throw invalidChar(read());
    }
    read();
    var u = unicodeEscape();
    switch (u) {
      case '$':
      case '_':
      case "\u200C":
      case "\u200D":
        break;
      default:
        if (!util.isIdContinueChar(u)) {
          throw invalidIdentifier();
        }
        break;
    }
    buffer += u;
    lexState = 'identifierName';
  },
  sign: function sign() {
    switch (c) {
      case '.':
        buffer = read();
        lexState = 'decimalPointLeading';
        return;
      case '0':
        buffer = read();
        lexState = 'zero';
        return;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        buffer = read();
        lexState = 'decimalInteger';
        return;
      case 'I':
        read();
        literal('nfinity');
        return newToken('numeric', _sign * Infinity);
      case 'N':
        read();
        literal('aN');
        return newToken('numeric', NaN);
    }
    throw invalidChar(read());
  },
  zero: function zero() {
    switch (c) {
      case '.':
        buffer += read();
        lexState = 'decimalPoint';
        return;
      case 'e':
      case 'E':
        buffer += read();
        lexState = 'decimalExponent';
        return;
      case 'x':
      case 'X':
        buffer += read();
        lexState = 'hexadecimal';
        return;
    }
    return newToken('numeric', _sign * 0);
  },
  decimalInteger: function decimalInteger() {
    switch (c) {
      case '.':
        buffer += read();
        lexState = 'decimalPoint';
        return;
      case 'e':
      case 'E':
        buffer += read();
        lexState = 'decimalExponent';
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken('numeric', _sign * Number(buffer));
  },
  decimalPointLeading: function decimalPointLeading() {
    if (util.isDigit(c)) {
      buffer += read();
      lexState = 'decimalFraction';
      return;
    }
    throw invalidChar(read());
  },
  decimalPoint: function decimalPoint() {
    switch (c) {
      case 'e':
      case 'E':
        buffer += read();
        lexState = 'decimalExponent';
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      lexState = 'decimalFraction';
      return;
    }
    return newToken('numeric', _sign * Number(buffer));
  },
  decimalFraction: function decimalFraction() {
    switch (c) {
      case 'e':
      case 'E':
        buffer += read();
        lexState = 'decimalExponent';
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken('numeric', _sign * Number(buffer));
  },
  decimalExponent: function decimalExponent() {
    switch (c) {
      case '+':
      case '-':
        buffer += read();
        lexState = 'decimalExponentSign';
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      lexState = 'decimalExponentInteger';
      return;
    }
    throw invalidChar(read());
  },
  decimalExponentSign: function decimalExponentSign() {
    if (util.isDigit(c)) {
      buffer += read();
      lexState = 'decimalExponentInteger';
      return;
    }
    throw invalidChar(read());
  },
  decimalExponentInteger: function decimalExponentInteger() {
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken('numeric', _sign * Number(buffer));
  },
  hexadecimal: function hexadecimal() {
    if (util.isHexDigit(c)) {
      buffer += read();
      lexState = 'hexadecimalInteger';
      return;
    }
    throw invalidChar(read());
  },
  hexadecimalInteger: function hexadecimalInteger() {
    if (util.isHexDigit(c)) {
      buffer += read();
      return;
    }
    return newToken('numeric', _sign * Number(buffer));
  },
  string: function string() {
    switch (c) {
      case '\\':
        read();
        buffer += escape();
        return;
      case '"':
        if (doubleQuote) {
          read();
          return newToken('string', buffer);
        }
        buffer += read();
        return;
      case "'":
        if (!doubleQuote) {
          read();
          return newToken('string', buffer);
        }
        buffer += read();
        return;
      case '\n':
      case '\r':
        throw invalidChar(read());
      case "\u2028":
      case "\u2029":
        separatorChar(c);
        break;
      case undefined:
        throw invalidChar(read());
    }
    buffer += read();
  },
  start: function start() {
    switch (c) {
      case '{':
      case '[':
        return newToken('punctuator', read());

    }

    lexState = 'value';
  },
  beforePropertyName: function beforePropertyName() {
    switch (c) {
      case '$':
      case '_':
        buffer = read();
        lexState = 'identifierName';
        return;
      case '\\':
        read();
        lexState = 'identifierNameStartEscape';
        return;
      case '}':
        return newToken('punctuator', read());
      case '"':
      case "'":
        doubleQuote = read() === '"';
        lexState = 'string';
        return;
    }
    if (util.isIdStartChar(c)) {
      buffer += read();
      lexState = 'identifierName';
      return;
    }
    throw invalidChar(read());
  },
  afterPropertyName: function afterPropertyName() {
    if (c === ':') {
      return newToken('punctuator', read());
    }
    throw invalidChar(read());
  },
  beforePropertyValue: function beforePropertyValue() {
    lexState = 'value';
  },
  afterPropertyValue: function afterPropertyValue() {
    switch (c) {
      case ',':
      case '}':
        return newToken('punctuator', read());
    }
    throw invalidChar(read());
  },
  beforeArrayValue: function beforeArrayValue() {
    if (c === ']') {
      return newToken('punctuator', read());
    }
    lexState = 'value';
  },
  afterArrayValue: function afterArrayValue() {
    switch (c) {
      case ',':
      case ']':
        return newToken('punctuator', read());
    }
    throw invalidChar(read());
  },
  end: function end() {

    throw invalidChar(read());
  }
};
function newToken(type, value) {
  return {
    type: type,
    value: value,
    line: line,
    column: column
  };
}
function literal(s) {
  var _iterator = _createForOfIteratorHelper(s),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _c = _step.value;
      var p = peek();
      if (p !== _c) {
        throw invalidChar(read());
      }
      read();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function escape() {
  var c = peek();
  switch (c) {
    case 'b':
      read();
      return '\b';
    case 'f':
      read();
      return '\f';
    case 'n':
      read();
      return '\n';
    case 'r':
      read();
      return '\r';
    case 't':
      read();
      return '\t';
    case 'v':
      read();
      return '\v';
    case '0':
      read();
      if (util.isDigit(peek())) {
        throw invalidChar(read());
      }
      return '\0';
    case 'x':
      read();
      return hexEscape();
    case 'u':
      read();
      return unicodeEscape();
    case '\n':
    case "\u2028":
    case "\u2029":
      read();
      return '';
    case '\r':
      read();
      if (peek() === '\n') {
        read();
      }
      return '';
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      throw invalidChar(read());
    case undefined:
      throw invalidChar(read());
  }
  return read();
}
function hexEscape() {
  var buffer = '';
  var c = peek();
  if (!util.isHexDigit(c)) {
    throw invalidChar(read());
  }
  buffer += read();
  c = peek();
  if (!util.isHexDigit(c)) {
    throw invalidChar(read());
  }
  buffer += read();
  return String.fromCodePoint(parseInt(buffer, 16));
}
function unicodeEscape() {
  var buffer = '';
  var count = 4;
  while (count-- > 0) {
    var _c2 = peek();
    if (!util.isHexDigit(_c2)) {
      throw invalidChar(read());
    }
    buffer += read();
  }
  return String.fromCodePoint(parseInt(buffer, 16));
}
var parseStates = {
  start: function start() {
    if (token.type === 'eof') {
      throw invalidEOF();
    }
    push();
  },
  beforePropertyName: function beforePropertyName() {
    switch (token.type) {
      case 'identifier':
      case 'string':
        key = token.value;
        parseState = 'afterPropertyName';
        return;
      case 'punctuator':

        pop();
        return;
      case 'eof':
        throw invalidEOF();
    }

  },
  afterPropertyName: function afterPropertyName() {

    if (token.type === 'eof') {
      throw invalidEOF();
    }
    parseState = 'beforePropertyValue';
  },
  beforePropertyValue: function beforePropertyValue() {
    if (token.type === 'eof') {
      throw invalidEOF();
    }
    push();
  },
  beforeArrayValue: function beforeArrayValue() {
    if (token.type === 'eof') {
      throw invalidEOF();
    }
    if (token.type === 'punctuator' && token.value === ']') {
      pop();
      return;
    }
    push();
  },
  afterPropertyValue: function afterPropertyValue() {

    if (token.type === 'eof') {
      throw invalidEOF();
    }
    switch (token.value) {
      case ',':
        parseState = 'beforePropertyName';
        return;
      case '}':
        pop();
    }

  },
  afterArrayValue: function afterArrayValue() {

    if (token.type === 'eof') {
      throw invalidEOF();
    }
    switch (token.value) {
      case ',':
        parseState = 'beforeArrayValue';
        return;
      case ']':
        pop();
    }

  },
  end: function end() {
  }
};
function push() {
  var value;
  switch (token.type) {
    case 'punctuator':
      switch (token.value) {
        case '{':
          value = {};
          break;
        case '[':
          value = [];
          break;
      }
      break;
    case 'null':
    case 'boolean':
    case 'numeric':
    case 'string':
      value = token.value;
      break;

  }

  if (root === undefined) {
    root = value;
  } else {
    var parent = stack[stack.length - 1];
    if (Array.isArray(parent)) {
      parent.push(value);
    } else {
      parent[key] = value;
    }
  }
  if (value !== null && _typeof$1(value) === 'object') {
    stack.push(value);
    if (Array.isArray(value)) {
      parseState = 'beforeArrayValue';
    } else {
      parseState = 'beforePropertyName';
    }
  } else {
    var current = stack[stack.length - 1];
    if (current == null) {
      parseState = 'end';
    } else if (Array.isArray(current)) {
      parseState = 'afterArrayValue';
    } else {
      parseState = 'afterPropertyValue';
    }
  }
}
function pop() {
  stack.pop();
  var current = stack[stack.length - 1];
  if (current == null) {
    parseState = 'end';
  } else if (Array.isArray(current)) {
    parseState = 'afterArrayValue';
  } else {
    parseState = 'afterPropertyValue';
  }
}

function invalidChar(c) {
  if (c === undefined) {
    return syntaxError("JSON5: invalid end of input at ".concat(line, ":").concat(column));
  }
  return syntaxError("JSON5: invalid character '".concat(formatChar(c), "' at ").concat(line, ":").concat(column));
}
function invalidEOF() {
  return syntaxError("JSON5: invalid end of input at ".concat(line, ":").concat(column));
}

function invalidIdentifier() {
  column -= 5;
  return syntaxError("JSON5: invalid identifier character at ".concat(line, ":").concat(column));
}
function separatorChar(c) {
  console.warn("JSON5: '".concat(formatChar(c), "' in strings is not valid ECMAScript; consider escaping"));
}
function formatChar(c) {
  var replacements = {
    "'": "\\'",
    '"': '\\"',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\v': '\\v',
    '\0': '\\0',
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  if (replacements[c]) {
    return replacements[c];
  }
  if (c < ' ') {
    var hexString = c.charCodeAt(0).toString(16);
    return '\\x' + ('00' + hexString).substring(hexString.length);
  }
  return c;
}
function syntaxError(message) {
  var err = new SyntaxError(message);
  err.lineNumber = line;
  err.columnNumber = column;
  return err;
}
var stringify = function stringify(value, replacer, space) {
  var stack = [];
  var indent = '';
  var propertyList;
  var replacerFunc;
  var gap = '';
  var quote;
  if (replacer != null && _typeof$1(replacer) === 'object' && !Array.isArray(replacer)) {
    space = replacer.space;
    quote = replacer.quote;
    replacer = replacer.replacer;
  }
  if (typeof replacer === 'function') {
    replacerFunc = replacer;
  } else if (Array.isArray(replacer)) {
    propertyList = [];
    var _iterator2 = _createForOfIteratorHelper(replacer),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        var item = void 0;
        if (typeof v === 'string') {
          item = v;
        } else if (typeof v === 'number' || v instanceof String || v instanceof Number) {
          item = String(v);
        }
        if (item !== undefined && propertyList.indexOf(item) < 0) {
          propertyList.push(item);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  if (space instanceof Number) {
    space = Number(space);
  } else if (space instanceof String) {
    space = String(space);
  }
  if (typeof space === 'number') {
    if (space > 0) {
      space = Math.min(10, Math.floor(space));
      gap = '          '.substr(0, space);
    }
  } else if (typeof space === 'string') {
    gap = space.substr(0, 10);
  }
  return serializeProperty('', {
    '': value
  });
  function serializeProperty(key, holder) {
    var value = holder[key];
    if (value != null) {
      if (typeof value.toJSON5 === 'function') {
        value = value.toJSON5(key);
      } else if (typeof value.toJSON === 'function') {
        value = value.toJSON(key);
      }
    }
    if (replacerFunc) {
      value = replacerFunc.call(holder, key, value);
    }
    if (value instanceof Number) {
      value = Number(value);
    } else if (value instanceof String) {
      value = String(value);
    } else if (value instanceof Boolean) {
      value = value.valueOf();
    }
    switch (value) {
      case null:
        return 'null';
      case true:
        return 'true';
      case false:
        return 'false';
    }
    if (typeof value === 'string') {
      return quoteString(value);
    }
    if (typeof value === 'number') {
      return String(value);
    }
    if (_typeof$1(value) === 'object') {
      return Array.isArray(value) ? serializeArray(value) : serializeObject(value);
    }
    return undefined;
  }
  function quoteString(value) {
    var quotes = {
      "'": 0.1,
      '"': 0.2
    };
    var replacements = {
      "'": "\\'",
      '"': '\\"',
      '\\': '\\\\',
      '\b': '\\b',
      '\f': '\\f',
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t',
      '\v': '\\v',
      '\0': '\\0',
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    var product = '';
    for (var i = 0; i < value.length; i++) {
      var _c3 = value[i];
      switch (_c3) {
        case "'":
        case '"':
          quotes[_c3]++;
          product += _c3;
          continue;
        case '\0':
          if (util.isDigit(value[i + 1])) {
            product += '\\x00';
            continue;
          }
      }
      if (replacements[_c3]) {
        product += replacements[_c3];
        continue;
      }
      if (_c3 < ' ') {
        var hexString = _c3.charCodeAt(0).toString(16);
        product += '\\x' + ('00' + hexString).substring(hexString.length);
        continue;
      }
      product += _c3;
    }
    var quoteChar = quote || Object.keys(quotes).reduce(function (a, b) {
      return quotes[a] < quotes[b] ? a : b;
    });
    product = product.replace(new RegExp(quoteChar, 'g'), replacements[quoteChar]);
    return quoteChar + product + quoteChar;
  }
  function serializeObject(value) {
    if (stack.indexOf(value) >= 0) {
      throw TypeError('Converting circular structure to JSON5');
    }
    stack.push(value);
    var stepback = indent;
    indent = indent + gap;
    var keys = propertyList || Object.keys(value);
    var partial = [];
    var _iterator3 = _createForOfIteratorHelper(keys),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _key2 = _step3.value;
        var propertyString = serializeProperty(_key2, value);
        if (propertyString !== undefined) {
          var member = serializeKey(_key2) + ':';
          if (gap !== '') {
            member += ' ';
          }
          member += propertyString;
          partial.push(member);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var final;
    if (partial.length === 0) {
      final = '{}';
    } else {
      var properties;
      if (gap === '') {
        properties = partial.join(',');
        final = '{' + properties + '}';
      } else {
        var separator = ',\n' + indent;
        properties = partial.join(separator);
        final = '{\n' + indent + properties + ',\n' + stepback + '}';
      }
    }
    stack.pop();
    indent = stepback;
    return final;
  }
  function serializeKey(key) {
    if (key.length === 0) {
      return quoteString(key);
    }
    var firstChar = String.fromCodePoint(key.codePointAt(0));
    if (!util.isIdStartChar(firstChar)) {
      return quoteString(key);
    }
    for (var i = firstChar.length; i < key.length; i++) {
      if (!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))) {
        return quoteString(key);
      }
    }
    return key;
  }
  function serializeArray(value) {
    if (stack.indexOf(value) >= 0) {
      throw TypeError('Converting circular structure to JSON5');
    }
    stack.push(value);
    var stepback = indent;
    indent = indent + gap;
    var partial = [];
    for (var i = 0; i < value.length; i++) {
      var propertyString = serializeProperty(String(i), value);
      partial.push(propertyString !== undefined ? propertyString : 'null');
    }
    var final;
    if (partial.length === 0) {
      final = '[]';
    } else {
      if (gap === '') {
        var properties = partial.join(',');
        final = '[' + properties + ']';
      } else {
        var separator = ',\n' + indent;
        var _properties = partial.join(separator);
        final = '[\n' + indent + _properties + ',\n' + stepback + ']';
      }
    }
    stack.pop();
    indent = stepback;
    return final;
  }
};
var JSON5 = {
  parse: parse,
  stringify: stringify
};
var lib = JSON5;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function isNothing(subject) {
  return typeof subject === 'undefined' || subject === null;
}
function isObject$1(subject) {
  return _typeof(subject) === 'object' && subject !== null;
}
function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;else if (isNothing(sequence)) return [];
  return [sequence];
}
function extend(target, source) {
  var index, length, key, sourceKeys;
  if (source) {
    sourceKeys = Object.keys(source);
    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }
  return target;
}
function repeat(string, count) {
  var result = '',
    cycle;
  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }
  return result;
}
function isNegativeZero(number) {
  return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
var isNothing_1 = isNothing;
var isObject_1 = isObject$1;
var toArray_1 = toArray;
var repeat_1 = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1 = extend;
var common = {
  isNothing: isNothing_1,
  isObject: isObject_1,
  toArray: toArray_1,
  repeat: repeat_1,
  isNegativeZero: isNegativeZero_1,
  extend: extend_1
};

function formatError(exception, compact) {
  var where = '',
    message = exception.reason || '(unknown reason)';
  if (!exception.mark) return message;
  if (exception.mark.name) {
    where += 'in "' + exception.mark.name + '" ';
  }
  where += '(' + (exception.mark.line + 1) + ':' + (exception.mark.column + 1) + ')';
  if (!compact && exception.mark.snippet) {
    where += '\n\n' + exception.mark.snippet;
  }
  return message + ' ' + where;
}
function YAMLException$1(reason, mark) {
  Error.call(this);
  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack || '';
  }
}

YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;
YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ': ' + formatError(this, compact);
};
var exception = YAMLException$1;

function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = '';
  var tail = '';
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
  if (position - lineStart > maxHalfLength) {
    head = ' ... ';
    lineStart = position - maxHalfLength + head.length;
  }
  if (lineEnd - position > maxHalfLength) {
    tail = ' ...';
    lineEnd = position + maxHalfLength - tail.length;
  }
  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
    pos: position - lineStart + head.length
  };
}

function padStart(string, max) {
  return common.repeat(' ', max - string.length) + string;
}
function makeSnippet(mark, options) {
  options = Object.create(options || null);
  if (!mark.buffer) return null;
  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent !== 'number') options.indent = 1;
  if (typeof options.linesBefore !== 'number') options.linesBefore = 3;
  if (typeof options.linesAfter !== 'number') options.linesAfter = 2;
  var re = /\r?\n|\r|\0/g;
  var lineStarts = [0];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;
  while (match = re.exec(mark.buffer)) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);
    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }
  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;
  var result = '',
    i,
    line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(mark.buffer, lineStarts[foundLineNo - i], lineEnds[foundLineNo - i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]), maxLineLength);
    result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + ' | ' + line.str + '\n' + result;
  }
  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + ' | ' + line.str + '\n';
  result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n';
  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(mark.buffer, lineStarts[foundLineNo + i], lineEnds[foundLineNo + i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]), maxLineLength);
    result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + ' | ' + line.str + '\n';
  }
  return result.replace(/\n$/, '');
}
var snippet = makeSnippet;
var TYPE_CONSTRUCTOR_OPTIONS = ['kind', 'multi', 'resolve', 'construct', 'instanceOf', 'predicate', 'represent', 'representName', 'defaultStyle', 'styleAliases'];
var YAML_NODE_KINDS = ['scalar', 'sequence', 'mapping'];
function compileStyleAliases(map) {
  var result = {};
  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }
  return result;
}
function Type$1(tag, options) {
  options = options || {};
  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  this.options = options;
  this.tag = tag;
  this.kind = options['kind'] || null;
  this.resolve = options['resolve'] || function () {
    return true;
  };
  this.construct = options['construct'] || function (data) {
    return data;
  };
  this.instanceOf = options['instanceOf'] || null;
  this.predicate = options['predicate'] || null;
  this.represent = options['represent'] || null;
  this.representName = options['representName'] || null;
  this.defaultStyle = options['defaultStyle'] || null;
  this.multi = options['multi'] || false;
  this.styleAliases = compileStyleAliases(options['styleAliases'] || null);
  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}
var type = Type$1;

function compileList(schema, name) {
  var result = [];
  schema[name].forEach(function (currentType) {
    var newIndex = result.length;
    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
        newIndex = previousIndex;
      }
    });
    result[newIndex] = currentType;
  });
  return result;
}
function
compileMap() {
  var result = {
      scalar: {},
      sequence: {},
      mapping: {},
      fallback: {},
      multi: {
        scalar: [],
        sequence: [],
        mapping: [],
        fallback: []
      }
    },
    index,
    length;
  function collectType(type) {
    if (type.multi) {
      result.multi[type.kind].push(type);
      result.multi['fallback'].push(type);
    } else {
      result[type.kind][type.tag] = result['fallback'][type.tag] = type;
    }
  }
  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}
function Schema$1(definition) {
  return this.extend(definition);
}
Schema$1.prototype.extend = function extend(definition) {
  var implicit = [];
  var explicit = [];
  if (definition instanceof type) {
    explicit.push(definition);
  } else if (Array.isArray(definition)) {
    explicit = explicit.concat(definition);
  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);
  } else {
    throw new exception('Schema.extend argument should be a Type, [ Type ], ' + 'or a schema definition ({ implicit: [...], explicit: [...] })');
  }
  implicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
    if (type$1.loadKind && type$1.loadKind !== 'scalar') {
      throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }
    if (type$1.multi) {
      throw new exception('There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.');
    }
  });
  explicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
  });
  var result = Object.create(Schema$1.prototype);
  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);
  result.compiledImplicit = compileList(result, 'implicit');
  result.compiledExplicit = compileList(result, 'explicit');
  result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
  return result;
};
var schema = Schema$1;
var str = new type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function construct(data) {
    return data !== null ? data : '';
  }
});
var seq = new type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function construct(data) {
    return data !== null ? data : [];
  }
});
var map$1 = new type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function construct(data) {
    return data !== null ? data : {};
  }
});
var failsafe = new schema({
  explicit: [str, seq, map$1]
});
function resolveYamlNull(data) {
  if (data === null) return true;
  var max = data.length;
  return max === 1 && data === '~' || max === 4 && (data === 'null' || data === 'Null' || data === 'NULL');
}
function constructYamlNull() {
  return null;
}
function isNull(object) {
  return object === null;
}
var _null = new type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function canonical() {
      return '~';
    },
    lowercase: function lowercase() {
      return 'null';
    },
    uppercase: function uppercase() {
      return 'NULL';
    },
    camelcase: function camelcase() {
      return 'Null';
    },
    empty: function empty() {
      return '';
    }
  },
  defaultStyle: 'lowercase'
});
function resolveYamlBoolean(data) {
  if (data === null) return false;
  var max = data.length;
  return max === 4 && (data === 'true' || data === 'True' || data === 'TRUE') || max === 5 && (data === 'false' || data === 'False' || data === 'FALSE');
}
function constructYamlBoolean(data) {
  return data === 'true' || data === 'True' || data === 'TRUE';
}
function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}
var bool = new type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function lowercase(object) {
      return object ? 'true' : 'false';
    },
    uppercase: function uppercase(object) {
      return object ? 'TRUE' : 'FALSE';
    },
    camelcase: function camelcase(object) {
      return object ? 'True' : 'False';
    }
  },
  defaultStyle: 'lowercase'
});
function isHexCode(c) {
  return 0x30 <= c && c <= 0x39 || 0x41 <= c && c <= 0x46 || 0x61 <= c && c <= 0x66;
}

function isOctCode(c) {
  return 0x30 <= c && c <= 0x37;
}

function isDecCode(c) {
  return 0x30 <= c && c <= 0x39;
}

function resolveYamlInteger(data) {
  if (data === null) return false;
  var max = data.length,
    index = 0,
    hasDigits = false,
    ch;
  if (!max) return false;
  ch = data[index];

  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }
  if (ch === '0') {
    if (index + 1 === max) return true;
    ch = data[++index];

    if (ch === 'b') {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
    if (ch === 'x') {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
    if (ch === 'o') {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
  }

  if (ch === '_') return false;
  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  if (!hasDigits || ch === '_') return false;
  return true;
}
function constructYamlInteger(data) {
  var value = data,
    sign = 1,
    ch;
  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }
  ch = value[0];
  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }
  if (value === '0') return 0;
  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value.slice(2), 16);
    if (value[1] === 'o') return sign * parseInt(value.slice(2), 8);
  }
  return sign * parseInt(value, 10);
}
function isInteger(object) {
  return Object.prototype.toString.call(object) === '[object Number]' && object % 1 === 0 && !common.isNegativeZero(object);
}
var int = new type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function binary(obj) {
      return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1);
    },
    octal: function octal(obj) {
      return obj >= 0 ? '0o' + obj.toString(8) : '-0o' + obj.toString(8).slice(1);
    },
    decimal: function decimal(obj) {
      return obj.toString(10);
    },
    hexadecimal: function hexadecimal(obj) {
      return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() : '-0x' + obj.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary: [2, 'bin'],
    octal: [8, 'oct'],
    decimal: [10, 'dec'],
    hexadecimal: [16, 'hex']
  }
});
var YAML_FLOAT_PATTERN = new RegExp(
'^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
'|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
'|[-+]?\\.(?:inf|Inf|INF)' +
'|\\.(?:nan|NaN|NAN))$');
function resolveYamlFloat(data) {
  if (data === null) return false;
  if (!YAML_FLOAT_PATTERN.test(data) ||
  data[data.length - 1] === '_') {
    return false;
  }
  return true;
}
function constructYamlFloat(data) {
  var value, sign;
  value = data.replace(/_/g, '').toLowerCase();
  sign = value[0] === '-' ? -1 : 1;
  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }
  if (value === '.inf') {
    return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  } else if (value === '.nan') {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
  var res;
  if (isNaN(object)) {
    switch (style) {
      case 'lowercase':
        return '.nan';
      case 'uppercase':
        return '.NAN';
      case 'camelcase':
        return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase':
        return '.inf';
      case 'uppercase':
        return '.INF';
      case 'camelcase':
        return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase':
        return '-.inf';
      case 'uppercase':
        return '-.INF';
      case 'camelcase':
        return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }
  res = object.toString(10);

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}
function isFloat(object) {
  return Object.prototype.toString.call(object) === '[object Number]' && (object % 1 !== 0 || common.isNegativeZero(object));
}
var float = new type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});
var json = failsafe.extend({
  implicit: [_null, bool, int, float]
});
var core = json;
var YAML_DATE_REGEXP = new RegExp('^([0-9][0-9][0-9][0-9])' +
'-([0-9][0-9])' +
'-([0-9][0-9])$');

var YAML_TIMESTAMP_REGEXP = new RegExp('^([0-9][0-9][0-9][0-9])' +
'-([0-9][0-9]?)' +
'-([0-9][0-9]?)' +
'(?:[Tt]|[ \\t]+)' +
'([0-9][0-9]?)' +
':([0-9][0-9])' +
':([0-9][0-9])' +
'(?:\\.([0-9]*))?' +
'(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' +
'(?::([0-9][0-9]))?))?$');

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}
function constructYamlTimestamp(data) {
  var match,
    year,
    month,
    day,
    hour,
    minute,
    second,
    fraction = 0,
    delta = null,
    tz_hour,
    tz_minute,
    date;
  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
  if (match === null) throw new Error('Date resolve error');

  year = +match[1];
  month = +match[2] - 1;
  day = +match[3];
  if (!match[4]) {
    return new Date(Date.UTC(year, month, day));
  }

  hour = +match[4];
  minute = +match[5];
  second = +match[6];
  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) {
      fraction += '0';
    }
    fraction = +fraction;
  }

  if (match[9]) {
    tz_hour = +match[10];
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000;
    if (match[9] === '-') delta = -delta;
  }
  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
  if (delta) date.setTime(date.getTime() - delta);
  return date;
}
function representYamlTimestamp(object) {
  return object.toISOString();
}
var timestamp = new type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});
function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}
var merge = new type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';
function resolveYamlBinary(data) {
  if (data === null) return false;
  var code,
    idx,
    bitlen = 0,
    max = data.length,
    map = BASE64_MAP;

  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    if (code > 64) continue;

    if (code < 0) return false;
    bitlen += 6;
  }

  return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
  var idx,
    tailbits,
    input = data.replace(/[\r\n=]/g, ''),
    max = input.length,
    map = BASE64_MAP,
    bits = 0,
    result = [];

  for (idx = 0; idx < max; idx++) {
    if (idx % 4 === 0 && idx) {
      result.push(bits >> 16 & 0xFF);
      result.push(bits >> 8 & 0xFF);
      result.push(bits & 0xFF);
    }
    bits = bits << 6 | map.indexOf(input.charAt(idx));
  }

  tailbits = max % 4 * 6;
  if (tailbits === 0) {
    result.push(bits >> 16 & 0xFF);
    result.push(bits >> 8 & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push(bits >> 10 & 0xFF);
    result.push(bits >> 2 & 0xFF);
  } else if (tailbits === 12) {
    result.push(bits >> 4 & 0xFF);
  }
  return new Uint8Array(result);
}
function representYamlBinary(object) {
  var result = '',
    bits = 0,
    idx,
    tail,
    max = object.length,
    map = BASE64_MAP;

  for (idx = 0; idx < max; idx++) {
    if (idx % 3 === 0 && idx) {
      result += map[bits >> 18 & 0x3F];
      result += map[bits >> 12 & 0x3F];
      result += map[bits >> 6 & 0x3F];
      result += map[bits & 0x3F];
    }
    bits = (bits << 8) + object[idx];
  }

  tail = max % 3;
  if (tail === 0) {
    result += map[bits >> 18 & 0x3F];
    result += map[bits >> 12 & 0x3F];
    result += map[bits >> 6 & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[bits >> 10 & 0x3F];
    result += map[bits >> 4 & 0x3F];
    result += map[bits << 2 & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[bits >> 2 & 0x3F];
    result += map[bits << 4 & 0x3F];
    result += map[64];
    result += map[64];
  }
  return result;
}
function isBinary(obj) {
  return Object.prototype.toString.call(obj) === '[object Uint8Array]';
}
var binary = new type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data) {
  if (data === null) return true;
  var objectKeys = [],
    index,
    length,
    pair,
    pairKey,
    pairHasKey,
    object = data;
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;
    if (_toString$2.call(pair) !== '[object Object]') return false;
    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;else return false;
      }
    }
    if (!pairHasKey) return false;
    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);else return false;
  }
  return true;
}
function constructYamlOmap(data) {
  return data !== null ? data : [];
}
var omap = new type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data) {
  if (data === null) return true;
  var index,
    length,
    pair,
    keys,
    result,
    object = data;
  result = new Array(object.length);
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    if (_toString$1.call(pair) !== '[object Object]') return false;
    keys = Object.keys(pair);
    if (keys.length !== 1) return false;
    result[index] = [keys[0], pair[keys[0]]];
  }
  return true;
}
function constructYamlPairs(data) {
  if (data === null) return [];
  var index,
    length,
    pair,
    keys,
    result,
    object = data;
  result = new Array(object.length);
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    keys = Object.keys(pair);
    result[index] = [keys[0], pair[keys[0]]];
  }
  return result;
}
var pairs = new type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
  if (data === null) return true;
  var key,
    object = data;
  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }
  return true;
}
function constructYamlSet(data) {
  return data !== null ? data : {};
}
var set = new type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});
var _default = core.extend({
  implicit: [timestamp, merge],
  explicit: [binary, omap, pairs, set]
});

var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
  return c === 0x0A || c === 0x0D;
}

function is_WHITE_SPACE(c) {
  return c === 0x09 || c === 0x20;
}

function is_WS_OR_EOL(c) {
  return c === 0x09 || c === 0x20 || c === 0x0A || c === 0x0D;
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C || c === 0x5B || c === 0x5D || c === 0x7B || c === 0x7D;
}

function fromHexCode(c) {
  var lc;
  if (0x30 <= c && c <= 0x39) {
    return c - 0x30;
  }

  lc = c | 0x20;
  if (0x61 <= lc && lc <= 0x66) {
    return lc - 0x61 + 10;
  }
  return -1;
}
function escapedHexLen(c) {
  if (c === 0x78) {
    return 2;
  }
  if (c === 0x75) {
    return 4;
  }
  if (c === 0x55) {
    return 8;
  }
  return 0;
}
function fromDecimalCode(c) {
  if (0x30 <= c && c <= 0x39) {
    return c - 0x30;
  }
  return -1;
}
function simpleEscapeSequence(c) {
  return c === 0x30 ? '\x00' : c === 0x61 ? '\x07' : c === 0x62 ? '\x08' : c === 0x74 ? '\x09' : c === 0x09 ? '\x09' : c === 0x6E ? '\x0A' : c === 0x76 ? '\x0B' : c === 0x66 ? '\x0C' : c === 0x72 ? '\x0D' : c === 0x65 ? '\x1B' : c === 0x20 ? ' ' : c === 0x22 ? '\x22' : c === 0x2F ? '/' : c === 0x5C ? '\x5C' : c === 0x4E ? '\x85' : c === 0x5F ? '\xA0' : c === 0x4C ? "\u2028" : c === 0x50 ? "\u2029" : '';
}
function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  return String.fromCharCode((c - 0x010000 >> 10) + 0xD800, (c - 0x010000 & 0x03FF) + 0xDC00);
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}
function State$1(input, options) {
  this.input = input;
  this.filename = options['filename'] || null;
  this.schema = options['schema'] || _default;
  this.onWarning = options['onWarning'] || null;
  this.legacy = options['legacy'] || false;
  this.json = options['json'] || false;
  this.listener = options['listener'] || null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap = this.schema.compiledTypeMap;
  this.length = input.length;
  this.position = 0;
  this.line = 0;
  this.lineStart = 0;
  this.lineIndent = 0;

  this.firstTabInLine = -1;
  this.documents = [];

}

function generateError(state, message) {
  var mark = {
    name: state.filename,
    buffer: state.input.slice(0, -1),
    position: state.position,
    line: state.line,
    column: state.position - state.lineStart
  };
  mark.snippet = snippet(mark);
  return new exception(message, mark);
}
function throwError(state, message) {
  throw generateError(state, message);
}
function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}
var directiveHandlers = {
  YAML: function handleYamlDirective(state, name, args) {
    var match, major, minor;
    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }
    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }
    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }
    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);
    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }
    state.version = args[0];
    state.checkLineBreaks = minor < 2;
    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },
  TAG: function handleTagDirective(state, name, args) {
    var handle, prefix;
    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }
    handle = args[0];
    prefix = args[1];
    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }
    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }
    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }
    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, 'tag prefix is malformed: ' + prefix);
    }
    state.tagMap[handle] = prefix;
  }
};
function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;
  if (start < end) {
    _result = state.input.slice(start, end);
    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 || 0x20 <= _character && _character <= 0x10FFFF)) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }
    state.result += _result;
  }
}
function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;
  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }
  sourceKeys = Object.keys(source);
  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];
    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}
function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
  var index, quantity;

  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);
    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }
      if (_typeof(keyNode) === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  if (_typeof(keyNode) === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }
  keyNode = String(keyNode);
  if (_result === null) {
    _result = {};
  }
  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }

    if (keyNode === '__proto__') {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }
  return _result;
}
function readLineBreak(state) {
  var ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 0x0A) {
    state.position++;
  } else if (ch === 0x0D) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }
  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
    ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 0x09 && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }
    if (allowComments && ch === 0x23) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A && ch !== 0x0D && ch !== 0);
    }
    if (is_EOL(ch)) {
      readLineBreak(state);
      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;
      while (ch === 0x20) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }
  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }
  return lineBreaks;
}
function testDocumentSeparator(state) {
  var _position = state.position,
    ch;
  ch = state.input.charCodeAt(_position);

  if ((ch === 0x2D || ch === 0x2E) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
    _position += 3;
    ch = state.input.charCodeAt(_position);
    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }
  return false;
}
function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
    following,
    captureStart,
    captureEnd,
    hasPendingContent,
    _line,
    _lineStart,
    _lineIndent,
    _kind = state.kind,
    _result = state.result,
    ch;
  ch = state.input.charCodeAt(state.position);
  if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 0x23 || ch === 0x26 || ch === 0x2A || ch === 0x21 || ch === 0x7C || ch === 0x3E || ch === 0x27 || ch === 0x22 || ch === 0x25 || ch === 0x40 || ch === 0x60) {
    return false;
  }
  if (ch === 0x3F || ch === 0x2D) {
    following = state.input.charCodeAt(state.position + 1);
    if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }
  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;
  while (ch !== 0) {
    if (ch === 0x3A) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }
    } else if (ch === 0x23) {
      preceding = state.input.charCodeAt(state.position - 1);
      if (is_WS_OR_EOL(preceding)) {
        break;
      }
    } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;
    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);
      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }
    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }
    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }
    ch = state.input.charCodeAt(++state.position);
  }
  captureSegment(state, captureStart, captureEnd, false);
  if (state.result) {
    return true;
  }
  state.kind = _kind;
  state.result = _result;
  return false;
}
function readSingleQuotedScalar(state, nodeIndent) {
  var ch, captureStart, captureEnd;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 0x27) {
    return false;
  }
  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (ch === 0x27) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}
function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 0x22) {
    return false;
  }
  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;
    } else if (ch === 0x5C) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;
      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;
        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);
          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;
          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }
        state.result += charFromCodepoint(hexResult);
        state.position++;
      } else {
        throwError(state, 'unknown escape sequence');
      }
      captureStart = captureEnd = state.position;
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}
function readFlowCollection(state, nodeIndent) {
  var readNext = true,
    _line,
    _lineStart,
    _pos,
    _tag = state.tag,
    _result,
    _anchor = state.anchor,
    following,
    terminator,
    isPair,
    isExplicitPair,
    isMapping,
    overridableKeys = Object.create(null),
    keyNode,
    keyTag,
    valueNode,
    ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 0x5B) {
    terminator = 0x5D;
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B) {
    terminator = 0x7D;
    isMapping = true;
    _result = {};
  } else {
    return false;
  }
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(++state.position);
  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    } else if (ch === 0x2C) {
      throwError(state, "expected the node content, but found ','");
    }
    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;
    if (ch === 0x3F) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }
    _line = state.line;
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if ((isExplicitPair || state.line === _line) && ch === 0x3A) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }
    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x2C) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }
  throwError(state, 'unexpected end of the stream within a flow collection');
}
function readBlockScalar(state, nodeIndent) {
  var captureStart,
    folding,
    chomping = CHOMPING_CLIP,
    didReadContent = false,
    detectedIndent = false,
    textIndent = nodeIndent,
    emptyLines = 0,
    atMoreIndented = false,
    tmp,
    ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 0x7C) {
    folding = false;
  } else if (ch === 0x3E) {
    folding = true;
  } else {
    return false;
  }
  state.kind = 'scalar';
  state.result = '';
  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);
    if (ch === 0x2B || ch === 0x2D) {
      if (CHOMPING_CLIP === chomping) {
        chomping = ch === 0x2B ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }
    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }
    } else {
      break;
    }
  }
  if (is_WHITE_SPACE(ch)) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (is_WHITE_SPACE(ch));
    if (ch === 0x23) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (!is_EOL(ch) && ch !== 0);
    }
  }
  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;
    ch = state.input.charCodeAt(state.position);
    while ((!detectedIndent || state.lineIndent < textIndent) && ch === 0x20) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }
    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }
    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    if (state.lineIndent < textIndent) {
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) {
          state.result += '\n';
        }
      }

      break;
    }

    if (folding) {
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      } else if (emptyLines === 0) {
        if (didReadContent) {
          state.result += ' ';
        }

      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    } else {
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }
    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;
    while (!is_EOL(ch) && ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, state.position, false);
  }
  return true;
}
function readBlockSequence(state, nodeIndent) {
  var _line,
    _tag = state.tag,
    _anchor = state.anchor,
    _result = [],
    following,
    detected = false,
    ch;

  if (state.firstTabInLine !== -1) return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }
    if (ch !== 0x2D) {
      break;
    }
    following = state.input.charCodeAt(state.position + 1);
    if (!is_WS_OR_EOL(following)) {
      break;
    }
    detected = true;
    state.position++;
    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }
    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}
function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
    allowCompact,
    _line,
    _keyLine,
    _keyLineStart,
    _keyPos,
    _tag = state.tag,
    _anchor = state.anchor,
    _result = {},
    overridableKeys = Object.create(null),
    keyTag = null,
    keyNode = null,
    valueNode = null,
    atExplicitKey = false,
    detected = false,
    ch;

  if (state.firstTabInLine !== -1) return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line;

    if ((ch === 0x3F || ch === 0x3A) && is_WS_OR_EOL(following)) {
      if (ch === 0x3F) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }
        detected = true;
        atExplicitKey = true;
        allowCompact = true;
      } else if (atExplicitKey) {
        atExplicitKey = false;
        allowCompact = true;
      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }
      state.position += 1;
      ch = following;

    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;
      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        break;
      }
      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (ch === 0x3A) {
          ch = state.input.charCodeAt(++state.position);
          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;
        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true;
        }
      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');
      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true;
      }
    }

    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }
      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }
  return detected;
}
function readTagProperty(state) {
  var _position,
    isVerbatim = false,
    isNamed = false,
    tagHandle,
    tagName,
    ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 0x21) return false;
  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }
  ch = state.input.charCodeAt(++state.position);
  if (ch === 0x3C) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);
  } else if (ch === 0x21) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);
  } else {
    tagHandle = '!';
  }
  _position = state.position;
  if (isVerbatim) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (ch !== 0 && ch !== 0x3E);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      if (ch === 0x21) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);
          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }
          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }
      ch = state.input.charCodeAt(++state.position);
    }
    tagName = state.input.slice(_position, state.position);
    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }
  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }
  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, 'tag name is malformed: ' + tagName);
  }
  if (isVerbatim) {
    state.tag = tagName;
  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;
  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;
  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;
  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }
  return true;
}
function readAnchorProperty(state) {
  var _position, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 0x26) return false;
  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }
  state.anchor = state.input.slice(_position, state.position);
  return true;
}
function readAlias(state) {
  var _position, alias, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 0x2A) return false;
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }
  alias = state.input.slice(_position, state.position);
  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }
  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
    allowBlockScalars,
    allowBlockCollections,
    indentStatus = 1,
    atNewLine = false,
    hasContent = false,
    typeIndex,
    typeQuantity,
    typeList,
    type,
    flowIndent,
    blockIndent;
  if (state.listener !== null) {
    state.listener('open', state);
  }
  state.tag = null;
  state.anchor = null;
  state.kind = null;
  state.result = null;
  allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;
      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }
  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;
        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }
  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }
  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }
    blockIndent = state.position - state.lineStart;
    if (indentStatus === 1) {
      if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;
        } else if (readAlias(state)) {
          hasContent = true;
          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }
        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;
          if (state.tag === null) {
            state.tag = '?';
          }
        }
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }
  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }
  } else if (state.tag === '?') {
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }
    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex];
      if (type.resolve(state.result)) {
        state.result = type.construct(state.result);
        state.tag = type.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== '!') {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];
    } else {
      type = null;
      typeList = state.typeMap.multi[state.kind || 'fallback'];
      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type = typeList[typeIndex];
          break;
        }
      }
    }
    if (!type) {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }
    if (state.result !== null && type.kind !== state.kind) {
      throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
    }
    if (!type.resolve(state.result, state.tag)) {
      throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
    } else {
      state.result = type.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }
  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null || state.anchor !== null || hasContent;
}
function readDocument(state) {
  var documentStart = state.position,
    _position,
    directiveName,
    directiveArgs,
    hasDirectives = false,
    ch;
  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = Object.create(null);
  state.anchorMap = Object.create(null);
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if (state.lineIndent > 0 || ch !== 0x25) {
      break;
    }
    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];
    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }
    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (ch === 0x23) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && !is_EOL(ch));
        break;
      }
      if (is_EOL(ch)) break;
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      directiveArgs.push(state.input.slice(_position, state.position));
    }
    if (ch !== 0) readLineBreak(state);
    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }
  skipSeparationSpace(state, true, -1);
  if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 0x2D && state.input.charCodeAt(state.position + 1) === 0x2D && state.input.charCodeAt(state.position + 2) === 0x2D) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);
  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }
  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);
  if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }
  state.documents.push(state.result);
  if (state.position === state.lineStart && testDocumentSeparator(state)) {
    if (state.input.charCodeAt(state.position) === 0x2E) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }
  if (state.position < state.length - 1) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}
function loadDocuments(input, options) {
  input = String(input);
  options = options || {};
  if (input.length !== 0) {
    if (input.charCodeAt(input.length - 1) !== 0x0A && input.charCodeAt(input.length - 1) !== 0x0D) {
      input += '\n';
    }

    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }
  var state = new State$1(input, options);
  var nullpos = input.indexOf('\0');
  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, 'null byte is not allowed in input');
  }

  state.input += '\0';
  while (state.input.charCodeAt(state.position) === 0x20) {
    state.lineIndent += 1;
    state.position += 1;
  }
  while (state.position < state.length - 1) {
    readDocument(state);
  }
  return state.documents;
}
function loadAll$1(input, iterator, options) {
  if (iterator !== null && _typeof(iterator) === 'object' && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }
  var documents = loadDocuments(input, options);
  if (typeof iterator !== 'function') {
    return documents;
  }
  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}
function load$1(input, options) {
  var documents = loadDocuments(input, options);
  if (documents.length === 0) {
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception('expected a single document in the stream, but found more');
}
var loadAll_1 = loadAll$1;
var load_1 = load$1;
var loader = {
  loadAll: loadAll_1,
  load: load_1
};

var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_BOM = 0xFEFF;
var CHAR_TAB = 0x09;
var CHAR_LINE_FEED = 0x0A;
var CHAR_CARRIAGE_RETURN = 0x0D;
var CHAR_SPACE = 0x20;
var CHAR_EXCLAMATION = 0x21;
var CHAR_DOUBLE_QUOTE = 0x22;
var CHAR_SHARP = 0x23;
var CHAR_PERCENT = 0x25;
var CHAR_AMPERSAND = 0x26;
var CHAR_SINGLE_QUOTE = 0x27;
var CHAR_ASTERISK = 0x2A;
var CHAR_COMMA = 0x2C;
var CHAR_MINUS = 0x2D;
var CHAR_COLON = 0x3A;
var CHAR_EQUALS = 0x3D;
var CHAR_GREATER_THAN = 0x3E;
var CHAR_QUESTION = 0x3F;
var CHAR_COMMERCIAL_AT = 0x40;
var CHAR_LEFT_SQUARE_BRACKET = 0x5B;
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D;
var CHAR_GRAVE_ACCENT = 0x60;
var CHAR_LEFT_CURLY_BRACKET = 0x7B;
var CHAR_VERTICAL_LINE = 0x7C;
var CHAR_RIGHT_CURLY_BRACKET = 0x7D;

var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0x00] = '\\0';
ESCAPE_SEQUENCES[0x07] = '\\a';
ESCAPE_SEQUENCES[0x08] = '\\b';
ESCAPE_SEQUENCES[0x09] = '\\t';
ESCAPE_SEQUENCES[0x0A] = '\\n';
ESCAPE_SEQUENCES[0x0B] = '\\v';
ESCAPE_SEQUENCES[0x0C] = '\\f';
ESCAPE_SEQUENCES[0x0D] = '\\r';
ESCAPE_SEQUENCES[0x1B] = '\\e';
ESCAPE_SEQUENCES[0x22] = '\\"';
ESCAPE_SEQUENCES[0x5C] = '\\\\';
ESCAPE_SEQUENCES[0x85] = '\\N';
ESCAPE_SEQUENCES[0xA0] = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';
var DEPRECATED_BOOLEANS_SYNTAX = ['y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON', 'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'];
var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;
  if (map === null) return {};
  result = {};
  keys = Object.keys(map);
  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);
    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];
    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }
    result[tag] = style;
  }
  return result;
}
function encodeHex(character) {
  var string, handle, length;
  string = character.toString(16).toUpperCase();
  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
  }
  return '\\' + handle + common.repeat('0', length - string.length) + string;
}
var QUOTING_TYPE_SINGLE = 1,
  QUOTING_TYPE_DOUBLE = 2;
function State(options) {
  this.schema = options['schema'] || _default;
  this.indent = Math.max(1, options['indent'] || 2);
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid = options['skipInvalid'] || false;
  this.flowLevel = common.isNothing(options['flowLevel']) ? -1 : options['flowLevel'];
  this.styleMap = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys = options['sortKeys'] || false;
  this.lineWidth = options['lineWidth'] || 80;
  this.noRefs = options['noRefs'] || false;
  this.noCompatMode = options['noCompatMode'] || false;
  this.condenseFlow = options['condenseFlow'] || false;
  this.quotingType = options['quotingType'] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes = options['forceQuotes'] || false;
  this.replacer = typeof options['replacer'] === 'function' ? options['replacer'] : null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;
  this.tag = null;
  this.result = '';
  this.duplicates = [];
  this.usedDuplicates = null;
}

function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
    position = 0,
    next = -1,
    result = '',
    line,
    length = string.length;
  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }
    if (line.length && line !== '\n') result += ind;
    result += line;
  }
  return result;
}
function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}
function testImplicitResolving(state, str) {
  var index, length, type;
  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];
    if (type.resolve(str)) {
      return true;
    }
  }
  return false;
}

function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

function isPrintable(c) {
  return 0x00020 <= c && c <= 0x00007E || 0x000A1 <= c && c <= 0x00D7FF && c !== 0x2028 && c !== 0x2029 || 0x0E000 <= c && c <= 0x00FFFD && c !== CHAR_BOM || 0x10000 <= c && c <= 0x10FFFF;
}

function isNsCharOrWhitespace(c) {
  return isPrintable(c) && c !== CHAR_BOM
  && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
}

function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
  inblock ?
  cIsNsCharOrWhitespace : cIsNsCharOrWhitespace
  && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET

  ) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar;
}

function isPlainSafeFirst(c) {
  return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c)
  && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET
  && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE
  && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}

function isPlainSafeLast(c) {
  return !isWhitespace(c) && c !== CHAR_COLON;
}

function codePointAt(string, pos) {
  var first = string.charCodeAt(pos),
    second;
  if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}
var STYLE_PLAIN = 1,
  STYLE_SINGLE = 2,
  STYLE_LITERAL = 3,
  STYLE_FOLDED = 4,
  STYLE_DOUBLE = 5;

function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false;
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1;
  var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
  if (singleLineOnly || forceQuotes) {
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
          i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== ' ';
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    hasFoldableLine = hasFoldableLine || shouldTrackWidth && i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== ' ';
  }
  if (!hasLineBreak && !hasFoldableLine) {
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}

function writeScalar(state, string, level, iskey, inblock) {
  state.dump = function () {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
      }
    }
    var indent = state.indent * Math.max(1, level);
    var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    var singleLineOnly = iskey
    || state.flowLevel > -1 && level >= state.flowLevel;
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }
    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {
      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception('impossible error: invalid scalar style');
    }
  }();
}

function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  var clip = string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : clip ? '' : '-';
  return indentIndicator + chomp + '\n';
}

function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

function foldString(string, width) {
  var lineRe = /(\n+)([^\n]*)/g;

  var result = function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }();
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  var match;
  while (match = lineRe.exec(string)) {
    var prefix = match[1],
      line = match[2];
    moreIndented = line[0] === ' ';
    result += prefix + (!prevMoreIndented && !moreIndented && line !== '' ? '\n' : '') + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }
  return result;
}

function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  var breakRe = / [^ ]/g;
  var match;
  var start = 0,
    end,
    curr = 0,
    next = 0;
  var result = '';

  while (match = breakRe.exec(line)) {
    next = match.index;
    if (next - start > width) {
      end = curr > start ? curr : next;
      result += '\n' + line.slice(start, end);
      start = end + 1;
    }

    curr = next;
  }

  result += '\n';
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }
  return result.slice(1);
}

function escapeString(string) {
  var result = '';
  var char = 0;
  var escapeSeq;
  for (var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];
    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 0x10000) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }
  return result;
}
function writeFlowSequence(state, level, object) {
  var _result = '',
    _tag = state.tag,
    index,
    length,
    value;
  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];
    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    if (writeNode(state, level, value, false, false) || typeof value === 'undefined' && writeNode(state, level, null, false, false)) {
      if (_result !== '') _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = '[' + _result + ']';
}
function writeBlockSequence(state, level, object, compact) {
  var _result = '',
    _tag = state.tag,
    index,
    length,
    value;
  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];
    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === 'undefined' && writeNode(state, level + 1, null, true, true, false, true)) {
      if (!compact || _result !== '') {
        _result += generateNextLine(state, level);
      }
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = _result || '[]';
}

function writeFlowMapping(state, level, object) {
  var _result = '',
    _tag = state.tag,
    objectKeyList = Object.keys(object),
    index,
    length,
    objectKey,
    objectValue,
    pairBuffer;
  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';
    if (_result !== '') pairBuffer += ', ';
    if (state.condenseFlow) pairBuffer += '"';
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];
    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }
    if (!writeNode(state, level, objectKey, false, false)) {
      continue;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';
    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');
    if (!writeNode(state, level, objectValue, false, false)) {
      continue;
    }

    pairBuffer += state.dump;

    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = '{' + _result + '}';
}
function writeBlockMapping(state, level, object, compact) {
  var _result = '',
    _tag = state.tag,
    objectKeyList = Object.keys(object),
    index,
    length,
    objectKey,
    objectValue,
    explicitPair,
    pairBuffer;

  if (state.sortKeys === true) {
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    throw new exception('sortKeys must be a boolean or a function');
  }
  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';
    if (!compact || _result !== '') {
      pairBuffer += generateNextLine(state, level);
    }
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];
    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }
    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue;
    }

    explicitPair = state.tag !== null && state.tag !== '?' || state.dump && state.dump.length > 1024;
    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }
    pairBuffer += state.dump;
    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }
    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue;
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }
    pairBuffer += state.dump;

    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = _result || '{}';
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;
  typeList = explicit ? state.explicitTypes : state.implicitTypes;
  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];
    if ((type.instanceOf || type.predicate) && (!type.instanceOf || _typeof(object) === 'object' && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
      if (explicit) {
        if (type.multi && type.representName) {
          state.tag = type.representName(object);
        } else {
          state.tag = type.tag;
        }
      } else {
        state.tag = '?';
      }
      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;
        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }
        state.dump = _result;
      }
      return true;
    }
  }
  return false;
}

function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;
  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }
  var type = _toString.call(state.dump);
  var inblock = block;
  var tagStr;
  if (block) {
    block = state.flowLevel < 0 || state.flowLevel > level;
  }
  var objectOrArray = type === '[object Object]' || type === '[object Array]',
    duplicateIndex,
    duplicate;
  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }
  if (state.tag !== null && state.tag !== '?' || duplicate || state.indent !== 2 && level > 0) {
    compact = false;
  }
  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && Object.keys(state.dump).length !== 0) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && state.dump.length !== 0) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type === '[object Undefined]') {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception('unacceptable kind of an object to dump ' + type);
    }
    if (state.tag !== null && state.tag !== '?') {
      tagStr = encodeURI(state.tag[0] === '!' ? state.tag.slice(1) : state.tag).replace(/!/g, '%21');
      if (state.tag[0] === '!') {
        tagStr = '!' + tagStr;
      } else if (tagStr.slice(0, 18) === 'tag:yaml.org,2002:') {
        tagStr = '!!' + tagStr.slice(18);
      } else {
        tagStr = '!<' + tagStr + '>';
      }
      state.dump = tagStr + ' ' + state.dump;
    }
  }
  return true;
}
function getDuplicateReferences(object, state) {
  var objects = [],
    duplicatesIndexes = [],
    index,
    length;
  inspectNode(object, objects, duplicatesIndexes);
  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}
function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList, index, length;
  if (object !== null && _typeof(object) === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);
      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);
        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}
function dump$1(input, options) {
  options = options || {};
  var state = new State(options);
  if (!state.noRefs) getDuplicateReferences(input, state);
  var value = input;
  if (state.replacer) {
    value = state.replacer.call({
      '': value
    }, '', value);
  }
  if (writeNode(state, 0, value, true, true)) return state.dump + '\n';
  return '';
}
var dump_1 = dump$1;
var dumper = {
  dump: dump_1
};
function renamed(from, to) {
  return function () {
    throw new Error('Function yaml.' + from + ' is removed in js-yaml 4. ' + 'Use yaml.' + to + ' instead, which is now safe by default.');
  };
}
var Type = type;
var Schema = schema;
var FAILSAFE_SCHEMA = failsafe;
var JSON_SCHEMA = json;
var CORE_SCHEMA = core;
var DEFAULT_SCHEMA = _default;
var load = loader.load;
var loadAll = loader.loadAll;
var dump = dumper.dump;
var YAMLException = exception;

var types = {
  binary: binary,
  float: float,
  map: map$1,
  null: _null,
  pairs: pairs,
  set: set,
  timestamp: timestamp,
  bool: bool,
  int: int,
  merge: merge,
  omap: omap,
  seq: seq,
  str: str
};

var safeLoad = renamed('safeLoad', 'load');
var safeLoadAll = renamed('safeLoadAll', 'loadAll');
var safeDump = renamed('safeDump', 'dump');
var jsYaml = {
  Type: Type,
  Schema: Schema,
  FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
  JSON_SCHEMA: JSON_SCHEMA,
  CORE_SCHEMA: CORE_SCHEMA,
  DEFAULT_SCHEMA: DEFAULT_SCHEMA,
  load: load,
  loadAll: loadAll,
  dump: dump,
  YAMLException: YAMLException,
  types: types,
  safeLoad: safeLoad,
  safeLoadAll: safeLoadAll,
  safeDump: safeDump
};

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire (path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var fs$3 = {exports: {}};

(function (module, exports) {
if (typeof commonjsRequire !== 'undefined') {
  var f = require$$0;
  if (f.default) f = f.default;
  exports.default = f;
  module.exports = exports.default;
}
}(fs$3, fs$3.exports));

var fs$2 = fs$3.exports;

var fsMod = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), fs$3.exports, {
    'default': fs$2
}));

var path$1 = {exports: {}};

(function (module, exports) {
if (typeof commonjsRequire !== 'undefined') {
  var path = require$$0$1;
  if (path.default) path = path.default;
  exports.default = path;
  module.exports = exports.default;
}
}(path$1, path$1.exports));

var path_1 = path$1.exports;

var pathMod = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), path$1.exports, {
    'default': path_1
}));

var extname = (function (filename) {
  if (filename.indexOf('.') < 0) return undefined;
  return ".".concat(filename.split('.').pop());
});

var isDeno$1 = typeof Deno !== 'undefined';
var YAML$1 = typeof jsYaml !== 'undefined' && jsYaml.load ? jsYaml : undefined;
var fs$1 = fsMod ? fs$2 || fsMod : undefined;
var path = pathMod ? path_1 || pathMod : undefined;
var readFileInNodeSync = function readFileInNodeSync(filename) {
  var data = fs$1.readFileSync(filename, 'utf8');
  var stat;
  try {
    stat = fs$1.statSync(filename);
  } catch (e) {}
  return {
    data: data,
    stat: stat
  };
};
var readFileInNode = function readFileInNode(filename) {
  return new Promise(function (resolve, reject) {
    fs$1.readFile(filename, 'utf8', function (err, data) {
      if (err) return reject(err);
      fs$1.stat(filename, function (err, stat) {
        if (err) return resolve({
          data: data
        });
        return resolve({
          data: data,
          stat: stat
        });
      });
    });
  });
};
var readFileInDenoSync = function readFileInDenoSync(filename) {
  var decoder = new TextDecoder('utf-8');
  var d = Deno.readFileSync(filename);
  var data = decoder.decode(d);
  var stat;
  try {
    stat = Deno.statSync(filename);
  } catch (e) {}
  return {
    data: data,
    stat: stat
  };
};
var readFileInDeno = function readFileInDeno(filename) {
  return new Promise(function (resolve, reject) {
    var decoder = new TextDecoder('utf-8');
    Deno.readFile(filename).then(function (d) {
      var data = decoder.decode(d);
      Deno.stat(filename).then(function (stat) {
        return resolve({
          data: data,
          stat: stat
        });
      }).catch(function () {
        return resolve({
          data: data
        });
      });
    }).catch(reject);
  });
};
var replaceLast = function replaceLast(str, find, replace) {
  var index = str.lastIndexOf(find);
  if (index > -1) {
    return str.substring(0, index) + replace + str.substring(index + find.length);
  }
  return str.toString();
};
var parseData = function parseData(extension, data, options) {
  data = data.replace(/^\uFEFF/, '');
  var result = {};
  switch (extension) {
    case '.js':
    case '.ts':
      if (typeof module === 'undefined') {
        if (data.indexOf('exports') > -1) {
          data = "(".concat(replaceLast(data.substring(data.indexOf('=') + 1), '};', ''), ")");
        } else if (data.indexOf('export default ') > -1) {
          data = "(".concat(replaceLast(data.substring(data.indexOf('export default ') + 15), '};', ''), ")");
        }
      }
      result = eval(data);
      break;
    case '.json5':
      result = lib.parse(data);
      break;
    case '.yml':
    case '.yaml':
      result = YAML$1.load(data);
      break;
    default:
      result = options.parse(data);
  }
  return result;
};
var resolvePath = function resolvePath(filename) {
  return !path.isAbsolute(filename) && typeof process !== 'undefined' && process.cwd && !fs$1.existsSync(filename) ? path.join(process.cwd(), filename) : filename;
};
function readFileSync(filename, options) {
  var ext = extname(filename);
  if (['.js', '.ts'].indexOf(ext) > -1 && typeof require !== 'undefined') {
    return require(resolvePath(filename));
  }
  var data, stat;
  if (isDeno$1) {
    var ret = readFileInDenoSync(filename);
    data = ret.data;
    stat = ret.stat;
  } else {
    var _ret = readFileInNodeSync(filename);
    data = _ret.data;
    stat = _ret.stat;
  }
  return {
    data: parseData(ext, data, options),
    stat: stat
  };
}
function readFile(filename) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    parse: JSON.parse
  };
  var ext = extname(filename);
  if (['.js', '.ts'].indexOf(ext) > -1 && typeof require !== 'undefined') {
    return new Promise(function (resolve, reject) {
      try {
        resolve({
          data: require(resolvePath(filename))
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  var fn = isDeno$1 ? readFileInDeno : readFileInNode;
  return new Promise(function (resolve, reject) {
    fn(filename).then(function (_ref) {
      var data = _ref.data,
        stat = _ref.stat;
      try {
        var ret = parseData(ext, data, options);
        resolve({
          data: ret,
          stat: stat
        });
      } catch (err) {
        err.message = 'error parsing ' + filename + ': ' + err.message;
        reject(err);
      }
    }).catch(reject);
  });
}

var isDeno = typeof Deno !== 'undefined';
var YAML = typeof jsYaml !== 'undefined' && jsYaml.load ? jsYaml : undefined;
var fs = fsMod ? fs$2 || fsMod : undefined;

function dirname(path) {
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) return '//';
  return path.slice(0, end);
}
var writeFileInNode = function writeFileInNode(filename, payload) {
  return new Promise(function (resolve, reject) {
    fs.mkdir(dirname(filename), {
      recursive: true
    }, function () {
      fs.writeFile(filename, payload, 'utf8', function (err, data) {
        return err ? reject(err) : resolve(data);
      });
    });
  });
};
var removeFileInNode = function removeFileInNode(filename) {
  return new Promise(function (resolve, reject) {
    return fs.unlink(filename, function (err) {
      return err ? reject(err) : resolve();
    });
  });
};
var writeFileInDeno = function writeFileInDeno(filename, payload) {
  var encoder = new TextEncoder();
  var data = encoder.encode(payload);
  return new Promise(function (resolve, reject) {
    Deno.mkdir(dirname(filename), {
      recursive: true
    }).then(function () {
      Deno.writeFile(filename, data).then(resolve, reject);
    }).catch(function () {
      Deno.writeFile(filename, data).then(resolve, reject);
    });
  });
};
var removeFileInDeno = function removeFileInDeno(filename) {
  return Deno.remove(filename);
};
var stringifyData = function stringifyData(extension, data, options) {
  var result = '';
  switch (extension) {
    case '.js':
    case '.ts':
      if (typeof module === 'undefined') {
        result = "export default ".concat(options.stringify(data, null, options.ident));
      } else {
        result = "module.exports = ".concat(options.stringify(data, null, options.ident));
      }
      break;
    case '.json5':
      result = lib.stringify(data, null, options.ident);
      break;
    case '.yml':
    case '.yaml':
      result = YAML.dump(data, {
        ident: options.indent
      });
      break;
    default:
      result = options.stringify(data, null, options.ident);
  }
  return result;
};
function writeFile(filename, payload) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    stringify: JSON.stringify,
    ident: 2
  };
  var ext = extname(filename);
  var data;
  try {
    data = stringifyData(ext, payload, options);
  } catch (err) {
    err.message = 'error stringifying ' + filename + ': ' + err.message;
    throw err;
  }
  var fn = isDeno ? writeFileInDeno : writeFileInNode;
  return fn(filename, data);
}
function removeFile(filename) {
  var fn = isDeno ? removeFileInDeno : removeFileInNode;
  return fn(filename);
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var getDefaults = function getDefaults() {
  return {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/{{lng}}/{{ns}}.missing.json',
    ident: 2,
    parse: JSON.parse,
    stringify: JSON.stringify
  };
};
var Backend = function () {
  function Backend(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, Backend);
    this.services = services;
    this.options = options;
    this.allOptions = allOptions;
    this.type = 'backend';
    this.init(services, options, allOptions);
  }
  _createClass(Backend, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services;
      this.options = defaults(options, this.options || {}, getDefaults());
      this.allOptions = allOptions;
      this.queuedWrites = {};
      this.debouncedWrite = debounce(this.write, 250);
    }
  }, {
    key: "read",
    value: function read(language, namespace, callback) {
      var _this = this;
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath(language, namespace);
      }
      var filename = this.services.interpolator.interpolate(loadPath, {
        lng: language,
        ns: namespace
      });
      if (this.allOptions.initImmediate === false) {
        try {
          var _readFileSync = readFileSync(filename, this.options),
            data = _readFileSync.data,
            stat = _readFileSync.stat;
          if (this.options.expirationTime && stat && stat.mtime && stat.mtime.getTime() + this.options.expirationTime < Date.now()) {
            this.removeFile(language, namespace);
            return callback(new Error('File expired!'), false);
          }

          callback(null, data);
        } catch (err) {
          callback(err, false);
        }

        return;
      }
      readFile(filename, this.options).then(function (_ref) {
        var data = _ref.data,
          stat = _ref.stat;
        if (_this.options.expirationTime && stat && stat.mtime && stat.mtime.getTime() + _this.options.expirationTime < Date.now()) {
          _this.removeFile(language, namespace);
          return callback(new Error('File expired!'), false);
        }

        callback(null, data);
      }).catch(function (err) {
        return callback(err, false);
      });
    }
  }, {
    key: "create",
    value: function create(languages, namespace, key, fallbackValue, callback) {
      var _this2 = this;
      if (!callback) callback = function callback() {};
      if (typeof languages === 'string') languages = [languages];
      var todo = languages.length;
      var done = function done() {
        if (! --todo) callback();
      };
      languages.forEach(function (lng) {
        _this2.queue.call(_this2, lng, namespace, key, fallbackValue, done);
      });
    }

  }, {
    key: "save",
    value:
    function save(language, namespace, data, callback) {
      var _this3 = this;
      if (!callback) callback = function callback() {};
      var keys = Object.keys(data);
      var todo = keys.length;
      var done = function done() {
        if (! --todo) callback();
      };
      keys.forEach(function (key) {
        _this3.queue.call(_this3, language, namespace, key, data[key], done);
      });
    }
  }, {
    key: "removeFile",
    value: function removeFile$1(language, namespace) {
      var addPath = this.options.addPath;
      if (typeof this.options.addPath === 'function') {
        addPath = this.options.addPath(language, namespace);
      }
      var filename = this.services.interpolator.interpolate(addPath, {
        lng: language,
        ns: namespace
      });
      removeFile(filename, this.options).then(function () {}).catch(function () {});
    }
  }, {
    key: "write",
    value: function write() {
      for (var lng in this.queuedWrites) {
        var namespaces = this.queuedWrites[lng];
        if (lng !== 'locks') {
          for (var ns in namespaces) {
            this.writeFile(lng, ns);
          }
        }
      }
    }
  }, {
    key: "writeFile",
    value: function writeFile$1(lng, namespace) {
      var _this4 = this;
      var lock = getPath(this.queuedWrites, ['locks', lng, namespace]);
      if (lock) return;
      var addPath = this.options.addPath;
      if (typeof this.options.addPath === 'function') {
        addPath = this.options.addPath(lng, namespace);
      }
      var filename = this.services.interpolator.interpolate(addPath, {
        lng: lng,
        ns: namespace
      });
      var missings = getPath(this.queuedWrites, [lng, namespace]);
      setPath(this.queuedWrites, [lng, namespace], []);
      if (missings.length) {
        setPath(this.queuedWrites, ['locks', lng, namespace], true);
        var proceed = function proceed(_ref2) {
          var data = _ref2.data;
          missings.forEach(function (missing) {
            var path = _this4.allOptions.keySeparator === false ? [missing.key] : missing.key.split(_this4.allOptions.keySeparator || '.');
            setPath(data, path, missing.fallbackValue);
          });
          var proceedWrite = function proceedWrite() {
            setPath(_this4.queuedWrites, ['locks', lng, namespace], false);
            missings.forEach(function (missing) {
              if (missing.callback) missing.callback();
            });
            _this4.debouncedWrite();
          };
          writeFile(filename, data, _this4.options).then(proceedWrite).catch(proceedWrite);
        };
        readFile(filename, this.options).then(proceed).catch(function () {
          return proceed({
            data: {}
          });
        });
      }
    }
  }, {
    key: "queue",
    value: function queue(lng, namespace, key, fallbackValue, callback) {
      pushPath(this.queuedWrites, [lng, namespace], {
        key: key,
        fallbackValue: fallbackValue || '',
        callback: callback
      });
      this.debouncedWrite();
    }
  }]);
  return Backend;
}();
Backend.type = 'backend';

var mapObj = {exports: {}};

const isObject = value => typeof value === 'object' && value !== null;
const mapObjectSkip = Symbol('skip');

// Customized for this use-case
const isObjectCustom = value =>
	isObject(value) &&
	!(value instanceof RegExp) &&
	!(value instanceof Error) &&
	!(value instanceof Date);

const mapObject = (object, mapper, options, isSeen = new WeakMap()) => {
	options = {
		deep: false,
		target: {},
		...options
	};

	if (isSeen.has(object)) {
		return isSeen.get(object);
	}

	isSeen.set(object, options.target);

	const {target} = options;
	delete options.target;

	const mapArray = array => array.map(element => isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);
	if (Array.isArray(object)) {
		return mapArray(object);
	}

	for (const [key, value] of Object.entries(object)) {
		const mapResult = mapper(key, value, object);

		if (mapResult === mapObjectSkip) {
			continue;
		}

		let [newKey, newValue, {shouldRecurse = true} = {}] = mapResult;

		// Drop `__proto__` keys.
		if (newKey === '__proto__') {
			continue;
		}

		if (options.deep && shouldRecurse && isObjectCustom(newValue)) {
			newValue = Array.isArray(newValue) ?
				mapArray(newValue) :
				mapObject(newValue, mapper, options, isSeen);
		}

		target[newKey] = newValue;
	}

	return target;
};

mapObj.exports = (object, mapper, options) => {
	if (!isObject(object)) {
		throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
	}

	return mapObject(object, mapper, options);
};

mapObj.exports.mapObjectSkip = mapObjectSkip;

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}

function dotCase(input, options) {
    if (options === void 0) { options = {}; }
    return noCase(input, __assign({ delimiter: "." }, options));
}

function snakeCase$1(input, options) {
    if (options === void 0) { options = {}; }
    return dotCase(input, __assign({ delimiter: "_" }, options));
}

var dist_es2015 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    snakeCase: snakeCase$1
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(dist_es2015);

const map = mapObj.exports;
const { snakeCase } = require$$1;

var snakecaseKeys = function (obj, options) {
  options = Object.assign({ deep: true, exclude: [], parsingOptions: {} }, options);

  return map(obj, function (key, val) {
    return [
      matches(options.exclude, key) ? key : snakeCase(key, options.parsingOptions),
      val
    ]
  }, options)
};

function matches (patterns, value) {
  return patterns.some(function (pattern) {
    return typeof pattern === 'string'
      ? pattern === value
      : pattern.test(value)
  })
}

/*
New Descriptor, since 2021
work style - long descriptor, summary
work Value - long descriptor, summary
Work Interest - long descriptor, summary
*/
Object.freeze({
    achievement_effort: {
        name: 'Achievement/Effort',
        high_description: `Sets ambitious personal targets and would take definitive actions to achieve them. Strives for high quality performance.`,
        mid_description: '',
        low_description: `May struggle to execute tasks efficiently and meet performance standards. Likely to lack follow through and rarely meets goals.`,
        summary: '',
        question_contents: [],
    },
    persistence: {
        name: 'Persistence',
        high_description: `Demonstrates tenacity and resilience. Remains committed to strategic plans and purpose despite challenges.`,
        mid_description: '',
        low_description: `Likely to get overwhelmed by pressure and hurdles. May compromise own views and plans of action under adversity.`,
        summary: '',
        question_contents: [],
    },
    initiative: {
        name: 'Initiative',
        high_description: `Accepts new and additional tasks without being asked. Proactively identifies ways to contribute and improve.`,
        mid_description: '',
        low_description: `Rarely takes proactive actions to influence situations and usually wait for others to instigate.`,
        summary: '',
        question_contents: [],
    },
    leadership: {
        name: 'Leadership',
        high_description: `Willingness to guide, lead and provide directions to others. Suggests ways to improve quality and effectiveness.`,
        mid_description: '',
        low_description: 'Avoid or rarely steps up to lead. May need help managing and guiding group efforts to achieve team success.',
        summary: '',
        question_contents: [],
    },
    cooperation: {
        name: 'Cooperation',
        high_description: 'Ability to work positively and harmoniously with different people, treats everyone fairly and respectfully.',
        mid_description: '',
        low_description: 'May exhibit negative behaviours when working with others, impacting the morale and accomplishments of the team.',
        summary: '',
        question_contents: [],
    },
    concern_for_others: {
        name: 'Concern for Others',
        high_description: 'Considers and respects the needs, feelings and perspectives of others. Offers support to others, especially in their difficult situations.',
        mid_description: '',
        low_description: 'Weak empathetic abilities, may come off as tactless or lack compassion for others.',
        summary: '',
        question_contents: [],
    },
    social_orientation: {
        name: 'Social Orientation',
        high_description: 'Encourages unity and promotes synergy within a team to achieve goals. Builds and maintains productive relationships with others.',
        mid_description: '',
        low_description: 'May not prefer building relationships with others to get tasks done.',
        summary: '',
        question_contents: [],
    },
    self_control: {
        name: 'Self Control',
        high_description: 'Ability to recognise and regulate personal behaviour, even in the face of adversity. Aware of the effects of own actions and moods on others.',
        mid_description: '',
        low_description: 'May find it difficult to manage own emotions in a conscious and effective way, resulting in behavioural outbursts.',
        summary: '',
        question_contents: [],
    },
    stress_tolerance: {
        name: 'Stress Tolerance',
        high_description: 'Ability to make rational decisions and continue to perform effectively in stressful situations. Regards criticism objectively.',
        mid_description: '',
        low_description: 'Tends to allow emotions to affect judgments and may find it perform under stress. May react defensively to criticism.',
        summary: '',
        question_contents: [],
    },
    adaptability_flexibility: {
        name: 'Adaptability/Flexibility',
        high_description: 'Responds positively to changes and embrace new practices. Shifts strategy appropriately to achieve results in dynamic situations.',
        mid_description: '',
        low_description: 'May resist change or be unreceptive to new viewpoints or directions. May find it difficult adjusting to the needs of changing conditions.',
        summary: '',
        question_contents: [],
    },
    dependability: {
        name: 'Dependability',
        high_description: 'Diligently follows through on commitments and consistently meet deadlines. Demonstrates accountability at work and takes ownership of mistakes.',
        mid_description: '',
        low_description: 'May appear unreliable and not consistent in meeting commitments to others or deadlines.',
        summary: '',
        question_contents: [],
    },
    attention_to_detail: {
        name: 'Attention to Detail',
        high_description: 'Performs tasks in a detailed manner, ensure accuracy and completeness. Tends to the quality of work produced.',
        mid_description: '',
        low_description: 'Likely to be less meticulous and thorough, often require rework and oversight from others. May fall short of quality expectations.',
        summary: '',
        question_contents: [],
    },
    integrity: {
        name: 'Integrity',
        high_description: 'Firmly adheres to code of conduct and ethical principles. Trustworthy and shows consistency in words and actions.',
        mid_description: '',
        low_description: 'May struggle with ethical dilemmas and conflict-of-interest situations. Behaviour varies across situations and values appear self-serving.',
        summary: '',
        question_contents: [],
    },
    independence: {
        name: 'Independence',
        high_description: 'Self-sufficient and completes tasks with minimal support. Ability to make decisions with minimal inputs from others.',
        mid_description: '',
        low_description: 'May not prefer handling tasks on one’s own, often relying on others for guidance and support.',
        summary: '',
        question_contents: [],
    },
    innovation: {
        name: 'Innovation',
        high_description: 'Ability to connect ideas, experiment with fresh approaches and develop novel solutions to existing problems.',
        mid_description: '',
        low_description: 'May not be creative or think of out-of-the-box approaches to solve existing problems.',
        summary: '',
        question_contents: [],
    },
    analytical_thinking: {
        name: 'Analytical Thinking',
        high_description: 'Ability to examine issues critically, and draw factual and sound conclusions based upon data and analyses conducted.',
        mid_description: '',
        low_description: 'May not use logic to solve problems or has difficulty sifting through multi-faceted information to grasp issues.',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    achievement: {
        name: 'Achievement',
        high_description: 'Enjoys an outcome-oriented culture that allow maximum utilization of own skills and capabilities to achieve results.',
        mid_description: '',
        low_description: 'Uncomfortable in an environment where outcomes are emphasized. Believes that other considerations should take priority over results.',
        summary: '',
        question_contents: [],
    },
    working_conditions: {
        name: 'Working Conditions',
        high_description: 'Motivated by opportunities to learn and try different tasks in an environment thats focuses on development.',
        mid_description: '',
        low_description: 'Less motivated to learn and try different tasks, preferring an environment that is task consistent.',
        summary: '',
        question_contents: [],
    },
    recognition: {
        name: 'Recognition',
        high_description: 'Motivated by extrinsic rewards, recognition and growth opportunities.',
        mid_description: '',
        low_description: 'Less motivated by status or financial incentive. Does not define personal success by moving into a bigger role.',
        summary: '',
        question_contents: [],
    },
    relationships: {
        name: 'Relationships',
        high_description: 'Prefers a warm and collaborative environment, built on mutual trust, sincerity, teamwork and positive relationships.',
        mid_description: '',
        low_description: 'Place low importance on building team camaraderie or workplace synergy. Less likely to engage with others at work.',
        summary: '',
        question_contents: [],
    },
    support: {
        name: 'Support',
        high_description: 'Values tolerance and ethical practices at the workplace. Favours a supportive and fair environment.',
        mid_description: '',
        low_description: 'Does not value tolerance and ethical practices at the workplace. Does not prioritize a supportive and fair environment.',
        summary: '',
        question_contents: [],
    },
    independence: {
        name: 'Independence',
        high_description: 'Values freedom for experimentation and empowerment to act without needing frequent command, interference and confirmation.',
        mid_description: '',
        low_description: 'Autonomy and independence not viewed as an important factor. Would prefer receiving directions and supervision on tasks.',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    realistic: {
        name: 'Realistic',
        high_description: 'Prefers working hands-on to explore and accomplish tasks in a practical setting.',
        mid_description: '',
        low_description: 'Aversion towards manual tasks.',
        summary: '',
        question_contents: [],
    },
    investigative: {
        name: 'Investigative',
        high_description: 'Enjoys solving abstract and highly complex problems.',
        mid_description: '',
        low_description: 'Less interested in research, mathematical or scientific activities.',
        summary: '',
        question_contents: [],
    },
    artistic: {
        name: 'Artistic',
        high_description: 'Enjoys activities that involve creativity, originality and self-expression.',
        mid_description: '',
        low_description: 'Unenthusiastic about artistic pursuits such as creating original and unique works.',
        summary: '',
        question_contents: [],
    },
    social: {
        name: 'Social',
        high_description: 'Likes to be helpful and participate in social activities.',
        mid_description: '',
        low_description: 'Less keen on socializing or being of service to others.',
        summary: '',
        question_contents: [],
    },
    enterprising: {
        name: 'Enterprising',
        high_description: 'Enjoys leading people, making decisions, taking risks and persuading others to achieve goals.',
        mid_description: '',
        low_description: 'Prefers to not be in a directive and influential role.',
        summary: '',
        question_contents: [],
    },
    conventional: {
        name: 'Conventional',
        high_description: 'Prefers working within established chain of command and following well-defined guidelines.',
        mid_description: '',
        low_description: 'Aversion towards routine and process-based work.',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    achievement_effort: {
        name: 'Achievement/Effort',
        high_description: '{{name}} tends to develop stretched goals for oneself to consistently pursue and accomplish tasks. {{name}} would work hard to meet standards, and pushes oneself to exert effort in order achieve desired outcomes.',
        mid_description: '{{name}} would generally develop goals for oneself to pursue and complete tasks. {{name}} typically works hard to meet standards and pushes oneself to exert effort but may occasionally fall short in achieving some desired outcomes.',
        low_description: '{{name}} may need guidance in goal setting and organising activities to deliver expected results. {{name}} tends not to endeavour to meet expectations when pursuing tasks, and may not push oneself to exert effort to achieve outcomes.',
        summary: 'Establishing and maintaining personally challenging achievements, goals and exerting effort toward mastering tasks.',
        question_contents: [
            {
                question: 'Describe a time when you worked hard towards completing a challenging goal successfully.',
                additionals: [
                    'What was the task about? Why was it a challenge for you?',
                    'What was your role? ',
                    'What did you do in this task or project? Did you face any obstacles?',
                    'What was the end outcome? What did you do well on and what could be improved?',
                ],
            },
        ],
    },
    persistence: {
        name: 'Persistence',
        high_description: '{{name}} would often respond to setbacks with continued efforts and stay the course. In the face of adversities or obstacles, {{name}} tends to persevere.',
        mid_description: '{{name}} would generally persevere when encountering setbacks, but may occasionally feel despondent or require some support from others to push through obstacles.',
        low_description: '{{name}} may tend to give up when encountering setbacks and would require substantial support from others to push through obstacles.',
        summary: 'Demonstrating persistence in the face of obstacles.',
        question_contents: [
            {
                question: 'Describe a situation in which you had to overcome one or more obstacles to achieve desired results.',
                additionals: [
                    'What was this situation about? What challenges did you face?',
                    'What was your role? What did you have to do? How did you have to work with others to achieve this?',
                    'How did you face and solve the obstacle(s)? How did you feel about it?',
                    'What was the outcome of this project? What would you change if you could do it again?',
                ],
            },
        ],
    },
    initiative: {
        name: 'Initiative',
        high_description: '{{name}} would often demonstrate readiness to take on duties and going the extra mile voluntarily. {{name}} would also continuously search for ways to improve processes rather than accepting status quo.',
        mid_description: '{{name}} would typically complete tasks with minimal prompting and guidance from others and is generally proactive in contributing at work, but may occasionally require some convincing to take on new and additional duties.',
        low_description: '{{name}} would rarely initiates to take on duties at work, and has a tendency to adopt the wait-and-see approach. {{name}} may need frequent prompts to complete tasks and may come across as reactive to problems.',
        summary: 'Willingness to initiate and take on responsibilities and challenges.',
        question_contents: [
            {
                question: 'Share a recent example where you stepped up and took on more than what was expected of you.',
                additionals: [
                    'What was this example about?',
                    'What did you have to do?',
                    'What did you do? How and why did you decide to step up?',
                    'What was the end outcome? Would you do anything differently?',
                ],
            },
        ],
    },
    leadership: {
        name: 'Leadership',
        high_description: '{{name}} tends to step up and assume a leadership role when needed, ensuring success from the concerted effort of the team. {{name}} is often skillful in navigating and guiding others.',
        mid_description: '{{name}} would occasionally step up and assume a leadership role when needed, coordinating the team to achieve objectives. {{name}} is generally able to navigate and guide others.',
        low_description: '{{name}} tends not to come forward when situation calls for a leader to steer the team to achieve objectives. When appointed to a leadership role, {{name}} may not be as comfortable and would require support and advice from others.',
        summary: 'Willingness to lead, take charge, and offer opinions and directions one believes in.',
        question_contents: [
            {
                question: 'Share about a time when you took charge and successfully lead a group.',
                additionals: [
                    'What was the example about? Who were the other team members involved?',
                    'What did you have to What did you have to do? What were the expected outcomes? Were there any challenges you expected?',
                    'How did you lead your team members? How did they feel?',
                    'What was the eventual outcome? What would you want to improve on?',
                ],
            },
        ],
    },
    cooperation: {
        name: 'Cooperation',
        high_description: '{{name}} would consistently present an approachable, helpful and likable manner when working with others. {{name}} tends to be considerate, allowing for pleasant and harmonious teamwork.',
        mid_description: '{{name}} would generally try to present an approachable, helpful and likeable manner when working with others. {{name}} may occasionally struggle to be considerate in a team setting.',
        low_description: '{{name}} may require support when working with others, and tends to comes across as uncooperative in a team setting. {{name}} might not prioritize being pleasant and considerate to others.',
        summary: 'Tendency to be pleasant with others on the job and display a good-natured, cooperative attitude.',
        question_contents: [
            {
                question: 'Recall your most memorable experience of working cooperatively with others to accomplish an important goal.',
                additionals: [
                    'What was the project or task about? Who were you working with?',
                    'What did you have to do? Were there any challenges you expected? ',
                    'How did you work and interact with the rest? How did you contribute to the team?  ',
                    'Why is this the most memorable experience? Would you have done something differently?',
                ],
            },
        ],
    },
    concern_for_others: {
        name: 'Concern for Others',
        high_description: '{{name}} tends to understand and interpret others’ needs and feelings accurately. {{name}} would often express genuine care for others and respond sensitively to their predicaments.',
        mid_description: '{{name}} is generally able to understand the needs, feelings and perspectives of others, and offer appropriate help. At times, {{name}} would express care for others and respond to their predicaments.',
        low_description: `{{name}} may find it challenging to understand or empathise with others, hence would likely come across uncaring or not as helpful to them. {{name}} may also struggle to respond sensitively to others' needs.`,
        summary: "Tendency to be sensitive to others' feelings and concerns, and being understanding and helpful.",
        question_contents: [
            {
                question: "Describe a time you were able to be supportive and reassuring to a co-worker's concern or need.",
                additionals: [
                    'What was the time about? Who were you working with?',
                    'What were the goals? How did you have to work with others to achieve this?',
                    "What did you do to achieve it? How did you manage others' emotions and show concern?",
                    'What was the eventual outcome? What would you have done differently?',
                ],
            },
        ],
    },
    social_orientation: {
        name: 'Social Orientation',
        high_description: '{{name}} tends to build synergistic work relationships and seek opportunities to work with others to achieve objectives, and would actively foster team dynamics.',
        mid_description: '{{name}} is generally able to build work relationships and seek opportunities to work with others to achieve objectives, and attempts to build team dynamics.',
        low_description: '{{name}} may find it challenging to connect or build rapport with others. {{name}} may display less desire to working with others, or form and maintain work relationships.',
        summary: 'Preferring to be socially connected and work with others to get tasks done.',
        question_contents: [
            {
                question: 'Describe an occasion where you build good rapport with others to get work done.',
                additionals: [
                    'What was the occasion about? Who did you have to interact with?',
                    'What was the intended work outcome? ',
                    'What did you do? What did you do to ensure their involvement was important?',
                    'What was the end outcome? What would you have done differently to build relationships with others?',
                ],
            },
        ],
    },
    self_control: {
        name: 'Self Control',
        high_description: '{{name}} would consistently demonstrate a high level of self-control when dealing with own emotional responses, even in difficult situations. {{name}} would tend to self-regulate when faced with interpersonal situations and conflicts.',
        mid_description: '{{name}} would typically be able to control own feelings and tries to avoid negative behaviour. {{name}} would try to self-regulate when faced with interpersonal situations and conflicts at times.',
        low_description: '{{name}} tends to find it challenging to remain calm or restrain from displaying negative emotions in interpersonal situations and conflicts. {{name}} may find it hard to self-regulate, and appear unaware of how own behaviour could affect others.',
        summary: 'Maintaining composure, keeping emotions in check, controlling anger, and avoiding aggressive behaviour, even in difficult situations.',
        question_contents: [
            {
                question: 'Describe a time you were frustrated at a work situation when interacting with others.',
                additionals: [
                    'What was it about? Who did you have to work with? Why were you frustrated?',
                    'What was the task or goal about? ',
                    'What actions did you take? How did you manage your own emotions and communication? Were there any resistance faced?',
                    'What was the end outcome? How did you feel? What would you have done differently?',
                ],
            },
        ],
    },
    stress_tolerance: {
        name: 'Stress Tolerance',
        high_description: '{{name}} tends to handle stressful situations calmly and effectively. {{name}} would approach challenges objectively, while handling critiques rationally and thoughtfully.',
        mid_description: '{{name}} generally handles stressful situations quite calmly and effectively. {{name}} would try to approach stress rationally, while handling some critique objectively.',
        low_description: '{{name}} might find stressful situations hard to handle and react to them negatively. {{name}} would tend not to approach stress rationally, and does not react well to feedback.',
        summary: 'Tendency to accept criticism, and dealing calmly and effectively with high stress situations.',
        question_contents: [
            {
                question: 'Describe a time where you had to perform under a stressful and demanding environment.',
                additionals: [
                    'What was the example about? Why was it stressful or demanding?',
                    'What did you have to do in that situation? How did you intend for the outcome to be?',
                    'How did you manage between the stressors and work? How did you feel throughout the process?',
                    'What was the eventual outcome? Reflect on any areas you have done well or want to improve on.',
                ],
            },
        ],
    },
    adaptability_flexibility: {
        name: 'Adaptability/Flexibility',
        high_description: '{{name}} tends to demonstrate flexibility and openness to new ways of doing things.  {{name}} tends to adapt effectively and readily adjust plans accordingly to the changing demands.',
        mid_description: '{{name}} generally demonstrates some flexibility and openness to new ways of doing things. Occasionally, {{name}} would need some support adapting and adjusting own approach to major changing demands.',
        low_description: '{{name}} may find it challenging to manage changing demands, and have difficulties being open and flexible to new ways of doing things.',
        summary: 'Tendency to be open to changes and new methods, and to considerate variety within the environment.',
        question_contents: [
            {
                question: 'Describe a time you had to adjust to changing work conditions or priorities in order to complete a project. How did you handle it?',
                additionals: [
                    'What was the time about?  Was this something new for you that you have not done before?',
                    'What did you have to do? What was the intended outcome?',
                    'What did you do differently? Why did you approach it that way? How did you feel in this process?',
                    'What happened in the end? How would you change it to make it even better?',
                ],
            },
        ],
    },
    dependability: {
        name: 'Dependability',
        high_description: '{{name}} tends to take personal responsibility for own duties and can be relied on to complete tasks. {{name}} would follow through all commitments to others, and takes ownership to address any mistakes.',
        mid_description: '{{name}} would typically take personal responsibility for own duties and can be relied on to complete tasks. {{name}} generally follows through commitments to others, and sometimes takes ownership to address any mistakes.',
        low_description: '{{name}} may need frequent check-ins to ensure obligations are followed through. {{name}} may not fulfil own commitments to others, nor take ownership to address any mistakes.',
        summary: 'Reliable, responsible, and dependable in fulfilling obligations.',
        question_contents: [
            {
                question: 'Recall an instance when your other obligations affected your ability to complete your tasks on time.',
                additionals: [
                    'How did the obligations impact your work? ',
                    'What was your role in completing the tasks? ',
                    'What did you do to ensure your work was still delivered on time? What were the steps involved?',
                    'What was the end result? Looking back, is there anything you would have handled differently?',
                ],
            },
        ],
    },
    attention_to_detail: {
        name: 'Attention to Detail',
        high_description: '{{name}} tends to handle all details thoroughly to ensure accuracy and completeness in deliverables, taking necessary actions to produce quality work.',
        mid_description: '{{name}} would generally handle details thoroughly to ensure accuracy and completeness in deliverables, though there may be occasions where quality and details are overlooked.',
        low_description: '{{name}} may not handle details thoroughly, and accuracy and completeness in deliverables could be compromised, resulting in frequent support and reviews from others.',
        summary: 'Tendency to be careful about details, and thorough in completing tasks.',
        question_contents: [
            {
                question: 'Different work tasks might require varying levels of detail and attention. Explain a task you worked on that required attention to detail and quality.',
                additionals: [
                    'What was the task about? Were you working with anyone else?',
                    'What was your role in this task? What was the intended outcome?',
                    'How did you approach the task? How did you ensure details and quality were not compromised?',
                    'What was the end result? What did you do well? What would you improve on?',
                ],
            },
        ],
    },
    integrity: {
        name: 'Integrity',
        high_description: "{{name}} tends to endorse honesty and integrity, uphold high level of ethical standards when pursuing own tasks consistently, ensure own words and beliefs are consistent with one's actions.",
        mid_description: "{{name}} tends to be honest and acts with integrity, while trying to meet level of ethical standards when pursuing own tasks at times, keeping own words and beliefs as consistent as possible with one's actions.",
        low_description: '{{name}} may find it challenging to prioritize acting with integrity, and has a tendency to disregard the need to uphold high level of ethical standards when pursuing own tasks. At times, {{name}}’s behaviour may be seen as inconsistent.',
        summary: 'Tendency to be honest and ethical.',
        question_contents: [
            {
                question: 'Describe a situation where you had to deliver a task but your integrity was challenged in the process.',
                additionals: [
                    'What was the task about? What were your concerns to integrity?',
                    'What was your role in this situation? What challenges did you face?',
                    'How did you manage this situation? How did you convince those involved as well?',
                    'What was the end outcome? How did you feel about it? What would you have done differently?',
                ],
            },
        ],
    },
    independence: {
        name: 'Independence',
        high_description: '{{name}} tends to complete tasks by oneself, mostly without the need to approach others for support and guidance. {{name}} also tends to make choices and decisions independently when needed to accomplish a task.',
        mid_description: '{{name}} generally attempts to complete tasks by oneself first, before approaching others for support and guidance. When needed, {{name}} also tends to make choices and decisions quite independently on tasks.',
        low_description: '{{name}} tends not to complete tasks by oneself confidently in the lack of support and guidance. {{name}} may require substantial supervision and guidance.',
        summary: 'Tendency to prefer own way of doing things, guiding oneself with little or no supervision, and depending on oneself to get things done.',
        question_contents: [
            {
                question: 'Share about time you had to work alone and make important decisions with little guidance.',
                additionals: [
                    'What was it about? What guidance did you receive?',
                    'What were the important decisions you made? Why did you have to do this by yourself?',
                    'What was your thought process? How did you handle lack of support?',
                    'What was the end result? How did you feel? What would you have done differently?',
                ],
            },
        ],
    },
    innovation: {
        name: 'Innovation',
        high_description: '{{name}} tends to adopt a creative approach to work and use alternative ways of thinking. {{name}} often thinks laterally and tends to generate out-of-the-box solutions to problems.',
        mid_description: '{{name}} would generally adopt a creative approach to work and use alternative way of thinking, though {{name}} would rely on "tried and true" methodologies to solve problems at times.',
        low_description: '{{name}} may find it challenging to think creatively and develop new and unique ideas to approach old problems, and will almost always rely and use "tried and true" methodologies to solve problems.',
        summary: 'Leveraging creativity and alternative thinking to develop new ideas and answers.',
        question_contents: [
            {
                question: 'Describe an example where you came up with a creative solution to an existing problem.',
                additionals: [
                    'What was the example about? Did you work with others on this?',
                    'What was the existing problem? Why did you think it was important to address this problem?',
                    'What did you do to address the problem? How was it different from other approaches?',
                    'How did this approach improve the existing problem? Would you change your approach if given another chance?',
                ],
            },
        ],
    },
    analytical_thinking: {
        name: 'Analytical Thinking',
        high_description: '{{name}} tends to integrate and synthesize relevant information before approaching problems in a logical manner to identify effective solutions. {{name}} would also tend to look for underlying patterns to deduce insights.',
        mid_description: '{{name}} would generally apply logic and complex layers of rules to analyze data and develop effective solutions to problems. Occasionally, {{name}} would look for underlying patterns to deduce insights.',
        low_description: '{{name}} may not use logical reasoning to develop sound judgment and decisions, and may struggle to spot underlying patterns of issue at hand.',
        summary: 'Tendency to analyze information and use logic to address issues and problems.',
        question_contents: [
            {
                question: 'Recall a situation where you had to examine multiple data sources and formulate a solution or an approach.',
                additionals: [
                    'What was the example? Why did you need to formulate a solution?',
                    'What did you have to do? What types of data or information did you have to work with?',
                    'How did you make sense of these multiple data? Any challenges faced?',
                    'What was the outcome? Would you do anything differently?',
                ],
            },
        ],
    },
});
Object.freeze({
    achievement: {
        name: 'Achievement',
        high_description: "{{name}} strongly values an environment that emphasizes on achievement orientation, where one is required perform to one's strongest ability to deliver successful outcomes.",
        mid_description: "{{name}} generally values an environment that emphasizes on achievement orientation, where one is sometimes needed to perform to one's strongest ability to deliver outcomes.",
        low_description: "{{name}} tends not to value an environment that emphasizes on achievement orientation, and lesser focus on requiring one to perform to one's strongest ability to deliver outcomes.",
        summary: 'One is driven by using own strongest abilities and skills to achieve goals, gaining a sense of accomplishment.',
        question_contents: [
            {
                question: 'Share how you would deliver to the best of your ability on a project in a previous role or task.',
                additionals: [
                    'What sort of role or task did you undertake?',
                    'What did you think you have to do to make this successful? ',
                    'How did you ensure the success of this?',
                    'How did you feel about the process? What did you learn from this about yourself?',
                ],
            },
        ],
    },
    working_conditions: {
        name: 'Working Conditions',
        high_description: "{{name}} strongly values an environment that offers high activity and constant opportunities to try different tasks, where one's development and growth are promoted.",
        mid_description: "{{name}} generally values an environment that offers a balance of work activity and work consistency, as well as some focus on one's development and growth.",
        low_description: '{{name}} tends not to value an environment that emphasizes high work activity and different opportunities for learning, preferring more of an environment that is task consistent.',
        summary: 'One is driven by fulfilment through high activity and learning different tasks in a safe and professional growth environment.',
        question_contents: [
            {
                question: 'Share how factors such as work variety and learning opportunities has helped you in a previous role or task.',
                additionals: [
                    'What sort of role or task did you undertake?',
                    'What did you have to do for this role or task? What were the factors in specific?',
                    'How did these factors helped you in the process?',
                    'How did you feel about the process? What did you learn from this about yourself?',
                ],
            },
        ],
    },
    recognition: {
        name: 'Recognition',
        high_description: '{{name}} strongly values an environment that promotes prestige and career reputation, where extrinsic rewards and career advancement for employees are prioritized.',
        mid_description: '{{name}} generally values an environment that offers extrinsic rewards, career advancement opportunities and having high standing.',
        low_description: "{{name}} tends not to value an environment that emphasizes on extrinsic rewards, prestige, advancing one's career, as well having high career standing.",
        summary: 'One is driven by career advancement, that comes with prestige, status, and monetary components.',
        question_contents: [
            {
                question: 'Share how you define and measure personal work success and recognition in a previous role or task.',
                additionals: [
                    'What sort of role or task did you undertake?',
                    'What did you have to do for this task or role? How did you defined success and outcomes?',
                    'What did you do to achieve work success and recognition?',
                    'What was the end outcome? How did you feel about the process? What did you learn from this about yourself?',
                ],
            },
        ],
    },
    relationships: {
        name: 'Relationships',
        high_description: '{{name}} strongly values an environment filled with camaraderie, where employees work and support each other closely, and have high levels of engagement with others.',
        mid_description: '{{name}} generally values an environment that encourages the forming of close working relationships with at workplace, but may refrain from excessive engagement with co-workers.',
        low_description: '{{name}} tends not to value an environment that encourages the forming of close working relationships at workplace, and would refrain from engaging with co-workers.',
        summary: 'One is driven by working with and building good relations with co-workers and stakeholders in a friendly non-competitive environment.',
        question_contents: [
            {
                question: 'Share how working in a team and building relationships at the workplace was like for you in a previous role or task.',
                additionals: [
                    'What sort of role or task did you undertake?',
                    'How did you build relationships with others? Why do you think it has helped you at the workplace?',
                    'What were some challenges faced? How did you sustain the relationships?',
                    'How did you feel about the process? What did you learn from this about yourself?',
                ],
            },
        ],
    },
    support: {
        name: 'Support',
        high_description: '{{name}} strongly values an environment that advocates tolerance and ethical practices, with supportive co-workers and managers to seek advice and support from.',
        mid_description: '{{name}} generally values an environment that prioritizes some tolerance or ethical practices at the workplace, and sometimes prefer having supportive co-workers and managers.',
        low_description: '{{name}} tends not to value an environment that prioritizes tolerance or ethical practices at the workplace as well as having supportive co-workers and managers.',
        summary: 'One is driven by an environment that promotes fairness and tolerance, backed by supportive co-workers and management.',
        question_contents: [
            {
                question: 'Share how support from co-workers and management was like for you in a previous role.',
                additionals: [
                    'What sort of role or task did you undertake?',
                    'What was the task at hand?  What support did you felt was needed?',
                    'What did you do for this task? What kind of support did you receive?',
                    'What was the end outcome? How did you feel about the process? What did you learn from this about yourself?',
                ],
            },
        ],
    },
    independence: {
        name: 'Independence',
        high_description: '{{name}} strongly values an environment that provides employees the autonomy and flexibility to develop and achieve own objectives, with the empowerment to take charge of tasks and own progress.',
        mid_description: '{{name}} generally values having the autonomy to make decisions and manage own progress work but only within manageable parameters. In certain situations, {{name}} would prefer receiving detailed guidance and close supervision.',
        low_description: '{{name}} tends not to value an environment where employees have significant freedom and authority to fulfil their responsibilities and manage their own progress and tasks, preferring being guided at work.',
        summary: 'One is driven by autonomy, and is empowered to manage own progress and make independent decisions.',
        question_contents: [
            {
                question: 'Share how autonomy and being able to work independently is a component to how you performed in a previous role or task.',
                additionals: [
                    'What sort of role or task did you undertake?',
                    'What kind of decision did you have to make? Why were you able to exercise independent thinking?',
                    'What did you do to make this decision? Were others involved in the process, and how involved were they?',
                    'What was the end outcome? How did you feel about the process? What did you learn from this about yourself?',
                ],
            },
        ],
    },
});
Object.freeze({
    realistic: {
        name: 'Realistic',
        high_description: '{{name}} has a strong preference for outdoor, physical and mechanical tasks, and seeks concrete rather than abstract problems, and enjoys being in hands-on situations.',
        mid_description: '{{name}} has a moderate preference for outdoor, physical and mechanical tasks, though may not always enjoy being in hands-on work situations.',
        low_description: '{{name}} has a low preference for outdoor, physical and mechanical tasks. {{name}} may not prefer hands-on work situations such as building and fixing things or operating equipment.',
        summary: 'Realistic occupations frequently involve work activities that include practical, hands-on problems and solutions. These occupations often deal with plants, animals, and real-world materials like wood, tools, and machinery.',
        question_contents: [
            {
                question: 'Describe a project where you demonstrated problem-solving skills in a practical, hands-on situation.',
                additionals: [
                    'What was the project about? Why did it require a lot of hands-on or practical components?',
                    'What was your role in this?',
                    'How did you complete the project? Did you face any challenges?',
                    'What was the end outcome? Did you enjoy the process? How did you feel about tasks like this?',
                ],
            },
        ],
    },
    investigative: {
        name: 'Investigative',
        high_description: '{{name}} has a strong preference towards working with theories and data, employing scientific methodologies to solve complex problems.',
        mid_description: '{{name}} has a moderate preference towards working with theories, data, and numbers, gathering facts and analysing situations to solve complex problems.',
        low_description: '{{name}} has a low preference for tasks that revolve around using theories and gathering data or numbers to analyze or solve complex problems.',
        summary: 'Investigative occupations frequently involve working with ideas, researching and require an extensive amount of thinking. This includes roles that are analytical and scientific, involving exploring and researching using data and numbers.',
        question_contents: [
            {
                question: 'Share an example where you had to research on theories and work with data to solve a problem.',
                additionals: [
                    'What was the project or task about? ',
                    'What was your role in this? What kind of research or analysis did you have to do?',
                    'How did you complete the task or project? Did you face any challenges? ',
                    'What was the end outcome? Did you enjoy the process? How did you feel about tasks like this?',
                ],
            },
        ],
    },
    artistic: {
        name: 'Artistic',
        high_description: '{{name}} has a strong preference towards seeking out opportunities for creative and aesthetics self-expression in creating original work or product.',
        mid_description: '{{name}} has a moderate preference for opportunities that allow self-expression through artistic and original creations, though may not always be inclined to engage in creative tasks.',
        low_description: '{{name}} has a low preference for tasks that may require aesthetic abilities and self-expression, and those that require one to be creative in creating original work or product.',
        summary: 'Artistic occupations frequently involve working with designs and concepts. These occupations often require self-expression and include roles that enable one to be artistic and creative in creating original work or product.',
        question_contents: [
            {
                question: 'Describe a time where you displayed creativity or exercised artistic thinking on a task or proposed solution.',
                additionals: [
                    'What was the task about? What kind of inputs were needed? ',
                    'What was your role in this? How did you demonstrate creativity?',
                    'How did you complete the task? How did you envision the end outcome?',
                    'What was the end outcome? Did you enjoy the process? How did you feel about tasks like this?',
                ],
            },
        ],
    },
    social: {
        name: 'Social',
        high_description: '{{name}} has a strong preference for activities that involve supporting, developing and enlightening others, and seeks interpersonal pursuits that aim to deliver socially impactful outcomes.',
        mid_description: '{{name}} has a moderate preference for activities that involve supporting, developing and enlightening others, as well as working to deliver socially impactful outcomes.',
        low_description: '{{name}} has a low preference for tasks that provide support or service to others, as well as working for others to derive socially impactful outcomes.',
        summary: 'Social occupations frequently involve working with, communicating with, and teaching people. These occupations often involve helping or providing service to others, with a preference to create social impact.',
        question_contents: [
            {
                question: 'Recall the last time you went beyond to help or support someone on a task.',
                additionals: [
                    'What was it about? Why did you decide to help this individual?',
                    'What did you have to do?',
                    'How did you support this individual? Did you face any challenges?',
                    'What was the end outcome? Did you enjoy the process? How did you feel about tasks like this?',
                ],
            },
        ],
    },
    enterprising: {
        name: 'Enterprising',
        high_description: '{{name}} has a strong preference for tasks that require directing and influencing others to adopt solutions or approaches, and this includes being in positions of influence or power.',
        mid_description: '{{name}} has a moderate preference for tasks that require directing and influencing others to adopt solutions or approaches.',
        low_description: '{{name}} has a low preference for tasks that require directing and influencing others to adopt solutions or approaches.',
        summary: 'Enterprising occupations frequently involve starting up and seeing through projects. This includes positions of power that involve directing and influencing others to adopt solutions and at times, sales oriented.',
        question_contents: [
            {
                question: 'Describe a task you initiated and led but did not go according to your plan in mind.',
                additionals: [
                    'What was this task about? Why did it not go according to plan?',
                    'What was your role in this?',
                    'How did you complete the task? Did you face any challenges?',
                    'What was the end outcome? Did you enjoy the process? How did you feel about tasks like this?',
                ],
            },
        ],
    },
    conventional: {
        name: 'Conventional',
        high_description: '{{name}} has a strong preference for tasks requiring orderliness and organisation, as well as working in a systematised operation with clear guidelines and procedures.',
        mid_description: '{{name}} has a moderate preference for tasks that are performed in a systematic and orderly manner, though may not always prefer the need to closely follow rules and procedures.',
        low_description: '{{name}} has a low preference for structured and rule-regulated tasks that are to be performed in a systematic and orderly manner, as well as adhering to rules and procedures.',
        summary: 'Conventional occupations frequently involve following set procedures and routines. This includes roles with clear rules and procedures, where structure and standards are enforced and adhered to.',
        question_contents: [
            {
                question: 'Describe a task where you ensured close compliance with rules, procedures or standards in order to be successful.',
                additionals: [
                    'What was this task about? What were the protocols and rules you had to work with?',
                    'What was your role in this? ',
                    'How did you complete the task or project? Did you face any challenges?',
                    'What was the end outcome? Did you enjoy the process? How did you feel about tasks like this?',
                ],
            },
        ],
    },
});

/*
Legacy Descriptor, since 2018
work style - summary, thrive, working with, watch out
work Value - summary, thrive, working with, watch out
Work Interest - summary, thrive, working with, watch out
Personality - Big5 - Descriptor
Personality - Addtional4 - Descriptor
*/
Object.freeze({
    emotional_stability: {
        name: 'Emotional Stability',
        high_description: `{{name}}'s strongest personality trait is that {{gender-subject}} is emotionally stable - `,
        mid_description: '{{name}} is less emotionally vulnerable to pressure and temptations.',
        low_description: `{{name}}'s development area is {{gender-possessive}} emotional stability - `,
        summary: '',
        question_contents: [],
    },
    extraversion: {
        name: 'Extraversion',
        high_description: `{{name}}'s strongest personality trait is that {{gender-subject}} is extraverted - `,
        mid_description: '{{name}} is somewhat sociable, positive, assertive, and exciting.',
        low_description: `{{name}}'s development area is {{gender-possessive}} extraversion - `,
        summary: '',
        question_contents: [],
    },
    openness_to_experience: {
        name: 'Openness to Experience',
        high_description: `{{name}}'s strongest personality trait is that {{gender-subject}} is open to diverse experiences - `,
        mid_description: '{{name}} is somewhat open to engaging in diverse ideas, activities, feelings, and perspectives.',
        low_description: `{{name}}'s development area is {{gender-possessive}} openness to diverse experiences - `,
        summary: '',
        question_contents: [],
    },
    agreeableness: {
        name: 'Agreeableness',
        high_description: `{{name}}'s strongest personality trait is agreeableness - `,
        mid_description: '{{name}} is moderately warm, modest and moral.',
        low_description: `{{name}}'s development area is {{gender-possessive}} agreeableness - `,
        summary: '',
        question_contents: [],
    },
    conscientiousness: {
        name: 'Conscientiousness',
        high_description: `{{name}}'s strongest personality trait is that {{gender-subject}} is conscientious - `,
        mid_description: '{{name}} has some beliefs in {{gender-possessive}} capabilities to strive for achievement and is moderately disciplined to fulfill {{gender-possessive}} duties in a structured and deliberate manner.',
        low_description: `{{name}}'s development area is {{gender-possessive}} conscientiousness - `,
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    anxiety: {
        name: 'Calmness',
        high_description: '{{name}} does not get worried and fearful about things. Otherwise, {{name}} may face distress and impairment at work that can influence productivity.',
        mid_description: `{{name}} gets worried and fearful about things at times. This may cause {{name}} to face distress and impairment at work that can influence productivity.`,
        low_description: '{{name}} gets worried and fearful about things. Hence, {{name}} may face distress and impairment at work that can influence productivity.',
        summary: '',
        question_contents: [],
    },
    anger: {
        name: 'Composure',
        high_description: '{{name}} does not get irritated easily. Otherwise, irritability may release negativity and stress-inducing vibes that negatively impact the workplace.',
        mid_description: `{{name}} gets irritated once in a while. Irritability may release negativity and stress-inducing vibes that negatively impact the workplace.`,
        low_description: '{{name}} gets irritated easily. Irritability may release negativity and stress-inducing vibes that negatively impact the workplace.',
        summary: '',
        question_contents: [],
    },
    depression: {
        name: 'Hopefulness',
        high_description: '{{name}} does not feel down often. Depressed feelings may cause higher absenteeism and poorer performance.',
        mid_description: `{{name}} feels down occasionally. Depressed feelings may cause higher absenteeism and poorer performance.`,
        low_description: '{{name}} feels down often. Depressed feelings may cause higher absenteeism and poorer performance.',
        summary: '',
        question_contents: [],
    },
    self_consciousness: {
        name: 'Self-confidence',
        high_description: '{{name}} tends not to be self-conscious in difficult social situations. Otherwise, self-consciousness can cause embarrassment, poor self-image and shame when interacting with others, and these can hinder {{name}} at work.',
        mid_description: `{{name}} can sometimes get self-conscious in difficult social situations. Self-consciousness can cause embarrassment, poor self-image and shame when interacting with others, and these can hinder {{name}} at work.`,
        low_description: '{{name}} tends to be self-conscious in difficult social situations. Self-consciousness can cause embarrassment, poor self-image and shame when interacting with others, and these can hinder {{name}} at work.',
        summary: '',
        question_contents: [],
    },
    immoderation: {
        name: 'Willpower',
        high_description: `{{name}} can resist temptations well. This helps with {{name}}'s productivity at work.`,
        mid_description: `{{name}} can resist temptations at times. This affects {{name}}'s productivity at work.`,
        low_description: `{{name}} cannot resist temptations well. This affects {{name}}'s productivity at work.`,
        summary: '',
        question_contents: [],
    },
    vulnerability: {
        name: 'Resilience',
        high_description: `{{name}} can remain calm under pressure. Otherwise, it may affect {{name}}'s performance when there are stressful situations at work.`,
        mid_description: `{{name}} can remain calm under pressure once in a while. This may affect {{name}}'s performance when there are stressful situations at work.`,
        low_description: `{{name}} cannot remain calm under pressure. It may affect {{name}}'s performance when there are stressful situations at work.`,
        summary: '',
        question_contents: [],
    },
    friendliness: {
        name: 'Friendliness',
        high_description: '{{name}} is comfortable around people and can make friends easily. This helps in navigating in social situations, including the workplace.',
        mid_description: `{{name}} is somewhat comfortable around people and can make friends once in a while. This affects {{name}}'s navigation in social situations, including the workplace.`,
        low_description: `{{name}} is not comfortable around people and may not make friends easily. This affects {{name}}'s navigation in social situations, including the workplace.`,
        summary: '',
        question_contents: [],
    },
    gregariousness: {
        name: 'Gregariousness',
        high_description: '{{name}} prefers to be surrounded by people. This helps when {{name}} needs to be in a social function, which is common in jobs, as {{gender-subject}} will not seem awkward or unsociable.',
        mid_description: `{{name}} sometimes enjoys the company of others, but at other times, {{gender-subject}} prefers to be alone. This may affect how {{name}} will behave when {{gender-subject}} needs to be in a social function, which are common in jobs.`,
        low_description: '{{name}} prefers to be alone and not surrounded by people. This may affect how {{name}} will behave when {{gender-subject}} needs to be in a social function, which are common in jobs.',
        summary: '',
        question_contents: [],
    },
    assertiveness: {
        name: 'Assertiveness',
        high_description: `{{name}} tends to take charge of things and people. This will contribute to {{name}}'s leadership potential.`,
        mid_description: `{{name}} will occasionally take charge of things and people. This will affect {{name}}'s leadership potential.`,
        low_description: `{{name}} tends to wait for others to take the lead. This will affect {{name}}'s leadership potential.`,
        summary: '',
        question_contents: [],
    },
    activity_level: {
        name: 'Activity level',
        high_description: '{{name}} tends to be busy and does many things in {{gender-possessive}} time. This is indicative of how much effort {{name}} is putting into {{gender-possessive}} job if {{gender-possessive}} job is activity-based.',
        mid_description: `{{name}} tends to be busy sometimes and {{gender-possessive}} time consists of some activities and some pockets of spare time. This is indicative of how much effort {{name}} is putting into {{gender-possessive}} job if {{gender-possessive}} job is activity-based.`,
        low_description: '{{name}} tends to take it easy and does few things in {{gender-possessive}} time. This is indicative of how much effort {{name}} is putting into {{gender-possessive}} job if {{gender-possessive}} job is activity-based.',
        summary: '',
        question_contents: [],
    },
    excitement_seeking: {
        name: 'Excitement-seeking',
        high_description: '{{name}} likes to seek excitement and adventure. This can be helpful for jobs that deal with risks and changes.',
        mid_description: `{{name}} will seek excitement and adventure at times. This can affect one's performance in jobs that deal with risks and changes.`,
        low_description: `{{name}} does not like to seek excitement and adventure. This can affect one's performance in jobs that deal with risks and changes.`,
        summary: '',
        question_contents: [],
    },
    cheerfulness: {
        name: 'Cheerfulness',
        high_description: '{{name}} is a joyful person. This helps {{name}} be perceived as a positive person and be well-liked by others.',
        mid_description: `{{name}} is a moderately joyful person. This affects whether {{name}} is perceived as a positive person and whether {{gender-subject}} will be well-liked by others.`,
        low_description: '{{name}} is not a joyful person. This affects whether {{name}} is perceived as a positive person and whether {{gender-subject}} will be well-liked by others.',
        summary: '',
        question_contents: [],
    },
    imagination: {
        name: 'Imagination',
        high_description: '{{name}} likes to get lost in {{gender-possessive}} thoughts and imagination. Cultivating imagination helps in problem-solving and innovation.',
        mid_description: `{{name}} occasionally likes to get lost in {{gender-possessive}} thoughts and imagination. Cultivating imagination helps in problem-solving and innovation.`,
        low_description: '{{name}} does not like to get lost in {{gender-possessive}} thoughts and imagination. Cultivating imagination helps in problem-solving and innovation.',
        summary: '',
        question_contents: [],
    },
    artistic_interests: {
        name: 'Artistic interests',
        high_description: '{{name}} likes to get in touch with art and literature. Involvement in art and literature can help {{name}} develop skills like analytical thinking and even improve well-being.',
        mid_description: `{{name}} sometimes likes to get in touch with art and literature. Involvement in art and literature can help {{name}} develop skills like analytical thinking and even improve well-being.`,
        low_description: '{{name}} does not like to get in touch with art and literature. Involvement in art and literature can help {{name}} develop skills like analytical thinking and even improve well-being.',
        summary: '',
        question_contents: [],
    },
    emotionality: {
        name: 'Emotionality',
        high_description: `{{name}} is receptive to {{gender-possessive}} own and others' emotional experiences. This helps {{name}} be empathetic and be able to build healthy relationships with others.`,
        mid_description: `{{name}} will be moderately receptive to {{gender-possessive}} own and others' emotional experiences at times. This affects {{name}}'s empathy and {{gender-possessive}} ability to build healthy relationships with others.`,
        low_description: `{{name}} is not receptive to {{gender-possessive}} own and others' emotional experiences. This affects {{name}}'s empathy and {{gender-possessive}} ability to build healthy relationships with others.`,
        summary: '',
        question_contents: [],
    },
    adventurousness: {
        name: 'Adventurousness',
        high_description: '{{name}} is welcoming to variety and change. Change is inevitable in daily life as well as in the workplace.',
        mid_description: `{{name}} prefers a balance of variety and routine and welcomes changes once in a while. Change is inevitable in daily life as well as in the workplace.`,
        low_description: '{{name}} prefers routine and convention and is not welcoming to change. Change is inevitable in daily life as well as in the workplace.',
        summary: '',
        question_contents: [],
    },
    intellect: {
        name: 'Intellect',
        high_description: '{{name}} is interested in challenging and philosophical ideas. Philosophical and abstract thinking helps {{name}} be more critical and have better reasoning skills.',
        mid_description: `{{name}} is moderately interested in challenging and philosophical ideas. Philosophical and abstract thinking affects {{name}}'s ability to be critical and to reason.`,
        low_description: `{{name}} is not interested in challenging and philosophical ideas. Philosophical and abstract thinking affects {{name}}'s ability to be critical and to reason.`,
        summary: '',
        question_contents: [],
    },
    liberalism: {
        name: 'Liberalism',
        high_description: '{{name}} believes that there can be multiple perspectives to any issue. This will allow {{name}} to be more receptive to alternative opinions and perspectives.',
        mid_description: `{{name}} occasionally believes that there can be multiple perspectives to any issue. This will affect {{name}}'s receptiveness to alternative opinions and perspectives.`,
        low_description: `{{name}} tends to hold only one perspective to any issue. This will affect {{name}}'s receptiveness to alternative opinions and perspectives.`,
        summary: '',
        question_contents: [],
    },
    trust: {
        name: 'Trust',
        high_description: '{{name}} tends to trust others. Trust is the foundation of all human connections, even in the workplace.',
        mid_description: `{{name}} tends to trust others once in a while. Trust is the foundation of all human connections, even in the workplace.`,
        low_description: '{{name}} tends not to trust others. Trust is the foundation of all human connections, even in the workplace.',
        summary: '',
        question_contents: [],
    },
    morality: {
        name: 'Morality',
        high_description: '{{name}} does not engage in disruptive behaviors towards others. Otherwise, such disruptive behaviors can harm teams, organizations and clients in general, which can in turn harm {{name}}.',
        mid_description: `{{name}} tries not engage in disruptive behaviors towards others. Disruptive behaviors can harm teams, organizations and clients in general, which can in turn harm {{name}}.`,
        low_description: '{{name}} engages in disruptive behaviors towards others. Such disruptive behaviors can harm teams, organizations and clients in general, which can in turn harm {{name}}.',
        summary: '',
        question_contents: [],
    },
    altruism: {
        name: 'Altruism',
        high_description: '{{name}} will extend a helping hand to other people. Helping others and being supportive will help build more cohesive teams.',
        mid_description: `{{name}} will occasionally extend a helping hand to other people. Helping others and being supportive will help build more cohesive teams.`,
        low_description: '{{name}} does not tend to extend a helping hand to other people. Helping others and being supportive will help build more cohesive teams.',
        summary: '',
        question_contents: [],
    },
    cooperation: {
        name: 'Cooperation',
        high_description: '{{name}} does not act in a competitive and aggressive manner. People may reciprocate in kind, and all parties can get along amicably.',
        mid_description: `{{name}} tries not act in a competitive and aggressive manner. People may reciprocate aggression with aggression as part of a tit-for-tat strategy, and all parties may lose out.`,
        low_description: '{{name}} acts in a competitive and aggressive manner. People may reciprocate aggression with aggression as part of a tit-for-tat strategy, and all parties may lose out.',
        summary: '',
        question_contents: [],
    },
    modesty: {
        name: 'Modesty',
        high_description: '{{name}} does not think too highly of {{gender-object}}self. Being modest will help {{name}} be more well-liked.',
        mid_description: `{{name}} thinks moderately highly of {{gender-object}}self. Modesty helps people be more well-liked.`,
        low_description: '{{name}} thinks too highly of {{gender-object}}self. Modesty helps people be more well-liked.',
        summary: '',
        question_contents: [],
    },
    sympathy: {
        name: 'Sympathy',
        high_description: '{{name}} sympathizes with others. Being sympathetic helps in creating social bonds.',
        mid_description: `{{name}} sometimes sympathizes with others. Being sympathetic helps in creating social bonds.`,
        low_description: '{{name}} does not sympathize with others. Being sympathetic helps in creating social bonds.',
        summary: '',
        question_contents: [],
    },
    self_efficacy: {
        name: 'Self-efficacy',
        high_description: '{{name}} can complete and excel in tasks. This contributes to job performance.',
        mid_description: `{{name}} can complete and excel in tasks sometimes. This affects {{gender-possessive}} job performance.`,
        low_description: '{{name}} is unable to complete and excel in tasks. This affects {{gender-possessive}} job performance.',
        summary: '',
        question_contents: [],
    },
    orderliness: {
        name: 'Orderliness',
        high_description: '{{name}} is a tidy and organized person. Being tidy and organized helps in productivity.',
        mid_description: `{{name}} is moderately tidy and organized. Being tidy and organized helps in productivity.`,
        low_description: '{{name}} is an untidy and disorganized person. Being tidy and organized helps in productivity.',
        summary: '',
        question_contents: [],
    },
    dutifulness: {
        name: 'Dutifulness',
        high_description: '{{name}} tends to fulfill rules and obligations. Following rules helps in maintaining order and fulfilling obligations generates trust.',
        mid_description: `{{name}} tries to fulfill rules and obligations to a moderate extent. Following rules helps in maintaining order and fulfilling obligations generates trust.`,
        low_description: '{{name}} tends to break rules and not fulfill obligations. Following rules helps in maintaining order and fulfilling obligations generates trust.',
        summary: '',
        question_contents: [],
    },
    achievement_striving: {
        name: 'Achievement-striving',
        high_description: '{{name}} works hard beyond expectations. This will help {{name}} attain higher levels of achievement.',
        mid_description: `{{name}} works sufficiently hard but does not always go beyond expectations. This will affect {{name}}'s ability to attain higher levels of achievement.`,
        low_description: `{{name}} does not work hard to go beyond expectations. This will affect {{name}}'s ability to attain higher levels of achievement.`,
        summary: '',
        question_contents: [],
    },
    self_discipline: {
        name: 'Self-discipline',
        high_description: '{{name}} tends to be prepared and carries out plans in a disciplined manner. This is important for achieving goals.',
        mid_description: `{{name}} will try to be prepared and to carry out plans in a disciplined manner at times. This affects {{name}}'s ability to achieve goals.`,
        low_description: `{{name}} tends to be unprepared and does not carry out plans in a disciplined manner. This affects {{name}}'s ability to achieve goals.`,
        summary: '',
        question_contents: [],
    },
    cautiousness: {
        name: 'Cautiousness',
        high_description: '{{name}} thinks carefully before making a decision. Such cautiousness can help people be more effective in responding to situations.',
        mid_description: `{{name}} occasionally tries to think carefully before making a decision. Cautiousness can help people be more effective in responding to situations.`,
        low_description: '{{gender-subject}} acts rashly without thinking. Cautiousness can help people be more effective in responding to situations.',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    anxiety: {
        name: 'Calmness',
        high_description: `{{name}} does not get worried and fearful about things.`,
        mid_description: ``,
        low_description: `{{name}} gets worried and fearful about things.`,
        summary: '',
        question_contents: [],
    },
    anger: {
        name: 'Composure',
        high_description: `{{name}} does not get irritated easily.`,
        mid_description: ``,
        low_description: `{{name}} gets irritated easily.`,
        summary: '',
        question_contents: [],
    },
    depression: {
        name: 'Hopefulness',
        high_description: `{{name}} does not feel down often.`,
        mid_description: ``,
        low_description: `{{name}} feels down often.`,
        summary: '',
        question_contents: [],
    },
    self_consciousness: {
        name: 'Self-confidence',
        high_description: `{{name}} tends not to be self-conscious in difficult social situations.`,
        mid_description: ``,
        low_description: `{{name}} tends to be self-conscious in difficult social situations.`,
        summary: '',
        question_contents: [],
    },
    immoderation: {
        name: 'Willpower',
        high_description: `{{name}} can resist temptations well.`,
        mid_description: ``,
        low_description: `{{name}} cannot resist temptations well.`,
        summary: '',
        question_contents: [],
    },
    vulnerability: {
        name: 'Resilience',
        high_description: `{{name}} can remain calm under pressure.`,
        mid_description: ``,
        low_description: `{{name}} cannot remain calm under pressure.`,
        summary: '',
        question_contents: [],
    },
    friendliness: {
        name: 'Friendliness',
        high_description: `{{name}} is comfortable around people and can make friends easily.`,
        mid_description: ``,
        low_description: `{{name}} is not comfortable around people and may not make friends easily.`,
        summary: '',
        question_contents: [],
    },
    gregariousness: {
        name: 'Gregariousness',
        high_description: `{{name}} prefers to be surrounded by people.`,
        mid_description: ``,
        low_description: `{{name}} prefers to be alone and not surrounded by people.`,
        summary: '',
        question_contents: [],
    },
    assertiveness: {
        name: 'Assertiveness',
        high_description: `{{name}} tends to take charge of things and people.`,
        mid_description: ``,
        low_description: `{{name}} tends to wait for others to take the lead.`,
        summary: '',
        question_contents: [],
    },
    activity_level: {
        name: 'Activity level',
        high_description: `{{name}} tends to be busy and do many things in {{gender-possessive}} time.`,
        mid_description: ``,
        low_description: `{{name}} tends to take it easy and does few things in {{gender-possessive}} time.`,
        summary: '',
        question_contents: [],
    },
    excitement_seeking: {
        name: 'Excitement-seeking',
        high_description: `{{name}} likes to seek excitement and adventure.`,
        mid_description: ``,
        low_description: `{{name}} does not like to seek excitement and adventure.`,
        summary: '',
        question_contents: [],
    },
    cheerfulness: {
        name: 'Cheerfulness',
        high_description: `{{name}} is a joyful person.`,
        mid_description: ``,
        low_description: `{{name}} is not a joyful person.`,
        summary: '',
        question_contents: [],
    },
    imagination: {
        name: 'Imagination',
        high_description: `{{name}} likes to get lost in {{gender-possessive}} thoughts and imagination.`,
        mid_description: ``,
        low_description: `{{name}} does not like to get lost in {{gender-possessive}} thoughts and imagination.`,
        summary: '',
        question_contents: [],
    },
    artistic_interests: {
        name: 'Artistic interests',
        high_description: `{{name}} likes to get in touch with art and literature.`,
        mid_description: ``,
        low_description: `{{name}} does not like to get in touch with art and literature.`,
        summary: '',
        question_contents: [],
    },
    emotionality: {
        name: 'Emotionality',
        high_description: `{{name}} is receptive to {{gender-possessive}} own and others' emotional experiences.`,
        mid_description: ``,
        low_description: `{{name}} is not receptive to {{gender-possessive}} own and others' emotional experiences.`,
        summary: '',
        question_contents: [],
    },
    adventurousness: {
        name: 'Adventurousness',
        high_description: `{{name}} is welcoming to variety and change.`,
        mid_description: ``,
        low_description: `{{name}} prefers routine and convention and is not welcoming to change.`,
        summary: '',
        question_contents: [],
    },
    intellect: {
        name: 'Intellect',
        high_description: `{{name}} is interested in challenging and philosophical ideas.`,
        mid_description: ``,
        low_description: `{{name}} is not interested in challenging and philosophical ideas.`,
        summary: '',
        question_contents: [],
    },
    liberalism: {
        name: 'Liberalism',
        high_description: `{{name}} believes that there can be multiple perspectives to any issue.`,
        mid_description: ``,
        low_description: `{{name}} tends to hold only one perspective to any issue.`,
        summary: '',
        question_contents: [],
    },
    trust: {
        name: 'Trust',
        high_description: `{{name}} tends to trust others.`,
        mid_description: ``,
        low_description: `{{name}} tends not to trust others.`,
        summary: '',
        question_contents: [],
    },
    morality: {
        name: 'Morality',
        high_description: `{{name}} does not engage in disruptive behaviors towards others.`,
        mid_description: ``,
        low_description: `{{name}} engages in disruptive behaviors towards others.`,
        summary: '',
        question_contents: [],
    },
    altruism: {
        name: 'Altruism',
        high_description: `{{name}} will extend a helping hand to other people.`,
        mid_description: ``,
        low_description: `{{name}} does not tend to extend a helping hand to other people.`,
        summary: '',
        question_contents: [],
    },
    cooperation: {
        name: 'Cooperation',
        high_description: `{{name}} does not act in a competitive and aggressive manner.`,
        mid_description: ``,
        low_description: `{{name}} acts in a competitive and aggressive manner.`,
        summary: '',
        question_contents: [],
    },
    modesty: {
        name: 'Modesty',
        high_description: `{{name}} does not think too highly of {{gender-object}}self.`,
        mid_description: ``,
        low_description: `{{name}} thinks too highly of {{gender-object}}self.`,
        summary: '',
        question_contents: [],
    },
    sympathy: {
        name: 'Sympathy',
        high_description: `{{name}} sympathizes with others.`,
        mid_description: ``,
        low_description: `{{name}} does not sympathize with others.`,
        summary: '',
        question_contents: [],
    },
    self_efficacy: {
        name: 'Self-efficacy',
        high_description: `{{name}} can complete and excel in tasks.`,
        mid_description: ``,
        low_description: `{{name}} is unable to complete and excel in tasks.`,
        summary: '',
        question_contents: [],
    },
    orderliness: {
        name: 'Orderliness',
        high_description: `{{name}} is a tidy and organized person.`,
        mid_description: ``,
        low_description: `{{name}} is an untidy and disorganized person.`,
        summary: '',
        question_contents: [],
    },
    dutifulness: {
        name: 'Dutifulness',
        high_description: `{{name}} tends to fulfill rules and obligations.`,
        mid_description: ``,
        low_description: `{{name}} tends to break rules and not fulfill obligations.`,
        summary: '',
        question_contents: [],
    },
    achievement_striving: {
        name: 'Achievement-striving',
        high_description: `{{name}} works hard beyond expectations.`,
        mid_description: ``,
        low_description: `{{name}} does not work hard to go beyond expectations.`,
        summary: '',
        question_contents: [],
    },
    self_discipline: {
        name: 'Self-discipline',
        high_description: `{{name}} tends to be prepared and carries out plans in a disciplined manner.`,
        mid_description: ``,
        low_description: `{{name}} tends to be unprepared and does not carry out plans in a disciplined manner.`,
        summary: '',
        question_contents: [],
    },
    cautiousness: {
        name: 'Cautiousness',
        high_description: `{{name}} thinks carefully before making a decision.`,
        mid_description: ``,
        low_description: `{{gender-subject}} acts rashly without thinking.`,
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    anxiety: {
        name: 'Calmness',
        high_description: `{{name}} does not get worried and fearful about things.`,
        mid_description: '',
        low_description: `{{name}} gets worried and fearful about things.`,
        summary: '',
        question_contents: [],
    },
    anger: {
        name: 'Composure',
        high_description: `{{name}} does not get irritated easily.`,
        mid_description: '',
        low_description: `{{name}} gets irritated easily.`,
        summary: '',
        question_contents: [],
    },
    depression: {
        name: 'Hopefulness',
        high_description: `{{name}} does not feel down often.`,
        mid_description: '',
        low_description: `{{name}} feels down often.`,
        summary: '',
        question_contents: [],
    },
    self_consciousness: {
        name: 'Self-confidence',
        high_description: `{{name}} tends not to be self-conscious in difficult social situations.`,
        mid_description: '',
        low_description: `{{name}} tends to be self-conscious in difficult social situations.`,
        summary: '',
        question_contents: [],
    },
    immoderation: {
        name: 'Willpower',
        high_description: `{{name}} can resist temptations well.`,
        mid_description: '',
        low_description: `{{name}} cannot resist temptations well.`,
        summary: '',
        question_contents: [],
    },
    vulnerability: {
        name: 'Resilience',
        high_description: `{{name}} can remain calm under pressure.`,
        mid_description: '',
        low_description: `{{name}} cannot remain calm under pressure.`,
        summary: '',
        question_contents: [],
    },
    friendliness: {
        name: 'Friendliness',
        high_description: `{{name}} is comfortable around people and can make friends easily.`,
        mid_description: '',
        low_description: `{{name}} is not comfortable around people and may not make friends easily.`,
        summary: '',
        question_contents: [],
    },
    gregariousness: {
        name: 'Gregariousness',
        high_description: `{{name}} prefers to be surrounded by people.`,
        mid_description: '',
        low_description: `{{name}} prefers to be alone and not surrounded by people.`,
        summary: '',
        question_contents: [],
    },
    assertiveness: {
        name: 'Assertiveness',
        high_description: `{{name}} tends to take charge of things and people.`,
        mid_description: '',
        low_description: `{{name}} tends to wait for others to take the lead.`,
        summary: '',
        question_contents: [],
    },
    activity_level: {
        name: 'Activity level',
        high_description: `{{name}} tends to be busy and do many things in {{gender-possessive}} time.`,
        mid_description: '',
        low_description: `{{name}} tends to take it easy and does few things in {{gender-possessive}} time.`,
        summary: '',
        question_contents: [],
    },
    excitement_seeking: {
        name: 'Excitement-seeking',
        high_description: `{{name}} likes to seek excitement and adventure.`,
        mid_description: '',
        low_description: `{{name}} does not like to seek excitement and adventure.`,
        summary: '',
        question_contents: [],
    },
    cheerfulness: {
        name: 'Cheerfulness',
        high_description: `{{name}} is a joyful person.`,
        mid_description: '',
        low_description: `{{name}} is not a joyful person.`,
        summary: '',
        question_contents: [],
    },
    imagination: {
        name: 'Imagination',
        high_description: `{{name}} likes to get lost in {{gender-possessive}} thoughts and imagination.`,
        mid_description: '',
        low_description: `{{name}} does not like to get lost in {{gender-possessive}} thoughts and imagination.`,
        summary: '',
        question_contents: [],
    },
    artistic_interests: {
        name: 'Artistic interests',
        high_description: `{{name}} likes to get in touch with art and literature.`,
        mid_description: '',
        low_description: `{{name}} does not like to get in touch with art and literature.`,
        summary: '',
        question_contents: [],
    },
    emotionality: {
        name: 'Emotionality',
        high_description: `{{name}} is receptive to {{gender-possessive}} own and others' emotional experiences.`,
        mid_description: '',
        low_description: `{{name}} is not receptive to {{gender-possessive}} own and others' emotional experiences.`,
        summary: '',
        question_contents: [],
    },
    adventurousness: {
        name: 'Adventurousness',
        high_description: `{{name}} is welcoming to variety and change.`,
        mid_description: '',
        low_description: `{{name}} prefers routine and convention and is not welcoming to change.`,
        summary: '',
        question_contents: [],
    },
    intellect: {
        name: 'Intellect',
        high_description: `{{name}} is interested in challenging and philosophical ideas.`,
        mid_description: '',
        low_description: `{{name}} is not interested in challenging and philosophical ideas.`,
        summary: '',
        question_contents: [],
    },
    liberalism: {
        name: 'Liberalism',
        high_description: `{{name}} believes that there can be multiple perspectives to any issue.`,
        mid_description: '',
        low_description: `{{name}} tends to hold only one perspective to any issue.`,
        summary: '',
        question_contents: [],
    },
    trust: {
        name: 'Trust',
        high_description: `{{name}} tends to trust others.`,
        mid_description: '',
        low_description: `{{name}} tends not to trust others.`,
        summary: '',
        question_contents: [],
    },
    morality: {
        name: 'Morality',
        high_description: `{{name}} does not engage in disruptive behaviors towards others.`,
        mid_description: '',
        low_description: `{{name}} engages in disruptive behaviors towards others.`,
        summary: '',
        question_contents: [],
    },
    altruism: {
        name: 'Altruism',
        high_description: `{{name}} will extend a helping hand to other people.`,
        mid_description: '',
        low_description: `{{name}} does not tend to extend a helping hand to other people.`,
        summary: '',
        question_contents: [],
    },
    cooperation: {
        name: 'Cooperation',
        high_description: `{{name}} does not act in a competitive and aggressive manner.`,
        mid_description: '',
        low_description: `{{name}} acts in a competitive and aggressive manner.`,
        summary: '',
        question_contents: [],
    },
    modesty: {
        name: 'Modesty',
        high_description: `{{name}} does not think too highly of {{gender-object}}self.`,
        mid_description: '',
        low_description: `{{name}} thinks too highly of {{gender-object}}self.`,
        summary: '',
        question_contents: [],
    },
    sympathy: {
        name: 'Sympathy',
        high_description: `{{name}} sympathizes with others.`,
        mid_description: '',
        low_description: `{{name}} does not sympathize with others.`,
        summary: '',
        question_contents: [],
    },
    self_efficacy: {
        name: 'Self-efficacy',
        high_description: `{{name}} can complete and excel in tasks.`,
        mid_description: '',
        low_description: `{{name}} is unable to complete and excel in tasks.`,
        summary: '',
        question_contents: [],
    },
    orderliness: {
        name: 'Orderliness',
        high_description: `{{name}} is a tidy and organized person.`,
        mid_description: '',
        low_description: `{{name}} is an untidy and disorganized person.`,
        summary: '',
        question_contents: [],
    },
    dutifulness: {
        name: 'Dutifulness',
        high_description: `{{name}} tends to fulfill rules and obligations.`,
        mid_description: '',
        low_description: `{{name}} tends to break rules and not fulfill obligations.`,
        summary: '',
        question_contents: [],
    },
    achievement_striving: {
        name: 'Achievement-striving',
        high_description: `{{name}} works hard beyond expectations.`,
        mid_description: '',
        low_description: `{{name}} does not work hard to go beyond expectations.`,
        summary: '',
        question_contents: [],
    },
    self_discipline: {
        name: 'Self-discipline',
        high_description: `{{name}} tends to be prepared and carries out plans in a disciplined manner.`,
        mid_description: '',
        low_description: `{{name}} tends to be unprepared and does not carry out plans in a disciplined manner.`,
        summary: '',
        question_contents: [],
    },
    cautiousness: {
        name: 'Cautiousness',
        high_description: `{{name}} thinks carefully before making a decision.`,
        mid_description: '',
        low_description: `{{gender-subject}} acts rashly without thinking.`,
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    core_self_evaluations: {
        name: 'Core Self-Evaluations',
        high_description: '{{name}} is high on core self-evaluations - {{gender-subject}} views {{gender-object}}self in a consistently positive manner across situations.',
        mid_description: '',
        low_description: '{{name}} is low on core self-evaluations - {{gender-subject}} should try to view {{gender-object}}self in a more positive manner across situations.',
        summary: '',
        question_contents: [],
    },
    performance_orientation: {
        name: 'Performance Orientation',
        high_description: '{{name}} is high on performance goal orientation - {{gender-subject}} is motivated to demonstrate and validate {{gender-possessive}} competence by seeking positive judgements and avoiding negative judgements from others. ',
        mid_description: '',
        low_description: '{{name}} is low on performance goal orientation - {{gender-subject}} should try to be more motivated to demonstrate and validate {{gender-possessive}} competence by seeking positive judgements and avoiding negative judgements.',
        summary: '',
        question_contents: [],
    },
    mastery_orientation: {
        name: 'Mastery Orientation',
        high_description: '{{name}} is high on mastery goal orientation - {{gender-subject}} is motivated to develop competence by acquiring new skills and mastering new situations.',
        mid_description: '',
        low_description: '{{name}} is low on on mastery goal orientation - {{gender-subject}} should try to be more motivated to develop competence by acquiring new skills and mastering new situations.',
        summary: '',
        question_contents: [],
    },
    self_monitoring: {
        name: 'Self-monitoring',
        high_description: '{{name}} is high on self-monitoring - {{gender-subject}} is able to monitor and control {{gender-possessive}} expressions and behaviors.',
        mid_description: '',
        low_description: '{{name}} is low on self-monitoring - {{gender-subject}} should try to monitor and control {{gender-possessive}} expressions and behaviors more.',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    core_self_evaluations: {
        name: 'Core Self-Evaluations',
        high_description: '{{name}} views {{gender-object}}self in a consistently positive manner across situations, such that {{gender-subject}} sees {{gender-object}}self as capable, worthy and in control of {{gender-possessive}} life. Such positive emotions, thoughts and motivations can affect how {{name}} feels, thinks and behaves in the workplace.',
        mid_description: `{{name}} sometimes views {{gender-object}}self in a positive manner and at other times, views {{gender-object}}self in a negative manner. This may affect whether {{name}} sees {{gender-object}}self as capable, worthy and in control of {{gender-possessive}} life.`,
        low_description: '{{name}} views {{gender-object}}self in a consistently negative manner across situations, such that {{gender-subject}} sees {{gender-object}}self as incapable, unworthy and not in control of {{gender-possessive}} life. Such negative emotions, thoughts and motivations can affect how {{name}} feels, thinks and behaves in the workplace.',
        summary: '',
        question_contents: [],
    },
    performance_orientation: {
        name: 'Performance Orientation',
        high_description: '{{name}} is motivated to demonstrate and validate {{gender-possessive}} competence by seeking positive judgment and avoiding negative judgment. Hence, {{name}} is focused on achieving high performance, which may be helpful if other people are only focused on evaluating {{gender-possessive}} performance.',
        mid_description: `{{name}} is sometimes motivated to demonstrate and validate {{gender-possessive}} competence by seeking positive judgment and avoiding negative judgment. This may affect {{name}}'s focus on achieving high performance, which may be important if other people are only focused on evaluating {{gender-possessive}} performance.`,
        low_description: `{{name}} is not motivated to demonstrate and validate {{gender-possessive}} competence which involves seeking positive judgment and avoiding negative judgment. This may affect {{name}}'s focus on achieving high performance, which may be important if other people are only focused on evaluating {{gender-possessive}} performance.`,
        summary: '',
        question_contents: [],
    },
    mastery_orientation: {
        name: 'Mastery Orientation',
        high_description: '{{name}} is motivated to develop competencies by acquiring new skills and mastering new situations. This helps when there are challenging tasks as {{name}} will see such tasks as opportunities for growth and development.',
        mid_description: `{{name}} is moderately motivated to develop competencies by acquiring new skills and mastering new situations. This may affect how {{name}} sees challenging tasks as opportunities for growth and development.`,
        low_description: '{{name}} is not motivated to develop competencies, which involves acquiring new skills and mastering new situations. This may affect how {{name}} sees challenging tasks as opportunities for growth and development.',
        summary: '',
        question_contents: [],
    },
    self_monitoring: {
        name: 'Self-monitoring',
        high_description: '{{name}} is able to monitor and control {{gender-possessive}} expression and behaviors. This will help {{name}} to present {{gender-object}}self in socially desirable ways and be more effective in adapting to new situations.',
        mid_description: `{{name}} is able to monitor and control {{gender-possessive}} expression and behaviors at times. This will affect how {{name}} presents {{gender-object}}self and how effective {{gender-subject}} is in adapting to new situations.`,
        low_description: '{{name}} is not able to monitor and control {{gender-possessive}} expression and behaviors. This will affect how {{name}} presents {{gender-object}}self and how effective {{gender-subject}} is in adapting to new situations.',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    emotional_stability: {
        id: 1,
        name: 'Emotional Stability',
        high_description: 'Has high grit',
        mid_description: '',
        low_description: 'Has grit',
        summary: '',
        question_contents: [],
    },
    extraversion: {
        id: 2,
        name: 'Extraversion',
        high_description: 'Very proactive',
        mid_description: '',
        low_description: 'Proactive',
        summary: '',
        question_contents: [],
    },
    openness_to_experience: {
        id: 3,
        name: 'Openness to Experience',
        high_description: 'Very motivated to learn',
        mid_description: '',
        low_description: 'Motivated to learn',
        summary: '',
        question_contents: [],
    },
    agreeableness: {
        id: 4,
        name: 'Agreeableness',
        high_description: 'Very comfortable with change',
        mid_description: '',
        low_description: 'Comfortable with change',
        summary: '',
        question_contents: [],
    },
    conscientiousness: {
        id: 5,
        name: 'Conscientiousness',
        high_description: 'Very satisfied at work',
        mid_description: '',
        low_description: 'Satisfied at work',
        summary: '',
        question_contents: [],
    },
    core_self_evaluations: {
        id: 6,
        name: 'Core Self-Evaluations',
        high_description: 'Very emotionally committed to work',
        mid_description: '',
        low_description: 'Emotionally committed to work',
        summary: '',
        question_contents: [],
    },
    performance_orientation: {
        id: 7,
        name: 'Performance Orientation',
        high_description: 'High performance at work',
        mid_description: '',
        low_description: 'Good performance at work',
        summary: '',
        question_contents: [],
    },
    mastery_orientation: {
        id: 8,
        name: 'Mastery Orientation',
        high_description: 'Highly creative at work',
        mid_description: '',
        low_description: 'Creative at work',
        summary: '',
        question_contents: [],
    },
    self_monitoring: {
        id: 9,
        name: 'Self-monitoring',
        high_description: 'Can work well in a team',
        mid_description: '',
        low_description: 'Can work in a team',
        summary: '',
        question_contents: [],
    },
    perspective_taking: {
        id: 10,
        name: 'Perspective Taking',
        high_description: 'Has strong leadership ability',
        mid_description: '',
        low_description: 'Has leadership ability',
        summary: '',
        question_contents: [],
    },
    realistic: {
        id: 11,
        name: 'Realistic',
        high_description: 'Very low job burnout',
        mid_description: '',
        low_description: 'Low job burnout',
        summary: '',
        question_contents: [],
    },
    artistic: {
        id: 13,
        name: 'Artistic',
        high_description: 'Very effective in communication',
        mid_description: '',
        low_description: 'Effective in communication',
        summary: '',
        question_contents: [],
    },
    social: {
        id: 14,
        name: 'Social',
        high_description: 'Very strong multi-tasking ability',
        mid_description: '',
        low_description: 'Can multi-task',
        summary: '',
        question_contents: [],
    },
    enterprising: {
        id: 15,
        name: 'Enterprising',
        high_description: 'Highly able to be an entrepreneur',
        mid_description: '',
        low_description: 'Able to be an entrepreneur',
        summary: '',
        question_contents: [],
    },
});
/*
 * Legacy work interest (riasec) content, use descriptor > workInterest content instead
 */
Object.freeze({
    realistic: {
        name: 'Realistic',
        high_description: `{{name}} likes practical, mechanical and hands-on activities and occupations that make use of machines and tools, such as a flying instructor, medical laboratory scientist and a ship's captain.`,
        mid_description: `{{name}} does not have a dominant preference for practical, mechanical and hands-on activities and occupations that make use of machines and tools, such as a flying instructor, medical laboratory scientist and a ship's captain.`,
        low_description: `{{name}} does not have a dominant preference for practical, mechanical and hands-on activities and occupations that make use of machines and tools, such as a flying instructor, medical laboratory scientist and a ship's captain.`,
        summary: '{{name}} prefers to work in Realistic jobs the most - {{gender-subject}} likes practical, mechanical and hands-on occupations.',
        question_contents: [],
    },
    investigative: {
        name: 'Investigative',
        high_description: '{{name}} likes analytical and scientific occupations that involve understanding, exploring and researching things, such as a university lecturer, dental specialist and educational psychologist.',
        mid_description: '{{name}} does not have a dominant preference for analytical and scientific occupations that involve understanding, exploring and researching things, such as a university lecturer, dental specialist and educational psychologist.',
        low_description: '{{name}} does not have a dominant preference for analytical and scientific occupations that involve understanding, exploring and researching things, such as a university lecturer, dental specialist and educational psychologist.',
        summary: '{{name}} prefers to work in Investigative jobs the most - {{gender-subject}} likes analytical and scientific occupations.',
        question_contents: [],
    },
    artistic: {
        name: 'Artistic',
        high_description: '{{name}} likes creative, expressive and artistic occupations that involve creating original work, such as an actor, interpreter and news editor.',
        mid_description: '{{name}} does not have a dominant preference for creative, expressive and artistic occupations that involve creating original work, such as an actor, interpreter and news editor.',
        low_description: '{{name}} does not have a dominant preference for creative, expressive and artistic occupations that involve creating original work, such as an actor, interpreter and news editor.',
        summary: '{{name}} prefers to work in Artistic jobs the most - {{gender-subject}} likes creative, expressive and artistic occupations.',
        question_contents: [],
    },
    social: {
        name: 'Social',
        high_description: '{{name}} likes occupations that can help people by teaching, counseling and assisting them, such as a welfare worker, events coordinator, and recruitment consultant.',
        mid_description: '{{name}} does not have a dominant preference for occupations that can help people by teaching, counseling and assisting them, such as a welfare worker, events coordinator, and recruitment consultant.',
        low_description: '{{name}} does not have a dominant preference for occupations that can help people by teaching, counseling and assisting them, such as a welfare worker, events coordinator, and recruitment consultant.',
        summary: '{{name}} prefers to work in Social jobs the most - {{gender-subject}} likes occupations that can help people.',
        question_contents: [],
    },
    enterprising: {
        name: 'Enterprising',
        high_description: '{{name}} likes occupations that allow {{gender-object}} to be in positions of leadership, which involve persuading, influencing and directing others, such as a finance manager, futures trader, and barrister.',
        mid_description: '{{name}} does not have a dominant preference for occupations that allow {{gender-object}} to be in positions of leadership, which involve persuading, influencing and directing others, such as a finance manager, futures trader, and barrister.',
        low_description: '{{name}} does not have a dominant preference for occupations that allow {{gender-object}} to be in positions of leadership, which involve persuading, influencing and directing others, such as a finance manager, futures trader, and barrister.',
        summary: '{{name}} prefers to work in Enterprising jobs the most - {{gender-subject}} likes occupations that allow them to be in positions of leadership.',
        question_contents: [],
    },
    conventional: {
        name: 'Conventional',
        high_description: '{{name}} likes occupations that have clear standards, rules and procedures, such as an external auditor, computer network engineer, and health information manager.',
        mid_description: '{{name}} does not have a dominant preference for occupations that have clear standards, rules and procedures, such as an external auditor, computer network engineer, and health information manager.',
        low_description: '{{name}} does not have a dominant preference for occupations that have clear standards, rules and procedures, such as an external auditor, computer network engineer, and health information manager.',
        summary: '{{name}} prefers to work in Conventional jobs the most - {{gender-subject}} likes occupations with clear standards, rules and procedures.',
        question_contents: [],
    },
});
Object.freeze({
    realistic: {
        name: 'Realistic',
        high_description: 'Practical & hands-on roles that involve machines & tools',
        mid_description: '',
        low_description: 'Practical & hands-on roles that involve machines & tools',
        summary: '',
        question_contents: [],
    },
    investigative: {
        name: 'Investigative',
        high_description: 'Analytical & scientific roles that involve exploring & researching things',
        mid_description: '',
        low_description: 'Analytical & scientific roles that involve exploring & researching things',
        summary: '',
        question_contents: [],
    },
    artistic: {
        name: 'Artistic',
        high_description: 'Creative & artistic roles that involve creating original work',
        mid_description: '',
        low_description: 'Creative & artistic roles that involve creating original work',
        summary: '',
        question_contents: [],
    },
    social: {
        name: 'Social',
        high_description: 'Roles that can help people by teaching & assisting them',
        mid_description: '',
        low_description: 'Roles that can help people by teaching & assisting them',
        summary: '',
        question_contents: [],
    },
    enterprising: {
        name: 'Enterprising',
        high_description: 'Positions of leadership that involve influencing & directing others',
        mid_description: '',
        low_description: 'Positions of leadership that involve influencing & directing others',
        summary: '',
        question_contents: [],
    },
    conventional: {
        name: 'Conventional',
        high_description: 'Roles with clear rules & procedures',
        mid_description: '',
        low_description: 'Roles with clear rules & procedures',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    realistic: {
        name: 'Realistic',
        high_description: 'More hands-on activities at work',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    investigative: {
        name: 'Investigative',
        high_description: 'More tasks that revolve around research and analytics',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    artistic: {
        name: 'Artistic',
        high_description: 'More opportunities for {{name}} to create new things',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    social: {
        name: 'Social',
        high_description: 'More work tasks that allow {{name}} to help others',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    enterprising: {
        name: 'Enterprising',
        high_description: 'More opportunities that allow {{name}} to influence others',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    conventional: {
        name: 'Conventional',
        high_description: 'More activities that revolve around keeping records and doing computations',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    realistic: {
        name: 'Realistic',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    investigative: {
        name: 'Investigative',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    artistic: {
        name: 'Artistic',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    social: {
        name: 'Social',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    enterprising: {
        name: 'Enterprising',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    conventional: {
        name: 'Conventional',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    realistic: {
        name: 'Realistic',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may not enjoy hands-on activities at work',
        summary: '',
        question_contents: [],
    },
    investigative: {
        name: 'Investigative',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may avoid tasks that revolve around research and analytics',
        summary: '',
        question_contents: [],
    },
    artistic: {
        name: 'Artistic',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may find it challenging to take on opportunities to create new things',
        summary: '',
        question_contents: [],
    },
    social: {
        name: 'Social',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may not enjoy activities that require {{gender-object}} to help others',
        summary: '',
        question_contents: [],
    },
    enterprising: {
        name: 'Enterprising',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may avoid activities that require {{gender-object}} to influence others',
        summary: '',
        question_contents: [],
    },
    conventional: {
        name: 'Conventional',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may find it challenging to take on activities that revolve around keeping records and doing computations',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    achievement_effort: {
        name: 'Achievement/Effort',
        high_description: 'High achiever',
        mid_description: '',
        low_description: 'Exerts effort to achieve goals',
        summary: '',
        question_contents: [],
    },
    persistence: {
        name: 'Persistence',
        high_description: 'Very persistent',
        mid_description: '',
        low_description: 'Persistent',
        summary: '',
        question_contents: [],
    },
    initiative: {
        name: 'Initiative',
        high_description: 'Takes initiative at work',
        mid_description: '',
        low_description: 'Occasionally takes initiative at work',
        summary: '',
        question_contents: [],
    },
    leadership: {
        name: 'Leadership',
        high_description: 'Has strong leadership ability',
        mid_description: '',
        low_description: 'Has leadership ability',
        summary: '',
        question_contents: [],
    },
    cooperation: {
        name: 'Cooperation',
        high_description: 'Good team player',
        mid_description: '',
        low_description: 'Can work in a team',
        summary: '',
        question_contents: [],
    },
    concern_for_others: {
        name: 'Concern for Others',
        high_description: 'Very helpful to others',
        mid_description: '',
        low_description: 'Helpful to others',
        summary: '',
        question_contents: [],
    },
    social_orientation: {
        name: 'Social Orientation',
        high_description: 'Very sociable',
        mid_description: '',
        low_description: 'Generally sociable',
        summary: '',
        question_contents: [],
    },
    self_control: {
        name: 'Self Control',
        high_description: 'Strong sense of self-control',
        mid_description: '',
        low_description: 'Able to keep emotions in check',
        summary: '',
        question_contents: [],
    },
    stress_tolerance: {
        name: 'Stress Tolerance',
        high_description: 'High stress-tolerance',
        mid_description: '',
        low_description: 'Able to handle stress generally',
        summary: '',
        question_contents: [],
    },
    adaptability_flexibility: {
        name: 'Adaptability/Flexibility',
        high_description: 'Very adaptable',
        mid_description: '',
        low_description: 'Adaptable',
        summary: '',
        question_contents: [],
    },
    dependability: {
        name: 'Dependability',
        high_description: 'Very dependable',
        mid_description: '',
        low_description: 'Dependable',
        summary: '',
        question_contents: [],
    },
    attention_to_detail: {
        name: 'Attention to Detail',
        high_description: 'Very detail-oriented',
        mid_description: '',
        low_description: 'Detail-oriented',
        summary: '',
        question_contents: [],
    },
    integrity: {
        name: 'Integrity',
        high_description: 'Has high integrity and ethics',
        mid_description: '',
        low_description: 'Has integrity and ethics',
        summary: '',
        question_contents: [],
    },
    independence: {
        name: 'Independence',
        high_description: 'Very independent',
        mid_description: '',
        low_description: 'Independent',
        summary: '',
        question_contents: [],
    },
    innovation: {
        name: 'Innovation',
        high_description: 'Highly innovative at work',
        mid_description: '',
        low_description: 'Innovative at work',
        summary: '',
        question_contents: [],
    },
    analytical_thinking: {
        name: 'Analytical Thinking',
        high_description: 'Very analytical',
        mid_description: '',
        low_description: 'Analytical',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    achievement_effort: {
        name: 'Achievement/Effort',
        high_description: '{{name}} will work hard to accomplish {{gender-possessive}} goals and to master {{gender-possessive}} tasks.',
        mid_description: '',
        low_description: '{{name}} may need regular check-ins to ensure {{gender-subject}} is motivated and supported to accomplish {{gender-possessive}} tasks',
        summary: '',
        question_contents: [],
    },
    persistence: {
        name: 'Persistence',
        high_description: '{{name}} will have the stamina to persevere even when {{gender-subject}} encounters obstacles at work',
        mid_description: '',
        low_description: '{{name}} may lack the stamina to persevere when {{gender-subject}} encounters obstacles so {{gender-subject}} may need some motivation and support',
        summary: '',
        question_contents: [],
    },
    initiative: {
        name: 'Initiative',
        high_description: '{{name}} will be willing to take on responsibilities and challenges by {{gender-object}}self',
        mid_description: '',
        low_description: 'It will be helpful to understand what motivates {{name}} to be more proactive so that the manager may guide {{name}} to take more initiative at work',
        summary: '',
        question_contents: [],
    },
    leadership: {
        name: 'Leadership',
        high_description: 'If {{name}} is tasked to take on a leadership position, {{gender-subject}} should be able to handle it',
        mid_description: '',
        low_description: '{{name}} may need mentoring and training to build up on {{gender-possessive}} leadership skills',
        summary: '',
        question_contents: [],
    },
    cooperation: {
        name: 'Cooperation',
        high_description: '{{name}} will be able to cooperate with others and work in a team',
        mid_description: '',
        low_description: '{{name}} may find it hard to cooperate with others and work in a team',
        summary: '',
        question_contents: [],
    },
    concern_for_others: {
        name: 'Concern for Others',
        high_description: '{{name}} will be helpful to others and {{gender-subject}} will be able to understand the needs and feelings of others',
        mid_description: '',
        low_description: '{{name}} may find it difficult to empathize with others, hence may not be helpful to others',
        summary: '',
        question_contents: [],
    },
    social_orientation: {
        name: 'Social Orientation',
        high_description: '{{name}} will thrive when working with others and when {{gender-subject}} is allowed to connect with others at work',
        mid_description: '',
        low_description: '{{name}} may find it difficult to work and connect with others at work',
        summary: '',
        question_contents: [],
    },
    self_control: {
        name: 'Self Control',
        high_description: '{{name}} will be able to maintain composure under very difficult situations at work',
        mid_description: '',
        low_description: '{{name}} may find it difficult to keep calm or control {{gender-possessive}} anger under difficult situations',
        summary: '',
        question_contents: [],
    },
    stress_tolerance: {
        name: 'Stress Tolerance',
        high_description: '{{name}} tends to be able to cope under high stress situations and deals well with criticisms',
        mid_description: '',
        low_description: '{{name}} may find it challenging to perform effectively under high stress situations and may not take criticisms well',
        summary: '',
        question_contents: [],
    },
    adaptability_flexibility: {
        name: 'Adaptability/Flexibility',
        high_description: '{{name}} tends to be flexible and open to changes in the workplace',
        mid_description: '',
        low_description: '{{name}} may find it tough to adapt to changes in the workplace',
        summary: '',
        question_contents: [],
    },
    dependability: {
        name: 'Dependability',
        high_description: '{{name}} tends to be reliable and responsible when it comes to fulfilling {{gender-possessive}} duties',
        mid_description: '',
        low_description: 'It will be helpful to have regular check-ins with {{name}} to ensure {{gender-subject}} is completing {{gender-possessive}} work in a timely manner',
        summary: '',
        question_contents: [],
    },
    attention_to_detail: {
        name: 'Attention to Detail',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    integrity: {
        name: 'Integrity',
        high_description: '{{name}} tends to be honest and ethical with {{gender-possessive}} work',
        mid_description: '',
        low_description: '{{name}} may not be very honest or ethical when it comes to {{gender-possessive}} work',
        summary: '',
        question_contents: [],
    },
    independence: {
        name: 'Independence',
        high_description: '{{name}} tends to develop {{gender-possessive}} own way of doing things and require little or no supervision to complete {{gender-possessive}} work',
        mid_description: '',
        low_description: '{{name}} may find it challenging to work independently, hence it may be helpful to provide {{name}} with some guidance and supervision',
        summary: '',
        question_contents: [],
    },
    innovation: {
        name: 'Innovation',
        high_description: '{{name}} tends to be a creative thinker which can help with problem-solving and developing new ideas',
        mid_description: '',
        low_description: '{{name}} may find it tough to think creatively and develop new ideas',
        summary: '',
        question_contents: [],
    },
    analytical_thinking: {
        name: 'Analytical Thinking',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    achievement_effort: {
        name: 'Achievement/Effort',
        high_description: 'Tasks that allow {{name}} to learn and take on challenges constantly',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    persistence: {
        name: 'Persistence',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    initiative: {
        name: 'Initiative',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    leadership: {
        name: 'Leadership',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    cooperation: {
        name: 'Cooperation',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    concern_for_others: {
        name: 'Concern for Others',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    social_orientation: {
        name: 'Social Orientation',
        high_description: 'Tasks that allow {{name}} to work and stay connected with others rather than alone',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    self_control: {
        name: 'Self Control',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    stress_tolerance: {
        name: 'Stress Tolerance',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    adaptability_flexibility: {
        name: 'Adaptability/Flexibility',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    dependability: {
        name: 'Dependability',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    attention_to_detail: {
        name: 'Attention to Detail',
        high_description: 'Tasks that allow {{name}} to be thorough and detail-oriented',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    integrity: {
        name: 'Integrity',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    independence: {
        name: 'Independence',
        high_description: 'Tasks that require little to no supervision to complete',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    innovation: {
        name: 'Innovation',
        high_description: 'Tasks that allow {{name}} to think outside the box or brainstorm new ideas or solutions',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    analytical_thinking: {
        name: 'Analytical Thinking',
        high_description: 'Tasks that allow {{name}} to solve problems analytically and logically',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    achievement_effort: {
        name: 'Achievement/Effort',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may not be motivated when assigned tasks that require {{gender-object}} to learn constantly',
        summary: '',
        question_contents: [],
    },
    persistence: {
        name: 'Persistence',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    initiative: {
        name: 'Initiative',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    leadership: {
        name: 'Leadership',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    cooperation: {
        name: 'Cooperation',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    concern_for_others: {
        name: 'Concern for Others',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    social_orientation: {
        name: 'Social Orientation',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may not be motivated when tasked to work alone rather than with others',
        summary: '',
        question_contents: [],
    },
    self_control: {
        name: 'Self Control',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    stress_tolerance: {
        name: 'Stress Tolerance',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    adaptability_flexibility: {
        name: 'Adaptability/Flexibility',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may not be open to change in the workplace or with work tasks',
        summary: '',
        question_contents: [],
    },
    dependability: {
        name: 'Dependability',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    attention_to_detail: {
        name: 'Attention to Detail',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may be careless when it comes to dealing with the details of a task',
        summary: '',
        question_contents: [],
    },
    integrity: {
        name: 'Integrity',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may not prioritize honesty or ethics with {{gender-possessive}} work',
        summary: '',
        question_contents: [],
    },
    independence: {
        name: 'Independence',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may require guidance and supervision to complete {{gender-possessive}} work',
        summary: '',
        question_contents: [],
    },
    innovation: {
        name: 'Innovation',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may struggle with tasks that require {{gender-object}} to develop new ideas or solutions',
        summary: '',
        question_contents: [],
    },
    analytical_thinking: {
        name: 'Analytical Thinking',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may find it difficult to think analytically and logically when solving problems',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    innovation: {
        name: 'Innovation',
        high_description: '{{name}} values innovation and risk taking more than stability and predictability in an organization.',
        mid_description: '{{name}} values a balance of innovation and stability in an organization.',
        low_description: '{{name}} values stability and predictability more than innovation and risk taking in an organization.',
        summary: '{{name}} highly values innovation in an organization.',
        question_contents: [],
    },
    attention_to_detail: {
        name: 'Attention to Detail',
        high_description: '{{name}} highly values an organization that needs to be precise and attentive to details.',
        mid_description: '{{name}} values an organization that needs to be precise and attentive to details to a moderate extent.',
        low_description: '{{name}} does not really value an organization that needs to be precise and attentive to details.',
        summary: '{{name}} highly values an organization that pays attention to details.',
        question_contents: [],
    },
    outcome_orientation: {
        name: 'Outcome Orientation',
        high_description: '{{name}} values organizations that have high expectations for performance, results and achievement.',
        mid_description: '{{name}} values organizations that have some expectations for performance, results and achievement.',
        low_description: '{{name}} values organizations that have low expectations for performance, results and achievement.',
        summary: '{{name}} highly values organizations that focus on results.',
        question_contents: [],
    },
    aggressiveness: {
        name: 'Aggressiveness',
        high_description: '{{name}} values aggressiveness and competitiveness more than social responsibility in an organization.',
        mid_description: '{{name}} values a balance of aggressiveness and social responsibility in an organization.',
        low_description: '{{name}} values social responsibility more than aggressiveness and competitiveness in an organization.',
        summary: '{{name}} highly values aggressiveness in an organization.',
        question_contents: [],
    },
    supportiveness: {
        name: 'Supportiveness',
        high_description: '{{name}} highly values supportiveness and information sharing in an organization.',
        mid_description: '{{name}} values supportiveness and information sharing in an organization to a moderate extent.',
        low_description: '{{name}} does not really value supportiveness and information sharing in an organization.',
        summary: '{{name}} highly values supportiveness in an organization.',
        question_contents: [],
    },
    emphasis_on_rewards: {
        name: 'Growth and Rewards',
        high_description: '{{name}} values organizations that provide rewards to employees such as pay and growth opportunities.',
        mid_description: '{{name}} values organizations that occasionally provide rewards to employees such as pay and growth opportunities.',
        low_description: '{{name}} does not value rewards for employees such as pay and growth opportunities in an organization.',
        summary: '{{name}} highly values organizations that emphasize rewards.',
        question_contents: [],
    },
    team_orientation: {
        name: 'Team Orientation',
        high_description: '{{name}} values team orientation and collaboration more than autonomy and independence in an organization.',
        mid_description: '{{name}} values a balance of team orientation and autonomy in an organization.',
        low_description: '{{name}} values autonomy and independence more than team orientation and collaboration in an organization.',
        summary: '{{name}} highly values an organization that is team oriented.',
        question_contents: [],
    },
    decisiveness: {
        name: 'Decisiveness',
        high_description: '{{name}} values organizations that can make decisions quickly.',
        mid_description: '{{name}} values organizations that balance between conflict and decisiveness.',
        low_description: '{{name}} values organizations that have a culture which encourages conflict as opposed to decisiveness.',
        summary: '{{name}} highly values organizations that can make decisions quickly.',
        question_contents: [],
    },
    respect_for_people: {
        name: 'Respect for people',
        high_description: '{{name}} highly values fairness and tolerance in an organization.',
        mid_description: '{{name}} values fairness and tolerance in an organization to a moderate extent.',
        low_description: '{{name}} does not really value fairness and tolerance in an organization.',
        summary: '{{name}} highly values an organization that has respect for people.',
        question_contents: [],
    },
    adaptability: {
        name: 'Adaptability',
        high_description: '{{name}} values organizations that are adaptive, innovative and willing to experiment.',
        mid_description: '{{name}} values organizations that balance between adaptability and stability.',
        low_description: '{{name}} values organizations that are stable, predictable and careful.',
        summary: '{{name}} highly values organizations that are adaptable.',
        question_contents: [],
    },
    collaboration: {
        name: 'Collaboration',
        high_description: '{{name}} values organizations that have a people-oriented culture which focuses on collaboration and teamwork.',
        mid_description: '{{name}} values organizations that strike a balance between collaboration and autonomy (the freedom to govern yourself or to organize your own activities at work).',
        low_description: '{{name}} values organizations that have a culture which has less focus on being people-oriented and more focus on autonomy (the freedom to govern yourself or to organize your own activities at work) and aggressiveness.',
        summary: '{{name}} highly values organizations that foster collaboration.',
        question_contents: [],
    },
    customer_orientation: {
        name: 'Customer Orientation',
        high_description: '{{name}} values organizations that are market-driven and focuses on customers.',
        mid_description: '{{name}} values organizations that are market-driven to a moderate extent and have some focus on customers.',
        low_description: '{{name}} values organizations that are less market-driven and less focused on customers.',
        summary: '{{name}} highly values organizations that are customer oriented.',
        question_contents: [],
    },
    detail_orientation: {
        name: 'Detail Orientation',
        high_description: '{{name}} values organizations that are attentive to details and quality.',
        mid_description: '{{name}} values organizations that are attentive to details and quality to a moderate extent.',
        low_description: '{{name}} does not value organizations that are attentive to details and quality.',
        summary: '{{name}} highly values organizations that focus on details.',
        question_contents: [],
    },
    integrity: {
        name: 'Integrity',
        high_description: '{{name}} highly values organizations that have high integrity and high ethical standards such as having respect for people.',
        mid_description: '{{name}} values organizations that have some integrity and some ethical standards such as having respect for people.',
        low_description: '{{name}} does not value organizations that have integrity and ethical standards such as having respect for people.',
        summary: '{{name}} highly values organizations that have integrity.',
        question_contents: [],
    },
});
Object.freeze({
    achievement: {
        name: 'Achievement',
        high_description: 'Results-driven',
        mid_description: 'Moderate focus on results',
        low_description: 'Low focus on results',
        summary: '',
        question_contents: [],
    },
    recognition: {
        name: 'Recognition',
        high_description: 'Advancement and rewards',
        mid_description: 'Moderate focus on advancement and rewards',
        low_description: 'Low focus on advancement and rewards',
        summary: '',
        question_contents: [],
    },
    relationships: {
        name: 'Relationships',
        high_description: 'Collaboration and friendly',
        mid_description: 'Balance between collaboration and autonomy',
        low_description: 'Autonomy and competitive',
        summary: '',
        question_contents: [],
    },
    support: {
        name: 'Support',
        high_description: 'Supportive and ethical',
        mid_description: 'Some support and ethics',
        low_description: 'Low support and ethics',
        summary: '',
        question_contents: [],
    },
    independence: {
        name: 'Independence',
        high_description: 'Decisiveness and independence',
        mid_description: 'Moderate level of decisiveness',
        low_description: 'Indecisive and dependence',
        summary: '',
        question_contents: [],
    },
    working_conditions: {
        name: 'Working Conditions',
        high_description: 'Security and good working conditions',
        mid_description: 'Moderate focus on security and working conditions',
        low_description: 'Low focus on security and working conditions',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    achievement: {
        name: 'Achievement',
        high_description: "An organization that is results-focused by placing high expectations for achievement and performance by utilizing its employees' skills and abilities",
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    recognition: {
        name: 'Recognition',
        high_description: "An organization that recognizes its employees' work through advancement opportunities and rewards",
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    relationships: {
        name: 'Relationships',
        high_description: 'An organizational culture that encourages teamwork and a non-competitive work environment',
        mid_description: '',
        low_description: 'A competitive organizational culture where people work independently',
        summary: '',
        question_contents: [],
    },
    support: {
        name: 'Support',
        high_description: 'An organizational culture that supports the employees and their development, and has high ethical standards',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    independence: {
        name: 'Independence',
        high_description: 'Constant opportunities to take risks and experiment with new ideas throughout the organization',
        mid_description: '',
        low_description: 'An organization that is rule-oriented and focuses on stability',
        summary: '',
        question_contents: [],
    },
    working_conditions: {
        name: 'Working Conditions',
        high_description: 'An organization that provides a sense of job security and good working conditions to its employees',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    achievement: {
        name: 'Achievement',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    recognition: {
        name: 'Recognition',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    relationships: {
        name: 'Relationships',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    support: {
        name: 'Support',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    independence: {
        name: 'Independence',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
    working_conditions: {
        name: 'Working Conditions',
        high_description: '',
        mid_description: '',
        low_description: '',
        summary: '',
        question_contents: [],
    },
});
Object.freeze({
    achievement: {
        name: 'Achievement',
        high_description: '',
        mid_description: '',
        low_description: 'It may be too demanding for {{name}} if there are high expectations for achievement, performance and results throughout the organization',
        summary: '',
        question_contents: [],
    },
    recognition: {
        name: 'Recognition',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} does not place a high emphasis on opportunities for advancement and rewards from the organization so it will be important to find out the other things {{gender-subject}} values instead',
        summary: '',
        question_contents: [],
    },
    relationships: {
        name: 'Relationships',
        high_description: '{{name}} may be less satisfied with an organizational culture that is competitive and one that encourages people to work independently',
        mid_description: '',
        low_description: '{{name}} may be less satisfied at work if the organization encourages teamwork and collaboration',
        summary: '',
        question_contents: [],
    },
    support: {
        name: 'Support',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} may be unsatisfied if the organization is unsupportive of its employees and their development',
        summary: '',
        question_contents: [],
    },
    independence: {
        name: 'Independence',
        high_description: '{{name}} may be less satisfied at work if the organization becomes more rule-oriented and focuses more on stability',
        mid_description: '',
        low_description: '{{name}} may be less satisfied at work if the organization starts to take more risks and tries to experiment with new ideas more often',
        summary: '',
        question_contents: [],
    },
    working_conditions: {
        name: 'Working Conditions',
        high_description: '',
        mid_description: '',
        low_description: '{{name}} does not place a high focus on the working conditions and sense of job security that the organization provides so it will be important to find out the other things {{gender-subject}} values instead',
        summary: '',
        question_contents: [],
    },
});

const LegacyDomainIdMap = Object.freeze({
    // work_interest
    11: {
        trait_alias: 'realistic',
        trait_framework: 'work_interest',
    },
    12: {
        trait_alias: 'investigative',
        trait_framework: 'work_interest',
    },
    13: {
        trait_alias: 'artistic',
        trait_framework: 'work_interest',
    },
    14: {
        trait_alias: 'social',
        trait_framework: 'work_interest',
    },
    15: {
        trait_alias: 'enterprising',
        trait_framework: 'work_interest',
    },
    16: {
        trait_alias: 'conventional',
        trait_framework: 'work_interest',
    },
    // work_style
    54: {
        trait_alias: 'achievement_effort',
        trait_framework: 'work_style',
    },
    55: {
        trait_alias: 'persistence',
        trait_framework: 'work_style',
    },
    56: {
        trait_alias: 'initiative',
        trait_framework: 'work_style',
    },
    57: {
        trait_alias: 'leadership',
        trait_framework: 'work_style',
    },
    58: {
        trait_alias: 'cooperation',
        trait_framework: 'work_style',
    },
    59: {
        trait_alias: 'concern_for_others',
        trait_framework: 'work_style',
    },
    60: {
        trait_alias: 'social_orientation',
        trait_framework: 'work_style',
    },
    61: {
        trait_alias: 'self_control',
        trait_framework: 'work_style',
    },
    62: {
        trait_alias: 'stress_tolerance',
        trait_framework: 'work_style',
    },
    63: {
        trait_alias: 'adaptability_flexibility',
        trait_framework: 'work_style',
    },
    64: {
        trait_alias: 'dependability',
        trait_framework: 'work_style',
    },
    65: {
        trait_alias: 'attention_to_detail',
        trait_framework: 'work_style',
    },
    66: {
        trait_alias: 'integrity',
        trait_framework: 'work_style',
    },
    67: {
        trait_alias: 'independence',
        trait_framework: 'work_style',
    },
    68: {
        trait_alias: 'innovation',
        trait_framework: 'work_style',
    },
    69: {
        trait_alias: 'analytical_thinking',
        trait_framework: 'work_style',
    },
    // work_value
    48: {
        trait_alias: 'achievement',
        trait_framework: 'work_value',
    },
    49: {
        trait_alias: 'independence',
        trait_framework: 'work_value',
    },
    50: {
        trait_alias: 'recognition',
        trait_framework: 'work_value',
    },
    51: {
        trait_alias: 'relationships',
        trait_framework: 'work_value',
    },
    52: {
        trait_alias: 'support',
        trait_framework: 'work_value',
    },
    53: {
        trait_alias: 'working_conditions',
        trait_framework: 'work_value',
    },
});

const TRANSLATION_NAMESPACE = 'descriptor';

var PersonPlaceholder;
(function (PersonPlaceholder) {
    PersonPlaceholder["NAME"] = "name";
})(PersonPlaceholder || (PersonPlaceholder = {}));
var GenderPlaceholder;
(function (GenderPlaceholder) {
    GenderPlaceholder["SUBJECT"] = "gender-subject";
    GenderPlaceholder["OBJECT"] = "gender-object";
    GenderPlaceholder["POSSESSIVE"] = "gender-possessive";
    GenderPlaceholder["POSSESSIVE_ADJECTIVE"] = "gender-possessiveAdjective";
    GenderPlaceholder["REFLEXIVE"] = "gender-reflexive";
})(GenderPlaceholder || (GenderPlaceholder = {}));
var VerbPlaceholder;
(function (VerbPlaceholder) {
    VerbPlaceholder["PERCEIVE"] = "verb-perceive";
})(VerbPlaceholder || (VerbPlaceholder = {}));

instance.use(Backend).init({
    initImmediate: false,
    fallbackLng: DefaultLocale,
    preload: SupportedLocales,
    ns: TRANSLATION_NAMESPACE,
    defaultNS: TRANSLATION_NAMESPACE,
    backend: {
        loadPath: join(__dirname, '/locales/{{ns}}/{{lng}}.json'),
    },
    parseMissingKeyHandler: () => undefined,
});
const getText = (key, locale, returnObjects = false) => {
    const langData = instance.t(key, {
        lng: locale,
        returnObjects,
    });
    if (!langData) {
        throw new Error(`Unable to retrieve translation for key: "${key}"`);
    }
    if (!returnObjects) {
        return langData;
    }
    return snakecaseKeys(Object.assign({}, langData));
};
const getObject = (key, locale) => getText(key, locale, true);
const translationService = {
    i18next: instance,
    getText,
    getObject,
};

function sortDescriptorSummaryItemScores(scores, sortBy) {
    // Create a copy of the scores array
    const sortedScores = [...scores];
    sortedScores.sort((a, b) => {
        if ((b === null || b === void 0 ? void 0 : b.score) && (a === null || a === void 0 ? void 0 : a.score)) {
            return sortBy === DimensionLevel.HIGH ? b.score - a.score : a.score - b.score;
        }
        return 0;
    });
    return sortedScores.map((_a) => {
        var rest = __rest(_a, ["score"]);
        return rest;
    });
}
function sortDomainOrder(a, b) {
    if (!a.domain_order || !b.domain_order) {
        return 0;
    }
    return a.domain_order > (b === null || b === void 0 ? void 0 : b.domain_order) ? 1 : -1;
}
/**
 * Sort domain weight in descending order, else by domain alias ascending order
 */
function sortDomainWeight(a, b) {
    if (!a.domain_weightage || !b.domain_weightage) {
        return a.domain_alias.localeCompare(b.domain_alias);
    }
    return b.domain_weightage - a.domain_weightage;
}

function replaceHandlebars(textToReplace, options) {
    const isSecondPersonPov = (options === null || options === void 0 ? void 0 : options.perspective) === Perspective.SECOND_PERSON;
    const nameToBeReplaced = isSecondPersonPov
        ? capitalize(getPronouns('secondPerson.subjective', options === null || options === void 0 ? void 0 : options.locale)) // You
        : getName(options === null || options === void 0 ? void 0 : options.name, options === null || options === void 0 ? void 0 : options.locale); // "name" or "this person"
    const nameRe = new RegExp(`{{${PersonPlaceholder.NAME}}}`, 'g');
    let newText = textToReplace.replace(nameRe, nameToBeReplaced);
    const pluralRegex = new RegExp(`{{${VerbPlaceholder.PERCEIVE}}}`, 'g');
    newText = newText.replace(pluralRegex, isSecondPersonPov
        ? getSingularVerbs(VerbPlaceholder.PERCEIVE, options === null || options === void 0 ? void 0 : options.locale)
        : getPluralVerbs(VerbPlaceholder.PERCEIVE, options === null || options === void 0 ? void 0 : options.locale));
    const genderPlaceholders = Object.values(GenderPlaceholder);
    for (const placeholder of genderPlaceholders) {
        const genderPronoun = getGenderPronoun(placeholder, options === null || options === void 0 ? void 0 : options.locale);
        const regExp = new RegExp(`{{${placeholder}}}`, 'g');
        newText = newText.replace(regExp, isSecondPersonPov ? getPronouns('secondPerson.reflexive', options === null || options === void 0 ? void 0 : options.locale) : genderPronoun);
    }
    return newText;
}
/*
key format: [perspective].[pronounType]
@example.
- key: secondPerson.subjective = you
- key: secondPerson.possessiveAdjective = your
- key: secondPerson.reflexive = yourself
- key: neutral.reflexive = themself
@see https://www.adda247.com/school/pronoun/
 */
function getPronouns(key, locale) {
    return translationService.getText(`pronouns.${key}`, locale || DefaultLocale);
}
/*
format: [word].[singular/plural]
@example.
- key: perceive.singular = perceive
- key: perceive.plural = perceives
@see https://grammar.yourdictionary.com/word-lists/singular-and-plural-irregular-english-verb-chart.html
*/
function getVerbs(key, locale) {
    return translationService.getText(`verbs.${key}`, locale || DefaultLocale);
}
/*
key format: [word].[noun type]
@example.
- key: person.singular = This person
@see https://www.quora.com/Which-is-correct-these-people-or-this-people
 */
function getNouns(key, locale) {
    return translationService.getText(`nouns.${key}`, locale || DefaultLocale);
}
function getSingularVerbs(placeholder, locale) {
    if (placeholder === VerbPlaceholder.PERCEIVE) {
        return getVerbs('perceive.singular', locale || DefaultLocale);
    }
    return '';
}
function getPluralVerbs(placeholder, locale) {
    if (placeholder === VerbPlaceholder.PERCEIVE) {
        return getVerbs('perceive.plural', locale || DefaultLocale);
    }
    return '';
}
function getGenderPronoun(placeholder, locale) {
    if (placeholder === GenderPlaceholder.SUBJECT) {
        return 'he/she';
    }
    if (placeholder === GenderPlaceholder.OBJECT) {
        return 'him/her';
    }
    if (placeholder === GenderPlaceholder.POSSESSIVE) {
        return 'his/her';
    }
    // At the moment only some descriptor has reflexive, but future should all use reflexive and the locale parameter
    if (placeholder === GenderPlaceholder.REFLEXIVE) {
        return getPronouns('neutral.reflexive', locale);
    }
    return 'they/them';
}
function getName(name, locale) {
    return name && name !== '' ? capitalize(name) : getNouns('person.singular', locale || DefaultLocale);
}
/**
 * Capitalizes first letters of words in string.
 * @param [str] String to be modified
 * @param [lower] Whether all other letters should be lowerc-ased
 * @usage
 *   capitalize('fix this string');     // -> 'Fix This String'
 *   capitalize('javaSCrIPT');          // -> 'JavaSCrIPT'
 *   capitalize('javaSCrIPT', true);    // -> 'Javascript'
 */
function capitalize(str, lower = false) {
    return (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());
}

const HIGH_THRESHOLD = 0.7;
const LOW_THRESHOLD = 0.3;
const LEGACY_HIGH_THRESHOLD = 0.8;
const LEGACY_LOW_THRESHOLD = 0.2;
/**
 * Map Work Interest descriptor the highest domain score sort by R.I.A.S.E.C or Interest Riasec Codes
 */
function mapWorkInterestDescriptors(scores, personCodes, jobCodes, options) {
    const sortedDomains = [
        { order_no: 1, domain_alias: 'realistic' },
        { order_no: 2, domain_alias: 'investigative' },
        { order_no: 3, domain_alias: 'artistic' },
        { order_no: 4, domain_alias: 'social' },
        { order_no: 5, domain_alias: 'enterprising' },
        { order_no: 6, domain_alias: 'conventional' },
    ];
    if (personCodes && personCodes.length === 0) {
        let highestScore = -1;
        for (const sortedItem of sortedDomains) {
            const domainScoreItem = scores.find((i) => i.domain_alias === sortedItem.domain_alias);
            if (!domainScoreItem) {
                continue;
            }
            if (domainScoreItem && (domainScoreItem === null || domainScoreItem === void 0 ? void 0 : domainScoreItem.domain_score) && (domainScoreItem === null || domainScoreItem === void 0 ? void 0 : domainScoreItem.domain_score) > highestScore) {
                highestScore = domainScoreItem.domain_score;
                personCodes.push(sortedItem.domain_alias.charAt(0).toUpperCase());
            }
        }
    }
    for (const scoreItem of scores) {
        const isRequiredDomain = jobCodes.includes(scoreItem.domain_alias.charAt(0).toUpperCase());
        const localeData = translationService.getObject('descriptor.workInterest', options === null || options === void 0 ? void 0 : options.locale);
        const domainRawDetail = localeData[scoreItem.domain_alias];
        scoreItem.domain_name = domainRawDetail.name;
        const descriptorData = getDescriptorByThreshold(scoreItem.domain_score, domainRawDetail, options);
        scoreItem.descriptor = descriptorData.descriptor;
        scoreItem.dimension_level = descriptorData.dimensionLevel;
        scoreItem.required_dimension_level = isRequiredDomain ? DimensionLevel.HIGH : DimensionLevel.AVERAGE;
        // Logic is changed at 17th April 2023 due to misunderstanding of descriptors being displayed using PersonCode [CHAR-3949]
        // const isHighestDomain = personCodes.includes(scoreItem.domain_alias!.charAt(0).toUpperCase() as RiasecCodes);
        // scoreItem.descriptor = getHighestDescriptor(isHighestDomain, domainRawDetail, options);
        // scoreItem.dimension_level = isHighestDomain ? DimensionLevel.HIGH : DimensionLevel.AVERAGE;
    }
    return scores;
}
/*
*
*  What makes Joe Lee great
  Work styles >0.7

What makes Joe Lee thrive
  Work values >0.7
  Work Interest >0.7

What to look out for with Joe Lee
  Work styles <0.3
  Work values<0.3
  Work interest<0.3
  * */
function getDescriptorSummary(personalityScoreSummary, options) {
    const thrive = [];
    const workingWith = [];
    const watchout = [];
    if (personalityScoreSummary.work_value) {
        thrive.push(...getDescriptorSummaryWithScoreOutcome(personalityScoreSummary.work_value, translationService.getObject('descriptor.workValueSummary', options === null || options === void 0 ? void 0 : options.locale), Object.assign(Object.assign({}, options), { dimensionLevel: DimensionLevel.HIGH, withScore: true })));
        watchout.push(...getDescriptorSummaryWithScoreOutcome(personalityScoreSummary.work_value, translationService.getObject('descriptor.workValueSummary', options === null || options === void 0 ? void 0 : options.locale), Object.assign(Object.assign({}, options), { dimensionLevel: DimensionLevel.LOW, withScore: true })));
    }
    if (personalityScoreSummary.work_style) {
        workingWith.push(...getDescriptorSummaryWithScoreOutcome(personalityScoreSummary.work_style, translationService.getObject('descriptor.workStyleSummary', options === null || options === void 0 ? void 0 : options.locale), Object.assign(Object.assign({}, options), { dimensionLevel: DimensionLevel.HIGH, withScore: true })));
        watchout.push(...getDescriptorSummaryWithScoreOutcome(personalityScoreSummary.work_style, translationService.getObject('descriptor.workStyleSummary', options === null || options === void 0 ? void 0 : options.locale), Object.assign(Object.assign({}, options), { dimensionLevel: DimensionLevel.LOW, withScore: true })));
    }
    if (personalityScoreSummary.work_interest) {
        thrive.push(...getDescriptorSummaryWithScoreOutcome(personalityScoreSummary.work_interest, translationService.getObject('descriptor.workInterestSummary', options === null || options === void 0 ? void 0 : options.locale), Object.assign(Object.assign({}, options), { dimensionLevel: DimensionLevel.HIGH, withScore: true })));
        watchout.push(...getDescriptorSummaryWithScoreOutcome(personalityScoreSummary.work_interest, translationService.getObject('descriptor.workInterestSummary', options === null || options === void 0 ? void 0 : options.locale), Object.assign(Object.assign({}, options), { dimensionLevel: DimensionLevel.LOW, withScore: true })));
    }
    const sortedThrive = sortDescriptorSummaryItemScores(thrive, DimensionLevel.HIGH);
    const sortedWorkingWith = sortDescriptorSummaryItemScores(workingWith, DimensionLevel.HIGH);
    const sortedWatchOut = sortDescriptorSummaryItemScores(watchout, DimensionLevel.LOW);
    return {
        thrive: sortedThrive,
        working_with: sortedWorkingWith,
        watch_out: sortedWatchOut,
    };
}
function getDescriptorSummaryItems(scores, type, options) {
    const summary = [];
    switch (type) {
        case JobApplicationScoreType.WORK_VALUE:
            summary.push(...getDescriptorSummaryWithScoreOutcome(scores, translationService.getObject('descriptor.workValueSummary', options === null || options === void 0 ? void 0 : options.locale), options));
            break;
        case JobApplicationScoreType.WORK_STYLE:
            summary.push(...getDescriptorSummaryWithScoreOutcome(scores, translationService.getObject('descriptor.workStyleSummary', options === null || options === void 0 ? void 0 : options.locale), options));
            break;
        case JobApplicationScoreType.WORK_INTEREST:
            summary.push(...getDescriptorSummaryWithScoreOutcome(scores, translationService.getObject('descriptor.workInterestSummary', options === null || options === void 0 ? void 0 : options.locale), options));
            break;
    }
    return summary;
}
/**
 * map descriptor / dimension level to personality outcome
 */
function mapPersonalityScoreWithDescriptor(scores, type, options) {
    const descriptors = getDescriptorDataWithLocale(type, options === null || options === void 0 ? void 0 : options.locale);
    if (!descriptors) {
        return scores;
    }
    return mapDescriptorsWithScoreOutcome(scores, descriptors, options);
}
function mapScoreWithDescriptor(scores, type, options) {
    const descriptors = getDescriptorDataWithLocale(type, options === null || options === void 0 ? void 0 : options.locale);
    if (!(scores && scores.outcome) || !descriptors) {
        return scores;
    }
    scores.outcome = mapDescriptorsWithScoreOutcome(scores.outcome, descriptors, Object.assign(Object.assign({}, options), { sort: (type !== JobApplicationScoreType.WORK_INTEREST) }));
    return scores;
}
// Name should be provided when it is used as third person context
function getDomainDetails(scores, type, options) {
    if (!scores || !scores.outcome) {
        return undefined;
    }
    let descriptors = null;
    let size;
    let scoreType;
    switch (type) {
        case JobApplicationScoreType.WORK_STYLE:
            descriptors = translationService.getObject('descriptor.workStyle', options === null || options === void 0 ? void 0 : options.locale);
            size = (options === null || options === void 0 ? void 0 : options.size) || 5;
            scoreType = JobApplicationScoreType.WORK_STYLE;
            break;
        case JobApplicationScoreType.WORK_INTEREST:
            descriptors = translationService.getObject('descriptor.workInterest', options === null || options === void 0 ? void 0 : options.locale);
            size = (options === null || options === void 0 ? void 0 : options.size) || 3;
            scoreType = JobApplicationScoreType.WORK_INTEREST;
            break;
        case JobApplicationScoreType.WORK_VALUE:
            descriptors = translationService.getObject('descriptor.workValue', options === null || options === void 0 ? void 0 : options.locale);
            size = (options === null || options === void 0 ? void 0 : options.size) || 3;
            scoreType = JobApplicationScoreType.WORK_VALUE;
            break;
        default:
            return undefined;
    }
    return mapDomainDetails(scores.outcome, descriptors, scoreType, Object.assign(Object.assign({}, options), { size }));
}
function getDomainDetailByAlias(score, type, alias, options) {
    let domainRawDetail;
    switch (type) {
        case JobApplicationScoreType.WORK_INTEREST:
            domainRawDetail = translationService.getObject('descriptor.workInterest', options === null || options === void 0 ? void 0 : options.locale)[alias];
            break;
        case JobApplicationScoreType.WORK_STYLE:
            domainRawDetail = translationService.getObject('descriptor.workStyle', options === null || options === void 0 ? void 0 : options.locale)[alias];
            break;
        case JobApplicationScoreType.WORK_VALUE:
            domainRawDetail = translationService.getObject('descriptor.workValue', options === null || options === void 0 ? void 0 : options.locale)[alias];
            break;
        default:
            return undefined;
    }
    if (!domainRawDetail) {
        // If can't find any from descriptor library
        return undefined;
    }
    return Object.assign(Object.assign({ framework_alias: type, domain_descriptor: getDescriptorByThreshold(score, domainRawDetail, options).descriptor, summary: domainRawDetail.summary, question_title: domainRawDetail.name }, (({ question_contents }) => ({
        question_contents,
    }))(domainRawDetail)), { domain_alias: alias, domain_score: score });
}
// Note: domain descriptors only use mid-descriptions
function getBig5Descriptors(scores, options) {
    const bigFiveDescriptors = translationService.getObject(getPerspectiveContext('descriptorSummary.domainDescriptor.bigFive', options === null || options === void 0 ? void 0 : options.perspective), options === null || options === void 0 ? void 0 : options.locale);
    const bigFiveTraitDescriptors = translationService.getObject(getPerspectiveContext('descriptorSummary.traitDescriptor.bigFive', options === null || options === void 0 ? void 0 : options.perspective), options === null || options === void 0 ? void 0 : options.locale);
    const supportedBig5Domains = Object.keys(bigFiveDescriptors.descriptors).map((x) => x);
    const filteredSupportedScores = scores.filter((score) => supportedBig5Domains.includes(score.domain_alias));
    const descriptorResult = {
        summary: {
            strengths: [],
            development_areas: [],
            average: null,
        },
        dimensions: [],
    };
    // Map dimensions
    Object.keys(bigFiveDescriptors.descriptors).forEach((descriptorsAlias) => {
        const filteredDomainScore = getFilteredDomainScore(filteredSupportedScores, descriptorsAlias);
        if (!filteredDomainScore || !filteredDomainScore.domain_score) {
            return;
        }
        const dimension = {
            domain_id: filteredDomainScore.domain_id,
            domain_alias: descriptorsAlias,
            domain_name: bigFiveDescriptors.descriptors[descriptorsAlias].name,
            domain_order: filteredDomainScore.domain_order,
            domain_score: filteredDomainScore.domain_score,
            dimension_type: null,
            type: null,
            // domain_percentile: 99, // TODO: Cant find any data that has percentile
            descriptor: null,
            dimension_overviews: [],
            traits: [],
        };
        // get descriptors
        if (filteredDomainScore.domain_score >= LEGACY_HIGH_THRESHOLD) {
            dimension.type = LegacyBig5Type.STRENGTH; // @deprecated: backward compatibility purpose
            dimension.dimension_type = DimensionType.STRENGTH;
        }
        else if (filteredDomainScore.domain_score <= LEGACY_LOW_THRESHOLD) {
            dimension.type = LegacyBig5Type.DEVELOPMENT; // @deprecated: backward compatibility purpose
            dimension.dimension_type = DimensionType.DEVELOPMENT;
        }
        else {
            const dimensionDescriptor = replaceHandlebars(bigFiveDescriptors.descriptors[descriptorsAlias].mid_description, options);
            dimension.type = LegacyBig5Type.AVERAGE; // @deprecated: backward compatibility purpose
            dimension.dimension_type = DimensionType.AVERAGE;
            dimension.descriptor = dimensionDescriptor;
        }
        // get dimensions trait descriptors
        Object.keys(bigFiveTraitDescriptors.descriptors).forEach((traitDescriptorAlias) => {
            var _a;
            const filteredTraitScore = getFilteredTraitScore(filteredDomainScore.traits || [], traitDescriptorAlias);
            if (!filteredTraitScore || !filteredTraitScore.trait_score) {
                return;
            }
            const trait = {
                trait_id: filteredTraitScore.trait_id,
                trait_alias: traitDescriptorAlias,
                trait_name: bigFiveTraitDescriptors.descriptors[traitDescriptorAlias].name,
                trait_score: filteredTraitScore.trait_score,
                type: null,
                // trait_percentile: filteredTraitScore.percentile, // TODO: Cant find any trait percentile either
                descriptor: null,
            };
            if (filteredTraitScore.trait_score >= LEGACY_HIGH_THRESHOLD) {
                if (dimension.dimension_type === DimensionType.STRENGTH) {
                    trait.descriptor = replaceHandlebars(bigFiveTraitDescriptors.dimensions[traitDescriptorAlias].high_description, options);
                    dimension.dimension_overviews.push(trait);
                }
                trait.type = LegacyBig5Type.STRENGTH; // @deprecated: backward compatibility purpose
                trait.dimension_type = DimensionType.STRENGTH;
            }
            else if (filteredTraitScore.trait_score <= LEGACY_LOW_THRESHOLD) {
                if (dimension.dimension_type === DimensionType.DEVELOPMENT) {
                    trait.descriptor = replaceHandlebars(bigFiveTraitDescriptors.dimensions[traitDescriptorAlias].low_description, options);
                    dimension.dimension_overviews.push(trait);
                }
                trait.type = LegacyBig5Type.DEVELOPMENT; // @deprecated: backward compatibility purpose
                trait.dimension_type = DimensionType.DEVELOPMENT;
            }
            else {
                trait.type = LegacyBig5Type.AVERAGE; // @deprecated: backward compatibility purpose
                trait.dimension_type = DimensionType.AVERAGE;
            }
            (_a = dimension.traits) === null || _a === void 0 ? void 0 : _a.push(trait);
        });
        descriptorResult.dimensions.push(dimension);
    });
    // get the highest score
    const domainScores = filteredSupportedScores.map((a) => a.domain_score);
    const domainHighestScore = Math.max.apply(null, domainScores);
    // get the lowest score
    const domainLowestScore = Math.min.apply(null, domainScores);
    const isEqualLowestAndHighestScore = domainLowestScore === domainHighestScore;
    // Map summary and dimension domains and traits with descriptor
    if (isEqualLowestAndHighestScore &&
        domainLowestScore > LEGACY_LOW_THRESHOLD &&
        domainHighestScore < LEGACY_HIGH_THRESHOLD) {
        // This is when all the dimensions are Average
        descriptorResult.summary.average = 'Your scores for all personality dimensions are the same.';
    }
    else {
        // summaries:
        const isAllDevelopmentAreas = isEqualLowestAndHighestScore && domainLowestScore < LEGACY_LOW_THRESHOLD;
        const isAllStrengths = isEqualLowestAndHighestScore && domainHighestScore > LEGACY_HIGH_THRESHOLD;
        if (!isAllStrengths) {
            // calc development_area summeries
            const lowestDomainScores = filteredSupportedScores.filter((a) => a.domain_score === domainLowestScore);
            lowestDomainScores.forEach((lowestDomainScore) => {
                lowestDomainScore.traits = lowestDomainScore.traits || [];
                const lowestTraitScores = lowestDomainScore.traits.map((a) => a.trait_score);
                const traitLowestScore = Math.min.apply(null, lowestTraitScores);
                const lowestTraitDomainScores = lowestDomainScore.traits.filter((a) => a.trait_score === traitLowestScore);
                const currentDomain = {
                    domain_id: lowestDomainScore.domain_id,
                    domain_alias: lowestDomainScore.domain_alias,
                    domain_name: bigFiveDescriptors.descriptors[lowestDomainScore.domain_alias].name,
                    domain_order: lowestDomainScore.domain_order,
                    domain_score: lowestDomainScore.domain_score,
                    // domain_percentile: lowestDomainDescriptor.percentile, TODO: CANT FIND
                    trait_descriptors: [],
                };
                descriptorResult.summary.development_areas.push(currentDomain);
                lowestTraitDomainScores.forEach((lowestTraitScore) => {
                    const summaryDescriptor = replaceHandlebars(bigFiveTraitDescriptors.summary[lowestTraitScore.trait_alias].low_description, options);
                    (currentDomain.trait_descriptors || []).push({
                        trait_id: lowestTraitScore.trait_id,
                        trait_alias: lowestTraitScore.trait_alias,
                        trait_name: bigFiveTraitDescriptors.summary[lowestTraitScore.trait_alias].name,
                        trait_score: lowestTraitScore.trait_score,
                        type: LegacyBig5Type.DEVELOPMENT,
                        dimension_type: DimensionType.DEVELOPMENT,
                        // trait_percentile: lowestTraitScore.percentile, TODO: cant find
                        descriptor: summaryDescriptor,
                    });
                });
            });
            // dimension overviews (b) case
            if (descriptorResult.dimensions.filter((a) => a.dimension_type === DimensionType.DEVELOPMENT).length === 0) {
                lowestDomainScores.forEach((lowestDomainScore) => {
                    const currentDimension = descriptorResult.dimensions.find((a) => a.domain_alias === lowestDomainScore.domain_alias);
                    if (!currentDimension) {
                        return;
                    }
                    currentDimension.type = LegacyBig5Type.DEVELOPMENT; // @deprecated: backward compatibility purpose
                    currentDimension.dimension_type = DimensionType.DEVELOPMENT;
                    currentDimension.dimension_overviews = [];
                    delete currentDimension.descriptor;
                    lowestDomainScore.traits = lowestDomainScore.traits || [];
                    const lowestTraitScores = lowestDomainScore.traits.map((a) => a.trait_score);
                    const traitLowestScore = Math.min.apply(null, lowestTraitScores);
                    const lowestTraitDomainScores = lowestDomainScore.traits.filter((a) => a.trait_score === traitLowestScore);
                    lowestTraitDomainScores.forEach((lowestTraitScore) => {
                        const dimensionDescriptor = replaceHandlebars(bigFiveTraitDescriptors.dimensions[lowestTraitScore.trait_alias].low_description, options);
                        lowestTraitScore.dimension_type = DimensionType.DEVELOPMENT;
                        (currentDimension.dimension_overviews || []).push({
                            trait_id: lowestTraitScore.trait_id,
                            trait_alias: lowestTraitScore.trait_alias,
                            trait_name: bigFiveTraitDescriptors.dimensions[lowestTraitScore.trait_alias].name,
                            trait_score: traitLowestScore,
                            trait_order: lowestTraitScore.trait_order,
                            type: LegacyBig5Type.DEVELOPMENT,
                            dimension_type: DimensionType.DEVELOPMENT,
                            // trait_percentile: lowestTraitScore.percentile,
                            descriptor: dimensionDescriptor,
                        });
                    });
                });
            }
        }
        if (!isAllDevelopmentAreas) {
            // calc strength summeries
            const highestDomainScores = filteredSupportedScores.filter((a) => a.domain_score === domainHighestScore);
            highestDomainScores.forEach((highestDomainScore) => {
                highestDomainScore.traits = highestDomainScore.traits || [];
                const traitHighestScores = highestDomainScore.traits.map((a) => a.trait_score);
                const traitHighestScore = Math.max.apply(null, traitHighestScores);
                const highestTraitDomainScores = highestDomainScore.traits.filter((a) => a.trait_score === traitHighestScore);
                const currentDomain = {
                    domain_id: highestDomainScore.domain_id,
                    domain_alias: highestDomainScore.domain_alias,
                    domain_name: bigFiveDescriptors.descriptors[highestDomainScore.domain_alias].name,
                    domain_order: highestDomainScore.domain_order,
                    domain_score: highestDomainScore.domain_score,
                    // domain_percentile: highestDomainScore.percentile, TODO: CANT FIND
                    trait_descriptors: [],
                };
                highestTraitDomainScores.forEach((highestTraitDescriptor) => {
                    const summaryDescriptor = replaceHandlebars(bigFiveTraitDescriptors.summary[highestTraitDescriptor.trait_alias].high_description, options);
                    (currentDomain.trait_descriptors || []).push({
                        trait_id: highestTraitDescriptor.trait_id,
                        trait_alias: highestTraitDescriptor.trait_alias,
                        trait_name: bigFiveTraitDescriptors.summary[highestTraitDescriptor.trait_alias].name,
                        trait_score: highestTraitDescriptor.trait_score,
                        type: LegacyBig5Type.STRENGTH,
                        dimension_type: DimensionType.STRENGTH,
                        // trait_percentile: highestTraitDescriptor.percentile,
                        descriptor: summaryDescriptor,
                    });
                });
                descriptorResult.summary.strengths.push(currentDomain);
            });
            // TODO: make sure to get anything higher than 0.8 not only the highest!
            if (descriptorResult.dimensions.filter((a) => a.dimension_type === DimensionType.STRENGTH).length === 0) {
                highestDomainScores.forEach((highestDomainScore) => {
                    const currentDimension = descriptorResult.dimensions.find((a) => a.domain_alias === highestDomainScore.domain_alias);
                    if (!currentDimension) {
                        return;
                    }
                    currentDimension.type = LegacyBig5Type.STRENGTH; // @deprecated: backward compatibility purpose
                    currentDimension.dimension_type = DimensionType.STRENGTH;
                    currentDimension.dimension_overviews = [];
                    delete currentDimension.descriptor;
                    highestDomainScore.traits = highestDomainScore.traits || [];
                    const highestTraitScore = highestDomainScore.traits.map((a) => a.trait_score);
                    const traitHighestScore = Math.max.apply(null, highestTraitScore);
                    const highestTraitDomainScores = highestDomainScore.traits.filter((a) => a.trait_score === traitHighestScore);
                    highestTraitDomainScores.forEach((highestTraitDomainScore) => {
                        const dimensionDescriptor = replaceHandlebars(bigFiveTraitDescriptors.dimensions[highestTraitDomainScore.trait_alias].high_description, options);
                        highestTraitDomainScore.dimension_type = DimensionType.STRENGTH;
                        (currentDimension.dimension_overviews || []).push({
                            trait_id: highestTraitDomainScore.trait_id,
                            trait_alias: highestTraitDomainScore.trait_alias,
                            trait_name: bigFiveTraitDescriptors.dimensions[highestTraitDomainScore.trait_alias].name,
                            trait_score: traitHighestScore,
                            type: LegacyBig5Type.STRENGTH,
                            dimension_type: DimensionType.STRENGTH,
                            // trait_percentile: highestTraitDomainScore.percentile,
                            descriptor: dimensionDescriptor,
                        });
                    });
                });
            }
        }
    }
    // Map all traits with descriptor
    descriptorResult.dimensions.forEach((domainScore) => {
        if (!domainScore) {
            return;
        }
        const mappedTraitsWithDescriptors = [];
        (domainScore.traits || []).forEach((traitScore) => {
            const currentTrait = {
                trait_id: traitScore.trait_id,
                trait_alias: traitScore.trait_alias,
                trait_name: bigFiveTraitDescriptors.descriptors[traitScore.trait_alias].name,
                trait_score: traitScore.trait_score,
                // trait_percentile: traitDescriptor.percentile,
                type: traitScore.type,
                dimension_type: traitScore.dimension_type,
                descriptor: null,
            };
            switch (traitScore.type) {
                case LegacyBig5Type.STRENGTH:
                    const strengthDescriptor = replaceHandlebars(bigFiveTraitDescriptors.descriptors[traitScore.trait_alias].high_description, options);
                    currentTrait.descriptor = strengthDescriptor;
                    break;
                case LegacyBig5Type.DEVELOPMENT:
                    const developmentDescriptor = replaceHandlebars(bigFiveTraitDescriptors.descriptors[traitScore.trait_alias].low_description, options);
                    currentTrait.descriptor = developmentDescriptor;
                    break;
                default:
                    const avgDescriptor = replaceHandlebars(bigFiveTraitDescriptors.descriptors[traitScore.trait_alias].mid_description, options);
                    currentTrait.descriptor = avgDescriptor;
                    break;
            }
            mappedTraitsWithDescriptors.push(currentTrait);
        });
        domainScore.traits = mappedTraitsWithDescriptors;
    });
    // Sort
    descriptorResult.dimensions.sort((a, b) => {
        if (!a.domain_order || !b.domain_order) {
            return 0;
        }
        return a.domain_order - b.domain_order;
    });
    return descriptorResult;
}
// Legacy Work Values method
function getOrgValuesDescriptor(scores, options) {
    const orgValuesDomainDescriptors = translationService.getObject(getPerspectiveContext('descriptorSummary.domainDescriptor.workValue', options === null || options === void 0 ? void 0 : options.perspective), options === null || options === void 0 ? void 0 : options.locale);
    let highestScoredDomains = [];
    let summaryHighestScore = Number.MIN_VALUE;
    const highestScore = LEGACY_HIGH_THRESHOLD;
    const lowestScore = LEGACY_LOW_THRESHOLD;
    const descriptorResult = {
        summary: [],
        dimensions: [],
    };
    // Map dimensions
    Object.keys(orgValuesDomainDescriptors.descriptors).forEach((descriptorsAlias) => {
        const filteredDomainScore = getFilteredDomainScore(scores, descriptorsAlias);
        if (!filteredDomainScore || !filteredDomainScore.domain_score) {
            return;
        }
        if (filteredDomainScore.domain_score > summaryHighestScore) {
            summaryHighestScore = filteredDomainScore.domain_score;
            highestScoredDomains = [];
            // tslint:disable-next-line:no-object-literal-type-assertion
            highestScoredDomains.push(Object.assign(Object.assign({}, orgValuesDomainDescriptors[descriptorsAlias]), { alias: descriptorsAlias }));
        }
        else if (filteredDomainScore.domain_score === summaryHighestScore) {
            summaryHighestScore = filteredDomainScore.domain_score;
            highestScoredDomains.push(Object.assign(Object.assign({}, orgValuesDomainDescriptors.descriptors[descriptorsAlias]), { alias: descriptorsAlias }));
        }
        const dimension = {
            domain_id: filteredDomainScore.domain_id,
            domain_alias: descriptorsAlias,
            domain_name: orgValuesDomainDescriptors.descriptors[descriptorsAlias].name,
            domain_order: filteredDomainScore.domain_order,
            domain_score: filteredDomainScore.domain_score,
            dimension_type: null,
            descriptor: null,
        };
        if (filteredDomainScore.domain_score >= highestScore) {
            const strengthDescriptor = replaceHandlebars(orgValuesDomainDescriptors.descriptors[descriptorsAlias].high_description, options);
            dimension.dimension_type = DimensionType.STRENGTH;
            dimension.descriptor = strengthDescriptor;
        }
        else if (filteredDomainScore.domain_score <= lowestScore) {
            const developmentDescriptor = replaceHandlebars(orgValuesDomainDescriptors.descriptors[descriptorsAlias].low_description, options);
            dimension.dimension_type = DimensionType.DEVELOPMENT_AREA; // @deprecated TODO: update to new format when ready
            dimension.descriptor = developmentDescriptor;
        }
        else {
            const avgDescriptor = replaceHandlebars(orgValuesDomainDescriptors.descriptors[descriptorsAlias].mid_description, options);
            dimension.dimension_type = DimensionType.AVERAGE;
            dimension.descriptor = avgDescriptor;
        }
        descriptorResult.dimensions.push(dimension);
    });
    // Get summary
    highestScoredDomains.forEach((domainDetail) => {
        const domainAlias = domainDetail.alias;
        const summaryDescriptor = replaceHandlebars(orgValuesDomainDescriptors.descriptors[domainAlias].summary, options);
        const filteredDomainScore = getFilteredDomainScore(scores, domainAlias);
        descriptorResult.summary.push({
            domain_id: filteredDomainScore.domain_id,
            domain_alias: domainAlias,
            domain_name: orgValuesDomainDescriptors.descriptors[domainAlias].name,
            domain_order: filteredDomainScore.domain_order,
            domain_score: filteredDomainScore.domain_score,
            descriptor: summaryDescriptor,
        });
    });
    // Sort
    descriptorResult.summary.sort(sortDomainOrder);
    descriptorResult.dimensions.sort(sortDomainOrder);
    return descriptorResult;
}
// Legacy's work interest method
function getRiasecDescriptor(scores, options) {
    const riasecDomainDescriptors = translationService.getObject('descriptorSummary.domainDescriptor.workInterest', options === null || options === void 0 ? void 0 : options.locale);
    let highestScoredDomains = [];
    let highestScore = Number.MIN_VALUE;
    const descriptorResult = {
        summary_highest_scores: [],
        details: {
            dimension_highest_scores: [],
            dimension_non_highest_scores: [],
        },
    };
    // Get highest scored domains
    Object.keys(riasecDomainDescriptors.descriptors).forEach((descriptorsAlias) => {
        const filteredDomainScore = getFilteredDomainScore(scores, descriptorsAlias);
        if (!filteredDomainScore || !filteredDomainScore.domain_score) {
            // to support different short additional 4 set
            // if we can't find a domain, ignore it
            return;
        }
        if (filteredDomainScore.domain_score > highestScore) {
            highestScore = filteredDomainScore.domain_score;
            highestScoredDomains = [];
            highestScoredDomains.push(Object.assign(Object.assign({}, riasecDomainDescriptors.descriptors[descriptorsAlias]), { alias: descriptorsAlias }));
        }
        else if (filteredDomainScore.domain_score === highestScore) {
            highestScore = filteredDomainScore.domain_score;
            highestScoredDomains.push(Object.assign(Object.assign({}, riasecDomainDescriptors.descriptors[descriptorsAlias]), { alias: descriptorsAlias }));
        }
    });
    highestScoredDomains.forEach((highestScoredDomain) => {
        const summaryDescriptor = replaceHandlebars(highestScoredDomain.summary, options);
        const filteredDomainScore = getFilteredDomainScore(scores, highestScoredDomain.alias);
        descriptorResult.summary_highest_scores.push({
            domain_id: highestScoredDomain.id,
            domain_alias: highestScoredDomain.alias,
            domain_name: highestScoredDomain.name,
            domain_order: filteredDomainScore.domain_order,
            domain_score: filteredDomainScore.domain_score,
            descriptor: summaryDescriptor,
        });
        const dimensionDescriptor = replaceHandlebars(highestScoredDomain.high_description, options);
        descriptorResult.details.dimension_highest_scores.push({
            domain_id: highestScoredDomain.id,
            domain_alias: highestScoredDomain.alias,
            domain_name: highestScoredDomain.name,
            domain_order: filteredDomainScore.domain_order,
            domain_score: filteredDomainScore.domain_score,
            descriptor: dimensionDescriptor,
        });
    });
    // Get non-highest score domain descriptors
    const nonHighestScoreDomainDescriptors = [];
    Object.keys(riasecDomainDescriptors.descriptors).filter((domainAlias) => {
        const lowDomains = highestScoredDomains.find((b) => domainAlias === b.alias);
        if (!lowDomains) {
            nonHighestScoreDomainDescriptors.push(Object.assign(Object.assign({}, riasecDomainDescriptors.descriptors[domainAlias]), { alias: domainAlias }));
        }
    });
    // Map non highest scores to results
    nonHighestScoreDomainDescriptors.forEach((nonHighestScoreDomainDescriptor) => {
        const domainDescriptor = replaceHandlebars(nonHighestScoreDomainDescriptor.low_description, options);
        const filteredDomainScore = getFilteredDomainScore(scores, nonHighestScoreDomainDescriptor.alias);
        descriptorResult.details.dimension_non_highest_scores.push({
            domain_id: nonHighestScoreDomainDescriptor.id,
            domain_alias: nonHighestScoreDomainDescriptor.alias,
            domain_name: nonHighestScoreDomainDescriptor.name,
            domain_order: filteredDomainScore.domain_order,
            domain_score: filteredDomainScore.domain_score,
            descriptor: domainDescriptor,
        });
    });
    // sort by domain_order:
    descriptorResult.summary_highest_scores.sort(sortDomainOrder);
    descriptorResult.details.dimension_highest_scores.sort(sortDomainOrder);
    descriptorResult.details.dimension_non_highest_scores.sort(sortDomainOrder);
    return descriptorResult;
}
function getAdditional4Descriptor(scores, options) {
    const additional4DomainDescriptors = translationService.getObject(getPerspectiveContext('descriptorSummary.domainDescriptor.additionalFour', options === null || options === void 0 ? void 0 : options.perspective), options === null || options === void 0 ? void 0 : options.locale);
    // @ts-ignore
    let highestScoredDomains = [];
    let lowestScoredDomains = [];
    let highestScore = LEGACY_HIGH_THRESHOLD; // dynamic score for mapping
    let lowestScore = LEGACY_LOW_THRESHOLD; // dynamic score for mapping
    const descriptorResult = {
        summary: {
            strengths: [],
            development_areas: [],
        },
        dimensions: [],
    };
    // MAP DIMENSIONS
    Object.keys(additional4DomainDescriptors.descriptors).forEach((descriptorsAlias) => {
        const filteredDomainScore = getFilteredDomainScore(scores, descriptorsAlias);
        if (!filteredDomainScore || !filteredDomainScore.domain_score) {
            // to support different short additional 4 set
            // if we can't find a domain, ignore it
            return;
        }
        if (filteredDomainScore.domain_score > highestScore) {
            highestScore = filteredDomainScore.domain_score;
            highestScoredDomains = [];
            highestScoredDomains.push(Object.assign(Object.assign({}, additional4DomainDescriptors.descriptors[descriptorsAlias]), { alias: descriptorsAlias }));
        }
        else if (filteredDomainScore.domain_score === highestScore) {
            // Only if the score is the same as recent highest, move in array
            highestScoredDomains.push(Object.assign(Object.assign({}, additional4DomainDescriptors.descriptors[descriptorsAlias]), { alias: descriptorsAlias }));
        }
        if (filteredDomainScore.domain_score < lowestScore) {
            lowestScore = filteredDomainScore.domain_score;
            lowestScoredDomains = [];
            lowestScoredDomains.push(Object.assign(Object.assign({}, additional4DomainDescriptors.descriptors[descriptorsAlias]), { alias: descriptorsAlias }));
        }
        else if (filteredDomainScore.domain_score === lowestScore) {
            lowestScore = filteredDomainScore.domain_score;
            lowestScoredDomains.push(Object.assign(Object.assign({}, additional4DomainDescriptors.descriptors[descriptorsAlias]), { alias: descriptorsAlias }));
        }
        const dimension = {
            domain_id: filteredDomainScore.domain_id,
            domain_alias: descriptorsAlias,
            domain_name: additional4DomainDescriptors.descriptors[descriptorsAlias].name,
            domain_order: filteredDomainScore.domain_order,
            domain_score: filteredDomainScore.domain_score,
            dimension_type: null,
            descriptor: null,
        };
        if (filteredDomainScore.domain_score >= highestScore) {
            const strengthDescriptor = replaceHandlebars(additional4DomainDescriptors.descriptors[descriptorsAlias].high_description, options);
            dimension.dimension_type = DimensionType.STRENGTH;
            dimension.descriptor = strengthDescriptor;
        }
        else if (filteredDomainScore.domain_score <= lowestScore) {
            const developmentDescriptor = replaceHandlebars(additional4DomainDescriptors.descriptors[descriptorsAlias].low_description, options);
            dimension.dimension_type = DimensionType.DEVELOPMENT_AREA; // @deprecated TODO: update to new format when ready
            dimension.descriptor = developmentDescriptor;
        }
        else {
            const avgDescriptor = replaceHandlebars(additional4DomainDescriptors.descriptors[descriptorsAlias].mid_description, options);
            dimension.dimension_type = DimensionType.AVERAGE;
            dimension.descriptor = avgDescriptor;
        }
        descriptorResult.dimensions.push(dimension);
    });
    highestScoredDomains.forEach((domainDetail) => {
        const domainAlias = domainDetail.alias;
        const summaryDescriptor = replaceHandlebars(additional4DomainDescriptors.summary[domainAlias].high_description, options);
        const filteredDomainScore = getFilteredDomainScore(scores, domainAlias);
        descriptorResult.summary.strengths.push({
            domain_id: filteredDomainScore.domain_id,
            domain_alias: domainAlias,
            domain_name: additional4DomainDescriptors.descriptors[domainAlias].name,
            domain_order: filteredDomainScore.domain_order,
            domain_score: filteredDomainScore.domain_score,
            descriptor: summaryDescriptor,
        });
    });
    lowestScoredDomains.forEach((domainDetail) => {
        const domainAlias = domainDetail.alias;
        const summaryDescriptor = replaceHandlebars(additional4DomainDescriptors.summary[domainAlias].low_description, options);
        const filteredDomainScore = getFilteredDomainScore(scores, domainAlias);
        descriptorResult.summary.development_areas.push({
            domain_id: filteredDomainScore.domain_id,
            domain_alias: domainAlias,
            domain_name: additional4DomainDescriptors.descriptors[domainAlias].name,
            domain_order: filteredDomainScore.domain_order,
            domain_score: filteredDomainScore.domain_score,
            descriptor: summaryDescriptor,
        });
    });
    descriptorResult.summary.strengths.sort(sortDomainOrder);
    descriptorResult.summary.development_areas.sort(sortDomainOrder);
    descriptorResult.dimensions.sort(sortDomainOrder);
    return descriptorResult;
}
function mapDomainDetails(scoresOutcome, domainRawDetails, scoreType, options) {
    const domainDetail = [];
    if ([JobApplicationScoreType.WORK_STYLE, JobApplicationScoreType.WORK_VALUE].includes(scoreType)) {
        scoresOutcome.sort((a, b) => {
            if (a.domain_weightage !== undefined && b.domain_weightage !== undefined) {
                return b.domain_weightage - a.domain_weightage;
            }
            return 0;
        });
    }
    else if (options === null || options === void 0 ? void 0 : options.jobCodes) {
        scoresOutcome = scoresOutcome.filter((score) => {
            if (score.domain_alias) {
                return options === null || options === void 0 ? void 0 : options.jobCodes.includes(score.domain_alias.charAt(0).toUpperCase());
            }
        });
    }
    for (const item of scoresOutcome) {
        if ('domain_alias' in item) {
            if (!item.domain_alias || !item.domain_score) {
                continue;
            }
            const domainRawDetail = domainRawDetails[item.domain_alias];
            if (!domainRawDetail) {
                continue;
            }
            domainDetail.push(Object.assign(Object.assign({ framework_alias: scoreType, domain_descriptor: getDescriptorByThreshold(item.domain_score, domainRawDetail, options).descriptor, summary: domainRawDetail.summary, question_title: domainRawDetail.name }, (({ question_contents }) => ({
                question_contents,
            }))(domainRawDetail)), (({ domain_alias, domain_score }) => ({
                domain_alias,
                domain_score,
            }))(item)));
        }
    }
    return domainDetail.slice(0, (options === null || options === void 0 ? void 0 : options.size) || DefaultDomainDetailSize);
}
function getDescriptorSummaryWithScoreOutcome(scores, domainDetails, options) {
    const descriptorSummary = [];
    for (const item of scores) {
        if ('domain_alias' in item) {
            if (!item.domain_alias) {
                continue;
            }
            const domainRawDetail = domainDetails[item.domain_alias];
            // descriptor not found
            if (!domainRawDetail) {
                continue;
            }
            const descriptorItem = getDescriptorByThreshold(item.domain_score, domainRawDetail, options);
            if (descriptorItem.descriptor &&
                (!(options === null || options === void 0 ? void 0 : options.dimensionLevel) || options.dimensionLevel === descriptorItem.dimensionLevel)) {
                const descriptor = { name: descriptorItem.descriptor };
                if (options === null || options === void 0 ? void 0 : options.withScore) {
                    descriptor.score = item.domain_score;
                }
                descriptorSummary.push(descriptor);
            }
        }
    }
    return descriptorSummary;
}
function mapDescriptorsWithScoreOutcome(scores, domainDetails, options) {
    for (const item of scores) {
        if ('domain_alias' in item) {
            if (!item.domain_alias) {
                continue;
            }
            const domainRawDetail = domainDetails[item.domain_alias];
            // descriptor not found
            if (!domainRawDetail) {
                continue;
            }
            item.domain_name = domainRawDetail.name;
            const descriptorItem = getDescriptorByThreshold(item.domain_score, domainRawDetail, options);
            item.descriptor = descriptorItem.descriptor;
            item.dimension_level = descriptorItem.dimensionLevel;
        }
    }
    return (options === null || options === void 0 ? void 0 : options.sort) ? scores.sort(sortDomainWeight) : scores;
}
/**
 * Get dimension level with HIGH (>0.7) and LOW (<0.3) and AVERAGE
 */
function getDimensionLevelByScore(domainScore) {
    if (domainScore > HIGH_THRESHOLD) {
        return DimensionLevel.HIGH;
    }
    if (domainScore < LOW_THRESHOLD) {
        return DimensionLevel.LOW;
    }
    return DimensionLevel.AVERAGE;
}
function getDescriptorByThreshold(domainScore = 0, descriptor, options) {
    return getDescriptor(HIGH_THRESHOLD, LOW_THRESHOLD, descriptor, domainScore, options);
}
// Internal Function to retrieve descriptors from thresholds
function getDescriptor(highThreshold, lowThreshold, descriptor, domainScore = 0, options) {
    if (domainScore > highThreshold) {
        return {
            descriptor: replaceHandlebars(descriptor.high_description, options),
            dimensionLevel: DimensionLevel.HIGH,
        };
    }
    if (domainScore < lowThreshold) {
        return {
            descriptor: replaceHandlebars(descriptor.low_description, options),
            dimensionLevel: DimensionLevel.LOW,
        };
    }
    return {
        descriptor: replaceHandlebars(descriptor.mid_description || descriptor.low_description, options),
        dimensionLevel: DimensionLevel.AVERAGE,
    };
}
function getFilteredDomainScore(scores, alias) {
    return scores.filter((x) => {
        if (x.domain_alias === alias) {
            return x;
        }
    })[0];
}
function getFilteredTraitScore(scores, alias) {
    return scores.filter((x) => {
        if (x.trait_alias === alias) {
            return x;
        }
    })[0];
}
// TODO: Add in perspective to get context
function getDescriptorDataWithLocale(type, locale = DefaultLocale) {
    switch (type) {
        case JobApplicationScoreType.WORK_INTEREST:
            return translationService.getObject('descriptor.workInterest', locale);
        case JobApplicationScoreType.WORK_STYLE:
            return translationService.getObject('descriptor.workStyle', locale);
        case JobApplicationScoreType.WORK_VALUE:
            return translationService.getObject('descriptor.workValue', locale);
        default:
            return null;
    }
}
function getPerspectiveContext(key, perspective) {
    if (perspective === Perspective.THIRD_PERSON) {
        return `thirdPersonPerspective.${key}`;
    }
    return key;
}

export { DescriptorType, DimensionLevel, GenderPlaceholder, JobApplicationScoreType, LegacyDomainIdMap, PersonPlaceholder, Perspective, getAdditional4Descriptor, getBig5Descriptors, getDescriptorSummary, getDescriptorSummaryItems, getDimensionLevelByScore, getDomainDetailByAlias, getDomainDetails, getOrgValuesDescriptor, getRiasecDescriptor, mapPersonalityScoreWithDescriptor, mapScoreWithDescriptor, mapWorkInterestDescriptors };
//# sourceMappingURL=index.es5.js.map
