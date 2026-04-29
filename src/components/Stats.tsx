const stats = [
  { num: '390+', label: 'Indigenous Partners Equipped' },
  { num: '5.5M+', label: 'Unique Responders Engaged' },
  { num: '17,394', label: 'Joined Christian Community' },
  { num: '8', label: 'International Follow-Up Centres' },
  { num: '290+', label: 'Certified Trainers' },
]

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="section-inner">
        <div className="stats-section-tag">A Decade of Proven Impact</div>
        <p className="stats-section-lead">
          MII has spent more than ten years building the infrastructure, training, and relationships
          that turn digital engagement into genuine discipleship — around the world.
        </p>
        <div className="stats-section-grid">
          {stats.map((s) => (
            <div className="stats-section-item" key={s.num}>
              <div className="stats-section-num">{s.num}</div>
              <div className="stats-section-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
