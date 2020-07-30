import API from './api'

const isBrowser = typeof window !== `undefined`
const getUser = () => (window.localStorage.cyberbrainUser ? JSON.parse(window.localStorage.cyberbrainUser) : {})
const setUser = (user) => (window.localStorage.cyberbrainUser = JSON.stringify(user))

const setFields = (fields) => (window.localStorage.cyberbrainDataFields = JSON.stringify(fields))
const getFields = () => (window.localStorage.cyberbrainDataFields ? JSON.parse(window.localStorage.cyberbrainDataFields) : {})
export const getCurrentFields = () => isBrowser && getFields()

const setSiteFields = (fields) => (window.localStorage.cyberbrainDataSiteFields = JSON.stringify(fields))
const getSiteFields = () => (window.localStorage.cyberbrainDataSiteFields ? JSON.parse(window.localStorage.cyberbrainDataSiteFields) : {})
export const getCurrentSiteFields = () => isBrowser && getSiteFields()

function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime()
  if (typeof performance !== `undefined` && typeof performance.now === `function`) {
    d += performance.now() //use high-precision timer if available
  }
  return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === `x` ? r : (r & 0x3) | 0x8).toString(16)
  })
}
export const createGUID = () => isBrowser && generateUUID()

export const handleAPILogin = ({ secretToken }) => {
  if (!isBrowser) {
    return false
  }
  API.get(`session/${secretToken}`)
    .then((res) => {
      console.log(res)
      console.log(`API Token matched! Setting the active website.`)
      return setUser({
        guid: generateUUID(),
        siteName: ``,
        siteAPI: ``,
      })
    })
    .catch(function (error) {
      console.log(error)
    })
  return false
}

export const handleLogin = ({ siteName, siteAPI }) => {
  if (!isBrowser) {
    return false
  }
  console.log(`Creating new sesstion`)
  //setFields([{}])
  //setSiteFields([{}])
  return setUser({
    guid: generateUUID(),
    siteName: siteName,
    siteAPI: siteAPI,
  })
}

export const updateUser = ({ guid, siteName, siteAPI }) => {
  if (!isBrowser) {
    return false
  }
  if (guid === getCurrentUser().guid) {
    console.log(`Session matches! Updating the active user.`)
    return setUser({
      guid: guid,
      siteName: siteName,
      siteAPI: siteAPI,
    })
  }
  return false
}

export const updateFields = ({ guid, fields }) => {
  if (!isBrowser) {
    return false
  }
  if (guid === getCurrentUser().guid) {
    console.log(`Session matches! Updating the active field types.`)
    console.log(fields)
    return setFields({
      guid: guid,
      fields: fields,
    })
  }
  return false
}

export const updateSiteFields = ({ guid, fields }) => {
  if (!isBrowser) {
    return false
  }
  if (guid === getCurrentUser().guid) {
    console.log(`Session matches! Updating site fields.`)
    console.log(fields)
    return setSiteFields({
      guid: guid,
      fields: fields,
    })
  }
  return false
}

export const isLoggedIn = () => {
  if (!isBrowser) {
    return false
  }
  const user = getUser()
  return !!user.guid
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = (callback) => {
  if (!isBrowser) {
    return
  }
  console.log(`Ensuring the \`cyberbrainUser\` property exists.`)
  setUser({})
  callback()
}
