import Navbar from "../components/Navbar";

export default function FaceRecognition() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0b0d", color: "#f3f4f6", fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <div style={{
          background: "rgba(255, 255, 255, 0.02)",
          borderRadius: 24,
          border: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "64px 40px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          backdropFilter: "blur(12px)",
        }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>🚀</div>
          <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
            Coming Soon
          </h2>
          <p style={{ color: "#9ca3af", fontSize: 16, lineHeight: 1.6, margin: "0 0 32px" }}>
            Face recognition is under development. Soon you'll be able to upload a selfie and automatically discover every event photo you appear in.
          </p>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(139, 92, 246, 0.15)",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            borderRadius: 99,
            padding: "10px 20px",
            color: "#a78bfa",
            fontSize: 14,
            fontWeight: 600,
          }}>
            ✨ Powered by face-api.js + TensorFlow.js
          </div>
        </div>
      </div>
    </div>
  );
}