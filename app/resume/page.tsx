import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "朱家源 | 简历",
  description: "朱家源的个人简历。",
};

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-header resume-shell">
        <Link className="resume-back" href="/">← 返回首页</Link>
        <div className="resume-heading">
          <h1>简历</h1>
          <a className="resume-download" href="/resume.pdf" download>下载 PDF <span aria-hidden="true">↓</span></a>
        </div>
      </header>
      <section className="resume-viewer resume-shell" aria-label="简历 PDF 预览">
        <iframe src="/resume.pdf" title="朱家源简历 PDF" />
        <div className="resume-fallback">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">查看 PDF</a>
          <a href="/resume.pdf" download>下载简历</a>
        </div>
      </section>
    </main>
  );
}