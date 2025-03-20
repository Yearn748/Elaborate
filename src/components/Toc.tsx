import { getPostBySlug, TocItem } from "@/utils/getData";
import ScrollBar from "@/components/scrollbar";
import TocClient from "./TocClient";
export default async function Toc({
    slug,
}: {
    slug: string; //转码后的
}) {
    const tocData = (await getPostBySlug(slug)).toc as TocItem[];
    return (
        <div className="card-base">
            <div className="flex flex-col items-center gap-1 justify-center">
                <div className="mt-2 text-lg font-bold">目录</div>
                <div className="w-5 h-1 rounded-md bg-sky-500"></div>

                <div
                    id="toc-container"
                    className="w-full overflow-scroll scroll-container  mt-2 px-2 pb-2 transition max-h-[calc(100vh-33rem)]"
                >
                    {tocData.map((item, index) => (
                        <Tocitem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
            <TocClient />
        </div>
    );
}
const Tocitem = ({ item, index }: { item: TocItem; index: number }) => (
    <a
        href={`#${item.id}`}
        data-target-id={item.id}
        className="p-2 flex gap-2 relative transition w-full h-9 rounded-xl
        hover:bg-sky-200 active:bg-sky-200 group"
    >
        <div
            className={`transition ${
                index === 0 ? "" : "toc-dash-line"
            } w-5 h-5 shrink-0 rounded-lg text-xs flex items-center justify-center font-bold`}
        >
            {item.depth <= 3 ? (
                <div className="transition group-hover:scale-125 group-active:scale-125 z-10 w-2 h-2 rounded-[0.1875rem] bg-[var(--primary)]"></div>
            ) : (
                <div className="transition group-hover:scale-125 group-active:scale-125 z-10 w-1.5 h-1.5 rounded-sm bg-[var(--primary)] "></div>
            )}
        </div>
        <div
            className="transition group-hover:text-sky-600 group-active:text-sky-600 text-sm overflow-hidden whitespace-nowrap text-overflow-ellipsis"
            style={{ paddingLeft: `${(item.depth - 1) * 0.5}rem` }}
        >
            {item.text}
        </div>
    </a>
);
