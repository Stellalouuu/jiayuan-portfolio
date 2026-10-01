import Link from "next/link";

const navigation = [
  { label: "项目", href: "#work" },
  { label: "工程与科研", href: "#engineering" },
  { label: "关于我", href: "#about" },
  { label: "简历", href: "/resume" },
];

export function PortfolioNav() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="返回首页">朱家源</a>
      <nav aria-label="主导航">
        {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
    </header>
  );
}
