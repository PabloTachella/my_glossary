import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const apiKey = process.env.API_KEY
const authDomain = process.env.AUTH_DOMAIN
const projectId = process.env.PROJECT_ID
const storageBucket = process.env.STORAGE_BUCKET
const messagingSenderId = process.env.MESSAGING_SENDER_ID
const appId = process.env.APP_ID
const measurementId = process.env.MEASUREMENT_ID

const config = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
}

// Initialize Firebase
const app = initializeApp(config);
export const auth = getAuth(app)
export default app