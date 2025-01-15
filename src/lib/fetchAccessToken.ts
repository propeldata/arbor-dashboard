export async function fetchAccessToken(): Promise<string> {
  if (!process.env.PROPEL_AUTH_URL) {
    throw new Error("PROPEL_AUTH_URL is not set");
  }

  const response = await fetch(process.env.PROPEL_AUTH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${process.env.PROPEL_APP_CLIENT_ID}&client_secret=${process.env.PROPEL_APP_CLIENT_SECRET}`,
    cache: 'no-cache'
  });

  const data = await response.json();
  return data.access_token;
}