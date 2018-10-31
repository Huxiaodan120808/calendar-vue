/*
 * js 判断是否含有某一class
 *    添加class
 *    移除class
 * */
export function addClass (obj, cls) {
  let objclass = obj.className
  let blank = (objclass !== '') ? ' ' : ''
  let added = objclass + blank + cls
  obj.className = added
}
export function removeClass (obj, cls) {
  let objclass = ' ' + obj.className + ' '
  objclass = objclass.replace(/(\s+)/gi, ' ')
  let removed = objclass.replace(' ' + cls + ' ', ' ')
  removed = removed.replace(/(^\s+)|(\s+$)/g, '')
  obj.className = removed
}
export function hasClassname (obj, cls) {
  let objclass = obj.className
  let objclasslst = objclass.split(/\s+/)
  let x = 0
  for (x in objclasslst) {
    if (objclasslst[x] === cls) {
      return true
    }
  }
  return false
}
