const fs = require('fs');

module.exports = async (req, res) => {
  try {
    // 读取 TXT 文件内容
    const txtContent = fs.readFileSync('./all_info.txt', 'utf8');

    res.status(200).send(txtContent);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
