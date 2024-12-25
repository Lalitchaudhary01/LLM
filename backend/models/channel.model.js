const channelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    instructorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bannerImage: { type: String, default: "" },
  },
  { timestamps: true }
);

export const Channel = mongoose.model("Channel", channelSchema);
