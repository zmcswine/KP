import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-chrome/80">© {year} KP. All rights reserved.</p>
          <p className="text-sm text-chrome/80">
            Built for Vercel • Pink / Silver / Black / White
          </p>
        </div>
      </Container>
    </footer>
  );
}
