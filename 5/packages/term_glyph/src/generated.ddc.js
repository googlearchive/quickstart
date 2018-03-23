define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__generated = Object.create(_root);
  dart.defineLazy(src__generated, {
    /*src__generated._ascii*/get _ascii() {
      return false;
    },
    set _ascii(_) {}
  });
  dart.copyProperties(src__generated, {
    set ascii(value) {
      src__generated._ascii = value;
      if (dart.test(value)) {
        src__generated._bullet = "*";
        src__generated._leftArrow = "<";
        src__generated._rightArrow = ">";
        src__generated._upArrow = "^";
        src__generated._downArrow = "v";
        src__generated._longLeftArrow = "<=";
        src__generated._longRightArrow = "=>";
        src__generated._horizontalLine = "-";
        src__generated._verticalLine = "|";
        src__generated._topLeftCorner = ",";
        src__generated._topRightCorner = ",";
        src__generated._bottomLeftCorner = "'";
        src__generated._bottomRightCorner = "'";
        src__generated._cross = "+";
        src__generated._teeUp = "+";
        src__generated._teeDown = "+";
        src__generated._teeLeft = "+";
        src__generated._teeRight = "+";
        src__generated._upEnd = "'";
        src__generated._downEnd = ",";
        src__generated._leftEnd = "-";
        src__generated._rightEnd = "-";
        src__generated._horizontalLineBold = "=";
        src__generated._verticalLineBold = "|";
        src__generated._topLeftCornerBold = ",";
        src__generated._topRightCornerBold = ",";
        src__generated._bottomLeftCornerBold = "'";
        src__generated._bottomRightCornerBold = "'";
        src__generated._crossBold = "+";
        src__generated._teeUpBold = "+";
        src__generated._teeDownBold = "+";
        src__generated._teeLeftBold = "+";
        src__generated._teeRightBold = "+";
        src__generated._upEndBold = "'";
        src__generated._downEndBold = ",";
        src__generated._leftEndBold = "-";
        src__generated._rightEndBold = "-";
        src__generated._horizontalLineDouble = "=";
        src__generated._verticalLineDouble = "|";
        src__generated._topLeftCornerDouble = ",";
        src__generated._topRightCornerDouble = ",";
        src__generated._bottomLeftCornerDouble = '"';
        src__generated._bottomRightCornerDouble = '"';
        src__generated._crossDouble = "+";
        src__generated._teeUpDouble = "+";
        src__generated._teeDownDouble = "+";
        src__generated._teeLeftDouble = "+";
        src__generated._teeRightDouble = "+";
        src__generated._horizontalLineDoubleDash = "-";
        src__generated._horizontalLineDoubleDashBold = "-";
        src__generated._verticalLineDoubleDash = "|";
        src__generated._verticalLineDoubleDashBold = "|";
        src__generated._horizontalLineTripleDash = "-";
        src__generated._horizontalLineTripleDashBold = "-";
        src__generated._verticalLineTripleDash = "|";
        src__generated._verticalLineTripleDashBold = "|";
        src__generated._horizontalLineQuadrupleDash = "-";
        src__generated._horizontalLineQuadrupleDashBold = "-";
        src__generated._verticalLineQuadrupleDash = "|";
        src__generated._verticalLineQuadrupleDashBold = "|";
      } else {
        src__generated._bullet = "•";
        src__generated._leftArrow = "←";
        src__generated._rightArrow = "→";
        src__generated._upArrow = "↑";
        src__generated._downArrow = "↓";
        src__generated._longLeftArrow = "◀━";
        src__generated._longRightArrow = "━▶";
        src__generated._horizontalLine = "─";
        src__generated._verticalLine = "│";
        src__generated._topLeftCorner = "┌";
        src__generated._topRightCorner = "┐";
        src__generated._bottomLeftCorner = "└";
        src__generated._bottomRightCorner = "┘";
        src__generated._cross = "┼";
        src__generated._teeUp = "┴";
        src__generated._teeDown = "┬";
        src__generated._teeLeft = "┤";
        src__generated._teeRight = "├";
        src__generated._upEnd = "╵";
        src__generated._downEnd = "╷";
        src__generated._leftEnd = "╴";
        src__generated._rightEnd = "╶";
        src__generated._horizontalLineBold = "━";
        src__generated._verticalLineBold = "┃";
        src__generated._topLeftCornerBold = "┏";
        src__generated._topRightCornerBold = "┓";
        src__generated._bottomLeftCornerBold = "┗";
        src__generated._bottomRightCornerBold = "┛";
        src__generated._crossBold = "╋";
        src__generated._teeUpBold = "┻";
        src__generated._teeDownBold = "┳";
        src__generated._teeLeftBold = "┫";
        src__generated._teeRightBold = "┣";
        src__generated._upEndBold = "╹";
        src__generated._downEndBold = "╻";
        src__generated._leftEndBold = "╸";
        src__generated._rightEndBold = "╺";
        src__generated._horizontalLineDouble = "═";
        src__generated._verticalLineDouble = "║";
        src__generated._topLeftCornerDouble = "╔";
        src__generated._topRightCornerDouble = "╗";
        src__generated._bottomLeftCornerDouble = "╚";
        src__generated._bottomRightCornerDouble = "╝";
        src__generated._crossDouble = "╬";
        src__generated._teeUpDouble = "╩";
        src__generated._teeDownDouble = "╦";
        src__generated._teeLeftDouble = "╣";
        src__generated._teeRightDouble = "╠";
        src__generated._horizontalLineDoubleDash = "╌";
        src__generated._horizontalLineDoubleDashBold = "╍";
        src__generated._verticalLineDoubleDash = "╎";
        src__generated._verticalLineDoubleDashBold = "╏";
        src__generated._horizontalLineTripleDash = "┄";
        src__generated._horizontalLineTripleDashBold = "┅";
        src__generated._verticalLineTripleDash = "┆";
        src__generated._verticalLineTripleDashBold = "┇";
        src__generated._horizontalLineQuadrupleDash = "┈";
        src__generated._horizontalLineQuadrupleDashBold = "┉";
        src__generated._verticalLineQuadrupleDash = "┊";
        src__generated._verticalLineQuadrupleDashBold = "┋";
      }
    },
    get ascii() {
      return src__generated._ascii;
    }
  });
  dart.copyProperties(src__generated, {
    get bullet() {
      return src__generated._bullet;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._bullet*/get _bullet() {
      return "•";
    },
    set _bullet(_) {}
  });
  dart.copyProperties(src__generated, {
    get leftArrow() {
      return src__generated._leftArrow;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._leftArrow*/get _leftArrow() {
      return "←";
    },
    set _leftArrow(_) {}
  });
  dart.copyProperties(src__generated, {
    get rightArrow() {
      return src__generated._rightArrow;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._rightArrow*/get _rightArrow() {
      return "→";
    },
    set _rightArrow(_) {}
  });
  dart.copyProperties(src__generated, {
    get upArrow() {
      return src__generated._upArrow;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._upArrow*/get _upArrow() {
      return "↑";
    },
    set _upArrow(_) {}
  });
  dart.copyProperties(src__generated, {
    get downArrow() {
      return src__generated._downArrow;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._downArrow*/get _downArrow() {
      return "↓";
    },
    set _downArrow(_) {}
  });
  dart.copyProperties(src__generated, {
    get longLeftArrow() {
      return src__generated._longLeftArrow;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._longLeftArrow*/get _longLeftArrow() {
      return "◀━";
    },
    set _longLeftArrow(_) {}
  });
  dart.copyProperties(src__generated, {
    get longRightArrow() {
      return src__generated._longRightArrow;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._longRightArrow*/get _longRightArrow() {
      return "━▶";
    },
    set _longRightArrow(_) {}
  });
  dart.copyProperties(src__generated, {
    get horizontalLine() {
      return src__generated._horizontalLine;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._horizontalLine*/get _horizontalLine() {
      return "─";
    },
    set _horizontalLine(_) {}
  });
  dart.copyProperties(src__generated, {
    get verticalLine() {
      return src__generated._verticalLine;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._verticalLine*/get _verticalLine() {
      return "│";
    },
    set _verticalLine(_) {}
  });
  dart.copyProperties(src__generated, {
    get topLeftCorner() {
      return src__generated._topLeftCorner;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._topLeftCorner*/get _topLeftCorner() {
      return "┌";
    },
    set _topLeftCorner(_) {}
  });
  dart.copyProperties(src__generated, {
    get topRightCorner() {
      return src__generated._topRightCorner;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._topRightCorner*/get _topRightCorner() {
      return "┐";
    },
    set _topRightCorner(_) {}
  });
  dart.copyProperties(src__generated, {
    get bottomLeftCorner() {
      return src__generated._bottomLeftCorner;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._bottomLeftCorner*/get _bottomLeftCorner() {
      return "└";
    },
    set _bottomLeftCorner(_) {}
  });
  dart.copyProperties(src__generated, {
    get bottomRightCorner() {
      return src__generated._bottomRightCorner;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._bottomRightCorner*/get _bottomRightCorner() {
      return "┘";
    },
    set _bottomRightCorner(_) {}
  });
  dart.copyProperties(src__generated, {
    get cross() {
      return src__generated._cross;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._cross*/get _cross() {
      return "┼";
    },
    set _cross(_) {}
  });
  dart.copyProperties(src__generated, {
    get teeUp() {
      return src__generated._teeUp;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._teeUp*/get _teeUp() {
      return "┴";
    },
    set _teeUp(_) {}
  });
  dart.copyProperties(src__generated, {
    get teeDown() {
      return src__generated._teeDown;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._teeDown*/get _teeDown() {
      return "┬";
    },
    set _teeDown(_) {}
  });
  dart.copyProperties(src__generated, {
    get teeLeft() {
      return src__generated._teeLeft;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._teeLeft*/get _teeLeft() {
      return "┤";
    },
    set _teeLeft(_) {}
  });
  dart.copyProperties(src__generated, {
    get teeRight() {
      return src__generated._teeRight;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._teeRight*/get _teeRight() {
      return "├";
    },
    set _teeRight(_) {}
  });
  dart.copyProperties(src__generated, {
    get upEnd() {
      return src__generated._upEnd;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._upEnd*/get _upEnd() {
      return "╵";
    },
    set _upEnd(_) {}
  });
  dart.copyProperties(src__generated, {
    get downEnd() {
      return src__generated._downEnd;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._downEnd*/get _downEnd() {
      return "╷";
    },
    set _downEnd(_) {}
  });
  dart.copyProperties(src__generated, {
    get leftEnd() {
      return src__generated._leftEnd;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._leftEnd*/get _leftEnd() {
      return "╴";
    },
    set _leftEnd(_) {}
  });
  dart.copyProperties(src__generated, {
    get rightEnd() {
      return src__generated._rightEnd;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._rightEnd*/get _rightEnd() {
      return "╶";
    },
    set _rightEnd(_) {}
  });
  dart.copyProperties(src__generated, {
    get horizontalLineBold() {
      return src__generated._horizontalLineBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._horizontalLineBold*/get _horizontalLineBold() {
      return "━";
    },
    set _horizontalLineBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get verticalLineBold() {
      return src__generated._verticalLineBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._verticalLineBold*/get _verticalLineBold() {
      return "┃";
    },
    set _verticalLineBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get topLeftCornerBold() {
      return src__generated._topLeftCornerBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._topLeftCornerBold*/get _topLeftCornerBold() {
      return "┏";
    },
    set _topLeftCornerBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get topRightCornerBold() {
      return src__generated._topRightCornerBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._topRightCornerBold*/get _topRightCornerBold() {
      return "┓";
    },
    set _topRightCornerBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get bottomLeftCornerBold() {
      return src__generated._bottomLeftCornerBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._bottomLeftCornerBold*/get _bottomLeftCornerBold() {
      return "┗";
    },
    set _bottomLeftCornerBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get bottomRightCornerBold() {
      return src__generated._bottomRightCornerBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._bottomRightCornerBold*/get _bottomRightCornerBold() {
      return "┛";
    },
    set _bottomRightCornerBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get crossBold() {
      return src__generated._crossBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._crossBold*/get _crossBold() {
      return "╋";
    },
    set _crossBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get teeUpBold() {
      return src__generated._teeUpBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._teeUpBold*/get _teeUpBold() {
      return "┻";
    },
    set _teeUpBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get teeDownBold() {
      return src__generated._teeDownBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._teeDownBold*/get _teeDownBold() {
      return "┳";
    },
    set _teeDownBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get teeLeftBold() {
      return src__generated._teeLeftBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._teeLeftBold*/get _teeLeftBold() {
      return "┫";
    },
    set _teeLeftBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get teeRightBold() {
      return src__generated._teeRightBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._teeRightBold*/get _teeRightBold() {
      return "┣";
    },
    set _teeRightBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get upEndBold() {
      return src__generated._upEndBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._upEndBold*/get _upEndBold() {
      return "╹";
    },
    set _upEndBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get downEndBold() {
      return src__generated._downEndBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._downEndBold*/get _downEndBold() {
      return "╻";
    },
    set _downEndBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get leftEndBold() {
      return src__generated._leftEndBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._leftEndBold*/get _leftEndBold() {
      return "╸";
    },
    set _leftEndBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get rightEndBold() {
      return src__generated._rightEndBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._rightEndBold*/get _rightEndBold() {
      return "╺";
    },
    set _rightEndBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get horizontalLineDouble() {
      return src__generated._horizontalLineDouble;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._horizontalLineDouble*/get _horizontalLineDouble() {
      return "═";
    },
    set _horizontalLineDouble(_) {}
  });
  dart.copyProperties(src__generated, {
    get verticalLineDouble() {
      return src__generated._verticalLineDouble;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._verticalLineDouble*/get _verticalLineDouble() {
      return "║";
    },
    set _verticalLineDouble(_) {}
  });
  dart.copyProperties(src__generated, {
    get topLeftCornerDouble() {
      return src__generated._topLeftCornerDouble;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._topLeftCornerDouble*/get _topLeftCornerDouble() {
      return "╔";
    },
    set _topLeftCornerDouble(_) {}
  });
  dart.copyProperties(src__generated, {
    get topRightCornerDouble() {
      return src__generated._topRightCornerDouble;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._topRightCornerDouble*/get _topRightCornerDouble() {
      return "╗";
    },
    set _topRightCornerDouble(_) {}
  });
  dart.copyProperties(src__generated, {
    get bottomLeftCornerDouble() {
      return src__generated._bottomLeftCornerDouble;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._bottomLeftCornerDouble*/get _bottomLeftCornerDouble() {
      return "╚";
    },
    set _bottomLeftCornerDouble(_) {}
  });
  dart.copyProperties(src__generated, {
    get bottomRightCornerDouble() {
      return src__generated._bottomRightCornerDouble;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._bottomRightCornerDouble*/get _bottomRightCornerDouble() {
      return "╝";
    },
    set _bottomRightCornerDouble(_) {}
  });
  dart.copyProperties(src__generated, {
    get crossDouble() {
      return src__generated._crossDouble;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._crossDouble*/get _crossDouble() {
      return "╬";
    },
    set _crossDouble(_) {}
  });
  dart.copyProperties(src__generated, {
    get teeUpDouble() {
      return src__generated._teeUpDouble;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._teeUpDouble*/get _teeUpDouble() {
      return "╩";
    },
    set _teeUpDouble(_) {}
  });
  dart.copyProperties(src__generated, {
    get teeDownDouble() {
      return src__generated._teeDownDouble;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._teeDownDouble*/get _teeDownDouble() {
      return "╦";
    },
    set _teeDownDouble(_) {}
  });
  dart.copyProperties(src__generated, {
    get teeLeftDouble() {
      return src__generated._teeLeftDouble;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._teeLeftDouble*/get _teeLeftDouble() {
      return "╣";
    },
    set _teeLeftDouble(_) {}
  });
  dart.copyProperties(src__generated, {
    get teeRightDouble() {
      return src__generated._teeRightDouble;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._teeRightDouble*/get _teeRightDouble() {
      return "╠";
    },
    set _teeRightDouble(_) {}
  });
  dart.copyProperties(src__generated, {
    get horizontalLineDoubleDash() {
      return src__generated._horizontalLineDoubleDash;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._horizontalLineDoubleDash*/get _horizontalLineDoubleDash() {
      return "╌";
    },
    set _horizontalLineDoubleDash(_) {}
  });
  dart.copyProperties(src__generated, {
    get horizontalLineDoubleDashBold() {
      return src__generated._horizontalLineDoubleDashBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._horizontalLineDoubleDashBold*/get _horizontalLineDoubleDashBold() {
      return "╍";
    },
    set _horizontalLineDoubleDashBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get verticalLineDoubleDash() {
      return src__generated._verticalLineDoubleDash;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._verticalLineDoubleDash*/get _verticalLineDoubleDash() {
      return "╎";
    },
    set _verticalLineDoubleDash(_) {}
  });
  dart.copyProperties(src__generated, {
    get verticalLineDoubleDashBold() {
      return src__generated._verticalLineDoubleDashBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._verticalLineDoubleDashBold*/get _verticalLineDoubleDashBold() {
      return "╏";
    },
    set _verticalLineDoubleDashBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get horizontalLineTripleDash() {
      return src__generated._horizontalLineTripleDash;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._horizontalLineTripleDash*/get _horizontalLineTripleDash() {
      return "┄";
    },
    set _horizontalLineTripleDash(_) {}
  });
  dart.copyProperties(src__generated, {
    get horizontalLineTripleDashBold() {
      return src__generated._horizontalLineTripleDashBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._horizontalLineTripleDashBold*/get _horizontalLineTripleDashBold() {
      return "┅";
    },
    set _horizontalLineTripleDashBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get verticalLineTripleDash() {
      return src__generated._verticalLineTripleDash;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._verticalLineTripleDash*/get _verticalLineTripleDash() {
      return "┆";
    },
    set _verticalLineTripleDash(_) {}
  });
  dart.copyProperties(src__generated, {
    get verticalLineTripleDashBold() {
      return src__generated._verticalLineTripleDashBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._verticalLineTripleDashBold*/get _verticalLineTripleDashBold() {
      return "┇";
    },
    set _verticalLineTripleDashBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get horizontalLineQuadrupleDash() {
      return src__generated._horizontalLineQuadrupleDash;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._horizontalLineQuadrupleDash*/get _horizontalLineQuadrupleDash() {
      return "┈";
    },
    set _horizontalLineQuadrupleDash(_) {}
  });
  dart.copyProperties(src__generated, {
    get horizontalLineQuadrupleDashBold() {
      return src__generated._horizontalLineQuadrupleDashBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._horizontalLineQuadrupleDashBold*/get _horizontalLineQuadrupleDashBold() {
      return "┉";
    },
    set _horizontalLineQuadrupleDashBold(_) {}
  });
  dart.copyProperties(src__generated, {
    get verticalLineQuadrupleDash() {
      return src__generated._verticalLineQuadrupleDash;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._verticalLineQuadrupleDash*/get _verticalLineQuadrupleDash() {
      return "┊";
    },
    set _verticalLineQuadrupleDash(_) {}
  });
  dart.copyProperties(src__generated, {
    get verticalLineQuadrupleDashBold() {
      return src__generated._verticalLineQuadrupleDashBold;
    }
  });
  dart.defineLazy(src__generated, {
    /*src__generated._verticalLineQuadrupleDashBold*/get _verticalLineQuadrupleDashBold() {
      return "┋";
    },
    set _verticalLineQuadrupleDashBold(_) {}
  });
  dart.trackLibraries("packages/term_glyph/src/generated.ddc", {
    "package:term_glyph/src/generated.dart": src__generated
  }, '{"version":3,"sourceRoot":"","sources":["generated.dart"],"names":[],"mappings":"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","file":"generated.ddc.js"}');
  // Exports:
  return {
    src__generated: src__generated
  };
});

//# sourceMappingURL=generated.ddc.js.map
