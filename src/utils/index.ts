/**
 * flatTree
 * @param tree
 * @param children
 */
export function flatTree(tree: any[], children = 'children'): any[] {
  let result: any[] = []
  tree.forEach((item: any) => {
    result.push(item)
    if (item[children] && item[children].length > 0) {
      const childrenArr = flatTree(item.children)
      result = result.concat(childrenArr)
    }
  })
  return result
}
