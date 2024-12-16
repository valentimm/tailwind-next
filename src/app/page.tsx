import { SettingsTabs } from './components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="font-md text-3xl text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-6">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              className="hover:violet-700 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>

        <form id="settings" className="mt-6 flex w-full flex-col"></form>
      </div>
    </>
  )
}
