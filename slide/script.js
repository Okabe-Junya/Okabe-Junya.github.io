// Profile data
const profileData = {
  name: "Junya Okabe",
  photo: "https://avatars.githubusercontent.com/u/86868255",
  affiliation:
    "Master's student at University of Tsukuba. Majoring in computer science.",
  country: "Tsukuba, Japan",
  interests: ["Kubernetes", "Platform Engineering", "CI/CD", "SRE"],
  roles: [
    "CNCF Ambassador",
    "CNCF/glossary Maintainer",
    "Kubernetes Website Japanese localization team lead",
    "Kubernetes Upstream Training in Japan organizer",
  ],
  roleLinks: {
    "CNCF Ambassador": {
      linkText: "CNCF Ambassador",
      url: "https://www.cncf.io/people/ambassadors/",
      suffix: "",
    },
    "CNCF/glossary Maintainer": {
      linkText: "CNCF/glossary",
      url: "https://github.com/cncf/glossary",
      suffix: " Maintainer",
    },
    "Kubernetes Website Japanese localization team lead": {
      linkText: "Kubernetes Website",
      url: "https://kubernetes.io/",
      suffix: " Japanese localization team lead",
    },
    "Kubernetes Upstream Training in Japan organizer": {
      linkText: "Kubernetes Upstream Training in Japan",
      url: "https://github.com/kubernetes-sigs/contributor-playground/tree/master/japan",
      suffix: " organizer",
    },
  },
  social: {
    github: "Okabe-Junya",
    twitter: "@junya__okabe",
    linkedin: "junya-okabe",
  },
};

// Load profile data and render the slide
function loadProfileData() {
  renderSlide(profileData);
}

function renderSlide(profileData) {
  // Render profile image
  const profileImageEl = document.getElementById("profileImage");
  if (profileData.photo) {
    profileImageEl.innerHTML = `<img src="${profileData.photo}" alt="${
      profileData.name || "Profile"
    }">`;
  } else {
    // Show placeholder or first letters of name if no photo
    const initials = profileData.name
      ? profileData.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : "";
    profileImageEl.textContent = initials;
  }

  // Render name
  document.getElementById("name").textContent = profileData.name || "";

  // Build right section HTML
  const rightSection = document.getElementById("rightSection");
  let rightSectionHTML = "";

  // Affiliation
  if (profileData.affiliation) {
    rightSectionHTML += `
      <div class="info-item">
        <span class="info-label">Affiliation</span>
        <span class="info-content">${profileData.affiliation}</span>
      </div>
    `;
  }

  // Country
  if (profileData.country) {
    rightSectionHTML += `
      <div class="info-item">
        <span class="info-label">Country</span>
        <span class="info-content">${profileData.country}</span>
      </div>
    `;
  }

  // Interests
  if (profileData.interests && profileData.interests.length > 0) {
    const interestsTags = profileData.interests
      .map((interest) => `<span class="interest-tag">${interest}</span>`)
      .join("");

    rightSectionHTML += `
      <div class="info-item">
        <span class="info-label">Interests</span>
        <div class="info-content">
          <div class="interests-list">
            ${interestsTags}
          </div>
        </div>
      </div>
    `;
  }

  // Roles
  if (profileData.roles && profileData.roles.length > 0) {
    const roleItems = profileData.roles
      .map((role) => {
        const linkData = profileData.roleLinks && profileData.roleLinks[role];
        if (linkData && linkData.url) {
          return `<div class="role-item"><a href="${linkData.url}" target="_blank" rel="noopener noreferrer" class="role-link">${linkData.linkText}</a>${linkData.suffix}</div>`;
        } else {
          return `<div class="role-item">${role}</div>`;
        }
      })
      .join("");

    rightSectionHTML += `
      <div class="info-item">
        <span class="info-label">Roles</span>
        <div class="info-content">
          <div class="roles-list">
            ${roleItems}
          </div>
        </div>
      </div>
    `;
  }

  // Social Links
  let socialLinks = "";

  if (profileData.social && profileData.social.github) {
    socialLinks += `
      <a href="https://github.com/${profileData.social.github}" class="social-link">
        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        ${profileData.social.github}
      </a>
    `;
  }

  if (profileData.social && profileData.social.twitter) {
    socialLinks += `
      <a href="https://twitter.com/${profileData.social.twitter.replace(
        "@",
        ""
      )}" class="social-link">
        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        ${profileData.social.twitter}
      </a>
    `;
  }

  if (profileData.social && profileData.social.linkedin) {
    socialLinks += `
      <a href="https://linkedin.com/in/${profileData.social.linkedin}" class="social-link">
        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        ${profileData.social.linkedin}
      </a>
    `;
  }

  if (socialLinks) {
    rightSectionHTML += `
      <div class="info-item">
        <span class="info-label">Social</span>
        <div class="info-content">
          <div class="social-links">
            ${socialLinks}
          </div>
        </div>
      </div>
    `;
  }

  // Render the right section
  rightSection.innerHTML = rightSectionHTML;
}

// PDF download functionality
function downloadAsPDF() {
  const slideElement = document.querySelector(".slide");
  const downloadBtn = document.getElementById("downloadPDF");

  // Hide download button during capture
  downloadBtn.style.display = "none";

  html2canvas(slideElement, {
    scale: 2, // Higher quality
    useCORS: true,
    allowTaint: true,
    backgroundColor: "#ffffff",
  })
    .then((canvas) => {
      const { jsPDF } = window.jspdf;

      // A4 landscape dimensions (mm)
      const pdf = new jsPDF("l", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate image dimensions to fit A4
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Center the image if it's smaller than the page
      const offsetY = imgHeight < pdfHeight ? (pdfHeight - imgHeight) / 2 : 0;

      // Add image to PDF
      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        offsetY,
        imgWidth,
        imgHeight
      );

      // Download the PDF
      pdf.save(`${profileData.name.replace(/\s+/g, "_")}_Profile.pdf`);

      // Show download button again
      downloadBtn.style.display = "block";
    })
    .catch((error) => {
      console.error("Error generating PDF:", error);
      downloadBtn.style.display = "block";
      alert(
        "Error occurred during PDF generation. Please try using browser print function."
      );
    });
}

// Initialize the slide when the page loads
document.addEventListener("DOMContentLoaded", () => {
  loadProfileData();

  // Add PDF download event listener
  document
    .getElementById("downloadPDF")
    .addEventListener("click", downloadAsPDF);
});
