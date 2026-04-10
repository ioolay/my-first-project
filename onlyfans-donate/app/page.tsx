"use client";

import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState("00");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-10 sm:px-10">
        <header className="flex flex-col items-center gap-4 text-center sm:gap-6">
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
            <span className="text-emerald-50">Only</span>
            <span className="text-sky-400">Sergei</span>
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            The easiest way to send Sergei Chestakov a payment to show your support for him
            and his work in technology, startups, and beyond.
          </p>
        </header>

        <main className="mx-auto w-full rounded-[2rem] bg-white/95 px-6 py-8 shadow-[0_40px_120px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:px-10 sm:py-10">
          <div className="mx-auto flex max-w-2xl flex-col gap-8">
            <div className="flex items-center justify-between rounded-3xl bg-slate-950/5 p-5 shadow-sm ring-1 ring-slate-200/30">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
                  Send a payment
                </p>
              </div>
              <div className="hidden rounded-full bg-slate-900/5 px-4 py-2 text-sm text-slate-600 sm:block">
                sergei.com
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200/80 bg-slate-50 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <div className="flex items-center justify-center gap-4 rounded-[1.75rem] border border-slate-200/80 bg-white px-4 py-4 sm:px-6">
                <span className="text-4xl font-semibold text-slate-900">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value.replace(/[^0-9]/g, ""))}
                  className="w-24 bg-transparent text-center text-6xl font-bold text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="00"
                />
                <div className="flex h-12 w-10 flex-col items-center justify-between rounded-full bg-slate-100 p-1 text-slate-500">
                  <button
                    type="button"
                    onClick={() => setAmount((prev) => String(Math.min(999, Number(prev) + 1)).padStart(2, "0"))}
                    className="h-5 w-full rounded-lg bg-slate-200 hover:bg-slate-300"
                  />
                  <button
                    type="button"
                    onClick={() => setAmount((prev) => String(Math.max(0, Number(prev) - 1)).padStart(2, "0"))}
                    className="h-5 w-full rounded-lg bg-slate-200 hover:bg-slate-300"
                  />
                </div>
              </div>

              <p className="mt-4 text-center text-sm text-rose-600">Minimum amount is $0.50</p>

              <button className="mt-8 w-full rounded-3xl bg-sky-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-600">
                Continue
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
