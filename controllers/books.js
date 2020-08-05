const connection = require("../db/mysql_connection");

// @desc    모든 책 목록 불러오는 api (25개씩)
// @route   GET  /api/v1/books
// @req     offset, limit (?offset=30&limit=25)
// @res     success, items[ {id,title,author,limit_age}, cnt ]
exports.getBooks = async (req, res, next) => {
  let offset = req.query.offset;
  let limit = req.query.limit;

  if (!offset || !limit) {
    res.status(400).json({ message: "파라미터 셋팅 오류" });
    return;
  }

  let query = `select * from book limit ${offset}, ${limit};`;
  try {
    [rows] = await connection.query(query);
    let cnt = rows.length;
    res.status(200).json({ success: true, items: rows, cnt: cnt });
  } catch (e) {
    res.status(500).json({ success: false, error: e });
    return;
  }
};
