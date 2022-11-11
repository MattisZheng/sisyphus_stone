// check local storage 检查本地存储
// if !local storage, set initFile 设定初始文件
// if local storage, load local storage 加载本地存储

function setInitFiles(file: string, initFile: any): void {
  // check local storage 检查本地存储
  // if !local storage, set init json file to string value
  localStorage.getItem(file) ? null : localStorage.setItem(file, JSON.stringify(initFile));
}

export default setInitFiles;
