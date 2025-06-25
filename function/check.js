
export const handler = async (event, context) => {
  try {

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Server IP fetched successfully!'}),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch IP', details: error.message }),
    };
  }
};
