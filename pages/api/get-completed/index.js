const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
  domain: "db.us.fauna.com",
});

module.exports = async (req, res) => {
  try {
    const dbs = await client.query(
      q.Map(
        q.Paginate(
          q.Match(
            q.Index("todos"), true
          )
        ),
        (ref) => q.Get(ref)
      )
    );
    res.status(200).json({todos: dbs.data});
  } catch (e) {
    // something went wrong
    res.status(500).json({ error: e.message });
  }
};