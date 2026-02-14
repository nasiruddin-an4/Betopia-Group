"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Globe,
  Clock,
  Handshake,
  FileText,
  CheckCircle2,
  Building2,
  Truck,
  Cpu,
  Wheat,
  HardHat,
  Package,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Users,
  Target,
  Eye,
  Scale,
  Store,
  Briefcase,
  TrendingUp,
  Calendar,
  CreditCard,
  User,
  Info,
  ExternalLink,
} from "lucide-react";

// ─── Data Constants ──────────────────────────────────────────
const STATS = [
  { value: "500+", label: "Verified Vendors" },
  { value: "1,200+", label: "Purchase Orders/Year" },
  { value: "$2.1B+", label: "Annual Procurement Value" },
];

const WHY_US = [
  {
    icon: Shield,
    title: "Transparent Process",
    description: "Full visibility into procurement decisions with audit trails",
  },
  {
    icon: CheckCircle2,
    title: "Fair Competition",
    description: "Equal opportunity for all qualified vendors",
  },
  {
    icon: Clock,
    title: "Timely Payments",
    description: "Reliable payment schedule as per contract terms",
  },
];

const CATEGORIES = [
  {
    icon: Store,
    label: "Retail & Branding",
    description: "Shop signage, interior branding, and retail displays",
  },
  {
    icon: Building2,
    label: "Construction Projects",
    description:
      "Building construction, renovation, and infrastructure development",
  },
  {
    icon: Package,
    label: "Goods & Supplies",
    description: "Office equipment, furniture, and operational supplies",
  },
  {
    icon: TrendingUp,
    label: "Professional Services",
    description: "Consulting, IT services, and specialized expertise",
  },
];

const TENDERS = [
  {
    reference: "BG/PR/2026/001",
    status: "Open",
    daysLeft: "32 days left",
    title: "Supply of Office Furniture and Equipment",
    description:
      "Betopia Group invites qualified vendors to submit proposals for the supply and delivery of office furniture and equipment for our new headquarters. This...",
    publishedDate: "Jan 10, 2026",
    closesDate: "Feb 15, 2026",
    category: "Goods & Supplies",
  },
  {
    reference: "BG/PR/2026/003",
    status: "Open",
    daysLeft: "45 days left",
    title: "Construction of Warehouse Facility",
    description:
      "Design, construction, and commissioning of a 5,000 sq ft warehouse facility including loading docks, storage racks, and security systems.",
    publishedDate: "Jan 8, 2026",
    closesDate: "Feb 28, 2026",
    category: "Construction Projects",
  },
  {
    reference: "BG/PR/2025/089",
    status: "Closed",
    title: "Marketing and Branding Services",
    description:
      "Comprehensive marketing and branding services for 12-month period.",
    publishedDate: "Nov 1, 2025",
    closesDate: "Dec 15, 2025",
    category: "Retail & Branding",
  },
  {
    reference: "BG/PR/2026/004",
    status: "Open",
    daysLeft: "27 days left",
    title: "Annual Supply of Office Stationery",
    description:
      "Framework agreement for the supply of office stationery items for one year.",
    publishedDate: "Jan 14, 2026",
    closesDate: "Feb 10, 2026",
    category: "Goods & Supplies",
  },
];

const REGISTRATION_REQUIREMENTS = [
  "Valid Trade License (updated for current year)",
  "TIN & BIN Certificate",
  "Company Profile / Portfolio",
  "Bank Solvency Certificate",
  "List of Key Clients / Past Projects",
  "Relevant ISO or Quality Certifications (if applicable)",
  "Completed Vendor Registration Form",
  "NID / Passport copy of Authorized Signatory",
];

const PHILOSOPHY = [
  {
    icon: Target,
    title: "Cost Efficiency",
    description:
      "We negotiate the best value without compromising on quality. Every dollar is accounted for.",
  },
  {
    icon: Eye,
    title: "Governance",
    description:
      "Our procurement follows strict corporate governance standards, ensuring ethical sourcing at every level.",
  },
  {
    icon: Scale,
    title: "Compliance",
    description:
      "All procurement activities comply with local and international trade regulations and standards.",
  },
];

const REGISTRATION_SECTIONS = [
  {
    title: "Company Information",
    icon: Building2,
    fields: [
      { name: "Company Name", desc: "Legal registered business name" },
      {
        name: "Trade Licence / Company Certificate",
        desc: "Upload valid trade license document (PDF)",
      },
      {
        name: "TIN (Tax Identification Number)",
        desc: "Enter your TIN number",
      },
      {
        name: "BIN (Business Identification Number)",
        desc: "Enter your BIN number",
      },
      { name: "Company Address", desc: "Complete registered business address" },
    ],
  },
  {
    title: "Identity Information",
    icon: User,
    fields: [
      { name: "NID Number", desc: "National ID card number" },
      { name: "NID Document", desc: "Upload copy of National ID card (PDF)" },
    ],
  },
  {
    title: "Bank Details",
    icon: CreditCard,
    fields: [
      { name: "Account Name", desc: "Name as per bank account" },
      { name: "Account Number", desc: "Bank account number" },
      { name: "Bank Name & Branch", desc: "Name of bank and branch location" },
      {
        name: "Routing / SWIFT Code",
        desc: "If applicable for international transfers",
      },
    ],
  },
  {
    title: "Key Contact Person",
    icon: Users,
    fields: [
      { name: "Full Name", desc: "Primary contact person name" },
      { name: "Designation", desc: "Job title or position" },
      { name: "Phone & Email", desc: "Contact number and email address" },
    ],
  },
];

const OWNERS_INFO = {
  title: "Owners Information",
  icon: Users,
  description: "Multiple owners can be added (repeatable section)",
  fields: [
    { name: "Owner Name", desc: "Full legal name of owner" },
    { name: "Owner NID/Passport", desc: "National ID or Passport number" },
    { name: "Share Percentage", desc: "Ownership share (e.g., 50%)" },
    { name: "Phone/Email", desc: "Contact information" },
  ],
  note: "You can add multiple owners during registration. Ensure all ownership shares add up to 100%.",
};

const NOTICES = [
  {
    tag: "Policy Update",
    date: "Jan 12, 2026",
    title: "Updated Vendor Registration Guidelines",
    description:
      "New requirements for vendor registration effective from February 1, 2026",
  },
  {
    tag: "Training",
    date: "Jan 10, 2026",
    title: "Training Session for e-Procurement Portal",
    description: "Free training sessions scheduled for all registered vendors",
  },
  {
    tag: "Announcement",
    date: "Jan 8, 2026",
    title: "Q1 2026 Procurement Plan Published",
    description:
      "Annual procurement plan for Q1 2026 is now available for download",
  },
];

const QUICK_ACCESS = [
  {
    title: "Vendor Registration Guide",
    description: "Step-by-step guide to register as a vendor",
    href: "/registration-guide",
  },
  {
    title: "Procurement Policies",
    description: "Download our complete procurement guidelines",
    href: "/policies",
  },
  {
    title: "FAQs",
    description: "Frequently asked questions about tenders",
    href: "#faq",
  },
  {
    title: "Contact Procurement Team",
    description: "Get in touch with our procurement department",
    href: "#contact",
  },
];

const PRINCIPLES = {
  coreValues: [
    {
      title: "Transparency",
      description: "All procurement processes conducted with full transparency",
    },
    {
      title: "Fair Competition",
      description: "Equal opportunity for all qualified vendors",
    },
    {
      title: "Value for Money",
      description: "Selection based on best value, quality, and service",
    },
    {
      title: "Integrity",
      description: "Highest ethical standards in all dealings",
    },
  ],
  documents: [
    "Procurement Policy 2026",
    "Vendor Code of Conduct",
    "Tender Evaluation Criteria",
    "Anti-Corruption Guidelines",
  ],
};

const FAQS = [
  {
    question: "How do I register as a vendor?",
    answer:
      "You can register by filling out our vendor registration form on this page. Submit the required documents and our team will review your application within 5-7 business days.",
  },
  {
    question: "What documents do I need for registration?",
    answer:
      "You need a valid Trade License, TIN & BIN Certificate, Company Profile, Bank Solvency Certificate, and list of key clients. ISO certifications are recommended but optional.",
  },
  {
    question: "How are vendors selected for tenders?",
    answer:
      "Vendors are evaluated based on technical capability, past performance, pricing competitiveness, delivery timeline, and compliance with our quality standards.",
  },
  {
    question: "Can international vendors apply?",
    answer:
      "Yes, we welcome international vendors. Additional documentation such as export licenses and international trade certifications may be required depending on the procurement category.",
  },
];

const ANNOUNCEMENTS = [
  "Tender BG/PR/2026/005 deadline extended to February 28, 2026",
  "New procurement policy effective from January 20, 2026",
];

// ─── Component ───────────────────────────────────────────────
export default function ProcurementPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(null);

  const filteredTenders =
    activeCategory === "All"
      ? TENDERS
      : TENDERS.filter((t) => t.category === activeCategory);

  return (
    <div className="pt-24 md:pt-40 pb-20">
      {/* ══════════ Top Announcement Marquee ══════════ */}
      <div className="container px-4 md:px-8 mb-4">
        <nav className="text-xs text-gray-400 order-2 md:order-1">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">procurement</span>
        </nav>
      </div>

      <div>
        <div className="flex-1 overflow-hidden relative group order-1 md:order-2">
          <div className="flex items-center gap-4 bg-white py-2 px-4 max-w-5xl mx-auto">
            <div className="shrink-0 relative">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <Users className="w-4 h-4 text-[#FF8F3D]" />
            </div>
            <div className="flex-1 overflow-hidden whitespace-nowrap">
              <div className="animate-marquee inline-block hover:pause">
                {ANNOUNCEMENTS.map((text, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-[10px] md:text-xs text-amber-800 font-medium whitespace-nowrap"
                  >
                    {idx > 0 && <span className="mx-4 text-blue-600">•</span>}
                    {text}
                  </span>
                ))}
                {/* Duplicate for seamless loop */}
                {ANNOUNCEMENTS.map((text, idx) => (
                  <span
                    key={idx + "copy"}
                    className="inline-flex items-center text-[10px] md:text-xs text-amber-800 font-medium whitespace-nowrap"
                  >
                    <span className="mx-4 text-blue-600">•</span>
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ Hero Card Section ══════════ */}
      <div className="container mx-auto px-4 md:px-8 mb-20">
        <section className="relative bg-[#2D2A26] rounded-[40px] md:rounded-[60px] overflow-hidden p-8 md:p-16 lg:p-24">
          {/* Subtle background effects */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 max-w-3xl">
            {/* Trusted Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              <span className="text-white/80 text-[10px] md:text-xs font-medium tracking-wide">
                Trusted by 500+ vendors
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Transparent Procurement Made Simple
            </h1>

            <p className="text-white/60 text-sm md:text-lg mb-10 max-w-2xl leading-relaxed">
              Join Betopia Group&apos;s procurement ecosystem. Browse tenders,
              submit proposals, and grow your business with complete
              transparency and fairness.
            </p>

            <div className="flex flex-wrap gap-4 mb-20">
              <a
                href="#activeTenders"
                className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full font-bold text-sm hover:shadow-xl hover:scale-105 transition-all group"
              >
                Active Tenders
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#vendorRegistration"
                className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-transparent text-white border-2 border-white/20 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all"
              >
                Get Enlisted
              </a>
            </div>

            {/* Stats Divider & Row */}
            <div className="pt-10 border-t border-white/10 flex flex-wrap gap-12 md:gap-24">
              <div>
                <p className="text-2xl md:text-4xl font-bold text-white">
                  500+
                </p>
                <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest mt-1">
                  Registered Vendors
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold text-white">
                  1,200+
                </p>
                <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest mt-1">
                  Tenders Published
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold text-white">
                  $50M+
                </p>
                <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest mt-1">
                  Contract Value
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ══════════ Why Work With Us ══════════ */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black mb-4">
              Why Work With Us
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              We&apos;re committed to building long-term partnerships based on
              trust and transparency
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_US.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-14 h-14 mx-auto bg-[#FFF3EA] rounded-full flex items-center justify-center mb-5 group-hover:bg-[#FF8F3D] transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-[#FF8F3D] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ What We Procure ══════════ */}
      <section className="bg-[#FAFAFA] py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black mb-4">
              What We Procure
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Diverse opportunities across multiple categories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#FF8F3D]/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#FFF3EA] rounded-xl flex items-center justify-center mb-6">
                  <cat.icon className="w-6 h-6 text-[#FF8F3D]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {cat.label}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ Active Tenders ══════════ */}
      <section id="activeTenders" className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black mb-2">
                Active Tenders
              </h2>
              <p className="text-gray-500 text-sm">
                Latest procurement opportunities
              </p>
            </div>

            <Link
              href="/procurement/tenders"
              className="px-6 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Tenders Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTenders.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <p className="text-gray-400 text-lg">
                  No tenders available in this category.
                </p>
              </div>
            ) : (
              filteredTenders.map((tender, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] md:text-xs font-bold text-[#FF8F3D] tracking-wider uppercase bg-[#FFF3EA] px-2 py-1 rounded">
                        {tender.reference}
                      </span>
                      <span
                        className={`px-3 py-1 rounded text-[10px] md:text-xs font-bold ${
                          tender.status === "Open"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {tender.status}
                      </span>
                    </div>
                    {tender.daysLeft && (
                      <span className="text-[10px] md:text-xs font-bold text-[#FF8F3D] text-right leading-tight">
                        {tender.daysLeft.split(" ")[0]} <br />
                        <span className="text-gray-400 font-medium lowercase">
                          days left
                        </span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#FF8F3D] transition-colors">
                    {tender.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                    {tender.description}
                  </p>

                  <div className="pt-6 border-t border-gray-50 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-[10px] text-gray-400 font-medium">
                          Published
                        </p>
                        <p className="text-xs font-bold text-black">
                          {tender.publishedDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-[10px] text-gray-400 font-medium">
                          Closes
                        </p>
                        <p className="text-xs font-bold text-black">
                          {tender.closesDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ══════════ Vendor Registration Requirements ══════════ */}
      <section id="vendorRegistration" className="bg-[#FAFAFA] py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-[1.5rem] md:text-[2.25rem] font-bold text-black mb-4">
              Vendor Registration Requirements
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Prepare these documents and information to complete your vendor
              registration. All fields are mandatory for verification purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {REGISTRATION_SECTIONS.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-[#FFF3EA] rounded-xl flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-[#FF8F3D]" />
                  </div>
                  <h3 className="text-lg font-bold text-black">
                    {section.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {section.fields.map((field, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full border border-orange-200 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8F3D]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 mb-0.5">
                          {field.name}
                        </p>
                        <p className="text-xs text-gray-400 font-medium">
                          {field.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Owners Information - Full Width */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs mb-12">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 bg-[#FFF3EA] rounded-xl flex items-center justify-center">
                <OWNERS_INFO.icon className="w-5 h-5 text-[#FF8F3D]" />
              </div>
              <h3 className="text-lg font-bold text-black">
                {OWNERS_INFO.title}
              </h3>
            </div>
            <p className="text-xs text-gray-400 font-medium mb-8 ml-14">
              {OWNERS_INFO.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {OWNERS_INFO.fields.map((field, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-gray-50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                    <p className="text-sm font-bold text-gray-900">
                      {field.name}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 font-medium lowercase">
                    {field.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
              <Info className="w-4 h-4 text-orange-400 shrink-0" />
              <p className="text-xs text-slate-600 font-medium">
                {OWNERS_INFO.note}
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:procurement@betopiagroup.com"
              className="inline-flex items-center px-8 py-3 bg-[#FF8F3D] text-white rounded-xl font-bold text-sm hover:shadow-lg hover:bg-[#FF7A1A] transition-all group mb-4"
            >
              Start Vendor Registration
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-xs text-gray-400 font-medium">
              Registration takes approximately 10-15 minutes
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ Notices & Quick Access ══════════ */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Latest Notices */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-black mb-8">
                Latest Notices
              </h2>
              <div className="space-y-4">
                {NOTICES.map((notice, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white rounded-3xl border border-gray-100 shadow-xs hover:shadow-md transition-all cursor-default"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-3 py-1 bg-[#FFF3EA] text-[#FF8F3D] text-[10px] md:text-xs font-bold rounded">
                        {notice.tag}
                      </span>
                      <span className="text-[10px] md:text-xs text-gray-400 font-medium">
                        {notice.date}
                      </span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-black mb-2">
                      {notice.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">
                      {notice.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Access */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-black mb-8">
                Quick Access
              </h2>
              <div className="space-y-4">
                {QUICK_ACCESS.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group flex flex-col p-6 bg-white rounded-3xl border border-gray-100 shadow-xs hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-sm md:text-base font-bold text-black mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500 font-medium">
                          {item.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#FF8F3D] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ Our Procurement Principles ══════════ */}
      <section className="bg-white py-20 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="bg-white rounded-[40px] border border-gray-100 shadow-xs p-8 md:p-16 lg:p-20">
            <div className="text-center mb-16">
              <h2 className="text-[1.5rem] md:text-[2.25rem] font-bold text-black mb-4">
                Our Procurement Principles
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We uphold the highest standards of integrity and transparency
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
              {/* Core Values */}
              <div>
                <h3 className="text-lg font-bold text-black mb-8">
                  Core Values
                </h3>
                <div className="space-y-8">
                  {PRINCIPLES.coreValues.map((value, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-2"></div>
                      <div>
                        <p className="text-sm md:text-base font-bold text-black mb-1">
                          {value.title}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500 font-medium">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Documents */}
              <div>
                <h3 className="text-lg font-bold text-black mb-8">
                  Key Documents
                </h3>
                <div className="space-y-6">
                  {PRINCIPLES.documents.map((doc, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center justify-between gap-4 py-2 border-b border-gray-50 last:border-0 hover:border-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <FileText className="w-5 h-5 text-gray-400 group-hover:text-[#FF8F3D] transition-colors" />
                        <span className="text-sm md:text-base font-bold text-gray-700">
                          {doc}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-all cursor-pointer" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ Contact Information ══════════ */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Local Partner */}
            <div>
              <h3 className="text-xl font-bold text-black mb-6">
                Local Partner
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#FF8F3D] mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-black">
                      Betopia Group - Procurement Division
                    </p>
                    <p className="text-sm text-gray-500">
                      Corporate Headquarters
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF8F3D] mt-0.5" />
                  <p className="text-sm text-gray-500">
                    Level 12, Betopia Tower, Gulshan-2, Dhaka 1212, Bangladesh
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FF8F3D] mt-0.5" />
                  <a
                    href="mailto:procurement@betopiagroup.com"
                    className="text-sm text-gray-700 hover:text-[#FF8F3D] transition-colors"
                  >
                    procurement@betopiagroup.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FF8F3D] mt-0.5" />
                  <p className="text-sm text-gray-500">+880 2-XXXX-XXXX</p>
                </div>
              </div>
            </div>

            {/* Bank Partner */}
            <div>
              <h3 className="text-xl font-bold text-black mb-6">
                Bank Partner
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#FF8F3D] mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-black">
                      Eastern Bank PLC
                    </p>
                    <p className="text-sm text-gray-500">Procurement Finance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF8F3D] mt-0.5" />
                  <p className="text-sm text-gray-500">
                    Gulshan Branch, Dhaka, Bangladesh
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FF8F3D] mt-0.5" />
                  <a
                    href="mailto:corporate@ebl.com.bd"
                    className="text-sm text-gray-700 hover:text-[#FF8F3D] transition-colors"
                  >
                    corporate@ebl.com.bd
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FF8F3D] mt-0.5" />
                  <p className="text-sm text-gray-500">+880 2-XXXX-XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FAQ Section ══════════ */}
      <section id="faq" className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Find answers to common questions about our procurement process,
              vendor registration, and policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  openFaq === index
                    ? "bg-white border-[#FF8F3D] shadow-md"
                    : "bg-[#FAFAFA] border-transparent hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`text-sm md:text-base font-bold transition-colors ${
                      openFaq === index ? "text-black" : "text-gray-700"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFaq === index
                        ? "bg-[#FF8F3D] text-white rotate-180"
                        : "bg-white text-gray-400 border border-gray-100"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-2 pl-6 pr-2 bg-[#FAFAFA] rounded-full border border-gray-100">
              <span className="text-sm font-medium text-gray-500">
                Still have questions?
              </span>
              <a
                href="mailto:procurement@betopiagroup.com"
                className="px-6 py-2 bg-black text-white rounded-full text-xs font-bold hover:bg-[#FF8F3D] transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
