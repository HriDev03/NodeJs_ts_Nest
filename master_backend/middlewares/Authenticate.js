import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized: Token missing or invalid format",
      });
    }

    // Extract token after "Bearer "
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized: Token missing",
      });
    }

    // Decode and verify token
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user info to request
    req.user = decodedUser;

    next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    return res.status(401).json({
      status: 401,
      message: "Unauthorized: Invalid or expired token",
    });
  }
};

export default authMiddleware;
