import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function EventForm({ onSubmit, setForm, form }) {
  return (
    <div className="bg-background p-6 rounded-lg shadow max-w-xl">
      <h2 className="font-bold text-lg text-[#5C3A21] mb-4">
        Tambah Event
      </h2>

      {/* NAMA EVENT */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#5C3A21] mb-1">
          Nama Event
        </label>
        <Input
          value={form.name || ""}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
      </div>

      {/* TANGGAL */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#5C3A21] mb-1">
          Tanggal
        </label>
        <Input
          type="date"
          value={form.date || ""}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />
      </div>

      {/* HARGA */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#5C3A21] mb-1">
          Harga
        </label>
        <Input
          type="number"
          value={form.price || ""}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />
      </div>

      {/* KUOTA */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#5C3A21] mb-1">
          Kuota
        </label>
        <Input
          type="number"
          value={form.quota || ""}
          onChange={(e) =>
            setForm({ ...form, quota: e.target.value })
          }
        />
      </div>

      {/* IMAGE */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#5C3A21] mb-1">
          URL Image
        </label>
        <Input
          value={form.image || ""}
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />
      </div>

      {/* DESKRIPSI EVENT */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#5C3A21] mb-1">
          Detail / Deskripsi Event
        </label>
        <Textarea
          rows={4}
          value={form.description || ""}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />
      </div>

      <Button
        onClick={onSubmit}
        className="bg-[#5C3A21] hover:bg-[#8B5E3C]"
      >
        Simpan
      </Button>
    </div>
  )
}
