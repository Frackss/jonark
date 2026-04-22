(function () {
  'use strict';
  var STORAGE_KEY = 'jonark-theme';
  var VALID_THEMES = ['light', 'dark', 'system'];
  function readStored() {
    try { var v = localStorage.getItem(STORAGE_KEY); return VALID_THEMES.indexOf(v) !== -1 ? v : null; } catch (_) { return null; }
  }
  function writeStored(theme) {
    try { theme === 'system' ? localStorage.removeItem(STORAGE_KEY) : localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}
  }
  function applyTheme(theme) {
    var root = document.documentElement;
    (!theme || theme === 'system') ? root.removeAttribute('data-theme') : root.setAttribute('data-theme', theme);
  }
  function resolvedTheme() {
    var stored = readStored();
    if (stored && stored !== 'system') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  window.jonarkTheme = {
    get: function () { return readStored() || 'system'; },
    set: function (theme) { writeStored(theme); applyTheme(theme); },
    toggle: function () { this.set(resolvedTheme() === 'dark' ? 'light' : 'dark'); },
    resolved: resolvedTheme
  };
  var stored = readStored();
  if (stored) applyTheme(stored);
  document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.theme-toggle');
      if (btn) window.jonarkTheme.toggle();
    });
  });
}());
