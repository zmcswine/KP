export default function ContactBlock() {
  return (
    <div className="card">
      <div className="row">
        <span className="label">Email</span>
        <a className="link" href="mailto:7mdoran7m@gmail.com">7mdoran7m@gmail.com</a>
      </div>
      <div className="row">
        <span className="label">Phone</span>
        <a className="link" href="tel:+14042875969">+1 (404) 287-5969</a>
      </div>
      <div className="row">
        <span className="label">Instagram</span>
        <a className="link" href="https://instagram.com/7Ment" target="_blank" rel="noreferrer">@7Ment</a>
      </div>

      <div className="cta">
        <a className="btn" href="mailto:7mdoran7m@gmail.com?subject=Booking%20Request%20-%20KP">
          Book Now
        </a>
      </div>

      <style jsx>{`
        .card {
          width: 100%;
          max-width: 760px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          padding: 18px;
        }
        .row {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          padding: 12px 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }
        .row:last-of-type {
          border-bottom: none;
        }
        .label {
          color: rgba(255, 255, 255, 0.72);
        }
        .link {
          color: rgba(255, 255, 255, 0.95);
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 79, 216, 0.55);
        }
        .link:hover {
          border-bottom-color: rgba(255, 79, 216, 1);
        }
        .cta {
          display: flex;
          justify-content: center;
          margin-top: 16px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255, 79, 216, 0.9);
          color: #0b0208;
          font-weight: 700;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        .btn:hover {
          filter: brightness(1.05);
        }
      `}</style>
    </div>
  );
}
