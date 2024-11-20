const passport = require('passport');
const { Strategy: JwtStrategy } = require('passport-jwt');
const User = require('../models/User');

const cookieExtractor = (req) => req?.cookies?.jwt || null;

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload.id);
        if (user) return done(null, user);
        return done(null, false);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);