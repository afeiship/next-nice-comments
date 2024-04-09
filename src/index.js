import nx from '@jswork/next';

const DEFAULT_TYPES = {
  js: {
    start: '/*!\n',
    lineWith: ' * ',
    end: '\n */\n\n'
  },
  css: {
    start: '/*!\n',
    lineWith: ' * ',
    end: '\n */\n\n'
  },
  html: {
    start: '<!--\n',
    lineWith: ' * ',
    end: '\n-->\n\n'
  },
  raw: {
    start: '',
    lineWith: ' ',
    end: ''
  }
};

nx.niceComments = function(inArray, inType) {
  var options = DEFAULT_TYPES[inType] || inType;
  var result = inArray.map(function(item) {
    return options.lineWith + item;
  });
  return options.start + result.join('\n') + options.end;
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.niceComments;
}

export default nx.niceComments;
