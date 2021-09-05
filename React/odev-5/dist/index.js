function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var styles = {"btn":"_1Pz2d","primary":"_3ljpl","success":"_2iiDh","warning":"_3vq3T","danger":"_2zOUo"};

var Button = function Button(props) {
  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    className: styles.btn + " " + styles[props.type]
  }), props.text);
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
