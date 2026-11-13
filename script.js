/**
 * MediCare - Premium Hospital Management Web Application
 * Vanilla JavaScript Controller & Data Store
 * strictly HTML5, CSS3, Vanilla JS, Bootstrap 5, Bootstrap Icons
 */

// ==========================================================================
// 1. Initial Sample Seed Data (Loaded to localStorage if not already set)
// ==========================================================================
const INITIAL_DOCTORS = [
  {
    id: "DOC-101",
    name: "Dr. Sarah Jenkins",
    degree: "MD, FACC - Harvard Medical",
    department: "Cardiology",
    experience: "14 Years",
    fee: 150,
    phone: "+1 (555) 234-8901",
    email: "sarah.jenkins@medicare.health",
    status: "Available",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    about: "Senior Interventional Cardiologist specializing in heart rhythm disorders, minimally invasive valve repair, and preventive coronary care."
  },
  {
    id: "DOC-102",
    name: "Dr. Alexander Chen",
    degree: "MD, Ph.D. - Johns Hopkins",
    department: "Neurology",
    experience: "16 Years",
    fee: 180,
    phone: "+1 (555) 345-6789",
    email: "alexander.chen@medicare.health",
    status: "Available",
    rating: 4.95,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    about: "Neurosurgeon and Clinical Neurologist focusing on neuro-oncology, complex spine disorders, and stroke rehabilitation."
  },
  {
    id: "DOC-103",
    name: "Dr. Elena Rostova",
    degree: "MD, FAAP - Stanford Medicine",
    department: "Pediatrics",
    experience: "11 Years",
    fee: 120,
    phone: "+1 (555) 456-7890",
    email: "elena.rostova@medicare.health",
    status: "Available",
    rating: 4.88,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1594824813587-0b5c16309855?auto=format&fit=crop&w=600&q=80",
    about: "Compassionate Pediatric Specialist dedicated to neonatal wellness, pediatric chronic care, and adolescent developmental health."
  },
  {
    id: "DOC-104",
    name: "Dr. Marcus Vance",
    degree: "MD, FAAOS - Mayo Clinic",
    department: "Orthopedics",
    experience: "18 Years",
    fee: 160,
    phone: "+1 (555) 567-8901",
    email: "marcus.vance@medicare.health",
    status: "In Surgery",
    rating: 4.85,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
    about: "Reconstructive orthopedic surgeon specializing in robotic joint replacement, sports injury trauma, and arthroscopy."
  },
  {
    id: "DOC-105",
    name: "Dr. Aisha Patel",
    degree: "MD, FAAD - Columbia University",
    department: "Dermatology",
    experience: "9 Years",
    fee: 130,
    phone: "+1 (555) 678-9012",
    email: "aisha.patel@medicare.health",
    status: "Available",
    rating: 4.92,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=600&q=80",
    about: "Clinical and aesthetic dermatologist offering advanced laser therapeutics, pediatric dermatology, and autoimmune skin treatment."
  },
  {
    id: "DOC-106",
    name: "Dr. David Sterling",
    degree: "MD, FACP - Yale School of Medicine",
    department: "General Medicine",
    experience: "21 Years",
    fee: 110,
    phone: "+1 (555) 789-0123",
    email: "david.sterling@medicare.health",
    status: "Available",
    rating: 4.9,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
    about: "Chief Internal Medicine Consultant specializing in metabolic disorders, comprehensive executive diagnostics, and preventive geriatrics."
  }
];

const INITIAL_PATIENTS = [
  {
    id: "PAT-001",
    name: "Eleanor Vance",
    age: 48,
    gender: "Female",
    phone: "+1 (555) 812-4091",
    email: "eleanor.vance@example.com",
    bloodGroup: "O+",
    condition: "Hypertension Stage 2",
    doctor: "Dr. Sarah Jenkins",
    status: "Admitted",
    admissionDate: "2026-11-10",
    address: "742 Evergreen Terrace, Springfield"
  },
  {
    id: "PAT-002",
    name: "Lucas Reynolds",
    age: 34,
    gender: "Male",
    phone: "+1 (555) 492-8812",
    email: "lucas.reynolds@example.com",
    bloodGroup: "A+",
    condition: "Post-ACL Reconstruction",
    doctor: "Dr. Marcus Vance",
    status: "Discharged",
    admissionDate: "2026-11-05",
    address: "124 Baker Street, Boston, MA"
  },
  {
    id: "PAT-003",
    name: "Sophia Martinez",
    age: 29,
    gender: "Female",
    phone: "+1 (555) 604-1299",
    email: "sophia.m@example.com",
    bloodGroup: "B+",
    condition: "Severe Migraine Aura",
    doctor: "Dr. Alexander Chen",
    status: "Outpatient",
    admissionDate: "2026-11-12",
    address: "88 Ocean Parkway, Brooklyn, NY"
  },
  {
    id: "PAT-004",
    name: "Ethan Wright",
    age: 7,
    gender: "Male",
    phone: "+1 (555) 301-7781",
    email: "wright.family@example.com",
    bloodGroup: "AB+",
    condition: "Acute Bronchitis Recovery",
    doctor: "Dr. Elena Rostova",
    status: "Admitted",
    admissionDate: "2026-11-11",
    address: "512 Pinecrest Blvd, Cambridge, MA"
  },
  {
    id: "PAT-005",
    name: "Amara Robinson",
    age: 52,
    gender: "Female",
    phone: "+1 (555) 918-3401",
    email: "amara.robinson@example.com",
    bloodGroup: "O-",
    condition: "Type 2 Diabetes Mellitus",
    doctor: "Dr. David Sterling",
    status: "Outpatient",
    admissionDate: "2026-11-08",
    address: "303 Sunset Strip, Los Angeles, CA"
  },
  {
    id: "PAT-006",
    name: "Julian Thorne",
    age: 41,
    gender: "Male",
    phone: "+1 (555) 231-6677",
    email: "julian.thorne@example.com",
    bloodGroup: "A-",
    condition: "Contact Psoriasis",
    doctor: "Dr. Aisha Patel",
    status: "Outpatient",
    admissionDate: "2026-11-09",
    address: "45 Riverfront Way, Chicago, IL"
  }
];

const INITIAL_APPOINTMENTS = [
  {
    id: "APT-2026-01",
    patientName: "Eleanor Vance",
    patientPhone: "+1 (555) 812-4091",
    doctorName: "Dr. Sarah Jenkins",
    department: "Cardiology",
    date: "2026-11-12",
    time: "09:30 AM",
    status: "Confirmed",
    reason: "Echocardiogram follow-up & BP review",
    type: "In-Person"
  },
  {
    id: "APT-2026-02",
    patientName: "Sophia Martinez",
    patientPhone: "+1 (555) 604-1299",
    doctorName: "Dr. Alexander Chen",
    department: "Neurology",
    date: "2026-11-12",
    time: "11:00 AM",
    status: "Pending",
    reason: "Brain MRI consultation",
    type: "In-Person"
  },
  {
    id: "APT-2026-03",
    patientName: "Lucas Reynolds",
    patientPhone: "+1 (555) 492-8812",
    doctorName: "Dr. Marcus Vance",
    department: "Orthopedics",
    date: "2026-11-12",
    time: "02:15 PM",
    status: "Confirmed",
    reason: "Knee physical therapy check",
    type: "Telehealth"
  },
  {
    id: "APT-2026-04",
    patientName: "Ethan Wright",
    patientPhone: "+1 (555) 301-7781",
    doctorName: "Dr. Elena Rostova",
    department: "Pediatrics",
    date: "2026-11-12",
    time: "03:45 PM",
    status: "Confirmed",
    reason: "Post-nebulizer discharge check",
    type: "In-Person"
  },
  {
    id: "APT-2026-05",
    patientName: "Amara Robinson",
    patientPhone: "+1 (555) 918-3401",
    doctorName: "Dr. David Sterling",
    department: "General Medicine",
    date: "2026-11-13",
    time: "10:00 AM",
    status: "Pending",
    reason: "HbA1c Blood Sugar Review",
    type: "In-Person"
  },
  {
    id: "APT-2026-06",
    patientName: "Julian Thorne",
    patientPhone: "+1 (555) 231-6677",
    doctorName: "Dr. Aisha Patel",
    department: "Dermatology",
    date: "2026-11-11",
    time: "04:30 PM",
    status: "Completed",
    reason: "Topical prescription follow-up",
    type: "In-Person"
  }
];

const INITIAL_INVOICES = [
  {
    id: "INV-8901",
    patientName: "Eleanor Vance",
    department: "Cardiology",
    date: "2026-11-10",
    amount: 1450,
    status: "Paid",
    method: "Credit Card",
    items: [
      { desc: "Comprehensive Cardiac Stress Test", cost: 650 },
      { desc: "Specialist Consultation (Dr. Jenkins)", cost: 150 },
      { desc: "Continuous Holter Monitor Diagnostic", cost: 650 }
    ]
  },
  {
    id: "INV-8902",
    patientName: "Lucas Reynolds",
    department: "Orthopedics",
    date: "2026-11-05",
    amount: 3200,
    status: "Paid",
    method: "Health Insurance",
    items: [
      { desc: "Robotic Arthroscopy Surgical Suite", cost: 2400 },
      { desc: "Anesthesia Services", cost: 500 },
      { desc: "Rehabilitation Orthosis Brace", cost: 300 }
    ]
  },
  {
    id: "INV-8903",
    patientName: "Sophia Martinez",
    department: "Neurology",
    date: "2026-11-12",
    amount: 850,
    status: "Pending",
    method: "Direct Debit",
    items: [
      { desc: "High-Resolution Neuro MRI Scan", cost: 670 },
      { desc: "Neurologist Consultation (Dr. Chen)", cost: 180 }
    ]
  },
  {
    id: "INV-8904",
    patientName: "Ethan Wright",
    department: "Pediatrics",
    date: "2026-11-11",
    amount: 420,
    status: "Paid",
    method: "Apple Pay",
    items: [
      { desc: "Pediatric Emergency Evaluation", cost: 200 },
      { desc: "Nebulizer Therapy Session (x2)", cost: 120 },
      { desc: "Laboratory Biomarker Panel", cost: 100 }
    ]
  },
  {
    id: "INV-8905",
    patientName: "Amara Robinson",
    department: "General Medicine",
    date: "2026-10-28",
    amount: 290,
    status: "Overdue",
    method: "Bank Transfer",
    items: [
      { desc: "Executive Health Blood Panel", cost: 180 },
      { desc: "Internal Medicine Consultation", cost: 110 }
    ]
  }
];

const INITIAL_ACTIVITIES = [
  {
    id: 1,
    icon: "bi-person-check",
    color: "badge-mint",
    title: "Patient Admitted",
    detail: "Eleanor Vance admitted to Cardiology Ward Room 304.",
    time: "15 mins ago"
  },
  {
    id: 2,
    icon: "bi-calendar-check",
    color: "badge-blue",
    title: "Appointment Confirmed",
    detail: "Sophia Martinez scheduled with Dr. Alexander Chen.",
    time: "42 mins ago"
  },
  {
    id: 3,
    icon: "bi-receipt-cutoff",
    color: "badge-lavender",
    title: "Payment Received",
    detail: "Invoice INV-8901 ($1,450.00) settled via Stripe CC.",
    time: "2 hours ago"
  },
  {
    id: 4,
    icon: "bi-heart-pulse",
    color: "badge-pink",
    title: "Surgical Case Concluded",
    detail: "Dr. Marcus Vance finished knee reconstruction surgery.",
    time: "4 hours ago"
  }
];

// ==========================================================================
// 2. LocalStorage Persistence Manager
// ==========================================================================
const DB = {
  _mem: {},
  get(key, defaultValue) {
    try {
      const data = localStorage.getItem(`medicare_${key}`);
      if (data !== null) {
        return JSON.parse(data);
      }
      return this._mem[key] !== undefined ? this._mem[key] : defaultValue;
    } catch (e) {
      console.warn("Storage read error, using memory store:", e);
      return this._mem[key] !== undefined ? this._mem[key] : defaultValue;
    }
  },
  set(key, value) {
    try {
      this._mem[key] = value;
      localStorage.setItem(`medicare_${key}`, JSON.stringify(value));
    } catch (e) {
      console.warn("Storage save error, retained in memory store:", e);
      this._mem[key] = value;
    }
  },
  init() {
    if (!localStorage.getItem("medicare_doctors")) {
      this.set("doctors", INITIAL_DOCTORS);
    }
    if (!localStorage.getItem("medicare_patients")) {
      this.set("patients", INITIAL_PATIENTS);
    }
    if (!localStorage.getItem("medicare_appointments")) {
      this.set("appointments", INITIAL_APPOINTMENTS);
    }
    if (!localStorage.getItem("medicare_invoices")) {
      this.set("invoices", INITIAL_INVOICES);
    }
    if (!localStorage.getItem("medicare_activities")) {
      this.set("activities", INITIAL_ACTIVITIES);
    }
  },
  reset() {
    this.set("doctors", INITIAL_DOCTORS);
    this.set("patients", INITIAL_PATIENTS);
    this.set("appointments", INITIAL_APPOINTMENTS);
    this.set("invoices", INITIAL_INVOICES);
    this.set("activities", INITIAL_ACTIVITIES);
    showToast("Demo data restored to initial state!", "info");
    refreshAllViews();
  }
};

// Form Draft Auto-Save Manager to prevent accidental data loss on refresh
const FormDraftManager = {
  saveDraft(formId) {
    try {
      const form = document.getElementById(formId);
      if (!form) return;
      const data = {};
      const inputs = form.querySelectorAll("input:not([type=hidden]):not([type=password]), select, textarea");
      inputs.forEach(input => {
        if (input.id && input.value) {
          data[input.id] = input.value;
        }
      });
      sessionStorage.setItem(`medicare_draft_${formId}`, JSON.stringify(data));
    } catch (e) {
      console.warn("Could not save form draft:", e);
    }
  },
  restoreDraft(formId) {
    try {
      const form = document.getElementById(formId);
      if (!form) return false;
      const raw = sessionStorage.getItem(`medicare_draft_${formId}`);
      if (!raw) return false;
      const data = JSON.parse(raw);
      let count = 0;
      Object.keys(data).forEach(id => {
        const el = document.getElementById(id);
        if (el && data[id]) {
          el.value = data[id];
          count++;
        }
      });
      return count > 0;
    } catch (e) {
      console.warn("Could not restore form draft:", e);
      return false;
    }
  },
  clearDraft(formId) {
    try {
      sessionStorage.removeItem(`medicare_draft_${formId}`);
    } catch (e) {
      // ignore
    }
  },
  initAutoSave(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener("input", () => this.saveDraft(formId));
    form.addEventListener("change", () => this.saveDraft(formId));
  }
};

// Initialize DB immediately
DB.init();

// Submission Lock & Debounce to prevent duplicate form submissions
const SubmissionLock = {
  _active: new Set(),
  acquire(key, buttonEl = null, loadingText = "Processing...") {
    if (this._active.has(key)) return false;
    this._active.add(key);
    if (buttonEl) {
      buttonEl.disabled = true;
      buttonEl.dataset.origHtml = buttonEl.innerHTML;
      buttonEl.innerHTML = `<span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span> ${loadingText}`;
    }
    return true;
  },
  release(key, buttonEl = null) {
    this._active.delete(key);
    if (buttonEl && buttonEl.dataset.origHtml) {
      buttonEl.innerHTML = buttonEl.dataset.origHtml;
      buttonEl.disabled = false;
    }
  }
};

// Staff Portal Authentication & Access Gatekeeper
function isStaffAuthenticated() {
  return sessionStorage.getItem("medicare_staff_session") === "true";
}

function openStaffAuthModal(targetTab = "dashboard") {
  window._pendingAdminTab = targetTab;
  const alertEl = document.getElementById("staffAuthAlert");
  if (alertEl) alertEl.classList.add("d-none");
  const form = document.getElementById("staffAuthForm");
  if (form) form.reset();
  const roleSelect = document.getElementById("staffRoleSelect");
  if (roleSelect) roleSelect.value = "staff";
  const passGroup = document.getElementById("staffPasscodeGroup");
  if (passGroup) passGroup.classList.remove("d-none");
  const passInput = document.getElementById("staffPasscodeInput");
  if (passInput) passInput.value = "1234";

  const modalEl = document.getElementById("staffAuthModal");
  if (modalEl) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}

function onStaffRoleChange(selectedRole) {
  const alertEl = document.getElementById("staffAuthAlert");
  const alertMsg = document.getElementById("staffAuthAlertMsg");
  const passGroup = document.getElementById("staffPasscodeGroup");

  if (selectedRole === "visitor") {
    if (passGroup) passGroup.classList.add("d-none");
    if (alertEl) alertEl.classList.remove("d-none");
    if (alertMsg) {
      alertMsg.textContent = "Notice: The Admin Portal is restricted to authorized Hospital Staff only, not for patients and visitors. Please use the public site for appointment booking and clinical inquiries.";
    }
  } else {
    if (passGroup) passGroup.classList.remove("d-none");
    if (alertEl) alertEl.classList.add("d-none");
  }
}

function handleStaffAuthSubmit(e) {
  e.preventDefault();
  const role = document.getElementById("staffRoleSelect")?.value;
  const passcode = (document.getElementById("staffPasscodeInput")?.value || "").trim();
  const alertEl = document.getElementById("staffAuthAlert");
  const alertMsg = document.getElementById("staffAuthAlertMsg");

  // If patient/visitor tries to log in
  if (role === "visitor") {
    const message = "Access Restricted: This portal is strictly for authorized Hospital Staff only, not for patients and visitors! Please use the 'Book Appointment' or 'Contact' sections for clinical care.";
    if (alertEl) {
      alertEl.classList.remove("d-none");
      if (alertMsg) alertMsg.textContent = message;
    }
    showToast(message, "danger");
    return;
  }

  // Validate staff passcode
  const validCodes = ["1234", "admin", "staff", "medicare", "doctor"];
  if (!validCodes.includes(passcode.toLowerCase())) {
    const message = "Invalid staff passcode. Access denied. Hospital Staff portal is restricted to authorized personnel only.";
    if (alertEl) {
      alertEl.classList.remove("d-none");
      if (alertMsg) alertMsg.textContent = message;
    }
    showToast(message, "danger");
    return;
  }

  // Authorized staff
  sessionStorage.setItem("medicare_staff_session", "true");
  const modalEl = document.getElementById("staffAuthModal");
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  showToast("Staff access verified. Welcome to MediCare Clinical Portal.", "success");
  proceedToAdmin(window._pendingAdminTab || "dashboard");
}

function logoutStaff() {
  sessionStorage.removeItem("medicare_staff_session");
  DB.set("active_view", "public");
  switchMainView("public");
  showToast("You have been signed out from the Hospital Staff Portal.", "info");
}

// ==========================================================================
// 3. Navigation & View Controller
// ==========================================================================
let currentPortalTab = "dashboard";

function switchMainView(targetView) {
  if (targetView === "admin") {
    if (!isStaffAuthenticated()) {
      openStaffAuthModal("dashboard");
      return;
    }
    proceedToAdmin();
  } else {
    proceedToPublic();
  }
}

function proceedToAdmin(targetTab = null) {
  const publicView = document.getElementById("public-view");
  const adminView = document.getElementById("admin-view");
  const publicNavbar = document.querySelector(".public-navbar");

  DB.set("active_view", "admin");
  publicView.classList.add("d-none");
  if (publicNavbar) publicNavbar.classList.add("d-none");
  adminView.classList.remove("d-none");
  window.scrollTo({ top: 0, behavior: "smooth" });

  const tab = targetTab || DB.get("active_tab", "dashboard") || "dashboard";
  switchAdminTab(tab);
  renderDashboardCharts();
}

function proceedToPublic() {
  const publicView = document.getElementById("public-view");
  const adminView = document.getElementById("admin-view");
  const publicNavbar = document.querySelector(".public-navbar");

  DB.set("active_view", "public");
  adminView.classList.add("d-none");
  publicView.classList.remove("d-none");
  if (publicNavbar) publicNavbar.classList.remove("d-none");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function switchAdminTab(tabName) {
  currentPortalTab = tabName;
  DB.set("active_tab", tabName);

  // Update sidebar active state
  document.querySelectorAll(".sidebar-nav-link").forEach(link => {
    if (link.dataset.tab === tabName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Hide all tab panes
  document.querySelectorAll(".admin-tab-pane").forEach(pane => {
    pane.classList.remove("active-view");
  });

  // Show active tab pane
  const targetPane = document.getElementById(`tab-${tabName}`);
  if (targetPane) {
    targetPane.classList.add("active-view");
  }

  // Close mobile sidebar if open
  closeMobileSidebar();

  // Tab specific updates
  if (tabName === "dashboard") {
    updateDashboardStats();
    renderRecentAppointmentsTable();
    renderActivityFeed();
    setTimeout(renderDashboardCharts, 100);
  } else if (tabName === "patients") {
    renderPatientsTable();
  } else if (tabName === "doctors") {
    renderDoctorsGrid();
  } else if (tabName === "appointments") {
    renderAppointmentsTable();
  } else if (tabName === "billing") {
    renderBillingTable();
  } else if (tabName === "reports") {
    setTimeout(renderReportsCharts, 100);
  }
}

function toggleMobileSidebar() {
  const sidebar = document.querySelector(".admin-sidebar");
  if (sidebar) {
    sidebar.classList.toggle("show-sidebar-mobile");
  }
}

function closeMobileSidebar() {
  const sidebar = document.querySelector(".admin-sidebar");
  if (sidebar) {
    sidebar.classList.remove("show-sidebar-mobile");
  }
}

// ==========================================================================
// 4. Toast Notification System
// ==========================================================================
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toastEl = document.createElement("div");
  toastEl.className = "toast-custom";

  let iconClass = "bi-check-circle-fill text-success";
  let bgClass = "var(--pastel-mint)";
  if (type === "error" || type === "danger") {
    iconClass = "bi-x-circle-fill text-danger";
    bgClass = "var(--pastel-pink)";
  } else if (type === "info") {
    iconClass = "bi-info-circle-fill text-primary";
    bgClass = "var(--pastel-blue)";
  } else if (type === "warning") {
    iconClass = "bi-exclamation-triangle-fill text-warning";
    bgClass = "var(--pastel-cream)";
  }

  toastEl.style.borderLeft = `5px solid ${type === 'error' ? '#E11D48' : '#0E9F6E'}`;
  toastEl.innerHTML = `
    <i class="bi ${iconClass} fs-5"></i>
    <div class="flex-grow-1">
      <div class="fw-bold" style="font-size: 0.9rem;">${type.toUpperCase()}</div>
      <div style="font-size: 0.85rem; color: var(--text-secondary);">${message}</div>
    </div>
    <button type="button" class="btn-close ms-2" style="font-size: 0.75rem;" onclick="this.parentElement.remove()"></button>
  `;

  container.appendChild(toastEl);

  setTimeout(() => {
    toastEl.style.opacity = "0";
    toastEl.style.transform = "translateX(50px)";
    setTimeout(() => toastEl.remove(), 300);
  }, 4000);
}

// --------------------------------------------------------------------------
// Form Validation & Secure Input Helpers (XSS Prevention)
// --------------------------------------------------------------------------
function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeInput(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim();
}

function isValidEmail(email) {
  if (!email || typeof email !== "string") return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return re.test(email.trim());
}

function isValidPhone(phone) {
  if (!phone || typeof phone !== "string") return false;
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

// ==========================================================================
// 5. Dashboard Stats & Calculations
// ==========================================================================
function updateDashboardStats() {
  const patients = DB.get("patients", []);
  const doctors = DB.get("doctors", []);
  const appointments = DB.get("appointments", []);
  const invoices = DB.get("invoices", []);

  // Dynamic welcome date matching current system date
  const now = new Date();
  const welcomeDateEl = document.getElementById("dashboard-welcome-date");
  if (welcomeDateEl) {
    const dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    welcomeDateEl.textContent = now.toLocaleDateString("en-US", dateOptions);
  }

  // Total patients
  const patientStat = document.getElementById("stat-total-patients");
  if (patientStat) patientStat.textContent = patients.length;

  const patientSub = document.getElementById("stat-patients-sub");
  if (patientSub) {
    const admitted = patients.filter(p => p.status === "Admitted").length;
    patientSub.innerHTML = `<i class="bi bi-hospital me-1"></i>${admitted} currently admitted`;
  }

  // Total doctors
  const doctorStat = document.getElementById("stat-total-doctors");
  if (doctorStat) doctorStat.textContent = doctors.length;

  const doctorSub = document.getElementById("stat-doctors-sub");
  if (doctorSub) {
    const availableDocs = doctors.filter(d => d.status === "Available").length;
    doctorSub.innerHTML = `<i class="bi bi-check-circle-fill me-1"></i>${availableDocs} of ${doctors.length} on duty`;
  }

  // Today's appointments (filter strictly by current local system date, no total fallback)
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const todayDate = `${yyyy}-${mm}-${dd}`;

  const todayApts = appointments.filter(a => a.date === todayDate);
  const aptStat = document.getElementById("stat-today-appointments");
  if (aptStat) aptStat.textContent = todayApts.length;

  const aptSub = document.getElementById("stat-appointments-sub");
  if (aptSub) {
    const count = todayApts.length;
    const label = count === 1 ? "1 appointment today" : `${count} appointments today`;
    aptSub.innerHTML = `<i class="bi bi-clock-history me-1"></i>${label}`;
  }

  // Total Revenue (strictly Paid invoices only)
  const paidInvoices = invoices.filter(inv => inv.status === "Paid");
  const totalRev = paidInvoices.reduce((sum, inv) => sum + (Number(inv.amount) || 0), 0);
  const revStat = document.getElementById("stat-total-revenue");
  if (revStat) revStat.textContent = `$${totalRev.toLocaleString()}`;

  const revSub = document.getElementById("stat-revenue-sub");
  if (revSub) {
    revSub.innerHTML = `<i class="bi bi-receipt me-1"></i>From ${paidInvoices.length} paid invoices`;
  }
}

function renderRecentAppointmentsTable() {
  const appointments = DB.get("appointments", []);
  const tbody = document.getElementById("dashboard-recent-appointments-body");
  if (!tbody) return;

  tbody.innerHTML = "";
  const recent = appointments.slice(0, 5);

  if (recent.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted">No appointments recorded yet.</td></tr>`;
    return;
  }

  recent.forEach(apt => {
    const safePatient = escapeHtml(apt.patientName);
    const safePhone = escapeHtml(apt.patientPhone || 'N/A');
    const safeDoctor = escapeHtml(apt.doctorName);
    const safeDept = escapeHtml(apt.department);
    const safeDate = escapeHtml(apt.date);
    const safeTime = escapeHtml(apt.time);
    const safeId = escapeHtml(apt.id);
    const statusClass = getStatusClass(apt.status);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="fw-bold">${safeId}</span></td>
      <td>
        <div class="fw-semibold">${safePatient}</div>
        <div class="small text-muted">${safePhone}</div>
      </td>
      <td>
        <div>${safeDoctor}</div>
        <span class="badge-pill-pastel badge-blue" style="font-size: 0.72rem; padding: 2px 8px;">${safeDept}</span>
      </td>
      <td>
        <div>${safeDate}</div>
        <div class="small text-muted">${safeTime}</div>
      </td>
      <td>
        <span class="status-badge ${statusClass}">${escapeHtml(apt.status)}</span>
      </td>
      <td>
        <div class="d-flex gap-1">
          <button class="btn-table-action" title="Mark Completed" onclick="quickUpdateAppointmentStatus('${safeId}', 'Completed')">
            <i class="bi bi-check2"></i>
          </button>
          <button class="btn-table-action btn-delete" title="Cancel Appointment" onclick="quickUpdateAppointmentStatus('${safeId}', 'Cancelled')">
            <i class="bi bi-x"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function renderActivityFeed() {
  const activities = DB.get("activities", []);
  const container = document.getElementById("dashboard-activity-feed");
  if (!container) return;

  container.innerHTML = "";
  activities.forEach(act => {
    const div = document.createElement("div");
    div.className = "activity-item";
    div.innerHTML = `
      <div class="activity-dot-circle ${escapeHtml(act.color)}">
        <i class="bi ${escapeHtml(act.icon)}"></i>
      </div>
      <div>
        <div class="fw-semibold" style="font-size: 0.92rem;">${escapeHtml(act.title)}</div>
        <div class="text-secondary" style="font-size: 0.85rem;">${escapeHtml(act.detail)}</div>
        <div class="text-muted" style="font-size: 0.75rem; margin-top: 2px;">${escapeHtml(act.time)}</div>
      </div>
    `;
    container.appendChild(div);
  });
}

function logActivity(icon, color, title, detail) {
  const activities = DB.get("activities", []);
  activities.unshift({
    id: Date.now(),
    icon,
    color,
    title,
    detail,
    time: "Just now"
  });
  if (activities.length > 8) activities.pop();
  DB.set("activities", activities);
  renderActivityFeed();
}

function getStatusClass(status) {
  switch (String(status).toLowerCase()) {
    case "confirmed":
    case "admitted":
    case "paid":
    case "available":
    case "active":
      return "status-confirmed";
    case "pending":
    case "outpatient":
    case "in surgery":
      return "status-pending";
    case "completed":
    case "discharged":
      return "status-completed";
    case "cancelled":
    case "overdue":
    case "on leave":
    case "inactive":
      return "status-cancelled";
    default:
      return "status-pending";
  }
}

// ==========================================================================
// 6. Pure HTML5 Canvas Interactive Charts (No external libraries!)
// ==========================================================================
function renderDashboardCharts() {
  renderWeeklyChart();
  renderDepartmentDonut();
}

function renderWeeklyChart() {
  const canvas = document.getElementById("appointmentsChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Handle Retina resolution
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = 260 * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = 260;
  ctx.clearRect(0, 0, w, h);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const appointmentsData = [24, 38, 42, 35, 52, 28, 18];
  const admissionsData = [8, 12, 16, 11, 19, 9, 6];
  const maxVal = 60;

  const paddingLeft = 40;
  const paddingBottom = 35;
  const chartW = w - paddingLeft - 20;
  const chartH = h - paddingBottom - 20;

  // Draw subtle grid lines
  ctx.strokeStyle = "#E8ECEF";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = 20 + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(paddingLeft, y);
    ctx.lineTo(w - 20, y);
    ctx.stroke();

    // Y Axis labels
    ctx.fillStyle = "#8F9CAE";
    ctx.font = "11px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "right";
    const labelVal = Math.round(maxVal - (maxVal / 4) * i);
    ctx.fillText(labelVal, paddingLeft - 8, y + 4);
  }

  // Draw Dual Column Bars
  const barGroupWidth = chartW / days.length;
  const barWidth = Math.min(16, barGroupWidth * 0.28);

  days.forEach((day, idx) => {
    const groupX = paddingLeft + idx * barGroupWidth + (barGroupWidth - barWidth * 2 - 6) / 2;

    // Bar 1: Appointments (Pastel Blue to Navy)
    const val1 = appointmentsData[idx];
    const barHeight1 = (val1 / maxVal) * chartH;
    const y1 = 20 + chartH - barHeight1;

    ctx.fillStyle = "#1C5D99";
    roundRect(ctx, groupX, y1, barWidth, barHeight1, 4);

    // Bar 2: Admissions (Mint Green)
    const val2 = admissionsData[idx];
    const barHeight2 = (val2 / maxVal) * chartH;
    const y2 = 20 + chartH - barHeight2;

    ctx.fillStyle = "#0E9F6E";
    roundRect(ctx, groupX + barWidth + 6, y2, barWidth, barHeight2, 4);

    // X Axis Label
    ctx.fillStyle = "#5C6B7E";
    ctx.font = "600 12px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(day, groupX + barWidth + 3, h - 10);
  });
}

function renderDepartmentDonut() {
  const canvas = document.getElementById("departmentDonutChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = 260 * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = 260;
  ctx.clearRect(0, 0, w, h);

  const data = [
    { label: "Cardiology", value: 34, color: "#1C5D99" },
    { label: "Neurology", value: 22, color: "#6C5CE7" },
    { label: "Pediatrics", value: 18, color: "#0E9F6E" },
    { label: "Orthopedics", value: 16, color: "#D97706" },
    { label: "General & Derm", value: 10, color: "#E11D48" }
  ];

  const total = data.reduce((acc, d) => acc + d.value, 0);
  const centerX = w / 2;
  const centerY = h / 2 - 10;
  const outerRadius = 85;
  const innerRadius = 55;

  let startAngle = -Math.PI / 2;

  data.forEach(slice => {
    const sliceAngle = (slice.value / total) * (Math.PI * 2);
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, startAngle, startAngle + sliceAngle);
    ctx.arc(centerX, centerY, innerRadius, startAngle + sliceAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = slice.color;
    ctx.fill();

    startAngle += sliceAngle;
  });

  // Donut center text
  ctx.fillStyle = "#27364B";
  ctx.font = "bold 20px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("100%", centerX, centerY + 2);
  ctx.fillStyle = "#8F9CAE";
  ctx.font = "11px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Clinical Share", centerX, centerY + 18);
}

function renderReportsCharts() {
  const canvas = document.getElementById("revenueTrendChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = 280 * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = 280;
  ctx.clearRect(0, 0, w, h);

  const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
  const revenue = [42000, 56000, 61000, 58000, 72000, 84500];
  const max = 100000;

  const padLeft = 60;
  const padBottom = 35;
  const chartW = w - padLeft - 20;
  const chartH = h - padBottom - 20;

  // Grid
  ctx.strokeStyle = "#E8ECEF";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = 20 + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(w - 20, y);
    ctx.stroke();

    ctx.fillStyle = "#8F9CAE";
    ctx.font = "11px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(`$${(100 - i * 25)}k`, padLeft - 10, y + 4);
  }

  // Draw smooth gradient curve
  const points = months.map((m, i) => ({
    x: padLeft + (chartW / (months.length - 1)) * i,
    y: 20 + chartH - (revenue[i] / max) * chartH
  }));

  // Create gradient area
  const gradient = ctx.createLinearGradient(0, 20, 0, 20 + chartH);
  gradient.addColorStop(0, "rgba(28, 93, 153, 0.28)");
  gradient.addColorStop(1, "rgba(28, 93, 153, 0.0)");

  ctx.beginPath();
  ctx.moveTo(points[0].x, 20 + chartH);
  ctx.lineTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.lineTo(points[points.length - 1].x, 20 + chartH);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Draw stroke line
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.strokeStyle = "#1C5D99";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Draw point circles
  points.forEach((p, idx) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#1C5D99";
    ctx.stroke();

    // Month label
    ctx.fillStyle = "#5C6B7E";
    ctx.font = "600 12px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(months[idx], p.x, h - 10);
  });
}

function roundRect(ctx, x, y, width, height, radius) {
  if (height <= 0) return;
  if (radius > height / 2) radius = height / 2;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
}

// ==========================================================================
// 7. Patient Management (CRUD)
// ==========================================================================
function renderPatientsTable() {
  const patients = DB.get("patients", []);
  const tbody = document.getElementById("patients-table-body");
  if (!tbody) return;

  const searchInput = document.getElementById("patientSearchInput");
  const filterGender = document.getElementById("patientFilterGender");
  const filterStatus = document.getElementById("patientFilterStatus");

  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const gender = filterGender ? filterGender.value : "";
  const status = filterStatus ? filterStatus.value : "";

  const filtered = patients.filter(p => {
    const matchQuery = !query ||
      p.name.toLowerCase().includes(query) ||
      p.id.toLowerCase().includes(query) ||
      (p.condition && p.condition.toLowerCase().includes(query)) ||
      (p.doctor && p.doctor.toLowerCase().includes(query));

    const matchGender = !gender || p.gender === gender;
    const matchStatus = !status || p.status === status;

    return matchQuery && matchGender && matchStatus;
  });

  tbody.innerHTML = "";

  const countBadge = document.getElementById("patients-count-badge");
  if (countBadge) countBadge.textContent = `${filtered.length} Patients`;

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="text-center py-5 text-muted">
      <i class="bi bi-people display-6 d-block mb-2 text-secondary"></i>
      No patient records found matching your filters.
    </td></tr>`;
    return;
  }

  filtered.forEach(pat => {
    const safeName = escapeHtml(pat.name);
    const safeEmail = escapeHtml(pat.email || 'No email registered');
    const safePhone = escapeHtml(pat.phone);
    const safeCondition = escapeHtml(pat.condition || 'General Routine');
    const safeDoctor = escapeHtml(pat.doctor || 'Unassigned');
    const safeBlood = escapeHtml(pat.bloodGroup || 'N/A');
    const safeId = escapeHtml(pat.id);

    const initials = pat.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
    const avatarColor = pat.gender === "Female" ? "background-color: var(--pastel-pink); color: var(--pastel-pink-dark);" : "background-color: var(--pastel-blue); color: var(--pastel-blue-dark);";
    const statusClass = getStatusClass(pat.status);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="fw-bold">${safeId}</span></td>
      <td>
        <div class="d-flex align-items-center gap-3">
          <div class="patient-avatar-box" style="${avatarColor}">${initials}</div>
          <div>
            <div class="fw-bold text-dark">${safeName}</div>
            <div class="small text-muted">${safeEmail}</div>
          </div>
        </div>
      </td>
      <td>${Number(pat.age)} yrs / ${escapeHtml(pat.gender)}</td>
      <td>
        <div>${safePhone}</div>
        <span class="badge-pill-pastel badge-cream py-0 px-2" style="font-size: 0.7rem;">Blood: ${safeBlood}</span>
      </td>
      <td>
        <div class="fw-semibold text-truncate" style="max-width: 180px;">${safeCondition}</div>
        <div class="small text-muted">${safeDoctor}</div>
      </td>
      <td>
        <span class="status-badge ${statusClass}">${escapeHtml(pat.status)}</span>
      </td>
      <td>
        <div class="d-flex gap-1">
          <button class="btn-table-action" title="View Patient Profile" onclick="viewPatientDetails('${safeId}')">
            <i class="bi bi-eye"></i>
          </button>
          <button class="btn-table-action" title="Edit Patient" onclick="openPatientModal('${safeId}')">
            <i class="bi bi-pencil"></i>
          </button>
          <button class="btn-table-action btn-delete" title="Delete Patient" onclick="deletePatientRecord('${safeId}')">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openPatientModal(patientId = null) {
  const form = document.getElementById("patientForm");
  if (!form) return;
  form.reset();

  const titleEl = document.getElementById("patientModalTitle");
  const idInput = document.getElementById("patientIdHidden");

  // Populate doctor select options dynamically
  const doctors = DB.get("doctors", []);
  const docSelect = document.getElementById("patDoctorInput");
  if (docSelect) {
    docSelect.innerHTML = `<option value="">Select Primary Physician</option>` +
      doctors.map(d => `<option value="${d.name}">${d.name} (${d.department})</option>`).join("");
  }

  if (patientId) {
    const patients = DB.get("patients", []);
    const pat = patients.find(p => p.id === patientId);
    if (pat) {
      if (titleEl) titleEl.textContent = "Edit Patient Record";
      idInput.value = pat.id;
      document.getElementById("patNameInput").value = pat.name;
      document.getElementById("patAgeInput").value = pat.age;
      document.getElementById("patGenderInput").value = pat.gender;
      document.getElementById("patBloodInput").value = pat.bloodGroup || "O+";
      document.getElementById("patPhoneInput").value = pat.phone;
      document.getElementById("patEmailInput").value = pat.email || "";
      document.getElementById("patConditionInput").value = pat.condition || "";
      document.getElementById("patDoctorInput").value = pat.doctor || "";
      document.getElementById("patStatusInput").value = pat.status;
      document.getElementById("patAddressInput").value = pat.address || "";
    }
  } else {
    if (titleEl) titleEl.textContent = "Add New Patient Record";
    idInput.value = "";
    if (FormDraftManager.restoreDraft("patientForm")) {
      showToast("Restored your unsaved patient form draft.", "info");
    }
  }

  const modalEl = document.getElementById("patientModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function savePatientForm(e) {
  e.preventDefault();
  try {
    const form = document.getElementById("patientForm");
    if (!form) return;

    const id = (document.getElementById("patientIdHidden")?.value || "").trim();
    const name = sanitizeInput((document.getElementById("patNameInput")?.value || "").trim());
    const ageRaw = document.getElementById("patAgeInput")?.value;
    const age = Number(ageRaw);
    const gender = sanitizeInput(document.getElementById("patGenderInput")?.value);
    const bloodGroup = sanitizeInput(document.getElementById("patBloodInput")?.value);
    const phone = sanitizeInput((document.getElementById("patPhoneInput")?.value || "").trim());
    const email = sanitizeInput((document.getElementById("patEmailInput")?.value || "").trim());
    const condition = sanitizeInput((document.getElementById("patConditionInput")?.value || "").trim());
    const doctor = sanitizeInput(document.getElementById("patDoctorInput")?.value);
    const status = sanitizeInput(document.getElementById("patStatusInput")?.value);
    const address = sanitizeInput((document.getElementById("patAddressInput")?.value || "").trim());

    if (!name) {
      showToast("Please enter the patient's full name.", "warning");
      form.classList.add("was-validated");
      document.getElementById("patNameInput")?.focus();
      return;
    }

    if (isNaN(age) || age < 0 || age > 130 || ageRaw === "") {
      showToast("Please enter a valid patient age between 0 and 130.", "warning");
      form.classList.add("was-validated");
      document.getElementById("patAgeInput")?.focus();
      return;
    }

    if (!gender) {
      showToast("Please select the patient's gender.", "warning");
      form.classList.add("was-validated");
      return;
    }

    if (!phone || !isValidPhone(phone)) {
      showToast("Please provide a valid contact phone number (at least 7 digits).", "warning");
      form.classList.add("was-validated");
      document.getElementById("patPhoneInput")?.focus();
      return;
    }

    if (email && !isValidEmail(email)) {
      showToast("Please enter a valid email address.", "warning");
      form.classList.add("was-validated");
      document.getElementById("patEmailInput")?.focus();
      return;
    }

    if (!doctor) {
      showToast("Please assign a primary attending physician.", "warning");
      form.classList.add("was-validated");
      document.getElementById("patDoctorInput")?.focus();
      return;
    }

    // Duplicate validation: check if another patient has identical phone or email
    const patients = DB.get("patients", []);
    const dupPhone = patients.find(p => p.id !== id && phone && p.phone === phone);
    if (dupPhone) {
      showToast(`A patient record with phone "${phone}" already exists (${dupPhone.name}, ID: ${dupPhone.id}).`, "warning");
      form.classList.add("was-validated");
      document.getElementById("patPhoneInput")?.focus();
      return;
    }
    const dupEmail = patients.find(p => p.id !== id && email && p.email && p.email.toLowerCase() === email.toLowerCase());
    if (dupEmail) {
      showToast(`A patient record with email "${email}" already exists (${dupEmail.name}, ID: ${dupEmail.id}).`, "warning");
      form.classList.add("was-validated");
      document.getElementById("patEmailInput")?.focus();
      return;
    }

    const submitBtn = form.querySelector("button[type=submit]");
    if (!SubmissionLock.acquire("patientForm", submitBtn, "Saving...")) return;

    let updatedPatients = [...patients];

    if (id) {
      // Update existing
      updatedPatients = updatedPatients.map(p => {
        if (p.id === id) {
          return { ...p, name, age, gender, bloodGroup, phone, email, condition, doctor, status, address };
        }
        return p;
      });
      showToast(`Patient record for ${name} updated successfully.`);
      logActivity("bi-pencil-square", "badge-blue", "Patient Updated", `${name}'s medical chart was updated.`);
    } else {
      // Create new
      const newId = `PAT-${String(updatedPatients.length + 1).padStart(3, "0")}`;
      const now = new Date();
      const curYear = now.getFullYear();
      const curMonth = String(now.getMonth() + 1).padStart(2, "0");
      const curDay = String(now.getDate()).padStart(2, "0");
      const newPatient = {
        id: newId,
        name,
        age,
        gender,
        bloodGroup,
        phone,
        email,
        condition,
        doctor,
        status,
        address,
        admissionDate: `${curYear}-${curMonth}-${curDay}`
      };
      updatedPatients.unshift(newPatient);
      showToast(`New patient ${name} registered with ID ${newId}.`);
      logActivity("bi-person-plus", "badge-mint", "New Patient Registered", `${name} was admitted to records.`);
    }

    DB.set("patients", updatedPatients);
    FormDraftManager.clearDraft("patientForm");

    const modalEl = document.getElementById("patientModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();

    renderPatientsTable();
    updateDashboardStats();
    setTimeout(() => SubmissionLock.release("patientForm", submitBtn), 500);
  } catch (err) {
    console.error("Error saving patient:", err);
    showToast("An unexpected error occurred while saving the patient record.", "error");
  }
}

function viewPatientDetails(patientId) {
  const patients = DB.get("patients", []);
  const pat = patients.find(p => p.id === patientId);
  if (!pat) return;

  const content = document.getElementById("patientViewModalContent");
  if (!content) return;

  const statusClass = getStatusClass(pat.status);
  const initials = pat.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();

  content.innerHTML = `
    <div class="text-center pb-3 border-bottom">
      <div class="patient-avatar-box mx-auto mb-2" style="width: 64px; height: 64px; font-size: 1.5rem; background: var(--pastel-blue); color: var(--brand-primary);">
        ${initials}
      </div>
      <h4 class="fw-bold mb-1">${escapeHtml(pat.name)}</h4>
      <div class="text-muted small">Record ID: ${escapeHtml(pat.id)}</div>
      <span class="status-badge ${statusClass} mt-2">${escapeHtml(pat.status)}</span>
    </div>
    <div class="row g-3 mt-2">
      <div class="col-6">
        <label class="small text-muted">Age / Gender</label>
        <div class="fw-semibold">${Number(pat.age)} Years (${escapeHtml(pat.gender)})</div>
      </div>
      <div class="col-6">
        <label class="small text-muted">Blood Group</label>
        <div class="fw-semibold text-danger">${escapeHtml(pat.bloodGroup || 'Not Recorded')}</div>
      </div>
      <div class="col-6">
        <label class="small text-muted">Contact Phone</label>
        <div class="fw-semibold">${escapeHtml(pat.phone)}</div>
      </div>
      <div class="col-6">
        <label class="small text-muted">Email Address</label>
        <div class="fw-semibold text-truncate">${escapeHtml(pat.email || 'N/A')}</div>
      </div>
      <div class="col-12">
        <label class="small text-muted">Primary Diagnosed Condition</label>
        <div class="p-2 rounded bg-light border fw-semibold text-primary">${escapeHtml(pat.condition || 'General Checkup')}</div>
      </div>
      <div class="col-6">
        <label class="small text-muted">Assigned Physician</label>
        <div class="fw-semibold">${escapeHtml(pat.doctor || 'Unassigned')}</div>
      </div>
      <div class="col-6">
        <label class="small text-muted">Admission Date</label>
        <div class="fw-semibold">${escapeHtml(pat.admissionDate || '2026-11-12')}</div>
      </div>
      <div class="col-12">
        <label class="small text-muted">Residential Address</label>
        <div class="text-secondary small">${escapeHtml(pat.address || 'Address on file')}</div>
      </div>
    </div>
  `;

  const modalEl = document.getElementById("patientViewModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function deletePatientRecord(patientId) {
  if (!confirm(`Are you sure you want to permanently delete patient ${patientId}?`)) return;

  let patients = DB.get("patients", []);
  const target = patients.find(p => p.id === patientId);
  patients = patients.filter(p => p.id !== patientId);
  DB.set("patients", patients);

  showToast(`Patient record ${patientId} deleted.`, "danger");
  if (target) {
    logActivity("bi-trash", "badge-pink", "Patient Deleted", `Record for ${target.name} was removed.`);
  }

  renderPatientsTable();
  updateDashboardStats();
}

// ==========================================================================
// 8. Doctor Management (CRUD)
// ==========================================================================
function renderDoctorsGrid() {
  const doctors = DB.get("doctors", []);
  const container = document.getElementById("doctors-cards-grid");
  if (!container) return;

  const searchInput = document.getElementById("doctorSearchInput");
  const filterDept = document.getElementById("doctorFilterDept");

  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const dept = filterDept ? filterDept.value : "";

  const filtered = doctors.filter(d => {
    const matchQuery = !query ||
      d.name.toLowerCase().includes(query) ||
      d.department.toLowerCase().includes(query) ||
      (d.degree && d.degree.toLowerCase().includes(query));

    const matchDept = !dept || d.department === dept;

    return matchQuery && matchDept;
  });

  container.innerHTML = "";

  const countBadge = document.getElementById("doctors-count-badge");
  if (countBadge) countBadge.textContent = `${filtered.length} Specialists`;

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-12 text-center py-5 text-muted">
      <i class="bi bi-person-x display-6 d-block mb-2 text-secondary"></i>
      No doctors found matching your criteria.
    </div>`;
    return;
  }

  filtered.forEach(doc => {
    const safeName = escapeHtml(doc.name);
    const safeDept = escapeHtml(doc.department);
    const safeDegree = escapeHtml(doc.degree);
    const safeExp = escapeHtml(doc.experience);
    const safeAbout = escapeHtml(doc.about || 'Dedicated clinical practitioner focused on high-standard patient care.');
    const safeId = escapeHtml(doc.id);
    const safeStatus = escapeHtml(doc.status);

    const isAvail = doc.status === "Available";
    const statusBg = isAvail ? "background: #DFF3EA; color: #0E9F6E;" : "background: #FFF4E5; color: #D97706;";

    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6";
    col.innerHTML = `
      <div class="doctor-card">
        <div class="doctor-img-wrap">
          <img src="${doc.image}" alt="Portrait of ${safeName}, Specialist in ${safeDept}" loading="lazy">
          <span class="doctor-dept-pill">${safeDept}</span>
          <span class="doctor-availability-pill" style="${statusBg}">
            <i class="bi bi-circle-fill me-1" style="font-size: 0.5rem;"></i>${safeStatus}
          </span>
        </div>
        <div class="doctor-body">
          <div>
            <div class="d-flex justify-content-between align-items-start mb-1">
              <h5 class="doctor-name mb-0">${safeName}</h5>
              <div class="doctor-rating">
                <i class="bi bi-star-fill"></i> ${Number(doc.rating) || 5.0}
              </div>
            </div>
            <div class="doctor-sub">${safeDegree}</div>
            <p class="small text-secondary mb-3" style="line-height: 1.5; height: 42px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
              ${safeAbout}
            </p>
            <div class="d-flex justify-content-between align-items-center py-2 px-3 rounded bg-light border mb-3 small">
              <span class="text-muted"><i class="bi bi-briefcase me-1"></i> ${safeExp}</span>
              <span class="fw-bold text-primary"><i class="bi bi-cash me-1"></i> $${Number(doc.fee)}/Visit</span>
            </div>
          </div>
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-outline-secondary flex-grow-1" onclick="openDoctorModal('${safeId}')">
              <i class="bi bi-pencil me-1"></i> Edit
            </button>
            <button class="btn btn-sm btn-medicare-primary flex-grow-1" onclick="openBookAppointmentForDoctor('${safeName.replace(/'/g, "\\'")}', '${safeDept.replace(/'/g, "\\'")}')">
              <i class="bi bi-calendar-plus me-1"></i> Book
            </button>
            <button class="btn btn-sm btn-outline-danger" title="Remove Doctor" onclick="deleteDoctorRecord('${safeId}')">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

function openDoctorModal(doctorId = null) {
  const form = document.getElementById("doctorForm");
  if (!form) return;
  form.reset();

  const titleEl = document.getElementById("doctorModalTitle");
  const idInput = document.getElementById("doctorIdHidden");

  if (doctorId) {
    const doctors = DB.get("doctors", []);
    const doc = doctors.find(d => d.id === doctorId);
    if (doc) {
      if (titleEl) titleEl.textContent = "Edit Doctor Profile";
      idInput.value = doc.id;
      document.getElementById("docNameInput").value = doc.name;
      document.getElementById("docDeptInput").value = doc.department;
      document.getElementById("docDegreeInput").value = doc.degree;
      document.getElementById("docExpInput").value = doc.experience;
      document.getElementById("docFeeInput").value = doc.fee;
      document.getElementById("docPhoneInput").value = doc.phone;
      document.getElementById("docEmailInput").value = doc.email;
      document.getElementById("docStatusInput").value = doc.status;
      document.getElementById("docImageInput").value = doc.image;
      document.getElementById("docAboutInput").value = doc.about || "";
    }
  } else {
    if (titleEl) titleEl.textContent = "Add New Specialist";
    idInput.value = "";
    document.getElementById("docImageInput").value = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80";
    if (FormDraftManager.restoreDraft("doctorForm")) {
      showToast("Restored your unsaved specialist form draft.", "info");
    }
  }

  const modalEl = document.getElementById("doctorModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function saveDoctorForm(e) {
  e.preventDefault();
  try {
    const form = document.getElementById("doctorForm");
    if (!form) return;

    const id = (document.getElementById("doctorIdHidden")?.value || "").trim();
    const name = sanitizeInput((document.getElementById("docNameInput")?.value || "").trim());
    const department = sanitizeInput(document.getElementById("docDeptInput")?.value);
    const degree = sanitizeInput((document.getElementById("docDegreeInput")?.value || "").trim());
    const experience = sanitizeInput((document.getElementById("docExpInput")?.value || "").trim());
    const feeRaw = document.getElementById("docFeeInput")?.value;
    const fee = Number(feeRaw);
    const phone = sanitizeInput((document.getElementById("docPhoneInput")?.value || "").trim());
    const email = sanitizeInput((document.getElementById("docEmailInput")?.value || "").trim());
    const status = sanitizeInput(document.getElementById("docStatusInput")?.value);
    const image = sanitizeInput((document.getElementById("docImageInput")?.value || "").trim()) || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80";
    const about = sanitizeInput((document.getElementById("docAboutInput")?.value || "").trim());

    if (!name) {
      showToast("Doctor full name is required.", "warning");
      form.classList.add("was-validated");
      document.getElementById("docNameInput")?.focus();
      return;
    }

    if (!department) {
      showToast("Please select a medical department.", "warning");
      form.classList.add("was-validated");
      document.getElementById("docDeptInput")?.focus();
      return;
    }

    if (!degree) {
      showToast("Please enter medical degree or credentials.", "warning");
      form.classList.add("was-validated");
      document.getElementById("docDegreeInput")?.focus();
      return;
    }

    if (!experience) {
      showToast("Please specify years of medical experience.", "warning");
      form.classList.add("was-validated");
      document.getElementById("docExpInput")?.focus();
      return;
    }

    if (isNaN(fee) || fee < 0 || feeRaw === "") {
      showToast("Please enter a valid consultation fee.", "warning");
      form.classList.add("was-validated");
      document.getElementById("docFeeInput")?.focus();
      return;
    }

    if (!phone || !isValidPhone(phone)) {
      showToast("Please provide a valid doctor phone number (at least 7 digits).", "warning");
      form.classList.add("was-validated");
      document.getElementById("docPhoneInput")?.focus();
      return;
    }

    if (!email || !isValidEmail(email)) {
      showToast("Please provide a valid doctor email address.", "warning");
      form.classList.add("was-validated");
      document.getElementById("docEmailInput")?.focus();
      return;
    }

    const doctors = DB.get("doctors", []);

    // Duplicate validation: check if another specialist has identical phone or email
    const dupPhone = doctors.find(d => d.id !== id && phone && d.phone === phone);
    if (dupPhone) {
      showToast(`A specialist with phone "${phone}" is already registered (${dupPhone.name}).`, "warning");
      form.classList.add("was-validated");
      document.getElementById("docPhoneInput")?.focus();
      return;
    }
    const dupEmail = doctors.find(d => d.id !== id && email && d.email && d.email.toLowerCase() === email.toLowerCase());
    if (dupEmail) {
      showToast(`A specialist with email "${email}" is already registered (${dupEmail.name}).`, "warning");
      form.classList.add("was-validated");
      document.getElementById("docEmailInput")?.focus();
      return;
    }

    const submitBtn = form.querySelector("button[type=submit]");
    if (!SubmissionLock.acquire("doctorForm", submitBtn, "Saving...")) return;

    let updatedDoctors = [...doctors];

    if (id) {
      updatedDoctors = updatedDoctors.map(d => {
        if (d.id === id) {
          return { ...d, name, department, degree, experience, fee, phone, email, status, image, about };
        }
        return d;
      });
      showToast(`Doctor profile for ${name} updated.`);
    } else {
      const newId = `DOC-${100 + updatedDoctors.length + 1}`;
      updatedDoctors.unshift({
        id: newId,
        name,
        department,
        degree,
        experience,
        fee,
        phone,
        email,
        status,
        image,
        about,
        rating: 5.0,
        reviews: 1
      });
      showToast(`Specialist ${name} successfully onboarded.`);
      logActivity("bi-person-badge", "badge-lavender", "Doctor Onboarded", `${name} joined ${department}.`);
    }

    DB.set("doctors", updatedDoctors);
    FormDraftManager.clearDraft("doctorForm");

    const modalEl = document.getElementById("doctorModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();

    renderDoctorsGrid();
    renderPublicFeaturedDoctors();
    updateDashboardStats();
    setTimeout(() => SubmissionLock.release("doctorForm", submitBtn), 500);
  } catch (err) {
    console.error("Error saving doctor:", err);
    showToast("An unexpected error occurred while saving the doctor profile.", "error");
  }
}

function deleteDoctorRecord(doctorId) {
  if (!confirm(`Are you sure you want to remove doctor record ${doctorId}?`)) return;

  let doctors = DB.get("doctors", []);
  const doc = doctors.find(d => d.id === doctorId);
  doctors = doctors.filter(d => d.id !== doctorId);
  DB.set("doctors", doctors);

  showToast(`Specialist record removed.`, "danger");
  if (doc) {
    logActivity("bi-person-x", "badge-pink", "Specialist Removed", `${doc.name} was removed from medical directory.`);
  }

  renderDoctorsGrid();
  renderPublicFeaturedDoctors();
  updateDashboardStats();
}

// ==========================================================================
// 9. Appointment Management (CRUD)
// ==========================================================================
function renderAppointmentsTable() {
  const appointments = DB.get("appointments", []);
  const tbody = document.getElementById("appointments-table-body");
  if (!tbody) return;

  const searchInput = document.getElementById("appointmentSearchInput");
  const filterStatus = document.getElementById("appointmentFilterStatus");
  const filterDept = document.getElementById("appointmentFilterDept");

  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const status = filterStatus ? filterStatus.value : "";
  const dept = filterDept ? filterDept.value : "";

  const filtered = appointments.filter(a => {
    const matchQuery = !query ||
      a.id.toLowerCase().includes(query) ||
      a.patientName.toLowerCase().includes(query) ||
      a.doctorName.toLowerCase().includes(query);

    const matchStatus = !status || a.status === status;
    const matchDept = !dept || a.department === dept;

    return matchQuery && matchStatus && matchDept;
  });

  tbody.innerHTML = "";

  const countBadge = document.getElementById("appointments-count-badge");
  if (countBadge) countBadge.textContent = `${filtered.length} Bookings`;

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-5 text-muted">
      <i class="bi bi-calendar2-x display-6 d-block mb-2 text-secondary"></i>
      No appointments match your search criteria.
    </td></tr>`;
    return;
  }

  filtered.forEach(apt => {
    const safePatient = escapeHtml(apt.patientName);
    const safePhone = escapeHtml(apt.patientPhone || 'No phone');
    const safeDoctor = escapeHtml(apt.doctorName);
    const safeDept = escapeHtml(apt.department);
    const safeDate = escapeHtml(apt.date);
    const safeTime = escapeHtml(apt.time);
    const safeReason = escapeHtml(apt.reason || 'General Health Consultation');
    const safeType = escapeHtml(apt.type || 'In-Person');
    const safeId = escapeHtml(apt.id);
    const safeStatus = escapeHtml(apt.status);
    const statusClass = getStatusClass(apt.status);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="fw-bold">${safeId}</span></td>
      <td>
        <div class="fw-bold">${safePatient}</div>
        <div class="small text-muted">${safePhone}</div>
      </td>
      <td>
        <div class="fw-semibold">${safeDoctor}</div>
        <span class="badge-pill-pastel badge-blue" style="font-size: 0.72rem; padding: 2px 8px;">${safeDept}</span>
      </td>
      <td>
        <div><i class="bi bi-calendar3 me-1 text-muted"></i> ${safeDate}</div>
        <div class="small text-muted"><i class="bi bi-clock me-1"></i> ${safeTime}</div>
      </td>
      <td>
        <div class="text-truncate" style="max-width: 180px;">${safeReason}</div>
        <span class="badge bg-light text-secondary border" style="font-size: 0.7rem;">${safeType}</span>
      </td>
      <td>
        <span class="status-badge ${statusClass}">${safeStatus}</span>
      </td>
      <td>
        <div class="dropdown">
          <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Action
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm">
            <li><a class="dropdown-item" href="javascript:void(0)" onclick="quickUpdateAppointmentStatus('${safeId}', 'Confirmed')"><i class="bi bi-check2-circle text-success me-2"></i> Confirm</a></li>
            <li><a class="dropdown-item" href="javascript:void(0)" onclick="quickUpdateAppointmentStatus('${safeId}', 'Completed')"><i class="bi bi-clipboard2-check text-primary me-2"></i> Mark Completed</a></li>
            <li><a class="dropdown-item" href="javascript:void(0)" onclick="quickUpdateAppointmentStatus('${safeId}', 'Cancelled')"><i class="bi bi-x-circle text-danger me-2"></i> Cancel</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="javascript:void(0)" onclick="openAppointmentModal('${safeId}')"><i class="bi bi-pencil me-2"></i> Edit Details</a></li>
          </ul>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openAppointmentModal(appointmentId = null) {
  const form = document.getElementById("appointmentForm");
  if (!form) return;
  form.reset();

  const titleEl = document.getElementById("appointmentModalTitle");
  const idInput = document.getElementById("appointmentIdHidden");

  // Populate doctor select
  const doctors = DB.get("doctors", []);
  const docSelect = document.getElementById("aptDoctorInput");
  if (docSelect) {
    docSelect.innerHTML = `<option value="">Select Doctor</option>` +
      doctors.map(d => `<option value="${d.name}" data-dept="${d.department}">${d.name} (${d.department})</option>`).join("");
  }

  // Populate patient suggestions
  const patients = DB.get("patients", []);
  const patientSelect = document.getElementById("aptPatientSelect");
  if (patientSelect) {
    patientSelect.innerHTML = `<option value="">-- Or Select Existing Registered Patient --</option>` +
      patients.map(p => `<option value="${p.name}" data-phone="${p.phone}">${p.name} (${p.id})</option>`).join("");
  }

  if (appointmentId) {
    const appointments = DB.get("appointments", []);
    const apt = appointments.find(a => a.id === appointmentId);
    if (apt) {
      if (titleEl) titleEl.textContent = "Update Appointment";
      idInput.value = apt.id;
      document.getElementById("aptPatientNameInput").value = apt.patientName;
      document.getElementById("aptPatientPhoneInput").value = apt.patientPhone || "";
      document.getElementById("aptDoctorInput").value = apt.doctorName;
      document.getElementById("aptDeptInput").value = apt.department;
      document.getElementById("aptDateInput").value = apt.date;
      document.getElementById("aptTimeInput").value = apt.time;
      document.getElementById("aptTypeInput").value = apt.type || "In-Person";
      document.getElementById("aptStatusInput").value = apt.status;
      document.getElementById("aptReasonInput").value = apt.reason || "";
    }
  } else {
    if (titleEl) titleEl.textContent = "Book New Appointment";
    idInput.value = "";
    const todayObj = new Date();
    const curYear = todayObj.getFullYear();
    const curMonth = String(todayObj.getMonth() + 1).padStart(2, "0");
    const curDay = String(todayObj.getDate()).padStart(2, "0");
    document.getElementById("aptDateInput").value = `${curYear}-${curMonth}-${curDay}`;
    document.getElementById("aptTimeInput").value = "10:00 AM";
    if (FormDraftManager.restoreDraft("appointmentForm")) {
      showToast("Restored your unsaved appointment draft.", "info");
    }
  }

  const modalEl = document.getElementById("appointmentModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function openBookAppointmentForDoctor(doctorName, department) {
  openAppointmentModal();
  setTimeout(() => {
    const docSelect = document.getElementById("aptDoctorInput");
    const deptSelect = document.getElementById("aptDeptInput");
    if (docSelect) docSelect.value = doctorName;
    if (deptSelect) deptSelect.value = department;
  }, 100);
}

function onAptPatientSelected(selectEl) {
  const selected = selectEl.options[selectEl.selectedIndex];
  if (selected.value) {
    document.getElementById("aptPatientNameInput").value = selected.value;
    document.getElementById("aptPatientPhoneInput").value = selected.dataset.phone || "";
  }
}

function onAptDoctorSelected(selectEl) {
  const selected = selectEl.options[selectEl.selectedIndex];
  const dept = selected.dataset.dept;
  if (dept) {
    document.getElementById("aptDeptInput").value = dept;
  }
}

function saveAppointmentForm(e) {
  e.preventDefault();
  try {
    const form = document.getElementById("appointmentForm");
    if (!form) return;

    const id = (document.getElementById("appointmentIdHidden")?.value || "").trim();
    const patientName = sanitizeInput((document.getElementById("aptPatientNameInput")?.value || "").trim());
    const patientPhone = sanitizeInput((document.getElementById("aptPatientPhoneInput")?.value || "").trim());
    const doctorName = sanitizeInput(document.getElementById("aptDoctorInput")?.value);
    const department = sanitizeInput(document.getElementById("aptDeptInput")?.value);
    const date = sanitizeInput(document.getElementById("aptDateInput")?.value);
    const time = sanitizeInput(document.getElementById("aptTimeInput")?.value);
    const type = sanitizeInput(document.getElementById("aptTypeInput")?.value || "In-Person");
    const status = sanitizeInput(document.getElementById("aptStatusInput")?.value || "Pending");
    const reason = sanitizeInput((document.getElementById("aptReasonInput")?.value || "").trim());

    if (!patientName) {
      showToast("Patient name is required for booking.", "warning");
      form.classList.add("was-validated");
      document.getElementById("aptPatientNameInput")?.focus();
      return;
    }

    if (!patientPhone || !isValidPhone(patientPhone)) {
      showToast("Please provide a valid patient contact phone number.", "warning");
      form.classList.add("was-validated");
      document.getElementById("aptPatientPhoneInput")?.focus();
      return;
    }

    if (!doctorName) {
      showToast("Please assign a consulting specialist doctor.", "warning");
      form.classList.add("was-validated");
      document.getElementById("aptDoctorInput")?.focus();
      return;
    }

    if (!department) {
      showToast("Please specify the clinical department.", "warning");
      form.classList.add("was-validated");
      document.getElementById("aptDeptInput")?.focus();
      return;
    }

    if (!date) {
      showToast("Please select an appointment date.", "warning");
      form.classList.add("was-validated");
      document.getElementById("aptDateInput")?.focus();
      return;
    }

    if (!time) {
      showToast("Please select a consultation time slot.", "warning");
      form.classList.add("was-validated");
      document.getElementById("aptTimeInput")?.focus();
      return;
    }

    const appointments = DB.get("appointments", []);

    // Prevent duplicate appointment bookings:
    // 1. Same doctor at the same date and time (ignoring Cancelled appointments and current appointment)
    const doctorConflict = appointments.find(a =>
      a.id !== id &&
      a.doctorName === doctorName &&
      a.date === date &&
      a.time === time &&
      a.status !== "Cancelled"
    );
    if (doctorConflict) {
      showToast(`Doctor ${doctorName} is already booked on ${date} at ${time}. Please select an alternate time slot or specialist.`, "warning");
      form.classList.add("was-validated");
      document.getElementById("aptTimeInput")?.focus();
      return;
    }

    // 2. Same patient at the same date and time
    const patientConflict = appointments.find(a =>
      a.id !== id &&
      a.patientName.toLowerCase() === patientName.toLowerCase() &&
      a.date === date &&
      a.time === time &&
      a.status !== "Cancelled"
    );
    if (patientConflict) {
      showToast(`Patient ${patientName} already has an active appointment scheduled on ${date} at ${time}.`, "warning");
      form.classList.add("was-validated");
      document.getElementById("aptDateInput")?.focus();
      return;
    }

    const submitBtn = form.querySelector("button[type=submit]");
    if (!SubmissionLock.acquire("appointmentForm", submitBtn, "Booking...")) return;

    let updatedAppointments = [...appointments];

    if (id) {
      updatedAppointments = updatedAppointments.map(a => {
        if (a.id === id) {
          return { ...a, patientName, patientPhone, doctorName, department, date, time, type, status, reason };
        }
        return a;
      });
      showToast(`Appointment ${id} details updated.`);
    } else {
      const newId = `APT-2026-${String(updatedAppointments.length + 1).padStart(2, "0")}`;
      updatedAppointments.unshift({
        id: newId,
        patientName,
        patientPhone,
        doctorName,
        department,
        date,
        time,
        type,
        status,
        reason
      });
      showToast(`Appointment confirmed for ${patientName} on ${date} at ${time}.`);
      logActivity("bi-calendar2-plus", "badge-blue", "Appointment Booked", `${patientName} with ${doctorName}.`);
    }

    DB.set("appointments", updatedAppointments);
    FormDraftManager.clearDraft("appointmentForm");

    const modalEl = document.getElementById("appointmentModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();

    renderAppointmentsTable();
    renderRecentAppointmentsTable();
    updateDashboardStats();
    setTimeout(() => SubmissionLock.release("appointmentForm", submitBtn), 500);
  } catch (err) {
    console.error("Error saving appointment:", err);
    showToast("An unexpected error occurred while saving the appointment.", "error");
  }
}

function quickUpdateAppointmentStatus(aptId, newStatus) {
  let appointments = DB.get("appointments", []);
  const apt = appointments.find(a => a.id === aptId);
  if (!apt) return;

  apt.status = newStatus;
  DB.set("appointments", appointments);

  showToast(`Appointment ${aptId} status set to ${newStatus}.`, newStatus === "Cancelled" ? "warning" : "success");
  logActivity("bi-arrow-repeat", "badge-cream", "Status Changed", `Appointment ${aptId} marked as ${newStatus}.`);

  renderAppointmentsTable();
  renderRecentAppointmentsTable();
  updateDashboardStats();
}

// ==========================================================================
// 10. Billing Management & Printable Invoice Modal
// ==========================================================================
function renderBillingTable() {
  const invoices = DB.get("invoices", []);
  const tbody = document.getElementById("billing-table-body");
  if (!tbody) return;

  const searchInput = document.getElementById("billingSearchInput");
  const filterStatus = document.getElementById("billingFilterStatus");

  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const status = filterStatus ? filterStatus.value : "";

  const filtered = invoices.filter(inv => {
    const matchQuery = !query ||
      inv.id.toLowerCase().includes(query) ||
      inv.patientName.toLowerCase().includes(query) ||
      inv.department.toLowerCase().includes(query);

    const matchStatus = !status || inv.status === status;

    return matchQuery && matchStatus;
  });

  tbody.innerHTML = "";

  // Update billing summary cards
  const totalBilled = invoices.reduce((s, i) => s + Number(i.amount), 0);
  const totalPaid = invoices.filter(i => i.status === "Paid").reduce((s, i) => s + Number(i.amount), 0);
  const totalOutstanding = invoices.filter(i => i.status !== "Paid").reduce((s, i) => s + Number(i.amount), 0);

  const bBilled = document.getElementById("billing-total-billed");
  const bPaid = document.getElementById("billing-total-paid");
  const bOut = document.getElementById("billing-total-outstanding");

  if (bBilled) bBilled.textContent = `$${totalBilled.toLocaleString()}`;
  if (bPaid) bPaid.textContent = `$${totalPaid.toLocaleString()}`;
  if (bOut) bOut.textContent = `$${totalOutstanding.toLocaleString()}`;

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-5 text-muted">
      <i class="bi bi-receipt display-6 d-block mb-2 text-secondary"></i>
      No invoice records found.
    </td></tr>`;
    return;
  }

  filtered.forEach(inv => {
    const safePatient = escapeHtml(inv.patientName);
    const safeDept = escapeHtml(inv.department);
    const safeId = escapeHtml(inv.id);
    const safeDate = escapeHtml(inv.date);
    const safeMethod = escapeHtml(inv.method || 'Standard Pay');
    const safeStatus = escapeHtml(inv.status);
    const statusClass = getStatusClass(inv.status);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="fw-bold">${safeId}</span></td>
      <td>
        <div class="fw-bold">${safePatient}</div>
        <div class="small text-muted">${safeDept}</div>
      </td>
      <td>${safeDate}</td>
      <td class="fw-bold text-dark">$${Number(inv.amount).toLocaleString()}.00</td>
      <td>
        <span class="small text-secondary"><i class="bi bi-credit-card me-1"></i> ${safeMethod}</span>
      </td>
      <td>
        <span class="status-badge ${statusClass}">${safeStatus}</span>
      </td>
      <td>
        <div class="d-flex gap-1">
          <button class="btn btn-sm btn-medicare-secondary py-1 px-3" onclick="viewInvoiceModal('${safeId}')">
            <i class="bi bi-file-earmark-text me-1"></i> View Receipt
          </button>
          ${inv.status !== 'Paid' ? `
            <button class="btn btn-sm btn-outline-success py-1 px-2" title="Mark as Paid" onclick="markInvoicePaid('${safeId}')">
              <i class="bi bi-check-lg"></i>
            </button>
          ` : ''}
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function viewInvoiceModal(invoiceId) {
  const invoices = DB.get("invoices", []);
  const inv = invoices.find(i => i.id === invoiceId);
  if (!inv) return;

  const content = document.getElementById("invoiceModalContent");
  if (!content) return;

  const itemsHtml = (inv.items || [
    { desc: "General Medical Examination & Clinical Assessment", cost: inv.amount }
  ]).map(item => `
    <tr>
      <td class="py-2">${escapeHtml(item.desc)}</td>
      <td class="text-end py-2">$${Number(item.cost).toFixed(2)}</td>
    </tr>
  `).join("");

  const statusClass = getStatusClass(inv.status);
  const safePatient = escapeHtml(inv.patientName);
  const safeDept = escapeHtml(inv.department);
  const safeId = escapeHtml(inv.id);
  const safeDate = escapeHtml(inv.date);
  const safeMethod = escapeHtml(inv.method || 'Direct');
  const safeStatus = escapeHtml(inv.status);

  content.innerHTML = `
    <div class="invoice-container">
      <div class="invoice-header-bar">
        <div>
          <div class="d-flex align-items-center gap-2 mb-2">
            <div class="brand-icon-box" style="width: 36px; height: 36px; font-size: 1.1rem;">
              <i class="bi bi-hospital"></i>
            </div>
            <h4 class="fw-bold mb-0">MediCare <span style="color: var(--brand-primary); font-size: 0.9rem;">HOSPITAL</span></h4>
          </div>
          <p class="small text-muted mb-0">100 Healthcare Boulevard, Metro City, NY 10001</p>
          <p class="small text-muted mb-0">Emergency Hotline: +1 (800) 555-CARE</p>
        </div>
        <div class="text-end">
          <h5 class="fw-bold text-primary mb-1">INVOICE</h5>
          <div class="fw-bold">${safeId}</div>
          <div class="small text-muted">Date: ${safeDate}</div>
          <span class="status-badge ${statusClass} mt-2">${safeStatus}</span>
        </div>
      </div>

      <div class="row g-3 mb-4">
        <div class="col-6">
          <div class="small text-muted text-uppercase fw-bold">Billed To</div>
          <div class="fw-bold fs-6">${safePatient}</div>
          <div class="small text-muted">Department: ${safeDept}</div>
          <div class="small text-muted">Payment: ${safeMethod}</div>
        </div>
        <div class="col-6 text-end">
          <div class="small text-muted text-uppercase fw-bold">Hospital Tax ID</div>
          <div class="fw-semibold small">MED-TAX-9844201</div>
          <div class="small text-muted">Accredited by Joint Commission</div>
        </div>
      </div>

      <table class="table table-bordered mb-4">
        <thead class="bg-light">
          <tr>
            <th class="small">Service Description</th>
            <th class="small text-end" style="width: 140px;">Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
          <tr>
            <td class="text-end fw-bold pt-3">Subtotal:</td>
            <td class="text-end fw-bold pt-3">$${Number(inv.amount).toFixed(2)}</td>
          </tr>
          <tr>
            <td class="text-end text-muted small">Applicable Taxes (0% Medical):</td>
            <td class="text-end text-muted small">$0.00</td>
          </tr>
          <tr class="table-active">
            <td class="text-end fw-bold fs-6">Grand Total:</td>
            <td class="text-end fw-bold fs-6 text-primary">$${Number(inv.amount).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div class="d-flex justify-content-between align-items-center pt-3 border-top">
        <div class="small text-muted">
          Thank you for trusting MediCare Healthcare Systems.
        </div>
        <button class="btn btn-sm btn-outline-secondary" onclick="window.print()">
          <i class="bi bi-printer me-1"></i> Print Receipt
        </button>
      </div>
    </div>
  `;

  const modalEl = document.getElementById("invoiceModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function markInvoicePaid(invoiceId) {
  let invoices = DB.get("invoices", []);
  const inv = invoices.find(i => i.id === invoiceId);
  if (!inv) return;

  inv.status = "Paid";
  DB.set("invoices", invoices);

  showToast(`Invoice ${invoiceId} marked as fully Paid!`);
  logActivity("bi-cash-coin", "badge-mint", "Payment Received", `Invoice ${invoiceId} ($${inv.amount}) marked as paid.`);

  renderBillingTable();
  updateDashboardStats();
}

// ==========================================================================
// 11. Public Homepage Dynamic Populate & Actions
// ==========================================================================
function renderPublicFeaturedDoctors() {
  const doctors = DB.get("doctors", []);
  const container = document.getElementById("public-featured-doctors-grid");
  if (!container) return;

  container.innerHTML = "";
  // Show first 4
  const featured = doctors.slice(0, 4);

  featured.forEach(doc => {
    const safeName = escapeHtml(doc.name);
    const safeDept = escapeHtml(doc.department);
    const safeDegree = escapeHtml(doc.degree);

    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-6";
    col.innerHTML = `
      <div class="doctor-card">
        <div class="doctor-img-wrap">
          <img src="${doc.image}" alt="Portrait of ${safeName}, Specialist in ${safeDept}" loading="lazy">
          <span class="doctor-dept-pill">${safeDept}</span>
        </div>
        <div class="doctor-body">
          <div>
            <div class="d-flex justify-content-between align-items-start mb-1">
              <h5 class="doctor-name mb-0">${safeName}</h5>
            </div>
            <div class="doctor-sub">${safeDegree}</div>
            <div class="doctor-rating mb-3">
              <i class="bi bi-star-fill"></i> ${Number(doc.rating) || 5.0} <span class="text-muted fw-normal">(${Number(doc.reviews) || 0} reviews)</span>
            </div>
          </div>
          <button class="btn btn-medicare-secondary w-100 btn-sm" onclick="openBookAppointmentForDoctor('${safeName.replace(/'/g, "\\'")}', '${safeDept.replace(/'/g, "\\'")}')">
            <i class="bi bi-calendar-event me-1"></i> Consult Specialist
          </button>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

function handlePublicContactSubmit(e) {
  e.preventDefault();
  try {
    const form = e.target;
    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    if (!SubmissionLock.acquire("publicContactForm", submitBtn, "Sending...")) return;

    const name = (form.querySelector('input[type="text"]')?.value || "").trim();
    const phone = (form.querySelector('input[type="tel"]')?.value || "").trim();
    const email = (form.querySelector('input[type="email"]')?.value || "").trim();
    const dept = form.querySelector("select")?.value;
    const message = (form.querySelector("textarea")?.value || "").trim();

    if (!name) {
      showToast("Please enter your full name.", "warning");
      form.classList.add("was-validated");
      form.querySelector('input[type="text"]')?.focus();
      SubmissionLock.release("publicContactForm", submitBtn);
      return;
    }

    if (!phone || !isValidPhone(phone)) {
      showToast("Please provide a valid contact phone number (at least 7 digits).", "warning");
      form.classList.add("was-validated");
      form.querySelector('input[type="tel"]')?.focus();
      SubmissionLock.release("publicContactForm", submitBtn);
      return;
    }

    if (!email || !isValidEmail(email)) {
      showToast("Please enter a valid email address.", "warning");
      form.classList.add("was-validated");
      form.querySelector('input[type="email"]')?.focus();
      SubmissionLock.release("publicContactForm", submitBtn);
      return;
    }

    if (!dept) {
      showToast("Please select a medical department of interest.", "warning");
      form.classList.add("was-validated");
      form.querySelector("select")?.focus();
      SubmissionLock.release("publicContactForm", submitBtn);
      return;
    }

    if (!message) {
      showToast("Please write a brief description of your inquiry.", "warning");
      form.classList.add("was-validated");
      form.querySelector("textarea")?.focus();
      SubmissionLock.release("publicContactForm", submitBtn);
      return;
    }

    showToast("Thank you! Your inquiry has been sent to our patient support team.");
    form.reset();
    form.classList.remove("was-validated");
    setTimeout(() => SubmissionLock.release("publicContactForm", submitBtn), 1000);
  } catch (err) {
    console.error("Error handling contact submission:", err);
    showToast("An unexpected error occurred while sending your inquiry. Please try again.", "error");
  }
}

function handleSaveSettings(e) {
  e.preventDefault();
  try {
    showToast("Hospital configurations and profile settings updated successfully!");
  } catch (err) {
    console.error("Error saving settings:", err);
    showToast("Failed to save settings.", "error");
  }
}

// ==========================================================================
// 12. Global Search Handler
// ==========================================================================
function handleGlobalSearch(query) {
  if (!query || query.trim() === "") return;
  query = query.toLowerCase().trim();

  // Search across doctors, patients, appointments
  const patients = DB.get("patients", []);
  const doctors = DB.get("doctors", []);

  const patientMatch = patients.find(p => p.name.toLowerCase().includes(query) || p.id.toLowerCase().includes(query));
  const doctorMatch = doctors.find(d => d.name.toLowerCase().includes(query) || d.department.toLowerCase().includes(query));

  if (patientMatch) {
    switchAdminTab("patients");
    const input = document.getElementById("patientSearchInput");
    if (input) {
      input.value = query;
      renderPatientsTable();
    }
  } else if (doctorMatch) {
    switchAdminTab("doctors");
    const input = document.getElementById("doctorSearchInput");
    if (input) {
      input.value = query;
      renderDoctorsGrid();
    }
  } else {
    switchAdminTab("appointments");
    const input = document.getElementById("appointmentSearchInput");
    if (input) {
      input.value = query;
      renderAppointmentsTable();
    }
  }
}

// Refresh all UI views
function refreshAllViews() {
  updateDashboardStats();
  renderRecentAppointmentsTable();
  renderActivityFeed();
  renderPatientsTable();
  renderDoctorsGrid();
  renderAppointmentsTable();
  renderBillingTable();
  renderPublicFeaturedDoctors();
  setTimeout(renderDashboardCharts, 100);
}

// ==========================================================================
// 13. DOM Ready Initialization & Event Wiring
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Form draft auto-save initialization
  FormDraftManager.initAutoSave("patientForm");
  FormDraftManager.initAutoSave("doctorForm");
  FormDraftManager.initAutoSave("appointmentForm");

  // Prevent accidental data loss on refresh when modal is dirty
  window.addEventListener("beforeunload", (e) => {
    const openModalForm = document.querySelector(".modal.show form");
    if (openModalForm) {
      const inputs = openModalForm.querySelectorAll("input:not([type=hidden]), select, textarea");
      const hasInput = Array.from(inputs).some(inp => inp.value && inp.value.trim().length > 0);
      if (hasInput) {
        e.preventDefault();
        e.returnValue = "";
      }
    }
  });

  // Initial renders
  refreshAllViews();

  // Restore active view and tab across page refresh
  const savedView = DB.get("active_view", "public");
  const savedTab = DB.get("active_tab", "dashboard");
  if (savedView === "admin") {
    switchMainView("admin");
    if (savedTab && savedTab !== "dashboard") {
      switchAdminTab(savedTab);
    }
  }

  // Resize listener to re-draw canvas charts sharply
  window.addEventListener("resize", () => {
    if (currentPortalTab === "dashboard") {
      renderDashboardCharts();
    } else if (currentPortalTab === "reports") {
      renderReportsCharts();
    }
  });

  // Global search input enter listener
  const topSearch = document.getElementById("globalSearchInput");
  if (topSearch) {
    topSearch.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        handleGlobalSearch(e.target.value);
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith("#section-")) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Back to top button visibility toggle on scroll
  const backToTopBtn = document.getElementById("btnBackToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        backToTopBtn.style.opacity = "0.95";
        backToTopBtn.style.pointerEvents = "auto";
      } else {
        backToTopBtn.style.opacity = "0";
        backToTopBtn.style.pointerEvents = "none";
      }
    });
  }
});

