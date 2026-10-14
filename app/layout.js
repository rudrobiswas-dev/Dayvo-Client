import "./globals.css";

export const metadata = {
  title: "Dayvo | Make Every Day Count",
  description: "Track daily habits, fitness, reminders, and personal growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="forest">
      <body>{children}</body>
    </html>
  );
}
