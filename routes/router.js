import express from "express";

import { sendMailToKubawarkocz, sendMailToDJKuba } from "../controllers/mail.js";

const router = express.Router();

router.post("/send/kubawarkocz", sendMailToKubawarkocz);
router.post("/send/kubawarkocz", sendMailToDJKuba);

export default router;
