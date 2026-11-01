/*
  =========================================================
  SCRIPT.JS
  File ini mengatur fitur interaktif:
  - Welcome screen
  - Dark/light mode
  - Mobile menu
  - Typing animation
  - Reveal on scroll
  - Portfolio tab
  - Data 3 project
  - Data 4 sertifikat
  - Data tech stack
  - Modal detail project dan sertifikat
  - WhatsApp contact form
  =========================================================
*/

/* =========================================================
   1. GANTI NOMOR WHATSAPP DI SINI
   Format wajib pakai kode negara.
   Contoh Indonesia:
   6281234567890

   Jangan pakai:
   081234567890
   +6287778297577
========================================================= */
const whatsappNumber = "6287778297577";

/* =========================================================
   2. GANTI PESAN AWAL WHATSAPP DI SINI
   Pesan ini dipakai untuk tombol Chat WhatsApp dan tombol WA melayang.
========================================================= */
const defaultWhatsappMessage =
  "Halo Ashif, saya tertarik untuk menghubungi kamu melalui portofolio.";

/* =========================================================
   3. GANTI ROLE TYPING DI SINI
   Teks ini muncul bergantian di Hero Section.
========================================================= */
const roles = [
  "Informatics Engineering Graduate",
  "Creative and Innovative",
  "Job Seeker"
];

/* =========================================================
   4. DATA PROJECT
   Jumlah project sekarang dibuat 3.

   CARA GANTI:
   - title: judul project
   - image: path gambar project
   - description: deskripsi singkat di card
   - longDescription: deskripsi panjang di modal detail
   - liveUrl: link demo; isi "#" kalau belum ada
   - sourceUrl: link GitHub; isi "#" kalau belum ada
   - technologies: teknologi yang dipakai
   - features: fitur utama project
   - stats: angka kecil di halaman detail

   SIMPAN GAMBAR DI:
   assets/images/project-1.jpg
   assets/images/project-2.jpg
   assets/images/project-3.jpg
========================================================= */
const portfolioProjects = [
  {
    title: "E-Commerce Website",
    image: "assets/images/project-1.png",
    description:
      "Website e-commerce responsif yang dikembangkan sebagai proyek akademik untuk mendukung proses penjualan dan pengelolaan produk secara online.",
    longDescription:
      "Proyek ini dikembangkan sebagai bagian dari pembelajaran di Program Studi Teknik Informatika. Website dibangun menggunakan CodeIgniter 3, PHP, MySQL, HTML, CSS, dan JavaScript dengan menerapkan konsep MVC. Sistem menyediakan fitur autentikasi pengguna, manajemen produk, keranjang belanja, checkout, dashboard administrator, serta pengelolaan database relasional. Selain pengembangan fitur, dilakukan juga proses pengujian dan pemeliharaan sistem untuk memastikan seluruh fungsi berjalan sesuai kebutuhan pengguna.",
    liveUrl: "https://ashifdieqy.github.io/E-Shop/index.html",
    sourceUrl: "#",
    technologies: ["HTML", "CSS", "JavaScript", "CodeIgniter 3", "PHP", "MySQL",],
    features: [
      "Autentikasi Pengguna (Login & Registrasi)",
    "Manajemen Produk, Kategori, dan CRUD",
    "Keranjang Belanja & Checkout",
    "Dashboard Administrator",
    "Database Relasional",
    "Responsive Web Design"
    ],
    stats: [
      { icon: "⌘", value: "6", label: "Technologies Used" },
      { icon: "▣", value: "6", label: "Key Features" }
    ]
  },
  {
    title: "Coffee Classification Using CNN",
    image: "assets/images/project-2.png",
    description:
      "Implementasi Convolutional Neural Network (CNN) untuk mengklasifikasikan jenis minuman kopi berdasarkan tampilan visual dalam cangkir.",
    longDescription:
      "Proyek tugas akhir yang bertujuan mengembangkan model Computer Vision menggunakan Convolutional Neural Network (CNN) untuk mengklasifikasikan tiga jenis minuman kopi, yaitu Americano, Cappuccino, dan Espresso berdasarkan citra visual dalam cangkir. Dataset diproses melalui tahap preprocessing, augmentasi data, pelatihan model, dan evaluasi menggunakan confusion matrix. Model berhasil mencapai tingkat akurasi yang tinggi sehingga mampu melakukan klasifikasi secara efektif.",
    liveUrl: "https://drive.google.com/file/d/13p6ge1_31vP4sczhty2bH4zZH7SJ4Adi/view?usp=sharing",
    sourceUrl: "#",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Google Colab"],
    features: [
      "Image Classification menggunakan CNN",
    "Data Preprocessing & Augmentation",
    "Model Training dan Evaluation",
    "Confusion Matrix & Accuracy Analysis",
    "Klasifikasi 3 Jenis Minuman Kopi",
    "Visualisasi Hasil Prediksi"
    ],
    stats: [
      { icon: "⌘", value: "5", label: "Technologies Used" },
      { icon: "▣", value: "6", label: "Key Features" }
    ]
  },
  {
    title: "Personal Portfolio Website",
    image: "assets/images/project-3.png",
    description:
      "Website portofolio pribadi dengan desain modern, responsif, dan interaktif untuk menampilkan profil, pengalaman, proyek, sertifikat, serta keterampilan.",
    longDescription:
      "Website ini dikembangkan sebagai media personal branding untuk memperkenalkan profil, latar belakang pendidikan, pengalaman, proyek, sertifikat, dan keterampilan secara profesional. Dibangun menggunakan HTML, CSS, dan JavaScript dengan desain antarmuka modern, animasi interaktif, efek smooth scrolling, dark mode, serta tampilan responsif sehingga dapat diakses dengan baik di berbagai perangkat.",
    liveUrl: "#",
    sourceUrl: "#",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: [
      "Desain Modern & Responsif",
    "Animasi Interaktif",
    "Dark Mode",
    "Portfolio & Project Showcase",
    "Sertifikat & Skills",
    "Kontak Terintegrasi WhatsApp"
    ],
    stats: [
      { icon: "⌘", value: "4", label: "Technologies Used" },
      { icon: "▣", value: "6", label: "Key Features" }
    ]
  },
  {
    title: "PCR Monitoring Application",
    image: "assets/images/project-4.png",
    description:
      "Aplikasi PCR Monitoring dikembangkan untuk membantu proses pemantauan proyek PCR secara terpusat di lingkungan Quality Management Control (QMC). Aplikasi ini dibuat menggunakan Microsoft Power Apps dengan Microsoft Lists sebagai sumber data untuk mempermudah pengelolaan informasi proyek, jadwal, progres, serta status pekerjaan.",
    longDescription:
      "Aplikasi PCR Monitoring dikembangkan untuk membantu proses pemantauan proyek PCR secara terpusat di lingkungan Quality Management Control (QMC) menggunakan Microsoft Power Apps dan Microsoft Lists sebagai sumber data. Aplikasi ini membantu pengelolaan informasi proyek, jadwal, progres, dan status pekerjaan melalui fitur dashboard monitoring, pengelolaan data proyek, jadwal plan dan actual, monitoring persentase progres, attachment dokumen, notifikasi keterlambatan, serta pengelolaan user dan data master agar proses monitoring menjadi lebih terstruktur, mudah dipantau, dan terdokumentasi dengan baik.",
    liveUrl: "#",
    sourceUrl: "#",
    technologies: ["Microsoft Power Apps", "Microsoft Lists", "Microsoft Excel", "Microsoft 365"],
    features: [
      "Project Monitoring Dashboard",
    "Project Management",
    "Plan & Actual Schedule",
    "Attachment Management",
    "Delay Notification",
    "User & Master Data Management",
    "Progress Monitoring"
    ],
    stats: [
      { icon: "⌘", value: "4", label: "Technologies Used" },
      { icon: "▣", value: "7", label: "Key Features" }
    ]
  }
];

/* =========================================================
   5. DATA SERTIFIKAT
   Jumlah sertifikat sekarang dibuat 4.

   CARA GANTI:
   - title: nama sertifikat
   - image: path gambar sertifikat
   - issuer: penerbit sertifikat
   - date: tahun / tanggal sertifikat
   - description: deskripsi sertifikat

   SIMPAN GAMBAR DI:
   assets/images/certificate-1.jpg
   assets/images/certificate-2.jpg
   assets/images/certificate-3.jpg
   assets/images/certificate-4.jpg

   Bisa pakai format:
   .jpg, .jpeg, .png, .webp, atau .svg
   Yang penting path di bawah sama dengan nama file.
========================================================= */
const portfolioCertificates = [
  {
    title: "Sertifikat Microsoft Azure AI Fundamentals (AI-900)",
    image: "assets/images/certificate-1.jpg",
    issuer: "Microsoft",
    date: "2024",
    description:
      "Sertifikasi Microsoft yang memvalidasi pemahaman dasar tentang Artificial Intelligence (AI), Machine Learning, Computer Vision, Natural Language Processing, serta layanan AI pada Microsoft Azure."
  },
  {
    title: "Sertifikat English Proficiency Test (TOEFL Prediction)",
    image: "assets/images/certificate-2.jpg",
    issuer: "Pusat Pelatihan Bahasa Universitas Mercu Buana Yogyakarta",
    date: "2025",
    description:
      "Sertifikat English Proficiency Test (TOEFL Prediction) dengan skor 470 yang menunjukkan kemampuan dasar bahasa Inggris dalam listening, structure, dan reading comprehension."
  },
  {
    title: "Sertifikat Praktik Kerja Lapangan (PKL)",
    image: "assets/images/certificate-3.jpg",
    issuer: "SMK Muhammadiyah 1 Klaten Utara",
    date: "2020",
    description:
      "Sertifikat Praktik Kerja Lapangan (PKL) di BIOS COMPUTER sebagai bukti pengalaman praktik pada bidang Teknik Komputer dan Jaringan, meliputi instalasi komputer, perawatan perangkat keras, troubleshooting, serta dukungan teknis dengan hasil penilaian Baik."
  },
  {
    title: "",
    image: "assets/images/certificate-4.jpg",
    issuer: "",
    date: "",
    description:
      ""
  }
];

/* =========================================================
   6. DATA TECH STACK
   Icon disimpan di assets/icons/

   Kalau belum punya icon, kamu bisa:
   - tetap pakai path ini dulu
   - atau ganti dengan file icon milikmu sendiri

   Contoh:
   { name: "HTML", icon: "assets/icons/html.svg" }
========================================================= */
const portfolioTechStack = [
  { name: "HTML", icon: "assets/icons/html.svg" },
  { name: "CSS", icon: "assets/icons/css.svg" },
  { name: "JavaScript", icon: "assets/icons/javascript.svg" },
  { name: "Microsoft Office", icon: "assets/icons/microsoft-office.svg" },
  { name: "Canva", icon: "assets/icons/canva.png" },
  { name: "CapCut", icon: "assets/icons/capcut.png" },
  { name: "Adobe Lightroom", icon: "assets/icons/adobe-lightroom.svg" },
  { name: "PHP", icon: "assets/icons/php.svg" },
  { name: "Figma", icon: "assets/icons/figma.svg" },
  { name: "Visual Studio Code", icon: "assets/icons/vscode.svg" },
  { name: "MySQL", icon: "assets/icons/mysql.svg" },
  { name: "Microsoft Power Apps", icon: "assets/icons/microsoftpowerapps.png" },
  { name: "Microsoft Lists", icon: "assets/icons/microsoftlists.png" },
  { name: "Power Bi", icon: "assets/icons/powerbi.png" }
];

/* =========================================================
   7. SELECTOR ELEMENT HTML
   Bagian ini mengambil elemen dari index.html.
   Tidak perlu diganti kecuali kamu mengganti id/class HTML.
========================================================= */
const html = document.documentElement;
const welcomeScreen = document.getElementById("welcomeScreen");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.querySelector(".theme-icon");
const cursorGlow = document.querySelector(".cursor-glow");
const typingText = document.getElementById("typingText");
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const revealElements = document.querySelectorAll(".reveal");
const animatedBg = document.getElementById("animatedBg");
const profileCard = document.getElementById("profileCard");
const contactForm = document.getElementById("contactForm");
const whatsappDirect = document.getElementById("whatsappDirect");
const floatingWhatsapp = document.getElementById("floatingWhatsapp");
const currentYear = document.getElementById("currentYear");

const portfolioTabs = document.querySelectorAll(".portfolio-tab");
const portfolioPanels = document.querySelectorAll(".portfolio-panel");
const projectList = document.getElementById("projectList");
const certificateList = document.getElementById("certificateList");
const techStackList = document.getElementById("techStackList");
const portfolioModal = document.getElementById("portfolioModal");
const modalContent = document.getElementById("modalContent");

/* =========================================================
   8. WELCOME SCREEN
   Menghilangkan loading screen setelah website selesai load.
========================================================= */
window.addEventListener("load", () => {
  if (!welcomeScreen) return;

  setTimeout(() => {
    welcomeScreen.classList.add("hide");
  }, 1400);
});

/* =========================================================
   9. CURRENT YEAR FOOTER
   Tahun footer otomatis mengikuti tahun sekarang.
========================================================= */
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* =========================================================
   10. DARK MODE / LIGHT MODE
   Tema tersimpan di localStorage.
========================================================= */
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);

  if (themeIcon) {
    themeIcon.textContent = savedTheme === "dark" ? "☾" : "☀";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);

    if (themeIcon) {
      themeIcon.textContent = nextTheme === "dark" ? "☾" : "☀";
    }
  });
}

/* =========================================================
   11. MOBILE MENU
========================================================= */
if (mobileToggle && navMenu) {
  mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileToggle) mobileToggle.classList.remove("active");
    if (navMenu) navMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

/* =========================================================
   12. CURSOR GLOW
========================================================= */
document.addEventListener("mousemove", (event) => {
  if (!cursorGlow) return;

  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

/* =========================================================
   13. TYPING ANIMATION
========================================================= */
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingText) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 55 : 95;

  if (!isDeleting && charIndex === currentRole.length) {
    typingSpeed = 1400;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 400;
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();

/* =========================================================
   14. REVEAL ON SCROLL
========================================================= */
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => element.classList.add("active"));
}

/* =========================================================
   15. ACTIVE NAV LINK SAAT SCROLL
========================================================= */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

/* =========================================================
   16. BACKGROUND PARALLAX
========================================================= */
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (animatedBg) {
    animatedBg.style.transform = `translateY(${scrollY * -0.04}px) scale(1.06)`;
  }
});

/* =========================================================
   17. PROFILE CARD TILT
========================================================= */
if (profileCard) {
  profileCard.addEventListener("mousemove", (event) => {
    const rect = profileCard.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    profileCard.style.animation = "none";
    profileCard.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  profileCard.addEventListener("mouseleave", () => {
    profileCard.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg)";

    setTimeout(() => {
      profileCard.style.animation = "floatingCard 4s ease-in-out infinite";
    }, 200);
  });
}

/* =========================================================
   18. WHATSAPP LINK
========================================================= */
function createWhatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

if (whatsappDirect) {
  whatsappDirect.href = createWhatsappLink(defaultWhatsappMessage);
  whatsappDirect.target = "_blank";
  whatsappDirect.rel = "noopener";
}

if (floatingWhatsapp) {
  floatingWhatsapp.href = createWhatsappLink(defaultWhatsappMessage);
  floatingWhatsapp.target = "_blank";
  floatingWhatsapp.rel = "noopener";
}

/* =========================================================
   19. CONTACT FORM TO WHATSAPP
========================================================= */
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const whatsappMessage =
      `Halo Ashif, saya ingin menghubungi kamu.\n\n` +
      `Nama: ${name}\n` +
      `Email: ${email}\n` +
      `Pesan: ${message}`;

    window.open(createWhatsappLink(whatsappMessage), "_blank");
    contactForm.reset();
  });
}

/* =========================================================
   20. HELPER PORTFOLIO
========================================================= */
function makeTagList(items) {
  return items.map((item) => `<span>${item}</span>`).join("");
}

function makeStats(items) {
  return items
    .map(
      (item) => `
        <div class="portfolio-stat-card">
          <span class="portfolio-stat-icon">${item.icon}</span>
          <div>
            <strong>${item.value}</strong>
            <small>${item.label}</small>
          </div>
        </div>
      `
    )
    .join("");
}

function imageErrorHandlerText() {
  return `onerror="this.style.display='none'"`;
}

/* =========================================================
   21. RENDER 3 PROJECT
========================================================= */
function renderProjects() {
  if (!projectList) return;

  projectList.innerHTML = portfolioProjects
    .map(
      (project, index) => `
        <article class="portfolio-card">
          <div class="portfolio-card-image">
            <img
              src="${project.image}"
              alt="Preview ${project.title}"
              loading="lazy"
              ${imageErrorHandlerText()}
            />
          </div>

          <div class="portfolio-card-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>

            <div class="portfolio-card-footer">
              <span class="project-link-disabled">
                ${project.liveUrl && project.liveUrl !== "#" ? "Live Demo" : "No Link"}
              </span>

              <button class="portfolio-detail-btn" type="button" data-project-index="${index}">
                Details <span>→</span>
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

/* =========================================================
   22. RENDER 4 SERTIFIKAT
========================================================= */
function renderCertificates() {
  if (!certificateList) return;

  certificateList.innerHTML = portfolioCertificates
    .map(
      (certificate, index) => `
        <article
          class="certificate-card"
          data-certificate-index="${index}"
          tabindex="0"
          role="button"
          aria-label="Lihat ${certificate.title}"
        >
          <div class="certificate-image-wrap">
            <img
              src="${certificate.image}"
              alt="${certificate.title}"
              loading="lazy"
              ${imageErrorHandlerText()}
            />
          </div>

          <h3>${certificate.title}</h3>
          <p>${certificate.issuer} • ${certificate.date}</p>
        </article>
      `
    )
    .join("");
}

/* =========================================================
   23. RENDER TECH STACK
========================================================= */
function renderTechStack() {
  if (!techStackList) return;

  techStackList.innerHTML = portfolioTechStack
    .map(
      (tech) => `
        <article class="tech-stack-card">
          <div class="tech-stack-icon">
            <img
              src="${tech.icon}"
              alt="${tech.name}"
              loading="lazy"
              ${imageErrorHandlerText()}
            />
          </div>
          <h3>${tech.name}</h3>
        </article>
      `
    )
    .join("");
}

/* =========================================================
   24. MODAL OPEN / CLOSE
========================================================= */
function openModal(content) {
  if (!portfolioModal || !modalContent) return;

  modalContent.innerHTML = content;
  portfolioModal.classList.add("active");
  portfolioModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  if (!portfolioModal || !modalContent) return;

  portfolioModal.classList.remove("active");
  portfolioModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  setTimeout(() => {
    modalContent.innerHTML = "";
  }, 250);
}

/* =========================================================
   25. DETAIL PROJECT
========================================================= */
function openProjectDetail(project) {
  const liveLink =
    project.liveUrl && project.liveUrl !== "#"
      ? `<a href="${project.liveUrl}" target="_blank" rel="noopener" class="detail-action">Live Demo</a>`
      : `<span class="detail-action disabled">No Link</span>`;

  const sourceLink =
    project.sourceUrl && project.sourceUrl !== "#"
      ? `<a href="${project.sourceUrl}" target="_blank" rel="noopener" class="detail-action">Source Code</a>`
      : `<span class="detail-action disabled">No Link</span>`;

  openModal(`
    <div class="project-detail-layout">
      <div class="project-detail-left">
        <button class="modal-back-btn" type="button" data-modal-close>← Back</button>

        <p class="detail-kicker">Project Portfolio</p>
        <h2>${project.title}</h2>
        <p>${project.longDescription}</p>

        <div class="portfolio-stat-grid">
          ${makeStats(project.stats)}
        </div>

        <div class="detail-actions">
          ${liveLink}
          ${sourceLink}
        </div>

        <div class="detail-tech-section">
          <h3>Technologies Used</h3>
          <div class="detail-tags">${makeTagList(project.technologies)}</div>
        </div>
      </div>

      <div class="project-detail-right">
        <div class="detail-preview-card">
          <img
            src="${project.image}"
            alt="Preview ${project.title}"
            ${imageErrorHandlerText()}
          />
        </div>

        <div class="detail-feature-card">
          <h3>Key Features</h3>
          <ul>
            ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `);
}

/* =========================================================
   26. DETAIL SERTIFIKAT
========================================================= */
function openCertificateDetail(certificate) {
  openModal(`
    <div class="certificate-detail-layout">
      <img
        src="${certificate.image}"
        alt="${certificate.title}"
        ${imageErrorHandlerText()}
      />

      <div class="certificate-detail-caption">
        <h2>${certificate.title}</h2>
        <p>${certificate.description}</p>
        <span>${certificate.issuer} • ${certificate.date}</span>
      </div>
    </div>
  `);
}

/* =========================================================
   27. PORTFOLIO TAB
========================================================= */
portfolioTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    portfolioTabs.forEach((item) => {
      item.classList.toggle("active", item === tab);
    });

    portfolioPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === target);
    });
  });
});

/* =========================================================
   28. EVENT CLICK UNTUK PROJECT, SERTIFIKAT, DAN MODAL
========================================================= */
document.addEventListener("click", (event) => {
  const projectButton = event.target.closest("[data-project-index]");
  const certificateCard = event.target.closest("[data-certificate-index]");
  const closeButton = event.target.closest("[data-modal-close]");

  if (projectButton) {
    const index = Number(projectButton.dataset.projectIndex);
    openProjectDetail(portfolioProjects[index]);
  }

  if (certificateCard) {
    const index = Number(certificateCard.dataset.certificateIndex);
    openCertificateDetail(portfolioCertificates[index]);
  }

  if (closeButton) {
    closeModal();
  }
});

/* =========================================================
   29. KEYBOARD SUPPORT
   Escape untuk tutup modal.
   Enter / Space untuk membuka sertifikat.
========================================================= */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }

  const certificateCard = event.target.closest?.("[data-certificate-index]");

  if (certificateCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    const index = Number(certificateCard.dataset.certificateIndex);
    openCertificateDetail(portfolioCertificates[index]);
  }
});

/* =========================================================
   30. JALANKAN RENDER PORTFOLIO
========================================================= */
renderProjects();
renderCertificates();
renderTechStack();