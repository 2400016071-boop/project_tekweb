import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ProfileAdmin() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* ================= LEFT PROFILE (40%) ================= */}
      <div className="col-span-5">
        <Card>
          <CardContent className="flex flex-col items-center text-center p-8">
            {/* FOTO */}
            <img src="https://ui-avatars.com/api/?name=Admin+Event&background=5C3A21&color=fff" alt="Profile"
            className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-[#5C3A21]"/>


            {/* NAMA */}
            <h2 className="text-xl font-bold text-[#5C3A21]">
              Admin Event
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              @admin_event
            </p>

            {/* INFO */}
            <div className="w-full space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span className="font-semibold text-green-600">Aktif</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Terdaftar</span>
                <span className="font-medium">12 Jan 2024</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Jabatan</span>
                <span className="font-medium">Administrator</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Password</span>
                <span className="font-medium">********</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ================= RIGHT CONTENT (60%) ================= */}
      <div className="col-span-7 space-y-6">
        {/* ===== ACCOUNT SETTINGS ===== */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#5C3A21] mb-4">
              Pengaturan Akun
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label>Nama Depan</Label>
                <Input placeholder="Admin" />
              </div>
              <div>
                <Label>Nama Belakang</Label>
                <Input placeholder="Event" />
              </div>
            </div>

            <div className="mb-4">
              <Label>Email</Label>
              <Input type="email" placeholder="admin@email.com" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Nomor Telepon</Label>
                <Input placeholder="08xxxxxxxxxx" />
              </div>
              <div>
                <Label>Jabatan / Posisi</Label>
                <Input placeholder="Administrator" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ===== SECURITY ===== */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#5C3A21] mb-4">
              Keamanan & Password
            </h3>

            <div className="space-y-4">
              <div>
                <Label>Password Saat Ini</Label>
                <Input
                  type="password"
                  value="admin123"
                  disabled
                />
              </div>

              <div>
                <Label>Password Baru</Label>
                <Input type="password" />
              </div>

              <div>
                <Label>Konfirmasi Password</Label>
                <Input type="password" />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline">Batal</Button>
              <Button className="bg-[#5C3A21] hover:bg-[#7a4a2a]">
                Simpan Perubahan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
