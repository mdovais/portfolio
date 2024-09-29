const BASE_URL = "https://portfolio-server-0sma.onrender.com";

export const SendMessage = async ({ name, email, message }) => {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return {data};
  } catch (error) {
    console.log("Error occurred:", error.message);
    return { success: false, status: error.status || 500, message: error.message || "An error occurred" };
  }
};
