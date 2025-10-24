# Security Checklist for Vercel Deployment

## ✅ Completed Steps

1. **Environment Variables Protected**
   - `.env*` files are in `.gitignore`
   - `.env.example` created for reference
   - `.env.local` cleared of sensitive data

2. **Vercel Configuration**
   - Environment variables added to Vercel dashboard
   - API routes properly configured to use `process.env.RESEND_API_KEY`

## 🚨 URGENT: Action Required

### Invalidate Exposed API Key
Your Resend API key was exposed in this file. Please:

1. **Go to Resend Dashboard:** https://resend.com/api-keys
2. **Delete the old key:** `re_MeMjs7eh_B3btWVeQrqGbJvPGMeZ1KWU2`
3. **Create a new API key**
4. **Update in two places:**
   - Vercel Dashboard → Settings → Environment Variables
   - Local `.env.local` file (for local development)

### Verify Vercel Environment Variables

1. **Login to Vercel:** https://vercel.com/dashboard
2. **Navigate to:** Your Project → Settings → Environment Variables
3. **Ensure this variable exists:**
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your NEW Resend API key
   - **Environment:** Production, Preview, Development (select all)

## 🔍 Verification Steps

### Test Locally (After updating .env.local)
```bash
npm run dev
```
Then test the contact form at: http://localhost:3000/contact

### Test on Vercel (After deployment)
Visit your production URL and test the contact form

## 📋 How Your Website Works on Vercel

### Environment Variable Loading
- ✅ Vercel automatically injects environment variables into `process.env`
- ✅ Your API routes use `process.env.RESEND_API_KEY`
- ✅ No code changes needed

### API Routes Using the Variable
1. `/api/send-contact` - Contact form submissions
2. `/api/send-lead` - Lead capture modal submissions

Both routes correctly access the environment variable:
```typescript
const resend = new Resend(process.env.RESEND_API_KEY);
```

## ✅ Final Checklist

- [ ] Old API key deleted from Resend
- [ ] New API key created
- [ ] New API key added to Vercel (all environments)
- [ ] New API key added to local `.env.local`
- [ ] Tested locally
- [ ] Deployed to Vercel
- [ ] Tested on production
- [ ] Confirmed `.env.local` is NOT in Git repository

## 📚 References

- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Resend API Keys](https://resend.com/api-keys)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

---
**Last Updated:** October 24, 2025
