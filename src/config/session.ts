import session from "express-session";
const secret = <string>process.env.SESSION_SECRET

export default session({
  secret: secret,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
  saveUninitialized: false,
  resave: false,
  name: "meditekts",
});
