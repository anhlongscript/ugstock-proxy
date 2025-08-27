export default {
  async fetch(request) {
    try {
      // Gọi API gốc
      const targetUrl = "https://meows.io.vn/api/ugphone-status";
      const resp = await fetch(targetUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (UGStock Worker Proxy)"
        }
      });

      // Trả về dữ liệu kèm CORS headers
      return new Response(await resp.text(), {
        headers: {
          "content-type": resp.headers.get("content-type") || "application/json",
          "access-control-allow-origin": "*",
          "access-control-allow-headers": "*",
          "access-control-allow-methods": "GET, OPTIONS"
        }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Worker error", detail: err.message }), {
        headers: { "content-type": "application/json", "access-control-allow-origin": "*" },
        status: 500
      });
    }
  }
}
