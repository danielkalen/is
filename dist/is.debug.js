(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f():typeof define==='function'&&define.amd?define(f):(g=g||self,g['@danielkalen/is']=f());}(this,function(){'use strict';function _typeof(obj) {
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

var index = Checks.prototype.create();return index;}));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMuZGVidWcuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9uYXRpdmVzLmNvZmZlZSIsIi4uL3NyYy9kb20uY29mZmVlIiwiLi4vc3JjL2luZGV4LmNvZmZlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmaW5lZCA9IChzdWJqZWN0KS0+IHN1YmplY3QgaXNudCB1bmRlZmluZWRcblxuZXhwb3J0IGFycmF5ID0gKHN1YmplY3QpLT4gc3ViamVjdCBpbnN0YW5jZW9mIEFycmF5XG5cbmV4cG9ydCBvYmplY3QgPSAoc3ViamVjdCktPiB0eXBlb2Ygc3ViamVjdCBpcyAnb2JqZWN0JyBhbmQgc3ViamVjdCAjIDJuZCBjaGVjayBpcyB0byB0ZXN0IGFnYWluc3QgJ251bGwnIHZhbHVlc1xuXG5leHBvcnQgb2JqZWN0UGxhaW4gPSAoc3ViamVjdCktPiBvYmplY3Qoc3ViamVjdCkgYW5kIE9iamVjdDo6dG9TdHJpbmcuY2FsbChzdWJqZWN0KSBpcyAnW29iamVjdCBPYmplY3RdJyBhbmQgc3ViamVjdC5jb25zdHJ1Y3RvciBpcyBPYmplY3RcblxuZXhwb3J0IHN0cmluZyA9IChzdWJqZWN0KS0+IHR5cGVvZiBzdWJqZWN0IGlzICdzdHJpbmcnXG5cbmV4cG9ydCBudW1iZXIgPSAoc3ViamVjdCktPiB0eXBlb2Ygc3ViamVjdCBpcyAnbnVtYmVyJyBhbmQgbm90IGlzTmFOKHN1YmplY3QpXG5cbmV4cG9ydCBudW1iZXJMb29zZSA9IChzdWJqZWN0KS0+IG51bWJlcihzdWJqZWN0KSBvciBzdHJpbmcoc3ViamVjdCkgYW5kIG51bWJlcihOdW1iZXIgc3ViamVjdClcblxuZXhwb3J0IGl0ZXJhYmxlID0gKHN1YmplY3QpLT4gb2JqZWN0KHN1YmplY3QpIGFuZCBudW1iZXIoc3ViamVjdC5sZW5ndGgpXG5cbmV4cG9ydCBmdW5jdGlvbl8gPSAoc3ViamVjdCktPiB0eXBlb2Ygc3ViamVjdCBpcyAnZnVuY3Rpb24nIiwiZXhwb3J0IGRvbURvYyA9KHN1YmplY3QpLT4gc3ViamVjdCBhbmQgc3ViamVjdC5ub2RlVHlwZSBpcyA5XG5cbmV4cG9ydCBkb21FbCA9KHN1YmplY3QpLT4gc3ViamVjdCBhbmQgc3ViamVjdC5ub2RlVHlwZSBpcyAxXG5cbmV4cG9ydCBkb21UZXh0ID0oc3ViamVjdCktPiBzdWJqZWN0IGFuZCBzdWJqZWN0Lm5vZGVUeXBlIGlzIDNcblxuZXhwb3J0IGRvbU5vZGUgPShzdWJqZWN0KS0+IGRvbUVsKHN1YmplY3QpIG9yIGRvbVRleHQoc3ViamVjdClcblxuZXhwb3J0IGRvbVRleHRhcmVhID0oc3ViamVjdCktPiBzdWJqZWN0IGFuZCBzdWJqZWN0Lm5vZGVOYW1lIGlzICdURVhUQVJFQSdcblx0XG5leHBvcnQgZG9tSW5wdXQgPShzdWJqZWN0KS0+IHN1YmplY3QgYW5kIHN1YmplY3Qubm9kZU5hbWUgaXMgJ0lOUFVUJ1xuXHRcbmV4cG9ydCBkb21TZWxlY3QgPShzdWJqZWN0KS0+IHN1YmplY3QgYW5kIHN1YmplY3Qubm9kZU5hbWUgaXMgJ1NFTEVDVCdcblx0XG5leHBvcnQgZG9tRmllbGQgPShzdWJqZWN0KS0+IGRvbUlucHV0KHN1YmplY3QpIG9yIGRvbVRleHRhcmVhKHN1YmplY3QpIG9yIGRvbVNlbGVjdChzdWJqZWN0KSIsImltcG9ydCAqIGFzIG5hdGl2ZXMgZnJvbSAnLi9uYXRpdmVzJ1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tJ1xuQVZBSUxfU0VUUyA9IHtuYXRpdmVzLCBkb219XG5cbmNsYXNzIENoZWNrc1xuXHRjcmVhdGU6ICgpLT5cblx0XHRhcmdzID0gQXJyYXk6OnNsaWNlLmNhbGwoYXJndW1lbnRzKSBpZiBhcmd1bWVudHMubGVuZ3RoXG5cdFx0bmV3IENoZWNrcyhhcmdzKVxuXHRcblxuXHRjb25zdHJ1Y3RvcjogKHNldHMpLT5cblx0XHRzZXRzID89IFsnbmF0aXZlcyddXG5cdFx0XG5cdFx0Zm9yIHNldCBpbiBzZXRzXG5cdFx0XHRAbG9hZChBVkFJTF9TRVRTW3NldF0pIGlmIEFWQUlMX1NFVFNbc2V0XVxuXG5cblx0bG9hZDogKHNldCktPlxuXHRcdHNldCA9IEFWQUlMX1NFVFNbc2V0XSBpZiBBVkFJTF9TRVRTLm5hdGl2ZXMuc3RyaW5nKHNldClcblx0XHRyZXR1cm4gaWYgbm90IEFWQUlMX1NFVFMubmF0aXZlcy5vYmplY3RQbGFpbihzZXQpXG5cdFx0XG5cdFx0Zm9yIGtleSx2YWx1ZSBvZiBzZXRcblx0XHRcdGtleSA9ICdmdW5jdGlvbicgaWYga2V5IGlzICdmdW5jdGlvbl8nXG5cdFx0XHRAW2tleV0gPSB2YWx1ZVxuXHRcdFxuXHRcdHJldHVyblxuXHRcblx0XG5leHBvcnQgZGVmYXVsdCBDaGVja3M6OmNyZWF0ZSgpIl0sIm5hbWVzIjpbImRlZmluZWQiLCJzdWJqZWN0IiwiYXJyYXkiLCJBcnJheSIsIm9iamVjdCIsIm9iamVjdFBsYWluIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiY29uc3RydWN0b3IiLCJzdHJpbmciLCJudW1iZXIiLCJpc05hTiIsIm51bWJlckxvb3NlIiwiTnVtYmVyIiwiaXRlcmFibGUiLCJsZW5ndGgiLCJmdW5jdGlvbl8iLCJkb21Eb2MiLCJub2RlVHlwZSIsImRvbUVsIiwiZG9tVGV4dCIsImRvbU5vZGUiLCJkb21UZXh0YXJlYSIsIm5vZGVOYW1lIiwiZG9tSW5wdXQiLCJkb21TZWxlY3QiLCJkb21GaWVsZCIsIkFWQUlMX1NFVFMiLCJDaGVja3MiLCJuYXRpdmVzIiwiZG9tIiwiYXJncyIsImFyZ3VtZW50cyIsInNsaWNlIiwic2V0cyIsImkiLCJsZW4iLCJzZXQiLCJsb2FkIiwia2V5IiwidmFsdWUiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSxJQUFPQSxPQUFQLEdBQWlCLFNBQVZBLE9BQVUsQ0FBQ0MsT0FBRDtTQUFZQSxPQUFBLEtBQWE7Q0FBMUM7QUFFQSxBQUFBLElBQU9DLEtBQVAsR0FBZSxTQUFSQSxLQUFRLENBQUNELE9BQUQ7U0FBWUEsT0FBQSxZQUFt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
