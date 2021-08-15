const faunadb = require("faunadb");

// your secret hash
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
  domain: "db.us.fauna.com",
});

module.exports = async (req, res) => {
  const {title,note} = req.body.data;

  try {
    const dbs = await client.query(
      q.Create(q.Collection("todos"), {
        data: {
          title: title,
          note: note,
          created_at: Date.now(),
          updated_at: Date.now(),
          completed: false,
        },
      })
    );
    // ok
    res.status(200).json("ok");
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};
