import Link from "next/link";

export function PortfolioFooter() {
  return <footer className="site-footer section-shell"><div><p className="wordmark">朱家源 <span>· Jiayuan Zhu</span></p><p className="footer-note">AI 产品 × 工程技术</p></div><nav className="footer-contact" aria-label="联系方式"><a href="mailto:zhujiayuan22@163.com"><span>邮箱</span>zhujiayuan22@163.com</a><a href="https://github.com/Stellalouuu" target="_blank" rel="noopener noreferrer"><span>GitHub</span>GitHub <b aria-hidden="true">→</b></a><Link href="/resume"><span>简历</span>查看简历 <b aria-hidden="true">→</b></Link></nav><p className="copyright">© 2026 Jiayuan Zhu</p></footer>;
}
