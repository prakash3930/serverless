import axios from 'axios';

export const handler = async (event, context) => {
  try {
    // External API call to get server's public IP
    const response = await axios.get('https://api.ipify.org?format=json');

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Server IP fetched successfully!',
        ip: response.data.ip,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch IP', details: error.message }),
    };
  }
};
