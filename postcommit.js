const fs = require('fs');
const path = require('path');
const {log, wran} = require('util');

try {
    const refs = fs.readFileSync(path.join(__dirname, '.git', 'HEAD')).toString().split(':')[1].trim();
    log(`当前开发分支: ${refs}`);
    const commit = fs.readFileSync(path.join(__dirname, '.git', refs)).slice(0, 8).toString();
    log(`打包分支commit: ${commit}`);
    const commitFile = fs.createWriteStream(path.join(__dirname, 'commit.json'), { autoClose: true });
    commitFile.write(JSON.stringify({ commit, refs }), () => {
        log('commit记录写入json');
    })
} catch (e) {
    wran('本地未找到git记录, 忽略更新commit')
}