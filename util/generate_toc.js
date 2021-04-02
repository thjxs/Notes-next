const fs = require("fs");
const os = require('os')

const path = os.homedir() + '/Notes'

const result = fs.readdirSync(path, {withFileTypes: true})

const item = {}
const filter = new Set(['.git', '.editorconfig', 'py', 'img'])
result.forEach(i => {
    if (filter.has(i.name)) {
        return
    }
    if (i.isDirectory()) {
        const children = fs.readdirSync(path + '/' + i.name, {withFileTypes: true})
        const _children = {}
        children.forEach(c => {
            if (c.isDirectory()) {
                const cc = fs.readdirSync(path + '/' + i.name + '/' + c.name, {withFileTypes: true})
                cc.forEach(ci => {
                    if (!ci.name.endsWith('\.md')) {
                        return
                    }
                    const m = ci.name.split(/\.md/)[0]
                    if (m === 'readme') {
                        return
                    }
                    _children[`${c.name}/${m}`] = m
                })
                return
            }
            if (!c.name.endsWith('\.md')) {
                return
            }
            const m = c.name.split(/\.md/)[0]
            if (m === 'readme') {
                return
            }
            _children[m] = m
        })
        item[i.name] = {
            name: i.name,
            path: `${i.name}/readme`,
            children: _children
        }
    }
})

const data = JSON.stringify(item)
fs.writeFile('../public/toc.json', data, (err => {
    if (err) {
        throw err
    }
}))
