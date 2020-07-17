const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tyler/Sites/cyberbrain/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/tyler/Sites/cyberbrain/src/pages/about.js"))),
  "component---src-pages-debug-js": hot(preferDefault(require("/Users/tyler/Sites/cyberbrain/src/pages/debug.js"))),
  "component---src-pages-fields-js": hot(preferDefault(require("/Users/tyler/Sites/cyberbrain/src/pages/fields.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tyler/Sites/cyberbrain/src/pages/index.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/Users/tyler/Sites/cyberbrain/src/pages/login.js"))),
  "component---src-pages-logout-js": hot(preferDefault(require("/Users/tyler/Sites/cyberbrain/src/pages/logout.js"))),
  "component---src-pages-posts-js": hot(preferDefault(require("/Users/tyler/Sites/cyberbrain/src/pages/posts.js"))),
  "component---src-pages-settings-js": hot(preferDefault(require("/Users/tyler/Sites/cyberbrain/src/pages/settings.js"))),
  "component---src-pages-storage-js": hot(preferDefault(require("/Users/tyler/Sites/cyberbrain/src/pages/storage.js")))
}

