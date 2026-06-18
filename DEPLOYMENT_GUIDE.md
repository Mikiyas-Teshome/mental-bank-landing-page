# Mental Bank Landing Page - cPanel Deployment Guide

## 🚀 Quick Deployment Steps

### 1. **Prepare Your Files**

Your static files are ready in the `out/` folder. This folder contains all the files you need to upload to your cPanel hosting.

### 2. **Access cPanel File Manager**

1. Log into your cPanel account
2. Navigate to **File Manager**
3. Go to your domain's **public_html** folder (or the folder where your website files should be)

### 3. **Upload Files**

You have two options:

#### Option A: Upload via File Manager (Recommended for small sites)

1. In cPanel File Manager, navigate to `public_html/`
2. Upload the entire contents of the `out/` folder
3. **Important:** Upload the contents OF the `out/` folder, not the `out/` folder itself

#### Option B: Upload via FTP/SFTP

1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your server using your cPanel FTP credentials
3. Navigate to `public_html/`
4. Upload all files from the `out/` folder

### 4. **File Structure After Upload**

Your `public_html/` should contain:

```
public_html/
├── index.html (your homepage)
├── terms/
│   └── index.html
├── privacy/
│   └── index.html
├── account-deletion/
│   └── index.html
├── _next/ (Next.js assets)
├── featureImage/ (your feature images)
├── bg.svg
├── heroImage.png
├── how-it-work.png
└── ... (other static assets)
```

## 📁 What to Upload

### ✅ **Upload These Files/Folders:**

- `index.html` (homepage)
- `terms/` folder and its contents
- `privacy/` folder and its contents
- `account-deletion/` folder and its contents
- `_next/` folder and all its contents
- `featureImage/` folder and all images
- All `.svg`, `.png`, `.jpg` files in the root
- `favicon.ico`

### ❌ **Don't Upload:**

- `src/` folder (source code)
- `node_modules/` folder
- `package.json` and other config files
- `.git/` folder
- Any development files

## 🔧 cPanel Specific Settings

### 1. **Set Default Document**

In cPanel, make sure `index.html` is set as the default document:

1. Go to **Indexes** in cPanel
2. Ensure `index.html` is listed and prioritized

### 2. **Enable Gzip Compression (Optional)**

1. Go to **Optimize Website** in cPanel
2. Enable compression for better performance

### 3. **Set Up SSL Certificate (Recommended)**

1. Go to **SSL/TLS** in cPanel
2. Enable SSL for your domain
3. Force HTTPS redirect

## 🌐 Domain Configuration

### For Main Domain:

- Upload files directly to `public_html/`

### For Subdomain:

- Create subdomain in cPanel
- Upload files to the subdomain's folder (e.g., `public_html/subdomain/`)

### For Addon Domain:

- Create addon domain in cPanel
- Upload files to the addon domain's folder

## 🚨 Important Notes

### 1. **File Permissions**

After upload, ensure these permissions:

- Folders: `755`
- HTML files: `644`
- Images: `644`

### 2. **URL Structure**

Your site will work with these URLs:

- `https://yourdomain.com/` (homepage)
- `https://yourdomain.com/terms/` (terms of service)
- `https://yourdomain.com/privacy/` (privacy policy)
- `https://yourdomain.com/account-deletion/` (account deletion)

### 3. **Testing**

After upload, test all pages:

- [ ] Homepage loads correctly
- [ ] Navigation links work
- [ ] All images display properly
- [ ] Terms of Service page loads
- [ ] Privacy Policy page loads
- [ ] Account Deletion page loads

## 🔄 Updating Your Site

To update your site:

1. Make changes to your source code
2. Run `npm run build` locally
3. Upload the new files from the `out/` folder to cPanel
4. Clear any caching if needed

## 🆘 Troubleshooting

### Common Issues:

**1. 404 Errors on Pages**

- Check that all folders were uploaded correctly
- Ensure `index.html` files are in each folder

**2. Images Not Loading**

- Verify all image files were uploaded
- Check file permissions (should be 644)

**3. CSS/JS Not Loading**

- Ensure the `_next/` folder was uploaded completely
- Check that all files in `_next/static/` are present

**4. Navigation Links Not Working**

- Verify trailing slashes in URLs
- Check that all page folders exist

## 📞 Support

If you encounter issues:

1. Check cPanel error logs
2. Verify file uploads completed successfully
3. Test with a simple HTML file first
4. Contact your hosting provider if needed

---

## 🎉 Success!

Once uploaded, your Mental Bank landing page will be live and accessible to users worldwide!

**Your site includes:**

- ✅ Responsive design
- ✅ Smooth scrolling navigation
- ✅ Terms of Service page
- ✅ Privacy Policy page
- ✅ Account Deletion page
- ✅ App store compliant content
- ✅ Optimized performance
