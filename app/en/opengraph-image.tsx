import { ImageResponse } from "next/og";

export const alt = "Louis Bolatre — Senior Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#18181b",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#818cf8",
            marginBottom: 24,
          }}
        >
          Senior Product Manager
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1 }}>
          Louis Bolatre
        </div>
        <div style={{ fontSize: 32, color: "#a1a1aa", marginTop: 28 }}>
          Product designer &amp; builder (0 to 1)
        </div>
      </div>
    ),
    { ...size }
  );
}
