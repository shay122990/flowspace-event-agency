export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-8 text-sm text-white/60">
        © {new Date().getFullYear()} FlowSpace. All rights reserved.
      </div>
    </footer>
  );
}
