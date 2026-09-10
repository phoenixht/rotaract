"use client";

export default function IframeForm({ src, title }: { src: string; title: string }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white">
      <iframe
        src={src}
        title={title}
        className="w-full min-h-[800px]"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        allowFullScreen
      >
        Loading…
      </iframe>
    </div>
  );
}
