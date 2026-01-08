import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EditEventDialog({
  open,
  onOpenChange,
  event,
  onSave,
}) {
  const [form, setForm] = useState({
    name: "",
    date: "",
    price: "",
    quota: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (event) {
      setForm(event);
    }
  }, [event]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <Input name="name" value={form.name} onChange={handleChange} placeholder="Nama Event" />
          <Input type="date" name="date" value={form.date} onChange={handleChange} />
          <Input name="price" value={form.price} onChange={handleChange} placeholder="Harga" />
          <Input name="quota" value={form.quota} onChange={handleChange} placeholder="Kuota" />
          <Textarea name="description" value={form.description} onChange={handleChange} placeholder="Detail Event" />
          <Input name="image" value={form.image} onChange={handleChange} placeholder="URL Gambar" />
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Batal
          </Button>
          <Button
            onClick={() => {
              onSave(form);
              onOpenChange(false);
            }}
          >
            Simpan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
