/**
 * @Author: Hexon
 * @Date: 2017/8/19 18:03
 * @Last Modified by: Hexon
 * @Last Modified time: 2017/8/19 18:03
 */

const path = require('path')  // 路径工具
const fs = require('fs')      // 文件系统工具

let svgFolder = path.join(__dirname, '../static/svg_icons/')
let jsPath = path.join(__dirname, '../src/assets/icons.js')

let svgFiles = fs.readdirSync(svgFolder)

let symbols = svgFiles.map(function (filename) {
  let absolutePath = path.join(svgFolder, filename)
  let fileContent = fs.readFileSync(absolutePath).toString('utf8')
  let name = path.basename(filename, '.svg')
        return fileContent
          .replace(/<\?.+?\?>/g, '') // 去掉 <?xml version="1.0" standalone="no"?>
          .replace(/<!.+?>/g, '') // 去掉 <!DOCTYPE svg PUBLIC ...>
          .replace(/version=".+?"/g, '')
          .replace(/xmlns=".+?"/g, '')
          .replace(/class=".+?"/g, '')
          .replace(/fill=".+?"/g, '')
          .replace(/stroke=".+?"/g, '')
          .replace(/<svg /, `<svg id="icon-${name}" `)
          .replace(/\bsvg\b/g, 'symbol') // 改 svg 为 symbol
          .replace(/\s{2,}/g, ' ')
    }).join('\n')

  let js = `export default \`<svg style="display:none">\n${symbols}\n</svg>\`\n`
  fs.writeFileSync(jsPath, js, {flag: 'w'})
