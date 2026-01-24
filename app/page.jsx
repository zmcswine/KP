import PressGallery from '../components/PressGallery';

export default function Page() {
  return (
    <main>
      <header className="header">
        <h1 className="title">KP</h1>
        <p className="subtitle">Press Photos</p>
      </header>

      <section className="section">
        <h2 className="h2">Press Photos</h2>
        <p className="muted">Swipe left/right on mobile (or use the arrows) to view photos.</p>
        <PressGallery />
      </section>

      <section className="section">
        <h2 className="h2">Booking & Contact</h2>
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
        </div>
      </section>

      <footer className="footer">
        <span className="muted">© {new Date().getFullYear()} KP</span>
      </footer>
    </main>
  );
}
