const _0x69accc = (function () {
    let _0x1bb71a = true
    return function (_0x21c0ba, _0x1865b6) {
      const _0x2460a8 = _0x1bb71a
        ? function () {
            if (_0x1865b6) {
              const _0x24c898 = _0x1865b6.apply(_0x21c0ba, arguments)
              return (_0x1865b6 = null), _0x24c898
            }
          }
        : function () {}
      return (_0x1bb71a = false), _0x2460a8
    }
  })(),
  _0x569ab2 = _0x69accc(this, function () {
    return _0x569ab2
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x569ab2)
      .search('(((.+)+)+)+$')
  })
_0x569ab2()
const _0x17a3a8 = (function () {
  let _0x28f067 = true
  return function (_0x33de67, _0x4e896e) {
    const _0x38dd2b = _0x28f067
      ? function () {
          if (_0x4e896e) {
            const _0x939024 = _0x4e896e.apply(_0x33de67, arguments)
            return (_0x4e896e = null), _0x939024
          }
        }
      : function () {}
    return (_0x28f067 = false), _0x38dd2b
  }
})()
;(function () {
  _0x17a3a8(this, function () {
    const _0x2271dc = new RegExp('function *\\( *\\)'),
      _0x1550f3 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0xe6a735 = _0x10043f('init')
    if (
      !_0x2271dc.test(_0xe6a735 + 'chain') ||
      !_0x1550f3.test(_0xe6a735 + 'input')
    ) {
      _0xe6a735('0')
    } else {
      _0x10043f()
    }
  })()
})()
const _0xc259b7 = (function () {
  let _0x32cda4 = true
  return function (_0xf9d629, _0x3b7cd4) {
    const _0x1d3bf5 = _0x32cda4
      ? function () {
          if (_0x3b7cd4) {
            const _0x5e1ca2 = _0x3b7cd4.apply(_0xf9d629, arguments)
            return (_0x3b7cd4 = null), _0x5e1ca2
          }
        }
      : function () {}
    return (_0x32cda4 = false), _0x1d3bf5
  }
})()
;(function () {
  let _0x596152
  try {
    const _0x4793ce = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x596152 = _0x4793ce()
  } catch (_0x476d67) {
    _0x596152 = window
  }
  _0x596152.setInterval(_0x10043f, 4000)
})()
const _0x4cf3e3 = _0xc259b7(this, function () {
  let _0xc832fe
  try {
    const _0x59cbdc = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0xc832fe = _0x59cbdc()
  } catch (_0x32c8d4) {
    _0xc832fe = window
  }
  const _0x1a45c7 = (_0xc832fe.console = _0xc832fe.console || {})
  const _0x529835 = [
    'log',
    'warn',
    'info',
    'error',
    'exception',
    'table',
    'trace',
  ]
  for (let _0x4c60fe = 0; _0x4c60fe < _0x529835.length; _0x4c60fe++) {
    const _0x58c80c = _0xc259b7.constructor.prototype.bind(_0xc259b7),
      _0x4224da = _0x529835[_0x4c60fe],
      _0x92e932 = _0x1a45c7[_0x4224da] || _0x58c80c
    _0x58c80c['__proto__'] = _0xc259b7.bind(_0xc259b7)
    _0x58c80c.toString = _0x92e932.toString.bind(_0x92e932)
    _0x1a45c7[_0x4224da] = _0x58c80c
  }
})
_0x4cf3e3()
const {
    tlang,
    botpic,
    cmd,
    prefix,
    runtime,
    Config,
    formatp,
    fetchJson,
  } = require('../lib'),
  wabetainfo = require('@sl-code-lords/wabetainfo'),
  _0x2cd14e = {}
_0x2cd14e.pattern = 'wbi'
_0x2cd14e.alias = ['whatsappbeta', 'wbeta', 'wabeta']
_0x2cd14e.desc = 'whatsapp beta infomation.'
_0x2cd14e.category = 'downloader'
_0x2cd14e.react = '\uD83E\uDE80'
_0x2cd14e.use = '<wbi>'
cmd(_0x2cd14e, async (_0x2fa56a, _0x3b6866, _0x2e5373) => {
  if (_0x2e5373.includes('https')) {
    const _0x49be0e = await wabetainfo.searchurl(_0x2e5373),
      _0x951b3f = _0x49be0e,
      _0x2691e3 =
        _0x951b3f.image.split('https:')[1] ||
        '//i.ibb.co/s6J0yG8/e848545de0e98c132a269.jpg'
    let _0x296df5 =
        '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83E\uDE80' +
        ('WABETA INFO ℹ️_ )* \n\n*\u2503\u2FFB* *\uD83E\uDD4F Title :* ' +
          _0x951b3f.title +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCC5 ᴅᴀᴛᴇ :* ' +
          _0x951b3f.date +
          '\n\n*\u2503\u2FFB* *\uD83D\uDDA5️ ᴘʟᴀᴛғᴏʀᴍ :* ' +
          _0x951b3f.platform +
          '\n\n*\u2503\u2FFB* *\uD83D\uDD17 ᴜʀʟ :* ' +
          _0x951b3f.url +
          '\n\n*\u2503\u2FFB* *\uD83D\uDDDE️ sʜᴏʀᴛ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ :* ' +
          _0x951b3f.shortdesc +
          '\n\n*\u2503\u2FFB* *ℹ️ F* & *Q*'),
      _0x40ab5e = 1
    for (let _0x37b704 of _0x951b3f.faq) {
      _0x296df5 +=
        '\n\n*\u2503\u2FFB* *_\u2753 ǫᴜᴇsᴛɪᴏɴ ' +
        _0x40ab5e++ +
        '_ :* ' +
        _0x37b704.question +
        ' \n*\u2503\u2742* *_\uD83D\uDC68‍\uD83D\uDCBB ᴀɴsᴡᴇʀ_ :* ' +
        _0x37b704.answer
    }
    const _0x552294 = await _0x2fa56a.sendMessage(
        _0x3b6866.chat,
        {
          image: { url: 'https:' + _0x2691e3 },
          caption:
            _0x296df5 +
            '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
        },
        { quoted: _0x3b6866 }
      ),
      _0x8151f4 = {
        text: 'ℹ️',
        key: _0x552294.key,
      }
    const _0x264b3f = { react: _0x8151f4 }
    await _0x2fa56a.sendMessage(_0x3b6866.chat, _0x264b3f)
    const _0x4146bf = '*\uD83D\uDCF0 ғᴜʟʟ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ :* +',
      _0x2ae454 = { quoted: _0x552294 }
    const _0x3d6f96 = await _0x2fa56a.sendMessage(
        _0x3b6866.chat,
        {
          text:
            _0x4146bf.replace(/\+/g, String.fromCharCode(8206).repeat(4001)) +
            '\n' +
            _0x951b3f.fulldesc,
        },
        _0x2ae454
      ),
      _0x57d158 = {
        text: '\uD83E\uDD4F',
        key: _0x3d6f96.key,
      }
    const _0x1163f4 = { react: _0x57d158 }
    await _0x2fa56a.sendMessage(_0x3b6866.chat, _0x1163f4)
  } else {
    const _0xf2cdf4 = await wabetainfo.latest(),
      _0x527fdc = _0xf2cdf4,
      _0x231075 =
        _0x527fdc.image.split('https:')[1] ||
        '//i.ibb.co/s6J0yG8/e848545de0e98c132a269.jpg'
    let _0xfeb06a =
        '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83E\uDE80' +
        ('WABETA INFO ℹ️_ )* \n\n*\u2503\u2FFB* *\uD83E\uDD4F Title :* ' +
          _0x527fdc.title +
          '\n\n*\u2503\u2FFB* *\uD83D\uDCC5 ᴅᴀᴛᴇ :* ' +
          _0x527fdc.date +
          '\n\n*\u2503\u2FFB* *\uD83D\uDDA5️ ᴘʟᴀᴛғᴏʀᴍ :* ' +
          _0x527fdc.platform +
          '\n\n*\u2503\u2FFB* *\uD83D\uDD17 ᴜʀʟ :* ' +
          _0x527fdc.url +
          '\n\n*\u2503\u2FFB* *\uD83D\uDDDE️ sʜᴏʀᴛ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ :* ' +
          _0x527fdc.shortdesc +
          '\n\n*\u2503\u2FFB* *ℹ️ F* & *Q*'),
      _0x307e4c = 1
    for (let _0x2836f1 of _0x527fdc.faq) {
      _0xfeb06a +=
        '\n\n*\u2503\u2FFB* *_\u2753 ǫᴜᴇsᴛɪᴏɴ ' +
        _0x307e4c++ +
        '_ :* ' +
        _0x2836f1.question +
        ' \n*\u2503\u2742* *_\uD83D\uDC68‍\uD83D\uDCBB ᴀɴsᴡᴇʀ_ :* ' +
        _0x2836f1.answer
    }
    const _0x386f24 = await _0x2fa56a.sendMessage(
        _0x3b6866.chat,
        {
          image: { url: 'https:' + _0x231075 },
          caption:
            _0xfeb06a +
            '\n\n*\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25C6*\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
        },
        { quoted: _0x3b6866 }
      ),
      _0x505475 = {
        text: 'ℹ️',
        key: _0x386f24.key,
      }
    const _0x22b14e = { react: _0x505475 }
    await _0x2fa56a.sendMessage(_0x3b6866.chat, _0x22b14e)
    const _0x3bc7cf = '*\uD83D\uDCF0 ғᴜʟʟ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ :* +',
      _0x14796b = { quoted: _0x386f24 }
    const _0x1998f9 = await _0x2fa56a.sendMessage(
        _0x3b6866.chat,
        {
          text:
            _0x3bc7cf.replace(/\+/g, String.fromCharCode(8206).repeat(4001)) +
            '\n' +
            _0x527fdc.fulldesc,
        },
        _0x14796b
      ),
      _0x58ce49 = {
        text: '\uD83E\uDD4F',
        key: _0x1998f9.key,
      }
    const _0x234837 = { react: _0x58ce49 }
    await _0x2fa56a.sendMessage(_0x3b6866.chat, _0x234837)
  }
})
const _0x1db169 = {}
_0x1db169.pattern = 'wbit'
_0x1db169.alias = ['wbin', 'wbis']
_0x1db169.desc = 'Give infomation about wbi'
_0x1db169.category = 'downloader'
_0x1db169.react = '\uD83D\uDD0E'
_0x1db169.filename = __filename
_0x1db169.use = '<add fb url.>'
cmd(_0x1db169, async (_0x1c908a, _0x5eaaa6, _0xd108db) => {
  try {
    let _0x3f2d23 = await wabetainfo.articlelist()
    const _0x527f5c = _0x3f2d23[0].url
    let _0x1c6faa = await wabetainfo.searchurl(_0x527f5c)
    const _0x37f025 =
        _0x1c6faa.image.split('https:')[1] ||
        '//i.ibb.co/s6J0yG8/e848545de0e98c132a269.jpg',
      _0x2bf0b6 = _0x3f2d23
    let _0x42c98f =
      '\n*\u250F\u2501[ _\uD83D\uDC09ROWDY-BABY-MD\uD83D\uDC32_ ]\u2500\u2742*\n\n*\u2523\u2501( _\uD83E\uDE80WABETA INFO ℹ️_ )*\n\n```.wbi [news url] - use to see news in brief```'
    for (let _0x7b94a7 of _0x2bf0b6) {
      _0x42c98f +=
        '\n\n\uD83E\uDD4F *ᴛɪᴛʟᴇ - ' +
        _0x7b94a7.title +
        ' for ' +
        _0x7b94a7.platform +
        ' - ' +
        _0x7b94a7.date +
        '* \n\uD83D\uDCF0 *ᴅᴇsᴄʀɪᴘᴛɪᴏɴ :* ' +
        _0x7b94a7.shortdesc +
        '\n\uD83D\uDD17 *ᴜʀʟ :* ' +
        _0x7b94a7.url
    }
    const _0x6d797f = await _0x1c908a.sendMessage(
        _0x5eaaa6.chat,
        {
          image: { url: 'https:' + _0x37f025 },
          caption:
            _0x42c98f + '\n\nROWDY-BABY-MD \u2981 MADE BY KALINDU\nVERSION 1\n',
        },
        { quoted: _0x5eaaa6 }
      ),
      _0xb4fbdc = {
        text: '\uD83E\uDDFE',
        key: _0x6d797f.key,
      }
    const _0x1706a6 = { react: _0xb4fbdc }
    await _0x1c908a.sendMessage(_0x5eaaa6.chat, _0x1706a6)
  } catch (_0x2cf1ed) {
    console.log(_0x2cf1ed)
    _0x5eaaa6.reply('Not Found \u274C \n*' + _0x2cf1ed + '*')
    _0x5eaaa6.react('\u274C')
    const _0x18bde5 = {
      text: '\u274C',
      key: txt2.key,
    }
    const _0xb7e742 = { react: _0x18bde5 }
    await _0x1c908a.sendMessage(_0x5eaaa6.chat, _0xb7e742)
  }
})
function _0x10043f(_0x382eec) {
  function _0x3e9fdf(_0x18fc83) {
    if (typeof _0x18fc83 === 'string') {
      return function (_0x4e09ea) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x18fc83 / _0x18fc83).length !== 1 || _0x18fc83 % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x3e9fdf(++_0x18fc83)
  }
  try {
    if (_0x382eec) {
      return _0x3e9fdf
    } else {
      _0x3e9fdf(0)
    }
  } catch (_0x39970f) {}
}
