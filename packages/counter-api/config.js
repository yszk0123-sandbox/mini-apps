// HACK: We need encode with base64 because `now` cannot accept multiline value
function decode(input) {
  return Buffer.from(input, "base64")
    .toString()
    .trim();
}

exports.config = {
  gcp: {
    projectId: process.env.APP_PROJECT_ID,
    credentials: {
      privateKey: decode(process.env.APP_PRIVATE_KEY),
      clientEmail: process.env.APP_CLIENT_EMAIL
    }
  },
  accessToken: process.env.APP_ACCESS_TOKEN
};
