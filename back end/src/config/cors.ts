import { CorsOptions } from 'cors';

const allowedOrigins = ["http://localhost:5173"];

export const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow required headers
};
