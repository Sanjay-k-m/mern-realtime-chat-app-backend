import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

/**
 * @swagger
 * /messages/send/{id}:
 *   post:
 *     summary: Sends a message to another user
 *     description: Sends a message to another user
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the user to send the message to
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 required: true
 *     responses:
 *       201:
 *         description: Message sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Message sent successfully
 *                 newMessage:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     message:
 *                       type: string
 *                     senderId:
 *                       type: string
 *                     receiverId:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 */
router.post("/send/:id", protectRoute, sendMessage);
/**
 * @swagger
 * /messages/{id}:
 *   get:
 *     summary: Gets messages for a user
 *     description: Gets messages for a user
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the user to get messages for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Messages fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Messages fetched successfully
 *                 messages:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       message:
 *                         type: string
 *                       senderId:
 *                         type: string
 *                       receiverId:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                       updatedAt:
 *                         type: string
 */
router.get("/:id", protectRoute, getMessages);

export default router;
