import React from "react";
import { getAllPage, getPageById } from "@/utils/pages";
import PageCreate from "@/components/pageCreate";
export const dynamicParams = false; // 禁用动态参数（纯静态生成）
export const revalidate = 3600; // ISR 配置（单位：秒）

export async function generateStaticParams() {
    const pages = await getAllPage();
    
    return pages.map(item => ({
      id: item.id.toString()
    }));
  }
export default async function page({params : {id}} : { params : {id: string}}) {
    const pages = await getPageById(Number(id));
    return(
        <PageCreate pages={pages.content} id={Number(id)}></PageCreate>
    )
}
