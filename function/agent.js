import UserAgent from 'user-agents';


export const handler = async (event, context) => {
  try {
    const userAgent = new UserAgent();

    return {
      statusCode: 200,
      body: JSON.stringify(userAgent.data, null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch IP', details: error.message }),
    };
  }
};
