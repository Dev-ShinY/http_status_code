"use client";

import { useEffect } from "react";

export default function Status() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data/100");
        console.log(response);
        if (response.ok) {
          const json = await response.json();
          console.log(json);
        } else {
          console.error("API 요청이 실패했습니다.");
        }
      } catch (error) {
        console.error("API 요청 중 오류가 발생했습니다.", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div>Hello world :D</div>
    </main>
  );
}
