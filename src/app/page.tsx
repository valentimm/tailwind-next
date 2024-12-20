import { Mail, UploadCloud, User } from 'lucide-react'
import { SettingsTabs } from './components/SettingsTabs'
import * as Input from '@/app/components/Input'

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

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control defaultValue="Matheus" id="firstName" />
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue="Valentim" id="lastName" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control
                  defaultValue="matheus.valentim@gmail.com"
                  type="email"
                  id="email"
                />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
                  <User className="h-8 w-8 text-violet-500" />
                </div>

                <label
                  htmlFor="photo"
                  className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200  hover:bg-violet-25 hover:text-violet-500"
                >
                  <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
                    <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-sm">
                      <span className="font-semibold text-violet-700">
                        Click to upload
                      </span>{' '}
                      or drag and drop
                    </span>
                    <span className="text-xs">
                      SVG, PNG, JPG, GIF (max. 800x400px)
                    </span>
                  </div>
                </label>
                <input type="file" id="photo" className="sr-only" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="role" defaultValue="Software Engineer" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <div></div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <div></div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="grid grid-cols-2 gap-6">
              <div></div>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="portfolio"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Shate a few snippets of your work.
              </span>
            </label>
            <div className="grid grid-cols-2 gap-6">
              <div></div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              className="hover:violet-700 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
