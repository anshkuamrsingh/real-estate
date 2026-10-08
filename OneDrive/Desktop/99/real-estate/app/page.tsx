
"use client";

import { useState } from "react";

type Menu = "buy" | "rent" | "commercial" | "master" | "ai" | null;

const buyPropertyTypes = [
  "🏢 Flats & Apartments",
  "🏠 Independent House",
  "🏡 Villa",
  "📐 Plot & Land",
  "🌾 Farm Land",
  "🏬 Commercial Property",
];

const buyPopular = [
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "Luxury Homes",
  "Ready to Move",
  "New Launches",
];

const buyPurpose = [
  "🏡 Family Home",
  "💼 Investment Property",
  "🌱 Land Investment",
];

const rentPropertyTypes = [
  "Flats & Apartments",
  "Independent House",
  "Villa",
  "PG / Co-Living",
  "Studio Apartment",
  "Commercial Space",
];

const commercialProperty = [
  "Office Space",
  "Retail Shop",
  "Showroom",
  "Warehouse",
  "Co-Working Space",
  "Commercial Plot",
  "Industrial Property",
];

const commercialBuyRent = [
  "Commercial Property for Sale",
  "Commercial Property for Rent",
  "Commercial Plot",
  "Office for Sale",
  "Office for Rent",
  "Shop for Sale",
];

const commercialBusiness = [
  "Small Office",
  "Corporate Office",
  "Retail Business",
  "Warehouse / Storage",
  "Industrial Use",
];

const masterMap = [
  "Master Plan Map",
  "Zoning Map",
  "Road & Highway Map",
  "Metro / Transit Map",
  "Upcoming Infrastructure",
];

const landChecks = [
  "Residential Zone",
  "Commercial Zone",
  "Green Belt",
  "Lake / River Buffer",
  "Proposed Road / Road Widening",
];

const aiSearch = [
  "AI Property Search",
  "Describe Your Requirement",
  "Smart Property Recommendations",
];

const aiTools = [
  "What Can I Build?",
  "Land Price Estimator",
  "Property Comparison",
];

const aiSeller = [
  "AI Listing Creator",
  "AI Property Valuation",
];

function MenuItem({
  text,
  onSelect,
}: {
  text: string;
  onSelect: (text: string) => void;
}) {
  return (
    <button
      onClick={() => onSelect(text)}
      className="block w-full text-left px-3 py-2 rounded-lg text-sm text-[#202733] hover:bg-[#F7F5EF] hover:text-[#B8935A] transition"
    >
      {text}
    </button>
  );
}

function DesktopNavButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition whitespace-nowrap ${
        active
          ? "bg-white text-[#B8935A]"
          : "hover:bg-white text-[#202733]"
      }`}
    >
      {label}
    </button>
  );
}

function SimpleNav({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-lg hover:bg-white transition whitespace-nowrap"
    >
      {label}
    </button>
  );
}

function MobileNavButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition ${
        active
          ? "bg-[#F7F5EF] text-[#B8935A]"
          : "hover:bg-[#F7F5EF]"
      }`}
    >
      <span>{label}</span>
      <span className="text-xs">{active ? "▲" : "▼"}</span>
    </button>
  );
}

function MobileDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ml-3 mr-1 mt-1 mb-2 bg-[#F7F5EF] rounded-xl p-3 border border-[#E4DED2]">
      {children}
    </div>
  );
}

function CenteredDropdown({
  children,
  small = false,
  medium = false,
  onClose,
}: {
  children: React.ReactNode;
  small?: boolean;
  medium?: boolean;
  onClose?: () => void;
}) {
  return (
    <div className="absolute left-0 right-0 top-[76px] z-[80] px-4 sm:px-6">
      <div
        className={`relative mx-auto bg-white border border-[#E4DED2] rounded-2xl shadow-2xl p-6 ${
          small
            ? "max-w-[420px]"
            : medium
            ? "max-w-[760px]"
            : "max-w-[900px]"
        }`}
      >
        {/* CLOSE DROPDOWN */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F7F5EF] border border-[#E4DED2] flex items-center justify-center text-[#6B7280] hover:bg-[#B8935A] hover:text-white transition"
          aria-label="Close dropdown"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}

export default function Home() {
  const [desktopMenu, setDesktopMenu] = useState<Menu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState<Menu>(null);
  const [selected, setSelected] = useState("");

  const selectItem = (item: string) => {
    setSelected(item);
    setDesktopMenu(null);
    setMobileMenu(null);
    setMobileOpen(false);
  };

  const toggleDesktop = (menu: Menu) => {
    setDesktopMenu(desktopMenu === menu ? null : menu);
  };

  const toggleMobile = (menu: Menu) => {
    setMobileMenu(mobileMenu === menu ? null : menu);
  };

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#202733]">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-[100] bg-[#F0EDE5] border-b border-[#E4DED2]">

        <div className="px-5 lg:px-8 py-5 flex items-center justify-between">

          {/* LOGO */}

          <button
            onClick={() => {
              setDesktopMenu(null);
              setMobileOpen(false);
              setMobileMenu(null);
            }}
            className="text-2xl font-bold text-[#B8935A] whitespace-nowrap"
          >
            HomeNest
          </button>

          {/* DESKTOP NAV */}

          <div className="hidden lg:flex items-center gap-1 text-sm">

            <DesktopNavButton
              label="Buy"
              active={desktopMenu === "buy"}
              onClick={() => toggleDesktop("buy")}
            />

            <DesktopNavButton
              label="Rent"
              active={desktopMenu === "rent"}
              onClick={() => toggleDesktop("rent")}
            />

            <SimpleNav
              label="Sell Property"
              onClick={() => selectItem("Sell Property")}
            />

            <SimpleNav
              label="New Projects"
              onClick={() => selectItem("New Projects")}
            />

            <DesktopNavButton
              label="Commercial"
              active={desktopMenu === "commercial"}
              onClick={() => toggleDesktop("commercial")}
            />

            <DesktopNavButton
              label="Master Plan"
              active={desktopMenu === "master"}
              onClick={() => toggleDesktop("master")}
            />

            <DesktopNavButton
              label="AI Search"
              active={desktopMenu === "ai"}
              onClick={() => toggleDesktop("ai")}
            />

          </div>

          {/* RIGHT ACTIONS */}

          <div className="hidden lg:flex items-center gap-3">

            <button
              onClick={() => selectItem("Login")}
              className="px-4 py-2 rounded-lg hover:bg-white transition"
            >
              Login
            </button>

            <button
              onClick={() => selectItem("List Property")}
              className="bg-[#B8935A] text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition shadow-sm"
            >
              + List Property
            </button>

          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setMobileMenu(null);
              setDesktopMenu(null);
            }}
            className="lg:hidden bg-white border border-[#E4DED2] px-4 py-2 rounded-lg text-lg"
          >
            {mobileOpen ? "×" : "☰"}
          </button>

        </div>

        {/* ================= DESKTOP BUY ================= */}

        {desktopMenu === "buy" && (
          <CenteredDropdown
            onClose={() => setDesktopMenu(null)}
          >
            <div className="mb-5 pr-10">
              <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold">
                BUY
              </p>

              <h3 className="text-xl font-bold mt-1">
                Find your perfect property
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div>
                <p className="text-xs font-bold uppercase text-[#6B7280] mb-3">
                  Property Type
                </p>

                {buyPropertyTypes.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}
              </div>

              <div>
                <p className="text-xs font-bold uppercase text-[#6B7280] mb-3">
                  Popular Searches
                </p>

                {buyPopular.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}
              </div>

              <div>
                <p className="text-xs font-bold uppercase text-[#6B7280] mb-3">
                  By Purpose
                </p>

                {buyPurpose.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}
              </div>

            </div>

            <div className="mt-5 pt-5 border-t border-[#E4DED2] flex justify-end">
              <button
                onClick={() => selectItem("Explore Properties")}
                className="bg-[#B8935A] text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition"
              >
                Explore Properties →
              </button>
            </div>

          </CenteredDropdown>
        )}

        {/* ================= DESKTOP RENT ================= */}

        {desktopMenu === "rent" && (
          <CenteredDropdown
            small
            onClose={() => setDesktopMenu(null)}
          >
            <div className="mb-4 pr-10">
              <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold">
                RENT
              </p>

              <h3 className="text-lg font-bold mt-1">
                Find a place to rent
              </h3>
            </div>

            {rentPropertyTypes.map((item) => (
              <MenuItem
                key={item}
                text={item}
                onSelect={selectItem}
              />
            ))}

          </CenteredDropdown>
        )}

        {/* ================= DESKTOP COMMERCIAL ================= */}

        {desktopMenu === "commercial" && (
          <CenteredDropdown
            onClose={() => setDesktopMenu(null)}
          >
            <div className="mb-5 pr-10">
              <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold">
                COMMERCIAL
              </p>

              <h3 className="text-xl font-bold mt-1">
                Commercial properties
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div>
                <p className="text-xs font-bold uppercase text-[#6B7280] mb-3">
                  Property Type
                </p>

                {commercialProperty.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}
              </div>

              <div>
                <p className="text-xs font-bold uppercase text-[#6B7280] mb-3">
                  Buy / Rent
                </p>

                {commercialBuyRent.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}
              </div>

              <div>
                <p className="text-xs font-bold uppercase text-[#6B7280] mb-3">
                  Business Requirement
                </p>

                {commercialBusiness.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}
              </div>

            </div>

          </CenteredDropdown>
        )}

        {/* ================= DESKTOP MASTER PLAN ================= */}

        {desktopMenu === "master" && (
          <CenteredDropdown
            medium
            onClose={() => setDesktopMenu(null)}
          >
            <div className="mb-5 pr-10">
              <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold">
                MASTER PLAN
              </p>

              <h3 className="text-xl font-bold mt-1">
                Explore land & infrastructure
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <p className="text-xs font-bold uppercase text-[#6B7280] mb-3">
                  Explore by Map
                </p>

                {masterMap.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}
              </div>

              <div>
                <p className="text-xs font-bold uppercase text-[#6B7280] mb-3">
                  Land Checks
                </p>

                {landChecks.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}
              </div>

            </div>

            <div className="mt-5 pt-5 border-t border-[#E4DED2]">
              <button
                onClick={() => selectItem("Interactive Master Plan")}
                className="bg-[#B8935A] text-white px-5 py-2.5 rounded-lg"
              >
                Open Interactive Map →
              </button>
            </div>

          </CenteredDropdown>
        )}

        {/* ================= DESKTOP AI SEARCH ================= */}

        {desktopMenu === "ai" && (
          <CenteredDropdown
            medium
            onClose={() => setDesktopMenu(null)}
          >
            <div className="flex items-center gap-3 mb-5 pr-10">

              <div className="w-10 h-10 rounded-xl bg-[#F7F5EF] flex items-center justify-center text-xl">
                ✨
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold">
                  AI PROPERTY SEARCH
                </p>

                <h3 className="text-xl font-bold">
                  Find property using AI
                </h3>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

              <div>
                <p className="text-xs font-bold uppercase text-[#6B7280] mb-3">
                  Find Property
                </p>

                {aiSearch.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}
              </div>

              <div>
                <p className="text-xs font-bold uppercase text-[#6B7280] mb-3">
                  AI Tools
                </p>

                {aiTools.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}
              </div>

              <div>
                <p className="text-xs font-bold uppercase text-[#6B7280] mb-3">
                  For Sellers
                </p>

                {aiSeller.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}
              </div>

            </div>

            <div className="mt-5 pt-5 border-t border-[#E4DED2]">
              <button
                onClick={() => selectItem("AI Property Search")}
                className="bg-[#B8935A] text-white px-5 py-2.5 rounded-lg"
              >
                Start AI Search →
              </button>
            </div>

          </CenteredDropdown>
        )}

        {/* ================= MOBILE MENU ================= */}

        {mobileOpen && (
          <div className="lg:hidden border-t border-[#E4DED2] bg-white px-4 py-4 max-h-[75vh] overflow-y-auto">

            <MobileNavButton
              label="Buy"
              active={mobileMenu === "buy"}
              onClick={() => toggleMobile("buy")}
            />

            {mobileMenu === "buy" && (
              <MobileDropdown>

                <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold mb-2">
                  Property Type
                </p>

                {buyPropertyTypes.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}

                <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold mt-4 mb-2">
                  Popular Searches
                </p>

                {buyPopular.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}

                <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold mt-4 mb-2">
                  By Purpose
                </p>

                {buyPurpose.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}

              </MobileDropdown>
            )}

            <MobileNavButton
              label="Rent"
              active={mobileMenu === "rent"}
              onClick={() => toggleMobile("rent")}
            />

            {mobileMenu === "rent" && (
              <MobileDropdown>
                {rentPropertyTypes.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}
              </MobileDropdown>
            )}

            <button
              onClick={() => selectItem("Sell Property")}
              className="w-full text-left px-4 py-3 rounded-xl hover:bg-[#F7F5EF]"
            >
              Sell Property
            </button>

            <button
              onClick={() => selectItem("New Projects")}
              className="w-full text-left px-4 py-3 rounded-xl hover:bg-[#F7F5EF]"
            >
              New Projects
            </button>

            <MobileNavButton
              label="Commercial"
              active={mobileMenu === "commercial"}
              onClick={() => toggleMobile("commercial")}
            />

            {mobileMenu === "commercial" && (
              <MobileDropdown>

                <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold mb-2">
                  Property Type
                </p>

                {commercialProperty.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}

                <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold mt-4 mb-2">
                  Buy / Rent
                </p>

                {commercialBuyRent.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}

                <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold mt-4 mb-2">
                  Business Requirement
                </p>

                {commercialBusiness.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}

              </MobileDropdown>
            )}

            <MobileNavButton
              label="Master Plan"
              active={mobileMenu === "master"}
              onClick={() => toggleMobile("master")}
            />

            {mobileMenu === "master" && (
              <MobileDropdown>

                <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold mb-2">
                  Explore by Map
                </p>

                {masterMap.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}

                <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold mt-4 mb-2">
                  Land Checks
                </p>

                {landChecks.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}

                <button
                  onClick={() => selectItem("Interactive Master Plan")}
                  className="w-full mt-3 bg-[#B8935A] text-white px-4 py-3 rounded-xl"
                >
                  Open Interactive Map →
                </button>

              </MobileDropdown>
            )}

            <MobileNavButton
              label="AI Search"
              active={mobileMenu === "ai"}
              onClick={() => toggleMobile("ai")}
            />

            {mobileMenu === "ai" && (
              <MobileDropdown>

                <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold mb-2">
                  Find Property
                </p>

                {aiSearch.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}

                <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold mt-4 mb-2">
                  AI Tools
                </p>

                {aiTools.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}

                <p className="text-xs uppercase tracking-wider text-[#B8935A] font-semibold mt-4 mb-2">
                  For Sellers
                </p>

                {aiSeller.map((item) => (
                  <MenuItem
                    key={item}
                    text={item}
                    onSelect={selectItem}
                  />
                ))}

              </MobileDropdown>
            )}

            <button
              onClick={() => selectItem("Login")}
              className="w-full text-left px-4 py-3 rounded-xl hover:bg-[#F7F5EF]"
            >
              Login
            </button>

            <button
              onClick={() => selectItem("List Property")}
              className="w-full bg-[#B8935A] text-white px-5 py-3 rounded-xl mt-2"
            >
              + List Property
            </button>

          </div>
        )}

      </nav>

      {/* ================= HERO ================= */}

      <section className="px-5 sm:px-8 py-16 lg:py-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div>

            <p className="text-[#B8935A] font-semibold mb-3">
              Smarter way to find property
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Find a place
              <br />
              you&apos;ll love.
            </h1>

            <p className="mt-5 text-[#6B7280] text-lg max-w-xl">
              Discover premium homes, plots and properties across India.
            </p>

            {/* SEARCH CARD */}

            <div className="mt-9 bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-[#E4DED2]">

              <div className="flex gap-2 mb-5">

                <button className="bg-[#B8935A] text-white px-5 py-2.5 rounded-lg">
                  Buy
                </button>

                <button
                  onClick={() => selectItem("Rent Search")}
                  className="px-5 py-2.5 rounded-lg hover:bg-[#F7F5EF]"
                >
                  Rent
                </button>

                <button
                  onClick={() => selectItem("Sell Property")}
                  className="px-5 py-2.5 rounded-lg hover:bg-[#F7F5EF]"
                >
                  Sell
                </button>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                <input
                  className="border border-[#E4DED2] rounded-lg px-4 py-3 outline-none focus:border-[#B8935A]"
                  placeholder="Enter city, locality or project"
                />

                <select className="border border-[#E4DED2] rounded-lg px-4 py-3 outline-none focus:border-[#B8935A]">
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Villa</option>
                  <option>Plot & Land</option>
                  <option>Commercial</option>
                </select>

                <select className="border border-[#E4DED2] rounded-lg px-4 py-3 outline-none focus:border-[#B8935A]">
                  <option>Budget</option>
                  <option>Under ₹50 Lakh</option>
                  <option>₹50 Lakh - ₹1 Cr</option>
                  <option>₹1 Cr - ₹2 Cr</option>
                  <option>₹2 Cr+</option>
                </select>

                <button
                  onClick={() => selectItem("Search Properties")}
                  className="bg-[#B8935A] text-white rounded-lg px-5 py-3 font-semibold hover:opacity-90 transition"
                >
                  Search Properties →
                </button>

              </div>

              <div className="mt-4">

                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <span>✨</span>
                  <span>AI Property Search</span>
                </div>

                <input
                  className="w-full mt-3 bg-white border border-[#E4DED2] rounded-lg px-4 py-3 outline-none focus:border-[#B8935A]"
                  placeholder="Try: 2 BHK in Noida under ₹80L near metro"
                />

              </div>

            </div>

          </div>

          {/* RIGHT — CSS 3D HOUSE */}

          <div className="relative min-h-[480px] flex items-center justify-center">

            <div className="absolute top-12 right-5 sm:right-16 bg-white border border-[#E4DED2] rounded-2xl px-5 py-4 shadow-xl z-20">
              <p className="text-xs text-[#6B7280]">
                Premium Listings
              </p>
              <p className="text-xl font-bold">
                12,000+
              </p>
            </div>

            <div className="absolute bottom-12 left-5 sm:left-12 bg-[#202733] text-white rounded-2xl px-5 py-4 shadow-xl z-20">
              <p className="text-xs text-white/60">
                Smart Experience
              </p>
              <p className="font-semibold">
                AI Powered ✨
              </p>
            </div>

            <div
              className="relative w-[320px] h-[300px] sm:w-[420px] sm:h-[360px]"
              style={{
                perspective: "1000px",
              }}
            >

              {/* Ground */}

              <div
                className="absolute left-1/2 bottom-4 -translate-x-1/2 w-[330px] h-[90px] rounded-[50%] bg-[#E8E2D5]"
                style={{
                  transform: "rotateX(70deg)",
                }}
              />

              {/* HOUSE BODY */}

              <div
                className="absolute left-1/2 top-[95px] -translate-x-1/2 w-[250px] h-[170px] bg-white border border-[#D8D0C2] shadow-2xl"
                style={{
                  transform: "rotateY(-12deg) rotateX(2deg)",
                  transformStyle: "preserve-3d",
                }}
              >

                {/* Front windows */}

                <div className="absolute left-8 top-10 w-12 h-16 bg-[#B8935A] border-4 border-[#202733]" />

                <div className="absolute left-[88px] top-10 w-12 h-16 bg-[#B8935A] border-4 border-[#202733]" />

                <div className="absolute right-8 top-10 w-12 h-16 bg-[#B8935A] border-4 border-[#202733]" />

                {/* Door */}

                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-14 h-24 bg-[#202733] rounded-t-xl" />

                {/* Balcony */}

                <div className="absolute -right-7 top-20 w-10 h-28 bg-[#F0EDE5] border border-[#D8D0C2]" />

              </div>

              {/* Roof */}

              <div
                className="absolute left-1/2 top-5 -translate-x-1/2 w-0 h-0 border-l-[145px] border-r-[145px] border-b-[105px] border-l-transparent border-r-transparent border-b-[#B8935A]"
                style={{
                  transform: "translateX(-50%) rotateY(-12deg)",
                  filter: "drop-shadow(0 18px 12px rgba(0,0,0,0.12))",
                }}
              />

              {/* Roof highlight */}

              <div
                className="absolute left-1/2 top-[35px] -translate-x-1/2 w-[180px] h-2 bg-white/40 rounded-full"
                style={{
                  transform: "translateX(-50%) rotate(-18deg)",
                }}
              />

              {/* Trees */}

              <div className="absolute left-5 bottom-20 text-6xl">
                🌳
              </div>

              <div className="absolute right-3 bottom-20 text-5xl">
                🌳
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CATEGORIES ================= */}

      <section className="bg-white px-5 sm:px-8 py-14 border-t border-[#E4DED2]">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-end justify-between mb-7">

            <div>
              <p className="text-sm text-[#B8935A] font-semibold mb-1">
                EXPLORE
              </p>

              <h2 className="text-3xl font-bold">
                Explore Properties
              </h2>
            </div>

            <button
              onClick={() => selectItem("View All Properties")}
              className="text-[#B8935A] font-medium hover:underline"
            >
              View All →
            </button>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

            {[
              {
                title: "Apartments",
                icon: "🏢",
              },
              {
                title: "Houses",
                icon: "🏠",
              },
              {
                title: "Villas",
                icon: "🏡",
              },
              {
                title: "Plots & Land",
                icon: "📐",
              },
              {
                title: "Commercial",
                icon: "🏬",
              },
            ].map((item) => (

              <button
                key={item.title}
                onClick={() => selectItem(item.title)}
                className="bg-[#F7F5EF] rounded-2xl p-7 text-center hover:shadow-lg hover:-translate-y-1 transition border border-transparent hover:border-[#E4DED2]"
              >

                <div className="text-4xl mb-4">
                  {item.icon}
                </div>

                <p className="font-semibold">
                  {item.title}
                </p>

                <p className="text-xs text-[#6B7280] mt-1">
                  Explore →
                </p>

              </button>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="px-5 sm:px-8 py-14">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="bg-white border border-[#E4DED2] rounded-2xl p-7">
            <div className="text-3xl mb-5">📍</div>

            <h3 className="text-xl font-bold">
              Explore by Location
            </h3>

            <p className="text-[#6B7280] mt-2 leading-6">
              Discover properties across cities, localities and
              upcoming neighbourhoods.
            </p>
          </div>

          <div className="bg-white border border-[#E4DED2] rounded-2xl p-7">
            <div className="text-3xl mb-5">🗺️</div>

            <h3 className="text-xl font-bold">
              Smart Land Search
            </h3>

            <p className="text-[#6B7280] mt-2 leading-6">
              Understand plots, zoning, infrastructure and
              development potential in one place.
            </p>
          </div>

          <div className="bg-white border border-[#E4DED2] rounded-2xl p-7">
            <div className="text-3xl mb-5">✨</div>

            <h3 className="text-xl font-bold">
              AI Assisted Search
            </h3>

            <p className="text-[#6B7280] mt-2 leading-6">
              Describe what you need and discover property
              recommendations built around your requirements.
            </p>
          </div>

        </div>

      </section>

      {/* ================= SELECTED TOAST ================= */}

      {selected && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-32px)] max-w-sm">

          <div className="bg-[#202733] text-white rounded-2xl px-5 py-4 shadow-2xl flex items-center justify-between">

            <div>
              <p className="text-xs text-white/60">
                Selected
              </p>

              <p className="font-semibold">
                {selected}
              </p>
            </div>

            <button
              onClick={() => setSelected("")}
              className="text-xl text-white/60 hover:text-white"
              aria-label="Close selected message"
            >
              ×
            </button>

          </div>

        </div>
      )}

    </main>
  );
}
