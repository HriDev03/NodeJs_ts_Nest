import prisma from "../DB/db.config.js";
import { generateRandomNum, imageValidator } from "../utils/helper.js";
import path from "path";

class ProfileController {
  // Get the currently logged-in user
  static async index(req, res) {
    try {
      const user = req.user;
      return res.status(200).json({ status: 200, user });
    } catch (error) {
      console.error("Error in profile index:", error);
      return res.status(500).json({
        status: 500,
        message: "Something went wrong",
      });
    }
  }

  // Update profile image
  static async update(req, res) {
    try {
      const { id } = req.params;

      // Validate file existence
      if (!req.files || !req.files.profile) {
        return res.status(400).json({
          status: 400,
          message: "Profile image is required",
        });
      }

      const profile = req.files.profile;
      console.log("🧪 Received profile image:", profile);

      // Validate image size and type
      const validationError = imageValidator(profile.size, profile.mimetype);
      if (validationError) {
        return res.status(400).json({
          errors: {
            profile: validationError,
          },
        });
      }

      // Get image extension
      const extParts = profile.name.split(".");
      const ext = extParts[extParts.length - 1]?.toLowerCase();
      if (!ext) {
        return res.status(400).json({
          errors: { profile: "Invalid file extension" },
        });
      }

      // Generate new filename
      const imageName = generateRandomNum() + "." + ext;
      const uploadPath = path.join(process.cwd(), "public", "images", imageName);

      // Move image to folder
      await new Promise((resolve, reject) => {
        profile.mv(uploadPath, (err) => {
          if (err) return reject(err);
          resolve();
        });
      });

      // Update user's profile image
      await prisma.users.update({
        data: {
          profile: imageName,
        },
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json({
        status: 200,
        message: "Profile updated successfully",
      });
    } catch (error) {
      console.error("Error in updating profile:", error);
      return res.status(500).json({
        status: 500,
        message: "Something went wrong. Try again.",
      });
    }
  }

  // Placeholder methods (not implemented yet)
  static async store() {}
  static async show() {}
  static async destroy() {}
}

export default ProfileController;
