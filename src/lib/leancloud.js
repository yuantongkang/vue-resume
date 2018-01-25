/**
 * @Author: Hexon
 * @Date: 2017/8/21 11:25
 * @Last Modified by: Hexon
 * @Last Modified time: 2017/8/21 11:25
 */
import AV from 'leancloud-storage'

var APP_ID = 'g6v3366pjyTJndsKm1pGPQRq-gzGzoHsz';
var APP_KEY = 'WEwj90I8fmYJrYdW5QaHSqa9';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV
