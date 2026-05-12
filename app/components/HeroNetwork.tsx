import styles from "./HeroNetwork.module.css";

const NODES: Array<{ id: string; x: number; y: number; r?: number; cls: string }> = [
  { id: "n1",  x: -30,  y: -150, cls: styles.n1  },
  { id: "n2",  x:  100, y: -115, cls: styles.n2  },
  { id: "n3",  x:  155, y:  -20, cls: styles.n3  },
  { id: "n4",  x:  135, y:   85, cls: styles.n4  },
  { id: "n5",  x:   45, y:  150, cls: styles.n5  },
  { id: "n6",  x:  -65, y:  145, cls: styles.n6  },
  { id: "n7",  x: -145, y:   70, cls: styles.n7  },
  { id: "n8",  x: -160, y:  -30, cls: styles.n8  },
  { id: "n9",  x: -115, y: -110, cls: styles.n9  },
  { id: "n10", x:  -55, y:  -40, cls: styles.n10 },
  { id: "n11", x:   65, y:   25, cls: styles.n11 },
  { id: "n12", x:  -25, y:   70, cls: styles.n12 },
];

const EDGES: Array<[string, string, boolean?]> = [
  ["hub", "n1", true], ["hub", "n3", true], ["hub", "n5", true], ["hub", "n7", true],
  ["hub", "n10"], ["hub", "n11"], ["hub", "n12"],
  ["n1", "n2"], ["n2", "n3"], ["n3", "n4"], ["n4", "n5"], ["n5", "n6"],
  ["n6", "n7"], ["n7", "n8"], ["n8", "n9"], ["n9", "n1"],
  ["n10", "n9"], ["n10", "n2"], ["n11", "n3"], ["n11", "n4"],
  ["n12", "n6"], ["n12", "n8"], ["n10", "n12"], ["n11", "n12"],
];

const HUB = { x: 0, y: 0 };

const PACKETS: Array<{ from: string; to: string; dur: number; delay: number }> = [
  { from: "n1",  to: "hub", dur: 2.4, delay: 0 },
  { from: "hub", to: "n4",  dur: 2.6, delay: 0.8 },
  { from: "n7",  to: "hub", dur: 2.2, delay: 1.4 },
  { from: "hub", to: "n2",  dur: 2.8, delay: 2.1 },
  { from: "n5",  to: "n12", dur: 2.0, delay: 0.4 },
];

function pointOf(id: string) {
  if (id === "hub") return HUB;
  const n = NODES.find((n) => n.id === id);
  if (!n) throw new Error(`unknown node ${id}`);
  return { x: n.x, y: n.y };
}

export default function HeroNetwork() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.glow} />
      <svg
        className={styles.svg}
        viewBox="-200 -200 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hn-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#7aa5f8" />
            <stop offset="55%" stopColor="#2366f0" />
            <stop offset="100%" stopColor="#1a4fc4" />
          </radialGradient>
        </defs>

        {/* edges */}
        <g>
          {EDGES.map(([a, b, strong], i) => {
            const p1 = pointOf(a);
            const p2 = pointOf(b);
            return (
              <line
                key={i}
                x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
                className={`${styles.edge} ${strong ? styles.edgeStrong : ""}`}
              />
            );
          })}
        </g>

        {/* hub expanding rings */}
        <g>
          <circle className={`${styles.hubRing} ${styles.ring1}`} cx="0" cy="0" r="18" />
          <circle className={`${styles.hubRing} ${styles.ring2}`} cx="0" cy="0" r="18" />
          <circle className={`${styles.hubRing} ${styles.ring3}`} cx="0" cy="0" r="18" />
        </g>

        {/* peripheral nodes */}
        <g>
          {NODES.map((n) => (
            <g key={n.id}>
              <circle cx={n.x} cy={n.y} r={12} className={styles.nodeOuter} />
              <circle cx={n.x} cy={n.y} r={4.5} className={`${styles.node} ${n.cls}`} />
            </g>
          ))}
        </g>

        {/* central hub */}
        <circle cx={HUB.x} cy={HUB.y} r="11" className={styles.hub} />

        {/* data packets travelling along edges */}
        <g>
          {PACKETS.map((p, i) => {
            const from = pointOf(p.from);
            const to = pointOf(p.to);
            return (
              <circle key={i} r="2.5" className={styles.packet}>
                <animate
                  attributeName="cx"
                  from={from.x} to={to.x}
                  dur={`${p.dur}s`} begin={`${p.delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  from={from.y} to={to.y}
                  dur={`${p.dur}s`} begin={`${p.delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.9;1"
                  dur={`${p.dur}s`} begin={`${p.delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
