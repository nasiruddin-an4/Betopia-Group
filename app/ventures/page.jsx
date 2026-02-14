"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Building2, ArrowUpRight } from "lucide-react";

/* ------------------- HERO DATA ------------------- */
const HERO_DATA = {
  badge: "Betopia Group",
  title_start: "Our Thriving",
  title_highlight: "Ventures",
  description:
    "A powerful network of specialized ventures delivering world-class excellence across Digital Solutions, Education, Energy, and Global Commerce.",
};

function VentureCard({ company }) {
  return (
    <a
      href={company.websiteUrl || "https://betopiagroup.com/"}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full"
    >
      <div className="relative h-full bg-white border border-slate-200 rounded-3xl p-8 transition-all duration-300 hover:border-[#FF8F3D]/30 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center">
        {/* Logo / Icon Area */}
        <div className="w-full h-24 mb-6 relative flex items-center justify-center p-2">
          {company.logoUrl ? (
            <div className="relative w-full h-full">
              <Image
                src={company.logoUrl}
                alt={company.name}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#FF8F3D]/10 group-hover:border-[#FF8F3D]/20 transition-colors mx-auto">
              <Building2 className="w-10 h-10 text-slate-500 group-hover:text-[#FF8F3D] transition-colors" />
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#FF8F3D] transition-colors">
          {company.name}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {company.description}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100 w-full flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#FF8F3D] transition-colors">
          <span>Visit Website</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </a>
  );
}

function VentureCardSkeleton() {
  return (
    <div className="relative h-full bg-white border border-slate-200 rounded-3xl p-8 animate-pulse">
      <div className="w-full h-24 mb-6 bg-slate-100 rounded-xl"></div>
      <div className="h-6 bg-slate-100 rounded-lg w-3/4 mx-auto mb-3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-slate-100 rounded w-full"></div>
        <div className="h-4 bg-slate-100 rounded w-5/6 mx-auto"></div>
      </div>
      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="h-4 bg-slate-100 rounded w-24"></div>
      </div>
    </div>
  );
}

/* ------------------- VENTURES DATA ------------------- */
const VENTURES_DATA = [
  {
    _id: "1",
    name: "BD Calling Academy",
    description:
      "Empowering the next generation through innovative learning platforms and world-class educational programs.",
    logoUrl: "/logo/BDcallingAcademy@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "2",
    name: "BD Calling Enterprise",
    description:
      "Leading digital transformation with AI-powered solutions and cutting-edge software development for enterprises worldwide.",
    logoUrl: "/logo/bdcallingEnterprise@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "3",
    name: "JVai",
    description:
      "AI-powered solutions driving innovation and automation across industries.",
    logoUrl: "/logo/JVai@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "4",
    name: "BackBencher Studio",
    description:
      "Creative digital agency delivering exceptional design and development solutions.",
    logoUrl: "/logo/backBencherStudio@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "5",
    name: "BeUp",
    description:
      "Startup accelerator and innovation hub fostering entrepreneurship and growth.",
    logoUrl: "/logo/beUp@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "6",
    name: "ClayStone",
    description:
      "Building infrastructure and real estate solutions for sustainable communities.",
    logoUrl: "/logo/clayStone@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "7",
    name: "Data Insight",
    description:
      "Big data analytics and business intelligence solutions for data-driven decisions.",
    logoUrl: "/logo/dataInsight@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "8",
    name: "Fire AI",
    description:
      "Next-generation artificial intelligence research and development.",
    logoUrl: "/logo/fireAi@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "9",
    name: "Opsoriegro",
    description:
      "Operational excellence and strategic consulting for enterprise growth.",
    logoUrl: "/logo/opsoriegro@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "10",
    name: "Pixelors Studio",
    description:
      "Premium UI/UX design and branding studio creating stunning digital experiences.",
    logoUrl: "/logo/pixelorsStudio@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "11",
    name: "PulseGrid",
    description:
      "Smart grid and energy management solutions for a sustainable future.",
    logoUrl: "/logo/pulseGrid@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "12",
    name: "ScaleUp",
    description:
      "Business scaling and growth acceleration services for ambitious companies.",
    logoUrl: "/logo/scaleUp@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "13",
    name: "SM Technology",
    description:
      "Innovative technology solutions and IT services for modern enterprises.",
    logoUrl: "/logo/smTechonology@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "14",
    name: "Softvence",
    description: "Custom software development and digital product engineering.",
    logoUrl: "/logo/softvence@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "15",
    name: "SparkTech Agency",
    description: "Full-service digital marketing and technology agency.",
    logoUrl: "/logo/sparktechAgency@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
  {
    _id: "16",
    name: "ZenexCloud",
    description:
      "Cloud infrastructure and DevOps solutions for scalable applications.",
    logoUrl: "/logo/zenexcloud@4x.png",
    websiteUrl: "https://betopiagroup.com/",
  },
];

export default function VenturesPage() {
  const ventures = VENTURES_DATA;

  return (
    <main className="min-h-screen bg-white text-slate-600 font-sans selection:bg-[#FF8F3D]/20 selection:text-[#0B1B32] overflow-x-hidden">
      {/* ------------------- HERO SECTION ------------------- */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 pb-12 bg-[#F8F9FC] border-b border-slate-200">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF8F3D]/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-50"></div>
          {/* Floating Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center relative max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
            <Building2 className="w-4 h-4 text-[#FF8F3D]" />
            <span className="text-slate-900 text-xs font-bold tracking-[0.2em] uppercase">
              {HERO_DATA.badge}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0B1B32] tracking-tight mb-6 leading-tight">
            {HERO_DATA.title_start}{" "}
            <span className="text-[#FF8F3D]">{HERO_DATA.title_highlight}</span>
          </h1>

          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            {HERO_DATA.description}
          </p>
        </div>
      </section>

      {/* ------------------- VENTURES GRID ------------------- */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventures.map((company) => (
              <VentureCard key={company._id} company={company} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
