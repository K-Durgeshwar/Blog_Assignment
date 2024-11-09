const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://blog_db_it6l_user:QpT4iMS5zQFgwvSWlHze94JZpr2A4poS@dpg-csnkgpggph6c73bg5fhg-a.singapore-postgres.render.com/blog_db_it6l',
  ssl: {
    rejectUnauthorized: false  // Disable certificate validation for development, but keep SSL enabled
  }
});

client.connect()
  .then(() => console.log("Connected to the database"))
  .catch(err => console.error("Connection error", err.stack));

module.exports = client;
