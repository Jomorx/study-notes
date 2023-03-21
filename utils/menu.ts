import * as fs from "fs"
import * as path from "path"
const getMenuNav = (
  dirPath: string,
  targetPath: string,
  extension: string = "md"
) => {
  const finPath = path.resolve(dirPath, `../${targetPath}`)
  const dir = fs
    .readdirSync(finPath)
    .filter((path: string) => {
      const splitPath = path.split(".")
      const exIndex = splitPath.length - 1
      return splitPath[exIndex] === extension && path !== "index.md"
    })
    .map((item) => ({ text: item, link: `${targetPath}/${item}` }))
  return dir
}
export { getMenuNav }
