import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/home.html", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/members-leadership", destination: "/team", permanent: true },
      { source: "/members-leadership.html", destination: "/team", permanent: true },
      {
        source: "/members-leadership/leadership-team",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/members-leadership/leadership-team.html",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/members-leadership/alumni",
        destination: "/team#alumni",
        permanent: true,
      },
      {
        source: "/members-leadership/alumni.html",
        destination: "/team#alumni",
        permanent: true,
      },
      {
        source: "/members-leadership/members",
        destination: "/team#members",
        permanent: true,
      },
      {
        source: "/members-leadership/members.html",
        destination: "/team#members",
        permanent: true,
      },
      { source: "/activities.html", destination: "/activities", permanent: true },
      { source: "/photo-gallery", destination: "/gallery", permanent: true },
      { source: "/photo-gallery.html", destination: "/gallery", permanent: true },
      {
        source: "/microplastics-data",
        destination: "/impact#microplastics",
        permanent: true,
      },
      {
        source: "/microplastics-data.html",
        destination: "/impact#microplastics",
        permanent: true,
      },
      { source: "/campaigns", destination: "/impact#campaigns", permanent: true },
      { source: "/campaigns.html", destination: "/impact#campaigns", permanent: true },
      { source: "/causes", destination: "/impact#causes", permanent: true },
      { source: "/causes.html", destination: "/impact#causes", permanent: true },
      { source: "/money-matters", destination: "/impact#fundraising", permanent: true },
      { source: "/money-matters.html", destination: "/impact#fundraising", permanent: true },
      { source: "/awards", destination: "/impact#awards", permanent: true },
      { source: "/awards.html", destination: "/impact#awards", permanent: true },
      {
        source: "/publications-and-presentations",
        destination: "/publications",
        permanent: true,
      },
      {
        source: "/publications-and-presentations.html",
        destination: "/publications",
        permanent: true,
      },
      {
        source: "/culture-and-diversity",
        destination: "/resources#culture",
        permanent: true,
      },
      {
        source: "/culture-and-diversity.html",
        destination: "/resources#culture",
        permanent: true,
      },
      { source: "/documents", destination: "/resources#documents", permanent: true },
      { source: "/documents.html", destination: "/resources#documents", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us.html", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
