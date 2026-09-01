# 📸 Instagram Live API Setup Guide (@maa.mala_)

This project includes a production-ready, server-side cached Instagram API integration layer to automatically display live posts and Reels from **@maa.mala_**.

---

## 🛠️ Step-by-Step Meta / Instagram API Setup

### 1. Create a Meta for Developers App
1. Go to [Meta for Developers](https://developers.facebook.com/) and log in with your Facebook account.
2. Click **Create App** and select **Consumer** or **Business**.
3. Add the **Instagram Basic Display API** or **Instagram Graph API** product to your app.

### 2. Add @maa.mala_ as a Tester / User
1. Under **Instagram Basic Display** -> **User Token Generator**, add `@maa.mala_` as an Instagram Tester.
2. Accept the tester invitation from your Instagram account settings (**Settings > Website Permissions > Tester Invites**).

### 3. Generate Access Token
1. In Meta Developer Dashboard, click **Generate Token** next to `@maa.mala_`.
2. Copy the generated Long-Lived Access Token.

### 4. Configure Environment Variables
Create a `.env.local` file in the project root:

```env
VITE_INSTAGRAM_ACCESS_TOKEN=your_long_lived_token_here
VITE_INSTAGRAM_USER_ID=me
```

---

## 🔒 Security & Performance Features
- **Server-Side Token Privacy**: Tokens are read strictly via environment variables.
- **In-Memory & Session Caching**: API responses are cached for 10 minutes (`CACHE_TTL_MS = 600000`) to protect API rate limits.
- **Graceful Fallback**: If tokens are not provided, the feed gracefully displays curated `@maa.mala_` media without breaking the UI.
- **Direct Permalinks**: Every media card opens its authentic Instagram URL (`https://www.instagram.com/reel/...`).
