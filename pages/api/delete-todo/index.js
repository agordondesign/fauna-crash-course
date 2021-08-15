const faunadb = require("faunadb");

// your secret hash
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
  domain: "db.us.fauna.com",
});

module.exports = async (req, res) => {
  const id = req.body.value.id;
  console.log(id);
  try{
    const dbs = await client.query(
      q.Delete(q.Ref(q.Collection('todos'), id))
    );
    res.status(200).json(dbs);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};
