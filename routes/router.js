import express from "express";

import { sendMailToKubawarkocz, sendMailToDJKuba } from "../controllers/mail.js";

const router = express.Router();

router.post("/send/kubawarkocz", sendMailToKubawarkocz);
router.post("/send/djkuba", sendMailToDJKuba);

export default router;
