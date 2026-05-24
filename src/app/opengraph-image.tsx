import { ImageResponse } from "next/og";

export const alt = "Buffet Wishes — Buffet infantil em Tatuapé / SP";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #fdece4 0%, #f7e8e4 60%, #fde9e0 100%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#76051b",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#76051b">
            <path d="M12 1.5l2.6 6.7 7.2.5-5.5 4.7 1.8 7-6.1-4-6.1 4 1.8-7-5.5-4.7 7.2-.5z" />
          </svg>
          Buffet Wishes
        </div>
        <div
          style={{
            color: "#4b0210",
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: 36,
            maxWidth: 980,
          }}
        >
          Quer descobrir até onde seus desejos podem te levar?
        </div>
        <div
          style={{
            color: "#5b0414",
            fontSize: 32,
            marginTop: 32,
            opacity: 0.85,
          }}
        >
          Buffet infantil em Tatuapé / SP — 1000 m² e mais de 30 atrações
        </div>
      </div>
    ),
    { ...size },
  );
}
