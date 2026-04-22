import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blog";
import { generateBlogMetadata } from "@/lib/metadata";
import { buildArticleSchema } from "@/lib/schema";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams(): { slug: string }[] {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: "Yazı bulunamadı" };
  }
  return generateBlogMetadata(post);
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

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="pb-28">
      <JsonLd schema={buildArticleSchema(post)} />

      <div className="mx-auto max-w-3xl px-4 pt-6 pb-4">
        <BreadcrumbNav
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: post.title.slice(0, 48) + (post.title.length > 48 ? "…" : ""), href: `/blog/${post.slug}` },
          ]}
        />
      </div>

      <article className="mx-auto max-w-3xl px-4 pb-12">
        <header className="border-b border-border pb-8">
          <p className="text-sm font-medium text-mid">
            {post.category} · {formatDate(post.publishDate)}
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold text-primary md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{post.description}</p>
        </header>

        <div
          className="blog-post pt-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <p className="mt-10">
          <Link
            href="/blog"
            className="text-sm font-semibold text-mid hover:underline"
          >
            ← Tüm yazılar
          </Link>
        </p>
      </article>
    </main>
  );
}
