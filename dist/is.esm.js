function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}var defined = function defined(subject) {
  return subject !== void 0;
};
var array = function array(subject) {
  return subject instanceof Array;
};
var object = function object(subject) {
  return _typeof(subject) === 'object' && subject; // 2nd check is to test against 'null' values
};
var objectPlain = function objectPlain(subject) {
  return object(subject) && Object.prototype.toString.call(subject) === '[object Object]' && subject.constructor === Object;
};
var string = function string(subject) {
  return typeof subject === 'string';
};
var number = function number(subject) {
  return typeof subject === 'number' && !isNaN(subject);
};
var numberLoose = function numberLoose(subject) {
  return number(subject) || string(subject) && number(Number(subject));
};
var iterable = function iterable(subject) {
  return object(subject) && number(subject.length);
};
var function_ = function function_(subject) {
  return typeof subject === 'function';
};var natives = /*#__PURE__*/Object.freeze({defined: defined,array: array,object: object,objectPlain: objectPlain,string: string,number: number,numberLoose: numberLoose,iterable: iterable,function_: function_});var domDoc = function domDoc(subject) {
  return subject && subject.nodeType === 9;
};
var domEl = function domEl(subject) {
  return subject && subject.nodeType === 1;
};
var domText = function domText(subject) {
  return subject && subject.nodeType === 3;
};
var domNode = function domNode(subject) {
  return domEl(subject) || domText(subject);
};
var domTextarea = function domTextarea(subject) {
  return subject && subject.nodeName === 'TEXTAREA';
};
var domInput = function domInput(subject) {
  return subject && subject.nodeName === 'INPUT';
};
var domSelect = function domSelect(subject) {
  return subject && subject.nodeName === 'SELECT';
};
var domField = function domField(subject) {
  return domInput(subject) || domTextarea(subject) || domSelect(subject);
};var dom = /*#__PURE__*/Object.freeze({domDoc: domDoc,domEl: domEl,domText: domText,domNode: domNode,domTextarea: domTextarea,domInput: domInput,domSelect: domSelect,domField: domField});var AVAIL_SETS, Checks;
AVAIL_SETS = {
  natives: natives,
  dom: dom
};

Checks =
/*#__PURE__*/
function () {
  _createClass(Checks, [{
    key: "create",
    value: function create() {
      var args;

      if (arguments.length) {
        args = Array.prototype.slice.call(arguments);
      }

      return new Checks(args);
    }
  }]);

  function Checks(sets) {
    _classCallCheck(this, Checks);

    var i, len, set;

    if (sets == null) {
      sets = ['natives'];
    }

    for (i = 0, len = sets.length; i < len; i++) {
      set = sets[i];

      if (AVAIL_SETS[set]) {
        this.load(AVAIL_SETS[set]);
      }
    }
  }

  _createClass(Checks, [{
    key: "load",
    value: function load(set) {
      var key, value;

      if (AVAIL_SETS.natives.string(set)) {
        set = AVAIL_SETS[set];
      }

      if (!AVAIL_SETS.natives.objectPlain(set)) {
        return;
      }

      for (key in set) {
        value = set[key];

        if (key === 'function_') {
          key = 'function';
        }

        this[key] = value;
      }
    }
  }]);

  return Checks;
}();

var index = Checks.prototype.create();export default index;