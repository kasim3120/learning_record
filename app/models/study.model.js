export default mongoose => {
  const schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean
    },
    { timestamps: true }
  );
  schema.method("toJSON", () => {
    const { __v, _id, ...object } = toObject();
    object.id = _id;
    return object;
  })
  const Study = mongoose.model("study", schema);
  return Study;
}