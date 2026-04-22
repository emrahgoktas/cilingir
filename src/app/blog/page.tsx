import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { BLOG_POSTS } from "@/data/blog";
import { generateBlogIndexMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  return generateBlogIndexMetadata();
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function BlogIndexPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <main className="pb-28">
      <div className="mx-auto max-w-3xl px-4 pt-6 pb-4">
        <BreadcrumbNav
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Blog", href: "/blog" },
          ]}
        />
      </div>

      <section className="border-b border-border bg-white px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            İstanbul Çilingir Blog
          </h1>
          <p className="mt-4 text-muted md:text-lg">
            Kapı açma, kilit güvenliği ve acil durumlar için rehber yazıları.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 md:py-14">
        <ul className="mx-auto flex max-w-3xl list-none flex-col gap-4">
          {sorted.map((post) => (
            <li key={post.slug}>
              <article className="rounded-lg border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <p className="text-xs font-medium uppercase tracking-wide text-mid">
                  {post.category} · {formatDate(post.publishDate)}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-primary md:text-xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-mid hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-block text-sm font-semibold text-mid hover:underline"
                >
                  Devamını oku →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
