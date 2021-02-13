const fs = require("fs").promises;
const path = require("path");
const rimraf = require("rimraf");
const copy = require("copy");
const { minify } = require("terser");

async function readData(filename) {
  const file = await fs.readFile(`data/${filename}`, "utf8");
  return JSON.parse(file);
}

async function getTemplate(filename) {
  const file = await fs.readFile(`data/templates/${filename}`, "utf8");
  return file;
}

async function getArticle(filename) {
  const file = await fs.readFile(`data/articles/${filename}`, "utf8");
  return file;
}

async function ensurePath(filename) {
  try {
    await fs.mkdir(path.dirname(filename), { recursive: true });
  } catch (e) {
    console.log(e);
  }
}

async function stampTemplateToPage(filename, content) {
  await ensurePath(filename);
  try {
    await fs.writeFile(filename, content);
  } catch (e) {
    console.log(e);
  }
}

async function deleteFolderRecursive(pathname) {
  console.log("delete ", pathname);
  const files = await fs.readdir(pathname);
  files.forEach(async (file, index) => {
    const curPath = path.join(pathname, file);
    const ls = await fs.lstat(curPath);
    if (ls.isDirectory()) {
      // recurse
      await deleteFolderRecursive(curPath);
    } else {
      // delete file
      await fs.unlink(curPath);
    }
  });
  await fs.rmdir(pathname);
}

async function eraseDeployFolder() {
  //await deleteFolderRecursive("deploy/");
  //await fs.rmdir("deploy/", { recursive: true });
  return new Promise((resolve, reject) => {
    rimraf("deploy/", resolve);
  });
}

async function copyResource(from, to) {
  await ensurePath(to);
  await fs.copyFile(from, to);
}

async function copyJS(from, to) {
  await ensurePath(to);
  const file = await fs.readFile(from, "utf8");
  const min = await minify(file, { compress: true, mangle: true });
  //  console.log(min);
  await fs.writeFile(to, min.code);
  //  await fs.copyFile(from, to);
}

async function copyFiles(from, to) {
  await new Promise((resolve, reject) => {
    copy(from, to, (err, files) => {
      if (!err) {
        resolve();
      } else {
        reject(err);
      }
    });
  });
}

exports.getTemplate = getTemplate;
exports.stampTemplateToPage = stampTemplateToPage;
exports.eraseDeployFolder = eraseDeployFolder;
exports.readData = readData;
exports.copyResource = copyResource;
exports.ensurePath = ensurePath;
exports.getArticle = getArticle;
exports.copyFiles = copyFiles;
exports.copyJS = copyJS;
