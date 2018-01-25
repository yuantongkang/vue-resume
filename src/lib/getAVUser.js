/**
 * @Author: Hexon
 * @Date: 2017/8/21 12:25
 * @Last Modified by: Hexon
 * @Last Modified time: 2017/8/21 12:25
 */

import AV from '../lib/leancloud'

export default function (user) {
  var {id, attributes: {username}} = user || AV.User.current() || {attributes:{}};
  return {
    id: id || '',
    username: username || ''};
}
