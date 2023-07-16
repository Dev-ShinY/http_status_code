"use client";

import clsx from "clsx";
import Link from "next/link";
import "@/styles/globals.css";

export const Status = () => {
  const status = [
    {
      key: 1,
      des: "1xx 정보 응답",
      value: [
        { status: 100, description: "Continue" },
        { status: 101, description: "Switching Protocols" },
        { status: 102, description: "Processing" },
        { status: 103, description: "Early Hints" },
      ],
    },
    {
      key: 2,
      des: "2xx 성공 응답",
      value: [
        { status: 200, description: "OK" },
        { status: 201, description: "Created" },
        { status: 202, description: "Accepted" },
        { status: 203, description: "Non-Authoritative Information" },
        { status: 204, description: "No Content" },
        { status: 206, description: "Partial Content" },
        { status: 207, description: "Multi-Status" },
      ],
    },
    {
      key: 3,
      des: "3xx 리다이렉션 메시지",
      value: [
        { status: 300, description: "Multiple Choices" },
        { status: 301, description: "Moved Permanently" },
        { status: 302, description: "Found" },
        { status: 303, description: "See Other" },
        { status: 304, description: "Not Modified" },
        { status: 305, description: "Use Proxy" },
        { status: 307, description: "Temporary Redirect" },
        { status: 308, description: "Permanent Redirect" },
      ],
    },
    {
      key: 4,
      des: "4xx 클라이언트 에러 응답",
      value: [
        { status: 400, description: "Bad Request" },
        { status: 401, description: "Unauthorized" },
        { status: 402, description: "Payment Required" },
        { status: 403, description: "Forbidden" },
        { status: 404, description: "Not Found" },
        { status: 405, description: "Method Not Allowed" },
        { status: 406, description: "Not Acceptable" },
        { status: 407, description: "Proxy Authentication Required" },
        { status: 408, description: "Request Timeout" },
        { status: 409, description: "Conflict" },
        { status: 410, description: "Gone" },
        { status: 411, description: "Length Required" },
        { status: 412, description: "Precondition Failed" },
        { status: 413, description: "Payload Too Large" },
        { status: 414, description: "Request-URI Too Long" },
        { status: 415, description: "Unsupported Media Type" },
        { status: 416, description: "Request Range Not Satisfiable" },
        { status: 417, description: "Expectation Failed" },
        { status: 418, description: "I’m a teapot" },
        { status: 420, description: "Enhance Your Calm" },
        { status: 421, description: "Misdirected Request" },
        { status: 422, description: "Unprocessable Entity" },
        { status: 423, description: "Locked" },
        { status: 424, description: "Failed Dependency" },
        { status: 425, description: "Too Early" },
        { status: 426, description: "Upgrade Required" },
        { status: 428, description: "Precondition Required" },
        { status: 429, description: "Too Many Requests" },
        { status: 431, description: "Request Header Fields Too Large" },
        { status: 444, description: "No Response" },
        { status: 450, description: "Blocked by Windows Parental Controls" },
        { status: 451, description: "Unavailable For Legal Reasons" },
        { status: 497, description: "HTTP Request Sent to HTTPS Port" },
        { status: 498, description: "Token expired/invalid" },
        { status: 499, description: "Client Closed Request" },
      ],
    },
    {
      key: 5,
      des: "5xx 서버 에러 응답",
      value: [
        { status: 500, description: "Internal Server Error" },
        { status: 501, description: "Not Implemented" },
        { status: 502, description: "Bad Gateway" },
        { status: 503, description: "Service Unavailable" },
        { status: 504, description: "Gateway Timeout" },
        { status: 506, description: "Variant Also Negotiates" },
        { status: 507, description: "Insufficient Storage" },
        { status: 508, description: "Loop Detected" },
        { status: 509, description: "Bandwidth Limit Exceeded" },
        { status: 510, description: "Not Extended" },
        { status: 511, description: "Network Authentication Required" },
        { status: 521, description: "Web Server Is Down" },
        { status: 522, description: "Connection Timed Out" },
        { status: 523, description: "Origin Is Unreachable" },
        { status: 525, description: "SSL Handshake Failed" },
        { status: 530, description: "Site Frozen" },
        { status: 599, description: "Network Connect Timeout Error" },
      ],
    },
  ];

  return (
    <div className={clsx("flex", "flex-col", "my-20")}>
      {status.map((item) => (
        <div key={item.key} className={clsx()}>
          <div>
            <div
              className={clsx(
                "w-full",
                "border",
                "border-gray-200",
                "rounded",
                "p-5",
                "my-5",
                "cursor-pointer",
                "flex",
                "justify-between"
              )}
            >
              <span>{item.des}</span>
              <span>ㅁ</span>
            </div>

            <div className={clsx("grid", "md:grid-cols-3", "gap-5")}>
              {item.value.map((itemV) => (
                <div key={itemV.status}>
                  <Link href={`/status/${itemV.status}`} key={itemV.status}>
                    <div
                      className={clsx(
                        "bg-white",
                        "rounded-sm",
                        "cursor-pointer",
                        "hover-shadow"
                      )}
                    >
                      <div className={clsx("h-60")}></div>
                      <div className={clsx("bg-green-100", "p-4")}>
                        <p className={clsx("text-lg", "font-semibold")}>
                          {itemV.status}
                        </p>
                        <span className={clsx("font-light")}>
                          {itemV.description}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
