export const runtime = 'edge';

export const alt = 'Stake Digital Media - Premium Out-of-Home Advertising';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new Response(
    `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect width="1200" height="630" fill="#1E1E1E"/>
      
      <!-- Gradient overlay -->
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0BB4E4;stop-opacity:0.2" />
          <stop offset="100%" style="stop-color:#6DCE2E;stop-opacity:0.2" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#grad1)"/>
      
      <!-- Logo/Icon -->
      <g transform="translate(100, 200)">
        <ellipse cx="60" cy="20" rx="50" ry="18" fill="none" stroke="#0BB4E4" stroke-width="6" transform="rotate(-30 60 20)"/>
        <ellipse cx="60" cy="20" rx="50" ry="18" fill="none" stroke="#7ED957" stroke-width="6" transform="rotate(30 60 20)"/>
        <circle cx="60" cy="20" r="8" fill="#0BB4E4"/>
      </g>
      
      <!-- Text -->
      <text x="250" y="270" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="#0BB4E4">STAKE</text>
      <text x="250" y="330" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="#7ED957">DIGITAL MEDIA</text>
      
      <!-- Tagline -->
      <text x="250" y="400" font-family="Arial, sans-serif" font-size="28" fill="#ffffff">Premium Out-of-Home Advertising in South Africa</text>
      
      <!-- Features -->
      <text x="250" y="480" font-family="Arial, sans-serif" font-size="24" fill="#ffffff" opacity="0.8">✓ Digital Screens  ✓ Billboards  ✓ 2.5M+ Monthly Reach</text>
    </svg>`,
    {
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    }
  );
}
