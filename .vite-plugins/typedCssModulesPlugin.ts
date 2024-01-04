import type { Plugin, UserConfig } from 'vite'
import ts from 'typescript'

import tsj from "ts-json-schema-generator";
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { cwd } from 'node:process';

function plugin(): Plugin {
  return {
    name: 'typed-css-modules',
    configureServer: server => {
      server.watcher.on('change', async path => {
        if (!path.includes('theme/types.ts')) {
          return
        }
        try {
          const schema = ts.createSourceFile(
            'x.ts',
            await readFile(path, 'utf-8'),
            ts.ScriptTarget.Latest,
            undefined
          )

          function isNode(node) {
            // probably need more check,
            // for example,
            // if the node contains certain properties
            return typeof node === 'object';
          }

          function visit(ast, callback) {
            function _visit(node, parent, key, index) {
              // if (node.name.text === "Theme") {
                callback(node, parent, key, index);
              // }

              const keys = Object.keys(node);
              for (let i = 0; i < keys.length; i++) {
                const child = node[key];
                if (Array.isArray(child)) {
                  for (let j = 0; j < child.length; j++) {
                    _visit(child[j], node, keys[i], j);
                  }
                } else if (typeof child === "object") {
                  _visit(child, node, keys[i]);
                }
              }
            }
            // highlight-next-line
            _visit(ast, null);
          }

          visit(schema, (a,b,key)=>console.log(key)
          )
          

          // ts.forEachChild(schema, node => {
          //   if ('name' in node && 'text' in node.name && node.name.text === 'Theme') {
          //     ts.forEachChild(node, n => {
          //       console.log('===========================')
          //       console.log(n)
          //     })
          //   }
          // })
        } catch (e) {
          console.error(e)
        }
      })
      // server.watcher.on('unlink', path => {
      //   if (!path.endsWith('.module.css') || !path.endsWith('.module.scss')) {
      //     return
      //   }
      //   try {
      //     fs.unlinkSync(path + '.d.ts')
      //   } catch (e) {
      //     console.error(e)
      //   }
      // })
    },
  }
}

export default plugin
