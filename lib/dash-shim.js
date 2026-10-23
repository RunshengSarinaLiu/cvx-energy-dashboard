// Minimal stand-in for the Claude dashboard runtime, so the page runs as plain HTML.
// Data comes from window.CVX_DATA (data/*.js); calculations are recomputed on every draw.
window.dash = (function () {
  var DATA = window.CVX_DATA || {};
  var calcs = {};
  var subs = [];

  function data(id) {
    var c = calcs[id];
    if (c) {
      try {
        var args = c.inputs.map(function (i) { return data(i).data; });
        var out = c.fn.apply(null, args);
        return { status: 'ok', data: out || [], columns: [], meta: [] };
      } catch (e) {
        console.error('calc ' + id + ' failed', e);
        return { status: 'error', data: [], message: String(e) };
      }
    }
    if (Object.prototype.hasOwnProperty.call(DATA, id)) {
      var rows = DATA[id] || [];
      return { status: 'ok', data: rows, columns: rows.length ? Object.keys(rows[0]) : [], meta: [] };
    }
    return { status: 'missing', data: [], message: 'No data/' + id + '.js loaded' };
  }

  function run() { subs.forEach(function (fn) { try { fn(); } catch (e) { console.error(e); } }); }

  var timer = null;
  window.addEventListener('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(run, 120);
  });

  return {
    colors: ['#2F7FD3', '#E07A34', '#3E9E6E', '#8A63C8', '#C9495B', '#2BA3A3', '#B58A1F', '#6B7785'],
    data: data,
    calc: function (id, opts) { calcs[id] = opts; },
    loader: function () {},
    onData: function (fn) { subs.push(fn); fn(); },
    refresh: function () { run(); },
    params: function () { return {}; },
    setParams: function () {},
    resetParams: function () {},
    setLink: function () {}
  };
})();
