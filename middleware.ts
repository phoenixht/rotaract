
import { NextResponse } from "next/server";

export function middleware() {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Rotaract District 7020 - Under Maintenance</title>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'Segoe UI',Arial,sans-serif; min-height:100vh; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%); color:#fff; text-align:center; padding:20px; }
        .container { max-width:600px; }
        .icon { font-size:64px; margin-bottom:24px; }
        .badge { display:inline-block; background:linear-gradient(90deg,#E4002B,#FF6B6B); color:white; font-size:13px; font-weight:600; letter-spacing:1px; text-transform:uppercase; padding:6px 16px; border-radius:20px; margin-bottom:20px; }
        h1 { font-size:32px; font-weight:700; margin-bottom:16px; }
        p { color:#cfd2e0; font-size:17px; line-height:1.6; margin-bottom:8px; }
        .divider { width:60px; height:3px; background:#E4002B; margin:28px auto; border-radius:2px; }
        .footer { font-size:14px; color:#8a8fa3; margin-top:32px; }
        .spinner { display:inline-block; width:16px; height:16px; border:2px solid rgba(255,255,255,0.3); border-top-color:#E4002B; border-radius:50%; animation:spin 0.8s linear infinite; margin-right:8px; vertical-align:middle; }
        @keyframes spin { to { transform:rotate(360deg); } }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="icon">🛠️</div>
        <span class="badge">Under Maintenance</span>
        <h1>We're making things better</h1>
        <p>Our site is temporarily unavailable while we work on some improvements.</p>
        <p>We'll be back online shortly. Thank you for your patience!</p>
        <div class="divider"></div>
        <p><span class="spinner"></span>Currently updating...</p>
        <div class="footer">Rotaract District 7020</div>
      </div>
    </body>
    </html>
  `;
  return new NextResponse(html, {
    status: 503,
    headers: { "content-type": "text/html;charset=UTF-8" },
  });
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
<<<<<<< HEAD
};
=======
};
>>>>>>> 35f6e0a2885533d5e73ab153cc70965daa5b14c0
