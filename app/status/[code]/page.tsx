"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Status({ params }: { params: { code: number } }) {
  const [resData, setResData] = useState<{
    key: number;
    title: string;
    des: string;
  }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/data/${params.code}`);
        if (response.ok) {
          const json = await response.json();
          setResData(json.key);
        } else {
          console.error("API 요청이 실패했습니다.");
        }
      } catch (error) {
        console.error("API 요청 중 오류가 발생했습니다.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main
      className={clsx(
        "min-h-screen",
        "py-24",
        "flex",
        "items-center",
        "flex-col"
      )}
    >
      <div
        className={clsx(
          "md:w-[760px]",
          "flex",
          "items-center",
          "flex-col",
          "px-5"
        )}
      >
        <h1 className={clsx("text-3xl", "font-bold")}>{resData?.title}</h1>
        <Image
          src={`https://http.cat/${resData?.key}`}
          width={260}
          height={260}
          alt="status img"
          className={clsx("w-full", "md:w-[600px]", "m-10", "object-cover")}
        />
        <div>
          <div className={clsx("text-xl", "font-bold", "mb-5")}>
            Description
          </div>
          <p>{resData?.des}</p>
        </div>
      </div>
    </main>
  );
}
