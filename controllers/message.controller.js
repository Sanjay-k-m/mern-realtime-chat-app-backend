import mongoose from "mongoose";
import express from "express";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const sendMessage = async (req, res) => {
  const { message } = req.body;
  const receiverId = new mongoose.Types.ObjectId(req.params.id);
  const senderId = req.user._id;

  try {
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      await conversation.messages.push(newMessage._id);
    }

    // socket.io functionality will go here

    // this will run  in parallel
    await Promise.all([newMessage.save(), conversation.save()]);

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      newMessage,
    });
  } catch (error) {
    console.error("Error in Send Message Controller:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getMessages = async (req, res) => {
  const userToChatId = new mongoose.Types.ObjectId(req.params.id);
  const senderId = req.user._id;

  try {
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;

    res
      .status(200)
      .json({
        success: true,
        message: "Messages fetched successfully",
        messages,
      });
  } catch (error) {
    console.error("Error in Get Messages Controller:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { sendMessage, getMessages };
