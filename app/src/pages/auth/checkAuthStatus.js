//check authentication status
import { configureRequest, getCookieValue } from "../common/utils";
import { useGlobalContext } from "./GlobalContext";

export async function checkAuthStatus() {
  const request = configureRequest();
  const token = getCookieValue(csrf_token);
  const { role } = useGlobalContext();
  const payload = JSON.stringify({ role });
  try {
    const response = await request.get("/auth/auth_status", payload, {
      headers: {
        "X-CSRFToken": token,
      },
    });
    if (response.data && response.data.status === "true") {
      return true;
    }
    return false;
  } catch (error) {
    console.log("Authentication failed");
    return false;
  }
}
