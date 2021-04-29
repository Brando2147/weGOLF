
module.exports = {
  development: {
    database: "ctb3gejbzqwytitd",
    dialect: "mysql",
    host: process.env.Host,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: process.env.JAWSDB_URL,
    dialect: "mysql",
  },
};

