// import { Node } from './node.model';
// import { RootMeta } from './root-meta.model';
// import { Meta } from './meta.model';
// import { Explorer } from './explorer.model';
// import { SvgBuilder } from './svg-builder';
//
// export default class {
//   public builder : SvgBuilder;
//   public ast: Node;
//
//   constructor({ key, meta, ...descendants}) {
//     this.ast = this.makeAbstractSyntaxTree(key, meta, descendants);
//
//     const explorer = new Explorer(this.ast);
//     this.builder = new SvgBuilder(explorer);
//   }
//
//   private makeAbstractSyntaxTree(key, meta, descendants: Object) : Node {
//     const root = new Node(key, new RootMeta(meta));
//     const childrenNames = Object.keys(descendants);
//
//     const rec = (name, obj, parent: Node) => {
//       const { config, tag, children = {}, siblings = {} } = obj;
//
//       const newParent = parent.addChild(name);
//
//       if(siblings.length) {
//         siblings.forEach(attrs => rec(
//           name,
//           {
//             tag,
//             config: { ...config, ...attrs }
//           },
//           parent
//         ));
//       }
//
//       const childrenNames = Object.keys(children);
//
//       if(childrenNames.length) {
//         return childrenNames.forEach(name => rec(name, children[name], newParent));
//       }
//
//       return;
//     }
//
//     childrenNames.forEach(v => rec(v, descendants[v], root));
//
//     return root;
//   }
// }
