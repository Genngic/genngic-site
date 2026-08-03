// ---------------------------------------------------------------------------
// SITE CONFIG — edit everything here first.
// This file drives the text/links used across the whole site, so most
// "make this real" edits (email, socials, app store link) happen in one place.
// ---------------------------------------------------------------------------

export const siteConfig = {
  studioName: "Genngic",
  tagline: "Software that adapts to you.",

  appName: "Next Translate",

  // Shown in the footer and used for the mailto: link on the notify section.
  // TODO: replace with your real contact address.
  contactEmail: "genngic@gmail.com",

  // Google Play link for Next Translate. Leave empty until the app is live —
  // the "Coming soon" badge is shown instead. Once you have a link, paste it
  // here and it will be used in the hero/app section CTA.
  googlePlayUrl: "",

  // Social links — replace "#" with your real profile URLs.
  // Leave as "#" (or delete the block in Footer.jsx) to hide a specific icon.
  social: {
    twitter: "https://x.com/Genngic",
    instagram: "https://www.instagram.com/genngic/?hl=en",
    tiktok: "https://www.tiktok.com/@genngic",
  },

  // Netlify Forms endpoint name. Must match the hidden form's `name`
  // attribute in index.html AND the form name in Notify.jsx.
  notifyFormName: "notify",
};
