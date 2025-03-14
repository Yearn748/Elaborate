import { getAllSortedPosts, getPostBySlug } from "@/utils/getData";
import { BlogData } from "@/utils/getData";
import { postMeta } from "@/components/postcard";
import ContentWrapper from "@/components/contentWrapper";
import { getPostIdToSlug, getPostSlugToId } from "@/utils/getData";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
export const dynamicParams = false; // 禁用动态参数（纯静态生成）
// export const revalidate = 3600; // ISR 配置（单位：秒）
type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params;
    const decodeSlug = decodeURIComponent(slug);
    const post: BlogData = (await getPostBySlug(decodeSlug)) as BlogData;
    return {
        title: `${post.title}`,
        description: `${post.description}`,
    };
}

export default async function Post({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const decodeSlug = decodeURIComponent(slug);
    const post: BlogData = (await getPostBySlug(decodeSlug)) as BlogData;
    const PostSlugToId = await getPostSlugToId();
    const PostIdToSlug = await getPostIdToSlug();
    const nowId = PostSlugToId.get(decodeSlug)!;
    const prevPostId = nowId - 1;
    const nextPostId = nowId + 1;
    const prevSlug = prevPostId >= 0 ? PostIdToSlug.get(prevPostId) : "#";
    const nextSlug =
        nextPostId < PostIdToSlug.size ? PostIdToSlug.get(nextPostId) : "#";
    return (
        <>
            <div className="card-base p-8 divide-y divide-dashed transition ease-in-out">
                <div className="relative flex flex-col mb-4">
                    <h1 className="block w-full font-bold text-3xl transition line-clamp-2 text-center mb-3">
                        {post.title}
                    </h1>

                    {postMeta({
                        className:
                            "flex justify-center items-center text-neutral-500 gap-x-4",
                        published: post.date,
                        category: post.category,
                        tags: post.tags,
                    })}
                </div>
                <ContentWrapper
                    contentHtml={post.contentHtml}
                    className="pt-2"
                ></ContentWrapper>
            </div>
            <div className="flex w-full font-bold mt-4 overflow-hidden flex-col gap-4 md:flex-row md:justify-between">
                {prevSlug != "#" && (
                    <Link
                        href={`/post/${prevSlug}`}
                        className="flex w-full items-center px-4 gap-4 bg-white rounded-2xl h-[3.75rem]"
                    >
                        <svg
                            height="1em"
                            width="1em"
                            viewBox="0 0 24 24"
                            className="text-[2rem] text-sky-500"
                        >
                            <use href="#ai:material-symbols:chevron-left-rounded"></use>
                        </svg>
                        <div>{prevSlug}</div>
                    </Link>
                )}
                {nextSlug != "#" && (
                    <Link
                        href={`/post/${nextSlug}`}
                        className="flex flex-row-reverse w-full items-center px-4 gap-4 bg-white rounded-2xl h-[3.75rem]"
                    >
                        <svg
                            height="1em"
                            width="1em"
                            viewBox="0 0 24 24"
                            className="text-[2rem] text-sky-500"
                        >
                            <use href="#ai:material-symbols:chevron-right-rounded"></use>
                        </svg>
                        <div className="text-back/75 overflow-hidden text-base whitespace-nowrap">
                            {nextSlug}
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
}
export async function generateStaticParams() {
    const posts = await getAllSortedPosts();
    return posts.map((post) => ({ slug: post.slug }));
}
