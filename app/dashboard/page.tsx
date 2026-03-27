export default function Dashboard() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#1a1a1a", color: "#fff", height: "100vh", padding: "0", display: "flex", flexDirection: "column", fontSize: "14px" }}>

      {/* 헤더 - 통신 상태 */}
      <header style={{ background: "#111", borderBottom: "1px solid #333", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>이문아이파크 전력제어</div>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#22c55e" }} />
            <span style={{ fontSize: "16px", fontWeight: "bold", color: "#22c55e" }}>통신 정상</span>
          </div>
          <div style={{ color: "#aaa", fontSize: "13px" }}>마지막 수신 14:23:01</div>
          <div style={{ color: "#aaa", fontSize: "13px" }}>2026 / 03 / 24</div>
        </div>
      </header>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "16px", gap: "16px", overflow: "hidden" }}>

        {/* 상태 카드 4개 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          {[
            { label: "VCB #1", status: "정상", kw: "32 kW", color: "#22c55e" },
            { label: "VCB #2", status: "정상", kw: "22 kW", color: "#22c55e" },
            { label: "ACB #1", status: "정상", kw: "120 kW", color: "#22c55e" },
            { label: "ACB #2", status: "이상", kw: "0 kW", color: "#ef4444" },
          ].map((item) => (
            <div key={item.label} style={{ background: "#222", border: `2px solid ${item.color}`, borderRadius: "8px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ color: "#aaa", fontSize: "13px" }}>{item.label}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: item.color }} />
                <span style={{ fontWeight: "bold", color: item.color, fontSize: "15px" }}>{item.status}</span>
              </div>
              <div style={{ fontSize: "28px", fontWeight: "bold" }}>{item.kw}</div>
            </div>
          ))}
        </div>

        {/* 중단: 계통도 + 요약 데이터 */}
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", minHeight: 0 }}>

          {/* 계통도 */}
          <div style={{ background: "#222", borderRadius: "8px", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "0" }}>
            <div style={{ color: "#aaa", fontSize: "12px", marginBottom: "12px", alignSelf: "flex-start" }}>전력제어 계통도</div>

            {/* HV */}
            <Node label="HV" sub="22.9kV-Y 60Hz" color="#22c55e" />
            <Line />
            <Node label="LBS" sub="24kV 3P 630A" color="#22c55e" />
            <Line />

            {/* VCB 분기 */}
            <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Node label="VCB #1" sub="630A" color="#22c55e" />
                <Line />
                <Node label="TR 1" sub="22.9kV/380V" color="#22c55e" />
                <Line />
                <Node label="ACB #1" sub="1250A" color="#22c55e" />
                <Line />
                <Node label="TIE #1" sub="" color="#22c55e" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Node label="VCB #2" sub="630A" color="#22c55e" />
                <Line />
                <Node label="TR 2" sub="22.9kV/380V" color="#22c55e" />
                <Line />
                <Node label="ACB #2" sub="1250A" color="#ef4444" />
                <Line />
                <Node label="TIE #2" sub="" color="#22c55e" />
              </div>
              {/* 발전기 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "120px" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", border: "2px solid #22c55e", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#22c55e", fontSize: "18px" }}>G</div>
                <div style={{ color: "#aaa", fontSize: "11px", marginTop: "4px" }}>발전기</div>
              </div>
            </div>

            {/* FR-BUS */}
            <div style={{ display: "flex", gap: "40px", marginTop: "8px" }}>
              <div style={{ color: "#666", fontSize: "11px", textAlign: "center" }}>FR-BUS<br />3Φ4W 2500A</div>
              <div style={{ color: "#666", fontSize: "11px", textAlign: "center" }}>FR-BUS<br />3Φ4W 2500A</div>
            </div>
          </div>

          {/* 우측: 주요 수치 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

            {/* 핵심 수치 4개 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { label: "전체 수전량", value: "550", unit: "kWh" },
                { label: "현재 전력", value: "32", unit: "kW" },
                { label: "역률", value: "1.00", unit: "PF" },
                { label: "주파수", value: "60", unit: "Hz" },
              ].map((item) => (
                <div key={item.label} style={{ background: "#222", borderRadius: "8px", padding: "16px" }}>
                  <div style={{ color: "#aaa", fontSize: "12px", marginBottom: "6px" }}>{item.label}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontSize: "36px", fontWeight: "bold" }}>{item.value}</span>
                    <span style={{ color: "#aaa", fontSize: "14px" }}>{item.unit}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 구간별 데이터 테이블 */}
            <div style={{ background: "#222", borderRadius: "8px", padding: "16px", flex: 1 }}>
              <div style={{ color: "#aaa", fontSize: "12px", marginBottom: "12px" }}>구간별 계측 데이터</div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                  <tr style={{ color: "#666", borderBottom: "1px solid #333" }}>
                    <th style={{ textAlign: "left", padding: "6px 0" }}>구간</th>
                    <th style={{ textAlign: "right", padding: "6px 0" }}>전압(V)</th>
                    <th style={{ textAlign: "right", padding: "6px 0" }}>전류(A)</th>
                    <th style={{ textAlign: "right", padding: "6px 0" }}>전력(kW)</th>
                    <th style={{ textAlign: "right", padding: "6px 0" }}>상태</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "VCB #1", v: "380", a: "10.3", kw: "32", ok: true },
                    { name: "VCB #2", v: "380", a: "8.0", kw: "22", ok: true },
                    { name: "ACB #1", v: "375", a: "17.0", kw: "120", ok: true },
                    { name: "ACB #2", v: "0", a: "0", kw: "0", ok: false },
                  ].map((row) => (
                    <tr key={row.name} style={{ borderBottom: "1px solid #2a2a2a" }}>
                      <td style={{ padding: "8px 0" }}>{row.name}</td>
                      <td style={{ textAlign: "right", padding: "8px 0" }}>{row.v}</td>
                      <td style={{ textAlign: "right", padding: "8px 0" }}>{row.a}</td>
                      <td style={{ textAlign: "right", padding: "8px 0" }}>{row.kw}</td>
                      <td style={{ textAlign: "right", padding: "8px 0" }}>
                        <span style={{ color: row.ok ? "#22c55e" : "#ef4444", fontWeight: "bold" }}>
                          {row.ok ? "정상" : "이상"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Node({ label, sub, color }: { label: string; sub: string; color: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ border: `2px solid ${color}`, borderRadius: "4px", padding: "6px 12px", minWidth: "80px", textAlign: "center" }}>
        <div style={{ fontWeight: "bold", fontSize: "13px" }}>{label}</div>
        {sub && <div style={{ color: "#666", fontSize: "10px" }}>{sub}</div>}
      </div>
    </div>
  )
}

function Line() {
  return <div style={{ width: "2px", height: "16px", background: "#444" }} />
}
