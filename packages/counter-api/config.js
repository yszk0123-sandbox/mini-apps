// HACK: We need encode with base64 because `now` cannot accept multiline value
function decode(input) {
  return Buffer.from(input, "base64")
    .toString()
    .trim();
}

exports.config = {
  google: {
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      privateKey: decode(process.env.GOOGLE_PRIVATE_KEY),
      clientEmail: process.env.GOOGLE_CLIENT_EMAIL
    }
  },
  app: {
    accessToken: process.env.APP_ACCESS_TOKEN
  }
};
