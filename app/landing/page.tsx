"use client"

import { useState, useEffect, useRef } from "react"

// Image assets (valid for 7 days)
const imgGroup = "https://www.figma.com/api/mcp/asset/40bb9c5b-7684-437c-95d0-6889fba011ec"
const imgGroup1 = "https://www.figma.com/api/mcp/asset/cdd04d6c-d929-4b03-aea3-847b4d3836f1"
const imgIconArrowRight = "https://www.figma.com/api/mcp/asset/07722391-a91c-4772-93ef-175fdc26c481"
const imgRobot = "https://www.figma.com/api/mcp/asset/161f9212-fc35-405c-9aa7-5c8515c81264"
const imgPartnerBg = "https://www.figma.com/api/mcp/asset/55ce1182-4cf2-4c20-81e4-b9c781c16a7d"
const imgLapp = "https://www.figma.com/api/mcp/asset/d7d9e1a8-fc61-467d-aa36-4673d27d6fac"
const imgKuka = "https://www.figma.com/api/mcp/asset/91fa9853-04cd-4aee-b938-36ac558f9623"
const imgWm = "https://www.figma.com/api/mcp/asset/a5a882d8-6272-4772-9a07-59001aae9523"
const imgWscad = "https://www.figma.com/api/mcp/asset/535e9f54-1e5b-43f2-81d1-643c4224a939"
const imgBiz1 = "https://www.figma.com/api/mcp/asset/c1b9dfbf-4ce0-434a-b126-4743e4ee3c0f"
const imgBiz2 = "https://www.figma.com/api/mcp/asset/6a1cfbd5-66cf-4432-8613-0edec08ef587"
const imgSol1 = "https://www.figma.com/api/mcp/asset/697880dc-c877-4d34-b482-66d0f324332a"
const imgSol2 = "https://www.figma.com/api/mcp/asset/52bfa58c-de2d-41b9-9889-b5a2e76be07d"
const imgLogoWhite1 = "https://www.figma.com/api/mcp/asset/e49847f3-b0be-461f-b133-f524f0d4d65a"
const imgLogoWhite2 = "https://www.figma.com/api/mcp/asset/c2d9178a-2ce5-4d56-83f2-17e6aa6f9896"
const imgLang = "https://www.figma.com/api/mcp/asset/d72100e0-d156-4517-bd4b-d124a81eda84"
const imgMenuIcon = "https://www.figma.com/api/mcp/asset/c6b3ef85-b3b2-458e-81fc-7e2207bd3d8f"
const imgSubtract = "https://www.figma.com/api/mcp/asset/c2134ddc-fdb6-4ace-b8c1-22163564b68f"
const imgVector = "https://www.figma.com/api/mcp/asset/acfb4bec-109f-4ba8-98ba-8266437627d9"
const imgIconArrowRight1 = "https://www.figma.com/api/mcp/asset/f310f435-69eb-4d9f-ba3d-15f3bff9f261"
const imgSubtract1 = "https://www.figma.com/api/mcp/asset/a12e8a5b-a2ab-45fd-ba97-d196c59c65fd"
const imgFrameMask = "https://www.figma.com/api/mcp/asset/9eceb997-6ee5-4fcb-a04b-e96be43aafa6"
const imgPartnerMask = "https://www.figma.com/api/mcp/asset/76a92e34-3194-4453-89a2-f58c7144cec3"
const imgCardMask = "https://www.figma.com/api/mcp/asset/1a15bdfe-f4fd-4c17-9e88-20a04c407a30"
const imgSolMask = "https://www.figma.com/api/mcp/asset/cbfc0685-4d37-41e5-b37d-bdc935a9440d"

// Accordion item type
type AccordionItem = {
  title: string
  content?: string
  active?: boolean
}

const accordionItems: AccordionItem[] = [
  {
    title: "혁신, 신뢰, 효율성",
    content: "디지털 트윈과 로봇 자동화의 결합으로 스마트 제조 혁신을 선도합니다. 효율성과 지속 가능성을 극대화하는 통합 솔루션을 제공합니다.",
    active: true,
  },
  { title: "사업영역" },
  { title: "우리가 만드는 미래" },
]

function Footer() {
  return (
    <div className="bg-[#181818] w-[375px] px-[20px] pt-[60px] pb-[0px]">
      {/* Menu */}
      <div className="flex flex-col gap-[16px] items-start w-full">
        {/* Home */}
        <div className="flex flex-col gap-[10px] items-start w-full">
          <div className="flex items-center justify-between w-full">
            <p className="font-['Pretendard',sans-serif] text-[15px] text-white">Home</p>
            <div className="-rotate-90 size-[16px]">
              <img alt="" className="size-full" src={imgIconArrowRight} />
            </div>
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col gap-[10px] items-start w-full">
          <div className="flex items-center justify-between w-full">
            <p className="font-['Pretendard',sans-serif] text-[15px] text-white">About</p>
            <div className="-rotate-90 size-[16px]">
              <img alt="" className="size-full" src={imgIconArrowRight} />
            </div>
          </div>
          <p className="font-['Pretendard',sans-serif] text-[14px] text-[#b0b0b0]">Our Story</p>
          <p className="font-['Pretendard',sans-serif] text-[14px] text-[#b0b0b0]">Mission &amp; Vision</p>
        </div>
        <div className="bg-white/5 h-px w-full" />

        {/* Business */}
        <div className="flex flex-col gap-[10px] items-start w-full">
          <div className="flex items-center justify-between w-full">
            <p className="font-['Pretendard',sans-serif] text-[15px] text-white">Business</p>
            <div className="-rotate-90 size-[16px]">
              <img alt="" className="size-full" src={imgIconArrowRight} />
            </div>
          </div>
          <p className="font-['Pretendard',sans-serif] text-[14px] text-[#b0b0b0]">Robot SI Solution</p>
          <p className="font-['Pretendard',sans-serif] text-[14px] text-[#b0b0b0]">R&amp;D</p>
        </div>
        <div className="bg-white/5 h-px w-full" />

        {/* HW&SW */}
        <div className="flex flex-col gap-[10px] items-start w-full">
          <div className="flex items-center justify-between w-full">
            <p className="font-['Pretendard',sans-serif] text-[15px] text-white">HW&amp;SW</p>
            <div className="-rotate-90 size-[16px]">
              <img alt="" className="size-full" src={imgIconArrowRight} />
            </div>
          </div>
          {["KUKA", "Weidmuller", "LAPP"].map((item) => (
            <p key={item} className="font-['Inter',sans-serif] text-[14px] text-[#b0b0b0]">{item}</p>
          ))}
        </div>
        <div className="bg-white/5 h-px w-full" />

        {/* Contact Us */}
        <div className="flex flex-col gap-[10px] items-start w-full">
          <div className="flex items-center justify-between w-full">
            <p className="font-['Pretendard',sans-serif] text-[15px] text-white">Contact Us</p>
            <div className="-rotate-90 size-[16px]">
              <img alt="" className="size-full" src={imgIconArrowRight} />
            </div>
          </div>
          {["Contact", "Visit Us"].map((item) => (
            <p key={item} className="font-['Inter',sans-serif] text-[14px] text-[#b0b0b0]">{item}</p>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="font-['Pretendard',sans-serif] leading-normal mt-[40px] text-[15px] text-[#b0b0b0]">
        <p className="mb-0">We provide standardized and customizable robotic automation systems that enhance productivity, efficiency, and reliability in manufacturing environments.</p>
      </div>

      {/* Logo */}
      <div className="h-[24px] overflow-clip relative w-[130px] mt-[40px]">
        <div className="absolute inset-[17.12%_0.1%_1%_18.87%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgGroup} />
        </div>
        <div className="absolute inset-[0.98%_86.88%_4.55%_-0.03%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgGroup1} />
        </div>
      </div>

      {/* Copyright — 좌측 정렬 */}
      <p className="font-['Pretendard',sans-serif] leading-[20px] text-[12px] text-[#b0b0b0] py-[20px] mt-[8px]">
        Copyright © 2025. ROBOTEGRA. All rights reserved.
      </p>
    </div>
  )
}

export default function MobileMain() {
  const [activeAccordion, setActiveAccordion] = useState(0)
  const section4Ref = useRef<HTMLDivElement>(null)
  const solScrollRef = useRef<HTMLDivElement>(null)
  const [solProgress, setSolProgress] = useState(0)
  const [pageScroll, setPageScroll] = useState(0)

  useEffect(() => {
    const el = solScrollRef.current
    if (!el) return
    const onScroll = () => setSolProgress(el.scrollLeft / (el.scrollWidth - el.clientWidth))
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onPageScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setPageScroll(total > 0 ? window.scrollY / total : 0)
    }
    window.addEventListener("scroll", onPageScroll, { passive: true })
    return () => window.removeEventListener("scroll", onPageScroll)
  }, [])
  const [card1Visible, setCard1Visible] = useState(false)
  const [card2Expanded, setCard2Expanded] = useState(false)
  const [card2Seen, setCard2Seen] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    let prevIn = false

    const check = () => {
      const el = section4Ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const inView = rect.top < vh * 0.85 && rect.bottom > 0

      if (inView && !prevIn) {
        prevIn = true
        setCard1Visible(true)
        setCard2Seen(true)
        timer = setTimeout(() => setCard2Expanded(true), 500)
      } else if (!inView && prevIn) {
        prevIn = false
        clearTimeout(timer)
        setCard2Expanded(false)
        // 아래 방향으로 완전히 벗어났을 때만 Card1 리셋
        if (rect.top >= vh) setCard1Visible(false)
      }
    }

    window.addEventListener("scroll", check, { passive: true })
    check()
    return () => {
      window.removeEventListener("scroll", check)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="bg-white relative w-[375px] mx-auto overflow-x-hidden">

      {/* Top Navigation */}
      <div className="sticky top-0 z-50 bg-white border-b border-[#f45f00] flex h-[60px] items-center justify-between px-[20px] py-[18px] w-[375px]">
        <div className="h-[29px] overflow-clip relative shrink-0 w-[160px]">
          <div className="absolute inset-[17.12%_0.1%_1%_18.87%]">
            <img alt="Robotegra" className="absolute block max-w-none size-full" src={imgLogoWhite1} />
          </div>
          <div className="absolute inset-[0.98%_86.88%_4.55%_-0.03%]">
            <img alt="" className="absolute block max-w-none size-full" src={imgLogoWhite2} />
          </div>
        </div>
        <div className="flex gap-[16px] items-center">
          <div className="relative size-[24px]">
            <img alt="언어" className="absolute block max-w-none size-full" src={imgLang} />
          </div>
          <div className="relative size-[24px]">
            <img alt="메뉴" className="absolute block max-w-none size-full" src={imgMenuIcon} />
          </div>
        </div>
      </div>

      {/* Section 1~5 wrapper — 좌측 바가 이 영역에만 걸림 (Footer 제외) */}
      <div className="relative">
        {/* Left bar — gray track */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#cfcfcf]" />
        {/* Left bar — orange fill, 위에서 아래로 채워짐 */}
        <div
          className="absolute left-0 top-0 w-[2px] bg-[#f45f00] origin-top"
          style={{ height: "100%", transform: `scaleY(${pageScroll})` }}
        />

      {/* Section 1: Hero */}
      <div className="relative h-[705px] w-[375px] overflow-hidden bg-[#b2b2b2]">
        {/* Background image */}
        <div
          className="absolute inset-0 size-full"
          style={{ maskImage: `url('${imgFrameMask}')`, maskSize: "cover", maskRepeat: "no-repeat" }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRobot} />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-80" />
        {/* Text content */}
        <div className="absolute left-[20px] top-[275px] text-white not-italic">
          <div className="font-['Pretendard',sans-serif] leading-[52px] text-[48px] whitespace-nowrap">
            <p className="mb-0">Robotics</p>
            <p className="mb-0">Integrated</p>
            <p>Solution</p>
          </div>
        </div>
        <p className="absolute font-['Pretendard',sans-serif] font-bold leading-[1.1] left-[20px] text-[19px] text-white top-[580px] whitespace-nowrap">
          로봇 통합 솔루션
        </p>
        <div className="absolute font-['Pretendard',sans-serif] leading-normal left-[20px] text-[15px] text-white top-[611px] w-[335px]">
          <p className="mb-0">표준화와 맞춤형을 동시에 제조 현장의 생산성,</p>
          <p className="mb-0">효율성, 신뢰성을 높이는 로봇 자동화 시스템입니다.</p>
          <p>설계부터 현장 배치까지, 전 과정을 책임집니다.</p>
        </div>
      </div>

      {/* Section 2: Accordion */}
      {/* 스크롤 시 펼침 / 클릭 시 해당 영역으로 이동 및 펼침 */}
      <div className="flex flex-col gap-[20px] items-start mx-[20px] py-[20px] w-[335px]">
        {accordionItems.map((item, i) => (
          <div key={i} className="w-full">
            <button
              className="w-full text-left"
              onClick={() => setActiveAccordion(i)}
            >
              <div className="relative h-[24px] w-full overflow-clip">
                <p className={`absolute font-['Pretendard',sans-serif] leading-[24px] left-0 text-[19px] top-0 whitespace-nowrap ${activeAccordion === i ? "text-[#f45f00]" : "text-[#303030]"}`}>
                  {item.title}
                </p>
                <div className="absolute right-0 overflow-clip size-[24px] top-0">
                  <div className="absolute inset-[9.38%]">
                    <img alt="" className="absolute block max-w-none size-full" src={activeAccordion === i ? imgSubtract : imgVector} />
                  </div>
                </div>
              </div>
            </button>
            {activeAccordion === i && item.content && (
              <p className="font-['Pretendard',sans-serif] leading-[20px] mt-[10px] text-[15px] text-[#707070] w-[333px]">
                {item.content}
              </p>
            )}
            {i < accordionItems.length - 1 && (
              <div className="bg-black/5 h-px mt-[20px] w-full" />
            )}
          </div>
        ))}
      </div>

      {/* Section 3: Work with Us / Partners */}
      <div className="relative h-[335px] w-[375px] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{ maskImage: `url('${imgPartnerMask}')`, maskSize: "cover" }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgPartnerBg} />
        </div>
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-black" />

        {/* Section title — 스크롤하여 진입 시 #F45F00으로 전환 */}
        <p className="absolute font-['Pretendard',sans-serif] leading-normal left-[20px] text-[15px] text-white top-[80px] whitespace-nowrap">
          Work with Us
        </p>

        {/* Partner logos — 무한 자동 좌측 스크롤링 / Section 4와 40px 간격 */}
        <div className="absolute bottom-[40px] left-0 w-full overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee 12s linear infinite;
            }
            .scroll-hide::-webkit-scrollbar { display: none; }
            .scroll-hide { -ms-overflow-style: none; scrollbar-width: none; }
            html, body { scrollbar-width: none; -ms-overflow-style: none; }
            html::-webkit-scrollbar, body::-webkit-scrollbar { display: none; }
          `}</style>
          <div className="marquee-track">
            {[0, 1].map((set) => (
              <div key={set} className="flex gap-[8px] items-center px-[8px]">
                <div className="flex items-center justify-center overflow-clip px-[8px] py-[13px] shrink-0">
                  <div className="h-[24px] w-[118px]">
                    <img alt="LAPP" className="h-full w-full object-contain" src={imgLapp} />
                  </div>
                </div>
                <div className="flex items-center justify-center overflow-clip px-[8px] py-[13px] shrink-0">
                  <div className="h-[20px] w-[115px]">
                    <img alt="KUKA" className="h-full w-full object-contain" src={imgKuka} />
                  </div>
                </div>
                <div className="flex items-center justify-center overflow-clip px-[8px] py-[13px] shrink-0">
                  <div className="relative shrink-0 overflow-hidden" style={{ width: "174px", height: "24px" }}>
                    <img alt="Weidmuller" className="absolute max-w-none pointer-events-none" style={{ height: "192.85%", width: "132.91%", left: "-16.33%", top: "-45.52%" }} src={imgWm} />
                  </div>
                </div>
                <div className="flex items-center justify-center overflow-clip px-[8px] py-[13px] shrink-0">
                  <div className="h-[24px] w-[87px]">
                    <img alt="WSCAD" className="h-full w-full object-contain" src={imgWscad} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4: Business Area */}
      {/* Card1(622px) + Card2 top 197px → 전체 721px */}
      <div
        ref={section4Ref}
        className="relative w-[375px] -mt-[40px] z-10 overflow-hidden"
        style={{ height: "721px" }}
      >
        {/* Card 1: 로봇 SI 솔루션 — 60% 아래에서 은은하게 슬라이드 */}
        <div
          className="absolute left-0 top-0 w-[375px] h-[622px] bg-white rounded-tl-[40px] rounded-tr-[40px]"
          style={{
            transform: card1Visible ? "translateY(0)" : "translateY(60%)",
            opacity: card1Visible ? 1 : 0,
            transition: "transform 1s cubic-bezier(0.25,0.1,0.25,1), opacity 0.8s cubic-bezier(0.25,0.1,0.25,1)",
          }}
        >
          <p className="absolute font-['Pretendard',sans-serif] leading-normal left-[20px] text-[15px] text-[#303030] top-[80px] whitespace-nowrap">
            Business Area
          </p>
          <div className="absolute flex items-center gap-[4px] right-[20px] top-[80px]">
            <p className="font-['Pretendard',sans-serif] leading-normal text-[14px] text-[#303030]">Learn more</p>
            <div className="-rotate-90 size-[16px]">
              <img alt="" className="size-full" src={imgIconArrowRight1} />
            </div>
          </div>
          <p className="absolute font-['Pretendard',sans-serif] font-bold leading-none left-[20px] text-[24px] text-[#303030] top-[138px] whitespace-nowrap">
            로봇 SI 솔루션
          </p>
          <div className="absolute font-['Pretendard',sans-serif] leading-[20px] left-[20px] text-[15px] text-[#303030] top-[182px] w-[335px]">
            <p className="mb-0">로봇, 비전, 제어 플랫폼을 통합한 맞춤형 SI 솔루션을</p>
            <p className="mb-0">제공합니다. 설계부터 시운전까지 전 과정을 책임지며,</p>
            <p className="mb-0">화장품·포장·조립·검사 등 다양한 분야에서 안정적인</p>
            <p>자동화 시스템을 구축합니다.</p>
          </div>
          <div className="absolute left-[20px] top-[342px] w-[335px] h-[240px] overflow-hidden">
            <div className="absolute inset-0" style={{ maskImage: `url('${imgCardMask}')`, maskSize: "cover" }}>
              <img alt="로봇 SI 솔루션" className="absolute inset-0 max-w-none object-cover size-full" src={imgBiz1} />
            </div>
          </div>
        </div>

        {/* Card 2: R&D — expand(197px) / collapse(562px peek) */}
        <div
          className="absolute left-0 w-[375px] h-[524px] bg-[#f45f00]"
          style={{
            top: card2Expanded ? "197px" : "562px",
            opacity: card2Seen ? 1 : 0,
            transition: card2Expanded
              ? "top 0.9s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease"
              : "top 0.7s cubic-bezier(0.25,0.1,0.25,1), opacity 0.4s ease",
          }}
        >
          <p className="absolute font-['Pretendard',sans-serif] font-bold leading-none left-[20px] text-[24px] text-white top-[40px] whitespace-nowrap">
            R&amp;D: 미래를 만드는 기술
          </p>
          <div className="absolute font-['Pretendard',sans-serif] leading-[20px] left-[20px] text-[15px] text-white top-[84px] w-[335px]">
            <p className="mb-0">로보테그라 R&amp;D 센터는 가상 세계와 실제 공장을</p>
            <p className="mb-0">연결하는 지능형 시뮬레이션 플랫폼 개발에 집중하는</p>
            <p className="mb-0">전문 연구 조직입니다. 비전 AI, 3D 시뮬레이터,</p>
            <p className="mb-0">산업용 통신 기술을 하나로 통합하고 현장 적용성 높은</p>
            <p>독보적 솔루션을 개발합니다.</p>
          </div>
          <div className="absolute left-[20px] top-[244px] w-[335px] h-[240px] overflow-hidden">
            <div className="absolute inset-0" style={{ maskImage: `url('${imgCardMask}')`, maskSize: "cover" }}>
              <img alt="R&D" className="absolute inset-0 max-w-none object-cover size-full" src={imgBiz2} />
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Solution */}
      {/* 스크롤하여 진입 시 섹션 타이틀 #F45F00으로 전환 */}
      <div className="bg-white relative w-[375px] overflow-hidden px-[20px] pt-[80px] pb-[40px]">
        <p className="font-['Pretendard',sans-serif] leading-normal text-[15px] text-[#f45f00]">Solution</p>
        <p className="font-['Pretendard',sans-serif] font-bold leading-none text-[24px] text-[#303030] mt-[38px] whitespace-nowrap">
          솔루션 적용 사례
        </p>

        {/* Horizontal scroll cards */}
        <div ref={solScrollRef} className="scroll-hide flex gap-[16px] mt-[40px] overflow-x-auto -mx-[20px] px-[20px]">

          {/* Card: 자동차 산업 솔루션 */}
          <div className="relative shrink-0 h-[421px] w-[300px] overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ maskImage: `url('${imgSolMask}')`, maskSize: "cover" }}
            >
              <img alt="자동차 산업" className="absolute inset-0 max-w-none object-cover size-full" src={imgSol1} />
            </div>
            <div className="absolute inset-0 bg-black opacity-80" />
            <div className="absolute left-[20px] bottom-[40px] w-[260px]">
              <div className="flex gap-[4px] items-start mb-[20px]">
                <div className="bg-[rgba(244,95,0,0.4)] border border-black/5 flex items-center justify-center px-[12px] py-[4px] rounded-[20px]">
                  <p className="font-['Pretendard',sans-serif] leading-[16px] text-[12px] text-white text-center whitespace-nowrap">Physical AI</p>
                </div>
                <div className="bg-[rgba(244,95,0,0.4)] border border-black/5 flex items-center justify-center px-[12px] py-[4px] rounded-[20px]">
                  <p className="font-['Pretendard',sans-serif] leading-[16px] text-[12px] text-white text-center whitespace-nowrap">Real-time</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-[14px]">
                <p className="font-['Pretendard',sans-serif] font-bold leading-[24px] text-[19px] text-white whitespace-nowrap">자동차 산업 솔루션</p>
                {/* 카드 활성화 시 색상 전환 */}
                <div className="relative overflow-clip size-[24px]">
                  <div className="absolute inset-[9.38%]">
                    <img alt="" className="absolute block max-w-none size-full" src={imgSubtract} />
                  </div>
                </div>
              </div>
              <div className="font-['Pretendard',sans-serif] leading-[20px] text-[15px] text-[#b0b0b0]">
                <p className="mb-0">피지컬 AI 기반 스프레이 경로 자동화와</p>
                <p className="mb-0">예지 보전 기술로 다품종 차체 도장 공정을</p>
                <p className="mb-0">최적화합니다. 차종에 따라 로봇 경로를</p>
                <p>실시간으로 조정해 균일한 품질을 보장하고, 설비 정지 시간을 최소화합니다.</p>
              </div>
            </div>
          </div>

          {/* Card: 화장품 산업 솔루션 */}
          <div className="relative shrink-0 h-[421px] w-[300px] overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ maskImage: `url('${imgSolMask}')`, maskSize: "cover" }}
            >
              <img alt="화장품 산업" className="absolute inset-0 max-w-none object-cover size-full" src={imgSol2} />
            </div>
            <div className="absolute inset-0 bg-black opacity-80" />
            <div className="absolute left-[20px] bottom-[40px] w-[260px]">
              <div className="flex gap-[4px] items-start mb-[20px]">
                <div className="bg-[rgba(244,95,0,0.4)] border border-black/5 flex items-center justify-center px-[12px] py-[4px] rounded-[20px]">
                  <p className="font-['Pretendard',sans-serif] leading-[16px] text-[12px] text-white text-center whitespace-nowrap">AI Vision</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-[14px]">
                <p className="font-['Pretendard',sans-serif] font-bold leading-[24px] text-[19px] text-white whitespace-nowrap">화장품 산업 솔루션</p>
                {/* 카드 활성화 시 색상 전환 */}
                <div className="relative overflow-clip size-[24px]">
                  <div className="absolute inset-[9.38%]">
                    <img alt="" className="absolute block max-w-none size-full" src={imgSubtract1} />
                  </div>
                </div>
              </div>
              <div className="font-['Pretendard',sans-serif] leading-[20px] text-[15px] text-[#b0b0b0]">
                <p className="mb-0">화장품 산업 특화 고정밀 자동화</p>
                <p className="mb-0">시스템입니다. 유연 포장·조립·고속 이송</p>
                <p className="mb-0">라인에 최적화되어 있으며, AI 비전과 결합해</p>
                <p className="mb-0">다양한 제품 디자인에 완벽한 품질 검사와</p>
                <p>높은 생산 유연성을 동시에 실현합니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 스크롤 progress bar */}
        <div className="mt-[20px] h-[2px] w-full bg-[#e0e0e0] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#f45f00] rounded-full"
            style={{
              width: `${solProgress * 100}%`,
              transition: "width 0.1s ease",
            }}
          />
        </div>
      </div>
      </div> {/* /content wrapper */}

      <Footer />
    </div>
  )
}
