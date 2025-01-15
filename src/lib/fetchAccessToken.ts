export async function fetchAccessToken(): Promise<string> {
  const response = await fetch(`https://auth.us-east-2.propeldata.com/oauth2/token`, {
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